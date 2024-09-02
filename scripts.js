// Função para mostrar a seção selecionada
function mostrarSecao(id) {
    // Obtém todas as seções
    var secoes = document.querySelectorAll('.secao');

    // Oculta todas as seções
    secoes.forEach(function(secao) {
        secao.classList.remove('active');
    });

    // Exibe a seção selecionada
    document.getElementById(id).classList.add('active');
}

// Mostra a primeira seção por padrão
document.addEventListener('DOMContentLoaded', function() {
    mostrarSecao('sobre-mim');
});
