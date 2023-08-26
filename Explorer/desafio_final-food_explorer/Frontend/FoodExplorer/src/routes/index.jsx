import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes({ auth = false }) {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <AppRoutes />
    </BrowserRouter>
  );
}
