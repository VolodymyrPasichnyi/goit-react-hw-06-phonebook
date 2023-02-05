import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Filter/Filter";

const LOCAL_KEY = ('key')


export const App = () => {
  const [contacts, setContact] = useState(
    JSON.parse(localStorage.getItem(LOCAL_KEY)) || [])
  const [filter, setFilter] = useState('')

  useEffect(() => {   
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts))
  }, [contacts])

  const createUser = (user) => {
    const newUser = {
      ...user,
      id: nanoid()
    }
      if (contacts.find(user => user.name === newUser.name)) {
        return alert(`${newUser.name} is already in contacts`)
      }
    setContact(prevState => [...prevState, newUser])
  }

  const filterChange = (e) => {
    setFilter(e.target.value)
  }

  const filterUser = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
  }

  const deleteUser = (id) => {
    setContact(prevState => prevState.filter(contact => contact.id !== id))
  }


  return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm 
          create={createUser}
        />
        <h2>Contacts</h2>
        <Filter 
          value={filter}
          filter={filterChange}
        />
        <ContactList 
          contacts={filterUser()}
          deleteUser={deleteUser}
        />
    </div>
  )
}



