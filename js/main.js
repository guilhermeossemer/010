
const btnTopo = document.getElementById("btnTopo");

window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("ano").textContent = new Date().getFullYear();

