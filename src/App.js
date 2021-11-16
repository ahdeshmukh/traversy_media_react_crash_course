import { Container, Box } from '@material-ui/core'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {

  const [tasks, setTasks] = useState([
    {id:1, text:'Doctors Appointment', reminder:true, date:'Sep 1, 2021', time:'4:30 pm'},
    {id:2, text:'Meeting at School', reminder:true, date:'Sep 2, 2021', time:'10:30 am'},
    {id:3, text:'Grocery shopping', reminder:true, date:'Sep 2, 2021', time:'3:30 pm'},
  ]);

  return (
    <Container maxWidth="md">
      <Box p={2} border={1}>
        <Header title="My Task Tracker" />
        <Tasks tasks={tasks} />
      </Box>
    </Container>
  )
}

export default App
