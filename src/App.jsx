import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const users = [
    {
      userName: "danidan1214",
      name: "Daniel Palma",
      isFollowing: true,
    },
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map((user) => (
        <TwitterFollowCard
          key={user.userName}
          userName={user.userName}
          initialIsFollowing={user.isFollowing}
        >
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
