basic.showIcon(IconNames.Heart)
let i = 0
basic.forever(function () {
    for (let i = 0; i <= 255; i++) {
        led.setBrightness(i)
        basic.pause(2)
    }
    for (let i = 0; i <= 255; i++) {
        led.setBrightness(255 - i)
        basic.pause(2)
    }
})
