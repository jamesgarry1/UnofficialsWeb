import React from "react";
import { useRouteError } from "react-router-dom";
import "./error.scss";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <body>
      <div id="error-page">
        <center>
          <h1>Uh Oh!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>Error: {error.statusText || error.message}</i>
          </p>
        </center>
      </div>
    </body>
  );
}
