import logo from "./logo.svg";
import "./App.css";
import PlayerPerformance from "./Components/ui/support/PlayerPerformance";
import TeamPerformance from "./Components/ui/support/TeamPerformance";
import UpcomingMatches from "./Components/ui/support/UpcomingMatches";
import VisualiseMatch from "./Components/ui/support/VisualiseMatch";
import ScoreCard from "./Components/ui/support/ScoreCard";

function App() {
  return (
    <>
      <PlayerPerformance />
      <TeamPerformance />
      <UpcomingMatches />
      <VisualiseMatch />
      <ScoreCard />
    </>
  );
}

export default App;
