"use strict";

/* =====================================================
   AnimeBirth - data.js
   AQUÍ VIVE TODO EL CONTENIDO. Para añadir un anime nuevo
   solo tienes que editar este archivo (ver guía al final).

   Formato de textos: ["texto en español", "text in English"]
   Letras de "t" (tipos de personalidad / poder):
     f = fuego / valentía      s = velocidad / libertad
     d = sombra / misterio     m = mente / estrategia
     h = corazón / lealtad     p = dominio / poder / ambición
   Cada resultado lleva 2 letras: principal y secundaria.
===================================================== */

/* ---------- Animes ---------- */
const ANIMES = [
  { id: "naruto", e: "🍥", n: "Naruto", c: ["#f97316", "#7c3aed"], t: "fh",
    tag: ["Ninjas, vínculos y fuerza de voluntad", "Ninjas, bonds and willpower"] },
  { id: "onepiece", e: "🏴‍☠️", n: "One Piece", c: ["#ef4444", "#fbbf24"], t: "fs",
    tag: ["Aventura, libertad y tripulaciones legendarias", "Adventure, freedom and legendary crews"] },
  { id: "bleach", e: "⚔️", n: "Bleach", c: ["#38bdf8", "#6366f1"], t: "dp",
    tag: ["Almas, espadas y combates espirituales", "Souls, swords and spiritual battles"] },
  { id: "jjk", e: "🧿", n: "Jujutsu Kaisen", c: ["#6d28d9", "#22d3ee"], t: "dm",
    tag: ["Energía maldita y combates sobrenaturales", "Cursed energy and supernatural fights"] },
  { id: "hxh", e: "🎣", n: "Hunter x Hunter", c: ["#16a34a", "#a3e635"], t: "ms",
    tag: ["Cazadores, ingenio y desafíos peligrosos", "Hunters, wits and dangerous challenges"] },
  { id: "dragonball", e: "🐉", n: "Dragon Ball", c: ["#f59e0b", "#ef4444"], t: "pf",
    tag: ["Artes marciales, entrenamiento y superación", "Martial arts, training and self-improvement"] },
  { id: "demonslayer", e: "🗡️", n: "Demon Slayer", c: ["#10b981", "#be123c"], t: "hf",
    tag: ["Espadachines, familia y determinación", "Swordsmen, family and resolve"] },
  { id: "aot", e: "🧱", n: "Attack on Titan", c: ["#78716c", "#16a34a"], t: "pd",
    tag: ["Libertad, estrategia y supervivencia", "Freedom, strategy and survival"] },
  { id: "mha", e: "🦸", n: "My Hero Academia", c: ["#22c55e", "#ef4444"], t: "hp",
    tag: ["Héroes, superpoderes y espíritu de superación", "Heroes, superpowers and the drive to improve"] },
  { id: "sololeveling", e: "🌑", n: "Solo Leveling", c: ["#4f46e5", "#06b6d4"], t: "pm",
    tag: ["Cazadores, mazmorras y evolución personal", "Hunters, dungeons and personal growth"] }
];

const UNIVERSAL = {
  id: "universal", e: "🌌", n: ["Anime Universal", "Universal Anime"], c: ["#8b5cf6", "#ec4899"],
  tag: ["Personajes de todos los animes en un solo lugar", "Characters from every anime in one place"]
};

