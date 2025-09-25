function adicionar_classe(id, classe) {
    const elemento_id = document.getElementById(id)
    elemento_id.classList.add(classe)
}

function mudar_cor(id) {
    const objeto_svg = document.getElementById(id)
    setTimeout(() => {adicionar_classe(id, 'transicao_azul_svg')}, 1000)
    objeto_svg.style.fill = "blue"
}

function mudar_texto() {
    const texto = document.getElementById()
}