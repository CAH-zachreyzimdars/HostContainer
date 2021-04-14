import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// layoutEngine.isActive();

// applications.forEach(registerApplication);
// layoutEngine.activate();

registerApplication(
    '@CAH/todo',
    () => import('@CAH/todo'),
    (location) => location.pathname.startsWith('/')
);

// registerApplication(
//     '@CAH/navbar',
//     () => import('../../Navbar-app/navbar/src/index.js'),
//     (location) => location.pathname.startsWith('/')
// );
start();
