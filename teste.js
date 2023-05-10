console.log("Hello World!")

let nome = "Deiziane"

const sobrenome = "Rodrigues"

console.log (nome +" "+ sobrenome)

/*nome = "Mariana"

sobrenome ="Franco"

console.log (nome)*/

let n1 = 30
let n2 = 10
console.log(n1+n2)

function dividir (n1, n2){
    if(n2=== 0)
    return "Não é possivel dividir por zero"
    
return n1/n2
}
let resultado =dividir(10,5)
console.log(resultado)

const soma = (n1, n2) => n1 + n2
console.log (soma(20, 30))

function tabuada (n1){
    for(let contador = 1; contador <=10; contador ++){
        console.log(`${n1} x ${contador} = ${n1 * contador}`)
    }
}
tabuada(5)

const nomes =[ "Deiziane", "Heimy", "Andresa", "Jamile","Bianca", "camille", "Yngrid"]
nomes.forEach(nome => console.log(nome))

