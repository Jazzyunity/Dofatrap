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
            src="/img/icon.png" 
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
              {/* Vidéo YouTube intégrée */}
              <div className="GuideVideo">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cmN_Mhdwmis?si=SK7AtkLrDeJ1lq_u&amp;controls=0&playlist=cmN_Mhdwmis&autoplay=1&mute=1&loop=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Texte explicatif à droite */}
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
