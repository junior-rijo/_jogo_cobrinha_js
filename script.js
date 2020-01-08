let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//redenriza o desenho//
let box = 32; //pixels//

function criarBG() { //desenha e definir o canvas//
    context.fillStyle = "lightgreen" //trabalha a cor do canvaas//
    context.fillRect(0, 0, 16 * box, 16 * box);//desenha o retangulo//
}
criarBG();