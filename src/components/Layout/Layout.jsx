import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "components/Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
