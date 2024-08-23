
const caixaPrincipal = document.querySelector('.caixa-principal');

const caixaPerguntas = document.querySelector('.caixa-perguntas');

const caixaAlternativas = document.querySelector('.caixa-alternativas');

const caixaResultado = document.querySelector('.caixa-resultado');

const textoResultado = document.querySelector('.texto-resultado');



const perguntas = [

    {

        enunciado: "No âmbito social, você prefere:",

        alternativas: [

            {

                texto: "Que a corrupção acabe, mas seus braços viram suas pernas e vice-versa.",

                afirmacao: "Que a corrupção acabe, mas seus braços viram suas pernas e vice-versa.",

            },

            {

                texto: "Que a desigualdade monetária acabasse, mas você nunca mais poderá usar qualquer tipo de vestimenta.",

                afirmacao: "Que a desigualdade monetária acabasse, mas você nunca mais poderá usar qualquer tipo de vestimenta.",

            },

        ]

    },

    {

        enunciado: "No âmbito ambiental, você prefere:",

        alternativas: [

            {

                texto: "Acabar com o desmatamento, mas você só poderá comer dejetos de animais. ",

                afirmacao: "Acabar com o desmatamento, mas você só poderá comer dejetos de animais. ",

            },

            {

                texto: "Que o tráfico de animais acabasse, mas você nunca mais poderá fazer sexo e nem qualquer tipo de prazer.",

                afirmacao: "Que o tráfico de animais acabasse, mas você nunca mais poderá fazer sexo e nem qualquer tipo de prazer.",

            },

        ]

    },

    {

        enunciado: "No âmbito tecnológico, você prefere:",

        alternativas: [

            {

                texto: "Que os carros voadores existam, mas todo mundo irá vomitar em você quando te vissem.",

                afirmacao: "Que os carros voadores existam, mas todo mundo irá vomitar em você quando te vissem.",

            },

            {

                texto: "Criar a invenção dos seus sonhos, mas no mês seguinte começará uma guerra nuclear que afetará o mundo inteiro.",

                afirmacao: "Criar a invenção dos seus sonhos, mas no mês seguinte começará uma guerra nuclear que afetará o mundo inteiro.",

            },

        ]

    },

]



let atual = 0;

let perguntaAtual;

let historiaFinal = "";



function mostraPergunta() {

    if(atual >= perguntas.length){

        mostraResultado();

        return;

    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativa();

}



function mostraAlternativa() {

    for (const pergunta of perguntaAtual.alternativas) {

        const botaoAlternativa = document.createElement('button');

        botaoAlternativa.textContent = pergunta.texto;

        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));

        caixaAlternativas.appendChild(botaoAlternativa);

    }

}



function respostaSelecionada(pergunta) {

    const afirmacoes = pergunta.afirmacao;

    historiaFinal += afirmacoes +" ";

    atual++;

    mostraPergunta();

}



function mostraResultado(){

    caixaPerguntas.textContent = "Em resumo, você escolheu... ";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = " ";

}



mostraPergunta();
