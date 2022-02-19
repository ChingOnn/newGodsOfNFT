import './App.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

function App() {
  return (
        
        <Card class="card">
          <TextField id="outlined-basic" label="Name" variant="outlined">Name</TextField>   
          <br></br>
          <TextField id="outlined-basic" label="Password" variant="outlined">Password</TextField>
          <br></br>
          <Button variant="contained">Log in</Button>
          <br></br>
          <Button variant="outlined">Register</Button>
        </Card>

  );
}

export default App;
