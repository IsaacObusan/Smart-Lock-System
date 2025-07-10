import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import Header from './partials/Header';
import Footer from './partials/Footer';
import QRCodeEntry from './Pages/QRCodeEntry';
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
} from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginForm onLogin={() => {}} />}
        />
        <Route
          path="/qr-code-entry"
          element={
            <div className="flex flex-col min-h-screen">
              <Header onLogout={() => {}} />
              <QRCodeEntry />
              <Footer />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <Header onLogout={() => {}} />
              <main className="flex flex-col flex-1">
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;