/* ---------- Personajes ----------
   id: único | a: id del anime | n: nombre | e: emoji | t: tipos
   d: descripción neutra [es, en]
   b: [mes, día] = CUMPLEAÑOS OFICIAL (¡verifícalo antes de publicar!). Si no estás seguro, no pongas "b".
   c: colores propios (opcional) | v: 1 = villano
*/
const CHARACTERS = [
  /* ----- Naruto (el orden de los 12 primeros se mantiene igual que en la versión 1) ----- */
  { id: "naruto", a: "naruto", n: "Naruto Uzumaki", e: "🍥", t: "fs", b: [10, 10], c: ["#f97316", "#facc15"],
    d: ["Optimista, terco y de gran corazón. Nunca se rinde y hace amigos en todas partes.", "Optimistic, stubborn and big-hearted. Never gives up and makes friends everywhere."] },
  { id: "sasuke", a: "naruto", n: "Sasuke Uchiha", e: "⚡", t: "pd", b: [7, 23], c: ["#1e3a8a", "#7c3aed"],
    d: ["Intenso, reservado y muy determinado. Persigue sus metas con una disciplina enorme.", "Intense, reserved and very determined. Chases his goals with huge discipline."] },
  { id: "sakura", a: "naruto", n: "Sakura Haruno", e: "🌸", t: "hm", b: [3, 28], c: ["#ec4899", "#fda4af"],
    d: ["Inteligente, valiente y fuerte por dentro. Su esfuerzo la hace crecer sin parar.", "Smart, brave and inwardly strong. Her effort keeps her growing."] },
  { id: "kakashi", a: "naruto", n: "Kakashi Hatake", e: "📖", t: "md", b: [9, 15], c: ["#475569", "#94a3b8"],
    d: ["Calmado, estratega y misterioso. Cuida de los suyos aunque no lo diga.", "Calm, strategic and mysterious. Looks after his people without saying it."] },
  { id: "hinata", a: "naruto", n: "Hinata Hyuga", e: "🌙", t: "hd", b: [12, 27], c: ["#6366f1", "#c4b5fd"],
    d: ["Amable, sensible y más fuerte de lo que parece. Su valentía silenciosa inspira.", "Kind, sensitive and stronger than she looks. Her quiet courage inspires."] },
  { id: "itachi", a: "naruto", n: "Itachi Uchiha", e: "🌑", t: "dm", b: [6, 9], c: ["#7f1d1d", "#1f2937"],
    d: ["Profundo, protector y sacrificado. Piensa mucho y carga con todo en silencio.", "Deep, protective and selfless. Thinks a lot and carries everything quietly."] },
  { id: "gaara", a: "naruto", n: "Gaara", e: "🏜️", t: "dh", b: [1, 19], c: ["#b45309", "#fcd34d"],
    d: ["Ha cambiado mucho y eso lo hace fuerte. Su calma y su liderazgo ganan respeto.", "Has changed a lot, which makes him strong. His calm leadership earns respect."] },
  { id: "lee", a: "naruto", n: "Rock Lee", e: "💪", t: "fp", b: [11, 27], c: ["#16a34a", "#86efac"],
    d: ["Trabaja más duro que nadie. Su energía demuestra que el esfuerzo vence al talento.", "Works harder than anyone. His energy proves effort beats talent."] },
  { id: "shikamaru", a: "naruto", n: "Shikamaru Nara", e: "☁️", t: "ms", b: [9, 22], c: ["#0f766e", "#5eead4"],
    d: ["Genio perezoso de mente brillante. Siempre tiene un plan, aunque lo disimule.", "Lazy genius with a brilliant mind. Always has a plan, even if he hides it."] },
  { id: "neji", a: "naruto", n: "Neji Hyuga", e: "👁️", t: "mp", b: [7, 3], c: ["#a5b4fc", "#4f46e5"],
    d: ["Disciplinado, observador y orgulloso. Cree en el destino, pero lo cambia con esfuerzo.", "Disciplined, observant and proud. Believes in fate, but changes it through effort."] },
  { id: "tsunade", a: "naruto", n: "Tsunade", e: "💚", t: "ph", c: ["#15803d", "#fde047"],
    d: ["Fuerte, decidida y de corazón sanador. Lidera con carácter y protege a los suyos.", "Strong, determined and a healer at heart. Leads with character and protects her own."] },
  { id: "jiraiya", a: "naruto", n: "Jiraiya", e: "🐸", t: "sm", c: ["#b91c1c", "#f9fafb"],
    d: ["Aventurero, divertido y gran maestro. Viaja por la vida con curiosidad y humor.", "Adventurous, funny and a great teacher. Travels through life with curiosity and humor."] },
  { id: "madara", a: "naruto", n: "Madara Uchiha", e: "🔥", t: "pd", v: 1,
    d: ["Ambicioso, poderoso y obsesionado con sus ideales. Un rival temible.", "Ambitious, powerful and obsessed with his ideals. A formidable rival."] },

  /* ----- One Piece ----- */
  { id: "luffy", a: "onepiece", n: "Monkey D. Luffy", e: "👒", t: "fs", b: [5, 5],
    d: ["Libre, optimista y con un sueño enorme. Contagia ganas de aventura.", "Free-spirited and optimistic with a huge dream. Spreads a love of adventure."] },
  { id: "zoro", a: "onepiece", n: "Roronoa Zoro", e: "⚔️", t: "pd", b: [11, 11],
    d: ["Leal, firme y obsesionado con mejorar. No se rinde ante nada.", "Loyal, steady and obsessed with improving. Never backs down."] },
  { id: "nami", a: "onepiece", n: "Nami", e: "🧭", t: "ms", b: [7, 3],
    d: ["Astuta, valiente y gran navegante. Sabe leer el mundo y a las personas.", "Clever, brave and a great navigator. Reads both the world and people well."] },
  { id: "sanji", a: "onepiece", n: "Sanji", e: "🍳", t: "hf", b: [3, 2],
    d: ["Amable, apasionado y protector. Cocina con el corazón y lucha con estilo.", "Kind, passionate and protective. Cooks with heart and fights with style."] },
  { id: "robin", a: "onepiece", n: "Nico Robin", e: "📚", t: "md",
    d: ["Serena, curiosa y de mente brillante. Le fascina descubrir la verdad.", "Serene, curious and brilliant. Fascinated by uncovering the truth."] },
  { id: "chopper", a: "onepiece", n: "Tony Tony Chopper", e: "🩺", t: "hm",
    d: ["Tierno, estudioso y muy leal. Quiere curar a todos los que pueda.", "Tender, studious and very loyal. Wants to heal everyone he can."] },
  { id: "law", a: "onepiece", n: "Trafalgar Law", e: "🌀", t: "dm",
    d: ["Calculador, reservado y estratega. Juega con varios pasos de ventaja.", "Calculating, reserved and strategic. Plays several steps ahead."] },
  { id: "kaido", a: "onepiece", n: "Kaido", e: "🐲", t: "pf", v: 1,
    d: ["Poderoso, imponente y temerario. Vive buscando la lucha definitiva.", "Powerful, imposing and reckless. Lives seeking the ultimate fight."] },

  /* ----- Bleach ----- */
  { id: "ichigo", a: "bleach", n: "Ichigo Kurosaki", e: "🗡️", t: "fp", b: [7, 15],
    d: ["Impulsivo, protector y de enorme determinación. Lucha por quienes quiere.", "Impulsive, protective and highly determined. Fights for those he cares about."] },
  { id: "rukia", a: "bleach", n: "Rukia Kuchiki", e: "❄️", t: "mh", b: [1, 14],
    d: ["Disciplinada, leal y de gran corazón. Aprende y crece junto a sus amigos.", "Disciplined, loyal and warm-hearted. Learns and grows alongside her friends."] },
  { id: "orihime", a: "bleach", n: "Orihime Inoue", e: "🌼", t: "hs", b: [9, 3],
    d: ["Amable, soñadora y muy valiente. Su ternura es su mayor fuerza.", "Kind, dreamy and very brave. Her gentleness is her greatest strength."] },
  { id: "byakuya", a: "bleach", n: "Byakuya Kuchiki", e: "🎐", t: "mp",
    d: ["Elegante, orgulloso y de férrea disciplina. Valora el honor sobre todo.", "Elegant, proud and strictly disciplined. Values honor above all."] },
  { id: "toshiro", a: "bleach", n: "Toshiro Hitsugaya", e: "🧊", t: "ms",
    d: ["Serio, brillante y muy responsable. Talento precoz y gran control.", "Serious, brilliant and responsible. Early talent and great control."] },
  { id: "kenpachi", a: "bleach", n: "Kenpachi Zaraki", e: "🪓", t: "pf",
    d: ["Feroz, alegre ante el combate y muy resistente. Vive para la lucha.", "Fierce, thrilled by combat and very tough. Lives for the fight."] },
  { id: "aizen", a: "bleach", n: "Sosuke Aizen", e: "🦋", t: "md", v: 1,
    d: ["Astuto, calculador y manipulador. Siempre parece ir un paso por delante.", "Cunning, calculating and manipulative. Always seems one step ahead."] },

  /* ----- Jujutsu Kaisen ----- */
  { id: "itadori", a: "jjk", n: "Yuji Itadori", e: "👊", t: "fh", b: [3, 20],
    d: ["Alegre, noble y con una fuerza física enorme. No deja a nadie atrás.", "Cheerful, noble and physically powerful. Leaves no one behind."] },
  { id: "megumi", a: "jjk", n: "Megumi Fushiguro", e: "🐺", t: "dm", b: [12, 22],
    d: ["Reservado, estratégico y muy responsable. Protege a quienes considera valiosos.", "Reserved, strategic and responsible. Protects those he considers valuable."] },
  { id: "nobara", a: "jjk", n: "Nobara Kugisaki", e: "🔨", t: "fs",
    d: ["Decidida, orgullosa y de carácter fuerte. Siempre es fiel a sí misma.", "Determined, proud and strong-willed. Always true to herself."] },
  { id: "gojo", a: "jjk", n: "Satoru Gojo", e: "🕶️", t: "pm", b: [12, 7],
    d: ["Carismático, seguro de sí mismo y poderoso. Juega con ventaja… y con estilo.", "Charismatic, confident and powerful. Plays with the odds in his favor, with style."] },
  { id: "nanami", a: "jjk", n: "Kento Nanami", e: "💼", t: "mh",
    d: ["Serio, ordenado y muy profesional. Su calma esconde un gran corazón.", "Serious, orderly and professional. His calm hides a big heart."] },
  { id: "sukuna", a: "jjk", n: "Ryomen Sukuna", e: "👹", t: "fd", v: 1,
    d: ["Arrogante, temible y despiadado. Un rival de poder enorme.", "Arrogant, fearsome and ruthless. A rival of immense power."] },

  /* ----- Hunter x Hunter ----- */
  { id: "gon", a: "hxh", n: "Gon Freecss", e: "🎣", t: "fs", b: [5, 5],
    d: ["Curioso, directo y muy enérgico. Su determinación es contagiosa.", "Curious, straightforward and energetic. His determination is contagious."] },
  { id: "killua", a: "hxh", n: "Killua Zoldyck", e: "⚡", t: "sd", b: [7, 7],
    d: ["Ágil, astuto y leal con sus amigos. Tras su frialdad hay mucho cariño.", "Agile, cunning and loyal to friends. Behind his cool front lies a lot of warmth."] },
  { id: "kurapika", a: "hxh", n: "Kurapika", e: "⛓️", t: "md", b: [4, 4],
    d: ["Inteligente, disciplinado y de voluntad inquebrantable. Piensa antes de actuar.", "Intelligent, disciplined and unbreakably determined. Thinks before acting."] },
  { id: "leorio", a: "hxh", n: "Leorio Paradinight", e: "💼", t: "hf",
    d: ["Sincero, generoso y de gran corazón. Se esfuerza por ayudar a los demás.", "Honest, generous and big-hearted. Works hard to help others."] },
  { id: "hisoka", a: "hxh", n: "Hisoka Morow", e: "🃏", t: "dp",
    d: ["Impredecible, juguetón y enigmático. Disfruta de los desafíos intensos.", "Unpredictable, playful and enigmatic. Enjoys intense challenges."] },
  { id: "meruem", a: "hxh", n: "Meruem", e: "👑", t: "mh", v: 1,
    d: ["Brillante, orgulloso y en constante evolución. Una mente fuera de lo común.", "Brilliant, proud and constantly evolving. An extraordinary mind."] },

  /* ----- Dragon Ball ----- */
  { id: "goku", a: "dragonball", n: "Son Goku", e: "🐉", t: "fp",
    d: ["Alegre, humilde y siempre buscando superarse. Vive para entrenar y luchar.", "Cheerful, humble and always striving to improve. Lives to train and fight."] },
  { id: "vegeta", a: "dragonball", n: "Vegeta", e: "👑", t: "pf",
    d: ["Orgulloso, competitivo y muy trabajador. Su rivalidad lo hace crecer.", "Proud, competitive and hard-working. Rivalry makes him grow."] },
  { id: "gohan", a: "dragonball", n: "Son Gohan", e: "📘", t: "hm",
    d: ["Amable, estudioso y con enorme potencial. Es fuerte cuando protege a los suyos.", "Kind, studious and full of potential. Strong when protecting his own."] },
  { id: "piccolo", a: "dragonball", n: "Piccolo", e: "🟢", t: "mh",
    d: ["Serio, protector y buen mentor. Con los años muestra su lado más cálido.", "Serious, protective and a good mentor. Over time shows a warmer side."] },
  { id: "trunks", a: "dragonball", n: "Trunks", e: "🗡️", t: "sm",
    d: ["Decidido, ágil y responsable. Carga con la esperanza de su futuro.", "Determined, agile and responsible. Carries the hope of his future."] },
  { id: "krillin", a: "dragonball", n: "Krillin", e: "🥋", t: "hs",
    d: ["Leal, valiente y buen amigo. Su corazón compensa cualquier diferencia de poder.", "Loyal, brave and a good friend. His heart outweighs any power gap."] },
  { id: "frieza", a: "dragonball", n: "Freezer (Frieza)", e: "💜", t: "ps", v: 1,
    d: ["Orgulloso, cruel y sumamente poderoso. Un tirano con aires de grandeza.", "Proud, cruel and immensely powerful. A tyrant with delusions of grandeur."] },

  /* ----- Demon Slayer ----- */
  { id: "tanjiro", a: "demonslayer", n: "Tanjiro Kamado", e: "🌊", t: "hf", b: [7, 14],
    d: ["Amable, perseverante y muy empático. Protege a su familia con todo su corazón.", "Kind, persistent and very empathetic. Protects his family with all his heart."] },
  { id: "nezuko", a: "demonslayer", n: "Nezuko Kamado", e: "🎋", t: "hp", b: [12, 28],
    d: ["Protectora, fuerte y muy valiente. Su cariño es su mayor poder.", "Protective, strong and very brave. Her affection is her greatest power."] },
  { id: "zenitsu", a: "demonslayer", n: "Zenitsu Agatsuma", e: "⚡", t: "sh", b: [9, 3],
    d: ["Miedoso pero de gran corazón. Cuando importa, da lo mejor de sí.", "Fearful but big-hearted. When it matters, gives his best."] },
  { id: "inosuke", a: "demonslayer", n: "Inosuke Hashibira", e: "🐗", t: "fs",
    d: ["Impulsivo, enérgico y muy competitivo. Va siempre de frente.", "Impulsive, energetic and competitive. Always charges ahead."] },
  { id: "rengoku", a: "demonslayer", n: "Kyojuro Rengoku", e: "🔥", t: "fp",
    d: ["Cálido, valiente y lleno de pasión. Inspira a quienes tiene cerca.", "Warm, brave and passionate. Inspires those around him."] },
  { id: "giyu", a: "demonslayer", n: "Giyu Tomioka", e: "💧", t: "dm",
    d: ["Serio, reservado y muy leal. Habla poco, pero actúa con firmeza.", "Serious, reserved and loyal. Speaks little but acts firmly."] },
  { id: "muzan", a: "demonslayer", n: "Muzan Kibutsuji", e: "🩸", t: "dp", v: 1,
    d: ["Frío, calculador y obsesionado con su propio poder. Un enemigo temible.", "Cold, calculating and obsessed with his own power. A fearsome enemy."] },

  /* ----- Attack on Titan ----- */
  { id: "eren", a: "aot", n: "Eren Yeager", e: "🔥", t: "fp", b: [3, 30],
    d: ["Apasionado, testarudo y de voluntad férrea. Lucha por su libertad.", "Passionate, headstrong and iron-willed. Fights for his freedom."] },
  { id: "mikasa", a: "aot", n: "Mikasa Ackerman", e: "🧣", t: "sh", b: [2, 10],
    d: ["Leal, ágil y muy protectora. Su fuerza nace de su cariño.", "Loyal, agile and protective. Her strength comes from affection."] },
  { id: "armin", a: "aot", n: "Armin Arlert", e: "📚", t: "mh",
    d: ["Estratega, sensible y muy inteligente. Su mente es su mayor arma.", "Strategic, sensitive and very smart. His mind is his greatest weapon."] },
  { id: "levi", a: "aot", n: "Levi Ackerman", e: "🧹", t: "sp", b: [12, 25],
    d: ["Disciplinado, eficaz y reservado. Cumple su deber con precisión.", "Disciplined, effective and reserved. Does his duty with precision."] },
  { id: "erwin", a: "aot", n: "Erwin Smith", e: "🕊️", t: "mp",
    d: ["Líder visionario, estratega y de gran determinación. Inspira a seguirlo.", "Visionary leader, strategist and highly determined. Inspires others to follow."] },
  { id: "hange", a: "aot", n: "Hange Zoë", e: "🔬", t: "mf",
    d: ["Curiosa, entusiasta y brillante. Afronta lo desconocido con pasión.", "Curious, enthusiastic and brilliant. Faces the unknown with passion."] },

  /* ----- My Hero Academia ----- */
  { id: "deku", a: "mha", n: "Izuku Midoriya (Deku)", e: "💚", t: "hf", b: [7, 15],
    d: ["Esforzado, empático y con enormes ganas de ayudar. Nunca se rinde.", "Hard-working, empathetic and eager to help. Never gives up."] },
  { id: "bakugo", a: "mha", n: "Katsuki Bakugo", e: "💥", t: "fp", b: [4, 20],
    d: ["Competitivo, explosivo y muy ambicioso. Siempre quiere ser el mejor.", "Competitive, explosive and ambitious. Always wants to be the best."] },
  { id: "todoroki", a: "mha", n: "Shoto Todoroki", e: "❄️", t: "mp", b: [1, 11],
    d: ["Reservado, talentoso y en busca de su propio camino. Poco a poco abre su corazón.", "Reserved, talented and finding his own path. Gradually opens his heart."] },
  { id: "uraraka", a: "mha", n: "Ochaco Uraraka", e: "☁️", t: "hs",
    d: ["Alegre, trabajadora y muy solidaria. Su determinación inspira.", "Cheerful, hard-working and supportive. Her determination inspires."] },
  { id: "allmight", a: "mha", n: "All Might", e: "🦸", t: "ph",
    d: ["Heroico, optimista y símbolo de esperanza. Sonríe ante el peligro.", "Heroic, optimistic and a symbol of hope. Smiles in the face of danger."] },
  { id: "aizawa", a: "mha", n: "Shota Aizawa", e: "😴", t: "dm",
    d: ["Práctico, observador y muy dedicado. Cuida de sus alumnos sin hacer ruido.", "Practical, observant and dedicated. Looks after his students quietly."] },
  { id: "afo", a: "mha", n: "All For One", e: "🕳️", t: "mp", v: 1,
    d: ["Calculador, ambicioso y manipulador. Un villano con una larga sombra.", "Calculating, ambitious and manipulative. A villain who casts a long shadow."] },

  /* ----- Solo Leveling ----- */
  { id: "jinwoo", a: "sololeveling", n: "Sung Jinwoo", e: "🌑", t: "dp",
    d: ["Determinado, reservado y en constante evolución. Se supera cada día.", "Determined, reserved and constantly evolving. Surpasses himself every day."] },
  { id: "haein", a: "sololeveling", n: "Cha Hae-In", e: "🗡️", t: "sf",
    d: ["Ágil, valiente y con gran sentido de la justicia. Combate con elegancia.", "Agile, brave and with a strong sense of justice. Fights with elegance."] },
  { id: "gunhee", a: "sololeveling", n: "Go Gun-Hee", e: "🎖️", t: "mh",
    d: ["Líder sereno, sabio y muy respetado. Piensa en el bien de todos.", "Calm, wise and respected leader. Thinks of everyone's well-being."] },
  { id: "yoonho", a: "sololeveling", n: "Baek Yoonho", e: "🐯", t: "pf",
    d: ["Fuerte, directo y muy leal. Pelea con ferocidad por sus compañeros.", "Strong, straightforward and loyal. Fights fiercely for his teammates."] },
  { id: "andre", a: "sololeveling", n: "Thomas Andre", e: "🦍", t: "ph",
    d: ["Imponente, seguro de sí mismo y muy poderoso. Su fuerza impone respeto.", "Imposing, confident and very powerful. His strength commands respect."] },
  { id: "beru", a: "sololeveling", n: "Beru", e: "🐜", t: "ds",
    d: ["Leal, feroz y siempre fiel a su líder. Un guerrero implacable.", "Loyal, fierce and always faithful to his leader. A relentless warrior."] }
];

