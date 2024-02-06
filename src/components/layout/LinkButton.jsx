import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './LinkButton.module.css'

function LinkButton({ to, text }) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

LinkButton.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
}

export default LinkButton