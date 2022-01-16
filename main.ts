input.onButtonPressed(Button.B, function () {
    Dinosaur.change(LedSpriteProperty.Y, -2)
    basic.pause(200)
    Dinosaur.change(LedSpriteProperty.Y, 2)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    while (game.isRunning()) {
        障礙 = game.createSprite(5, randint(5, 3))
        for (let index = 0; index < 4; index++) {
            障礙.change(LedSpriteProperty.X, -1)
            basic.pause(200)
        }
        if (障礙.isTouchingEdge()) {
            障礙.delete()
        }
    }
})
let 障礙: game.LedSprite = null
let Dinosaur: game.LedSprite = null
Dinosaur = game.createSprite(0, 4)
if (Dinosaur.isTouching(障礙)) {
    game.gameOver()
}
