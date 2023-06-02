import { useEffect, useState } from "react";
import styles from "./styles/profileCard.module.scss";
import icons from "utils/icons";
import AddElementModal from "components/modals/addElementModal";

const ProfileCard = ({
  title,
  data,
  handleDelete,
  playerId,
  setData,
  handleAdd,
}) => {
  const [openModal,setOpenModal] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [type, setType] = useState('');
  useEffect(() => {
    if (data) {
      let objectKeys = Object.keys(data);
      setDataArray(objectKeys);
    }
  }, [data]);

  return (
    <>
      <AddElementModal
        show={openModal}
        setShow={setOpenModal}
        handleSubmit={handleAdd}
        setData={setData}
        playerId={playerId}
        type={type}
      />
      <div className={styles.cardContainer}>
        <div className={styles.cardTitle}>
          <span className="mr-auto">{title}</span>
          <button onClick={() => {setType(title), setOpenModal(true)}} className={styles.plus}> {icons.plus()}</button>
        </div>
        <div className={`${styles.itemContainer} w-full flex flex-col p-2`}>
          {dataArray.map((item, index) => (
            <div
              key={index}
              className={`${styles.wrapper} flex justify-between p-1`}
            >
              <span>{item}</span>
              <div className="flex">
                <button
                  onClick={() => handleDelete(item, playerId, setData)}
                  className={`${styles.btn} flex justify-center items-center`}
                >
                  {icons.minus()}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
