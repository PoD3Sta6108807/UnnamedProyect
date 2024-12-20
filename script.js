const textbox = document.querySelector(".keyboard--textbox");

let code = [];

let inputs = document.querySelectorAll(".keyboard__button");

inputs.forEach(input => {
    input.addEventListener('click', () => {
        code2 = document.createElement("SPAN");
        code = input.textContent;
        code2.textContent = code;
        textbox.appendChild(code2);
        if (textbox.textContent.length >= 11) {
            textbox.removeChild(textbox.lastElementChild)
            alert("MUY LARGO >:(")
        }
    })
})

function del() {
    textbox.removeChild(textbox.lastElementChild);
}

let amount = 0;
let sec1 = false;
let sec2 = false;
let sec3 = false;
let sec4 = false;
let sec5 = false;

function enter() {
    if (textbox.textContent == "9rk") {
        const ninerk = document.querySelector(".nueverk");
        ninerk.style.display = "block";
        alert("Te puedo ver...");
    }
    else if (textbox.textContent == "120808") {
        alert("mi cumple! :D lo recordaste!");
        if (sec1 == false) {
            amount++;
            sec1 = true;
        }
    }
    else if (textbox.textContent == "jinge") {
        alert("aun no :p, pon otro codigo");
        if (sec2 == false) {
            amount++;
            sec2 = true;
        }
    }
    else if (textbox.textContent == "cuanto") {
        alert(`te quedan ${amount} de 3 secretos :p algunos se mostraran en la caja azul del medio (este no cuenta como secreto xd)`);
    }
    else if (textbox.textContent == "layout") {
        const lay = document.querySelector(".lay");
        lay.style.display = "block";
        alert("algo asi ;) (ver img)")
        if (sec3 == false) {
            amount++;
            sec3 = true;
        }
    }
}