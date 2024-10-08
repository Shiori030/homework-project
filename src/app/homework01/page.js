"use client"; // 在瀏覽器進行渲染，可以使用hooks

import Image from "next/image";
import { useState, useRef } from "react";
import styles from "./homework1.module.css";

export default function Homework1() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const openDialog = () => {
    setIsOpen(true);
    ref.current.showModal();
  };
  const closeDialog = () => {
    setIsOpen(false);
    ref.current.close();
  };

  return (
    <>
      <button
        className={`${styles.openBtn} ${styles.btn}`}
        onClick={openDialog}
      >
        Click
      </button>
      <dialog ref={ref} className={styles.myDialog}>
        <Image src="/momo.jpg" alt="Momo" width={300} height={300} />
        <button
          className={`${styles.closeBtn} ${styles.btn}`}
          onClick={closeDialog}
        >
          關閉
        </button>
      </dialog>
    </>
  );
}
