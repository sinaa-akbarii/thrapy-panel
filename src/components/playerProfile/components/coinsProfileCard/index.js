import styles from "./styles/coinsProfileCard.module.scss";
import icons from "utils/icons";
import AddElementModal from "components/modals/addElementModal";
import { useState } from "react";

const CoinsProfileCard = ({ coins ,setCoins, handleDelete, handleAdd, playerId }) => {
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState("");
  return (
    <>
      <AddElementModal
        show={openModal}
        setShow={setOpenModal}
        handleSubmit={handleAdd}
        setData={setCoins}
        playerId={playerId}
        type={type}
        coins={coins}
      />
      <div className={styles.cardTitle}>
        <span className="mr-auto">Coins</span>
        <button
          onClick={() => {
            setType('Coins'), setOpenModal(true);
          }}
          className={styles.plus}
        >
          {" "}
          {icons.plus()}
        </button>
      </div>
      <div className={`${styles.itemContainer} w-full flex flex-col p-2`}>
        {coins.length !== 0 &&
          coins.map((coin, index) => (
            <div
              className={`${styles.wrapper}  flex justify-between p-1`}
              key={index}
            >
              <span>{`${coin.name}: ${coin.amount}`}</span>
              <div className="flex">
                <button
                  onClick={() => handleDelete(coin, playerId, coins, setCoins)}
                  className={`${styles.btn} flex justify-center items-center`}
                >
                  {icons.minus()}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CoinsProfileCard;
