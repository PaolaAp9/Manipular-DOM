console.log('personagem de RPG')

const personagem = document.querySelector('#personagem')

personagem.addEventListener("click", () => {
    alert('oi')
} )

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

const habilidades = {
    "forca": {
        "ataque": 3,
        "velocidade": 1,
        "magia": 0,
        "defesa": 1
    }, 
    "destreza": {
        "ataque": 1,
        "velocidade": 3,
        "magia": 0,
        "defesa": 1
    },
    "constituicao": {
        "ataque": 0,
        "velocidade": 1,
        "magia": 0,
        "defesa": 4
    },
    "inteligencia": {
        "ataque": 1,
        "velocidade": 1,
        "magia": 2,
        "defesa": 1
    },
    "sabedoria": {
        "ataque": 0,
        "velocidade": 0,
        "magia": 3,
        "defesa": 2
    },
    "carisma": {
        "ataque": 1,
        "velocidade": 0,
        "magia": 4,
        "defesa": 0
    }
}

controle.forEach((elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizarEstatisticas(evento.target.dataset.habilidade)
    })
})

function manipulaDados(operacao, controle) {
    const habilidade = controle.querySelector("[data-contador]")
    if (operacao === "-") {
        habilidade.value = parseInt(habilidade.value) - 1
    }
    else{
        habilidade.value = parseInt(habilidade.value) + 1
    }
}

function atualizarEstatisticas (habilidade) {
    console.log(habilidades[habilidade])

    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + habilidades[habilidade][elemento.dataset.estatistica]
    })
    
}
