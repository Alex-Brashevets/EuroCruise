import styles from './Input.module.css';
import React from "react";


interface InputProps extends  React.HTMLProps<HTMLInputElement>{
  placeholder: string
}

export const Input = ({placeholder, ...props}:InputProps) => {
  return (
        <input {...props} className={styles.input} type="text" placeholder={placeholder}/>
  );
};