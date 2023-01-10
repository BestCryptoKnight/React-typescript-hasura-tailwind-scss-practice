import React from "react";
import "./App.scss";
import Layout from "./components/layout/Index";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-background">
      <div className="background-image">
        <div className="px-8">
          <Layout>
            <Home />
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default App;
