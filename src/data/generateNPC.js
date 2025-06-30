import {
  races, roles, quirks, secrets, voices
} from './npctables.js';

export function generateNPC() {
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return {
    name: generateName(), // placeholder for now
    race: random(races),
    role: random(roles),
    quirk: random(quirks),
    secret: random(secrets),
    voice: random(voices)
  };
}

function generateName() {
  const firstNames = ['Mirtha', 'Borin', 'Kael', 'Jaxi', 'Tilda', 'Orin', 'Vex', 'Thorne', 'Nessa'];
  const lastNames = ['Brushfeet', 'Ironflame', 'Whisperwind', 'Daggerfall', 'Moonshine', 'Coppervein', 'Nightbrew'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}
