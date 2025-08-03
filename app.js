// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema. :)

let amigos = []

function agregarAmigo () {
    let amigo = document.getElementById("amigo").value

    if(
        amigo === "" || amigos.includes(amigo))
        alert("La entrada no es correcta, vuelve a intentarlo.")
    else {
            amigos.push(amigo)
            document.getElementById("amigo").value = ""
    }
    console.log(amigos)
    mostrarListaAmigos()
}

function mostrarListaAmigos () {

    let listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = ""

    amigos.forEach(amigo => {
        let li = document.createElement("li")
        li.textContent = amigo
        listaAmigos.appendChild(li)
    });
}

function sortearAmigo () {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[indiceAleatorio]
        document.getElementById("resultado").innerHTML = amigoSorteado
    }
    else {
        alert("No hay amigos para sortear.")
    }
}