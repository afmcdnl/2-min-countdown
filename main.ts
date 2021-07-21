let Time = 120
basic.forever(function () {
    basic.pause(1000)
    Time += -1
    if (Time == 60) {
        basic.showNumber(Time)
    } else if (Time == 30) {
        basic.showNumber(Time)
    } else if (Time == 10) {
        basic.showNumber(Time)
    } else if (Time == 5) {
        basic.showNumber(Time)
    } else if (Time == 3) {
        basic.showNumber(Time)
    } else if (Time == 2) {
        basic.showNumber(Time)
    } else if (Time == 1) {
        basic.showNumber(Time)
    }
})