/* ---------- Signos zodiacales (quiz "Universal: signo") ---------- */
const ZODIAC = {
  aries:       { s: "♈", c: ["#ef4444", "#f97316"], n: ["Aries", "Aries"], ch: "bakugo",
                 tr: ["Pasional, impulsivo y valiente.", "Passionate, impulsive and brave."] },
  taurus:      { s: "♉", c: ["#16a34a", "#65a30d"], n: ["Tauro", "Taurus"], ch: "zoro",
                 tr: ["Leal, firme y trabajador.", "Loyal, steady and hard-working."] },
  gemini:      { s: "♊", c: ["#eab308", "#a855f7"], n: ["Géminis", "Gemini"], ch: "killua",
                 tr: ["Ingenioso, versátil y con mil facetas.", "Clever, versatile and many-sided."] },
  cancer:      { s: "♋", c: ["#0ea5e9", "#e2e8f0"], n: ["Cáncer", "Cancer"], ch: "tanjiro",
                 tr: ["Cariñoso, empático y protector.", "Caring, empathetic and protective."] },
  leo:         { s: "♌", c: ["#f59e0b", "#ef4444"], n: ["Leo", "Leo"], ch: "luffy",
                 tr: ["Carismático, libre y soñador.", "Charismatic, free-spirited and a dreamer."] },
  virgo:       { s: "♍", c: ["#14b8a6", "#84cc16"], n: ["Virgo", "Virgo"], ch: "armin",
                 tr: ["Analítico, curioso y perfeccionista.", "Analytical, curious and a perfectionist."] },
  libra:       { s: "♎", c: ["#f472b6", "#fbbf24"], n: ["Libra", "Libra"], ch: "rukia",
                 tr: ["Justo, equilibrado y con gran sentido del deber.", "Fair, balanced and dutiful."] },
  scorpio:     { s: "♏", c: ["#7f1d1d", "#6d28d9"], n: ["Escorpio", "Scorpio"], ch: "itachi",
                 tr: ["Intenso, misterioso y leal.", "Intense, mysterious and loyal."] },
  sagittarius: { s: "♐", c: ["#f97316", "#38bdf8"], n: ["Sagitario", "Sagittarius"], ch: "goku",
                 tr: ["Aventurero, optimista y siempre en busca de superarte.", "Adventurous, optimistic and always looking to improve."] },
  capricorn:   { s: "♑", c: ["#334155", "#64748b"], n: ["Capricornio", "Capricorn"], ch: "levi",
                 tr: ["Disciplinado, serio y eficaz.", "Disciplined, serious and effective."] },
  aquarius:    { s: "♒", c: ["#06b6d4", "#8b5cf6"], n: ["Acuario", "Aquarius"], ch: "gojo",
                 tr: ["Original, libre y adelantado a tu tiempo.", "Original, free and ahead of your time."] },
  pisces:      { s: "♓", c: ["#6366f1", "#2dd4bf"], n: ["Piscis", "Pisces"], ch: "orihime",
                 tr: ["Soñador, sensible y creativo.", "Dreamy, sensitive and creative."] }
};

