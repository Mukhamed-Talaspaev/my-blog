import { useContext } from "react";
import Personal from "../../ui-components/Personal/Personal";
import styles from "./NavBar.module.scss";
import { ActiveContext } from "../../Context/context";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../../ui-components/Button/Button";
import { useAuth } from "../../hook/useAuth";
const NavBar = () => {
  const context = useContext(ActiveContext);
  const MyClassName =
    () =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles.active}` : `${styles.nonActive}`;
  const { isAuth, signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const closeNavbar = () => context?.setIsactive(false);
  const sigIn = () => {
    signout(() => navigate("/sign-in", { replace: true }));
    closeNavbar();
  };
  const signUp = () => {
    navigate("/sign-up", {state: { from: location } });
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
        <NavLink onClick={closeNavbar} className={MyClassName()} to="/favorite">
            favourite
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeNavbar} className={MyClassName()} to="/posts">
            Posts
          </NavLink>
        </li>
   
          <Button disabled={false} handler={signUp}>
            Sign UP
          </Button>
      
          <Button disabled={false} handler={sigIn}>
          Sign IN
          </Button>
      
      </ul>
    </div>
  );
};
export default NavBar;
