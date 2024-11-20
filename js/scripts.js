// Parallax effect for layers
document.addEventListener("mousemove", (event) => {
    const layers = document.querySelectorAll(".layer");
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

    layers.forEach((layer, index) => {
        const depth = layer.getAttribute("data-depth");
        const moveX = mouseX * depth * 50;
        const moveY = mouseY * depth * 50;

        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

