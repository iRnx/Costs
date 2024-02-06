import styles from './Input.module.css'
import PropTypes from 'prop-types'


function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                onChange={handleOnChange} 
                id={name} 
                type={type}
                name={name} 
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}


Input.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    value: PropTypes.number,
}

export default Input