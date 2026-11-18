/* Builds index.html for https://spyglass-lab.github.io/ : page.html (content) + style below + embedded fonts (fonts.css:
   Fraunces for headings and Figtree for text, SIL Open Font License, made by getfonts.js). Spyglass Lab has its own type,
   separate from any one game's. The page loads nothing from any other server. Run: node build.js */
const fs = require("fs");
const r = (f) => fs.readFileSync(__dirname + "/" + f, "utf8");
const CSS = `
/* Spyglass Lab look: a history museum and an old map. Aged parchment with a faint map grid, sepia ink, oxblood accents,
   faded map-blue labels, exhibit placards for games and a timeline ribbon of eras. Deliberately unlike any one game's look
   (Codebreakers is near-black and brass). Every text pair meets WCAG AA contrast (checked: 6.4:1 or better). */
:root { --bg: #F3EAD3; --panel: #FBF6EA; --line: #CDBB95; --rule: #8C6A3E; --ink: #2B2118; --dim: #5A4636; --map: #2F5866; --ox: #8C2F1C; --ox-h: #6E2416; --head: #3A2A1E; --cream: #F3EAD3; --tag: #E7DABA; }
* { box-sizing: border-box; }
body { margin: 0; color: var(--ink); font: 17px/1.6 "Figtree", system-ui, sans-serif; background-color: var(--bg);
  background-image: radial-gradient(ellipse at center, rgba(255, 252, 240, .55), rgba(140, 106, 62, .10) 90%), linear-gradient(rgba(47, 88, 102, .07) 1px, transparent 1px), linear-gradient(90deg, rgba(47, 88, 102, .07) 1px, transparent 1px);
  background-size: 100% 100%, 48px 48px, 48px 48px; }
html { background: var(--bg); } body { min-height: 100vh; }
a { color: var(--ox); }
a:focus-visible, .btn:focus-visible { outline: 3px solid #1D4ED8; outline-offset: 2px; }
.top { background: var(--head); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; border-bottom: 4px double var(--rule); }
.top .brand:focus-visible { outline-color: #9CC9FF; }
.brand { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; color: var(--cream); font: 800 24px "Fraunces", Georgia, serif; letter-spacing: .5px; }
.motto { color: #D9C9A3; font: italic 600 16px "Fraunces", Georgia, serif; }
.glass { width: 64px; height: 32px; }
.wrap { max-width: 1040px; margin: 0 auto; padding: 34px 16px 48px; }
.kick { font: 800 13px "Figtree", sans-serif; letter-spacing: 2.5px; text-transform: uppercase; color: var(--map); margin: 0; }
h1 { font: 800 clamp(36px, 7vw, 66px)/1.05 "Fraunces", Georgia, serif; margin: 10px 0 16px; letter-spacing: -.5px; color: var(--ink); }
.lede { font-size: 19px; color: var(--dim); max-width: 740px; margin: 0; }
/* timeline ribbon of eras */
.ribbon { list-style: none; margin: 28px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0; border: 2px solid var(--rule); background: var(--tag); }
.ribbon li { flex: 1 1 120px; padding: 10px 12px; font: 600 14px "Figtree", sans-serif; color: var(--ink); border-right: 1px solid var(--line); text-align: center; display: flex; flex-direction: column; justify-content: center; }
.ribbon li:last-child { border-right: 0; }
.ribbon .now { background: var(--map); color: #FBF6EA; flex-basis: 210px; }
.ribbon .now small { font: italic 600 13px "Fraunces", Georgia, serif; color: #FBF6EA; }
/* section headings with an ornamental rule */
.sec { display: flex; align-items: center; gap: 16px; font: 600 28px "Fraunces", Georgia, serif; color: var(--ox); margin: 48px 0 18px; }
.sec::before, .sec::after { content: ""; flex: 1; height: 0; border-top: 3px double var(--rule); }
.sec span::before, .sec span::after { content: "◆"; font-size: 12px; color: var(--rule); margin: 0 12px; vertical-align: middle; }
/* games as museum exhibit placards */
.games { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; }
.game { position: relative; background: var(--panel); border: 2px solid var(--rule); outline: 1px solid var(--line); outline-offset: -8px; padding: 26px 18px 18px; display: flex; flex-direction: column; box-shadow: 0 8px 20px rgba(58, 42, 30, .14); }
.game .plate { position: absolute; top: -13px; left: 18px; margin: 0; background: var(--ox); color: #FBF6EA; font: 800 12px "Figtree", sans-serif; letter-spacing: 2px; text-transform: uppercase; padding: 4px 12px; }
.frame { border: 6px solid #3A2A1E; outline: 2px solid var(--rule); background: #000; }
.frame img { width: 100%; height: auto; display: block; image-rendering: pixelated; }
.gbody { padding: 16px 4px 4px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.era { margin: 0; font: 800 26px "Fraunces", Georgia, serif; color: var(--ox); line-height: 1.1; }
.era span { display: block; font: 800 12px "Figtree", sans-serif; letter-spacing: 2.5px; text-transform: uppercase; color: var(--map); margin-top: 4px; }
.game h3 { margin: 0; font: 600 25px/1.2 "Fraunces", Georgia, serif; color: var(--ink); }
.game p { margin: 0; color: var(--dim); }
.game .meta { font: italic 15px "Fraunces", Georgia, serif; }
.game .row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 10px; }
.soon { align-self: start; background: rgba(251, 246, 234, .6); border-style: dashed; box-shadow: none; }
.btn { display: inline-block; background: var(--ox); color: #FFFFFF; text-decoration: none; font: 800 15px "Figtree", sans-serif; letter-spacing: .3px; padding: 10px 18px; border: 2px solid var(--ox); border-radius: 3px; }
.btn:hover { background: var(--ox-h); border-color: var(--ox-h); }
.btn.ghost { background: transparent; color: var(--ink); border-color: var(--ink); } .btn.ghost:hover { background: var(--ink); color: var(--cream); }
.facts { margin: 0; padding-left: 20px; color: var(--dim); } .facts li { margin: 8px 0; } .facts li::marker { color: var(--ox); } .facts b { color: var(--ink); }
.foot { border-top: 4px double var(--rule); padding: 22px 16px; text-align: center; color: var(--dim); font: italic 15px "Fraunces", Georgia, serif; }
.foot p { margin: 6px 0 0; } .rose { width: 44px; height: 44px; }
`;
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Spyglass Lab</title><meta name="description" content="Free history games for the classroom.">
<style>${r("fonts.css")}${CSS}</style></head><body>
${r("page.html")}
</body></html>`;
fs.writeFileSync(__dirname + "/index.html", html);
console.log("built index.html", (html.length / 1024).toFixed(0) + " KB");
