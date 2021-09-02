import PropTypes from 'prop-types'
import { Typography, Button, Box, Grid } from '@material-ui/core'

const Header = (props) => {
    return (
        <header>
            <Box p={2} border={1}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <Typography variant="h4">{ props.title }</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="primary">Add</Button>
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
