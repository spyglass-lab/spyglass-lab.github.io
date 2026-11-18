/* Builds index.html for https://spyglass-lab.github.io/ : page.html (content) + style below + embedded fonts (fonts.css:
   Fraunces for headings and Figtree for text, SIL Open Font License, made by getfonts.js). Spyglass Lab has its own type,
   separate from any one game's. The page loads nothing from any other server. Run: node build.js */
const fs = require("fs");
const r = (f) => fs.readFileSync(__dirname + "/" + f, "utf8");
const CSS = `
:root { --bg: #07090a; --panel: #10161a; --line: #2a363b; --ink: #e6e3d6; --dim: #9aa6a0; --gold: #f0b93a; --gold-d: #b8872a; }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font: 17px/1.6 "Figtree", system-ui, sans-serif; }
a { color: var(--gold); }
a:focus-visible, .btn:focus-visible { outline: 3px solid #8ab4f8; outline-offset: 2px; }
.top { border-bottom: 2px solid var(--line); padding: 14px 16px; }
.brand { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; color: var(--gold); font: 800 24px "Fraunces", Georgia, serif; letter-spacing: .5px; }
.glass { width: 64px; height: 32px; }
.wrap { max-width: 1040px; margin: 0 auto; padding: 32px 16px 48px; }
.kick, .tag { font: 800 13px "Figtree", sans-serif; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); margin: 0; }
h1 { font: 800 clamp(36px, 7vw, 64px)/1.05 "Fraunces", Georgia, serif; margin: 10px 0 16px; letter-spacing: -.5px; }
.lede { font-size: 19px; color: var(--dim); max-width: 720px; margin: 0; }
.sec { font: 600 26px "Fraunces", Georgia, serif; color: var(--gold); margin: 44px 0 14px; border-top: 2px solid var(--line); padding-top: 18px; }
.games { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; }
.game { background: var(--panel); border: 2px solid var(--line); display: flex; flex-direction: column; }
.game img { width: 100%; height: auto; display: block; image-rendering: pixelated; border-bottom: 2px solid var(--line); background: #000; }
.gbody { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.game h3 { margin: 0; font: 600 25px/1.2 "Fraunces", Georgia, serif; color: var(--ink); }
.game p { margin: 0; color: var(--dim); }
.game .row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 10px; }
.soon { border-style: dashed; align-self: start; }
.btn { display: inline-block; background: var(--gold); color: #120d00; text-decoration: none; font: 800 15px "Figtree", sans-serif; letter-spacing: .3px; padding: 11px 18px; border: 2px solid var(--gold); border-radius: 999px; }
.btn:hover { background: #ffd067; }
.btn.ghost { background: transparent; color: var(--ink); border-color: var(--line); } .btn.ghost:hover { border-color: var(--gold); color: var(--gold); }
.facts { margin: 0; padding-left: 20px; color: var(--dim); } .facts li { margin: 8px 0; } .facts b { color: var(--ink); }
.foot { border-top: 2px solid var(--line); padding: 18px 16px; text-align: center; color: var(--dim); font-size: 14px; }
`;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Spyglass Lab</title><meta name="description" content="Free history games for the classroom.">
<style>${r("fonts.css")}${CSS}</style></head><body>
${r("page.html")}
</body></html>`;
fs.writeFileSync(__dirname + "/index.html", html);
console.log("built index.html", (html.length / 1024).toFixed(0) + " KB");
