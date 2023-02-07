import { useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/slice';
import { Contacts } from './Contacts'

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts)
    const filters = useSelector(getFilterContacts)

    const filterUser = () => {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()))
    }

    const users = filters === '' ? contacts : filterUser()

    return (
      <div>
         {users.map(({ id, name, number }) => {
        return (
          <Contacts
                key={id}
                name={name}
                number={number}
                id={id}
          />
        );
      })}
        
      </div>
    )
}
