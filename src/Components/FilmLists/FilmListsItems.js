import React from "react";

function FilmListsItems(props) {
  const film1 = {
    title: "The Sandman",
    img: require("../../Assets/Banner/sandman2.jpg"),
  };
  const film2 = {
    title: "House of The Dragon",
    img: require("../../Assets/Banner/house_of_the_dragon.jpg"),
  };
  const film3 = {
    title: "See How They Run",
    img: require("../../Assets/Banner/see_how_they_run.jpg"),
  };
  const film4 = {
    title: "SheHulk: Attorney at Law",
    img: require("../../Assets/Banner/shehulk.jpg"),
  };
  const film5 = {
    title: "Prey",
    img: require("../../Assets/Banner/prey.jpg"),
  };
  const film6 = {
    title: "Bullet Train",
    img: require("../../Assets/Banner/bullet_train.jpg"),
  };
  const film7 = {
    title: "The Gray Man",
    img: require("../../Assets/Banner/the_gray_man.jpg"),
  };
  const listFilm = [];
  listFilm.push(film1, film2, film3, film4, film5, film6, film7);

  let listFilmItems = [];
  console.log(listFilm);
  for (let index = 0; index < listFilm.length; index++) {
    listFilmItems.push(
      <div className="filmListsItems__group" key={index}>
        <img src={listFilm[index].img} alt={listFilm[index].img} />
        <span className="filmListsItems__title">{listFilm[index].title}</span>
      </div>
    );
  }

  return <>{listFilmItems}</>;
}

export default FilmListsItems;
