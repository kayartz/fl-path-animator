/* ============================================================
   Exp 4 — FL Path Animator clips
   Every card links to one YouTube clip and opens it on YouTube
   (new tab) when clicked. To give each card its own clip later,
   change the `id` per item below.
   ============================================================ */

const YT_ID1 = "ZnAjaGWYZx8";
const YT_ID2 = "q8A94vnZmog";
const YT_ID3 = "ZhQW_-dDzLg";
const YT_ID4 = "LVoZWuEqWdc";
const YT_ID5 = "e7YohlCNuUo";
const YT_ID6 = "Hvp-j9Cz9k4";
const YT_ID7 = "ei62o97bnzQ";
const YT_ID8 = "6AUu6zoYnJU";
const YT_ID9 = "8dix9gvBiTI";
const YT_ID10 = "J01M7cvSZEk";
const YT_ID11 = "X7egwJTKXlA";
const YT_ID12 = "axWd78__Dco";
const YT_ID13 = "Ar4bItpD-T4";
const YT_ID14 = "ASSQ0I8leU4";
// shared link for all boxes

const videos = [
  { title: "Wan2.2 FL Path Stat…",  term: "static shot", id: YT_ID1 },
  { title: "Wan2.2 FL Path Pan…",   term: "Pan Left",    id: YT_ID2 },
  { title: "Wan2.2 FL Path Pan…",   term: "Pan Right",   id: YT_ID3 },
  { title: "Wan2.2 FL Path Zoo…",   term: "zoom in",     id: YT_ID4 },

  { title: "Wan2.2 FL Path Zoo…",   term: "zoom out",    id: YT_ID5 },
  { title: "02 Wan2.2 FL Path T…",  term: "Tilt Up",     id: YT_ID6 },
  { title: "Wan2.2 FL Path Tilt…",  term: "Tilt Down",   id: YT_ID7 },
  { title: "Wan2.2 FL Path Han…",   term: "Handheld",    id: YT_ID8 },

  { title: "Wan2.2 FL Path Doll…",  term: "Dolly In",    id: YT_ID9 },
  { title: "Wan2.2 FL Path Doll…",  term: "Dolly Out",   id: YT_ID10 },
  { title: "Wan2.2 FL Path Doll…",  term: "Dolly Left",  id: YT_ID11 },
  { title: "Wan2.2 FL Path Doll…",  term: "Dolly Right", id: YT_ID12 },
  
    { title: "Wan2.2 FL Path FPV…",  term: "FPV Drone",    id: YT_ID13 },
  { title: "Wan2.2 FL Path Snor…",  term: "Snorricam",   id: YT_ID14 },

];

const grid = document.getElementById("grid");

videos.forEach((v) => {
  const card = document.createElement("article");
  card.className = "vcard";

  const watchUrl = `https://www.youtube.com/watch?v=${v.id}`;
  const thumbUrl = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;

  card.innerHTML = `
    <a class="vthumb" href="${watchUrl}" target="_blank" rel="noopener"
       style="background-image:url('${thumbUrl}');background-size:cover;background-position:center;"
       aria-label="Open on YouTube: Wan 2.2 ATI — ${v.term}">
      <div class="vbar">
        <span class="vavatar">k</span>
        <span class="vtitle">${v.title}</span>
      </div>
      <span class="vchannel">kayAI</span>
      <span class="vplay" aria-hidden="true"></span>
    </a>
    <p class="vcap">
      Wan 2.2 with ATI (FL Path Animator)<br>
      <span class="redhint">(with camera movement term</span>
      "<span class="term">${v.term}</span>" in prompt )
    </p>
  `;

  grid.appendChild(card);
});