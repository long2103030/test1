import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const items = [
  {
    src: require("../../Assets/Banner/sandman1.jpg"),
    altText: "Slide 1",
    eng_title: "The Sandman",
    vi_title: "(Người cát)",
    trailer: "Xem trailer tại đây",
    link: "https://www.youtube.com/watch?v=83ClbRPRDXU&ab_channel=Netflix",
    key: 1,
  },
  {
    src: require("../../Assets/Banner/hotd.jpg"),
    altText: "Slide 2",
    eng_title: "House of The Dragon",
    vi_title: "(Gia Tộc Rồng)",
    link: "https://www.youtube.com/watch?v=Q00qh7Ab6Mk&ab_channel=SearchlightPictures",
    key: 2,
  },
  {
    src: require("../../Assets/Banner/see-how-they-run.jpg"),
    altText: "Slide 3",
    eng_title: "See How They Run",
    vi_title: "(Trốn Chạy)",
    link: "https://www.youtube.com/watch?v=u7JsKhI2An0&ab_channel=MarvelEntertainment",
    key: 3,
  },
];
function CarouselOption({ poster, eng_title, vi_title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.eng_title} captionText={item.vi_title} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselOption;
