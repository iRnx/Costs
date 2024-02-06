import styles from './Select.module.css'
import PropTypes from 'prop-types'


function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

Select.propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    handleOnChange: PropTypes.func,
    value: PropTypes.number,
}

export default Select