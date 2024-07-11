import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './src/pages/AllProducts/';
import ProductPage from './src/pages/ProductPage.js/';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
