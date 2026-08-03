# 🐺 La Grande Route — Acte I : Velen

> *« On ne demande pas au sorceleur de tuer. On lui demande de partir sur la route, et de ne jamais revenir. »*  
> — Journal d’un chasseur de primes

**La Grande Route** est un jeu web narratif roguelite à embranchements, librement inspiré de l'univers de *The Witcher*. 
Embarquez pour un voyage périlleux à travers les marais brumeux de Velen. Faites vos choix, affûtez vos lames, préparez vos huiles et survivez jusqu'au Nid du Griffon Royal.

Disclaimer : Ce projet est un fan-game à but non lucratif. L'univers de The Witcher appartient à CD Projekt Red.

🎮 **Jouer en ligne :** [rubuks.github.io/LaGrandeRoute](https://rubuks.github.io/LaGrandeRoute/)

---

## ✨ Caractéristiques

- 🗺️ **Carte à embranchements** : 12 nœuds procéduraux (villages, tanières, événements, trésors, nid du boss).
- ⚔️ **Combat tactique au tour par tour** : Gestion des Points d'Action (PA), signes de sorceleur, huiles, bombes, et faiblesses élémentaires.
- 📖 **Narration riche & choix moraux** : Événements aléatoires avec des conséquences persistantes sur le monde (villages ravagés, PNJ, quêtes transversales).
- 🏆 **Trophées & Reliques** : Vainquez les monstres épiques pour récupérer des trophées et équipez-en jusqu'à 3 sur votre ceinture pour des bonus passifs.
- 🎭 **4 Destins jouables** : 
  - 🐺 **Sorceleur** (École du Loup) : Riposte, Tourbillon, 5 signes.
  - 🔮 **Sorcière** (Exilée d'Aretuza) : Météore, magie destructrice.
  - 🪓 **Mercenaire Nain** (Mahakam) : Cri de guerre, Rempart, runes.
  - 🏹 **Éclaireuse Elfe** (Dol Blathanna) : Arbalète, tir à distance, saignement.
- 🌍 **Bilingue (FR/EN)** : Système i18n complet, résilient et sans rechargement.
- 📱 **Mobile-first** : Conçu pour être joué à une main, sur une seule page.

---

## 🛠️ Stack Technique

Le projet repose sur une philosophie **Zéro Framework, Zéro Build** :

- **Frontend** : Vanilla JavaScript (ES6+), HTML5, CSS3.
- **Architecture** : Moteur de jeu séparé de la couche de données et de la localisation.
- **Persistance** : Sauvegarde locale via `localStorage` (clé `lgr_v5`).
- **Design System** : UI "Parchemin & Cinématique" (Fonts : *Cinzel, Alegreya, IM Fell English*).
- **Déploiement** : 100% statique, hébergé via GitHub Pages (compatible Netlify / Cloudflare).

---

## 📂 Structure du projet

```text
LaGrandeRoute/
├── index.html              # Coquille principale, UI, design system CSS
├── assets/                 # Portraits, monstres, lieux, cinématiques
├── src/
│   ├── i18n.js             # Moteur de traduction (pont t(), dictionnaires)
│   ├── legacy.js           # Le MOTEUR (carte, combat, inventaire, PNJ)
│   ├── ui/                 # Atlas d'icônes SVG et décoration
│   └── data/               # Données pures (Bestiaire, Objets, Événements, UI)
└── locales/                # Textes diégétiques et chrome (FR / EN)
