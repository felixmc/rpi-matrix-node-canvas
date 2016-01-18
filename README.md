# Raspberry Pi Matrix Node.js Canvas

Simple project that runs on a raspberry pi with an led matrix attached to it, that provides a web interface for drawing on the led matrix in real time.


## Setup

Due to limitations of `node-rpi-rgb-led-matrix`, the project will only work with node v0.10.x

`npm install`


## Run

Controlling the led matrix requires root permissions, so the app must be run with sudo.

`sudo node app`

Open in browser on port 3000.

You should be able to draw on the led matrix from web now.

Because I'm lazy, color picker only works in browsers that support `<input type="color">`.

Mobile support is spotty, only supports repeated taps. I'll take any pointers/pull requests on improving the functionality.

Despite the name, it doesn't actually use html5 canvas.

##Demo

![demo](docs/snap.jpg?raw=true "Demo")
