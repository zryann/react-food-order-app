import { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Any Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="a table full of delecius food" />
      </div>
    </Fragment>
  );
};
export default Header;
