import { Socket } from "phoenix";

export const createSocket = (setData, socketData, setSocketData) => {
  if (socketData?.socket === null) {
    const token = localStorage.getItem("token");
    const socket = new Socket("wss://api.playloh.com/player_socket", {
      params: { token: token },
    });
    socket.connect();
    socketData.socket = socket;
    joinChannal(setData, socketData, setSocketData);
  }
};

export const joinChannal = (setData, socketData, setSocketData) => {
  const socket = socketData?.socket;
  const adminChannel = socket.channel(`admins_channel`);
  adminChannel
    .join()
    .receive("ok", (resp) => {})
    .receive("error", ({ err }) => console.log("failed:", err));
  adminChannel.on("baskets_state", (msg) => {
    setData(msg.baskets?.sort((a, b) => b.start_time - a.start_time));
  });
  setSocketData((prev) => ({
    ...prev,
    channal: adminChannel,
  }));
};
