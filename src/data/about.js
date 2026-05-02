// Each paragraph is either a plain string or an array of { text, bold? } segments
export const aboutSections = [
  {
    label: 'What I Do',
    paragraphs: [
      [
        { text: "👩🏽‍💻 I'm a " },
        { text: 'Senior Product Designer,', bold: true },
        { text: ' based in Montevideo, Uruguay, currently working at ' },
        { text: 'Qubika', bold: true, href: 'https://qubika.com/' },
        { text: ". I'm also part of the " },
        { text: 'Friends of Figma Montevideo', bold: true, href: 'https://www.instagram.com/fof_montevideo/' },
        { text: ' community.' },
      ],
      [
        { text: "With 4+ years of experience, I've worked with " },
        { text: '20+ clients,', bold: true },
        { text: ' across different industries, helping shape digital products and improve user experiences — from early-stage concepts to more mature platforms.' },
      ],
    ],
  },
  {
    label: 'How I Got Here',
    paragraphs: [
      [
        { text: '🎢 My path into design' },
        { text: "wasn't exactly linear", bold: true },
        { text: '. I started as an office manager, later transitioned into marketing, and eventually found my place in product design. At the same time, I began studying Economics, but soon realized ' },
        { text: 'I was more drawn to creativity and communication', bold: true },
        { text: '. That led me to switch paths and study Visual Communication Design at Universidad de la República — a decision that shaped how I approach problems today, blending analytical thinking with a strong focus on clarity and visual storytelling.' },
      ],
    ],
  },
  {
    label: 'What I Do',
    paragraphs: [
      '✨ Lately, I\'ve been focusing on learning frontend development — exploring HTML, CSS, JavaScript, and React — with a growing interest in the intersection of design, technology, and AI.',
    ],
  },
  {
    label: 'About Life',
    paragraphs: [
      "🤸 I love surfing and spending time at the beach — it's where I disconnect, reset, and find inspiration. I've always been into sports, especially football. I really enjoy traveling with friends and creating shared memories, as well as spending time with my grandma — those quieter moments mean a lot to me.",
    ],
  },
]
