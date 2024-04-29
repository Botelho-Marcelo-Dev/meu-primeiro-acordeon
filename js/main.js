let comandarAcordeon = document.querySelectorAll(".comandarAcordeon")
let textosAcordeon = document.querySelectorAll(".conteudo-acordeon")
comandarAcordeon.forEach((setas, indiceAcordeon) => {
    setas.addEventListener('click', function (event) {
        console.log(setas);
        console.log(indiceAcordeon);
        console.log("----------------------------------");

        if (indiceAcordeon === 0, 1, 2) {
            textosAcordeon[indiceAcordeon].classList.toggle('selecionado');
            setas.src = textosAcordeon[indiceAcordeon].classList.contains('selecionado') ? "images/acordeon-aberto.png" : "images/acordeon-fechado.png"
            comandarAcordeon.forEach((outrasSetas, outroIndice) => {
                console.log(outroIndice);
                if (outroIndice !== indiceAcordeon) {
                    outrasSetas.src = "images/acordeon-fechado.png";
                }
            });
            
            
            // Toggle é um novo método que não estudei no DevQuest, ele é usado para alternar a presença de uma classe em um elemento HTML, facilitando este tipo de função que fiz 

            textosAcordeon.forEach((texto, indiceTexto) => {
                if (indiceTexto !== indiceAcordeon) {
                    texto.classList.remove('selecionado');
                }
                // Esse loop forEach tem a função de percorrer o índice de cada um dos parágrafos dos acordeons até achar um que difere do indiceAcordeon, ao achar ele remove a classe selecionado, não deixando que nada ultrapasse o container e dando um efeito bem legal
            });
        }
    })
});  