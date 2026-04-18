# Audit V2 — Portfolio după prima rundă de îmbunătățiri

> Data: Aprilie 2026
> Scop: ce mai lipsește ca să convingi un angajator în primele 30 de secunde

---

## Scor actual: 8/10 ↑ (era 6.5)

Portofoliul s-a îmbunătățit semnificativ. Acum ai About, Experience, 6 proiecte cu tech badges,
CV button, SEO reparat. Rămân oportunități clare de diferențiere față de alți candidați.

---

## COMPONENTE ACETERNITY UI RECOMANDATE

Aceternity UI (ui.aceternity.com) oferă componente ready-made care folosesc exact ce ai deja
instalat: Framer Motion + Tailwind. Zero dependențe noi, copy-paste în `/components/ui/`.

---

### 1. `Spotlight` — Hero Section ⭐ PRIORITATE MAXIMĂ

**Ce face:** Un spot de lumină dramatic care urmărește cursorul pe hero, creând un efect
de scenă de teatru. Este unul din cele mai "wow" efecte first-impression.

**Cum arată:** https://ui.aceternity.com/components/spotlight

**Unde se pune:** În `components/main/Hero.tsx`, înlocuiește sau suprapune video-ul blackhole.

**De ce contează:** Primul lucru văzut de angajator. Un efect vizual puternic = memorabil.

```tsx
// components/ui/Spotlight.tsx — copy de pe ui.aceternity.com/components/spotlight
// Folosire în Hero.tsx:
<div className="relative">
  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />
  <HeroContent />
</div>
```

---

### 2. `Text Generate Effect` — Headline Hero ⭐ PRIORITATE MARE

**Ce face:** Textul apare literă cu literă, ca și cum ar fi scris live. Mult mai impactant
decât un simplu fade-in.

**Cum arată:** https://ui.aceternity.com/components/text-generate-effect

**Unde se pune:** În `HeroContent.tsx` — pe headline-ul principal
"Building fast, scalable web experiences".

**De ce contează:** Atrage atenția și ține vizitatorul pe pagină primele secunde critice.

```tsx
// Înlocuiește simpla <motion.div> cu:
<TextGenerateEffect words="Building fast, scalable web experiences" />
```

---

### 3. `Infinite Moving Cards` — Skills Carousel ⭐ PRIORITATE MARE

**Ce face:** Tech stack-ul tău rulează continuu ca un ticker tape orizontal, pe 2 rânduri
în direcții opuse. Arată că știi multe tehnologii fără să pară o listă plictisitoare.

**Cum arată:** https://ui.aceternity.com/components/infinite-moving-cards

**Unde se pune:** Înlocuiește sau completează `Skills.tsx` — sub grid-ul curent de iconite.

**De ce contează:** Vizual dinamic, modern. Angajatorii văd tot stack-ul fără să scroll-eze.

```tsx
// Rând 1 (stânga→dreapta): Frontend skills
<InfiniteMovingCards items={Frontend_skill} direction="right" speed="slow" />
// Rând 2 (dreapta→stânga): Backend skills
<InfiniteMovingCards items={Backend_skill} direction="left" speed="slow" />
```

---

### 4. `Tracing Beam` — Experience Timeline ⭐ PRIORITATE MARE

**Ce face:** Pe măsură ce scroll-ezi prin secțiunea Experience, un beam luminos (linie
SVG animată) urmărește progresul tău de scroll, trasând timeline-ul vizual.

**Cum arată:** https://ui.aceternity.com/components/tracing-beam

**Unde se pune:** Învelește conținutul din `Experience.tsx`.

**De ce contează:** Transformă un simplu timeline într-o experiență interactivă. Arată
că știi animații avansate cu SVG + scroll.

```tsx
// Experience.tsx
<TracingBeam>
  {Timeline_data.map((item) => <TimelineCard key={item.title} {...item} />)}
</TracingBeam>
```

---

### 5. `Bento Grid` — Showcase About / Skills ⭐ PRIORITATE MEDIE

**Ce face:** Un grid asimetric (inspirat de Apple) unde unele carduri sunt mai mari decât
altele. Fiecare card poate conține: bio, stack principal, proiect featured, stats, locație.

**Cum arată:** https://ui.aceternity.com/components/bento-grid

**Unde se pune:** Secțiunea About sau ca intro la Skills.

