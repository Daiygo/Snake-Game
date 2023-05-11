import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"

import { update as updateFood, draw as drawFood } from "./food.js"

import { outsideGrid } from "./grid.js"
import { updatescore } from "./score.js"

// defini uma constante gameBoard que recebe a div game-board do html
const gameBoard = document.getElementById('game-board')

// defini a variável do ultimo frame como 0 que será alterado no decorrer do código (fps)
let lastRenderTime = 0
let gameOver = false

// chamo a animação pela primeira vez
requestAnimationFrame(main)

// defino a função main que inicia a aplicação (começa a rodar o jogo) 
// com o parâmetro currentTime defino através da função que ele fará os fps do jogo
function main(currentTime) {
    if (gameOver) {
        if (confirm('Lost!')) {
            location = '/'
        }
        close.confirm()
    }

    // defino que a animação deve ser em frames para o curentTime acima
    requestAnimationFrame(main)

    // defino que o currentTime (fps atual) - lastRenderTime (0) / 1000s será o valor da constante secondsSinceLastRender
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    updatescore()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}




