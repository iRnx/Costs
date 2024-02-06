import styles from './SubmitButton.module.css'
import PropTypes from 'prop-types'


function SubmitButton({ text }) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

SubmitButton.propTypes = {
    text: PropTypes.string,
}

export default SubmitButton