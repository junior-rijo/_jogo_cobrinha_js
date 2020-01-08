let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");//redenriza o desenho//
let box = 32; //pixels//
let snake = [];//array//
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() { //desenha e definir o canvas//
    context.fillStyle = "lightgreen" //trabalha a cor do canvaas//
    context.fillRect(0, 0, 16 * box, 16 * box);//desenha o retangulo//
}

function criarCobrinha () {
    for(i=0; i < snake.length; i++) {
       context.fillStyle ="green";
       context.fillRect(snake[i].x, snake[i].y,box,box); 
    }
}

criarBG();
criarCobrinha();