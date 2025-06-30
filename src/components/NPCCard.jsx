export default function NPCCard({ npc }) {
  if (!npc) return null;

  return (
    <div className="npc-card">
      <h2 className="npc-name">{npc.name}</h2>
      <p className="npc-role">{npc.race} {npc.role}</p>
      <ul className="npc-details">
        <li><strong>Quirk:</strong> {npc.quirk}</li>
        <li><strong>Secret:</strong> {npc.secret}</li>
        <li><strong>Voice:</strong> {npc.voice}</li>
      </ul>
    </div>
  );
}
