import { FC, ReactNode, useState } from "react";
import ReactModal from "react-modal";
import styles from "./Modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -100%)",
    minWidth: "200px",
  },
};

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose(): void;
}

export const Modal: FC<Props> = (props: Props) => {
  const { isOpen=false, children, onClose } = props;

  return (
    <div className={styles['modal']}>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
      >
        <button type="button" onClick={onClose} className={styles['close-btn']}>
          &#x2717;
        </button>
        {children}
      </ReactModal>
    </div>
  );
};
