import type { Route } from "./+types/testing-page";

export async function loader() {
  console.log("loader - server");
  return { message: "Hello, world desde el loader - server" };
}



export async function clientLoader({ serverLoader }) {
  console.log("loader - client");

  // call the server loader
  // const serverData = await serverLoader();
  // And/or fetch data on the client
  // const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  return {message: "Hello, world desde el clientLoader - client"};
}



export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Welcome to My Route with Props!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
    </div>
  );
}