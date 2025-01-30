import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";

import ShowBarButton from "./ShowBarButton";

function AppLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Assuming 'sm' breakpoint is at 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="layout relative sm:grid grid-cols-custom">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="container p-8 mx-auto">
          {isSmallScreen && <ShowBarButton setShowSidebar={setShowSidebar} />}
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AppLayout;
