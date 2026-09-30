# Tripwire : site vitrine

Site one-page pour Tripwire, anti-cheat open source (GPL-3.0) pour Minecraft Java 1.21.11.
HTML, CSS et JavaScript vanilla. Aucun build, aucun tracker.

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```
python3 -m http.server 8000
```

Puis aller sur http://localhost:8000.

## Fichiers

```
tripwire/
  index.html   structure et contenu
  style.css    styles (variables dans :root)
  script.js    menu mobile, animation du terminal
  og.svg       image Open Graph (placeholder)
  README.md
```

## À remplacer avant la mise en ligne

- `https://github.com/tripwire-ac/tripwire` : URL du dépôt (placeholder)
- `https://discord.gg/tripwire-ac` : invitation Discord (placeholder)
- `contact@tripwire-ac.example` : adresse de contact
- `og.svg` : la plupart des réseaux préfèrent un PNG en URL absolue pour `og:image`

## Notes

- Polices : IBM Plex Mono et IBM Plex Sans via Google Fonts. Pour zéro requête externe, les héberger dans le dossier.
- Le log du terminal est une maquette, pas une sortie réelle.
- L'objectif de moins de 2 % de MSPT est une cible de conception, à valider par des mesures.
