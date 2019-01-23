//Test file for the pxt-kitronik-zip-tile package
//Sets up a ZIP Tile display with 8 columns and 8 rows
//Brightness is set to 128
//The ZIP Tile is initially set to all green
//Pressing button A clears the Tile and sets the ZIP LED at coordinates (4, 5) to be purple and then makes the changes visible
//Pressing button B will scroll the message 'Hello world' left across the Tile with a delay of 20ms, with white text on a green background

let display: Kitronik_Zip_Tile.ZIPTileDisplay = null
display = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
display.setBrightness(128)
display.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Green))
input.onButtonPressed(Button.A, function () {
	display.clear()
    display.show()
    display.setMatrixColor(4, 5, Kitronik_Zip_Tile.colors(ZipLedColors.Purple))
    display.show()
})
input.onButtonPressed(Button.B, function () {
    display.scrollText(
    "Hello world",
    Kitronik_Zip_Tile.TextDirection.Left,
    20,
    Kitronik_Zip_Tile.TextStyle.Background,
    Kitronik_Zip_Tile.colors(ZipLedColors.Green),
    Kitronik_Zip_Tile.colors(ZipLedColors.White)
    )
})