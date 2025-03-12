import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { RefreshIcon } from "./assets/svg/RefreshIcon";
import { AlertIcon } from "./assets/svg/AlertIcon";
import axios from "axios";
import { MatchInfo } from "./components/MatchInfo";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    await axios
      .get("https://app.ftoyd.com/fronttemp-service/fronttemp")
      .then((response) => {
        if (response.data.ok) {
          setData(response.data.data.matches);
          setError(false);
        } else {
          setError(true);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <h1 className="AppHeader"> Match Traker</h1>
        <div className="RefreshContainer">
          {error ? (
            <div className="ErrorContainer">
              <AlertIcon />
              <span className="ErrorText">
                Ошибка: не удалось загрузить информацию
              </span>
            </div>
          ) : (
            <></>
          )}
          <button className="HeaderButton" onClick={getData}>
            <span className="ButtonText">Обновить</span>
            <RefreshIcon />
          </button>
        </div>
      </div>
      {data.map((item,index) => (
        <MatchInfo item={item} key={item+index}/>
      ))}
    </div>
  );
}

export default App;
