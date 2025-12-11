import { useEffect, useState } from "react";
import menu from "../../../assets/icons/menu.svg";
import close from "../../../assets/icons/close.svg";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [openNavbar, setOpenNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    setOpenNavbar(false);
    if (typeof window !== "undefined") {
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`header`}>
      <nav className="header__nav">
        <div className={`container`}>
          <a aria-label="logo" href="/" className="header__logo">
            Logo
          </a>
          <div className={`header__menu ${openNavbar ? "open" : ""}`}>
            <div className="header__menu--actions">
            </div>
            <div
              className="header__menu--item menu--item"
              onClick={() => {
                setOpenNavbar(false);
                navigate("/cart");
                window.location.reload();
              }}
            >
              <p>Cart</p>
            </div>
          </div>
          <div className="header__actions">
            <button
              aria-label="action-btn"
              className="header__actions--button header__actions--item header__download"
              onClick={() => {
                setOpenNavbar(false);
                navigate("/cart");
                window.location.reload();
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.765217 0C0.562269 0 0.367633 0.0790178 0.224127 0.21967C0.080621 0.360322 0 0.551088 0 0.75C0 0.948912 0.080621 1.13968 0.224127 1.28033C0.367633 1.42098 0.562269 1.5 0.765217 1.5H1.1417C1.30787 1.50028 1.46942 1.55357 1.60195 1.6518C1.73448 1.75003 1.83078 1.88788 1.87631 2.0445L4.30358 10.3695C4.44087 10.8393 4.73048 11.2525 5.12864 11.5467C5.5268 11.8409 6.01186 12 6.51047 12H13.503C13.9619 12.0001 14.4103 11.8654 14.7903 11.6132C15.1703 11.3611 15.4645 11.0031 15.6349 10.5855L17.8908 5.0565C17.9835 4.82899 18.018 4.58268 17.9912 4.3391C17.9644 4.09551 17.8771 3.86208 17.737 3.65919C17.5968 3.4563 17.4082 3.29014 17.1874 3.17523C16.9666 3.06032 16.7205 3.00015 16.4705 3H3.7465L3.34706 1.632C3.21012 1.16216 2.92086 0.748779 2.52298 0.454345C2.12511 0.15991 1.64025 0.000426552 1.1417 0H0.765217ZM6.88695 18C7.18842 18 7.48694 17.9418 7.76546 17.8287C8.04398 17.7157 8.29705 17.5499 8.51023 17.341C8.7234 17.1321 8.89249 16.884 9.00786 16.611C9.12323 16.3381 9.18261 16.0455 9.18261 15.75C9.18261 15.4545 9.12323 15.1619 9.00786 14.889C8.89249 14.616 8.7234 14.3679 8.51023 14.159C8.29705 13.9501 8.04398 13.7843 7.76546 13.6713C7.48694 13.5582 7.18842 13.5 6.88695 13.5C6.27811 13.5 5.6942 13.7371 5.26368 14.159C4.83317 14.581 4.5913 15.1533 4.5913 15.75C4.5913 16.3467 4.83317 16.919 5.26368 17.341C5.6942 17.7629 6.27811 18 6.88695 18ZM13.0087 18C13.3102 18 13.6087 17.9418 13.8872 17.8287C14.1657 17.7157 14.4188 17.5499 14.632 17.341C14.8451 17.1321 15.0142 16.884 15.1296 16.611C15.245 16.3381 15.3043 16.0455 15.3043 15.75C15.3043 15.4545 15.245 15.1619 15.1296 14.889C15.0142 14.616 14.8451 14.3679 14.632 14.159C14.4188 13.9501 14.1657 13.7843 13.8872 13.6713C13.6087 13.5582 13.3102 13.5 13.0087 13.5C12.3998 13.5 11.8159 13.7371 11.3854 14.159C10.9549 14.581 10.713 15.1533 10.713 15.75C10.713 16.3467 10.9549 16.919 11.3854 17.341C11.8159 17.7629 12.3998 18 13.0087 18Z"
                  fill="#231F20"
                />
              </svg>
              {/* {
                cartLength ? <p>{cartLength}</p> : ''
              } */}
            </button>
            <button
              aria-label="action-btn"
              className="header__toggle"
              onClick={() => setOpenNavbar(!openNavbar)}
            >
              <img src={openNavbar ? close : menu} alt="menu" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
