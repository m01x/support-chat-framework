import { redirect } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router Apps" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader(){
  return redirect('/chat');
}

export default function Home() {
  // return <Welcome />;
}
