export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'generator', label: 'Sentence Generator' },
  { id: 'alphabets', label: 'Alphabets' },
  { id: 'shapes', label: 'Shapes' },
  { id: 'counting', label: 'Counting' },
  { id: 'poems', label: 'Poems / Sentences' },
];

export const handwritingFonts = [
  { label: 'Playful Print', value: '"Comic Sans MS", "Trebuchet MS", cursive' },
  { label: 'Neat Classroom', value: '"Trebuchet MS", sans-serif' },
  { label: 'Rounded Marker', value: '"Verdana", sans-serif' },
];

export const alphabetItems = [
  ['A', 'a', 'Apple', '🍎'],
  ['B', 'b', 'Ball', '⚽'],
  ['C', 'c', 'Cat', '🐱'],
  ['D', 'd', 'Dog', '🐶'],
  ['E', 'e', 'Elephant', '🐘'],
  ['F', 'f', 'Fish', '🐟'],
  ['G', 'g', 'Grapes', '🍇'],
  ['H', 'h', 'House', '🏠'],
  ['I', 'i', 'Ice cream', '🍦'],
  ['J', 'j', 'Juice', '🧃'],
  ['K', 'k', 'Kite', '🪁'],
  ['L', 'l', 'Lion', '🦁'],
  ['M', 'm', 'Moon', '🌙'],
  ['N', 'n', 'Nest', '🪺'],
  ['O', 'o', 'Orange', '🍊'],
  ['P', 'p', 'Pencil', '✏️'],
  ['Q', 'q', 'Queen', '👑'],
  ['R', 'r', 'Rainbow', '🌈'],
  ['S', 's', 'Star', '⭐'],
  ['T', 't', 'Tree', '🌳'],
  ['U', 'u', 'Umbrella', '☂️'],
  ['V', 'v', 'Violin', '🎻'],
  ['W', 'w', 'Whale', '🐳'],
  ['X', 'x', 'Xylophone', '🎼'],
  ['Y', 'y', 'Yarn', '🧶'],
  ['Z', 'z', 'Zebra', '🦓'],
];

export const shapeItems = [
  { name: 'Circle', emoji: '⚪', sides: 0 },
  { name: 'Square', emoji: '🟦', sides: 4 },
  { name: 'Triangle', emoji: '🔺', sides: 3 },
  { name: 'Rectangle', emoji: '▭', sides: 4 },
  { name: 'Star', emoji: '⭐', sides: 5 },
  { name: 'Heart', emoji: '💖', sides: 2 },
];

export const countingItems = Array.from({ length: 20 }, (_, index) => ({
  number: index + 1,
  icons: '🟡 '.repeat(index + 1).trim(),
}));

export const poemItems = [
  {
    title: 'Morning Smile',
    type: 'Poem',
    text: 'I wake up bright, I smile with glee, today is full of fun for me.',
  },
  {
    title: 'Kind Hands',
    type: 'Sentence',
    text: 'I am kind and gentle every day.',
  },
  {
    title: 'Learning Song',
    type: 'Poem',
    text: 'Read a word, trace a line, little learners shine and shine.',
  },
  {
    title: 'Happy Thought',
    type: 'Sentence',
    text: 'I love to learn new things.',
  },
  {
    title: 'Sharing Joy',
    type: 'Sentence',
    text: 'I share my toys and use kind words.',
  },
  {
    title: 'Rainbow Rhyme',
    type: 'Poem',
    text: 'Red and yellow, green and blue, tracing makes my dreams come true.',
  },
];
