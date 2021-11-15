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
  if (response.data.token) {
    localStorage.setItem("jwt-token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.data));
    console.log(response.data);
    return response.data.status;
    // props.history.push('/main');
  }
};

export const addListing = async function (
  title,
  year,
  condition,
  color,
  delivery,
  dimension,
  description,
  price,
  imagesList
) {
  var bodyFormData = new FormData();
  bodyFormData.append("name", title);
  bodyFormData.append("purchasedYear", year);
  bodyFormData.append("condition", condition);
  bodyFormData.append("color", color);
  bodyFormData.append("delivery", delivery === "yes" ? true : false);
  bodyFormData.append("dimension", dimension);
  bodyFormData.append("description", description);
  bodyFormData.append("price", price);

  bodyFormData.append("imageCover", imagesList[0].file);

  for (var i = 1; i < imagesList.length; i++) {
    bodyFormData.append("images", imagesList[i].file);
  }
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:5000/api/v1/items",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};


export const getAllListings = async function () {

  //need to do something so that we can validate user(correctness)
  try {
    const response = await axios.get(
      "https://vazaar.herokuapp.com/api/v1/items"
    );
      return response.status === 200 ? response.data.data : "error";
  } catch (error) {
      return error
  } 
};

