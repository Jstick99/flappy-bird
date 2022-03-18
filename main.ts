input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Emptyobsticaly = 0
let Bird: game.LedSprite = null
let Ticks = 0
let Obstical: game.LedSprite[] = []
let Index = 0
Obstical = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstical.length > 0 && Obstical[0].get(LedSpriteProperty.X) == 0) {
        Obstical.removeAt(0).delete()
        for (let Obstacle_2 of Obstical) {
            Obstacle_2.change(LedSpriteProperty.X, -1)
        }
    }
    if (Ticks % 3 == 0) {
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != Emptyobsticaly) {
                Obstical.push(game.createSprite(4, Index))
            }
        }
        Emptyobsticaly = randint(0, 4)
    }
    for (let Obstacle3 of Obstical) {
        if (Obstacle3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1000)
})
