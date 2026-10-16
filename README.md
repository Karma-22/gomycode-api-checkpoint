# 👥 UserPulse - Checkpoint API (GoMyCode)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)]()
[![Axios](https://img.shields.io/badge/Axios-1.7.7-5A29E4?logo=axios&logoColor=white)]()
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)]()
[![Student](https://img.shields.io/badge/Student-Karma--22%20(Darius%20Ange)-blue.svg)]()

> Application d'annuaire d'utilisateurs connectée développée avec **React 18**, **Axios** et **Vite** dans le cadre du **Bootcamp Full Stack Software Developer de GoMyCode**.  
> Ce checkpoint met en œuvre la consommation asynchrone d'une API REST externe (`JSONPlaceholder`), la gestion des états de cycle de vie (`useEffect`, `useState`) et le stockage structuré dans `listOfUser`.

---

## 📋 Table des Matières

- [Objectifs du Checkpoint](#-objectifs-du-checkpoint)
- [Cahier des Charges & Validation](#-cahier-des-charges--validation)
- [Architecture & Flux de Données](#-architecture--flux-de-données)
- [Installation & Démarrage](#-installation--démarrage)
- [Auteur](#-auteur)

---

## 🎯 Objectifs du Checkpoint

1. Installer et configurer la bibliothèque HTTP **Axios**.
2. Dans le composant obligatoire `UserList` :
   - Récupérer la liste des utilisateurs depuis `https://jsonplaceholder.typicode.com/users` via `axios.get()` à l'intérieur du hook `useEffect`.
   - Stocker les données reçues dans la variable d'état `listOfUser` avec `useState`.
   - Effectuer un `.map()` sur `listOfUser` pour afficher les cartes d'utilisateurs complètes et stylisées.
3. Intégrer un système de filtrage et tri interactif (par nom, email, entreprise).
4. Fournir une expérience utilisateur robuste avec skeletons de chargement et gestion des erreurs de réseau.

---

## ✅ Cahier des Charges & Validation

| Consigne GoMyCode | Réalisation | Statut |
| :--- | :--- | :---: |
| **Installation d'Axios** | Axios intégré via `package.json` (`^1.7.7`) | ✅ Conforme |
| **Composant UserList** | Composant dédié structuré avec séparation des responsabilités | ✅ Conforme |
| **Hook useEffect + Axios** | Requête GET asynchrone exécutée proprement au montage | ✅ Conforme |
| **State listOfUser** | Déclaration exacte `const [listOfUser, setListOfUser] = useState([])` | ✅ Conforme |
| **Map & Rendu Visuel** | Affichage de chaque utilisateur avec avatar, contact, entreprise et géolocalisation | ✅ Conforme |
| **Recherche & Tri** | Filtrage multi-critères en direct + actualisation sans recharger la page | ✅ Conforme |

---

## 📂 Structure du Projet

```text
10-api-checkpoint/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── UserList.jsx
```

---

## 🚀 Installation & Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/Karma-22/gomycode-api-checkpoint.git
cd gomycode-api-checkpoint

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur local
npm run dev
```

L'application est disponible à l'adresse [http://localhost:3000](http://localhost:3000).

---

## 👨‍💻 Auteur

- **Darius Ange (Karma-22)**  
- Profil GitHub : [https://github.com/Karma-22](https://github.com/Karma-22)  
- GoMyCode Full Stack Software Developer Bootcamp
