import axios from "axios";
const callURL = "http://localhost:3001/api/";

export const APICreateUser = async (email, name) => {
  try {
    const response = await axios.post(
      callURL + "user/create",
      {
        email,
        name,
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
