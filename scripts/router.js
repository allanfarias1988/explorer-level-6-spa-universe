
export class Router {
    constructor() {
      this.routes = {};
    }
  
    add(routeName, page) {
      this.routes[routeName] = page;
    }
  
    route(event) {
      event.preventDefault();
  
      const target = event.target || event.srcElement;
      const routeName = target.getAttribute("href");
  
      window.history.pushState({}, "", routeName);
  
      this.handle();
    }
  
    handle() {
      const { pathname } = window.location;
      const route = this.routes[pathname] || this.routes["/404"];
  
      fetch(route)
        .then((data) => data.text())
        .then((html) => {
          document.querySelector("#app").innerHTML = html;
        });
    }
  }