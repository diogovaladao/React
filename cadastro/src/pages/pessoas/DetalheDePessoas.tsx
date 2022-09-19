import { useEffect, useState } from "react";
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { PessoasServices } from "../../shared/services/api/pessoas/PessoasServices";
import { VTextField, VForm, useVForm } from "../../shared/forms";
import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


interface IFomrData {
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

export const DetalheDePessoas: React.FC = () => {
    /* o useParams abaixo pega a parte final da url para decidir se é alteração ou criação */
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const { formRef, save, saveAndClose, isSaveAndClose } = useVForm();

    useEffect(() => {
        if (id !== 'nova') {
            setIsLoading(true);

            PessoasServices.getById(Number(id))
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                        navigate('/pessoas');
                    } else {
                        setNome(result.nomeCompleto)
                        formRef.current?.setData(result)
                    }
                });
        } else {
            formRef.current?.setData({
                nomeCompleto: '',
                cidadeId: '',
                email: '',
            });
        }
    }, [id]);

    const handleSave = (dados: IFomrData) => {
        setIsLoading(true);
        if (id === 'nova') {
            PessoasServices.creat(dados)
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        if (isSaveAndClose()) {
                            navigate('/pessoas');
                        } else {
                            navigate(`/pessoas/detalhe/${result}`);
                        }
                    }
                });
        } else {
            PessoasServices.updateById(Number(id), { id: Number(id), ...dados })
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
                    } else {
                        if (isSaveAndClose()) {
                            navigate('/pessoas');
                        }
                    }
                });
        }
    }

    const handleDelete = (id: number) => {
        if (confirm('Realmente deseja apagar?')) {
            PessoasServices.delteById(id).then(result => {
                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    alert('Registro apagado com sucesso!')
                    navigate('/pessoas');
                }
            });
        }
    };

    return (
        <LayoutBaseDePagina
            titulo={id === 'nova' ? 'Nova Pessoa' : nome}
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo='Nova'
                    mostrarBotaoSavlarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvar={save}
                    aoClicarEmSalvarEFechar={saveAndClose}
                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmApagar={() => { handleDelete(Number(id)) }}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
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
                                    label="Nome completo"
                                    name="nomeCompleto"
                                    disabled={isLoading}
                                    onChange={e => setNome(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                        <Grid container item direction="row">
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                <VTextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>

                        <Grid container item direction="row">
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                <VTextField
                                    fullWidth
                                    label="Cidade"
                                    name="cidadeId"
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>

                    </Grid>

                </Box>
            </VForm>
        </LayoutBaseDePagina>
    );
}