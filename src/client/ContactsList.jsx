import { getContacts } from "../shared/services/contacts.js"
import { useEffect, useState } from "react";

const ContactsList = () => {
  const [contacts, setContacts] = useState([])


  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      // console.log(data)
      setContacts(data);
    }

    fetchContacts();
  }, [])

  //const elements = contacts.map(item => <li key={item._id}>{item.name}</li>)
  return (
    <>
      <p>Name : {contacts.name}</p>
      <p>Email : {contacts.email}</p>
      <p>Phone : {contacts.phone}</p>
    </>
  )
}

export default ContactsList;