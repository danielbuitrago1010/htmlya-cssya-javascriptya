var frase = "daniel";
function mitad(frase) {
    for (let f = 0; f < frase.length/2; f++) {
    console.log(frase.charAt(f));
    }
console.log("<br><br>");
}

function ultimoC(frase) {
console.log("ultimo caracter <br>");
console.log(frase.charAt(frase.length - 1));;
console.log("<br><br>");
}

function inversaC(frase) {
    for (let f = 0; f < frase.length; f++) {
    console.log(frase.charAt(frase.length - f - 1));
    }
console.log("<br><br>");
}

function guionC(frase) {
console.log("imprimir con guion");
    for (let f = 0; f < frase.length; f++) {
    console.log(frase.charAt(f) + "-");
    }
console.log("<br><br>");
}

function cantidadVocales(frase) {
    cant=0;
    for (let f = 0; f < frase.length; f++) {
        if (frase.charAt(f) == "a" || frase.charAt(f) == "e" || frase.charAt(f) == "i" || frase.charAt(f) ==
            "o" || frase.charAt(f) == "u" || frase.charAt(f) == "A" || frase.charAt(f) == "E" || frase.charAt(
            f) == "I" || frase.charAt(f) == "O" || frase.charAt(f) == "U"  ) {
                cant++;


        }
  
    }
console.log("cantidad de vocales:"+cant);

}





mitad(frase);
ultimoC(frase);
inversaC(frase);
guionC(frase);
cantidadVocales(frase);