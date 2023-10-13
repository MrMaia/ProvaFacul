document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro-form");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        // Exibe a popup
        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        // Fecha a popup ao clicar no botão de fechar
        popup.style.display = "none";
    });
});
