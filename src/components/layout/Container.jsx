import styles from './Container.module.css'
import PropTypes from 'prop-types'


function Container(props) {
    return (
        
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            { props.children }
        </div>
        
    )
}

Container.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string,
}

export default Container