import React, { FC } from "react";
import "./index.css";
import avatar from "../../../../assets/png/avatar.png";

type Team = {
  item: {
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
};

export const AdditionalInfo: FC<Team> = ({ item }) => {
  return (
    <div className="Container">
      <div style={{ display: "flex" }}>
        {item.players.map((item, index) => (
          <div className="UserInfo" key={item.kills + index}>
            <div className="UserCard">
              <img src={avatar} alt="" width="36px" height="36px" />
              <span className="ColoredText">{item.username}</span>
            </div>
            <span className="AdditionalInfoText">
              Убийств: <span className="ColoredText">{item.kills}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="MoreInfo">
        <span className="AdditionalInfoText">
          Points: <span className="ColoredText">+{item.points}</span>
        </span>
        <span className="AdditionalInfoText">
          Место: <span className="ColoredText">{item.place}</span>
        </span>
        <span className="AdditionalInfoText">
          Всего убийств: <span className="ColoredText">{item.total_kills}</span>
        </span>
      </div>
    </div>
  );
};
