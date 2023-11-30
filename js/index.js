function changeBg() {
    let r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = "rgba(" + r + " , " + g + "," + b + ")";
}
setInterval(changeBg, 1000);