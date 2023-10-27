import axios from "axios";
const callURL = "https://nearby-back.vercel.app/api/";

export const APICreateUser = async (email, name, phone, password) => {
  try {
    const response = await axios.post(
      callURL + "user/createUser",
      {
        email,
        name,
        phone,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const APIUpadateUser = async (userID, updateData) => {
  try {
    const response = await axios.put(
      callURL + "user/" + userID,
      {
        updateData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
