import "@/assets/sass/theme.scss";

// Register ./components/* as routes
const files = require.context('./components/', true, /\.vue$/i);
files.keys().map(key => {
    // Register component as route
    window.router.addRoutes([{ path: files(key).default.path, component: files(key).default, props: true }]);
});
