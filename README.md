# Spyglass Lab home page

The home page at https://spyglass-lab.github.io/ , listing Spyglass Lab's classroom games.

- Edit `page.html` (content) or the styles in `build.js`, then run `node build.js` to rebuild `index.html`.
- `fonts.css` holds the embedded fonts, Fraunces (headings) and Figtree (text), both SIL Open Font License, made by `node getfonts.js`. They are Spyglass Lab's own type, different from any game's, and embedding them means the page loads nothing from other servers.
- To add a game, copy the Codebreakers `<article class="game">` block in `page.html`, put its picture in `img/`, and point the buttons at the game's frozen version and teacher page.
- Never put the teacher's name on this page.
