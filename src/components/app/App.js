import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ChampionsList from "../champions-list/ChampionsList";
import { setCharacters } from "../../actions/actions";
import { getChampions } from "../../utils/riot-api";
import ChampionPage from "../champion-page/ChampionPage";
import './App.css';

function App() {
  const location = useLocation();
  function getAllChampions() {
    getChampions()
      .then((res) => {
        const characterList = Object.keys(res.data).map((key) => {
          return res.data[key];
        });
        setCharacters(characterList);
      })
      .catch((err) => console.log(err));
  }
  React.useEffect(() => {
    getAllChampions();
  }, []);
  return (
    <div className={`app ${location.pathname === "/champions/" && "app_color_white"}`}>
      <header className="App-header"></header>
      <main className="app__main">
        <Routes>
          <Route path="/champions" element={<ChampionsList />} />
          <Route path="/champions/:championName" element={<ChampionPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;