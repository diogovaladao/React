import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import { PessoasServices } from "../../shared/services/api/pessoas/PessoasServices";
import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { VTextField } from "../../shared/forms";


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
    const formRef = useRef<FormHandles>(null);

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
                        navigate(`/pessoas/detalhe/${result}`);
                    }
                });
        } else {
            PessoasServices.updateById(Number(id), { id: Number(id), ...dados })
                .then((result) => {
                    setIsLoading(false);
                    if (result instanceof Error) {
                        alert(result.message);
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

                    aoClicarEmVoltar={() => navigate('/pessoas')}
                    aoClicarEmApagar={() => { handleDelete(Number(id)) }}
                    aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
                    aoClicarEmSalvar={() => { formRef.current?.submitForm() }}
                    aoClicarEmSalvarEFechar={() => { formRef.current?.submitForm() }}
                />
            }
        >

            <Form ref={formRef} onSubmit={handleSave} >
                <VTextField placeholder="Nome completo" name="nomeCompleto" />
                <VTextField placeholder="Email" name="email" />
                <VTextField placeholder="Cidade id" name="cidadeId" />
            </Form>

        </LayoutBaseDePagina>
    );
}