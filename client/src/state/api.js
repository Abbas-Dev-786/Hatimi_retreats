import axios from "axios";

const DEFAULT_ERROR_MESSAGE = "Network Error or Something went wrong.";

export const baseURL = import.meta.env.DEV
  ? "http://127.0.0.1:8000/api/v1"
  : "https://hatimi-retreats.onrender.com/api/v1";

const customRequest = axios.create({ baseURL });
customRequest.interceptors.request.use((config) => {
  // const accessToken = JSON.parse(localStorage.getItem("user"))?.token;
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGRkM2FjNTFlNDJkZGUwMGM0ZTAzMyIsImlhdCI6MTcwMDU3NTMzNCwiZXhwIjoxNzAzMTY3MzM0fQ.qYJlaweTXeKFo_gdxLELfNgOF7eSiFBAIZtBlUJ_mLg";

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export const getCities = async () => {
  try {
    const res = await customRequest.get(`/courts/cities`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getSports = async ({ queryKey }) => {
  try {
    const res = await customRequest.get(`/courts/cities/${queryKey[1]}/sports`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getTop10Courts = async () => {
  try {
    const res = await customRequest.get(`/courts/top10`);
    return res.data.data.docs;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getTop10Reviews = async () => {
  try {
    const res = await customRequest.get(`/reviews?limit=10`);
    return res.data.data.docs;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getCourts = async ({ page, city, sport }) => {
  try {
    const res = await customRequest.get(
      `/courts?page=${page}&sort=-price&city=${city}&type=${sport}`
    );
    return res.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getSingleCourt = async ({ queryKey }) => {
  try {
    const res = await customRequest.get(`/courts/${queryKey[1]}`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAvailableSlots = async ({ queryKey }) => {
  try {
    const res = await customRequest.post(
      `/courts/available-slots/${queryKey[1]}`,
      {
        date: queryKey[2],
      }
    );
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const createNewBooking = async (data) => {
  try {
    await customRequest.post(`/courts/${data.id}/bookings`, data);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getMyBookings = async () => {
  try {
    const res = await customRequest.get(`/bookings/my`);
    return res.data.data.docs;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const deleteBooking = async (id) => {
  try {
    await customRequest.delete(`/bookings/${id}`);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const createReview = async (data) => {
  try {
    console.log(data);
    await customRequest.post(`/courts/${data.id}/reviews`, data);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

// export const getAllReviews = async (data) => {
//   try {
//     await customRequest.post(`/courts/${data.id}/reviews`, data);
//   } catch (err) {
//     const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
//     throw Error(message);
//   }
// };
