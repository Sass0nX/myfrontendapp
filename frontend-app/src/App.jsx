import { getGreeting } from "ui-utils";

function App() {
  return (
    <div>
      <h1>{getGreeting("Maor")}</h1>
      <p>My first application using a private Nexus package.</p>
    </div>
  );
}

export default App;