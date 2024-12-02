// Seleciona o display e armazena em uma constante
const visor = document.getElementById('display');

// Variáveis para armazenar valores e operadores
let valorAtual = '0';
let valorAnterior = null;
let operador = null;
let resetarVisor = false;

// Função para atualizar o visor
function atualizarVisor(operador, numero) {
    visor.innerText = operador+numero;
}

// Função para limpar o visor
function limparVisor() {
    valorAtual = '0';
    valorAnterior = null;
    operador = null;
    resetarVisor = false;
    atualizarVisor("", valorAtual);
}

// Função para adicionar número ao visor
function adicionarNumero(numero) {
    if (resetarVisor) {
        valorAtual = numero;
        resetarVisor = false;
    } else {
        valorAtual = valorAtual === '0' ? numero : valorAtual + numero;
    }
    atualizarVisor("", valorAtual);
}

// Função para escolher o operador
function escolherOperador(opSelecionado) {
    if (valorAnterior === null) {
        valorAnterior = Number(valorAtual);
    } else if (operador) {
        calcular();
    }
    operador = opSelecionado;
    atualizarVisor(valorAtual, operador);
    resetarVisor = true;
}

// Função de cálculo com switch case
function calcular() {
    if (operador && valorAnterior !== null) {
        const valorAtualConvertido = Number(valorAtual);
        switch (operador) {
            case '+':
                valorAtual = valorAnterior + valorAtualConvertido;
                break;
            case '−':
                valorAtual = valorAnterior - valorAtualConvertido;
                break;
            case '×':
                valorAtual = valorAnterior * valorAtualConvertido;
                break;
            case '÷':
                valorAtual = valorAnterior / valorAtualConvertido;
                break;
            case '%':
                valorAtual = valorAnterior % valorAtualConvertido;
                break;
        }
        valorAnterior = valorAtual;
        valorAtual = valorAtual;
        operador = null;
        atualizarVisor("", valorAtual);
    }
}

// Event listeners para botões numéricos
document.getElementById('zero').addEventListener('click', () => adicionarNumero('0'));
document.getElementById('um').addEventListener('click', () => adicionarNumero('1'));
document.getElementById('dois').addEventListener('click', () => adicionarNumero('2'));
document.getElementById('tres').addEventListener('click', () => adicionarNumero('3'));
document.getElementById('quatro').addEventListener('click', () => adicionarNumero('4'));
document.getElementById('cinco').addEventListener('click', () => adicionarNumero('5'));
document.getElementById('seis').addEventListener('click', () => adicionarNumero('6'));
document.getElementById('sete').addEventListener('click', () => adicionarNumero('7'));
document.getElementById('oito').addEventListener('click', () => adicionarNumero('8'));
document.getElementById('nove').addEventListener('click', () => adicionarNumero('9'));

// Event listener para o ponto
document.getElementById('ponto').addEventListener('click', () => {
    if (!valorAtual.includes('.')) {
        valorAtual += '.';
        atualizarVisor("", valorAtual);
    }
});

// Event listeners para operadores
document.getElementById('mais').addEventListener('click', () => escolherOperador('+'));
document.getElementById('menos').addEventListener('click', () => escolherOperador('−'));
document.getElementById('multi').addEventListener('click', () => escolherOperador('×'));
document.getElementById('divisao').addEventListener('click', () => escolherOperador('÷'));
document.getElementById('modulo').addEventListener('click', () => escolherOperador('%'));

// Event listener para o botão de apagar
document.getElementById('apagar').addEventListener('click', limparVisor);

// Event listener para o botão de igual
document.getElementById('igual').addEventListener('click', calcular);
