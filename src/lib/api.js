import axios from "axios";
import { min } from "moment";

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
  try{
    const response = await axios.post(
      "https://vazaar.herokuapp.com/api/v1/users/signup",
      userInfo
    ); 
    if(response.status === 201){
      return response.data
    }
    return;
  
  }catch(error){
    return error
  }
  
  // return response.status === 201 ?  : "error";
  //need to do something so that we can validate user(correctness)

};

//use JWT to authenticate
export const authenticateUser = async function (jwt) {
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
      if(response.data.data.user.verified){
      localStorage.setItem("vazaar-jwt-token", response.data.token);
      localStorage.setItem("vazaar-user", JSON.stringify(response.data.data));
      localStorage.setItem("vazaar-recently-viewed", JSON.stringify({recentlyViewed:[]}));

      console.log(response.data);
      return response.data.status;
      }else{
        return "verify"
      }
      // props.history.push('/main');
    }
  }
  catch(error){
    //handle error
    console.log(error);
  };
};

export const signOut = async function () {
  try {
    const response = await axios.get(
      // (`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`  
      'https://vazaar.herokuapp.com/api/v1/users/logout',
      {headers : {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
    );
      console.log(response)
      return response;
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
  imagesList,
  category
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
  bodyFormData.append("category", category);

  var tempImages = []
  for (var i = 1; i < imagesList.length; i++) {
    bodyFormData.append("images", imagesList[i].file);

    // tempImages.push()
  }
  try{
    const response = await axios({
      method: "post",
      url: "https://vazaar.herokuapp.com/api/v1/items",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data",
      'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}` },
    })
    console.log(response);
    alert("Item Posted Successfully!")
    return response.data
  }
  catch(error){
    console.log(error);
    return error
  }
};


export const getAllListings = async function (category, page, numItems, sort, minPrice, maxPrice, search) {

  //need to do something so that we can validate user(correctness)
  try {
    var response;


    if(search===''){
    if(minPrice===0 && maxPrice===0){
      if(category === 'all'){
        if(sort.length>0){
          response = await axios.get(
            // (`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`
            'https://vazaar.herokuapp.com/api/v1/items',{ params: { page: page, limit: numItems, sort: sort, sold:false },
             headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
        else{
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { page: page, limit: numItems, sold:false },
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
      }
      else{
        if(sort.length>0){
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems, sort: sort, sold:false },
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
        else{
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems, sold:false },
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
      }
    }else{
      if(category === 'all'){
        if(sort.length>0){
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sort=${sort}&sold=${false}`,{
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
        else{
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sold=${false}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
      }
      else{
        if(sort.length>0){
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?category=${category}&page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sort=${sort}&sold=${false}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
        else{
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?category=${category}&page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sold=${false}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
      }
    }
  }else{
    if(minPrice===0 && maxPrice===0){
      if(category === 'all'){
        if(sort.length>0){
          response = await axios.get(
            // (`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`
            'https://vazaar.herokuapp.com/api/v1/items',{ params: { page: page, limit: numItems, sort: sort, search:search, sold:false },
             headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
        else{
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { page: page, limit: numItems, search:search, sold:false },
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
      }
      else{
        if(sort.length>0){
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems, sort: sort, search:search, sold:false },
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
        else{
          response = await axios.get(
            "https://vazaar.herokuapp.com/api/v1/items",{ params: { category: category,page: page, limit: numItems, search:search, sold:false },
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
          );
        }
      }
    }else{
      if(category === 'all'){
        if(sort.length>0){
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sort=${sort}&search=${search}&sold=${false}`,{
            headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
        else{
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&search=${search}&sold=${false}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
      }
      else{
        if(sort.length>0){
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?category=${category}&page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&sort=${sort}&search=${search}&sold=${false}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
        else{
          response = await axios.get(
            `https://vazaar.herokuapp.com/api/v1/items?category=${category}&page=${page}&limit=${numItems}&price[gte]=${minPrice}&price[lte]=${maxPrice}&search=${search}&sold=${false}`,
            {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}}
          );
        }
      }
    }
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
  try {

  const response = await axios.post(
    "https://vazaar.herokuapp.com/api/v1/users/forgotPassword",
    userInfo
  );
  if(response.status===200){
    return "success"
  }
  return response
}catch(error){
  console.log(error)
}
  //need to do something so that we can validate user(correctness)

};


export const getSoldListing = async function (sold) {

  //need to do something so that we can validate user(correctness)
  try {
    const response = await axios.get(
      // (`/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`  
      `https://vazaar.herokuapp.com/api/v1/items?userinfo._id=${JSON.parse(localStorage.getItem('vazaar-user')).data._id}&sold=${sold}`,
      {headers : {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
    );
    return response.status === 200 ? response.data : "error";

  } catch (error) {
      return error
  } 
};



export const resetPasswordProfile = async function (
  currentPassword,
  newPassword,
  confirmPassword,
) {
 
  const userInfo = {
    passwordCurrent: currentPassword,
    password: newPassword,
    passwordConfirm: confirmPassword
  };
  try{
    const response = await axios.patch(
      "https://vazaar.herokuapp.com/api/v1/users/updateMyPassword",
      userInfo,
      {headers : {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }

    )
    console.log(response.status);
    if(response.status === 200){
      alert("Password Reset Successfully! Please sign back in with new password.")  
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};

export const updateProfile = async function (
  address,
  city,
  state,
  zipcode
) {
 
  const userInfo = {
    address: address,
    city: city,
    state: state,
    zipcode: zipcode,
  };
  try{
    const response = await axios.patch(
      `https://vazaar.herokuapp.com/api/v1/users/${JSON.parse(localStorage.getItem('vazaar-user')).data._id}`,
      userInfo,
      {headers : {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }

    )
    console.log(response.status);
    if(response.status === 200){
      alert("Profile Change Successful!")  
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};


export const deleteUser = async function () {
  try{
    const response = await axios.delete(
      `https://vazaar.herokuapp.com/api/v1/users/deleteMe`,
      {headers : {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }

    )
    console.log(response.status);
    if(response.status === 204){
      alert("User Successfully Deleted.")
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};


export const doFavorite = async function (itemID) {
  try{
    const response = await axios({
      method: "post",
      url: `https://vazaar.herokuapp.com/api/v1/users/favorite/${itemID}`,
      headers: {
      'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}` },
    })

    // const response = await axios.post(
    //   `https://vazaar.herokuapp.com/api/v1/users/favorite/${itemID}`,
    //   {headers: {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`}
    // }
    // )
    console.log(response.status);
    if(response.status === 201){
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};


export const undoFavorite = async function (itemID) {
  try{
    const response = await axios.delete(
      `https://vazaar.herokuapp.com/api/v1/users/favorite/${itemID}`,
      {headers : {'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}`} }
    )
    console.log(response.status);
    if(response.status === 204){
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};

export const updateItem = async function (itemID, updateObject) {
  try{

    const response = await axios.patch(
      `https://vazaar.herokuapp.com/api/v1/items/${itemID}`,
      updateObject,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('vazaar-jwt-token')}` }
      }
    );
    console.log(response.status);
    if(response.status === 200){
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};


export const resetPasswordAPI = async function (token, updateObject) {
  try{

    const response = await axios.patch(
      `https://vazaar.herokuapp.com/api/v1/users/resetPassword/${token}`,
      updateObject
    );
    console.log(response.status);
    if(response.status === 200){
      return "success"
    }
    return
  }
  catch(error){
    console.log(error);
    return error
  }
};
