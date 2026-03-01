import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="app-container">
      {loading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <main className="main-content">
          <header className="hero">
            <h1 className="hero-title">Bow Design</h1>
            <p className="hero-subtitle">Premium Web Agency & Digital Solutions</p>
          </header>
          {/* Future sections will go here */}
        </main>
      )}
    </div>
  );
}

export default App;
