# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.

// R - var teste = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

/* R - var pessoa = {
    'nome' = 'Felipe',
    'sobrenome' = 'Lima',
    'sexo' = 'masculino',
    'idade' = 26,
    'altura' = 1.84,
    'peso' = 90,
    'andando' = false,
    'caminhouQuantosMetros' - 0,
}
*/

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

/*
R - pessoa.fazerAniversario = function(){
    pessoa.idade++;
}
*/

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

/*
R - pessoa.andar = function(metros){
    pessoa.caminhouQuantosMetros = metros;
    pessoa.andando = true;
}
*/

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

/*
 R - pessoa.parar = function(){
    pessoa.andando = false;
 }
*/

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

/*
R - function nomeCompleto() {
    return "Olá! Meu nome é " + "FELIPE" + " " + "LIMA" + "!"
}
*/

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

/*
R - function mostrarIdade() {
    return "Olá, eu tenho " + "26" + " anos!"
}
*/

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

/*
R - function mostrarPeso() {
    return "Eu peso" + "90" + "kg"
}
*/

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

/*
R - function mostrarAltura() {
    return "Minha altura é " + "1,84" + "m"
}
*/

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
    R - nomeCompleto()   // Olá! Meu nome é FELIPE LIMA!
*/

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
    R - mostrarIdade()   // Olá, eu tenho 26 anos!
*/

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
    R - mostrarPeso()   // Eu peso 90 kg!
*/

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
    R - mostrarAltura()   // Minha altura é 1,84m
*/

/*
Faça a `pessoa` fazer 3 aniversários.
*/

/*
 R - pessoa.fazerAniversario();
 pessoa.fazerAniversario();
 pessoa.fazerAniversario();
*/

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

/*
R - pessoa.idade; //29
*/

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

/*
R - pessoa.andar(10);
R - pessoa.andar(20);
R - pessoa.andar(30);
*/

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
R - pessoa.andando // true
*/

/*
Se a pessoa ainda está andando, faça-a parar.
*/

/*
R - pessoa.parar();
*/

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

/*
R - pessoa.andando // false
*/

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

/*
R - pessoa.caminhouQuantosMetros // 60
*/

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


/*
    pessoa.apresentacao = function() {
        var identificador = pessoa.sexo == 'masculino' ? 'o' : 'a'
        var verificaAno = pessoa.idade == 1 ? ' ano, ' : ' anos, ';
        var verificaMetros = pessoa.caminhouQuantosMetros == 1 ? ' metro!' : ' metros!'


        "Olá, eu sou " + identificador + pessoa.nome + " " + pessoa.sobrenome ", tenho " pessoa.idade + verificaAno + pessoa.altura + ", meu peso é " + pessoa.peso +  "e, só hoje, eu já caminhei "  + pessoa.caminhouQuantosMetros + verificaMetros
    }
*/

// Agora, apresente-se ;)

// pessoa.apresentacao();
