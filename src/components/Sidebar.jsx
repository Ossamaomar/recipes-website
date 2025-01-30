import { useEffect, useRef } from "react";
import SideLink from "./SideLink";

/* eslint-disable react/prop-types */
function Sidebar({ showSidebar, setShowSidebar }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false); // Close dropdown if click is outside
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setShowSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar z-20 absolute sm:relative sm:translate-x-0 transition-transform duration-300 ease-in-out transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div>
        <img src="/logo-BfNap0Pe.png" className="w-full" alt="" />
      </div>

      <ul className="nav-links list-none">
        <SideLink isFirst={true} >Meals</SideLink>
        <SideLink>Ingredients</SideLink>
        <SideLink>Area</SideLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
