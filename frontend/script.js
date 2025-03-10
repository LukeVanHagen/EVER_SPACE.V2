function mostrarCadastro() {
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("acesso").style.display = "none";
    document.getElementById("tabCadastro").disabled = true;
    document.getElementById("tabAcesso").disabled = false;
}

function mostrarAcesso() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("acesso").style.display = "block";
    document.getElementById("tabCadastro").disabled = false;
    document.getElementById("tabAcesso").disabled = true;
}

document.getElementById("rfidAcesso").addEventListener("input", async function () {
    if (this.value.length >= 10) { // Ajuste conforme o tamanho do RFID
        await verificarAcesso(this.value);
        this.value = ""; // Limpa o campo após leitura
    }
});

async function verificarAcesso(rfid) {
    const mensagemAcesso = document.getElementById("mensagemAcesso");

    const response = await fetch("http://localhost:8080/acesso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rfid })
    });

    const result = await response.json();

    mensagemAcesso.textContent = result.message;
    mensagemAcesso.className = response.status === 200 ? "sucesso" : "erro";
    mensagemAcesso.style.opacity = "1";

    // Oculta a mensagem após 3 segundos com efeito de fade-out
    setTimeout(() => {
        mensagemAcesso.style.opacity = "0";
    }, 3000);
}


document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const rfid = document.getElementById("rfid").value;

    await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha, rfid })
    });

    document.getElementById("userForm").reset();
    
    // Atualiza a lista de usuários automaticamente
    carregarUsuarios();
});

// Função para carregar os usuários cadastrados do backend
async function carregarUsuarios() {
    try {
        const response = await fetch("http://localhost:8080/usuarios");
        if (response.ok) {
            const usuarios = await response.json();
            const userList = document.getElementById("userList");

            // Limpar a tabela antes de adicionar os novos usuários
            userList.innerHTML = "";
            usuarios.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${user.nome}</td><td>${user.email}</td>`;
                userList.appendChild(row);
            });
        } else {
            console.error("Erro ao carregar usuários:", response.statusText);
        }
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
    }
}

// Chamar a função para carregar os usuários assim que a página for carregada
window.onload = carregarUsuarios;

