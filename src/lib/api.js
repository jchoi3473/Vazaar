import axios from "axios";

export const signUP = async function (
  name,
  email,
  address,
  city,
  zipcode,
  password,
  passwordConfirm
) {
  const userInfo = {
    name: name,
    email: email,
    address: address,
    city: city,
    zipcode: zipcode,
    password: password,
    passwordConfirm: passwordConfirm,
  };
  const response = await axios.post(
    "http://127.0.0.1:5000/api/v1/users/signup",
    userInfo
  );
  //need to do something so that we can validate user(correctness)

  console.log(response);
  //   if (response.data.token) {
  //     localStorage.setItem("jwt-token", response.data.token);
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //     console.log(response.data);
  //     return response.data;
  //     // props.history.push('/main');
  //   }
};

export const signIn = async function (email, password) {
  const userInfo = {
    email: email,
    password: password,
  };
  const response = await axios.post(
    "http://127.0.0.1:5000/api/v1/users/login",
    userInfo
  );
  //need to do something so that we can validate user(correctness)

  console.log(response.data);
  if (response.token) {
    localStorage.setItem("jwt-token", response.token);
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
    return response.data;
    // props.history.push('/main');
  }
};
