import PropTypes from 'prop-types'
import { Typography, Box, Grid } from '@material-ui/core'
import MyButton from './MyButton'

const Header = (props) => {

    const onClick = () => {
        console.log('Clicked');
    }

    return (
        <header>
            <Box p={2} border={1}>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Typography variant="h4">{ props.title }</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <MyButton variant="contained" color="primary" text="Add" onClick={onClick} />
                    </Grid>
                </Grid>
            </Box>
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
