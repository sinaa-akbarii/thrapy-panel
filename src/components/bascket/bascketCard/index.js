import React from "react";

function BascketCard({ prop, t }) {
  const time = {
    min: Math.floor((t / 1000 - prop.start_time) / 60),
    sec: Math.floor((t / 1000 - prop.start_time) % 60),
  };

  return (
    <div className="border shadow-md p-4 rounded-lg flex flex-col m-1">
      <span>lobby Id :</span>
      <ul className="list-disc ">
        {prop.lobbies &&
          prop.lobbies.map((each, index) => (
            <li key={index}>
              <span className="font-bold">{each}</span>
            </li>
          ))}
      </ul>
      <span>
        phase : <span className="font-bold">{prop.phase}</span>
      </span>
      <span>
        point : <span className="font-bold">{prop.point}</span>
      </span>
      <span>
        queue type: <span className="font-bold">{prop.queue_type}</span>
      </span>
      <span>
        start_time:{" "}
        <span className="font-bold">
          {/* {Math.floor((Date.now() / 1000 - prop.start_time) / 3600)}: */}
          {/* {Math.floor((Date.now() / 1000 - prop.start_time) / 60) % 60}: */}
          {time.min}&#39;{time.sec}&#34;
        </span>
      </span>
      <span>players</span>
      {prop?.players &&
        prop.players.map((player, index) => {
          return (
            <ul key={index} className="list-disc ">
              <li>
                username : <span className="font-bold">{player.username}</span>
              </li>
              <li>
                user ID : <span className="font-bold">{player._key}</span>
              </li>
              <li>
                xp : <span className="font-bold">{player.xp}</span>
              </li>
              {/* <hr className="w-1/2"></hr> */}
            </ul>
          );
        })}
    </div>
  );
}

export default BascketCard;
