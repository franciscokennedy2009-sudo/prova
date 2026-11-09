
// Selecionando os elementos pelo ID
const titulo = document.getElementById("titulo-principal");
const paragrafo = document.getElementById("paragrafo-boas-vindas");
const botao = document.getElementById("btn-alterar-texto");

// Lendo o conteúdo atual dos elementos
console.log(titulo.textContent);
console.log(paragrafo.textContent);

// Adicionando evento de clique ao botão
botao.addEventListener("click", function() {

    // Alterando o texto do título
    titulo.textContent = "DOM Manipulado com Sucesso!";

    // Alterando o texto do parágrafo
    paragrafo.textContent = "Olá! Você acabou de aprender a manipular elementos HTML utilizando JavaScript e DOM.";

});


const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const botaoSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado-soma");


botaoSomar.addEventListener("click", function() {

    const numero1 = parseFloat(valor1.value);
    const numero2 = parseFloat(valor2.value);

    const soma = numero1 + numero2;
 
    resultado.textContent = soma;

});

const botaoCriar = document.getElementById("btn-criar-aviso");
const containerAvisos = document.getElementById("container-avisos");

botaoCriar.addEventListener("click", function() {

    const aviso = document.createElement("div");

    aviso.classList.add("aviso-item");

    aviso.textContent = "Atenção! Novo aviso criado com sucesso! ";

    const botaoFechar = document.createElement("button");

    botaoFechar.textContent = "X";

    botaoFechar.addEventListener("click", function() {
        aviso.remove();
    });

    aviso.appendChild(botaoFechar);

    containerAvisos.appendChild(aviso);

});


// MÓDULO 4: Classes e Estilos

// 1. Selecionar o botão e o card
const botaoTema = document.getElementById("btn-toggle-tema");
const cardModulo4 = document.getElementById("modulo-4");

// 2. Adicionar evento de clique ao botão
botaoTema.addEventListener("click", function() {

    // 3. Alternar a classe dark-theme
    cardModulo4.classList.toggle("dark-theme");

});


// MÓDULO 5: Estilização Condicional

// 1. Selecionar todas as células com a classe situacao
const situacoes = document.getElementsByClassName("situacao");

// 2. Percorrer todas as células utilizando for...of
for (const celula of situacoes) {

    // 3. Verificar o texto de cada célula
    if (celula.textContent.trim() === "Concluído") {

        // 4. Aplicar a cor verde
        celula.style.color = "#22c55e";

    } else if (celula.textContent.trim() === "Pendente") {

        // 5. Aplicar a cor vermelha
        celula.style.color = "#ef4444";

    }

}


// MÓDULO 6: Delegação de Eventos

// 1. Selecionar o container pai
const painelBotoes = document.getElementById("painel-botoes");

// 2. Selecionar o elemento onde aparecerá o resultado
const logBotao = document.getElementById("log-botao");

// 3. Adicionar evento de clique somente ao container pai
painelBotoes.addEventListener("click", function(e) {

    // 4. Verificar se o elemento clicado é um botão
    if (e.target.nodeName === "BUTTON") {

        // 5. Exibir o ID ou texto do botão clicado
        logBotao.textContent = e.target.textContent;

    }

});


// MÓDULO 7: Atributos e Dataset

// 1. Selecionar os elementos HTML
const caixaDestaque = document.getElementById("caixa-destaque");
const btnAlta = document.getElementById("btn-prioridade-alta");
const btnBaixa = document.getElementById("btn-prioridade-baixa");
const btnLimpar = document.getElementById("btn-limpar-atributo");
const infoAtributo = document.getElementById("info-atributo");

// 2. Criar função para atualizar o status do atributo
function atualizarStatus() {

    const prioridade = caixaDestaque.getAttribute("data-prioridade");

    infoAtributo.textContent = prioridade || "Nenhum";

}

// 3. Definir prioridade alta
btnAlta.addEventListener("click", function() {

    caixaDestaque.setAttribute("data-prioridade", "alta");

    atualizarStatus();

});

// 4. Definir prioridade baixa
btnBaixa.addEventListener("click", function() {

    caixaDestaque.setAttribute("data-prioridade", "baixa");

    atualizarStatus();

});

// 5. Remover o atributo de prioridade
btnLimpar.addEventListener("click", function() {

    caixaDestaque.removeAttribute("data-prioridade");

    atualizarStatus();

});


// MÓDULO 8: Arrays e Renderização Dinâmica

// 1. Criar um array global para armazenar as tarefas
const tarefas = [];

// 2. Selecionar os elementos HTML
const formulario = document.getElementById("form-tarefa");
const inputTarefa = document.getElementById("input-tarefa-titulo");
const listaTarefas = document.getElementById("lista-tarefas");

// 3. Criar a função render()
function render() {

    // Limpar a lista antes de atualizar
    listaTarefas.innerHTML = "";

    // Percorrer o array de tarefas
    tarefas.forEach(function(tarefa) {

        // Criar um elemento li
        const item = document.createElement("li");

        // Adicionar o título da tarefa
        item.textContent = tarefa.titulo;

        // Inserir o item na lista
        listaTarefas.appendChild(item);

    });

}

// 4. Adicionar evento de envio ao formulário
formulario.addEventListener("submit", function(event) {

    // Impedir o recarregamento da página
    event.preventDefault();

    // Capturar o título digitado
    const titulo = inputTarefa.value.trim();

    // Verificar se o campo não está vazio
    if (titulo === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Adicionar um novo objeto ao array
    tarefas.push({
        titulo: titulo
    });

    // Atualizar a lista na tela
    render();

    // Limpar o campo de entrada
    inputTarefa.value = "";

});
