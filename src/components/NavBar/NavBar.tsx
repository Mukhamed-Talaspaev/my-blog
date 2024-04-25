import { useContext } from "react";
import Personal from "../../ui-components/Personal/Personal";
import styles from "./NavBar.module.scss";
import { ActiveContext } from "../../Context/context";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui-components/Button/Button";
import { useAuth } from "../../hook/useAuth";
const NavBar = () => {
  const context = useContext(ActiveContext);
  const MyClassName =
    () =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles.active}` : `${styles.nonActive}`;
  const { signout } = useAuth();
  const navigate = useNavigate();
  const closeNavbar = () => context?.setIsactive(false);
  const logOut = () => {
    signout(() => navigate("/", { replace: true }));
    closeNavbar();
  };
  return (
    <div
      className={
        !context?.isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <Personal userName={"mukhamed Talaspayev"} />
      <ul>
        <li>
          <NavLink onClick={closeNavbar} className={MyClassName()} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNavbar} className={MyClassName()} to="/about">
            about
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNavbar} className={MyClassName()} to="/login">
            login
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNavbar} className={MyClassName()} to="/posts">
            Posts
          </NavLink>
        </li>
        <Button disabled={false} handler={logOut}>
          LogOunt
        </Button>
      </ul>
    </div>
  );
};
export default NavBar;
