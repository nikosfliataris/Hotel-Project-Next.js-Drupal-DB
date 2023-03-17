import Link from "next/link";
import style from "./Header.module.scss";
import { SocialLinks } from "./../../utils/HeaderLinks";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { logo } from "./../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className={style.headersUpper}>
          <div className={style.contact}>
            <span className={style.socials}>
              <ul className={style.links}>
                {SocialLinks.map((link) => (
                  <li className={style.link} key={link.id}>
                    <Link href={link.url} passHref>
                      <a>{link.icon}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </span>
            <br />
            <span className={style.phone}>
              <BsFillTelephoneInboundFill />
              <p>0030 123 456 7890</p>
            </span>
            <br />
            <span className={style.email}>
              <p>
                <HiOutlineMail /> abcdefg@higklm.com
              </p>
            </span>
          </div>
          <div className={style.userInterface}>
            <div className={style.login}>
              <span>
                <Link href="/login">
                  <p>
                    <BiLogIn /> Login
                  </p>
                </Link>
              </span>
            </div>
            <div className={style.signup}>
              <span>
                <Link href="/signup">
                  <p>
                    <BiLogOut /> Sign Up
                  </p>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.headerLower}>
          <div className={style.logo}>
            <img
              src="https://andit.co/projects/html/and-tour/assets/img/logo.png"
              alt="logo"
            />
          </div>
          <div className={style.navlinks}>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
