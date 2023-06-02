import { accountBaseApi } from "api";
import Router from "next/router";

export const handleClose = (setShow, setUser, setError, setLoading) => {
  setShow(false);
  setLoading(false)
  setUser({
    username: "",
    password: "",
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
  });
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
  if (user.password.trim() === "") {
    setError((prev) => ({
      ...prev,
      password: {
        status: true,
        txt: "Can't be blank",
      },
    }));
  }
  if (user.username.trim() === "" || user.password.trim() === "") {
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
            password: user.password,
          },
        },
        url: `/accounts/signin`,
      });
      if (resp.status === 200) {
        localStorage.setItem("token", resp?.data?.data?.token);
        localStorage.setItem("user_id", resp?.data?.data?._key);
        localStorage.setItem("isLogin", true);
        handleClose(setShow, setUser, setError, setLoading);
        Router.reload();
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 404) {
        setError((prev) => ({
          ...prev,
          password: {
            status: true,
            txt: "Username or Password is not correct",
          },
        }));
      }
      setLoading(false)
    }
  }
};
