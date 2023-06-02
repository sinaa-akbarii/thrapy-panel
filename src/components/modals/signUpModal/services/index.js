import { accountBaseApi } from "api";

export const handleClose = (setShow, setUser, setError,setLoading) => {
  setShow(false);
  setLoading(false);
  setUser({
    username: "",
    email: "",
    password: "",
    passConfirmation: "",
  });
  setError({
    username: {
      status: false,
      txt: "",
    },
    password: {
      status: false,
      txt: "",
    },
    email: {
      status: false,
      txt: "",
    },
    passConfirmation: {
      status: false,
      txt: "",
    },
  });
};

export const handleChange = (
  { target: { value, name } },
  setUser,
  setError
) => {
  setUser((prev) => ({
    ...prev,
    [name]: value,
  }));
  setError({
    username: {
      status: false,
      txt: "",
    },
    password: {
      status: false,
      txt: "",
    },
    email: {
      status: false,
      txt: "",
    },
    passConfirmation: {
      status: false,
      txt: "",
    },
  });
};
const validEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
const checkValidation = (user, setError) => {
  if (user.username.trim() === "") {
    setError((prev) => ({
      ...prev,
      username: {
        status: true,
        txt: "Can't be blank",
      },
    }));
  }

  if (user.email.trim() === "") {
    setError((prev) => ({
      ...prev,
      email: {
        status: true,
        txt: "Can't be blank",
      },
    }));
  } else if (!validEmail(user.email)) {
    setError((prev) => ({
      ...prev,
      email: {
        status: true,
        txt: "It doesn't match to Email format",
      },
    }));
  }

  if (user.password.trim() === "") {
    setError((prev) => ({
      ...prev,
      password: {
        status: true,
        txt: "Can't be blank",
      },
    }));
  }else if (user.password.length < 8){
    
    setError((prev) => ({
        ...prev,
        password: {
          status: true,
          txt: "Should be at least 8 characters",
        },
      }));
  }

  if (user.passConfirmation.trim() === "") {
    setError((prev) => ({
      ...prev,
      passConfirmation: {
        status: true,
        txt: "Can't be blank",
      },
    }));
  }
  if (user.passConfirmation !== user.password) {
    setError((prev) => ({
      ...prev,
      passConfirmation: {
        status: true,
        txt: "Pass and it's confirmation don't match",
      },
    }));
  }

  if (
    user.username.trim() === "" ||
    user.email.trim() === "" ||
    !validEmail(user.email) ||
    user.password.trim() === "" ||
    user.password.length < 8 ||
    user.passConfirmation.trim() === "" ||
    user.passConfirmation !== user.password
  ) {
    return false;
  } else {
    return true;
  }
};

export const handleSubmit = async (user, setUser, setShow, setError, setLoading) => {
  let validation = checkValidation(user, setError);
  if (validation) {
    setLoading(true)
    try {
      const resp = await accountBaseApi({
        method: "Post",
        data: {
          user: {
            username: user.username,
            email: user.email,
            password: user.password,
            password_confirmation: user.passConfirmation,
          },
        },
        url: `/accounts/signup`,
      });
      if (resp.status === 201) {
        handleClose(setShow, setUser, setError, setLoading);
      }
    } catch (error) {
      console.log({ error });
      setLoading(false)
    }
  }
};
