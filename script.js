const CaixaPrincipal = document.querySelector ('.caixa-principal');
const CaixaPerguntas = document.querySelector ('.caixa-perguntas');
const CaixaAlternativas = document.querySelector ('.caixa-alternativas');
const CaixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const perguntas = [
    {
        enunciado: "No ambito social, vc prefere:",
        alternativas: [
            {
                texto:"alternativas 1",
                afirmaçao: "afirmaçao",
            }, 
            {
                texto: "alternativa 2",
                afirmaçao: "afirmaçao",
            },
        ]
    },
    {
        enunciado: "No ambito ambiental, vc prefere:",
        alternativas: [
            {
                texto:"alternativas 3",
                afirmaçao: "afirmaçao",
            }, 
            {
                texto: "alternativa 4",
                afirmaçao: "afirmaçao",
            },
        ]
    },
    {
        enunciado: "No ambito tecnologico, vc prefere:",
        alternativas: [
            {
                texto:"alternativas 5",
                afirmaçao: "afirmaçao",
            }, 
            {
                texto: "alternativa 6",
                afirmaçao: "afirmaçao",
            },
        ]
    },
]


let atual = 0;
let perguntasAtual;
    
    function mostraPergunta () {
    perguntasAtual = perguntas[atual];
    CaixaPerguntas.textContent = perguntasAtual.enunciado;
    CaixaAlternativas.textContent="";
    mostraAlternativa();
}
   
    function mostraAlternativa (){
        for (const pergunta of perguntasAtual.alternativas){
             const botaoAlternativa = document.createrElement('button');
            botaoAlternativa.textContent = pergunta;
            CaixaAlternativas.appendChild(botaoAlternativa);
            mostraAlternativa();
        }
}

mostraPergunta();