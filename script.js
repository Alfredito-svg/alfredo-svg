function mostrarRegalo() {
    const inicio = document.getElementById('pantalla-inicio');
    const regalo = document.getElementById('pantalla-regalo');
    const musica = document.getElementById('bg-music'); // Referencia al audio

    inicio.classList.add('oculto');

    setTimeout(() => {
        inicio.style.display = 'none';
        regalo.style.display = 'flex';
        
        // --- AQUÍ INICIA LA MÚSICA ---
        if (musica) {
            musica.play().catch(error => {
                console.log("El navegador bloqueó el autoplay, pero sonará al tocar la carta.");
            });
        }
        
        setTimeout(() => {
            regalo.classList.remove('oculto');
            regalo.classList.add('visible');
        }, 10);
        
    }, 500);

    console.log("Corte de katana: Transición iniciada...");
}

function volver() {
    const inicio = document.getElementById('pantalla-inicio');
    const regalo = document.getElementById('pantalla-regalo');

    regalo.classList.remove('visible');
    regalo.classList.add('oculto');

    setTimeout(() => {
        regalo.style.display = 'none';
        inicio.style.display = 'flex';
        
        setTimeout(() => {
            inicio.classList.remove('oculto');
            inicio.classList.add('visible');
        }, 10);
    }, 500);
}
function abrirCarta() {
    const wrapper = document.querySelector('.sobre-wrapper');
    const instruccion = document.querySelector('.instruccion-carta');
    const musica = document.getElementById('musica-fondo'); // Buscamos el audio por su ID

    if (!wrapper.classList.contains('sobre-abierto')) {
        wrapper.classList.add('sobre-abierto');
        
        // --- INICIO DE MÚSICA ---
        if (musica) {
            musica.play().catch(error => {
                console.log("Error al reproducir: El usuario debe interactuar primero.");
            });
        }
        // ------------------------

        if (instruccion) instruccion.style.opacity = "0"; 
        
        setTimeout(() => {
            // RECUERDA: Escribe tu mensaje dentro de las comillas
            escribirMensaje("Sorpresaaa! jaja Feliz San Valentin Yumi, por parte tanto de Kazu como de Jonas. Sí, ambas son las mismas personas pero ciertamente un día me conociste como Kazuya, no sabría que ese mismo día que te encontre serías una de las personas mas maravillosas que puedo tener en mi vida... A pesar de la distancia; a pesar de la poca comunicación, el cariño sigue siendo el mismo y eso lo valoro muchísimo como te dije antes, eres una persona la cual admiro bastante nada mas por el hecho de que eres una buena mujer que se trabaja lo suyo y estás enfocada en salir adelante pase lo que pase, me gusta muchisimo tu manera de ser y tu personalidad en sí porque siempre mantienes una sonrisa a pesar de todo y si... Puede que no haya estado en los malos momentos o en los peores incluso, pero eso no dicta si de verdad estaría o no a pesar de todo.  Y te lo juro que si estaría para tí pase lo que pase, puede sonar todo muy cursi jaja pero quise tomarme este detallito como algo especial y también porque es la única manera de hacerte llegar una carta de mi parte. Para finalizar, quiero decirte que gracias, gracias por ese tiempo en el que compartiste conmigo bastante y hablabamos de muchas muchas cosas, aprecio cada momento, cada sonrisa, cada charla, vuelvo y repito ''Eres sumamente importante para mi'' y tengo fé de que en algún momento voy a tener el privilegio de verte y compartir muchísimo más (me debes el tour por Japón todavía jaja), con mucho amor de mi parte y con todo el corazón para tí. Att: Jonas/Kazu");
        }, 1200);
    }
}
function escribirMensaje(texto) {
    const contenedor = document.getElementById('texto-mensaje');
    const papel = document.getElementById('papel-mensaje'); 
    const lateral = document.getElementById('contenedor-lateral-derecho'); // <--- Referencia al botón
    let i = 0;
    contenedor.innerHTML = ""; 

    const intervalo = setInterval(() => {
        if (i < texto.length) {
            contenedor.innerHTML += texto.charAt(i);
            i++;

            let nuevaAltura = contenedor.scrollHeight + 80;
            papel.style.height = nuevaAltura + "px";

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });

        } else {
            clearInterval(intervalo);
            // ESTO ES LO QUE FALTABA:
            if (lateral) {
                lateral.style.display = 'flex'; // Hace aparecer el botón lateral
            }
        }
    }, 100); 
}
function accionFinal() {
    alert("¡Te quiero ;b! Feliz 14 de Febrero ❤️");
    // Aquí puedes poner cualquier otra sorpresa
}