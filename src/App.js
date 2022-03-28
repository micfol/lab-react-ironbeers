import './App.css';
import { Header } from './components/Header';
import { BeersList } from './components/BeersList';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Container } from '@mui/material';
import { AddBeer } from './components/AddBeer';


function App() {

  return (
    <div className="App">
      <Container maxWidth="xs" spacing={2}>
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList query={"all"} />} />
        <Route path="/new-beer" element={<AddBeer />} />
        <Route path="/random-beer" element={<BeersList query={"random"} />} />
      </Routes>     
      </Container>
    </div>
  )
}

export default App;