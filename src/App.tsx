import React, { useState } from 'react';
import LoginForm from './Login/LoginForm';
import Header from './partials/Header';
import Footer from './partials/Footer';
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
} from './LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogout={() => setIsLoggedIn(false)} />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;