import "./App.css";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import Products from "./pages/Products";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <div className="App">
      <AppProvider i18n={enTranslations}>
        <div style={{ paddingBottom: "60px" }}>
          <Products />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
