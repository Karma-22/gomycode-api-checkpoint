import React from 'react';
import UserList from './UserList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-wrapper">
          <div className="logo-group">
            <span className="logo-icon">👥</span>
            <div>
              <h1 className="logo-title">User<span>Pulse</span></h1>
              <p className="logo-subtitle">Checkpoint API (Axios & useEffect) • GoMyCode</p>
            </div>
          </div>
          <div className="api-badge">
            <span className="pulse-dot" /> REST API Live
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="main-content">
        <section className="intro-section">
          <h2 className="intro-title">Annuaire des Utilisateurs Connectés</h2>
          <p className="intro-subtitle">
            Données asynchrones récupérées avec <strong>Axios</strong> à l'intérieur du hook <strong>useEffect</strong>,
            stockées dans le state <strong>listOfUser</strong> et mappées dynamiquement.
          </p>
        </section>

        {/* Composant principal UserList */}
        <UserList />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>
            Projet réalisé par <strong>Karma-22 (Darius Ange)</strong> pour le Bootcamp GoMyCode Full Stack.
          </p>
          <div className="footer-tags">
            <span className="tag">Axios</span>
            <span className="tag">useEffect</span>
            <span className="tag">listOfUser</span>
            <span className="tag">JSONPlaceholder API</span>
            <span className="tag">React 18</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
