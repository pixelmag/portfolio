// Each paragraph is either a plain string or an array of { text, bold? } segments
export const aboutSections = [
  {
    label: 'Where I\'m From',
    paragraphs: [
      '🇺🇾 I\'m from Uruguay, originally from Melo — a small city where I grew up. After finishing high school, I moved to Montevideo to continue my studies, leaving home for the first time.',
    ],
  },
  {
    label: 'How I Got Here',
    paragraphs: [
      [
        { text: '🎢 My path into design ' },
        { text: "wasn't exactly linear", bold: true },
        { text: '. I started working in administrative roles, later transitioned into marketing, and eventually found my place in product. At the same time, I began studying Economics, but soon realized ' },
        { text: 'I was more drawn to creativity and communication', bold: true },
        { text: '. That led me to switch paths and study Visual Communication Design at Universidad de la República — a decision that shaped how I approach problems today, blending analytical thinking with a strong focus on clarity and visual storytelling.' },
      ],
    ],
  },
  {
    label: 'What I Do',
    paragraphs: [
      [
        { text: '👩🏽‍💻Today, I work as a Senior Product Designer at ' },
        { text: 'Qubika', bold: true, href: 'https://qubika.com/' },
        { text: ', collaborating on digital products and experiences. I\'m also part of the ' },
        { text: 'Friends of Figma Montevideo', bold: true, href: 'https://www.instagram.com/fof_montevideo/' },
        { text: ' community.' },
      ],
      '✨ Lately, I\'ve been focusing on learning frontend development — exploring HTML, CSS, JavaScript, and React — with a growing interest in the intersection of design, technology, and Ai.',
    ],
  },
  {
    label: 'About Life',
    paragraphs: [
      '🤸 I love surfing and spending time at the beach — it\'s where I disconnect, reset, and find inspiration. I\'ve also always been drawn to sports, especially football. I really enjoy traveling with friends and creating shared memories, as well as spending time with my grandma — those quieter moments mean a lot to me.',
    ],
  },
]
