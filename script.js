document.addEventListener("DOMContentLoaded", () => {
    const projetos = document.querySelectorAll(".project-card"); // Mudado de .projeto para .project-card

    projetos.forEach(projeto => {
        projeto.addEventListener("mouseenter", () => {
            projeto.style.boxShadow = "0px 0px 20px rgba(0, 212, 255, 0.8)";
        });

        projeto.addEventListener("mouseleave", () => {
            projeto.style.boxShadow = "none";
        });
    });
});