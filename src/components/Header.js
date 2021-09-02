import PropTypes from 'prop-types'
import { Typography, Grid } from '@material-ui/core'
import MyButton from './MyButton'

const Header = (props) => {

    const onClick = () => {
        console.log('Clicked');
    }

    return (
        <header>
            <Grid container spacing={3}>
                <Grid container item xs={10}>
                    <Typography variant="h4">{ props.title }</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent="flex-end" >
                    <MyButton variant="contained" color="primary" text="Add" onClick={onClick} />
                </Grid>
            </Grid>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
