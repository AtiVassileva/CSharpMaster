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

window.onpopstate = handleLocation;
window.route = route;

handleLocation();