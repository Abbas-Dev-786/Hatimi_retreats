import axios from "axios";

const DEFAULT_ERROR_MESSAGE = "Network Error or Something went wrong.";

export const baseURL = import.meta.env.DEV
  ? "http://127.0.0.1:8000/api/v1"
  : "https://hatimi-retreats.onrender.com/api/v1";

const customRequest = axios.create({ baseURL });
customRequest.interceptors.request.use((config) => {
  const accessToken = JSON.parse(localStorage.getItem("user"))?.token;

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

export const LoginUser = async (data) => {
  try {
    const res = await customRequest.post(`/auth/login`, data);

    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAllStats = async () => {
  try {
    const res = await customRequest.get(`/users/stats`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAllBookings = async ({ queryKey }) => {
  try {
    const status = queryKey?.[1] === "pending" ? "=" : "[ne]=";
    const res = await customRequest.get(
      `/bookings${queryKey?.[1] ? `?status${status}pending` : ""}`
    );
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const editBookingRequest = async (data) => {
  try {
    const res = await customRequest.patch(
      `${data?.courtId ? `/courts/${data.courtId}` : ""}/bookings/${data.id}`,
      {
        status: data.status,
        startTime: data?.startTime,
        endTime: data?.endTime,
      }
    );
    return res.data.data;
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

export const getAllCourts = async () => {
  try {
    const res = await customRequest.get(`/courts`);
    return res.data.data.docs;
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

export const createCourt = async (data) => {
  try {
    const res = await customRequest.post(`/courts`, data);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const editCourt = async (data) => {
  try {
    const res = await customRequest.patch(`/courts/${data.id}`, data);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const deleteCourt = async (id) => {
  try {
    const res = await customRequest.delete(`/courts/${id}`);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAllAmenities = async () => {
  try {
    const res = await customRequest.get(`/amenities`);
    return res.data.data.docs;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const createAmenity = async (data) => {
  try {
    const res = await customRequest.post(`/amenities`, data);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const editAmenity = async (data) => {
  try {
    const res = await customRequest.patch(`/amenities/${data.id}`, {
      name: data.name,
    });
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const deleteAmenity = async (id) => {
  try {
    await customRequest.delete(`/amenities/${id}`);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const getAllRules = async () => {
  try {
    const res = await customRequest.get(`/rules`);
    return res.data.data.docs;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const createRule = async (data) => {
  try {
    const res = await customRequest.post(`/rules`, data);
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const editRule = async (data) => {
  try {
    const res = await customRequest.patch(`/rules/${data.id}`, {
      text: data.text,
    });
    return res.data.data;
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};

export const deleteRule = async (id) => {
  try {
    await customRequest.delete(`/rules/${id}`);
  } catch (err) {
    const message = err?.response?.data?.message || DEFAULT_ERROR_MESSAGE;
    throw Error(message);
  }
};
