function cambiarTamañoLetra() {
    let elemento = document.body;
    let fontSize = 20;
    console.log(elemento)
    setInterval(() => {
    if (fontSize === 20) {
        fontSize = 60;
    } else {
        fontSize = 20;
    }
    elemento.style.fontSize = `${fontSize}px`;
    }, 1000); // Ejecutar cada 1 segundo

}

window.addEventListener('load', () => {
    // código que se ejecuta después de que se carga toda la página
    cambiarTamañoLetra();
  });
  