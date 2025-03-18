const routes = {
    "/": "/pages/home.html",
    "/lessons": "/pages/principles.html",
    "/solid": "/pages/solid.html",
    "/about": "/pages/about.html"
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());

    const content = document.getElementById("app");
    content.innerHTML = html;

    scrollToTop();
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.addEventListener("DOMContentLoaded", () => {
    let path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.parentElement.classList.add('active');
        }
    });
});

window.onpopstate = handleLocation;
window.route = route;

handleLocation();