import { BrowserRouter } from "react-router";
import RouterComponent from "./router/router";
import "./assets/styles/app.scss";
import { Provider } from "react-redux";
import { store } from "./store/cartStore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <RouterComponent />
        </Provider>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
