import React from "react";
import FilmListsItems from "./FilmListsItems";
import "../../css/Homepage.css";

function FilmLists({ title, listFilms }) {
  let filmLists = [];

  for (let index = 0; index < 4; index++) {
    filmLists.push(
      <div key={index} className="filmLists__group">
        <div className="filmListsTitle__group">
          
            <div className="indicator"></div>
            <div className = "filmLists__title">Hôm nay có gì?</div>
            <i className="fa-sharp fa-solid fa-chevron-right"></i>
          
        </div>

        <div className="filmLists">
          <FilmListsItems listFilms={listFilms} />
        </div>
      </div>
    );
  }
  return <div className="filmListPage">{filmLists}</div>;
}

export default FilmLists;
