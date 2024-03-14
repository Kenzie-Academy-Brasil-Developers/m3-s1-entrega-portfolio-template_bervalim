import { LanguageProvider } from "./components/providers/LanguageContext";
import { HomePage } from "./pages/HomePage";
import "./styles/index.css";

export const App = () => {
  return (
    <div className="App">
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </div>
  );
};

export default App;
