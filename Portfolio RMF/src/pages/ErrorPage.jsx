import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const { error } = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Error</h1>
      <p>{error.message}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}