/* Inicio de cada signo: [mes, día, signo] */
const ZODIAC_CUTS = [
  [1, 20, "aquarius"], [2, 19, "pisces"], [3, 21, "aries"], [4, 20, "taurus"],
  [5, 21, "gemini"], [6, 21, "cancer"], [7, 23, "leo"], [8, 23, "virgo"],
  [9, 23, "libra"], [10, 23, "scorpio"], [11, 22, "sagittarius"], [12, 22, "capricorn"]
];

/* ---------- Bancos de preguntas (compartidos por muchos quizzes) ----------
   Cada opción: [español, inglés, letra de tipo]
   P = personalidad (personajes, grupos, villanos...)   A = habilidades (poderes, técnicas...) */
const BANKS = {
  P: [
    { q: ["¿Cómo reaccionas ante un reto difícil?", "How do you react to a tough challenge?"],
      o: [["Me lanzo sin dudar", "I dive in without hesitation", "f"],
          ["Busco el camino más rápido", "I look for the fastest way", "s"],
          ["Analizo todo antes de actuar", "I analyze everything before acting", "m"],
          ["Me apoyo en mis amigos", "I lean on my friends", "h"]] },
    { q: ["¿Qué valoras más?", "What do you value most?"],
      o: [["La libertad", "Freedom", "s"],
          ["La lealtad", "Loyalty", "h"],
          ["La fuerza", "Strength", "p"],
          ["El conocimiento", "Knowledge", "m"]] },
    { q: ["¿Cuál es tu ambiente ideal?", "What is your ideal setting?"],
      o: [["Un escenario épico lleno de acción", "An epic, action-packed scene", "f"],
          ["Una noche tranquila y silenciosa", "A calm, quiet night", "d"],
          ["Un lugar con gente querida", "A place with people I love", "h"],
          ["Una biblioteca o un laboratorio", "A library or a lab", "m"]] },
    { q: ["¿Qué palabra te define mejor?", "Which word describes you best?"],
      o: [["Intensidad", "Intensity", "f"],
          ["Misterio", "Mystery", "d"],
          ["Ambición", "Ambition", "p"],
          ["Rapidez", "Speed", "s"]] },
    { q: ["¿Cómo quieres que te recuerden?", "How do you want to be remembered?"],
      o: [["Como alguien invencible", "As someone unbeatable", "p"],
          ["Como alguien impredecible", "As someone unpredictable", "s"],
          ["Como alguien que cuidó de todos", "As someone who cared for everyone", "h"],
          ["Como alguien enigmático", "As someone enigmatic", "d"]] }
  ],
  A: [
    { q: ["¿Qué momento del día te inspira más?", "Which time of day inspires you most?"],
      o: [["El amanecer", "Sunrise", "f"],
          ["Un día de tormenta", "A stormy day", "s"],
          ["La noche profunda", "Deep night", "d"],
          ["El silencio de una biblioteca", "The silence of a library", "m"]] },
    { q: ["¿Cuál es tu mayor virtud?", "What is your greatest virtue?"],
      o: [["Mi valentía", "My courage", "f"],
          ["Mi rapidez", "My speed", "s"],
          ["Mi misterio", "My mystery", "d"],
          ["Mi paciencia", "My patience", "p"]] },
    { q: ["En un equipo, ¿qué papel tienes?", "In a team, what is your role?"],
      o: [["Líder apasionado", "Passionate leader", "f"],
          ["Estratega", "Strategist", "m"],
          ["El que cuida a todos", "The one who looks after everyone", "h"],
          ["El que llega justo a tiempo", "The one who arrives just in time", "p"]] },
    { q: ["¿Cuál sería tu lugar ideal?", "What would be your ideal place?"],
      o: [["Cerca de un volcán", "Near a volcano", "f"],
          ["La cima de una montaña con rayos", "A mountaintop with lightning", "s"],
          ["Un bosque de noche", "A forest at night", "d"],
          ["Un jardín tranquilo", "A peaceful garden", "h"]] },
    { q: ["¿Qué frase te define mejor?", "Which phrase describes you best?"],
      o: [["Más rápido que nadie", "Faster than anyone", "s"],
          ["Veo lo que otros no ven", "I see what others don't", "m"],
          ["Cada final es un nuevo comienzo", "Every ending is a new beginning", "p"],
          ["Cuidar a los demás me hace fuerte", "Caring for others makes me strong", "h"]] }
  ]
};

