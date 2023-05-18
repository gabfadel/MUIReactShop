import { ThemeProvider } from '@mui/system';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';


function App() {

  useEffect(() => {
    document.title= "React Material UI- Home";
  
    return () => {
      
    }
  }, []);

  return (
    <ThemeProvider theme={theme} >
<Container
maxWidth="xl"
sx={{
  background:"#fff"
}}>


<AppBar />
<Banner />



</Container>
</ThemeProvider>

  );
}

export default App;
