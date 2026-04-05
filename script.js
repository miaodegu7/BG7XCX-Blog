document.addEventListener("DOMContentLoaded", () => {
    const localLinks = document.querySelectorAll('a[href$=".html"]');

    localLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (!href || link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }

            event.preventDefault();
            document.body.classList.add("page-transitioning");

            window.setTimeout(() => {
                window.location.href = href;
            }, 260);
        });
    });
});
