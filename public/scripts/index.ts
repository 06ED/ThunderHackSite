const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        return;
    }
    entry.target.classList.remove("animate");
}, {threshold: 0.5}));

document.querySelectorAll(".animated")
    .forEach(selector => {
        console.log(selector.classList);
        observer.observe(selector);
    });