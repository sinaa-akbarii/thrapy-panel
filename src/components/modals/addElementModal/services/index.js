export const handleChange = ({ target: { value } }, setName) => {
  setName(value);
};

export const handleClose = (setShow, setName, setCount, setBalanceChange) => {
  setShow(false);
  setName("");
  setCount && setCount();
  setBalanceChange && setBalanceChange();
};

export const definedTitle = (type) => {
  let title = "";
  switch (type) {
    case "Owned Heros":
      title = "Please enter hero's name";
      break;

    case "Owned Skins":
      title = "Please enter skin's name";
      break;
    case "Owned Chests":
      title = "Please enter chest's data";
      break;
      case "Coins":
        title = "Please enter coin's data";
        break;
    default:
      break;
  }
  return title;
};

export const handleSubmit = () => {};
