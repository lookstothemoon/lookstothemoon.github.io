function update() {
    let rei = document.getElementById("rei");
    let angle = parseInt(rei.style.rotate) || 0;
    angle += 1
    rei.style.rotate = `${angle % 360}deg`;
    requestAnimationFrame(update);
}
requestAnimationFrame(update);