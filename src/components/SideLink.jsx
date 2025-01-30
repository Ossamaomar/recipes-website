/* eslint-disable react/prop-types */
import { SiGreasyfork } from "react-icons/si";
import { NavLink } from "react-router-dom";

function SideLink({ children, isFirst }) {
  return (
    <>
      {!isFirst && (
        <li className="navlink">
          <NavLink to={"/"}>
            {" "}
            <SiGreasyfork /> {children}
          </NavLink>
        </li>
      )}

      {isFirst && (
        <li className="active-link">
          <NavLink to={"/"}>
            {" "}
            <SiGreasyfork /> {children}
          </NavLink>
        </li>
      )}
    </>
  );
}

export default SideLink;
