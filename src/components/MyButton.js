import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const MyButton = (props) => {
    return (
        <Button variant={props.variant} color={props.color} onClick={props.onClick} >
            {props.text}
        </Button>
    )
}

MyButton.defaultProps = {
    color: 'primary',
    variant: 'contained'
}

MyButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.string
}

export default MyButton