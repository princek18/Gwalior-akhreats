import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>OOPS! 🔥🔥</h1>
      <h3>{err.data}</h3>
      <h3>Error Status: {err.status}</h3>
      <h3>Error Status Text : {err.statusText}</h3>
    </>
  );
};

export default ErrorPage;
