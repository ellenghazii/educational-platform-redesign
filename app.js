const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const pages = document.querySelectorAll(".page");

const allNavButtons = document.querySelectorAll("[data-page]");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});

allNavButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetPage = button.getAttribute("data-page");

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(targetPage).classList.add("active");

        allNavButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        document.querySelectorAll(`[data-page="${targetPage}"]`).forEach(btn => {
            btn.classList.add("active");
        });
    });
});