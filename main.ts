basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showNumber(0)
    }
})
