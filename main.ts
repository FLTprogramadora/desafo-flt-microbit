function CUANDO_ME_QUEDO_SIN_CORVINAS () {
    if (CORVINAS_SIN_PESCAR == 0) {
        basic.showLeds(`
            # . . . .
            # # . # #
            # # # # #
            # # . # #
            # . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
}
function CUANDO_ME_QUEDO_SIN_BESUGOS () {
    if (BESUGOS_SIN_PESCAR == 0) {
        basic.showLeds(`
            # . . . .
            # # . # #
            # # # # #
            # # . # #
            # . . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
}
function CONTAR_CUANDO_ME_QUEDO_SIN_ANGUILAS () {
    if (ANGUILAS_SIN_PESCAR >= 1) {
        basic.showNumber(RONDAS_DE_PESCA)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    ANGUILAS = randint(1, input.lightLevel())
    BESUGOS = randint(1, input.lightLevel())
    CORVINAS = randint(1, input.lightLevel())
    ANGUILAS_SIN_PESCAR = PECES_TOTALES_DE_CADA_ESPECIE - ANGUILAS
    BESUGOS_SIN_PESCAR = PECES_TOTALES_DE_CADA_ESPECIE - BESUGOS
    CORVINAS_SIN_PESCAR = PECES_TOTALES_DE_CADA_ESPECIE - CORVINAS
})
input.onButtonPressed(Button.AB, function () {
    CONTAR_CUANDO_ME_QUEDO_SIN_ANGUILAS()
    CUANDO_ME_QUEDO_SIN_BESUGOS()
    CUANDO_ME_QUEDO_SIN_CORVINAS()
})
input.onButtonPressed(Button.B, function () {
    if (RONDAS_DE_PESCA == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        if (ANGUILAS_SIN_PESCAR <= 0) {
            basic.showNumber(0)
        } else {
            basic.showNumber(ANGUILAS_SIN_PESCAR)
        }
        basic.clearScreen()
        basic.showLeds(`
            # . . . .
            # # . # #
            # # # # #
            # # . # #
            # . . . .
            `)
        basic.pause(2000)
        if (BESUGOS_SIN_PESCAR <= 0) {
            basic.showNumber(0)
        } else {
            basic.showNumber(BESUGOS_SIN_PESCAR)
        }
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # . . # .
            # # # # #
            # . . # .
            . . . . .
            `)
        basic.pause(2000)
        if (CORVINAS_SIN_PESCAR <= 0) {
            basic.showNumber(0)
        } else {
            basic.showNumber(CORVINAS_SIN_PESCAR)
        }
        basic.clearScreen()
        RONDAS_DE_PESCA += 1
    } else {
        DETERMINAR_PECES_EN_EL_RIO()
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(2000)
        if (ANGUILAS_SIN_PESCAR <= 0) {
            basic.showNumber(0)
        } else {
            basic.showNumber(ANGUILAS_SIN_PESCAR)
        }
        basic.clearScreen()
        basic.showLeds(`
            # . . . .
            # # . # #
            # # # # #
            # # . # #
            # . . . .
            `)
        basic.pause(2000)
        if (BESUGOS_SIN_PESCAR <= 0) {
            basic.showNumber(0)
        } else {
            basic.showNumber(BESUGOS_SIN_PESCAR)
        }
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # . . # .
            # # # # #
            # . . # .
            . . . . .
            `)
        basic.pause(2000)
        if (CORVINAS_SIN_PESCAR <= 0) {
            basic.showNumber(0)
        } else {
            basic.showNumber(CORVINAS_SIN_PESCAR)
        }
        basic.clearScreen()
        RONDAS_DE_PESCA += 1
    }
})
function DETERMINAR_PECES_EN_EL_RIO () {
    ANGUILAS_SIN_PESCAR = ANGUILAS_SIN_PESCAR - ANGUILAS
    BESUGOS_SIN_PESCAR = BESUGOS_SIN_PESCAR - BESUGOS
    CORVINAS_SIN_PESCAR = CORVINAS_SIN_PESCAR - CORVINAS
}
let CORVINAS = 0
let BESUGOS = 0
let ANGUILAS = 0
let ANGUILAS_SIN_PESCAR = 0
let BESUGOS_SIN_PESCAR = 0
let CORVINAS_SIN_PESCAR = 0
let PECES_TOTALES_DE_CADA_ESPECIE = 0
let RONDAS_DE_PESCA = 0
RONDAS_DE_PESCA = 0
PECES_TOTALES_DE_CADA_ESPECIE = 255
basic.showString("PESCAR")
