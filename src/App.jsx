import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <div className="App">
      <TwitterFollowCard userName="danidan1214" initialIsFollowing={true}>
        Daniel Palma
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
    </div>
  );
}
