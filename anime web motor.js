"use strict";

/* =====================================================
   AnimeBirth - script.js (motor)
   Necesita data.js cargado antes. No contiene contenido:
   todo el contenido está en data.js.
===================================================== */

/* =====================================================
   1. TEXTOS DE LA INTERFAZ
===================================================== */
const I18N = {
  es: {
    metaTitle: "AnimeBirth – Quizzes de anime: personajes, poderes y más",
    metaDesc: "Descubre tu destino en el mundo del anime: quizzes de Naruto, One Piece, Bleach, Jujutsu Kaisen, Hunter x Hunter, Dragon Ball y más. Gratis, en español e inglés.",
    navHome: "Inicio", navAnimes: "Animes", navUniversal: "Anime Universal", navQuizzes: "Quizzes",
    heroTitle: "Descubre tu destino en el mundo del anime",
    heroText: "Quizzes gratuitos sobre tus animes favoritos: personajes, poderes, clanes, cumpleaños y mucho más.",
    heroCtaAnimes: "Explorar animes", heroCtaUniversal: "Anime Universal",
    searchLabel: "Buscar animes y quizzes",
    searchPlaceholder: "Busca un anime, personaje o quiz…",
    exploreTitle: "Explorar por anime",
    exploreSub: "Elige un anime y entra en sus quizzes.",
    universalBadge: "✨ Sección especial",
    universalTitle: "Anime Universal",
    universalText: "Personajes de todos los animes en un solo lugar: tu pareja ideal, tu villano, tu universo y mucho más.",
    universalCta: "Entrar al universo →",
    universalIntro: "Aquí los resultados pueden incluir personajes de todos los animes disponibles.",
    includedAnimes: "Animes incluidos",
    allQuizzes: "Todos los quizzes",
    quizzesWord: "Quizzes",
    quizCount: "{n} quizzes",
    charCount: "{n} personajes",
    cat_all: "Todos", cat_character: "Personajes", cat_power: "Poderes y técnicas",
    cat_group: "Grupos", cat_birthday: "Cumpleaños", cat_zodiac: "Signo zodiacal", cat_special: "Especiales",
    noResults: "No encontramos resultados. Prueba con otra búsqueda o categoría.",
    back: "← Volver",
    play: "Jugar →",
    seeQuizzes: "Ver quizzes →",
    privacy: "No guardamos ni enviamos tus datos. Todo ocurre en tu dispositivo.",
    disclaimer: "AnimeBirth es un proyecto de fans, gratuito y sin fines oficiales. Los resultados son recreativos. Las series, personajes y nombres pertenecen a sus respectivos creadores; no hay afiliación con ellos.",
    day: "Día", month: "Mes", selectPlaceholder: "Elige…", discover: "Descubrir",
    invalidDate: "Fecha no válida. Revisa el día y el mes (por ejemplo, el 31 de abril no existe).",
    copy: "Copiar resultado", share: "Compartir",
    copied: "¡Resultado copiado!", copyFail: "No se pudo copiar. Inténtalo de nuevo.",
    retry: "Repetir quiz", moreQuizzes: "Más quizzes",
    questionOf: "Pregunta {n} de {total}",
    shareIntro: "Mi resultado en AnimeBirth:",
    badgeOfficial: "⭐ Cumpleaños oficial compartido",
    badgeFun: "🎲 Resultado recreativo",
    badgeOriginal: "🎨 Creación original",
    noteOfficialBday: "Este personaje cumple años el mismo día que tú según datos de la serie. Verifica siempre en fuentes oficiales.",
    noteAlso: "También comparten esa fecha: ",
    noteFunBday: "Resultado solo por diversión: no significa que el personaje cumpla años en tu fecha.",
    noteFun: "Resultado recreativo basado en tus respuestas.",
    noteOfficialNames: "Los nombres provienen de la serie, pero la asignación es recreativa.",
    noteOriginal: "Creación original de AnimeBirth: no es un elemento oficial de la serie.",
    noteZodiac: "Asociación recreativa entre signo y personaje. No es un dato oficial.",
    desc_q: "Responde 5 preguntas rápidas y descubre tu resultado.",
    desc_date: "Elige tu día y mes de nacimiento para descubrir tu resultado.",
    desc_zodiac: "Elige tu día y mes de nacimiento: calculamos tu signo y te asignamos un personaje con su energía.",
    yourSign: "Tu signo es",
    seriesLabel: "Serie:",
    animeWord: "Anime"
  },
  en: {
    metaTitle: "AnimeBirth – Anime quizzes: characters, powers and more",
    metaDesc: "Discover your destiny in the anime world: quizzes for Naruto, One Piece, Bleach, Jujutsu Kaisen, Hunter x Hunter, Dragon Ball and more. Free, in English and Spanish.",
    navHome: "Home", navAnimes: "Anime", navUniversal: "Universal Anime", navQuizzes: "Quizzes",
    heroTitle: "Discover your destiny in the anime world",
    heroText: "Free quizzes about your favorite anime: characters, powers, clans, birthdays and much more.",
    heroCtaAnimes: "Explore anime", heroCtaUniversal: "Universal Anime",
    searchLabel: "Search anime and quizzes",
    searchPlaceholder: "Search an anime, character or quiz…",
    exploreTitle: "Explore by anime",
    exploreSub: "Pick an anime and jump into its quizzes.",
    universalBadge: "✨ Special section",
    universalTitle: "Universal Anime",
    universalText: "Characters from every anime in one place: your ideal partner, your villain, your universe and much more.",
    universalCta: "Enter the universe →",
    universalIntro: "Here, results can include characters from all available anime.",
    includedAnimes: "Included anime",
    allQuizzes: "All quizzes",
    quizzesWord: "Quizzes",
    quizCount: "{n} quizzes",
    charCount: "{n} characters",
    cat_all: "All", cat_character: "Characters", cat_power: "Powers & techniques",
    cat_group: "Groups", cat_birthday: "Birthday", cat_zodiac: "Zodiac sign", cat_special: "Special",
    noResults: "No results found. Try another search or category.",
    back: "← Back",
    play: "Play →",
    seeQuizzes: "See quizzes →",
    privacy: "We don't store or send your data. Everything happens on your device.",
    disclaimer: "AnimeBirth is a free fan project with no official purpose. Results are for fun. Series, characters and names belong to their respective creators; there is no affiliation with them.",
    day: "Day", month: "Month", selectPlaceholder: "Choose…", discover: "Reveal",
    invalidDate: "Invalid date. Check the day and month (for example, April 31st doesn't exist).",
    copy: "Copy result", share: "Share",
    copied: "Result copied!", copyFail: "Could not copy. Please try again.",
    retry: "Retake quiz", moreQuizzes: "More quizzes",
    questionOf: "Question {n} of {total}",
    shareIntro: "My AnimeBirth result:",
    badgeOfficial: "⭐ Shared official birthday",
    badgeFun: "🎲 Just-for-fun result",
    badgeOriginal: "🎨 Original creation",
    noteOfficialBday: "This character shares your birthday according to series data. Always check official sources.",
    noteAlso: "Also sharing that date: ",
    noteFunBday: "Just for fun: it doesn't mean the character was born on your date.",
    noteFun: "Just-for-fun result based on your answers.",
    noteOfficialNames: "Names come from the series, but the match is just for fun.",
    noteOriginal: "Original AnimeBirth creation: not an official element of the series.",
    noteZodiac: "Fun pairing between sign and character. Not official data.",
    desc_q: "Answer 5 quick questions and discover your result.",
    desc_date: "Pick your birth day and month to discover your result.",
    desc_zodiac: "Pick your birth day and month: we calculate your sign and match you with a character with its energy.",
    yourSign: "Your sign is",
    seriesLabel: "Series:",
    animeWord: "Anime"
  }
};

