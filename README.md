# pxt-kitronik-zip-tile

Custom blocks for www.kitronik.co.uk/5645 ZIP Tile for BBC micro:bit. 
See website for example code.

## Overview
The ZIP Tile is an 8x8 ZIP LED display for the BBC micro:bit.
The Tiles can be used individually or arranged into larger multi-tile displays, connecting edge-to-edge (see the datasheet on the Kitronik product page for more details).
Use the Tiles to display full colours, draw images with individual ZIP LEDs and to scroll text across the display. 

## Setup
Depending on how many ZIP Tiles are being used and how they are connected, the 'tileDisplay' variable needs to be initialised in different ways. This will make sure that any text displayed on the tile displays in the correct way. It is always assumed with these positions that the BBC micro:bit is the correct way up.
The first number in the function is the number of ZIP Tiles connected horizontally, and the second is the number of ZIP Tiles connected vertically. 'UBitLocations' is explained below.

Single Tile:
```blocks
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
```
The BBC micro:bit location is 'Hidden' as it is attached to the rear of the ZIP Tile.

Single Tile:
```blocks
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Visible)
```
The BBC micro:bit location is 'Visible' as it is attached to the front of the ZIP Tile.

2 Tiles in a single row (connected side-by-side):
```blocks
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(2, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
```
The BBC micro:bit location is 'Hidden' as it is attached to the rear of the first ZIP Tile.

2 Tiles in a single column (connected top-to-top):
```blocks
let tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 2, Kitronik_Zip_Tile.UBitLocations.Visible)
```
The BBC micro:bit location is 'Visible' as it is attached to the front of the top ZIP Tile.

(Note: There are diagrams in the product datasheet explaining BBC micro:bit location more clearly)

## Scroll Text
The ZIP Tile can be used to display any alphanumeric string by scrolling it across the Tile (or Tiles) in use.
Messages can be scrolled 'Left' or 'Up'. (Note: Both are possible for a single Tile, but text can only be scrolled 'Left' for a single row of Tiles, and 'Up' for 2 Tiles connected top-to-top).
Messages can have any colour text, and can also be formatted to be underlined or have a background colour displayed. (Note: It is not possible to have 'Underlined' formatting for 2 Tiles connected top-to-top).
By altering the 'delay' time, messages will scroll at varying speeds (a low value delay leads to fast scrolling and vice versa).
Some examples are shown below:
```blocks
tile.scrollText(
    "Hello world",
    Kitronik_Zip_Tile.TextDirection.Left,
    25,
    Kitronik_Zip_Tile.TextStyle.None,
    Kitronik_Zip_Tile.colors(ZipLedColors.Red),
    Kitronik_Zip_Tile.colors(ZipLedColors.Red)
)
```
('Hello world' scrolling left with a delay of 25ms, no formatting, red text colour)

```blocks
tile.scrollText(
    "Hello world",
    Kitronik_Zip_Tile.TextDirection.Left,
    15,
    Kitronik_Zip_Tile.TextStyle.Underlined,
    Kitronik_Zip_Tile.colors(ZipLedColors.Green),
    Kitronik_Zip_Tile.colors(ZipLedColors.Red)
)
```
('Hello world' scrolling left with a delay of 15ms, green underlined formatting, red text colour)

```blocks
tile.scrollText(
    "Hello world",
    Kitronik_Zip_Tile.TextDirection.Up,
    50,
    Kitronik_Zip_Tile.TextStyle.Background,
    Kitronik_Zip_Tile.colors(ZipLedColors.Blue),
    Kitronik_Zip_Tile.colors(ZipLedColors.Red)
)
```
('Hello world' scrolling up with a delay of 50ms, blue background formatting, red text colour)

## Other blocks

The other blocks in the package can be used to...
Display a single colour across the whole Tile (or Tiles):
```blocks
tile.showColor(Kitronik_Zip_Tile.colors(ZipLedColors.Red))
```
Set a particular ZIP LED to a particular colour:
```blocks
tile.setMatrixColor(4, 5, Kitronik_Zip_Tile.colors(ZipLedColors.Red))
```
Make that change visible on the ZIP Tile:
```blocks
tile.show()
```
Display a rainbow of colours across the ZIP Tile:
```blocks
tile.showRainbow(1, 360)
```
Rotate the ZIP LEDs that are currently displayed to the next one along (or whatever rotation step change is set):
```blocks
tile.rotate(1)
```
Set the ZIP Tile brightness to a particular value between 0 and 255:
```blocks
tile.setBrightness(128)
```
Clear the ZIP Tile display:
```blocks
tile.clear()
```

## Supported Targets

* for PXT/microbit
(The metadata above is needed for package search.)

## License

MIT
