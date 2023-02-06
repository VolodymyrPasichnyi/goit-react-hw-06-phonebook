import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice';
import css from '../ContactForm/ContactForm.module.css'


export const ContactForm = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch()

    const handleChange = ({target}) => {
        const { name, value } = target
        if (name === 'name') {
            return setName(value)
        }
        else {
            return setNumber(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            number,
            id: nanoid(),
          }
          if (contacts.find(user => user.name === newUser.name)) {
            return alert(`${newUser.name} is already in contacts`)
          } else {
            dispatch(addContact(newUser))
            setName('')
            setNumber('')
          }
    } 

    return (
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>Name</label>
                <input className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                    value={name}
                />
                <label className={css.label}>Number</label>
                <input className={css.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                    value={number}
                />
                <button className={css.button} type="submit">Add contact</button>
            </form>
    )
}