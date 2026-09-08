function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2400);
}


// Prevent placeholder links from refreshing the page
document.querySelectorAll(
    ".socials a, .footer-links a, .browser-link"
).forEach(link => {

    link.addEventListener("click", function (event) {

        if (this.getAttribute("href") === "#") {
            event.preventDefault();
        }

    });

});


// Resource generation buttons
document.querySelectorAll(".resource").forEach(button => {

    button.addEventListener("click", function () {

        const originalContent = this.innerHTML;

        this.innerHTML =
            "✓ <span>Resource generation started</span>";

        setTimeout(() => {

            this.innerHTML = originalContent;

        }, 1800);

    });

});