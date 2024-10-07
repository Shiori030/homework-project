"use client";   // 在瀏覽器進行渲染，可以使用hooks

import { useState, useRef } from "react";
import styles from './homework1.module.css';

export default function Homework() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const openDialog = () => {
        setIsOpen(true);
        ref.current.showModal();
    }
    const closeDialog = () => {
        setIsOpen(false);
        ref.current.close();
    }


    return (
        <>
            <button className={`${styles.openBtn} ${styles.btn}`} onClick={openDialog}>Click</button>
            <dialog ref={ref} className={styles.myDialog}>
                <h3>這是一個彈跳視窗</h3>
                <button className={`${styles.closeBtn} ${styles.btn}`} onClick={closeDialog}>關閉</button>
            </dialog>
        </>
    );
}