const caixaPrincipal = document.querySelector( '.caixa-principal');

const caixaPerguntas = document.querySelector( '.caixa-perguntas');

const caixaAlternativas = document.querySelector( '.caixa-alternativas');

const caixaResultado = document.querySelector( '.caixa-resultado');

const textoResultado = document.querySelector( '.texto-resultado');



const perguntas = [

    {

        enunciado: "No Âmbito social, você prefere:",

        alternativas: [

            {

                texto: "Que a corrupção acabe, mas seus braços viram suas pernas e vice-versa.",

                afirmacao: "afirmação",

            },

            {

                texto: "Que a desigualdade monetária acabasse, mas você nunca mais poderá usar qualquer tipo de vestimenta.",

                afirmacao: "afirmação",

            },

        ]

    },

    {

        enunciado: "No Âmbito ambiental, você prefere:",

        alternativas: [

            {

                texto: "Acabar com o desmatamento, mas você só poderá comer dejetos de animais. ",

                afirmacao: "afirmação",

            },

            {

                texto: "Que o tráfico de animais acabasse, mas você nunca mais poderá fazer sexo e nem qualquer tipo de prazer.  ",

                afirmacao: "afirmação",

            },

        ]

    },

    {

        enunciado: "No Âmbito tecnológico, você prefere:",

        alternativas: [

            {

                texto: "Que os carros voadores existam, mas todo mundo irá vomitar em você quando te vissem.",

                afirmacao: "afirmação",

            },

            {

                texto: "Criar a invenção dos seus sonhos, mas no mês seguinte começará uma guerra nuclear que afetaráo mundo inteiro.",

                afirmacao: "afirmação",

            },

        ]

    },

]



let atual = 0;

let perguntaAtual;



function mostraPergunta (){

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent="";

    mostraAlternativa();

}



function mostraAlternativa () {

    for (const pergunta of perguntaAtual.alternativas) {

        const botaoAlternativa = document.createElement('button');

        botaoAlternativa.textContent= pergunta.texto;

        botaoAlternativa.addEventListener("click", function(){

            atual++;

            mostraPergunta();

        })

        caixaAlternativas.appendChild(botaoAlternativa);

    

    }

}



mostraPergunta();
