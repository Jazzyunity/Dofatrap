import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="Header">
        {/* Logo */}
        <div className="Logo">
          <img 
            src="/bouftou_royal.png" 
            alt="Logo Dofus Trap" 
            className="LogoImage" 
          />
        </div>

        {/* Navigation */}
        <nav className="Nav">
          <ul className="NavList">
            <li className="NavItem">Amakna</li>
            <li className="NavItem">Frigost</li>
            <li className="NavItem">Dimensions</li>
            <li className="NavItem">Autres</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="MainContent">
        <h1 className="DungeonTitle">Donjon de Bouftou</h1>

        {/* Section légère avec une couleur de fond différente */}
        <section className="StrategySection">
          <div className="StrategyContainer">
            <h2 className="StrategyTitle">Strategy Guide</h2>

            <div className="GuideSection">
              <video src="/path-to-video-1.mp4" autoPlay loop muted className="GuideVideo" />
              <div className="GuideText">
                <h3>Phase 1</h3>
                <p>Voici les étapes importantes pour réussir cette phase.</p>
              </div>
            </div>

            <div className="GuideSection">
              <div className="GuideText">
                <h3>Phase 2</h3>
                <p>Voici les étapes importantes pour réussir cette phase.</p>
              </div>
              <video src="/path-to-video-2.mp4" autoPlay loop muted className="GuideVideo" />
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
