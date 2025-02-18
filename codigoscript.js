// Função para atualizar dinamicamente o rodapé conforme o usuário digita
function updateFooter() {
    const name = document.getElementById('nameInput').value;
    const footerText = document.getElementById('footerText');
    footerText.textContent = name; // Atualiza o texto do rodapé com o nome digitado
}