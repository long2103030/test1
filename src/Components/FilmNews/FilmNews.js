import React from "react";
import "../../css/Homepage.css";
import FilmNewsItems from "./FilmNewsItems";

function FilmNews(props) {
  return (
    <div className="filmNews">
      <div className="filmListsTitle__group">
          
          <div className="indicator"></div>
          <div className = "filmLists__title">Tin nổi bật</div>
          <i className="fa-sharp fa-solid fa-chevron-right"></i>
        
      </div>

      <div className="filmNews__list">
        <FilmNewsItems />
      </div>

      <div className="filmNews__buttons">
        <button>Nổi bật</button>
        <button>Phim</button>
        <button>Chương trình truyền hình</button>
        <button>Sao</button>
      </div>
    </div>
  );
}

export default FilmNews;
