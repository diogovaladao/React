import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoasServices } from "../../shared/services/api/pessoas/PessoasServices";

export const ListagemDePessoas: React.FC= () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);

    useEffect(() => {
        /* usr o then traz o tipo do erro*/
        PessoasServices.getAll(1, busca).then((result) => { 
            if (result instanceof Error) {
                alert(result.message);
            } else {
                console.log(result);
            }
        })
    }, [busca]);

    return(
        <LayoutBaseDePagina
        titulo="Listagem de pessoas"
        barraDeFerramentas={<FerramentasDaListagem
            mostraInputBusca
            textoBotaoNovo="Nova"
            textoDeBusca={busca}
            aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
        />}
        >

        </LayoutBaseDePagina>
    );
};