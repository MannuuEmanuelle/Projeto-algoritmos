
import { Tarefas, tarefas, tarefasConcluidas } from './listas.ts'



export function adicionar() {

    let novoTitulo: string, novoVencimento: string , novaPrioridade: string

    do {
        novoTitulo = prompt('Título: ') || ''
        if (!novoTitulo) {
            console.log('O título é obrigatório!')
        }
    } while (!novoTitulo)

    let novaDescricao = prompt('Descrição: ') || null 

    do {
        novoVencimento = prompt('Vencimento(dd/mm/aaaa): ') || ''
        if (!novoVencimento) {
            console.log('O vencimento é obrigatório!')

        } 
    } while (!novoVencimento)

    do {
        novaPrioridade = prompt('Prioridade: ') || ''
        if (!novaPrioridade) {
            console.log('A prioridade é obrigatória!')

        }
    } while (!novaPrioridade)



    let novaTarefa = {
        titulo: novoTitulo,
        descricao: novaDescricao,
        vencimento: novoVencimento,
        prioridade: novaPrioridade,
        dataCriacao: new Date()
    }

    tarefas.push(novaTarefa)

    console.log(`
        -- Tarefas pendentes --`)
    for (let adicionando of tarefas) {
        console.log(`
        Título: ${adicionando.titulo}
        Descrição: ${adicionando.descricao}
        Vencimento: ${adicionando.vencimento}
        Prioridade: ${adicionando.prioridade}`)
    }
}


export function editar() {
    

    let editarTitulo: string, editarVencimento: string, editarPrioridade: string, editarDescricao: string | null
    let alterarTarefa = prompt('Qual tarefa deseja alterar? ')

    let procurandoTarefa = tarefas.find((tarefa) => tarefa .titulo === alterarTarefa)
    if (procurandoTarefa){
        const index = tarefas.findIndex((procurandoTarefa) => procurandoTarefa.titulo === alterarTarefa)
        if (index !== -1) {

            do {
                editarTitulo = prompt('Novo título: ') || ''
                if (!editarTitulo) {
                    console.log('O título é obrigatório!')
                }
            } while (!editarTitulo)
    
            do {
                editarVencimento = prompt('Novo vencimento(dd/mm/aaaa): ') || ''
                if (!editarVencimento) {
                    console.log('O vencimento é obrigatório!')
                }
            } while (!editarVencimento)
    
            let editarDescricao = prompt('Nova descrição: ') || null
    
            do {
                editarPrioridade = prompt('Nova prioridade: ') || ''
                if (!editarPrioridade) {
                    console.log('A prioridade é obrigatória!')
                }
            } while(!editarPrioridade)
    
            tarefas[index] = {
                titulo: editarTitulo,
                descricao: editarDescricao,
                vencimento: editarVencimento,
                prioridade: editarPrioridade,
                dataCriacao: new Date()
            }
            console.log(`
                    -- Tarefas pendentes --`)
            for (let editando of tarefas) {
                console.log(`
                    Título: ${editando.titulo}
                    Descrição: ${editando.descricao}
                    Vencimento: ${editando.vencimento}
                    Prioridade: ${editando.prioridade}`)
            }
        }
    }
    


    
}
    





export function remover() {
    let escolha = Number(prompt(`
        1 - Pendentes
        2 - concluídas
        `))

    if (escolha === 1) {
        let removerTarefa = prompt('Qual tarefa deseja remover? ') || ''
        let procurarTarefa = tarefas.findIndex((tarefa) => tarefa.titulo === removerTarefa)

        if (procurarTarefa !== -1) {
            let pergunta = prompt('Tem certeza dessa ação? ')?.trim().toLowerCase()!

            if (pergunta === 'sim') {
                tarefas.splice(procurarTarefa, 1)
                console.log(`
                    -- Tarefas pendentes --`)
                for (let pendente of tarefas) {
                    console.log(`
                    Título: ${pendente.titulo}
                    Descrição: ${pendente.descricao}
                    Vencimento: ${pendente.vencimento}
                    Prioridade: ${pendente.prioridade}`)
                }
                console.log('Tarefa removida! ')
            }
        }
    } else {
        let removerTarefa = prompt('Qual tarefa deseja remover? ')

        let procurarTarefa = tarefasConcluidas.findIndex((tarefa) => tarefa.titulo === removerTarefa)

        if (procurarTarefa != -1) {
            let pergunta = prompt('Tem certeza dessa ação? ')?.trim().toLowerCase()!

            if (pergunta === 'sim') {
                tarefasConcluidas.splice(procurarTarefa, 1)
                console.log(`
                    -- Tarefas concluídas --`)
                for (let concluída of tarefasConcluidas) {
                    console.log(`
                    Título: ${concluída.titulo}
                    Descrição: ${concluída.descricao}
                    Vencimento: ${concluída.vencimento}
                    Prioridade: ${concluída.prioridade}`)
                }
                console.log('Tarefa removida! ')
            }
        } 
    }

}