const MONTHS = {
  es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

/* Días máximos de cada mes (febrero = 29 porque no pedimos el año) */
const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/* Enlaces antiguos de la versión 1 que siguen funcionando */
const LEGACY_HASHES = Object.assign(Object.create(null), {
  naruto: "quiz/naruto-birthday",
  zodiac: "quiz/universal-zodiac",
  power: "quiz/universal-power"
});

/* =====================================================
   2. ESTADO E ÍNDICES
===================================================== */
let currentLang = "es";
let currentQuiz = null;
let toastTimer = null;
const filters = { q: "", cat: "all" };
const quizState = {};

function indexBy(list) {
  const map = Object.create(null);
  list.forEach(function (item) { map[item.id] = item; });
  return map;
}

const ANIME_BY_ID = indexBy(ANIMES);
const CHAR_BY_ID = indexBy(CHARACTERS);
const QUIZ_BY_ID = indexBy(QUIZZES);

function getAnime(id) {
  return id === "universal" ? UNIVERSAL : ANIME_BY_ID[id];
}

/* =====================================================
   3. FUNCIONES AUXILIARES
===================================================== */
function $(id) { return document.getElementById(id); }

function t(key) {
  const dict = I18N[currentLang] || I18N.es;
  return dict[key] !== undefined ? dict[key] : key;
}

/* Elige el idioma dentro de un texto: "texto" o ["español", "english"] */
function L(x) {
  if (x === undefined || x === null) return "";
  if (typeof x === "string") return x;
  if (Array.isArray(x)) {
    const v = x[currentLang === "en" ? 1 : 0];
    return v !== undefined ? v : x[0];
  }
  return String(x);
}

function joinAll(x) {
  return Array.isArray(x) ? x.join(" ") : String(x || "");
}

function norm(s) {
  return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function matchesQuery(hay, query) {
  const tokens = norm(query).split(/\s+/).filter(Boolean);
  return tokens.every(function (tk) { return hay.indexOf(tk) !== -1; });
}

/* Crea un elemento HTML de forma segura (usa textContent) */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function setAccent(node, colors) {
  node.style.setProperty("--a", colors[0]);
  node.style.setProperty("--b", colors[1]);
}

/* Valida que día y mes formen una fecha real */
function isValidDate(day, month) {
  if (!Number.isInteger(day) || !Number.isInteger(month)) return false;
  if (month < 1 || month > 12) return false;
  return day >= 1 && day <= DAYS_IN_MONTH[month - 1];
}

function getZodiacKey(month, day) {
  let sign = "capricorn"; // 1-19 de enero y 22-31 de diciembre
  ZODIAC_CUTS.forEach(function (cut) {
    if (month > cut[0] || (month === cut[0] && day >= cut[1])) sign = cut[2];
  });
  return sign;
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) { /* plan B */ }
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch (err) {
    return false;
  }
}

function buildShareText(result) {
  return t("shareIntro") + " " + result.shareLine + " ✨ " + window.location.href;
}

async function handleCopy(result) {
  const ok = await copyText(buildShareText(result));
  showToast(ok ? t("copied") : t("copyFail"));
}

async function handleShare(result) {
  const text = buildShareText(result);
  if (navigator.share) {
    try {
      await navigator.share({ title: "AnimeBirth", text: text, url: window.location.href });
      return;
    } catch (err) {
      if (err && err.name === "AbortError") return;
    }
  }
  const ok = await copyText(text);
  showToast(ok ? t("copied") : t("copyFail"));
}

function buildSelect(id, labelText, options, selectedValue) {
  const field = el("div", "field");
  const label = el("label", "", labelText);
  label.setAttribute("for", id);
  const select = document.createElement("select");
  select.id = id;

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = t("selectPlaceholder");
  select.appendChild(placeholder);

  options.forEach(function (opt) {
    const option = document.createElement("option");
    option.value = String(opt.value);
    option.textContent = opt.text;
    select.appendChild(option);
  });

  if (selectedValue) select.value = String(selectedValue);
  field.appendChild(label);
  field.appendChild(select);
  return { field: field, select: select };
}

function parentHash(quiz) {
  return quiz.a === "universal" ? "universal" : "anime/" + quiz.a;
}

/* Tarjeta visual del resultado */
function buildResultCard(result, onRetry, onMore) {
  const card = el("div", "result-card");
  card.style.setProperty("--result-a", result.colors[0]);
  card.style.setProperty("--result-b", result.colors[1]);

  if (result.badge) {
    card.appendChild(el("span", "result-badge" + (result.official ? " official" : ""), result.badge));
  }
  card.appendChild(el("span", "result-emoji", result.emoji));
  card.appendChild(el("p", "result-eyebrow", result.eyebrow));
  card.appendChild(el("h3", "result-title", result.title));
  if (result.subtitle) card.appendChild(el("p", "result-subtitle", result.subtitle));
  card.appendChild(el("p", "result-desc", result.desc));
  if (result.note) card.appendChild(el("p", "result-note", result.note));
  card.appendChild(el("p", "result-brand", "ANIMEBIRTH ✨"));

  const actions = el("div", "result-actions");

  const copyBtn = el("button", "btn", "📋 " + t("copy"));
  copyBtn.type = "button";
  copyBtn.addEventListener("click", function () { handleCopy(result); });

  const shareBtn = el("button", "btn", "📤 " + t("share"));
  shareBtn.type = "button";
  shareBtn.addEventListener("click", function () { handleShare(result); });

  const retryBtn = el("button", "btn btn-secondary", "🔄 " + t("retry"));
  retryBtn.type = "button";
  retryBtn.addEventListener("click", onRetry);

  actions.appendChild(copyBtn);
  actions.appendChild(shareBtn);
  actions.appendChild(retryBtn);

  if (onMore) {
    const moreBtn = el("button", "btn btn-secondary", "✨ " + t("moreQuizzes"));
    moreBtn.type = "button";
    moreBtn.addEventListener("click", onMore);
    actions.appendChild(moreBtn);
  }

  card.appendChild(actions);
  return card;
}

/* =====================================================
   4. CÁLCULO DE RESULTADOS
===================================================== */

/* Personajes que forman la "bolsa" de resultados de un quiz */
function getPool(spec) {
  if (spec === "all") return CHARACTERS.filter(function (c) { return !c.v; });
  if (spec === "villain") return CHARACTERS.filter(function (c) { return c.v; });
  return CHARACTERS.filter(function (c) { return c.a === spec && !c.v; });
}

/* Lista de resultados posibles de un quiz de preguntas */
function getResults(quiz) {
  if (quiz.res) return quiz.res;
  if (quiz.pool === "universe") {
    return ANIMES.map(function (an) {
      return { e: an.e, n: an.n, s: [t("animeWord"), t("animeWord")], d: an.tag, t: an.t, c: an.c };
    });
  }
  return getPool(quiz.pool).map(function (ch) {
    const an = ANIME_BY_ID[ch.a];
    return { e: ch.e, n: ch.n, s: an.n, d: ch.d, t: ch.t, c: ch.c || an.c };
  });
}

/* Gana el resultado con más puntos (empate: el primero de la lista) */
function pickResult(results, answers) {
  const score = { f: 0, s: 0, d: 0, m: 0, h: 0, p: 0 };
  answers.forEach(function (k) { if (score[k] !== undefined) score[k] += 1; });

  let best = 0;
  let bestScore = -1;
  results.forEach(function (r, i) {
    const total = 2 * score[r.t.charAt(0)] + score[r.t.charAt(1)];
    if (total > bestScore) { bestScore = total; best = i; }
  });
  return results[best];
}

function noteInfo(kind) {
  if (kind === "original") return { badge: t("badgeOriginal"), note: t("noteOriginal") };
  if (kind === "official") return { badge: t("badgeFun"), note: t("noteOfficialNames") };
  return { badge: t("badgeFun"), note: t("noteFun") };
}

function computeFromAnswers(quiz, answers) {
  const r = pickResult(getResults(quiz), answers);
  const an = getAnime(quiz.a);
  const info = noteInfo(quiz.note);
  const title = L(r.n);
  return {
    emoji: r.e, colors: r.c || an.c, badge: info.badge, official: false,
    eyebrow: L(quiz.lead), title: title, subtitle: L(r.s), desc: L(r.d), note: info.note,
    shareLine: L(quiz.title) + " → " + title
  };
}

/* Cumpleaños: si coincide con uno oficial se avisa; si no, se asigna de forma recreativa
   (siempre el mismo personaje para la misma fecha). */
function computeDate(quiz, month, day) {
  const pool = getPool(quiz.pool);
  const matches = pool.filter(function (c) { return c.b && c.b[0] === month && c.b[1] === day; });
  const seed = month * 31 + day;
  const official = matches.length > 0;
  const ch = official ? matches[seed % matches.length] : pool[seed % pool.length];
  const an = ANIME_BY_ID[ch.a];

  let note = official ? t("noteOfficialBday") : t("noteFunBday");
  if (official && matches.length > 1) {
    const others = matches.filter(function (c) { return c !== ch; })
      .map(function (c) { return c.n; }).join(", ");
    note += " " + t("noteAlso") + others + ".";
  }

  return {
    emoji: ch.e, colors: ch.c || an.c,
    badge: official ? t("badgeOfficial") : t("badgeFun"), official: official,
    eyebrow: L(quiz.lead), title: ch.n, subtitle: L(an.n), desc: L(ch.d), note: note,
    shareLine: L(an.n) + ": " + ch.n
  };
}

function computeZodiac(quiz, month, day) {
  const sign = ZODIAC[getZodiacKey(month, day)];
  const ch = CHAR_BY_ID[sign.ch];
  const an = ANIME_BY_ID[ch.a];
  const signName = L(sign.n);

  return {
    emoji: sign.s, colors: sign.c, badge: t("badgeFun"), official: false,
    eyebrow: t("yourSign") + " " + signName + " " + sign.s,
    title: ch.n, subtitle: t("seriesLabel") + " " + L(an.n),
    desc: L(sign.tr) + " " + L(ch.d), note: t("noteZodiac"),
    shareLine: signName + " " + sign.s + " → " + ch.n + " (" + L(an.n) + ")"
  };
}

/* =====================================================
   5. PANTALLAS DE QUIZ
===================================================== */
function quizHeader(quiz) {
  const an = getAnime(quiz.a);
  const frag = document.createDocumentFragment();

  const chip = el("a", "anime-chip", an.e + " " + L(an.n));
  chip.href = "#" + parentHash(quiz);
  setAccent(chip, an.c);
  frag.appendChild(chip);

  frag.appendChild(el("h2", "quiz-title", L(quiz.title)));
  frag.appendChild(el("p", "quiz-desc", quiz.desc ? L(quiz.desc) : t("desc_" + quiz.kind)));
  return frag;
}

/* Quiz de fecha (cumpleaños y signo zodiacal) */
function renderDateQuiz(container, quiz) {
  const state = quizState[quiz.id] || (quizState[quiz.id] = {});
  const compute = quiz.kind === "zodiac" ? computeZodiac : computeDate;

  const panel = el("div", "quiz-panel");
  panel.appendChild(quizHeader(quiz));

  const form = el("div", "date-form");

  const dayOptions = [];
  for (let d = 1; d <= 31; d++) dayOptions.push({ value: d, text: String(d) });
  const monthOptions = MONTHS[currentLang].map(function (name, i) {
    return { value: i + 1, text: name };
  });

  const daySel = buildSelect("sel-day-" + quiz.id, t("day"), dayOptions, state.day);
  const monthSel = buildSelect("sel-month-" + quiz.id, t("month"), monthOptions, state.month);

  const submit = el("button", "btn", "✨ " + t("discover"));
  submit.type = "button";

  form.appendChild(daySel.field);
  form.appendChild(monthSel.field);
  form.appendChild(submit);
  panel.appendChild(form);

  const errorBox = el("p", "form-error");
  errorBox.setAttribute("role", "alert");
  panel.appendChild(errorBox);

  const resultBox = el("div", "result-box");
  panel.appendChild(resultBox);

  function showResult(day, month) {
    const result = compute(quiz, month, day);
    resultBox.replaceChildren(buildResultCard(result, function () {
      state.day = null;
      state.month = null;
      daySel.select.value = "";
      monthSel.select.value = "";
      resultBox.replaceChildren();
      errorBox.textContent = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, function () {
      window.location.hash = parentHash(quiz);
    }));
  }

  submit.addEventListener("click", function () {
    const day = parseInt(daySel.select.value, 10);
    const month = parseInt(monthSel.select.value, 10);

    if (!isValidDate(day, month)) {
      errorBox.textContent = t("invalidDate");
      resultBox.replaceChildren();
      return;
    }

    errorBox.textContent = "";
    state.day = day;
    state.month = month;
    showResult(day, month);
    resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  container.replaceChildren(panel);

  if (isValidDate(state.day, state.month)) showResult(state.day, state.month);
}

/* Quiz de preguntas */
function renderQuestionQuiz(container, quiz) {
  const state = quizState[quiz.id] || (quizState[quiz.id] = {});
  if (!Array.isArray(state.answers)) state.answers = [];

  const questions = BANKS[quiz.bank];
  const total = questions.length;
  const panel = el("div", "quiz-panel");
  panel.appendChild(quizHeader(quiz));

  if (state.answers.length >= total) {
    const box = el("div", "result-box");
    box.appendChild(buildResultCard(computeFromAnswers(quiz, state.answers), function () {
      state.answers = [];
      renderQuestionQuiz(container, quiz);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, function () {
      window.location.hash = parentHash(quiz);
    }));
    panel.appendChild(box);
    container.replaceChildren(panel);
    return;
  }

  const index = state.answers.length;
  const question = questions[index];

  const progress = el("div", "progress");
  const bar = el("div", "progress-bar");
  bar.style.width = Math.round((index / total) * 100) + "%";
  progress.appendChild(bar);
  panel.appendChild(progress);

  panel.appendChild(el("p", "progress-label",
    t("questionOf").replace("{n}", String(index + 1)).replace("{total}", String(total))));
  panel.appendChild(el("h3", "question-text", L(question.q)));

  const options = el("div", "options");
  question.o.forEach(function (option) {
    const btn = el("button", "option-btn", L([option[0], option[1]]));
    btn.type = "button";
    btn.addEventListener("click", function () {
      state.answers.push(option[2]);
      renderQuestionQuiz(container, quiz);
    });
    options.appendChild(btn);
  });
  panel.appendChild(options);

  container.replaceChildren(panel);
}

function renderQuiz(container, quiz) {
  if (quiz.kind === "q") renderQuestionQuiz(container, quiz);
  else renderDateQuiz(container, quiz);
}

/* =====================================================
   6. INICIO: tarjetas, buscador y filtros
===================================================== */
function buildSearchIndex() {
  ANIMES.forEach(function (an) {
    const names = CHARACTERS.filter(function (c) { return c.a === an.id; })
      .map(function (c) { return c.n; }).join(" ");
    an._hay = norm(joinAll(an.n) + " " + joinAll(an.tag) + " " + names);
  });
  QUIZZES.forEach(function (q) {
    const an = getAnime(q.a);
    q._hay = norm(joinAll(q.title) + " " + joinAll(an.n) + " " + (an._hay || ""));
  });
}

function countQuizzes(animeId) {
  return QUIZZES.filter(function (q) { return q.a === animeId; }).length;
}

function animeCard(an) {
  const card = el("button", "anime-card");
  card.type = "button";
  setAccent(card, an.c);
  card.appendChild(el("span", "anime-card-icon", an.e));
  card.appendChild(el("h3", "", L(an.n)));
  card.appendChild(el("p", "", L(an.tag)));
  card.appendChild(el("span", "anime-card-count",
    t("quizCount").replace("{n}", String(countQuizzes(an.id)))));
  card.addEventListener("click", function () { window.location.hash = "anime/" + an.id; });
  return card;
}

function quizCard(quiz) {
  const an = getAnime(quiz.a);
  const card = el("button", "quiz-card");
  card.type = "button";
  setAccent(card, an.c);
  card.appendChild(el("span", "quiz-card-icon", quiz.e));
  card.appendChild(el("h3", "", L(quiz.title)));
  card.appendChild(el("p", "quiz-card-meta", L(an.n) + " · " + t("cat_" + quiz.cat)));
  card.appendChild(el("span", "quiz-card-cta", t("play")));
  card.addEventListener("click", function () { window.location.hash = "quiz/" + quiz.id; });
  return card;
}

function renderChips() {
  const box = $("filter-chips");
  box.replaceChildren();
  ["all"].concat(CATEGORIES).forEach(function (cat) {
    const btn = el("button", "chip", t("cat_" + cat));
    btn.type = "button";
    btn.setAttribute("aria-pressed", filters.cat === cat ? "true" : "false");
    btn.addEventListener("click", function () {
      filters.cat = cat;
      renderChips();
      refreshLists();
    });
    box.appendChild(btn);
  });
}

function renderAnimeGrid() {
  const grid = $("anime-grid");
  grid.replaceChildren();
  const list = ANIMES.filter(function (an) {
    return !filters.q || matchesQuery(an._hay, filters.q);
  });
  list.forEach(function (an) { grid.appendChild(animeCard(an)); });
  return list.length;
}

function renderQuizList() {
  const box = $("quiz-list");
  box.replaceChildren();
  const list = QUIZZES.filter(function (q) {
    const okCat = filters.cat === "all" || q.cat === filters.cat;
    const okText = !filters.q || matchesQuery(q._hay, filters.q);
    return okCat && okText;
  });
  list.forEach(function (q) { box.appendChild(quizCard(q)); });
  $("quiz-count").textContent = t("quizCount").replace("{n}", String(list.length));
  return list.length;
}

function refreshLists() {
  const animeTotal = renderAnimeGrid();
  const quizTotal = renderQuizList();
  $("sec-animes").hidden = animeTotal === 0;
  $("sec-quizzes").hidden = quizTotal === 0;
  $("no-results").hidden = (animeTotal + quizTotal) > 0;
}

function renderHome() {
  $("universal-emojis").textContent = ANIMES.map(function (a) { return a.e; }).join(" ");
  renderChips();
  refreshLists();
}

/* =====================================================
   7. PÁGINA DE UN ANIME / ANIME UNIVERSAL
===================================================== */
function renderListView(id) {
  const isUniversal = id === "universal";
  const an = getAnime(id);
  const box = $("list-container");
  box.replaceChildren();

  const hero = el("div", "anime-hero" + (isUniversal ? " is-universal" : ""));
  setAccent(hero, an.c);
  hero.appendChild(el("span", "anime-hero-icon", an.e));
  hero.appendChild(el("h2", "", L(an.n)));
  hero.appendChild(el("p", "", L(an.tag)));

  const quizzes = QUIZZES.filter(function (q) { return q.a === id; });
  let meta = t("quizCount").replace("{n}", String(quizzes.length));
  if (!isUniversal) {
    const chars = CHARACTERS.filter(function (c) { return c.a === id; }).length;
    meta += " · " + t("charCount").replace("{n}", String(chars));
  }
  hero.appendChild(el("p", "meta", meta));
  if (isUniversal) hero.appendChild(el("p", "intro", t("universalIntro")));
  box.appendChild(hero);

  const grid = el("div", "quiz-list");
  quizzes.forEach(function (q) { grid.appendChild(quizCard(q)); });
  box.appendChild(grid);

  if (isUniversal) {
    const row = el("div", "chip-row");
    row.appendChild(el("p", "section-sub", t("includedAnimes")));
    ANIMES.forEach(function (a) {
      const link = el("a", "anime-chip", a.e + " " + L(a.n));
      link.href = "#anime/" + a.id;
      setAccent(link, a.c);
      row.appendChild(link);
    });
    box.appendChild(row);
  }
}

/* =====================================================
   8. NAVEGACIÓN (usa el # de la dirección)
===================================================== */
function route(opts) {
  const noScroll = Boolean(opts && opts.noScroll);
  let raw = window.location.hash.replace(/^#\/?/, "");

  if (LEGACY_HASHES[raw]) {
    raw = LEGACY_HASHES[raw];
    history.replaceState(null, "", "#" + raw);
  }

  const parts = raw.split("/");
  const home = $("view-home");
  const list = $("view-list");
  const quizView = $("view-quiz");
  home.hidden = true;
  list.hidden = true;
  quizView.hidden = true;
  currentQuiz = null;

  if (parts[0] === "quiz" && QUIZ_BY_ID[parts[1]]) {
    currentQuiz = QUIZ_BY_ID[parts[1]];
    quizView.hidden = false;
    renderQuiz($("quiz-container"), currentQuiz);
    document.title = L(currentQuiz.title) + " | AnimeBirth";
  } else if (parts[0] === "anime" && ANIME_BY_ID[parts[1]]) {
    list.hidden = false;
    renderListView(parts[1]);
    document.title = L(ANIME_BY_ID[parts[1]].n) + " – " + t("quizzesWord") + " | AnimeBirth";
  } else if (parts[0] === "universal") {
    list.hidden = false;
    renderListView("universal");
    document.title = L(UNIVERSAL.n) + " | AnimeBirth";
  } else {
    home.hidden = false;
    renderHome();
    document.title = t("metaTitle");
    if (!noScroll) {
      const target = parts[0] === "animes" ? $("sec-animes")
        : parts[0] === "quizzes" ? $("sec-quizzes") : null;
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo(0, 0);
    }
    return;
  }

  if (!noScroll) window.scrollTo(0, 0);
}

/* =====================================================
   9. IDIOMA
===================================================== */
function applyStaticTexts() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(function (node) {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (node) {
    node.setAttribute("placeholder", t(node.getAttribute("data-i18n-ph")));
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("metaDesc"));

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === currentLang ? "true" : "false");
  });
}

function setLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  currentLang = lang;
  try {
    localStorage.setItem("animebirth-lang", lang); // solo se guarda el idioma
  } catch (err) { /* sin problema */ }
  applyStaticTexts();
  route({ noScroll: true });
}

function detectInitialLanguage() {
  try {
    const saved = localStorage.getItem("animebirth-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (err) { /* ignoramos */ }
  const browserLang = (navigator.language || "es").toLowerCase();
  return browserLang.indexOf("en") === 0 ? "en" : "es";
}

/* =====================================================
   10. ESTRELLAS DE FONDO
===================================================== */
function createStars() {
  const container = $("stars");
  if (!container) return;

  const count = window.innerWidth < 600 ? 45 : 80;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "star";
    const size = Math.random() * 2.2 + 0.8;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    star.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + "s";
    fragment.appendChild(star);
  }
  container.appendChild(fragment);
}

/* =====================================================
   11. ARRANQUE
===================================================== */
document.addEventListener("DOMContentLoaded", function () {
  createStars();
  buildSearchIndex();
  $("year").textContent = String(new Date().getFullYear());

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setLanguage(btn.getAttribute("data-lang")); });
  });

  $("search-input").addEventListener("input", function (event) {
    filters.q = event.target.value;
    refreshLists();
  });

  $("back-btn").addEventListener("click", function () {
    window.location.hash = currentQuiz ? parentHash(currentQuiz) : "";
  });

  $("back-list-btn").addEventListener("click", function () {
    window.location.hash = "";
  });

  $("logo-link").addEventListener("click", function (event) {
    event.preventDefault();
    if (window.location.hash) {
      window.location.hash = "";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  window.addEventListener("hashchange", function () { route(); });

  currentLang = detectInitialLanguage();
  applyStaticTexts();
  route();
});