const { PNG } = require("pngjs");
const fs = require("fs");

function randomColor() {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);

    return "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("");
}

function createColorPng(hex, filename = "color.png") {
    const png = new PNG({
        width: 256,
        height: 256
    });

    const color = hex.replace("#", "");

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    for (let y = 0; y < 32; y++) {
        for (let x = 0; x < 32; x++) {
            const idx = (32 * y + x) * 4;

            png.data[idx] = r;
            png.data[idx + 1] = g;
            png.data[idx + 2] = b;
            png.data[idx + 3] = 255;
        }
    }

    png.pack()
        .pipe(fs.createWriteStream(filename));
}

module.exports = { randomColor, createColorPng };