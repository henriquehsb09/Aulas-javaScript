/*
Variáveis
Variáveis são o conceito mais básico da programação. 
De forma super simplificada é atribuir um "apelido" a um valor.
 Isso permite que esse valor seja lido e modificado durante o programa.
No entanto, por baixo dos panos, seu programa está solicitando que o 
sistema operacional da sua máquina reserve um pedaço de memória RAM para
guardar esse valor. Diferentes tipos de valor têm tamanhos diferentes. 
Por isso, o sistema precisa saber de antemão qual tipo utilizar.

Existem duas vertentes de linguagens que tratam isso de forma diferente:

Uma, a estática, obriga a variável ser de um tipo exclusivo de informação. 
Isto é, uma variável numérica é sempre numérica. Você pode alterar o número 
armazenado mas não pode mudar a informação para texto por exemplo. Geralmente 
essas linguagens exigem declarar o tipo ao criar a variável para reservar memória, 
mesmo que a variável ainda não tenha valor.

A segunda, a dinâmica, em que o tipo é inferido implicitamente e este pode ser 
mudado ao longo do código. A memória só é alocada se a variável tiver um valor. 
Este é o caso de JavaScript.

O tipos de informação que podem ser salvos em variáveis são:

## Primitivos: ##

undefined -> Não há tipo nem valor
boolean -> verdadeiro ou falso
string -> textos
number -> números

## Complexos: ##

function -> funções
object -> objetos
Tipos primitivos são as informações básicas que uma linguagem consegue armazenar. 
Todas construção de dados mais complexos decorre da utilização desses. Também podem 
ser armazenados funções (muito importante) e objetos em variáveis. Os tipos primitivos 
são, números, texto (representado entre aspas) e booleano (valor lógico verdadeiro ou falso). 
O undefined representa uma variável sem valor atribuído.

Podemos fazer uma variável de qualquer um dos tipos acima.
*/

//boolean
var a = true;
var b = false;

//Number
var c = 10;
var d = 11.5;

//String
var e = "teste";

//Undefined
var f;
var g = undefined;

//function
var a = function(){};
var b = () => {};

//object
var c = {};
var d = []; //array
var e = null;

/*
Aqui usamos var, mas vamos padronizar a partir de agora a palavra let 
para declaração de variáveis e a palavra const para declaração de constantes. 
O null representa uma informação vazia. Diferente de undefined, ele mostra 
que a variável foi declarada mas com valor vazio.

Em JavaScript, temos um comportamento estranho das variáveis. 
Elas podem ser declaradas depois de utilizadas, pois elas são levantadas 
para o início do escopo. Isso se chama hoisting.

Usando var variáveis não respeitam seu escopo, uma variável declarada 
em uma função estará disponível depois do escopo da função.

Esses comportamentos são peculiares e diferentes de muitas linguagens, 
por isso padronizamos usar let em vez de var, o que fará com que os 
escopos sejam respeitados.

O const impede que o valor possa ser alterado após ser iniciado, 
gerando um erro ao ser tentado.
*/
const pi = 3.1415;
console.log("Funciona!");
