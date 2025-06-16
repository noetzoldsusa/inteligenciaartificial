//criação das constantes para manipular os elementos HTML

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//lista de perguntas com os objetos(itens) e seus atributos:enunciado, e lista de alternativas
//com os atributos texto e afirmação
const perguntas = [
    {
        enunciado: "Em qual momento histórico o movimento dadaísta surgiu?",
        alternativas: [
            {
            texto: "Primeira Guerra Mundial.",
            afirmacao: "O dadaísmo, ou dadá, surgiu no contexto da Primeira Guerra Mundial como um movimento provocativo e de reflexão sobre os horrores da guerra. "
            },
            {
            texto: "seculo XX",
            afirmacao: "foi um movimento artístico pertencente às vanguardas europeias do século XX, cujo lema era: "a destruição também é criação"."
            },
        ]
    },
    {
        enunciado: "o que foi o dadaísmo? ",
        alternativas: [
            {
            texto: "Movimento artistico com ideoligias anarquistas."
            afirmacao: "O Dadaísmo foi um movimento que surgiu no início do século XX dentro de um cabaré em Zurique, Suíça no ano de 1916. Ele foi idealizado por anarquistas intelectuais germânicos que queriam desconstruir a arte, contrariando a sociedade, a religião, a ciência e a filosofia. "
            },
            {
            texto: "ma palavra internacional. Apenas uma palavra e uma palavra como movimento",
            afirmacao: "“Dadá é uma nova tendência da arte. Percebe-se que o é porque, sendo até agora desconhecido, amanhã toda a Zurique vai falar dele. Dadá vem do dicionário. É bestialmente simples. Em francês quer dizer "cavalo de pau". Em alemão: "Não me chateies, faz favor, adeus, até à próxima!" Em romeno: "Certamente, claro, tem toda a razão, assim é. Sim, senhor, realmente. Já tratamos disso." E assim por diante. Uma palavra internacional. Apenas uma palavra e uma palavra como movimento”"
            },
        ]
    },
    {
        enunciado: "qual a origem do dadaismo?"
        alternativas: [
            {
            texto: "A busca do termo veio de um dicionario alemão."
            afirmacao: "Segundo relatos dos historiadores, a busca pelo termo foi feita em um dicionário alemão por Tristan Tzara, que ao colocar uma espátula no meio do livro encontrou a palavra “Dada” e leu o seguinte significado: “Dada não significa nada”, porém na linguagem infantil a palavra quer dizer “cavalo-de-madeira”. Os dadaístas não se preocupavam com o significado correto da palavra, o que eles pretendiam era mostrar o caráter ilógico do movimento consagrado como tendência artística. Para eles, o importante era que o Dadaísmo não perdesse a essência de irracionalidade diante das guerras e, seguindo o significado encontrado no dicionário por Tristan Tzara, com elementos “sem sentido”"
            },
            {
            texto: "Não se constrói a sensibilidade sobre uma palavra",
            afirmacao: "Dada não significa nada: Sabe-se pelos jornais que os negros Krou denominam a cauda da vaca santa: Dada. O cubo é a mãe em certa região da Itália: Dada. Um cavalo de madeira, a ama-de-leite, dupla afirmação em russo e em romeno: Dada. Sábios jornalistas viram nela uma arte para os bebês, outros Jesus chamando criancinhas do dia, o retorno ao primitivismo seco e barulhento, barulhento e monótono. Não se constrói a sensibilidade sobre uma palavra; toda a construção converge para a perfeição que aborrece, a ideia estagnante de um pântano dourado, relativo ao produto humano. "
            },
        ]
    },

];//criação das variáveis atual(que percorrerá os itens da lista de perguntas)
// perguntaAtual(que guardará a pergunta atual que será interagida)
//historiaFinal(que inicia vazia e depois guardará os textos da resposta selecionada)

let atual = 0;
let perguntaAtual;
let historiaFinal = "";//funcao que mostrará cada pergunta até que apareça encerre a lista e mostrará o resumo da I.A.

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
//execução da função que mostrará as alternativas
    mostraAlternativa();
}//funcao que mostrará as alternativas do objeto selecionado

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
//execução da função SETA => que após o evento de clique selecionada a resposta da alternativa
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
   
}
}//função que junta todas as afirmações das alternativas clicadas.

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
//execução da função que mostra a pergunta
    mostraPergunta();

}//função que mostrará o resultado final 

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão: "O Dadaísmo, ou Dada (cavalinho de pau, em francês), foi um movimento e fenômeno cultural que ocorreu de 1916 a 1922 em alguns países da Europa e nos Estados Unidos (EUA). Diferente de outros estilos artísticos que contemplavam a arte e a estética pictórica, o Dadaísmo questionava qual era o objetivo da arte e o seu valor cultural.
Considerado um movimento de vanguarda que propunha a antiarte, o Dadaísmo teve como representantes artistas e intelectuais de diversas nacionalidades, em especial alemães, franceses e romenos. A forma de expressão dos dadaístas era ilógica, destrutiva e, ao mesmo tempo, engraçada e infantil."

    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}//execução da função que mostrará a pergunta e suas alternativas

mostraPergunta();