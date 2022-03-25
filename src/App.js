import React from 'react';
import './App.scss';
import { Navbar, Footer } from './components';
import { Homepage, CoinsPage, NewsPage, CoinDetailsPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <div className="navbar-section">
          <Navbar />
        </div>
        <div className="main-section">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/coins" element={<CoinsPage />} />
              <Route path="/coins/:id/:name" element={<CoinDetailsPage />} />
              <Route path="/news" element={<NewsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