/* ---------- Categorías (filtros) ---------- */
const CATEGORIES = ["character", "power", "group", "birthday", "zodiac", "special"];

/* ---------- Frases de introducción de resultados ---------- */
const LD = {
  char: ["Tu personaje es", "Your character is"],
  warrior: ["Tu guerrero es", "Your warrior is"],
  clan: ["Tu clan sería", "Your clan would be"],
  nature: ["Tu naturaleza de chakra sería", "Your chakra nature would be"],
  fruit: ["Tu fruta del diablo sería", "Your Devil Fruit would be"],
  crew: ["Tu tripulación sería", "Your crew would be"],
  zan: ["Tu Zanpakuto sería", "Your Zanpakuto would be"],
  bankai: ["Tu Bankai sería", "Your Bankai would be"],
  tech: ["Tu técnica maldita sería", "Your cursed technique would be"],
  weapon: ["Tu arma sería", "Your weapon would be"],
  nen: ["Tu tipo de Nen sería", "Your Nen type would be"],
  form: ["Tu transformación sería", "Your transformation would be"],
  breath: ["Tu estilo sería", "Your style would be"],
  unit: ["Tu regimiento sería", "Your regiment would be"],
  quirk: ["Tu Quirk sería", "Your Quirk would be"],
  rank: ["Tu rango sería", "Your rank would be"],
  partner: ["Tu pareja ideal sería", "Your ideal partner would be"],
  power: ["Tu poder sería", "Your power would be"],
  villain: ["Tu villano sería", "Your villain would be"],
  universe: ["Tu universo sería", "Your universe would be"]
};

/* ---------- QUIZZES ----------
   id: único | a: id del anime o "universal" | cat: categoría | e: emoji
   kind: "q" (preguntas) | "date" (cumpleaños) | "zodiac" (signo)
   bank: "P" o "A"      pool: de dónde salen los resultados
        ("naruto", "all" = todos los héroes, "villain", "universe") o bien
   res: lista de resultados propios [{e, n, s, d, t}]
   note: "fun" (recreativo) | "official" (nombres oficiales) | "original" (creación original) */
