import styles from "./styles/history.module.scss";
import icons from "utils/icons";
import {handleDelete, handleAdd} from "./services";

const HistoryCard = ({ historyData, userName }) => {
  return (
    <div className={`${styles.container} w-full`}>
      <div className={styles.title}>History</div>
      <div className={`${styles.itemsWrapper} p-2`}>
        {historyData.map((history, index) => (
          <div
            key={index}
            className={`${styles.wrapper} flex justify-between p-1`}
          >
            <span>{`${userName} ${history.action} ${history.item}`}</span>
            <div className="flex">
              <button
                onClick={() => handleDelete(index)}
                className={`${styles.btn} flex justify-center items-center`}
              >
                {icons.minus()}
              </button>
              <button
                onClick={handleAdd}
                className={`${styles.plus} flex justify-center items-center`}
              >
                {icons.plus()}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryCard;
