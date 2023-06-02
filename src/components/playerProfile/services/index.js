import { BaseApi, userBaseApi, playerBaseApi } from "api";
import moment from "moment";

export const historyData = [
  {
    action: "add",
    item: "skin",
  },
  {
    action: "delete",
    item: "coin_3",
  },
  {
    action: "add",
    item: "hero",
  },
  {
    action: "delete",
    item: "chest",
  },
];

export const handleDeleteOwnedHeros = async (item, playerId, setData) => {
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  const resp = await BaseApi({
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      player: {
        owned_heros: {
          [item]: null,
        },
      },
    },
    url: `/players/${playerId}`,
  });
  if (resp.status === 200) {
    setData(resp.data.data.owned_heros);
  }
};

export const handleDeleteOwnedSkins = async (item, playerId, setData) => {
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  const resp = await BaseApi({
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      player: {
        owned_skins: {
          [item]: null,
        },
      },
    },
    url: `/players/${playerId}`,
  });
  if (resp.status === 200) {
    setData(resp.data.data.owned_skins);
  }
};
export const handleAddOwnedHeros = async (
  itemName,
  setData,
  playerId,
  handleClose
) => {
  const today = moment().format();
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  if (itemName.trim() !== "") {
    const resp = await BaseApi({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        player: {
          owned_heros: {
            [itemName]: {
              timestamp: `${today}Z`,
              xp: 0,
            },
          },
        },
      },
      url: `/players/${playerId}`,
    });
    if (resp.status === 200) {
      setData(resp.data.data.owned_heros);
      handleClose();
    }
  } else {
    return;
  }
};

export const handleAddOwnedSkins = async (
  itemName,
  setData,
  playerId,
  handleClose
) => {
  const today = moment().format();
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  if (itemName.trim() !== "") {
    const resp = await BaseApi({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        player: {
          owned_skins: {
            [itemName]: {
              timestamp: `${today}Z`,
              xp: 0,
            },
          },
        },
      },
      url: `/players/${playerId}`,
    });
    if (resp.status === 200) {
      setData(resp.data.data.owned_skins);
      handleClose();
    }
  } else {
    return;
  }
};

export const handleDeleteOwnedChests = async (item, playerId, setData) => {
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  const chestsToken = await playerBaseApi({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: `/items?type=chest`,
  });

  if (chestsToken.status === 200) {
    const specificChest = chestsToken.data.data.filter(
      (each) => each.title === item
    );
    const specificToken = specificChest[0].token;
    const resp = await BaseApi({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        player: {
          owned_chests: {
            [specificToken]: null,
          },
        },
      },
      url: `/players/${playerId}`,
    });
    if (resp.status === 200) {
      setData(resp.data.data.owned_chests);
    }
  }
};

export const handleAddOwnedChests = async (
  itemName,
  setData,
  playerId,
  handleClose,
  count
) => {
  const today = moment().format();
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";

  if (itemName.trim() !== "") {
    const chestsToken = await playerBaseApi({
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `/items?type=chest`,
    });
    if (chestsToken.status === 200) {
      const specificChest = chestsToken.data.data.filter(
        (each) => each.title === itemName
      );
      const specificToken = specificChest[0].token;
      const resp = await BaseApi({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          player: {
            owned_chests: {
              [specificToken]: {
                timestamp: `${today}Z`,
                count,
              },
            },
          },
        },
        url: `/players/${playerId}`,
      });

      if (resp.status === 200) {
        setData(resp.data.data.owned_chests);
        handleClose();
      }
    }
  } else {
    return;
  }
};

export const handleDeleteCoins = async (coin, playerId, coins, setCoins) => {
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  const resp = await BaseApi({
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      balance: {
        coin_type: Number(coin.name.substring(coin.name.indexOf("_") + 1)),
        balance_change: Number(`-${coin.amount}`),
      },
    },
    url: `/players/${playerId}/balance`,
  });

  if (resp.status === 200) {
    let notSelected = coins.filter((each) => (each.name !== coin.name))
    setCoins([
      notSelected[0],
      {
        name: coin.name,
        amount: resp.data.new_balance,
      },
    ]);
  }
};

export const handleAddCoins = async (
  itemName,
  setData,
  playerId,
  handleClose,
  count,
  balanceChange,
  coins
) => {
  let token = localStorage.getItem('token');
  // let token =
    // "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
  if (itemName.trim() !== "") {
    const resp = await BaseApi({
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        balance: {
          coin_type: Number(itemName),
          balance_change: Number(balanceChange),
        },
      },
      url: `/players/${playerId}/balance`,
    });
    if (resp.status === 200) {
      let filteredCoinIndex = coins.findIndex(
        (each) => each.name === `coin_${itemName}`
      );
      let filteredCoinValue = coins[filteredCoinIndex].amount;
      filteredCoinValue = resp.data.new_balance;
      coins[filteredCoinIndex] = {
        name: `coin_${itemName}`,
        amount: filteredCoinValue,
      };
      setData(coins);
      handleClose();
    }
  } else {
    return;
  }
};
