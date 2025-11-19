/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Nov 2025
 * This program moves a light around the
 *  perimiter of the microbit
*/

// variable
let sprite: game.LedSprite = null
let counterOne: number = 0
let counterTwo: number = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // creates the sprite
    sprite = game.createSprite(0, 0)

        while (counterOne < 4) {
            // moves the sprite forwards one space
            basic.pause(250)
            counterOne = counterOne + 1
            sprite.move(1)
            basic.pause(250)

            while (counterOne == 4) {
                // turns the sprite right 90 degrees
                sprite.turn(Direction.Right, 90)
                counterOne = 0
                counterTwo = counterTwo + 1
                basic.pause(500)

                if (counterTwo == 4) {
                    // deletes the sprite after it is done
                    sprite.delete()
                    basic.showIcon(IconNames.Yes)
                }
            }
        }
    
})
