import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../../shared/hooks";
import { CidadesServices } from "../../../shared/services/api/cidades/CidadesServices";


type TAutoCompleteOption = {
    id: number,
    label: string;
}

interface IAutoCompliteCidadeProps {
    isExternalLoading?: boolean;
}

export const AutoCompliteCidade: React.FC<IAutoCompliteCidadeProps> = ({ isExternalLoading = false }) => {
    const { fieldName, registerField, defaultValue, error, clearError } = useField('cidadeId');
    const { debounce } = useDebounce();

    const [selectedId, setSelectedId] = useState<Number | undefined>(defaultValue);
    const [opcoes, setOpcoes] = useState<TAutoCompleteOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        registerField({
            name: fieldName,
            getValue: () => selectedId,
            setValue: (_, newSelectedId) => setSelectedId(newSelectedId),
        })
        //console.log(fieldName)
    }, [fieldName, fieldName, setSelectedId]);

    useEffect(() => {
        setIsLoading(true);

        debounce(() => {
            /* usr o then trás o tipo do erro*/
            CidadesServices.getAll(1, busca).then((result) => {
                setIsLoading(false);
                if (result instanceof Error) {
                    //alert(result.message);
                } else {
                    console.log(result);
                    setOpcoes(result.data.map(cidade => ({ id: cidade.id, label: cidade.nome })));
                }
            })
        });
    }, [busca]);

    const autoCompleteSelectedOption = useMemo(() => {
        if (!selectedId) return null;
        const selectedOption = opcoes.find(opcao => opcao.id === selectedId);
        if (!selectedOption) return;
        console.log("id da cidade selecionada é: " + selectedId);

        return selectedOption;
    }, [selectedId, opcoes])

    return (
        <Autocomplete
            openText="Abrir"
            closeText="Fechar"
            noOptionsText="Sem opções"
            loadingText="Carregando..."
            disablePortal

            options={opcoes}
            loading={isLoading}
            disabled={isExternalLoading}
            value={autoCompleteSelectedOption}
            onInputChange={(_, newValue) => setBusca(newValue)}
            popupIcon={isExternalLoading || isLoading ? <CircularProgress size={28} /> : undefined}
            onChange={(_, newValue) => { setSelectedId(newValue?.id); setBusca(''); clearError(); }}
            renderInput={(params) => (
                <TextField
                    {...params}

                    label="Cidade"
                    error={!!error}
                    helperText={error}
                />
            )}
        />
    );
};