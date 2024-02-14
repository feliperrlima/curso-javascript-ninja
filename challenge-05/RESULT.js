/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

// var qualquer = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// function funcao(qualquer) {
//     return qualquer;
// }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

// qualquer[1]; 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

// function novaFuncao(qualquer, numero) {
//     return qualquer[numero];
// }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

// var novaVariavel = [ 'felipe', 26, 'ester', 23, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

// novaFuncao(novaVariavel, 0);
// novaFuncao(novaVariavel, 1);
// novaFuncao(novaVariavel, 2);
// novaFuncao(novaVariavel, 3);
// novaFuncao(novaVariavel, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

/*
function book(nomeDoLivro){
    var livros  = {
        'livro1' : {
            'quantidadeDePaginas' : 20,
            'autor' : 'Eu',
            'editora' : 'Escrevendo',
        },
        'livro2' : {
            'quantidadeDePaginas' : 40,
            'autor' : 'Não',
            'editora' : 'Editando',
        },
        'livro3' : {
            'quantidadeDePaginas' : 60,
            'autor' : 'Sei',
            'editora' : 'Apagando',
        },
    }
    
    
    return !nomeDoLivro ? livros : livros[ nomeDoLivro ];
}
*/

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

// book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

// console.log("O livro 'Livro 1' tem ' + book('livro1').quantidadeDePaginas; + ' páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

// console.log("O autor do livro 'Livro 1' é ' + book('livro1').autor;")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

// console.log("O livro Livro 1 foi publicado pela editora' + book('livro1').editora;")

