import { Route, Routes } from "react-router";
import { routes } from "./data";
import { Layout } from "../components";

const RouterComponent = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const RouteComponent = route.element;
        return (
          <Route
            key={index}
            index={!route.path && true}
            path={route.path}
            element={
              <Layout>
                <RouteComponent />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default RouterComponent;
