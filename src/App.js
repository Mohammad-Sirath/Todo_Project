import { useRoutes } from "react-router-dom";
import allRoutes from "./routes";
function App() {
  const routes = useRoutes(allRoutes);
  return routes;
}

export default App;
