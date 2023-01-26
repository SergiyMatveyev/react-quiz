import React from "react";
import classes from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  const cls = [classes.MenuToggle];

  if (props.isOpen) {
    cls.push(classes.open);
  }

  return (
    <div className={cls.join(" ")} onClick={props.onToggle}>
      {!props.isOpen ? "Menu open" : "Menu close"}
    </div>
  );
};

export default MenuToggle;
