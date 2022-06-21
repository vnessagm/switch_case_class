// Crie uma variável chamada “food”. Esta variável deve receber uma string com o nome
// de uma comida. Após, crie uma estrutura condicional switch que receba esta variável e
// que possua três casos: caso lasanha, retorne no console: “Não vendemos esta comida
// aqui”. Caso pizza, retorne: “Estamos com escassez de pizza” e caso salada, retorne:
// “Aqui está, são 3 reais”. Teste com estas três opções e verifique o console do seu
// navegador. Crie também um default , que retornará uma mensagem de erro no
// console

let food ="lasanha"
switch(food){
    case 'lasanha':
        console.log('Não vendemos essa comida aqui')
        break;
    case 'pizza':
        console.log('Estamos com escassez de pizza')
        break;
        case 'salada':
            console.log('Aqui está, são 3 reais')
            break;
            default:
                console.log('Houve um erro')
}

// Uma pessoa decidiu ir à uma revenda comprar um perfume. Ele deseja comprar um
// perfume amadeirado, e a revenda possui, além de perfumes amadeirados, florais,
// cítrico e frutal. Utilizando uma estrutura switch/case , caso o comprador queira o floral,
// retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere outro aroma?”. Caso seja especificado um aroma que não está
// disponível, retorne no console: “Não trabalhamos com este tipo de perfume aqui”.


let perfume = 'amadeirado'

switch(perfume){
    case 'floral':
        console.log('Compra efetuada com sucesso!')
        break;
    case 'citrico':
    case 'frutal':
    case 'amadeirado':
        console.log('Tem certeza que não prefere outro aroma?')
        break;
     default:
        console.log('nao trabalhamos com este tipo de perfume aqui')
}