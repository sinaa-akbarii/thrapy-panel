import React, { useEffect, useState } from "react";
import ProfileCard from "./components/profileCard";
import styles from "./styles/playerProfile.module.scss";

import {
  handleDeleteOwnedHeros,
  handleDeleteOwnedSkins,
  handleAddOwnedHeros,
  handleAddOwnedSkins,
  handleDeleteOwnedChests,
  handleAddOwnedChests,
  handleDeleteCoins,
  handleAddCoins,
  historyData,
} from "./services";
import HistoryCard from "./components/historyCard";
import UserProfile from "./components/userProfile";
import CoinsProfileCard from "./components/coinsProfileCard";

const PlayerProfileComponent = ({
  playerData,
  playerPlayInformation,
  chestsToken,
}) => {
  const [coins, setCoins] = useState([]);
  const [ownedHeros, setOwnedHeros] = useState({});
  const [ownedSkins, setOwnedSkins] = useState({});
  const [ownedChests, setOwnedChests] = useState({});
  const [finalChestData, setFinalChestData] = useState({});
  useEffect(() => {
    let coinsArray = [];
    let coinOneObject = {
      name: "coin_1",
      amount: playerPlayInformation?.coin_1,
    };
    coinsArray.push(coinOneObject);
    let coinTwoObject = {
      name: "coin_2",
      amount: playerPlayInformation?.coin_2,
    };
    coinsArray.push(coinTwoObject);
    setCoins(coinsArray);
    setOwnedHeros(playerPlayInformation?.owned_heros);
    setOwnedSkins(playerPlayInformation?.owned_skins);
    setOwnedChests(playerPlayInformation?.owned_chests);
  }, [playerPlayInformation]);

  useEffect(() => {
    if (ownedChests) {
      const arrayOfObj = Object.entries(ownedChests).map((i) => ({
        [i[0]]: i[1],
      }));
      let newArray = [];
      for (let i = 0; i < arrayOfObj.length; i++) {
        let filteredChest = chestsToken.filter(
          (each) => each.token === Object.keys(arrayOfObj[i])[0]
        );

        let name = Object.keys(arrayOfObj[i])[0];
        name = filteredChest[0].title;
        let newObject = {
          [name]: Object.values(arrayOfObj[i])[0],
        };
        newArray.push(newObject);
      }

      var result = {};
      for (var i = 0; i < newArray.length; i++) {
        result[Object.keys(newArray[i])] = Object.values(newArray[i])[0];
      }
      setFinalChestData(result);
    }
  }, [ownedChests]);

  return (
    <>
      <div className={`w-full flex`}>
        <UserProfile player={playerData} />
      </div>
      <div className="w-full flex justify-between flex-wrap">
        <div className={styles.cardContainer}>
          <ProfileCard
            title="Owned Heros"
            data={ownedHeros}
            handleDelete={handleDeleteOwnedHeros}
            playerId={playerPlayInformation?._key}
            setData={setOwnedHeros}
            handleAdd={handleAddOwnedHeros}
          />
        </div>
        <div className={styles.cardContainer}>
          <ProfileCard
            title="Owned Skins"
            data={ownedSkins}
            handleDelete={handleDeleteOwnedSkins}
            playerId={playerPlayInformation?._key}
            setData={setOwnedSkins}
            handleAdd={handleAddOwnedSkins}
          />
        </div>
        <div className={`${styles.cardContainer}  ${styles.thirdPart}`}>
          <ProfileCard
            title="Owned Chests"
            data={finalChestData}
            handleDelete={handleDeleteOwnedChests}
            playerId={playerPlayInformation?._key}
            setData={setOwnedChests}
            handleAdd={handleAddOwnedChests}
          />
        </div>
      </div>

      <div className={`${styles.tabletResponsive} flex-wrap`}>
        <div className={`${styles.tabletResponsiveContainer}`}>
          <ProfileCard
            title="Owned Chests"
            data={finalChestData}
            handleDelete={handleDeleteOwnedChests}
            playerId={playerPlayInformation?._key}
            setData={setOwnedChests}
            handleAdd={handleAddOwnedChests}
          />
        </div>

        <div className={styles.coinsWrapperTablet}>
          <CoinsProfileCard
            coins={coins}
            setCoins={setCoins}
            handleDelete={handleDeleteCoins}
            handleAdd={handleAddCoins}
            playerId={playerPlayInformation?._key}
          />
        </div>
      </div>

      <div className="w-full flex justify-between mt-3">
        <div className={styles.coinsWrapper}>
          <CoinsProfileCard
            coins={coins}
            setCoins={setCoins}
            handleDelete={handleDeleteCoins}
            handleAdd={handleAddCoins}
            playerId={playerPlayInformation?._key}
          />
        </div>
        <div className={styles.historyWrapper}>
          <HistoryCard
            historyData={historyData}
            userName={playerData?.username}
          />
        </div>
      </div>
    </>
  );
};

export default PlayerProfileComponent;
