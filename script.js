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

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; //posição para ponto de partida
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;//acrescentado quadrados coordenadas//
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if (direction == "dow") snakeY += box;
    snake.pop();

    let newHead = { //metodo para acrescentar elemento
        x: snakeX,
        y: snakeY,

    }
    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100); //para iniciar jogo//
