input.onButtonPressed(Button.A, function () {
    if (setPlace == 0) {
        input2 += 1
        basic.showNumber(input2)
        basic.clearScreen()
    } else if (setPlace == 1) {
        input2 += 10
        basic.showNumber(input2)
    } else if (setPlace == 2) {
        input2 += 100
        basic.showNumber(input2)
    } else if (setPlace == 3) {
        input2 += 1000
        basic.showNumber(input2)
    } else if (setPlace == 4) {
        input2 += 10000
        basic.showNumber(input2)
    } else if (setPlace == 5) {
        input2 += 100000
        basic.showNumber(input2)
    } else if (setPlace == 6) {
        input2 += 1000000
        basic.showNumber(input2)
    } else if (setPlace == 6) {
        input2 += 10000000
        basic.showNumber(input2)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (input2 > multiplier) {
        multiplier += multiplier
        multiplierValue += 1
    }
    if (input2 != multiplier) {
        multiplier = multiplier / 2
        multiplierValue += -1
    }
    while (input2 > 0) {
        if (input2 >= multiplier) {
            led.plot((24 - multiplierValue) % 5, (24 - multiplierValue) / 5)
            input2 = input2 - multiplier
            multiplier = multiplier / 2
            multiplierValue += -1
        } else {
            multiplier = multiplier / 2
            multiplierValue += -1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    setPlace += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    reset()
})
function reset () {
    setPlace = 0
    input2 = 0
    multiplier = 1
    multiplierValue = 0
    basic.showNumber(input2)
    basic.clearScreen()
}
let multiplierValue = 0
let multiplier = 0
let input2 = 0
let setPlace = 0
reset()
