import React from "react";

function FilmNewsItems({ listNews }) {
  const news = [
    {
      title: "Màn chào sân của Chúa tể Cõi Mộng",
      img: require("../../Assets/Banner/article1.jpg"),
      time: "21/08/2022",
      content: "Mùa một 'The Sandman' tạo ấn tượng tốt nhờ sự trung thành nguyên tác và diễn xuất của dàn diễn viên thực lực. Song series vẫn còn nhiều điểm trừ không đáng có."
    },
    {
      title: "Kinh phí 'Joker 2' tăng gấp ba phần một",
      img: require("../../Assets/Banner/article2.jpg"),
      time: "20/08/2022",
      content: "'Joker: Folie à Deux', ra mắt năm 2024, có kinh phí xấp xỉ 150 triệu USD, gấp ba chi phí sản xuất phần một - 55 triệu USD."
    }
  ];
  let filmNewsItemsList = [];

  for (let index = 0; index < 2; index++) {
    filmNewsItemsList.push(
      <div className="filmNewsItems__group">
        <img src={news[index].img} alt=""/>
        <div className="filmNewsItems__info">
          <div className="filmNewsItems__title">{news[index].title}</div>
          <div className="filmNewsItems__date">{news[index].time}</div>
          <div className="filmNewsItems__content">{news[index].content}</div>
        </div>
      </div>
    );
  }
  return <>{filmNewsItemsList}</>;
}

export default FilmNewsItems;
