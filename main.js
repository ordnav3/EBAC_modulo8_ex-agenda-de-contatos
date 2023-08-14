const form = document.getElementById('formContatos')
const nomes = []
const numeros = []

document.getElementById('thead').style.visibility = 'hidden'

let linhas = ' '
form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionacontatos()
    document.getElementById('thead').style.visibility = 'visible'
    atualizatabela()
})

function adicionacontatos(){
    let nomeC = document.getElementById('nomeContato')
    let numeroC = document.getElementById('numeroContato')

    if(nomes.includes(nomeC.value) || numeros.includes(numeroC.value)){
        alert('[ERRO] Contato Existente [ERRO]')
    }else{
        nomes.push(nomeC.value)
        numeros.push(numeroC.value)

        let linha = '<tr>'
        
        linha += `<td>${nomeC.value}<td>`
        linha += `${numeroC.value}`
        linhas += linha
    }

    nomeC.value = ' '
    numeroC.value = ' '
}

function atualizatabela(){
    const bodytable =document.querySelector('tbody')
    bodytable.innerHTML = linhas
}