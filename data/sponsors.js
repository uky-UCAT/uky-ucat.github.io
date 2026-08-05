/* =============================================================
   RESEARCH SPONSORS
   Shown as a logo strip on the Home and Research pages.

   Adding an official logo:
     1. Drop the file at  assets/img/sponsors/<slug>.png  (or .svg).
        SVG > transparent PNG > JPG. ~200×80 or larger works well.
     2. Set the `logo` field below, e.g.
          logo:"assets/img/sponsors/nsf.svg"
   Without a logo file the card falls back to a tasteful text badge
   using `short` (or `name`), so the site looks clean even before
   you've dropped in the artwork.

   To add/remove/reorder sponsors: edit the list below.
   ============================================================= */
window.SITE = window.SITE || {};

SITE.sponsors = [
  { name:"National Science Foundation",  short:"NSF",           url:"https://www.nsf.gov",       logo:"" },
  { name:"U.S. Department of Energy",    short:"DOE",           url:"https://www.energy.gov",    logo:"" },
  { name:"KY Multiscale",                short:"KY Multiscale", url:"https://kymultiscale.org",  logo:"" },
  { name:"CMC Microsystems",             short:"CMC",           url:"https://www.cmc.ca",        logo:"" },
  { name:"Argonne National Laboratory",  short:"Argonne",       url:"https://www.anl.gov",       logo:"" }
  { name:"Advanced Micro Foundry (now GlobalFoundries)",  short:"AMF/GF",       url:"https://gf.com/technologies/silicon-photonics/",       logo:"" } 
];
