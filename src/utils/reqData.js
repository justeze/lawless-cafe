import Axios from "axios";
import { API_URL } from "./url";

export const getMenu = () => {
  return Axios.get(API_URL)
}

export const getMenuSearch = (nama_produk) => {
  return Axios.get(`${API_URL}?nama_produk=${nama_produk}`)
}

export const getCategory = () => {
  return Axios.get(`${API_URL}kategori`)
}

export const addItems = (name, price, ctgr, img) => {
  let formData = new FormData();
  formData.append("nama_produk", name);
  formData.append("harga_produk", price);
  formData.append("id_kategori", ctgr);
  formData.append("gambar_produk", img);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },

  };
  return Axios.post(API_URL, formData, config)
}

export const editItems = (id, name, price, ctgr, img) => {
  let formData = new FormData()
  formData.append('id', id)
  if (name !== undefined) {
    formData.append('nama_produk', name)
  }
  if (price !== undefined) {
    formData.append('harga_produk', price)
  }
  if (ctgr !== undefined) {
    formData.append('id_kategori', ctgr)
  }
  if (img !== undefined) {
    formData.append('gambar_produk', img)
  }
  console.log(...formData, 'kambing')
  return Axios.patch(API_URL, formData, {
    headers: {
      "content-type": "multipart/form-data",
      contentType: false,
      mimeType: "multipart/form-data",
      "cache-control": "no-cache",
      accept: "application/json",
    },
  })
}

export const addTransaction = (data) => {
  return Axios.post(`${API_URL}transaksi`, data)
}

export const getHistory = () => {
  // console.log('kambing')
  return Axios.get(`${API_URL}histori`)
}

export const authLogin = (data) => {
  return Axios.post(`${API_URL}auth/login`, data);
};

export const authRegister = (name, username, password, level_id) => {
  const data = {
    name: name,
    username: username,
    password: password,
    level_id: level_id
  }
  return Axios.post(`${API_URL}auth/register`, data);
};

export const sendEmail = (data) => {
  return Axios.post(`${API_URL}auth/sendemail`, data);
};

export const resetPassword = (data) => {
  return Axios.post(`${API_URL}auth/resetpass`, data);
};