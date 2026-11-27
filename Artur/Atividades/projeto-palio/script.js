const tarefas = document.querySelectorAll(".tarefa input");
const progresso = document.getElementById("progresso");
const barra = document.getElementById("barra-progresso");
const btnResetar = document.getElementById("btn-resetar");

const CHAVE = "garage-palio-progresso";

// Recuperar modificações salvas
const dadosSalvos = JSON.parse(
    localStorage.getItem(CHAVE) || "{}"
);

tarefas.forEach(tarefa => {
    tarefa.checked = dadosSalvos[tarefa.id] === true;
});

// Atualizar e salvar o progresso
function atualizarProgresso() {
    let concluidas = 0;
    const dados = {};

    tarefas.forEach(tarefa => {
        dados[tarefa.id] = tarefa.checked;

        if (tarefa.checked) {
            concluidas++;
        }
    });

    const porcentagem = Math.round(
        (concluidas / tarefas.length) * 100
    );

    progresso.textContent =
        `${concluidas} de ${tarefas.length} modificações concluídas`;

    barra.style.width = `${porcentagem}%`;
    barra.textContent = `${porcentagem}%`;
    barra.setAttribute("aria-valuenow", porcentagem);

    localStorage.setItem(CHAVE, JSON.stringify(dados));
}

// Detectar alterações no checklist
tarefas.forEach(tarefa => {
    tarefa.addEventListener("change", atualizarProgresso);
});

// Reiniciar todas as modificações
btnResetar.addEventListener("click", () => {
    tarefas.forEach(tarefa => {
        tarefa.checked = false;
    });

    atualizarProgresso();
});

// Atualizar ao abrir a página
atualizarProgresso();