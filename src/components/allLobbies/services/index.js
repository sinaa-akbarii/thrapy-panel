import { BaseApi } from "api";

export const headers = [
  "Lobby ID",
  "Mode",
  "Type",
  "Leader Id",
  "Phase",
  "Players Name",
  "Terminate Lobby",
];

export const handleTerminate = async (
  id,
  setToast,
  setDeleted,
  deleted,
  setShow
) => {
  let token = localStorage.getItem("token");

  if (id !== "") {
    const resp = await BaseApi({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `/lobbies/${id}`,
    });

    if (resp.status === 204) {
      setToast({
        show: true,
        text: "Item has been deleted.",
      });
      setDeleted(!deleted);
      setShow(false);
    } else {
      setToast({
        show: true,
        text: "There is something wrong please try again later.",
      });
      setShow(false);
    }
  } else {
    const resp = await BaseApi({
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `/lobbies/evacuate`,
    });

    if (resp.status === 204) {
      setToast({
        show: true,
        text: "Items have been deleted.",
      });
      setDeleted(!deleted);
      setShow(false);
    } else {
      setToast({
        show: true,
        text: "There is something wrong please try again later.",
      });
      setShow(false);
    }
  }
};

export const handleClose = (setToast) => {
  setToast({
    show: false,
    text: "",
  });
};
