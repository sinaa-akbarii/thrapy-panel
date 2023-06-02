import { Modal } from "react-bootstrap";
import styles from "./styles/addModal.module.scss";
import { handleChange, handleClose, definedTitle } from "./services";
import { useState } from "react";

const AddElementModal = ({
  show,
  setShow,
  handleSubmit,
  setData,
  playerId,
  type,
  coins,
}) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState();
  const [balanceChange, setBalanceChange] = useState();
  return (
    <Modal
      show={show}
      onHide={() => handleClose(setShow, setName, setCount, setBalanceChange)}
      animation={false}
      centered
      className={styles.modal}
    >
      <div className="w-full">
        <div className={styles.formTop}>
          <div className={styles.formTopSection}>
            <span
              onClick={() => handleClose(setShow, setName, setCount, setBalanceChange)}
              className={`${styles.formTopSectionButton} `}
            >
              X
            </span>
          </div>
          <h3 className={styles.formTopTitle}>{definedTitle(type)}</h3>
        </div>
        <div className={styles.formMain}>
          <div className={styles.formMainInput}>
            <div className={styles.formMainInputGroup}>
              <input
                className={styles.formMainInputGroupInput}
                value={name}
                onChange={(e) => handleChange(e, setName)}
                autoComplete="off"
                type="text"
                id= "name"
                placeholder= {type === 'Coins' ? "coin Type(1,2)" : 'name'}
                autoFocus={true}
              />
            </div>

            {type === "Owned Chests" && (
              <div className={styles.formMainInputGroup}>
                <input
                  className={styles.formMainInputGroupInput}
                  value={count}
                  onChange={(e) => handleChange(e, setCount)}
                  autoComplete="off"
                  type="text"
                  id="count"
                  placeholder={"Count"}
                  autoFocus={true}
                />
              </div>
            )}

            {type === "Coins" && (
              <div className={styles.formMainInputGroup}>
                <input
                  className={styles.formMainInputGroupInput}
                  value={balanceChange}
                  onChange={(e) => handleChange(e, setBalanceChange)}
                  autoComplete="off"
                  type="text"
                  id="count"
                  placeholder={"Balance change"}
                  autoFocus={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.formBottom}>
        <button
          className={styles.formBottomButton}
          onClick={() =>
            handleSubmit(
              name,
              setData,
              playerId,
              () => handleClose(setShow, setName, setCount, setBalanceChange),
              count,
              balanceChange,
              coins
            )
          }
        >
          Submit
        </button>
        <button
          className={styles.formBottomButtonCancel}
          onClick={() => handleClose(setShow, setName, setCount, setBalanceChange)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default AddElementModal;
