import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "./constant";
import { getInitialTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

export default function Game({setScore}) {
  const [tileList, setTileList] = useState(getInitialTileList);
  useMoveTile({tileList, setTileList, setScore});

  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, (i) => (
          <div className="grid-row" key={`grid-${i}`}>
            {times(MAX_POS, (j) => (
              <div className="grid-cell" key={`grid-${i}${j}`}></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map((item) => (
          <Tile key={`tile-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
}
