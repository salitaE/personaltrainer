import './App.css';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" >
            PersonalTrainer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

      
      <Customers />
    
    </div>
  );
}

export default App;
