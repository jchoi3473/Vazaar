import axios from "axios";

export const signUP = async function (
  name,
  email,
  address,
  city,
  state, 
  zipcode,
  password,
  passwordConfirm
) {
  const userInfo = {
    name: name,
    email: email,
    address: address,
    city: city,
    state: state, 
    zipcode: zipcode,
    password: password,
    passwordConfirm: passwordConfirm,
  };
  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/users/signup",
    userInfo
  );
  console.log(response)
  return response.status === 201 ? response.data : "error";
  //need to do something so that we can validate user(correctness)

};

//use JWT to authenticate
export const authenticateUser = async function (jwt) {
  console.log('jwt='+jwt)
  const response = await axios.get(
    "https://vazaar.herokuapp.com/api/v1/users/me",
      {headers:{
        Authorization: `Bearer ${jwt}` 
      }
    }
  );
  console.log(response.data.data);
  if (response.status === 200) {
    localStorage.setItem("vazaar-user", JSON.stringify(response.data.data));
    console.log(response.data.data);
    return response.data.status;
    // props.history.push('/main');
  }
  return response.status === 200 ? response.data : "error";
  //need to do something so that we can validate user(correctness)
};

export const signIn = async function (email, password) {
  const userInfo = {
    email: email,
    password: password,
  };
  try {
  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/users/login",
    userInfo
  )
    if (response.data.token) {
      localStorage.setItem("vazaar-jwt-token", response.data.token);
      localStorage.setItem("vazaar-user", JSON.stringify(response.data.data));
      console.log(response.data);
      return response.data.status;
      // props.history.push('/main');
    }
  }
  catch(error){
    //handle error
    console.log(error);
  };
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

  for (var i = i; i < imagesList.length; i++) {
    bodyFormData.append("images", imagesList[i].file);
  }
  const response = await axios({
    method: "post",
    url: "https://vazaar.herokuapp.com/api/v1/items",
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


export const getAllListings = async function (category, page, numItems) {

  //need to do something so that we can validate user(correctness)
  try {
    var response;
    if(category === 'all'){
      response = await axios.get(
        "https://vazaar.herokuapp.com/api/v1/items",{ params: { page: page, limit: numItems } }
      );
    }
    else{
      response = await axios.get(
        "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems } }
      );
    }
      return response.status === 200 ? response.data : "error";
  } catch (error) {
      return error
  } 
};

export const getSortedListing = async function (sortOption) {
  //need to do something so that we can validate user(correctness)
  try {
    const response = await axios.get(
      "https://vazaar.herokuapp.com/api/v1/items"
    );
      return response.status === 200 ? response.data : "error";
  } catch (error) {
      return error
  } 
};

export const getListingPrice = async function (sortOption, startPrice, endPrice) {
  //need to do something so that we can validate user(correctness)
  try {
    const response = await axios.get(
      "https://vazaar.herokuapp.com/api/v1/items"
    );
      return response.status === 200 ? response.data : "error";
  } catch (error) {
      return error
  } 
};

export const forgotPassword = async function (email) {
  const userInfo = {
    email: email,
  
  };
  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/forgotPassword",
    userInfo
  );
  return response
  //need to do something so that we can validate user(correctness)

};