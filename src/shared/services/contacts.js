import axios from "axios"

// const instance = axios.create({
//   baseURL: "http://localhost:8888/contacts"
// })

export const getContacts = async () => {
  const { data } = await axios.get("https://calm-gecko-cac335.netlify.app//contacts");
  console.log(data)
  return data;
}

