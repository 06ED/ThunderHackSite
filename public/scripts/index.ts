const opacityObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("opacity-animate");
        return;
    }
    entry.target.classList.remove("opacity-animate");
}, {threshold: 0.5}));

const rightObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("right-animate");
        return;
    }
    entry.target.classList.remove("right-animate");
}, {threshold: 0.5}));

const leftObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("left-animate");
        return;
    }
    entry.target.classList.remove("left-animate");
}, {threshold: 0.5}));

document.querySelectorAll(".opacity-animation")
    .forEach(selector => opacityObserver.observe(selector));
document.querySelectorAll(".right-animation")
    .forEach(selector => rightObserver.observe(selector));
document.querySelectorAll(".left-animation")
    .forEach(selector => leftObserver.observe(selector));