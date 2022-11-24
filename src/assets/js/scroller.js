export function updateList() {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });

    document.querySelectorAll(".third-color-background").forEach(c => c.classList.remove("third-color-background"));
    document.querySelectorAll(".nav-links")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("third-color-background");
}

window.addEventListener('scroll', () => {
    updateList();
});