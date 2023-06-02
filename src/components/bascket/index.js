import React, { useEffect, useState } from "react";
import BascketCard from "./bascketCard";
import { createSocket } from "./services";
function BascketComponent() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(Date.now());

  const [socketData, setSocketData] = useState({
    socket: null,
    channal: null,
    state: null,
  });

  useEffect(() => {
    createSocket(setData, socketData, setSocketData);
  }, [socketData]);

  useEffect(() => {
    const t = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div className="flex flex-wrap">
      {data &&
        data.map((each, index) => (
          <BascketCard key={index} prop={each} t={time} />
        ))}
    </div>
  );
}

export default BascketComponent;