**De ce contează:** Layout-ul Bento este asociat cu brand-uri premium (Apple, Linear).
Arată gust estetic și cunoaștere de design modern.

**Idee de conținut pentru carduri:**
- Card mare: Bio + foto
- Card mediu: Stack principal vizualizat
- Card mic: Locație + disponibilitate
- Card mic: GitHub stats
- Card mic: Years of experience

---

### 6. `Background Beams with Collision` — Contact Section ⭐ PRIORITATE MEDIE

**Ce face:** Beams (raze) de lumină animată care cad de sus și explodează la baza
secțiunii de contact, creând un efect dramatic și energic.

**Cum arată:** https://ui.aceternity.com/components/background-beams-with-collision

**Unde se pune:** Background-ul secțiunii `Contact.tsx`.

**De ce contează:** Secțiunea de contact este ultima impresie. Un background vizual
puternic motivează vizitatorul să completeze formularul.

---

### 7. `Animated Tooltip` — Skill Icons ⭐ PRIORITATE MEDIE

**Ce face:** Hover pe un skill icon → apare un tooltip animat (spring physics) cu
numele tehnologiei și nivelul tău de competență.

**Cum arată:** https://ui.aceternity.com/components/animated-tooltip

**Unde se pune:** Învelește fiecare `<SkillDataProvider>` din `Skills.tsx`.

**De ce contează:** Adaugă context la fiecare icon. "React – Expert" comunică mult
mai mult decât un simplu logo.

---

### 8. `Card Spotlight` / `Moving Border` — Project Cards ⭐ PRIORITATE MEDIE

**Ce face:**
- `Card Spotlight`: Pe hover, un spotlight urmărește cursorul pe suprafața cardului
- `Moving Border`: Un border animat care rulează continuu pe perimetrul cardului

**Cum arată:**
- https://ui.aceternity.com/components/card-spotlight
- https://ui.aceternity.com/components/moving-border

**Unde se pune:** Wrapping-ul cardurilor de proiecte.

---

### 9. `Wavy Background` — Skills sau Hero alt-background ⭐ PRIORITATE SCĂZUTĂ

**Ce face:** Un gradient animat ondulatoriu ca background de secțiune.

**Cum arată:** https://ui.aceternity.com/components/wavy-background

---

### 10. `Glowing Stars Effect` — Decorativ ⭐ PRIORITATE SCĂZUTĂ

**Ce face:** Stars cu glow colorat, mai dramatice decât cele alb-minimale curente.

**Cum arată:** https://ui.aceternity.com/components/glowing-stars-effect

---

## ÎMBUNĂTĂȚIRI DE CONȚINUT (non-Aceternity)

### A. Counter Animation pe Stats (About Section) — IMPACT MARE

**Problema:** Cifrele `3+`, `10+`, `15+` sunt statice. Sunt ignorate.

**Soluția:** Animație de count-up când secțiunea intră în viewport.
Când vizitatorul ajunge la About, cifrele numără de la 0 la valoarea finală.
Psihologic, creierele procesează numerele în mișcare ca dovezi mai credibile.

```tsx
// Hook simplu de implementat:
const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  // useEffect cu requestAnimationFrame...
};
// În About.tsx: <span>{count}+</span>
```

---

### B. GitHub Contributions Widget — IMPACT MARE

**Problema:** Angajatorii tech verifică ÎNTOTDEAUNA GitHub-ul. Dacă îl aduci tu pe
site, controlezi ce văd și când.

**Soluția:** Embed GitHub contribution graph sau un widget custom care arată:
- Streak-ul de contribuții
- Repo-urile cu cele mai multe stele
- Limbajele folosite (pie chart sau bar)

**Opțiuni:**
```
github-readme-stats.vercel.app — SVG embeddable, zero install
ghchart.rshah009.com — contribution chart ca imagine
```

```tsx
// În About.tsx sau o secțiune nouă:
<img
  src="https://github-readme-stats.vercel.app/api?username=UserLH1&show_icons=true&theme=radical"
  alt="GitHub stats"
/>
```

---

### C. "What I Can Build For You" Section — IMPACT MARE

**Problema:** Angajatorul știe ce tehnologii ai, dar nu știe *ce probleme* poți rezolva.

