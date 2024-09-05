export interface Tarefas{
    titulo: String;
    descricao: String | null;
    vencimento: String;
    prioridade: String;
    dataCriacao: Date
}


export let tarefas: Tarefas[] = [
    {
        titulo: 'trabalhar',
        descricao: '...',
        vencimento: '16/08/2024',
        prioridade: 'alta',
        dataCriacao: new Date()
    },

    {
        titulo: 'estudar',
        descricao: 'sem descrição',
        vencimento: '19/08/2024',
        prioridade: 'baixa',
        dataCriacao: new Date()
    },

    {
        titulo: 'organizar',
        descricao: 'sem descricao ',
        vencimento: '15/09/2024',
        prioridade: 'media',
        dataCriacao: new Date()
    },

    {
        titulo: 'dormir',
        descricao: '',
        vencimento: '19/09/2024',
        prioridade: 'alta',
        dataCriacao: new Date()
    }    
    ]

export let tarefasConcluidas: Tarefas[] = [
    {
        titulo: 'fazer compras',
        descricao: 'sem descrição',
        vencimento: '15/08',
        prioridade: 'baixa',
        dataCriacao: new Date()
    }
]