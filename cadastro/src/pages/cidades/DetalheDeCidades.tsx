import { useEffect, useState } from "react";
import{ Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from 'yup';

import { CidadesServices } from "../../shared/services/api/cidades/CidadesServices";
import { VTextField, VForm, useVForm, IVFormErros } from "../../shared/forms";
import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


interface IFomrData {
    nome: string;
}

//biblioteca de validação de formulários
const formValidationSchema: yup.SchemaOf<IFomrData> = yup.object().shape({
    nome: yup.string().required().min(3),
});

export const DetalheDeCidades: React.FC = () => {
    /* o useParams abaixo pega a parte final da url para decidir se é alteração ou criação */
    const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            CidadesServices.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/cidades');
                    } else {
                        setNome(result.nome)
                        formRef.current?.setData(result)
                    }
                });
        } else {
            formRef.current?.setData({
                nome: '',                
            });
        }
    }, [id]);

    const handleSave = (dados: IFomrData) => {
        formValidationSchema.validate(dados, { abortEarly: false })
            .then((dadosVlidados) => {
                setIsLoading(true);
                if (id === 'nova') {
                    CidadesServices.creat(dadosVlidados)
                        .then((result) => {
                            setIsLoading(false);
                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/cidades');
                                } else {
                                    navigate(`/cidades/detalhe/${result}`);
                                }
                            }
                        });
                } else {
                    CidadesServices.updateById(Number(id), { id: Number(id), ...dadosVlidados })
                        .then((result) => {
                            setIsLoading(false);
                            if (result instanceof Error) {
                                alert(result.message);
                            } else {
                                if (isSaveAndClose()) {
                                    navigate('/cidades');
                                }
                            }
                        });
                }
            })
            .catch((errors: yup.ValidationError) => {
                const validationErrors: IVFormErros = {};
                errors.inner.forEach(error => {
                    if (!error.path) return;

                    validationErrors[error.path] = error.message;
                });
                formRef.current?.setErrors(validationErrors);
            });
    }

    const handleDelete = (id: number) => {
        if (confirm('Realmente deseja apagar?')) {
            CidadesServices.delteById(id).then(result => {
                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    alert('Registro apagado com sucesso!')
                    navigate('/cidades');
                }
            });
        }
    };

    return (
        <LayoutBaseDePagina
            titulo={id === 'nova' ? 'Nova Cidade' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo='Nova'
                    mostrarBotaoSavlarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvar={save}
                    aoClicarEmSalvarEFechar={saveAndClose}
                    aoClicarEmVoltar={() => navigate('/cidades')}
                    aoClicarEmApagar={() => { handleDelete(Number(id)) }}
                    aoClicarEmNovo={() => navigate('/cidades/detalhe/nova')}
                />
            }
        >

            <VForm ref={formRef} onSubmit={handleSave} >
                <Box margin={1} display="flex" flexDirection="column" component={Paper} variant="outlined">

                    <Grid container direction="column" padding={2} spacing={2}>
                        {isLoading && (
                            <Grid item>
                                <LinearProgress variant="indeterminate" />
                            </Grid>
                        )}

                        <Grid item>
                            <Typography variant="h6">Geral</Typography>
                        </Grid>

                        <Grid container item direction="row">
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                <VTextField
                                    fullWidth
                                    name="nome"
                                    label="Nome"
                                    disabled={isLoading}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                    </Grid>

                </Box>
            </VForm>
        </LayoutBaseDePagina>
    );
}