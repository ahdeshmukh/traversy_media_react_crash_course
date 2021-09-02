import { Box, Typography } from '@material-ui/core'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

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
            <ClearRoundedIcon style={{fontSize: "medium", color: "red", cursor: "pointer"}}></ClearRoundedIcon>
        </>
    )
}

export default Task