const QUIZZES = [
  /* ===== NARUTO ===== */
  { id: "naruto-character", a: "naruto", cat: "character", e: "🍥", kind: "q", bank: "P", pool: "naruto", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Naruto eres?", "Which Naruto character are you?"] },
  { id: "naruto-clan", a: "naruto", cat: "group", e: "🌀", kind: "q", bank: "P", lead: LD.clan, note: "fun",
    title: ["¿Qué clan de Naruto te representa?", "Which Naruto clan represents you?"],
    res: [
      { e: "🔥", n: ["Clan Uchiha", "Uchiha Clan"], t: "pd", d: ["Intensidad, orgullo y una voluntad enorme. Destacas cuando algo te importa de verdad.", "Intensity, pride and huge willpower. You shine when something truly matters to you."] },
      { e: "👁️", n: ["Clan Hyuga", "Hyuga Clan"], t: "md", d: ["Disciplina, observación y precisión. Ves detalles que otros pasan por alto.", "Discipline, observation and precision. You notice details others miss."] },
      { e: "🌀", n: ["Clan Uzumaki", "Uzumaki Clan"], t: "hf", d: ["Vitalidad, vínculos fuertes y resistencia. Tu energía es contagiosa.", "Vitality, strong bonds and resilience. Your energy is contagious."] },
      { e: "🦌", n: ["Clan Nara", "Nara Clan"], t: "ms", d: ["Mente estratégica y calma bajo presión. Piensas varios pasos por delante.", "A strategic mind, calm under pressure. You think several steps ahead."] },
      { e: "🍖", n: ["Clan Akimichi", "Akimichi Clan"], t: "hp", d: ["Gran corazón, lealtad y fuerza para proteger a tus amigos.", "Big heart, loyalty and strength to protect your friends."] },
      { e: "🐕", n: ["Clan Inuzuka", "Inuzuka Clan"], t: "fs", d: ["Instinto, energía y una conexión especial con tus compañeros.", "Instinct, energy and a special bond with your companions."] }
    ] },
  { id: "naruto-power", a: "naruto", cat: "power", e: "🌪️", kind: "q", bank: "A", lead: LD.nature, note: "official",
    title: ["¿Qué poder tendrías en Naruto?", "Which power would you have in Naruto?"],
    res: [
      { e: "🔥", n: ["Naturaleza Fuego", "Fire Nature"], t: "fp", d: ["Pasión e intensidad. Tu energía enciende a quienes te rodean.", "Passion and intensity. Your energy lights up those around you."] },
      { e: "🌪️", n: ["Naturaleza Viento", "Wind Nature"], t: "sm", d: ["Ligereza y precisión. Vas al grano y te adaptas a todo.", "Lightness and precision. You get to the point and adapt to anything."] },
      { e: "⚡", n: ["Naturaleza Rayo", "Lightning Nature"], t: "sf", d: ["Velocidad y reflejos. Reaccionas antes de que otros lo noten.", "Speed and reflexes. You react before others notice."] },
      { e: "🪨", n: ["Naturaleza Tierra", "Earth Nature"], t: "hp", d: ["Firmeza y resistencia. Eres la roca en la que otros se apoyan.", "Firmness and resilience. You're the rock others lean on."] },
      { e: "🌊", n: ["Naturaleza Agua", "Water Nature"], t: "mh", d: ["Adaptabilidad y calma. Fluyes y siempre encuentras una salida.", "Adaptability and calm. You flow and always find a way out."] }
    ] },
  { id: "naruto-birthday", a: "naruto", cat: "birthday", e: "🎂", kind: "date", pool: "naruto", lead: LD.char,
    title: ["¿Qué personaje de Naruto coincide con tu cumpleaños?", "Which Naruto character matches your birthday?"] },

  /* ===== ONE PIECE ===== */
  { id: "onepiece-fruit", a: "onepiece", cat: "power", e: "🍎", kind: "q", bank: "A", lead: LD.fruit, note: "official",
    title: ["¿Qué fruta del diablo tendrías?", "Which Devil Fruit would you have?"],
    res: [
      { e: "🔥", n: "Mera Mera no Mi", s: ["Tipo Logia", "Logia type"], t: "fp", d: ["Fuego puro: valiente, intenso y muy carismático.", "Pure fire: brave, intense and charismatic."] },
      { e: "❄️", n: "Hie Hie no Mi", s: ["Tipo Logia", "Logia type"], t: "dp", d: ["Hielo y calma: frialdad bajo presión y dominio del terreno.", "Ice and calm: cool under pressure with control of the field."] },
      { e: "🌍", n: "Gura Gura no Mi", s: ["Tipo Paramecia", "Paramecia type"], t: "ph", d: ["Poder devastador: fuerza capaz de sacudir el mundo.", "Devastating power: strength that can shake the world."] },
      { e: "⚡", n: "Goro Goro no Mi", s: ["Tipo Logia", "Logia type"], t: "sf", d: ["Rayo y velocidad: rápido, brillante y difícil de alcanzar.", "Lightning and speed: fast, brilliant and hard to catch."] },
      { e: "🌸", n: "Hana Hana no Mi", s: ["Tipo Paramecia", "Paramecia type"], t: "mh", d: ["Ingenio y versatilidad: ves y actúas desde cualquier ángulo.", "Wit and versatility: you see and act from any angle."] },
      { e: "🌀", n: "Ope Ope no Mi", s: ["Tipo Paramecia", "Paramecia type"], t: "md", d: ["Estrategia y precisión: control total del plan y del espacio.", "Strategy and precision: total control of the plan and the space."] }
    ] },
  { id: "onepiece-crew", a: "onepiece", cat: "group", e: "🏴‍☠️", kind: "q", bank: "P", lead: LD.crew, note: "fun",
    title: ["¿A qué tripulación pertenecerías?", "Which crew would you belong to?"],
    res: [
      { e: "👒", n: ["Piratas de Sombrero de Paja", "Straw Hat Pirates"], t: "fs", d: ["Aventura, amistad y sueños enormes. Eres el alma de cualquier grupo.", "Adventure, friendship and huge dreams. You're the soul of any group."] },
      { e: "🛡️", n: ["Piratas de Barbablanca", "Whitebeard Pirates"], t: "hp", d: ["Una gran familia: lealtad, fuerza y protección mutua.", "A big family: loyalty, strength and mutual protection."] },
      { e: "💛", n: ["Piratas Heart", "Heart Pirates"], t: "md", d: ["Estrategia, precisión y confianza total en tu equipo.", "Strategy, precision and total trust in your team."] },
      { e: "🍷", n: ["Piratas del Pelirrojo", "Red-Haired Pirates"], t: "ps", d: ["Libertad, carisma y calma ante cualquier tormenta.", "Freedom, charisma and calm in any storm."] },
      { e: "⚓", n: ["La Marina", "The Marines"], t: "mh", d: ["Disciplina y sentido de la justicia. Cumples tu deber con convicción.", "Discipline and a sense of justice. You do your duty with conviction."] },
      { e: "🚩", n: ["Ejército Revolucionario", "Revolutionary Army"], t: "sh", d: ["Ideales, valentía y ganas de cambiar el mundo.", "Ideals, courage and the will to change the world."] }
    ] },
  { id: "onepiece-character", a: "onepiece", cat: "character", e: "👒", kind: "q", bank: "P", pool: "onepiece", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de One Piece eres?", "Which One Piece character are you?"] },

  /* ===== BLEACH ===== */
  { id: "bleach-zanpakuto", a: "bleach", cat: "power", e: "🗡️", kind: "q", bank: "A", lead: LD.zan, note: "original",
    title: ["¿Qué Zanpakuto tendrías?", "Which Zanpakuto would you have?"],
    res: [
      { e: "🔥", n: ["Llama Carmesí", "Crimson Flame"], s: ["Zanpakuto original", "Original Zanpakuto"], t: "fp", d: ["Un espíritu ardiente que responde a tu valentía. Ataca con pasión y no se apaga.", "A blazing spirit that answers your courage. Strikes with passion and never fades."] },
      { e: "❄️", n: ["Escarcha Lunar", "Moon Frost"], s: ["Zanpakuto original", "Original Zanpakuto"], t: "md", d: ["Un espíritu sereno y preciso. Congela el caos y te da claridad mental.", "A calm, precise spirit. Freezes chaos and gives you mental clarity."] },
      { e: "🌪️", n: ["Tormenta Plateada", "Silver Storm"], s: ["Zanpakuto original", "Original Zanpakuto"], t: "sf", d: ["Velocidad y libertad: corta el aire como el viento.", "Speed and freedom: cuts the air like the wind."] },
      { e: "🌑", n: ["Sombra Eterna", "Eternal Shadow"], s: ["Zanpakuto original", "Original Zanpakuto"], t: "dp", d: ["Misterio y sigilo: aparece cuando nadie lo espera.", "Mystery and stealth: appears when no one expects it."] },
      { e: "🌊", n: ["Marea Serena", "Calm Tide"], s: ["Zanpakuto original", "Original Zanpakuto"], t: "hm", d: ["Equilibrio y empatía: sana y protege a los tuyos.", "Balance and empathy: heals and protects your people."] },
      { e: "✨", n: ["Luz Dorada", "Golden Light"], s: ["Zanpakuto original", "Original Zanpakuto"], t: "hp", d: ["Esperanza y determinación: ilumina el camino a todos.", "Hope and determination: lights the way for everyone."] }
    ] },
  { id: "bleach-bankai", a: "bleach", cat: "power", e: "💠", kind: "q", bank: "A", lead: LD.bankai, note: "original",
    title: ["¿Cuál sería tu Bankai?", "What would your Bankai be?"],
    res: [
      { e: "🌘", n: ["Bankai: Eclipse Celestial", "Bankai: Celestial Eclipse"], s: ["Bankai original", "Original Bankai"], t: "pd", d: ["Poder absoluto envuelto en misterio: oscurece el cielo y decide el combate.", "Absolute power wrapped in mystery: darkens the sky and decides the fight."] },
      { e: "☀️", n: ["Bankai: Mil Soles", "Bankai: Thousand Suns"], s: ["Bankai original", "Original Bankai"], t: "fp", d: ["Una explosión de energía y valentía que no conoce límites.", "A burst of energy and courage with no limits."] },
      { e: "🌨️", n: ["Bankai: Jardín de Escarcha", "Bankai: Frost Garden"], s: ["Bankai original", "Original Bankai"], t: "md", d: ["Un campo de batalla perfecto y calculado, hecho a tu medida.", "A perfect, calculated battlefield made to your measure."] },
      { e: "⛈️", n: ["Bankai: Trueno Perpetuo", "Bankai: Perpetual Thunder"], s: ["Bankai original", "Original Bankai"], t: "sf", d: ["Velocidad imparable: una tormenta que nunca se detiene.", "Unstoppable speed: a storm that never stops."] },
      { e: "🌊", n: ["Bankai: Océano Infinito", "Bankai: Infinite Ocean"], s: ["Bankai original", "Original Bankai"], t: "hm", d: ["Profundidad y calma: protege a todos los que están a tu alrededor.", "Depth and calm: protects everyone around you."] },
      { e: "🌅", n: ["Bankai: Amanecer Eterno", "Bankai: Eternal Dawn"], s: ["Bankai original", "Original Bankai"], t: "hp", d: ["Esperanza hecha fuerza: cada golpe trae un nuevo comienzo.", "Hope turned into strength: every strike brings a new beginning."] }
    ] },
  { id: "bleach-character", a: "bleach", cat: "character", e: "⚔️", kind: "q", bank: "P", pool: "bleach", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Bleach eres?", "Which Bleach character are you?"] },

  /* ===== JUJUTSU KAISEN ===== */
  { id: "jjk-technique", a: "jjk", cat: "power", e: "🌀", kind: "q", bank: "A", lead: LD.tech, note: "original",
    title: ["¿Qué técnica maldita tendrías?", "Which cursed technique would you have?"],
    res: [
      { e: "👻", n: ["Eco Espectral", "Spectral Echo"], s: ["Técnica original", "Original technique"], t: "dm", d: ["Tus ataques dejan ecos que confunden al rival. Sigilo e ingenio.", "Your attacks leave echoes that confuse rivals. Stealth and wit."] },
      { e: "⛓️", n: ["Cadenas del Destino", "Chains of Fate"], s: ["Técnica original", "Original technique"], t: "mp", d: ["Atas al enemigo con tu estrategia. Control total del combate.", "You bind the enemy with strategy. Total control of the fight."] },
      { e: "👊", n: ["Puño Resonante", "Resonant Fist"], s: ["Técnica original", "Original technique"], t: "pf", d: ["Cada golpe retumba con fuerza bruta y mucha energía.", "Every punch rings with raw force and plenty of energy."] },
      { e: "⚡", n: ["Paso Relámpago", "Lightning Step"], s: ["Técnica original", "Original technique"], t: "sf", d: ["Te mueves a una velocidad que nadie puede seguir.", "You move at a speed no one can follow."] },
      { e: "🌹", n: ["Jardín de Espinas", "Thorn Garden"], s: ["Técnica original", "Original technique"], t: "dh", d: ["Proteges tu territorio con belleza y peligro a partes iguales.", "You guard your territory with beauty and danger in equal parts."] },
      { e: "🔰", n: ["Sello Protector", "Guardian Seal"], s: ["Técnica original", "Original technique"], t: "hm", d: ["Tu técnica protege a tu equipo y neutraliza amenazas.", "Your technique shields your team and neutralizes threats."] }
    ] },
  { id: "jjk-character", a: "jjk", cat: "character", e: "🧿", kind: "q", bank: "P", pool: "jjk", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Jujutsu Kaisen eres?", "Which Jujutsu Kaisen character are you?"] },
  { id: "jjk-weapon", a: "jjk", cat: "power", e: "🗡️", kind: "q", bank: "A", lead: LD.weapon, note: "fun",
    title: ["¿Qué arma utilizarías?", "Which weapon would you use?"],
    res: [
      { e: "🗡️", n: ["Katana", "Katana"], t: "sp", d: ["Precisión, rapidez y elegancia. Prefieres un golpe limpio.", "Precision, speed and elegance. You prefer a clean strike."] },
      { e: "🔱", n: ["Lanza", "Spear"], t: "fp", d: ["Alcance y valentía: atacas primero y con decisión.", "Reach and courage: you strike first and decisively."] },
      { e: "⛓️", n: ["Cadena", "Chain"], t: "dm", d: ["Versatilidad y astucia: controlas el espacio y al rival.", "Versatility and cunning: you control the space and the opponent."] },
      { e: "🪄", n: ["Bastón", "Staff"], t: "hm", d: ["Equilibrio y defensa: proteges a tu equipo con calma.", "Balance and defense: you protect your team calmly."] },
      { e: "🥊", n: ["Guantes de combate", "Combat gloves"], t: "fs", d: ["Combate directo, energía y mucho ritmo.", "Direct combat, energy and plenty of rhythm."] },
      { e: "🏹", n: ["Arco", "Bow"], t: "md", d: ["Paciencia y puntería: eliges el momento perfecto.", "Patience and aim: you choose the perfect moment."] }
    ] },

  /* ===== HUNTER x HUNTER ===== */
  { id: "hxh-nen", a: "hxh", cat: "power", e: "🎣", kind: "q", bank: "A", lead: LD.nen, note: "official",
    title: ["¿Qué tipo de Nen tendrías?", "What Nen type would you have?"],
    res: [
      { e: "💪", n: ["Intensificación", "Enhancement"], t: "ph", d: ["Refuerzas tu cuerpo y tu voluntad: directo, constante y muy resistente.", "You reinforce your body and will: direct, steady and very resilient."] },
      { e: "🎯", n: ["Emisión", "Emission"], t: "fs", d: ["Proyectas tu energía a distancia: expresivo, impulsivo y directo.", "You project your energy at range: expressive, impulsive and direct."] },
      { e: "🌀", n: ["Transformación", "Transmutation"], t: "sd", d: ["Cambias la naturaleza de tu energía: creativo, travieso y cambiante.", "You change the nature of your energy: creative, mischievous and ever-changing."] },
      { e: "🧩", n: ["Materialización", "Conjuration"], t: "mh", d: ["Creas objetos con tu aura: detallista, imaginativo y paciente.", "You create objects with your aura: detail-minded, imaginative and patient."] },
      { e: "🎮", n: ["Manipulación", "Manipulation"], t: "mp", d: ["Controlas objetos o seres: lógico, estratégico y organizado.", "You control objects or beings: logical, strategic and organized."] },
      { e: "🌟", n: ["Especialización", "Specialization"], t: "dp", d: ["Habilidades únicas e irrepetibles: original, independiente y especial.", "Unique, unrepeatable abilities: original, independent and special."] }
    ] },
  { id: "hxh-character", a: "hxh", cat: "character", e: "🃏", kind: "q", bank: "P", pool: "hxh", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Hunter x Hunter eres?", "Which Hunter x Hunter character are you?"] },

  /* ===== DRAGON BALL ===== */
  { id: "dragonball-form", a: "dragonball", cat: "power", e: "⚡", kind: "q", bank: "A", lead: LD.form, note: "official",
    title: ["¿Qué transformación tendrías?", "Which transformation would you have?"],
    res: [
      { e: "🦍", n: ["Oozaru (Gran Mono)", "Oozaru (Great Ape)"], t: "pf", d: ["Fuerza desbordante y energía salvaje. Cuando te enciendes, nadie te frena.", "Overflowing strength and wild energy. When you ignite, nobody stops you."] },
      { e: "⚡", n: ["Super Saiyan", "Super Saiyan"], t: "fs", d: ["Pasión y determinación al máximo. Tu rabia se convierte en poder.", "Passion and determination at full. Your drive turns into power."] },
      { e: "🔴", n: ["Super Saiyan Dios", "Super Saiyan God"], t: "hp", d: ["Serenidad y fuerza compartida: poder que nace de los demás.", "Serenity and shared strength: power that comes from others."] },
      { e: "🔵", n: ["Super Saiyan Blue", "Super Saiyan Blue"], t: "mp", d: ["Control total y precisión: poder divino bajo una mente fría.", "Total control and precision: divine power under a cool mind."] },
      { e: "⚪", n: ["Ultra Instinto", "Ultra Instinct"], t: "sm", d: ["Mente en calma y cuerpo que reacciona solo: fluidez absoluta.", "A calm mind and a body that reacts on its own: absolute flow."] },
      { e: "🟣", n: ["Ultra Ego", "Ultra Ego"], t: "dp", d: ["Orgullo y ambición: cuanto más te golpean, más fuerte te vuelves.", "Pride and ambition: the more you're hit, the stronger you get."] }
    ] },
  { id: "dragonball-character", a: "dragonball", cat: "character", e: "🐉", kind: "q", bank: "P", pool: "dragonball", lead: LD.warrior, note: "fun",
    title: ["¿Qué guerrero de Dragon Ball eres?", "Which Dragon Ball warrior are you?"] },

  /* ===== DEMON SLAYER ===== */
  { id: "demonslayer-character", a: "demonslayer", cat: "character", e: "🗡️", kind: "q", bank: "P", pool: "demonslayer", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Demon Slayer eres?", "Which Demon Slayer character are you?"] },
  { id: "demonslayer-breathing", a: "demonslayer", cat: "power", e: "🌊", kind: "q", bank: "A", lead: LD.breath, note: "official",
    title: ["¿Qué estilo de respiración usarías?", "Which Breathing Style would you use?"],
    res: [
      { e: "🌊", n: ["Respiración del Agua", "Water Breathing"], t: "mh", d: ["Fluidez y adaptación: respondes a cada situación con calma.", "Fluidity and adaptability: you meet every situation calmly."] },
      { e: "🔥", n: ["Respiración de la Llama", "Flame Breathing"], t: "fh", d: ["Pasión y corazón: inspiras a todos con tu entusiasmo.", "Passion and heart: you inspire everyone with your enthusiasm."] },
      { e: "⚡", n: ["Respiración del Trueno", "Thunder Breathing"], t: "sf", d: ["Velocidad explosiva: un solo movimiento, máxima intensidad.", "Explosive speed: a single move, maximum intensity."] },
      { e: "🌪️", n: ["Respiración del Viento", "Wind Breathing"], t: "sp", d: ["Ataque directo y salvaje: libre, impulsivo y poderoso.", "Direct, wild offense: free, impulsive and powerful."] },
      { e: "🪨", n: ["Respiración de la Piedra", "Stone Breathing"], t: "ph", d: ["Firmeza y resistencia: nada te mueve de tu sitio.", "Firmness and endurance: nothing moves you from your spot."] },
      { e: "🌸", n: ["Respiración de la Flor", "Flower Breathing"], t: "hd", d: ["Gracia y sensibilidad: elegancia que esconde mucha fuerza.", "Grace and sensitivity: elegance hiding a lot of strength."] }
    ] },

  /* ===== ATTACK ON TITAN ===== */
  { id: "aot-character", a: "aot", cat: "character", e: "🧱", kind: "q", bank: "P", pool: "aot", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Attack on Titan eres?", "Which Attack on Titan character are you?"] },
  { id: "aot-regiment", a: "aot", cat: "group", e: "🕊️", kind: "q", bank: "P", lead: LD.unit, note: "official",
    title: ["¿A qué regimiento pertenecerías?", "Which regiment would you join?"],
    res: [
      { e: "🕊️", n: ["Legión de Reconocimiento", "Survey Corps"], t: "fs", d: ["Libertad y valentía: prefieres explorar lo desconocido antes que quedarte quieto.", "Freedom and courage: you'd rather explore the unknown than stand still."] },
      { e: "🧱", n: ["Tropas de Guarnición", "Garrison Regiment"], t: "hm", d: ["Protección y constancia: tu apoyo mantiene a todos a salvo.", "Protection and consistency: your support keeps everyone safe."] },
      { e: "🛡️", n: ["Policía Militar", "Military Police"], t: "pm", d: ["Orden y ambición: valoras la estructura y el prestigio.", "Order and ambition: you value structure and prestige."] }
    ] },

  /* ===== MY HERO ACADEMIA ===== */
  { id: "mha-character", a: "mha", cat: "character", e: "🦸", kind: "q", bank: "P", pool: "mha", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de My Hero Academia eres?", "Which My Hero Academia character are you?"] },
  { id: "mha-quirk", a: "mha", cat: "power", e: "💥", kind: "q", bank: "A", lead: LD.quirk, note: "original",
    title: ["¿Qué Quirk tendrías?", "Which Quirk would you have?"],
    res: [
      { e: "🌟", n: ["Pulso Estelar", "Star Pulse"], s: ["Quirk original", "Original Quirk"], t: "pf", d: ["Lanzas pulsos de energía brillante. Potencia y carisma.", "You fire pulses of bright energy. Power and charisma."] },
      { e: "💨", n: ["Velocidad Fantasma", "Ghost Speed"], s: ["Quirk original", "Original Quirk"], t: "sd", d: ["Te mueves casi sin ser visto. Rápido y misterioso.", "You move almost unseen. Fast and mysterious."] },
      { e: "💚", n: ["Eco Curativo", "Healing Echo"], s: ["Quirk original", "Original Quirk"], t: "hm", d: ["Tu voz restaura energía a quienes te rodean.", "Your voice restores energy to those around you."] },
      { e: "🛡️", n: ["Escudo Prismático", "Prismatic Shield"], s: ["Quirk original", "Original Quirk"], t: "hp", d: ["Creas barreras de luz que protegen a tu equipo.", "You create light barriers that protect your team."] },
      { e: "🪐", n: ["Gravedad Ligera", "Light Gravity"], s: ["Quirk original", "Original Quirk"], t: "ms", d: ["Alteras el peso de las cosas con ingenio y precisión.", "You change the weight of things with wit and precision."] },
      { e: "🌑", n: ["Sombra Viva", "Living Shadow"], s: ["Quirk original", "Original Quirk"], t: "dm", d: ["Tu sombra actúa por ti: sigilo y estrategia.", "Your shadow acts for you: stealth and strategy."] }
    ] },

  /* ===== SOLO LEVELING ===== */
  { id: "sololeveling-character", a: "sololeveling", cat: "character", e: "🌑", kind: "q", bank: "P", pool: "sololeveling", lead: LD.char, note: "fun",
    title: ["¿Qué personaje de Solo Leveling eres?", "Which Solo Leveling character are you?"] },
  { id: "sololeveling-rank", a: "sololeveling", cat: "group", e: "🏅", kind: "q", bank: "A", lead: LD.rank, note: "official",
    title: ["¿Qué rango de cazador tendrías?", "Which hunter rank would you have?"],
    res: [
      { e: "👑", n: ["Rango S", "S-Rank"], t: "pf", d: ["Poder y ambición al máximo: eres de los que cambian el rumbo de todo.", "Power and ambition at the max: you change the course of everything."] },
      { e: "🥇", n: ["Rango A", "A-Rank"], t: "ps", d: ["Fuerza y rapidez: un cazador de élite en todo momento.", "Strength and speed: an elite hunter at all times."] },
      { e: "🥈", n: ["Rango B", "B-Rank"], t: "ms", d: ["Táctica y agilidad: ganas con cabeza.", "Tactics and agility: you win with brains."] },
      { e: "🥉", n: ["Rango C", "C-Rank"], t: "mh", d: ["Constancia y compañerismo: tu equipo confía en ti.", "Consistency and teamwork: your team trusts you."] },
      { e: "🛡️", n: ["Rango D", "D-Rank"], t: "hd", d: ["Prudencia y corazón: cuidas de los demás y creces despacio.", "Caution and heart: you look after others and grow steadily."] },
      { e: "🌱", n: ["Rango E", "E-Rank"], t: "dh", d: ["Potencial oculto: nadie sabe hasta dónde puedes llegar.", "Hidden potential: nobody knows how far you can go."] }
    ] },

  /* ===== ANIME UNIVERSAL ===== */
  { id: "universal-birthday", a: "universal", cat: "birthday", e: "🎂", kind: "date", pool: "all", lead: LD.char,
    title: ["¿Qué personaje de anime eres según tu cumpleaños?", "Which anime character are you by your birthday?"] },
  { id: "universal-partner", a: "universal", cat: "special", e: "💞", kind: "q", bank: "P", pool: "all", lead: LD.partner, note: "fun",
    title: ["¿Qué personaje sería tu pareja ideal?", "Which character would be your ideal partner?"] },
  { id: "universal-power", a: "universal", cat: "power", e: "🔮", kind: "q", bank: "A", lead: LD.power, note: "original",
    title: ["¿Qué poder de anime tendrías?", "Which anime power would you have?"],
    res: [
      { e: "🔥", n: ["Control de las llamas", "Flame Control"], t: "ff", c: ["#ef4444", "#f59e0b"], d: ["Dominas el fuego a voluntad. Eres pura energía, valentía y pasión: donde llegas, todo se enciende.", "You command fire at will. You're pure energy, courage and passion: wherever you go, everything lights up."] },
      { e: "⚡", n: ["Velocidad de tormenta", "Storm Speed"], t: "ss", c: ["#3b82f6", "#a855f7"], d: ["Te mueves como un relámpago y canalizas la electricidad. Nadie puede seguirte el ritmo.", "You move like lightning and channel electricity. Nobody can keep up with you."] },
      { e: "🌑", n: ["Manipulación de sombras", "Shadow Manipulation"], t: "dd", c: ["#1e1b4b", "#7c3aed"], d: ["Las sombras obedecen tus órdenes. Eres sigiloso, misterioso y siempre sabes dónde ocultarte.", "Shadows obey your commands. You're stealthy, mysterious and always know where to hide."] },
      { e: "⏳", n: ["Dominio del tiempo", "Time Mastery"], t: "pp", c: ["#0ea5e9", "#eab308"], d: ["Puedes ralentizar o detener el tiempo por instantes. Paciente y preciso, llegas siempre en el momento justo.", "You can slow or stop time for brief moments. Patient and precise, you always arrive at the right moment."] },
      { e: "🔮", n: ["Telequinesis estelar", "Stellar Telekinesis"], t: "mm", c: ["#a855f7", "#ec4899"], d: ["Mueves objetos con la mente y percibes lo que otros no ven. Tu intelecto es tu arma.", "You move objects with your mind and sense what others can't. Your intellect is your weapon."] },
      { e: "🌿", n: ["Regeneración vital", "Vital Regeneration"], t: "hh", c: ["#16a34a", "#2dd4bf"], d: ["Puedes sanar heridas y renovar la energía de tu equipo. Eres el corazón del grupo.", "You can heal wounds and restore your team's energy. You are the heart of the group."] }
    ] },
  { id: "universal-villain", a: "universal", cat: "special", e: "😈", kind: "q", bank: "P", pool: "villain", lead: LD.villain, note: "fun",
    title: ["¿Qué villano serías?", "Which villain would you be?"] },
  { id: "universal-universe", a: "universal", cat: "special", e: "🌌", kind: "q", bank: "P", pool: "universe", lead: LD.universe, note: "fun",
    title: ["¿Qué universo de anime te corresponde?", "Which anime universe fits you?"] },
  { id: "universal-zodiac", a: "universal", cat: "zodiac", e: "🔭", kind: "zodiac",
    title: ["¿Qué personaje comparte tu signo zodiacal?", "Which character shares your zodiac sign?"] }
];

/* =====================================================
   GUÍA RÁPIDA: CÓMO AÑADIR UN ANIME NUEVO
   1) Añade un bloque en ANIMES (id, emoji, nombre, colores, tipos "t", descripción).
   2) Añade sus personajes en CHARACTERS con a: "tu-id".
   3) Añade quizzes en QUIZZES. El más sencillo:
      { id: "tu-id-character", a: "tu-id", cat: "character", e: "⭐", kind: "q", bank: "P",
        pool: "tu-id", lead: LD.char, note: "fun",
        title: ["¿Qué personaje de X eres?", "Which X character are you?"] }
   Las tarjetas, el buscador, los filtros y la página del anime se crean solos.
===================================================== */