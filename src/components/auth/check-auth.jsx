import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, children }) {
  const location = useLocation();

  // Define public paths accessible without authentication
  const publicPaths = [
    "/",
    "/listing",
    "/property",
    "/blog",
    "/developers",
    "/developer",
    "/communities",
    "/communitie",
    // "/details",
    // "/about",
    // "/faqs",
    // "/Terms&Condition",
    // "/Policy",
  ];

  // Allow access if user is authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Allow access if the route is public
  if (publicPaths.includes(location.pathname)) {
    return <>{children}</>;
  }

  // Redirect to login if the route is private and user is not authenticated
  // return <Navigate to="/login" state={{ from: location }} replace />;
}

export default CheckAuth;
