import { Theme } from "@emotion/react";
import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme, Typography, useMediaQuery } from "@mui/material";

interface IFerramentasDeDetalhePrpos {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarSavlarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarSavlarEFecharCarregando?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalhePrpos> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarSavlarEFechar = false,

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarSavlarEFecharCarregando = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            gap={1}
            alignItems="center"
            component={Paper}
        >
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow="ellipsis" overflow="hidden">
                        Salvar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoSalvarCarregando && (
                <Skeleton width={110} height={60} />
            )}

            {(mostrarSavlarEFechar && !mostrarSavlarEFecharCarregando && !smDown && !mdDown) && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow="ellipsis" overflow="hidden">
                        Salvar e fechar
                    </Typography>
                </Button>
            )}
            {(mostrarSavlarEFecharCarregando && !smDown && !mdDown) && (
                <Skeleton width={180} height={60} />
            )}


            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow="ellipsis" overflow="hidden">
                        Apagar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoApagarCarregando && (
                <Skeleton width={110} height={60} />
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow="ellipsis" overflow="hidden">
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}
            {(mostrarBotaoNovoCarregando && !smDown) && (
                <Skeleton width={110} height={60} />
            )}

            {
                (
                    mostrarBotaoVoltar &&
                    (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarSavlarEFechar)
                ) && (
                    <Divider variant='middle' orientation='vertical' />
                )
            }

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >
                    <Typography variant="button" whiteSpace='nowrap' textOverflow="ellipsis" overflow="hidden">
                        Voltar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoVoltarCarregando && (
                <Skeleton width={110} height={60} />
            )}
        </Box>
    );
};