const canvas = document.getElementById("buildCanvas");
const ctx = canvas.getContext("2d");

let w, h;

function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const buildings = [];

for (let i = 0; i < 70; i++) {
    buildings.push({
        x: Math.random() * w,
        width: 2 + Math.random() * 4,
        height: 0,
        maxHeight: 120 + Math.random() * (h * 0.6),
        speed: 0.6 + Math.random() * 1.8,
        opacity: 0.15 + Math.random() * 0.25
    });
}

function draw() {
    ctx.clearRect(0, 0, w, h);

    buildings.forEach(b => {
        if (b.height < b.maxHeight) {
            b.height += b.speed;
        }

        ctx.fillStyle = `rgba(212,175,55,${b.opacity})`;
        ctx.fillRect(
            b.x,
            h - b.height,
            b.width,
            b.height
        );
    });

    requestAnimationFrame(draw);
}

draw();

/* ===== HIDE PRELOADER AFTER LOAD ===== */
window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");

        preloader.classList.add("fade-out");

        setTimeout(() => {
            preloader.style.display = "none";
        }, 1300); // უნდა ემთხვეოდეს transition-ს

    }, 1500); // რამდენ ხანს დარჩეს პრელოადერი
});
