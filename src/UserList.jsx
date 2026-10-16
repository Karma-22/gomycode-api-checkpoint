import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // 1. Déclaration de l'état listOfUser demandé par la consigne GoMyCode
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Fonction de récupération des utilisateurs via axios
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      // 2. Appel GET avec Axios vers l'API JSONPlaceholder
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      // 3. Stockage des utilisateurs dans listOfUser
      setListOfUser(response.data);
    } catch (err) {
      console.error('Erreur lors du chargement des utilisateurs:', err);
      setError("Impossible de contacter l'API JSONPlaceholder. Vérifiez votre connexion Internet.");
    } finally {
      setLoading(false);
    }
  };

  // 4. Hook useEffect pour exécuter l'appel au premier montage
  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtrage des utilisateurs selon le champ de recherche
  const filteredUsers = listOfUser
    .filter((user) => {
      const q = searchTerm.toLowerCase().trim();
      return (
        user.name.toLowerCase().includes(q) ||
        user.username.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q) ||
        user.address.city.toLowerCase().includes(q) ||
        user.company.name.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'id') return a.id - b.id;
      if (sortBy === 'company') return a.company.name.localeCompare(b.company.name);
      return 0;
    });

  // Génération d'un dégradé unique par utilisateur
  const getGradientForId = (id) => {
    const gradients = [
      'linear-gradient(135deg, #6366f1, #a855f7)',
      'linear-gradient(135deg, #3b82f6, #06b6d4)',
      'linear-gradient(135deg, #10b981, #14b8a6)',
      'linear-gradient(135deg, #f59e0b, #ef4444)',
      'linear-gradient(135deg, #ec4899, #8b5cf6)',
      'linear-gradient(135deg, #0ea5e9, #6366f1)'
    ];
    return gradients[(id - 1) % gradients.length];
  };

  return (
    <div className="userlist-container">
      {/* Barre d'outils (Recherche & Filtres) */}
      <div className="toolbar-card">
        <div className="search-group">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher par nom, email, ville ou entreprise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>

        <div className="toolbar-actions">
          <div className="sort-group">
            <label htmlFor="sort-select" className="sort-label">Trier par :</label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Nom (A-Z)</option>
              <option value="id">ID Utilisateur</option>
              <option value="company">Entreprise</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-outline reload-btn"
            onClick={fetchUsers}
            disabled={loading}
            title="Rafraîchir les données de l'API"
          >
            <span className={loading ? 'spinning' : ''}>↻</span> Actualiser
          </button>
        </div>
      </div>

      {/* État de chargement (Skeletons) */}
      {loading && (
        <div className="users-grid">
          {[1, 2, 3, 4, 5, 6].map((sk) => (
            <div key={sk} className="user-card skeleton-card">
              <div className="skeleton-avatar" />
              <div className="skeleton-line title-line" />
              <div className="skeleton-line sub-line" />
              <div className="skeleton-line text-line" />
              <div className="skeleton-line text-line" />
            </div>
          ))}
        </div>
      )}

      {/* État d'erreur */}
      {error && !loading && (
        <div className="error-card">
          <span className="error-icon">⚠️</span>
          <h3>Erreur de communication</h3>
          <p>{error}</p>
          <button type="button" className="btn btn-primary" onClick={fetchUsers}>
            Réessayer
          </button>
        </div>
      )}

      {/* Rendu de listOfUser mappé */}
      {!loading && !error && (
        <>
          <div className="results-count-bar">
            <span>
              Affichage de <strong>{filteredUsers.length}</strong> utilisateur{filteredUsers.length > 1 ? 's' : ''} sur <strong>{listOfUser.length}</strong>
            </span>
            <span className="api-endpoint-badge">
              Source : <code>jsonplaceholder.typicode.com/users</code>
            </span>
          </div>

          {filteredUsers.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔎</span>
              <h3>Aucun utilisateur trouvé</h3>
              <p>Aucun résultat ne correspond à "{searchTerm}".</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setSearchTerm('')}
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            <div className="users-grid">
              {filteredUsers.map((user) => (
                <div key={user.id} className="user-card">
                  {/* Avatar & Header */}
                  <div className="user-card-header">
                    <div
                      className="user-avatar"
                      style={{ background: getGradientForId(user.id) }}
                    >
                      {user.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>

                    <div className="user-identity">
                      <span className="user-id-badge">ID #{user.id}</span>
                      <h3 className="user-name">{user.name}</h3>
                      <span className="user-username">@{user.username}</span>
                    </div>
                  </div>

                  {/* Coordonnées */}
                  <div className="user-card-body">
                    <div className="contact-item">
                      <span className="contact-icon">✉️</span>
                      <a href={`mailto:${user.email}`} className="contact-link">
                        {user.email}
                      </a>
                    </div>

                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <a href={`tel:${user.phone}`} className="contact-link">
                        {user.phone}
                      </a>
                    </div>

                    <div className="contact-item">
                      <span className="contact-icon">🌐</span>
                      <a
                        href={`https://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link website-link"
                      >
                        {user.website} ↗
                      </a>
                    </div>

                    <div className="contact-divider" />

                    {/* Entreprise */}
                    <div className="company-box">
                      <div className="company-label">
                        <span className="company-icon">🏢</span> Entreprise
                      </div>
                      <div className="company-name">{user.company.name}</div>
                      <p className="company-catchphrase">"{user.company.catchPhrase}"</p>
                    </div>

                    {/* Localisation */}
                    <div className="location-box">
                      <span className="location-icon">📍</span>
                      <span className="location-text">
                        {user.address.street}, {user.address.city} ({user.address.zipcode})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserList;
