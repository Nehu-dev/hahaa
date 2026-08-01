import axios from "axios";

const API_URL = "https://recipe-oxp3.onrender.com/api/upload";

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const token = localStorage.getItem("token");

  const response = await axios.post(API_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.imageUrl;
};