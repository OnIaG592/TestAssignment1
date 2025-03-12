import React, { FC, useState } from "react";
import { CommandIcon } from "../../assets/svg/CommandIcon";
import { MoreInfoIcon } from "../../assets/svg/MoreInfoIcon";
import { LessInfoIcon } from "../../assets/svg/LessInfoIcon";
import { AdditionalInfo } from "./components/AdditionalInfo";
import "./index.css";

export interface Match {
  item: {
    homeTeam: {
      name: string;
      players: [
        {
          username: string;
          kills: number;
        }
      ];
      points: number;
      place: number;
      total_kills: number;
    };
    awayTeam: {
      name: string;
      players: [
        {
          username: string;
          kills: number;
        }
      ];
      points: number;
      place: number;
      total_kills: number;
    };
    homeScore: number;
    awayScore: number;
    status: string;
  };
}

export const MatchInfo: FC<Match> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="Sections">
        <div className="Main">
          <CommandIcon />
          <span className="HomeTeamName">{item.homeTeam.name}</span>
        </div>
        <div className="Score">
          <span style={{ color: "white", marginBottom: "6px" }}>
            {item.homeScore} : {item.awayScore}
          </span>
          <span
            className="Status"
            style={{
              backgroundColor:
                item.status === "Finished"
                  ? "rgba(235, 2, 55, 1)"
                  : "rgba(67, 173, 40, 1)",
            }}
          >
            {item.status === "Finished" ? "Finished" : "Live"}
          </span>
        </div>
        <div className="Main">
          <CommandIcon />
          <span className="AwayTeamName">{item.awayTeam.name}</span>
          {!isOpen ? (
            <button className="Button" onClick={() => setIsOpen(true)}>
              <MoreInfoIcon />
            </button>
          ) : (
            <button className="Button" onClick={() => setIsOpen(false)}>
              <LessInfoIcon />
            </button>
          )}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {isOpen ? <AdditionalInfo item={item.homeTeam} /> : <></>}
        {isOpen ? <AdditionalInfo item={item.awayTeam} /> : <></>}
      </div>
    </div>
  );
};
