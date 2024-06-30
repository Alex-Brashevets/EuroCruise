import { ReactNode } from "react";
import styles from "./Button.module.css"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: ReactNode;
}




export const Button  = ({children}:ButtonProps)=> {
  return (
    <button className={styles.color}> {children}</button>

  )
}


