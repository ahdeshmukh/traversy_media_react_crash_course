import { Card, CardContent, Box } from '@material-ui/core'
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
                                    <Task task={task} />
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