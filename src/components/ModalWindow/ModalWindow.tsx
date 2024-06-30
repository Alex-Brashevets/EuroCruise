import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
import crossIcon from "/src/assets/crossIcon.svg";
import styles from "./ModalWindow.module.css";

interface ModalWindowProps {
  isOpen: boolean;
  label: string;
  description: string;
  onClose?: () => void;
}

export const ModalWindow = forwardRef(
  (
    { isOpen, onClose, label, description }: ModalWindowProps,
    ref: React.Ref<HTMLDivElement>
  ): JSX.Element | null => {
    if (!isOpen) return null;
    return createPortal(
      <div className={styles.filter_container__mobile}>
        <div ref={ref}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.label}>{label}</div>
              <img onClick={onClose} src={crossIcon} className={styles.img} />
            </div>
            <div className={styles.body}>
              <div className={styles.description}>{description}</div>
              <button className={styles.button} onClick={onClose}>
                Ок
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
);
