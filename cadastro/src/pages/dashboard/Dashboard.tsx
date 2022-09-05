import { FerramentasDaListagem } from "../../shared/components/ferramentas-da-listagem/FerramentasDaListagem";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina
            titulo="Página Inicial" barraDeFerramentas={(
                <FerramentasDaListagem
                    mostraInputBusca
                    textoBotaoNovo="Novo"
                />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};