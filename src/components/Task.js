import { Box, Typography } from '@material-ui/core'

const Task = ({task}) => {
    return (
        <>
            <Box>
                <Typography variant="h6">
                    {task.text}
                </Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2">
                    {task.date} @ {task.time}
                </Typography>
                
            </Box>
        </>
    )
}

export default Task