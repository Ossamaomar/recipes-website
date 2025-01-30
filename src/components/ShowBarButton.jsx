import { HiBars3BottomLeft } from "react-icons/hi2";

/* eslint-disable react/prop-types */
function ShowBarButton({ setShowSidebar }) {

    function handleClick(e) {
        e.stopPropagation();
        setShowSidebar((show) => !show)
    }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`show-menu-btn `}
      >
        <HiBars3BottomLeft />
      </button>
    </div>
  );
}

export default ShowBarButton;
