const cambiarColor = () => {
    let elemento = document.querySelectorAll(".element");
    let btn = document.querySelector("#btn");

    btn.addEventListener('click', () => {
        elemento.forEach(element => {
            if (element.classList.contains('even')){
                element.classList.remove('even');
                element.classList.add('odd');
            } else {
                element.classList.remove('odd');
                element.classList.add('even');
            }
        })
    })

}