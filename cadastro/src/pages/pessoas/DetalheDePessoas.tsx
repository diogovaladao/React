import { useNavigate, useParams } from "react-router-dom";
import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const DetalheDePessoas: React.FC = () => {
    /* o useParams abaixo pega a parte final da url para decidir se é alteração ou criação */
    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Save");
    }

    const handleDelete = () => {
        console.log("Save");
    }

    return (
        <LayoutBaseDePagina
            titulo="Detalhe de Pessoas"
            barraDeFerramentas={
                <FerramentasDeDetalhe
                    textoBotaoNovo='Nova'
                    mostrarBotaoSavlarEFechar
                    mostrarBotaoNovo={id !== 'nova'}
                    mostrarBotaoApagar={id !== 'nova'}

                    aoClicarEmSalvarEFechar={() => { handleSave }}
                    aoClicarEmSalvar={() => { handleSave }}
                    aoClicarEmApagar={() => { handleDelete}}
                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                />
            }
        >

            <p>Detalhe de pessoas {id}</p>
        </LayoutBaseDePagina>
    );
}