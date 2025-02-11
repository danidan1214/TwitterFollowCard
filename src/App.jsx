import "./App.css";
import { TwitterFollowCard } from "./assets/TwitterFollowCard.jsx";

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard userName="danidan1214" isFollowing>
        Daniel Palma
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" isFollowing={false}>
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev" isFollowing={false}>
        Miguel Ángel Durán
      </TwitterFollowCard>
    </div>
  );
}
