const type = function (object) {
    return object.constructor;
};

const format = function (path) {
    if (!path.startsWith('/')) path = '/' + path;
    if (!path.endsWith('/')) path = path + '/';
    return path;
};

const regex = function (path) {
    path = path
        .replace(/\//g, '\\/')
        .replace(/:[-\w]+/g, '(\[-\\w\]+)')
        .replace(/\*/g, '(.+)');
    return new RegExp('^' + path + '$');
};

const matcher = function (route, url) {
    return format(url.pathname).match(regex(format(route.path)));
};

const PATH = function (path, fn) {
    this.path = path;
    this.fn = fn;
};

const Router = function () {
    this.routes = [];
};

Router.prototype.path = function (path, fn) {
    const route = new PATH(path, fn);
    this.routes.push(route);
    return this;
};

Router.prototype.run = function (url, root, components) {
    const res = { url, root, components };
    for (const route of this.routes) {
        if (type(route) === PATH && matcher(route, url)) {
            route.fn(res);
            break;
        }
    }
};

Router.start = function (app, root, components) {
    app.run(location, root, components);
};

const $ = (selector) => document.querySelector(selector);

$.all = (selector) => document.querySelectorAll(selector);
$.reflow = (element = document.body) => void (element.offsetHeight);

export {
    Router,
    $
};
