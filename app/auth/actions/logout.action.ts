//Accion de logout
import { redirect } from "react-router";

import {
    getSession,
    destroySession,
  } from "../../sessions.server";

  import type { Route } from "./+types/logout.action";
  

  
  export async function action({
    request,
  }: Route.ActionArgs) {
    const session = await getSession(
      request.headers.get("Cookie")
    );
    return redirect("/auth/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }