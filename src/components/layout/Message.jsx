import { useEffect, useState } from "react"

import styles from './Message.module.css'
import PropTypes from 'prop-types'

function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>
        
    )
}

Message.propTypes = {
    type: PropTypes.string,
    msg: PropTypes.string,
}

export default Message