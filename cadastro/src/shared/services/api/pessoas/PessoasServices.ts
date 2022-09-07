import { Environment } from "../../../environment";
import { Api } from "../axios-config";

export interface IListagemPessoa {
    id: number;
    email: string;
    nomeCompleto: string;
    cidadeId: number;
};

export interface IDetalhePessoa {
    id: number;
    email: string;
    nomeCompleto: string;
    cidadeId: number;
};

type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<TPessoasComTotalCount | Error> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelativa);

        if (data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            }
        }
        return new Error('Erro ao listar os registros.')

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
    }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {
        const urlRelativa = `/pessoas/${id}`;
        const { data } = await Api.get(urlRelativa);

        if (data) {
            return data;
        }
        return new Error('Erro ao consultar os registros.')

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao consultar os registros.');
    }
};

const creat = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IDetalhePessoa>('/pessoas', dados);

        if (data) {
            return data.id;
        }
        return new Error('Erro ao criar o registro.')

    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
    }
};

const updateById = async (id: number, daods: IDetalhePessoa): Promise<void | Error> => {
    try {
        await Api.put(`/pessoas/${id}`, daods);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
    }
};

const delteById = async (id: number): Promise<void | Error> => {
    try {
        await Api.delete(`/pessoas/${id}`);
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
    }
};


export const PessoasServices = {
    getAll,
    getById,
    creat,
    updateById,
    delteById
};