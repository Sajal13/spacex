import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:pageNumber" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};
export default App;