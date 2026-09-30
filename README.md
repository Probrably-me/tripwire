# Tripwire : landing page

One-page site for Tripwire, an open-source anti-cheat (GPL-3.0) for Minecraft Java 1.21.11.
Vanilla HTML, CSS and JavaScript. No build step, no trackers.

## Run locally

Open `index.html` in a browser, or serve the folder:

python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files

```
tripwire/
index.html   structure and content
style.css    styles (variables in :root)
script.js    mobile menu, terminal animation
og.svg       Open Graph image (placeholder)
README.md
```

## To replace before going live

- GitHub repo URL (currently a placeholder)
- Discord invite URL (currently a placeholder)
- Contact email (currently a placeholder)
- `og:image` : most platforms require an absolute PNG URL

## Notes

- Fonts: IBM Plex Mono and IBM Plex Sans via Google Fonts. To avoid external requests, self-host them.
- The terminal log is a mockup, not real output.

## License

GPL-3.0
```