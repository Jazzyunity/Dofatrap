import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <img 
          src="/img/bouftou_royal.jpg" 
          alt="Bouftou Royal" 
          className="BouftouImage" 
        />
        <h1 className="DungeonTitle">Donjon de Bouftou</h1>
      </header>
      <main className="Content">
        <section className="GuideSection">
          <video src="/path-to-video-1.mp4" autoPlay loop muted className="GuideVideo" />
          <div className="GuideText">
            <h2>Phase 1</h2>
            <p>Voici les étapes importantes pour réussir cette phase.</p>
          </div>
        </section>
        <section className="GuideSection">
          <div className="GuideText">
            <h2>Phase 2</h2>
            <p>Voici les étapes importantes pour réussir cette phase.</p>
          </div>
          <video src="/path-to-video-2.mp4" autoPlay loop muted className="GuideVideo" />
        </section>
      </main>
    </div>
  );
}

export default App;
