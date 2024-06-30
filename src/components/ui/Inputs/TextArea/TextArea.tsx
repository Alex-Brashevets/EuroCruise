import styles from './TextArea.module.css';
import React from "react";


interface TextAreaProps extends  React.HTMLProps<HTMLTextAreaElement>{
  placeholder: string
}

export const TextArea = ({placeholder}:TextAreaProps) => {
  return (
        <textarea className={styles.textarea} placeholder={placeholder}/>
  );
};