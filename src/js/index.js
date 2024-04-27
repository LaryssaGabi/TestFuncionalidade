window.onload = function () {
    alert("Olá mundo")
}


const botao = document.getElementById("textNew");
const paragrafo = document.getElementById("paragrafo");
const textoAntigo = "😊 Texto Antigo 😊";
const textoNovo = "🚀Texto Novo🚀 ";

botao.addEventListener("click", function () {
    if (paragrafo.innerText === textoAntigo) {
        paragrafo.innerText = textoNovo;
        botao.innerText = "Voltar";
    } else {
        paragrafo.innerText = textoAntigo;
        botao.innerText = "Alterar o texto";
    }
});




const iniciarContagem = document.getElementById("contadorStart")
const zerarContador = document.getElementById("zerarContador");
const contadorValor = document.getElementById("contadorValor");
let contador = 0;

contadorStart.addEventListener("click", function () {
    contador++;
    contadorValor.innerText = contador;
});

zerarContador.addEventListener("click", function () {
    contador = 0;
    contadorValor.innerText = contador;
});



const alterarCor = document.getElementById("corTexto")
const alterarCorClicar = document.getElementById("clickCor");
const voltarCorClicar = document.getElementById("clickCorMove");


alterarCorClicar.addEventListener('click', function () {
    const corEscolhida = "red";
    alterarCor.style.color = corEscolhida;
})

voltarCorClicar.addEventListener('click', function () {
    const corAnterior = "#000";
    alterarCor.style.color = corAnterior;
})




const listaTarefa = document.getElementById("listaTarefa");
const tarefas = ["Ir para academia", "Me arrumar e ir para o serviço", "Estudar", "Passar no supermercado"];

tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(` ${index + 1}. ${tarefa}`));
    listaTarefa.appendChild(li);
});


const marcarTarefa = document.querySelectorAll("#listaTarefa input[type='checkbox']");

marcarTarefa.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const cortarTarefa = this.parentNode;
        if (this.checked) {
            cortarTarefa.style.textDecoration = 'line-through';
        } else {
            cortarTarefa.style.textDecoration = 'none';
        }
    });
});