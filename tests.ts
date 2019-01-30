//Test file for the pxt-kitronik-zip-tile package
//Sets up a ZIP Tile display with a single ZIP Tile
//Brightness is set to 128
//The ZIP Tile is initially set to show a constantly rotating rainbow
//Pressing button A will scroll the message 'Hello world' left across the Tile with a delay of 20ms, with white text on a green background
//Pressing button B clears the Tile and sets the ZIP LED at coordinates (4, 5) to be purple and then makes the changes visible
//Pressing buttons A + B together returns the Tile to showing a constantly rotating rainbow

let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
let rainbowFlag = 0
input.onButtonPressed(Button.AB, function () {
    rainbowFlag = 1
    tileDisplay.showRainbow(1, 360)
    tileDisplay.show()
})
input.onButtonPressed(Button.A, function () {
    rainbowFlag = 0
    tileDisplay.scrollText(
    "Hello World",
    Kitronik_Zip_Tile.TextDirection.Left,
    20,
    Kitronik_Zip_Tile.TextStyle.Background,
    Kitronik_Zip_Tile.colors(ZipLedColors.Green),
    Kitronik_Zip_Tile.colors(ZipLedColors.White)
    )
})
input.onButtonPressed(Button.B, function () {
    rainbowFlag = 0
    tileDisplay.clear()
    tileDisplay.show()
    tileDisplay.setMatrixColor(4, 5, Kitronik_Zip_Tile.colors(ZipLedColors.Purple))
    tileDisplay.show()
})
rainbowFlag = 1
tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
tileDisplay.setBrightness(128)
tileDisplay.showRainbow(1, 360)
tileDisplay.show()
basic.forever(function () {
    if (rainbowFlag == 1) {
        tileDisplay.rotate(1)
        tileDisplay.show()
    }
})
