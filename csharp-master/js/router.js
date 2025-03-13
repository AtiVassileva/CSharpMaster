const routes = {
    "/": "/pages/home.html",
    "/lessons": "/pages/lessons.html",
    "/quiz": "/pages/quiz.html",
    "/about": "/pages/about.html",
    "/login": "/pages/login.html",
    404: "/pages/404.html"
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

};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();