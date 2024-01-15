import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./routes/router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
