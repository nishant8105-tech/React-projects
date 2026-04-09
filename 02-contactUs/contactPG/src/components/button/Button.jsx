import React from 'react'
import { MdMessage, MdCall } from "react-icons/md"
import styles from './button.module.css'


const Button = ({ isSecondary_Btn, icon, text, ...rest }) => {
  return (
    <>
      <button className={isSecondary_Btn ? styles.secondary_Btn : styles.primary_Btn} {...rest}>
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button
