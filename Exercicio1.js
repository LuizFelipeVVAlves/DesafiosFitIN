function calcularRaizes(a, b, c) {
    var delta = b * b - 4 * a * c;
    if (delta > 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Duas raízes reais: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
        var x = -b / (2 * a);
        console.log(`Uma raiz real (raiz dupla): x = ${x}`);
    } else {
        console.log("A equação não possui raízes reais.");
    }
}

var a = parseFloat(prompt("Digite o coeficiente a: "));
var b = parseFloat(prompt("Digite o coeficiente b: "));
var c = parseFloat(prompt("Digite o coeficiente c: "));

calcularRaizes(a, b, c);
