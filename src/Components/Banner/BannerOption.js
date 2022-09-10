import React from "react";

const items = [
  {
    src: require("../../Assets/Banner/house_of_the_dragon.jpg"),
    altText: "film1",
    eng_title: "House of The Dragon",
    link: "https://www.youtube.com/watch?v=DotnJ7tTA34&ab_channel=HBOMax",
    key: 1,
  },
  {
    src: require("../../Assets/Banner/see_how_they_run.jpg"),
    altText: "film2",
    eng_title: "See How They Run",
    link: "https://www.youtube.com/watch?v=Q00qh7Ab6Mk&ab_channel=SearchlightPictures",
    key: 2,
  },
  {
    src: require("../../Assets/Banner/shehulk.jpg"),
    altText: "film3",
    eng_title: "She-Huk: Attorney at Law",
    link: "https://www.youtube.com/watch?v=u7JsKhI2An0&ab_channel=MarvelEntertainment",
    key: 3,
  },
];
function BannerOption({ thumbnail, title }) {
  let bannerOptionList = [];

  for (let index = 0; index < items.length; index++) {
    bannerOptionList.push(
      <div className="bannerOption">
        <img src={items[index].src} alt="" />

        <div className="bannerOption__description">
          <div className="eng-title">{items[index].eng_title}</div>

          <div className="bannerOption__trailer">
            <i className="trailerIcon fa-regular fa-circle-play"></i>
            <a href = {items[index].link}>Xem trailer</a>
          </div>
        </div>
      </div>
    );
  }
  return <>{bannerOptionList}</>;
}

export default BannerOption;
