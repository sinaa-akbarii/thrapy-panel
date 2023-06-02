import styles from './styles/toast.module.scss';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastComponent = ({type,txt}) => {

  return (
    <ToastContainer position={'bottom-end'}>
      <Toast
        className={`${styles.toastContainer} ${
          type === 'success'
            ? styles.success
            : type === 'error'
            ? styles.error
            : type === 'warning'
            ? styles.warning
            : type === 'information'
            ? styles.info
            : ''
        }`}
        onClose={handleClose}
        show={show}
        delay={4000}
        autohide
        animation={true}>
        <Toast.Body className={styles.toastBody}>
          <div className={styles.right}>
            <span className={styles.txt}>{text}</span>
          </div>
          <button className={styles.closeBtn} onClick={handleClose}>
            X
          </button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastComponent;
