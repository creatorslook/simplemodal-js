import * as styles from "./style.module.css"

interface modal {
    children: any,
    isOpen: boolean
}

const Modal = ({ children, isOpen }: modal) => {
    return (
        <div className={isOpen === true ? styles.modal : styles.hidden}>
            <div className={styles.modalChild}>
                {children}
            </div>
        </div>
    )
}

export default Modal;