import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
//Home
    index("routes/home.tsx"),

//Auth

//Con el prefix, se puede acceder a las rutas de auth sin tener que escribir el /auth.
...prefix('/auth', [

    layout('layouts/auth-layout.tsx', [
        route('login', 'routes/auth/login-page.tsx'),
        route('register', 'routes/auth/register-page.tsx')
    ]),
])

] satisfies RouteConfig;
