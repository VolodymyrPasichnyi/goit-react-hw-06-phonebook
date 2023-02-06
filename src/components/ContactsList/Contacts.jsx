import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import css from '../ContactsList/Contacts.module.css'


export const Contacts = ({ name, number, id }) => {
    const dispatch = useDispatch()

    return (
        <div className={css.div}>
            <p className={css.name}>{name}: {number}</p>
            <button 
                className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>    
    )
}

Contacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}