import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    function handleClick() {
        window.scrollTo({ top: 0, behavior: "instant" });
        navigate('/');
    }
  return (
    <div className="footer p-8">
      <div className="content">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div onClick={() => handleClick()} className="brand">
            <img src="/logo-BfNap0Pe.png" alt="" />
            <p>Recipe</p>
          </div>

          <p className="text-blue-600 font-bold text-2xl">Route</p>
        </div>

        <div className="footer-mid-line"></div>

        <p className="text-gray-400 text-center">© 2025 Osama Omar™. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
