import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const auth = true;

  if (auth) {
    return (
      <>
        <AuthRoutes />
      </>
    );
  }

  return (
    <>
      <AppRoutes />
    </>
  );
}
