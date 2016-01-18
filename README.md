# Raspberry PI Matrix Node.js Canvas

Due to limitations of `node-rpi-rgb-led-matrix`, the project will only work with node v0.10.x

Make sure led matrix is attached to raspberry pi.


## Setup

`npm install`


## Run

Controlling the led matrix requires root permissions, so the app must be run with sudo.

`sudo node app`

Open in browser on port 3000.

You should be able to draw on the led matrix from web now.

Mobile support is spotty, only supports repeated taps.


##Demo

![demo](docs/snap.jpg?raw=true "Demo")
