import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/slice';
import css from '../Filter/Filter.module.css'


export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.contacts.filter)

    const filterChange = (e) => {
        const filterValue = (e.target.value)
        dispatch(changeFilter(filterValue))
      }

    return (
        <div className={css.div}>
            <label className={css.label}>Find contacts by name</label>
            <input className={css.input}
                type="text"
                name="filter"
                onChange={filterChange}
                value={filter}
             />
        </div>
    )
}