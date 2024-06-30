import { FieldError, UseFormRegister } from 'react-hook-form';
import styles from './FormInput.module.css';
import React from "react";
import { SettlementFormInputs } from '../../../SettelmentForm/SettlementForm';


interface FormInputProps extends  React.HTMLProps<HTMLInputElement>{
  label: string,
  icon: string,
  placeholder: string,
  isError?: FieldError;
  helperText?: string;
  validate?: boolean;
  register_field:"email" | "representative" | "phone" | "companyName" | "сountryFrom" | "сountryTo" | "cityFrom" | "cityTo"
  register: UseFormRegister<SettlementFormInputs>;
  error?: boolean
}

export const FormInput = ({label, icon, placeholder, isError, helperText, validate, register_field, register, error}:FormInputProps) => {
  return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor="">{label}<img src={icon} alt="icon"/></label>
        <input 
              className={styles.input}
               type="text"
                placeholder={placeholder}
                {...register(register_field, {
                  required: helperText ? `${helperText}` : true,
                  minLength: undefined,
                  pattern:
                    validate && register_field === 'email'
                      ? /^\S+@\S+\.\S+$/
                      : undefined
                })}
                />
        {isError && helperText ? (
        <div className={styles.helper_text}>*{helperText}</div>
      ) : (
        <div />
      )}
      </div>
  );
};