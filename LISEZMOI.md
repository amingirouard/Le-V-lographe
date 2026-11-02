# Le Compographe — version autonome

Dossier à déposer tel quel sur un hébergeur statique. Aucun serveur, aucun compte Claude.

## Mettre en ligne (10 minutes)
- **Netlify Drop** (le plus simple) : va sur app.netlify.com/drop, glisse **le dossier entier** `compographe`. Tu obtiens un lien https.
- **GitHub Pages** ou **Cloudflare Pages** : dépose le contenu du dossier à la racine du dépôt.
- Ne dépose pas seulement `index.html` : les dossiers `lib`, `fonts` et `icons` sont nécessaires.

## Sur iPad
1. Ouvre le lien dans **Safari**, avec internet, une première fois (l'app se mémorise).
2. Partager > **Sur l'écran d'accueil**. L'app s'ouvre ensuite en plein écran, y compris sans connexion.

## En ligne / hors ligne
- Les librairies du PDF sont chargées en ligne (cdnjs) ; si le chargement échoue ou si l'appareil est hors ligne, la copie du dossier `lib` prend le relais.
- Les polices (Geist Mono, Inter, Playfair Display, Space Mono, Caveat, Oswald) sont dans `fonts` : elles marchent partout.
- `sw.js` mémorise l'app : en ligne tu as la dernière version, hors ligne la dernière mémorisée.
- Après une modification de l'app, change le numéro dans `sw.js` (`compographe-v1` -> `compographe-v2`) pour forcer la mise à jour.

## À savoir
- Ouvrir `index.html` directement depuis l'app Fichiers de l'iPad n'exécute pas le moteur : passe par le lien hébergé.
- La mémorisation hors ligne (service worker) demande https ; sur ordinateur, `localhost` convient aussi.
- Polices de l'appareil : seulement Chrome / Edge sur ordinateur.
- Le PDF contient une image haute résolution de l'affiche (texte non sélectionnable).
