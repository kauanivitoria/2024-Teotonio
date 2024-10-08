const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            {
                texto:'alternativa01',
                afirmacao: 'afirmação01'
            },
            {
                texto:'alternativa02',
                afirmacao: 'afirmação02'
            }
            
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            {
                texto:'alternativa03',
                afirmacao: 'afirmação03'
            },
            {
                texto:'alternativa04',
                afirmacao: 'afirmação04'
            }
            
        ]
    },
    {
        enunciado: "texto03",
        alternativas: [
            {
                texto:'alternativa05',
                afirmacao: 'afirmação05'
            },
            {
                texto:'alternativa06',
                afirmacao: 'afirmação06'
            }
            
        ]
    },
    {
        enunciado: "texto04",
        alternativas: [
            {
                texto:'alternativa07',
                afirmacao: 'afirmação07'
            },
            {
                texto:'alternativa08',
                afirmacao: 'afirmação08'
            }
            
        ]
    },
    {
        enunciado: "texto05",
        alternativas: [
            {
                texto:'alternativa09',
                afirmacao: 'afirmação09'
            },
            {
                texto:'alternativa10',
                afirmacao: 'afirmação10'
            }
            
        ]
     }
    ]

let atual = 0;
let perguntaAtual;
let historiaFinal = '';

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = '';
    mostraAlternativas();
}


function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
        }
    }
    function respostaSelecionada(opcaoSelecionada) {
        const afirmacao = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacao + ' ';
        atual++;
        mostraPergunta()
    }

    function mostraResultado(){
        caixaPerguntas.textContent = ' Início do texto...'
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = '';
    }

mostraPergunta();
