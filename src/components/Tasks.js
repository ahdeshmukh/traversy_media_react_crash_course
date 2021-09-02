import { Card, CardContent, Typography, Box } from '@material-ui/core'
import Task from './Task'

const Tasks = ({tasks}) => {
    return (
        <>
            {
                tasks.map((task) => {
                    return (
                        <Box key={task.id} mt={2} >
                            <Card>
                                <CardContent >
                                    <Typography variant="h6">
                                        <Task task={task} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        
                    )
                })
            }
        </>
    )
}

export default Tasks