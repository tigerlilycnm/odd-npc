import { useState } from 'react';
import NPCCard from './components/NPCCard';
import { generateNPC } from './data/generateNPC';
import './App.css';

function App() {
  const [npc, setNpc] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">The Odd NPC</h1>
      <button
        onClick={() => setNpc(generateNPC())}
        className="generate-button"
      >
        Generate NPC
      </button>

      <NPCCard npc={npc} />

      <footer className="app-footer">
        <a href="https://ko-fi.com/connie72688" target="_blank" rel="noopener noreferrer">
          Like this NPC? Tip me on Ko-fi
        </a>
      </footer>
    </div>
  );
}

export default App;