**Soluția:** O secțiune cu 3-4 carduri de tipul:
- 🌐 **Web Applications** — SPAs, dashboards, admin panels cu React/Next.js
- ⚙️ **REST APIs & Backends** — Node.js / Spring Boot, JWT auth, PostgreSQL
- 🎨 **UI/UX Implementation** — pixel-perfect interfaces cu Tailwind + Framer Motion
- 🚀 **Full-Stack Deployment** — Docker, Vercel, CI/CD pipelines

Această secțiune răspunde la întrebarea angajatorului: *"Ce valoare îmi aduce ăsta?"*

---

### D. Testimonial / Social Proof Section — IMPACT MEDIU

**Problema:** Zero social proof. Oricine poate lista skill-uri.

**Soluția:** Chiar și 1-2 citate de la colegi de proiect, profesori sau clienți
freelance transformă complet percepția.

**Aceternity component perfect:** `Infinite Moving Cards` — aceleași carduri rulante
dar cu testimoniale în loc de skill icons.

```tsx
const testimonials = [
  {
    quote: "Horatiu a livrat proiectul înainte de deadline cu cod curat...",
    name: "TODO: Coleg / Profesor",
    title: "TODO: Titlul lor",
  },
];
<InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
```

---

### E. Scroll Progress Indicator — IMPACT MIC (dar noticeabil)

**Ce face:** O linie subțire la topul paginii care crește pe măsură ce scroll-ezi.
Comun pe bloguri tech și portofolii premium.

```tsx
// globals.css sau un component separat folosind Framer Motion:
const { scrollYProgress } = useScroll();
<motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-[100]"
  style={{ scaleX: scrollYProgress }}
/>
```

---

### F. "Currently Learning" Badge — DIFERENȚIATOR UNIC

**Ce face:** Un badge mic, animat, undeva vizibil (About sau Footer) care arată ce
înveți în prezent: *"Currently learning: Rust / GraphQL / AWS / etc."*

**De ce contează:** Arată mentalitate de growth. Angajatorii apreciază oamenii care
se auto-educă continuu.

---

### G. Dark/Light Mode Toggle — IMPACT MIC

**Ce face:** Schimbă tema între dark (actuala) și light.

**De ce contează:** Arată că știi să lucrezi cu CSS variables, React context / Zustand,
și consideri preferințele utilizatorilor. E un skill demonstrat vizibil.

---

## CE SĂ NU ADAUGI (capcanele comune)

| Greșeală | De ce nu |
|----------|----------|
| **Cursor custom animat** | Distrage atenția, irită pe mobile |
| **Muzică / sunete** | Dealbreaker absolut pentru angajatori |
| **Prea multe animații simultane** | Performanță scăzută, Lighthouse scor slab |
| **Loading screen lung** | Angajatorul pleacă dacă durează > 3 secunde |
| **Skill bars cu procente (React: 85%)** | Arbitrare și subiective, nu conving pe nimeni |
| **Prea mult text în Hero** | Trebuie scanat în 5 sec, nu citit |
| **Splash page separată** | Adaugă un click inutil |

---

## PLAN DE ACȚIUNE PRIORITIZAT (V2)

### Săptămâna 1 — Impact vizual maxim:
1. **Spotlight** pe Hero (copy-paste de pe Aceternity, 15 minute)
2. **Text Generate Effect** pe headline Hero (10 minute)
3. **Tracing Beam** pe Experience (20 minute)
4. **Counter animation** pe stats din About (30 minute)

### Săptămâna 2 — Credibilitate:
5. **GitHub stats widget** în About sau secțiune nouă (10 minute)
6. **Infinite Moving Cards** pentru skills (30 minute)
7. **"What I can build" section** — 4 carduri (1 oră)
8. **Scroll progress indicator** (10 minute)

### Săptămâna 3 — Polish:
9. **Animated Tooltip** pe skill icons (20 minute)
10. **Background Beams** pe Contact (15 minute)
11. **Currently Learning badge** (10 minute)
12. **Testimonial section** dacă ai cu cine (variabil)

---

## CONCLUZIE V2

Portofoliul tău este acum în top 15% față de ce văd angajatorii în mod obișnuit.
Adăugarea componentelor Aceternity de mai sus (mai ales Spotlight + Text Generate +
Tracing Beam) l-ar pune în top 5%.

**Regula de aur pentru interviuri:** Recrutor pe LinkedIn → vede profilul tău →
dă click pe portofoliu → are 10 secunde să decidă dacă merită trimis mai departe.
Spotlight + headline animat + GitHub stats = decizie imediată că ești serios.
