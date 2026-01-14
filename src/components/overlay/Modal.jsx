import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, title, children, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        document.addEventListener("keydown", onKeyDown);

        // Focus the dialog for accessibility
        dialogRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    function handleBackdropClick(e) {
        // Only close if they clicked the backdrop, not inside the dialog
        if (e.target === e.currentTarget) onClose?.();
    }

    return (
        <div
            className={styles.backdrop}
            onMouseDown={handleBackdropClick}
            aria-hidden="true"
        >
            <div
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-label={title || "Dialog"}
                tabIndex={-1}
                ref={dialogRef}
            >
                <div className={styles.header}>
                    {title ? <h2 className={styles.title}>{title}</h2> : <span />}
                    <button
                        type="button"
                        className={styles.close}
                        onClick={() => onClose?.()}
                        aria-label="Close dialog"
                    >
                        ×
                    </button>
                </div>

                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
