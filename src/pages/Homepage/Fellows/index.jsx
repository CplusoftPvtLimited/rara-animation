import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const index = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [SliderMove, setSliderMove] = useState(null);
  const [sliderRotate, setsliderRotate] = useState(150);
  const [FellowName, setFellowName] = useState(null);
  const [FellowDescription1, setFellowDescription1] = useState(null);
  const [FellowDescription2, setFellowDescription2] = useState(null);
  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-container");

    // sliderRotateElement.classList.add("-isCurrent");
    console.log(
      "🚀 ~ file:FELLOWS index.jsx:12 ~ useEffect ~ useEffect:",
      scrollContainer
    );
    let previousProgress = 0;

    ScrollTrigger.create({
      trigger: "#fellows_trigger",
      scroller: scrollContainer,
      start: "top +85%",
      onUpdate: (self) => {
        // console.log(
        //   "🚀 ~ file:FELLOWS index.jsx:21 ~ useEffect ~ onUpdate:",
        //   self.progress
        // );
        const progress = self.progress;
        let bigCirlceValue = 0;
        let circleBackground = 0;
        if (progress < 0.6) {
          circleBackground = progress * 3 * 100;
          bigCirlceValue = progress * 2.5 * 100;
          gsap.to(".lFellows-bg", {
            transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${circleBackground}, 0, 1)`,
          });
          if (bigCirlceValue < 25) {
            gsap.to(".lFellows-bg-inner", {
              scale: bigCirlceValue,
              top: "unset",
              bottom: "-100px",
            });
          }
        } else {
          bigCirlceValue = 25 - (progress - 0.6) * 1.4 * 100;
          gsap.to(".lFellows-bg", {
            transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
          });
          if (bigCirlceValue >= 0) {
            gsap.to(".lFellows-bg-inner", {
              scale: bigCirlceValue,
              top: "-100px",
              bottom: "inherit",
            });
          }
        }
      },
    });
  }, []);

  useEffect(() => {
    const sliderRotateElement = document.querySelector(
      `[data-rotate="${sliderRotate}"]`
    );
    setFellowName("Masayo Takahashi");
    setFellowDescription1("高橋 政代");
    setFellowDescription2("次世代の視覚再建");
    sliderRotateElement.classList.add("-isCurrent");
    console.log(
      "🚀 ~ file: index.jsx:17 ~ useEffect ~ sliderRotateElement:",
      sliderRotateElement
    );
  }, []);

  const handleMouseLeave = () => {
    const SliderMoveDiv = document.querySelector(".cSliderMouseStalker-circle");
    SliderMoveDiv.style.transform = "scale(0)";
  };

  function handleMouseMovement() {
    const { clientX, clientY } = event;
    const SliderMoveDiv = document.querySelector(".cSliderMouseStalker-circle");
    const prevSliderDiv = document.querySelector(
      ".cSliderMouseStalker-text.-prev"
    );
    const nextSliderDiv = document.querySelector(
      ".cSliderMouseStalker-text.-next"
    );

    const adjustedX = clientX + window.scrollX;
    console.log(
      "🚀 ~ file: index.jsx:91 ~ handleMouseMovement ~ adjustedX:",
      adjustedX
    );
    const adjustedY = clientY + window.scrollY;
    console.log(
      "🚀 ~ file: index.jsx:93 ~ handleMouseMovement ~ adjustedY:",
      adjustedY
    );
    SliderMoveDiv.style.transform = "translate(0px,0px)";
    if (adjustedX < 610) {
      setSliderMove(1);
      // console.log(
      //   "🚀 ~ file: index.jsx:96 ~ handleMouseMovement ~ SliderMove:",
      //   SliderMove
      // );
      prevSliderDiv.style.transform = "translate3d(0%,0%,0px)";
      nextSliderDiv.style.transform = "translateX(110%)";

      setCoordinates({ x: adjustedX, y: adjustedY });
    } else if (adjustedX > 870) {
      setSliderMove(2);
      nextSliderDiv.style.transform = "translate3d(0%,0%,0px)";
      prevSliderDiv.style.transform = "translateX(110%)";
      setCoordinates({ x: adjustedX, y: adjustedY });
    } else {
      SliderMoveDiv.style.transform = "scale(0)";
    }
  }

  async function handleSliderRotation() {
    const sliderElements = document.querySelectorAll(".lFellows-slider-item");
    sliderElements.forEach((element) => {
      element.classList.remove("-isCurrent");
    });
    // console.log(
    //   "🚀 ~ file: index.jsx:119 ~ handleSliderRotation ~ coordinates:",
    //   coordinates
    // );
    if (coordinates && SliderMove) {
      // console.log(
      //   "🚀 ~ file: index.jsx:119 ~ handleSliderRotation ~ SliderMove:",
      //   SliderMove
      // );
      if (SliderMove == 1) {
        const sliderRotateElement = document.querySelector(
          `[data-rotate="${sliderRotate - 15}"]`
        );

        FellowData(sliderRotate - 15);
        setsliderRotate(sliderRotate - 15);
        // console.log(
        //   "🚀 ~ file: index.jsx:120 ~ handleSliderRotation ~ sliderRotate:",
        //   sliderRotate
        // );
        sliderRotateElement.classList.add("-isCurrent");
      }
      if (SliderMove == 2) {
        const sliderRotateElement = document.querySelector(
          `[data-rotate="${sliderRotate + 15}"]`
        );

        FellowData(sliderRotate + 15);
        setsliderRotate(sliderRotate + 15);

        sliderRotateElement.classList.add("-isCurrent");
      }
    }
  }

  const FellowData = (rotation) => {
    const sliderRotation = rotation;
    console.log(
      "🚀 ~ file: index.jsx:169 ~ FellowData ~ sliderRotate:",
      sliderRotate
    );
    if (sliderRotation == 0) {
      setFellowName("Masayo Takahashi");
      setFellowDescription1("高橋 政代");
      setFellowDescription2("次世代の視覚再建");
    } else if (sliderRotation == 15) {
      setFellowName("Norihiro Sadato");
      setFellowDescription1("定藤 規弘");
      setFellowDescription2(
        "<p data-slider-info-study=''>ポストコロナ社会にWell-being をもたらす<br>社会性研究：ネットワーク型MRIシステム</p>"
      );
    } else if (sliderRotation == 30) {
      setFellowName("Masaaki Mochimaru");
      setFellowDescription1("持丸 正明");
      setFellowDescription2(
        "<p data-slider-info-study=''>スポーツトレーニングのDXに関する研究</p>"
      );
    } else if (sliderRotation == 45) {
      setFellowName("Satoshi Konishi");
      setFellowDescription1("小西 聡");
      setFellowDescription2(
        "<p data-slider-info-study=''>デジタル変革時代の未知との遭遇を開拓する<br>センサ・マイクロマシン研究</p>"
      );
    } else if (sliderRotation == 60) {
      setFellowName("Kota Suechika");
      setFellowDescription1("末近 浩太");
      setFellowDescription2(
        "<p data-slider-info-study=''>中東・イスラーム研究の方法論的革新を通した<br>新たな地域研究の開発</p>"
      );
    } else if (sliderRotation == 75) {
      setFellowName("Satoshi Tanaka");
      setFellowDescription1("田中 覚");
      setFellowDescription2(
        "<p data-slider-info-study=''>３次元計測ビッグデータの超高精細可視化と<br>VR応用、多層性ビッグデータの統合的可視化<br></p>"
      );
    } else if (sliderRotation == 90) {
      setFellowName("Tadahiro Taniguchi");
      setFellowDescription1("谷口 忠大");
      setFellowDescription2(
        "<p data-slider-info-study=''>次世代共生社会に向けた実世界人工知能を生む<br>記号創発システム科学創成</p>"
      );
    } else if (sliderRotation == 105) {
      setFellowName("Yuki Orikasa");
      setFellowDescription1("折笠 有基");
      setFellowDescription2(
        "<p data-slider-info-study=''>電池・水素エネルギーデバイス解析に基づく<br>革新的な反応原理の創世</p>"
      );
    } else if (sliderRotation == 120) {
      setFellowName("Sayaka Ogawa");
      setFellowDescription1("小川 さやか");
      setFellowDescription2(
        "<p data-slider-info-study=''>マルチモーダルなプラットフォーム<br>エスノグラフィの構築</p>"
      );
    } else if (sliderRotation == 135) {
      setFellowName("Takeshi Nakagawa");
      setFellowDescription1("中川 毅");
      setFellowDescription2(
        "<p data-slider-info-study=''>地質年代の「世界標準ものさし」の品質向上と、<br>気候変動の履歴の復元　—水月湖年縞に含まれる<br>花粉の化石の同位体比測定—</p>"
      );
    } else if (sliderRotation == 150) {
      setFellowName("Masayo Takahashi");
      setFellowDescription1("高橋 政代");
      setFellowDescription2(
        "<p data-slider-info-study=''>次世代の視覚再建</p>"
      );
    } else if (sliderRotation == 165) {
      setFellowName("Norihiro Sadato");
      setFellowDescription1("定藤 規弘");
      setFellowDescription2(
        "<p data-slider-info-study=''>ポストコロナ社会にWell-being をもたらす<br>社会性研究：ネットワーク型MRIシステム</p>"
      );
    } else if (sliderRotation == 180) {
      setFellowName("Masaaki Mochimaru");
      setFellowDescription1("持丸 正明");
      setFellowDescription2(
        "<p data-slider-info-study=''>スポーツトレーニングのDXに関する研究</p>"
      );
    } else if (sliderRotation == 195) {
      setFellowName("Satoshi Konishi");
      setFellowDescription1("小西 聡");
      setFellowDescription2(
        "<p data-slider-info-study=''>デジタル変革時代の未知との遭遇を開拓する<br>センサ・マイクロマシン研究</p>"
      );
    } else if (sliderRotation == 210) {
      setFellowName("Kota Suechika");
      setFellowDescription1("末近 浩太");
      setFellowDescription2(
        "<p data-slider-info-study=''>中東・イスラーム研究の方法論的革新を通した<br>新たな地域研究の開発</p>"
      );
    } else if (sliderRotation == 225) {
      setFellowName("Satoshi Tanaka");
      setFellowDescription1("田中 覚");
      setFellowDescription2(
        "<p data-slider-info-study=''>３次元計測ビッグデータの超高精細可視化と<br>VR応用、多層性ビッグデータの統合的可視化<br></p>"
      );
    } else if (sliderRotation == 240) {
      setFellowName("Tadahiro Taniguchi");
      setFellowDescription1("谷口 忠大");
      setFellowDescription2(
        "<p data-slider-info-study=''>次世代共生社会に向けた実世界人工知能を生む<br>記号創発システム科学創成</p>"
      );
    } else if (sliderRotation == 255) {
      setFellowName("Yuki Orikasa");
      setFellowDescription1("折笠 有基");
      setFellowDescription2(
        "<p data-slider-info-study=''>電池・水素エネルギーデバイス解析に基づく<br>革新的な反応原理の創世</p>"
      );
    } else if (sliderRotation == 270) {
      setFellowName("Sayaka Ogawa");
      setFellowDescription1("小川 さやか");
      setFellowDescription2(
        "<p data-slider-info-study=''>マルチモーダルなプラットフォーム<br>エスノグラフィの構築</p>"
      );
    } else if (sliderRotation == 285) {
      setFellowName("Takeshi Nakagawa");
      setFellowDescription1("中川 毅");
      setFellowDescription2(
        "<p data-slider-info-study=''>地質年代の「世界標準ものさし」の品質向上と、<br>気候変動の履歴の復元　—水月湖年縞に含まれる<br>花粉の化石の同位体比測定—</p>"
      );
    }
  };
  // console.log(
  //   "🚀 ~ file: index.jsx:120 ~ handleSliderRotation ~ sliderRotate:",
  //   sliderRotate
  // );

  console.log("🚀 ~ file: index.jsx:299 ~ index ~ FellowName:", FellowName);
  return (
    <div className="lFellows" id="fellows_trigger">
      <div
        className="lFellows-bg -view"
        data-fellows-bg=""
        data-scroll=""
        data-scroll-sticky=""
        data-scroll-target="[data-router-view]"
      >
        <div
          className="lFellows-bg-inner"
          data-fellows-bg-inner=""
          style={{ transform: "scale(0)" }}
        ></div>
      </div>
      <div
        className="lFellows-inner -view"
        id="fellows"
        data-fellows-inner=""
        data-scroll=""
      >
        <div className="lFellows-content" data-fellows-content="">
          <div className="lFellows-slider" data-fellows-slider="">
            <div className="cContainer -spLeftSmall -spRightSmall lFellows-title">
              <h2
                className="lFellows-title-inner"
                data-svg-title=""
                data-fellows-title=""
              >
                <svg viewBox="0 0 936.1 150.5">
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M100.9,49v51.2h-3.1C96.1,79,85.2,79.4,67.6,79.4H44.7v31.7c0,22.5,1.1,26.9,30.2,31.3v3.2H0.1v-3.2                c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h111.1l-3.4,33.2h-3.2c-1.3-27.1-18.9-28.1-41-28.1H44.5v62.8h22.9                C85,70.6,96,68.9,97.6,49L100.9,49L100.9,49z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M121,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h112.8L231.3,35h-3.1                c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.1v46.8h-3.1c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4                c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.1c-0.2,16-2.9,29-7.1,41.6H121V142.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M247,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3                v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H247V142.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M373,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3                v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H373V142.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M580.5,0.2c-43.9,0-76.7,29-76.7,73.7c0,45.4,32.6,74.1,76.9,74.1c44.1,0,76.9-28.8,76.9-73.9                C657.6,36.8,634.3,0.2,580.5,0.2z M583.2,143c-37.8,0-55-41.6-55-74.1c0-28.4,14.5-63.6,50.6-63.6c32.1,0,53.8,35.3,54.4,72.5                C633.2,107.8,617.9,143,583.2,143z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M706.1,150.4H704L669.8,33c-5.2-15.3-5.9-22.3-23.3-27.1V2.7h59.4v3.2c-25.6,3.8-20.4,14.5-15.3,31.7l22.1,74.6                l33-87.8C741.5,11.6,734.6,8.2,722,5.9V2.7h61.3v3.2c-22.9,3.2-20.2,13-16.4,25.2l26.7,83.2L810.2,67c3.6-10.5,13-36.8,13-46.8                c0-10.3-9.5-11.8-21-14.3V2.7H857v3.2c-12.6,0.8-18.9,8-23.3,19.1L819,65.1l-30.9,85.3h-2.3L748.3,33.6L706.1,150.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M927.4,39.7H924c-3.4-17-8.8-33.4-29.6-33.4c-13.4,0-24.6,9.2-24.6,23.1c0,36.3,66.2,35.1,66.2,77.5                c0,27.1-26.9,41.2-51,41.2c-12.8,0-26.3-3.8-37-10.7l-6.1-35.7h3.8c5.2,20.2,19.3,40.1,42.4,40.1c15.5,0,27.7-9.2,27.7-25.6                c0-37.4-64.3-34-64.3-76c0-24.6,24.4-40.1,46.8-40.1c10.7,0,21.4,3.1,30.7,8.2L927.4,39.7z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                </svg>
              </h2>
              <div
                className="cSubTitle -left -gray lFellows-title-sub"
                data-subtitle="true"
                data-fellows-subtitle=""
                style={{ overflow: "hidden" }}
              >
                <div
                  className="cFlatText cSubTitle-inner"
                  data-flat-text=""
                  style={{ padding: "0px 1.625px", transform: "scaleX(1.05)" }}
                >
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    フ
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    ェ
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    ロ
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    ー
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    紹
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    介
                  </span>
                </div>
              </div>
            </div>
            <div
              className="lFellows-slider-inner"
              data-slider-inner=""
              onMouseMove={handleMouseMovement}
              onMouseLeave={handleMouseLeave}
              onClick={handleSliderRotation}
            >
              <div
                className="cSliderMouseStalker"
                data-slider-stalker=""
                style={{ top: coordinates["y"], left: coordinates["x"] }}
              >
                <div className="cSliderMouseStalker-inner">
                  <div
                    className="cSliderMouseStalker-circle"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "rgb(255, 255, 255)",
                      transform: "scale(0, 0)",
                    }}
                    data-slider-stalker-circle=""
                  ></div>
                  <div className="cSliderMouseStalker-item">
                    <span
                      className="cSliderMouseStalker-text -next"
                      data-slider-stalker-next
                    >
                      NEXT
                    </span>
                    <span
                      className="cSliderMouseStalker-text -prev"
                      data-slider-stalker-prev
                    >
                      PREV
                    </span>
                    <span
                      className="cSliderMouseStalker-text -drag"
                      data-slider-stalker-drag
                    >
                      DRAG
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="lFellows-slider-list-continer"
                data-slider-list-inner=""
              >
                <ul
                  className="lFellows-slider-list"
                  data-slider-list=""
                  style={{ transform: `rotate(-${sliderRotate}deg)` }}
                >
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="0"
                    data-rotate="0"
                    style={{ transform: "rotate(0deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/masayo-takahashi/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/masayo-takahashi/"
                        data-name-en="Masayo Takahashi"
                        data-name-ja="高橋 政代"
                        data-study="次世代の視覚再建"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_takahashi.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_takahashi-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-2.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/01.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="1"
                    data-rotate="15"
                    style={{ transform: "rotate(15deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/norihiro-sadato/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/norihiro-sadato/"
                        data-name-en="Norihiro Sadato"
                        data-name-ja="定藤 規弘"
                        data-study="ポストコロナ社会にWell-being をもたらす<br>社会性研究：ネットワーク型MRIシステム"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_sadato.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_sadato-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-1.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-1.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="2"
                    data-rotate="30"
                    style={{ transform: "rotate(30deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/masaaki-mochimaru/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/masaaki-mochimaru/"
                        data-name-en="Masaaki Mochimaru"
                        data-name-ja="持丸 正明"
                        data-study="スポーツトレーニングのDXに関する研究"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_mochimaru.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_mochimaru-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="3"
                    data-rotate="45"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/satoshi-konishi/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/satoshi-konishi/"
                        data-name-en="Satoshi Konishi"
                        data-name-ja="小西 聡"
                        data-study="デジタル変革時代の未知との遭遇を開拓する<br>センサ・マイクロマシン研究"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_konishi.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_konishi-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-8.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-8.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="4"
                    data-rotate="60"
                    style={{ transform: "rotate(60deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/kota_suechika/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/kota_suechika/"
                        data-name-en="Kota Suechika"
                        data-name-ja="末近 浩太"
                        data-study="中東・イスラーム研究の方法論的革新を通した<br>新たな地域研究の開発"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/b-fellows_suechika.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/b-fellows_suechika-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/graphic01.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/graphic02.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="5"
                    data-rotate="75"
                    style={{ transform: "rotate(75deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/satoshi-tanaka/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/satoshi-tanaka/"
                        data-name-en="Satoshi Tanaka"
                        data-name-ja="田中 覚"
                        data-study="３次元計測ビッグデータの超高精細可視化と<br>VR応用、多層性ビッグデータの統合的可視化<br>"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_tanaka.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_tanaka-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-7.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-7.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="6"
                    data-rotate="90"
                    style={{ transform: "rotate(90deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/tadahiro-taniguchi/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/tadahiro-taniguchi/"
                        data-name-en="Tadahiro Taniguchi"
                        data-name-ja="谷口 忠大"
                        data-study="次世代共生社会に向けた実世界人工知能を生む<br>記号創発システム科学創成"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_taniguchi.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_taniguchi-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-6.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-6.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="7"
                    data-rotate="105"
                    style={{ transform: "rotate(105deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/yuki-orikasa/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/yuki-orikasa/"
                        data-name-en="Yuki Orikasa"
                        data-name-ja="折笠 有基"
                        data-study="電池・水素エネルギーデバイス解析に基づく<br>革新的な反応原理の創世"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_orikasa.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_orikasa-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-5.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-5.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="8"
                    data-rotate="120"
                    style={{ transform: "rotate(120deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/sayaka-ogawa/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/sayaka-ogawa/"
                        data-name-en="Sayaka Ogawa"
                        data-name-ja="小川 さやか"
                        data-study="マルチモーダルなプラットフォーム<br>エスノグラフィの構築"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_ogawa.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_ogawa-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-4.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/03.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="9"
                    data-rotate="135"
                    style={{ transform: "rotate(135deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/takeshi-nakagawa/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/takeshi-nakagawa/"
                        data-name-en="Takeshi Nakagawa"
                        data-name-ja="中川 毅"
                        data-study="地質年代の「世界標準ものさし」の品質向上と、<br>気候変動の履歴の復元　—水月湖年縞に含まれる<br>花粉の化石の同位体比測定—"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_nakagawa.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_nakagawa-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-3.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/02.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="10"
                    data-rotate="150"
                    style={{ transform: "rotate(150deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/masayo-takahashi/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/masayo-takahashi/"
                        data-name-en="Masayo Takahashi"
                        data-name-ja="高橋 政代"
                        data-study="次世代の視覚再建"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_takahashi.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_takahashi-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-2.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/01.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="11"
                    data-rotate="165"
                    style={{ transform: "rotate(165deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/norihiro-sadato/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/norihiro-sadato/"
                        data-name-en="Norihiro Sadato"
                        data-name-ja="定藤 規弘"
                        data-study="ポストコロナ社会にWell-being をもたらす<br>社会性研究：ネットワーク型MRIシステム"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_sadato.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_sadato-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-1.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-1.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="12"
                    data-rotate="180"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/masaaki-mochimaru/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/masaaki-mochimaru/"
                        data-name-en="Masaaki Mochimaru"
                        data-name-ja="持丸 正明"
                        data-study="スポーツトレーニングのDXに関する研究"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_mochimaru.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_mochimaru-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="13"
                    data-rotate="195"
                    style={{ transform: "rotate(195deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/satoshi-konishi/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/satoshi-konishi/"
                        data-name-en="Satoshi Konishi"
                        data-name-ja="小西 聡"
                        data-study="デジタル変革時代の未知との遭遇を開拓する<br>センサ・マイクロマシン研究"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_konishi.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_konishi-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-8.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-8.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="14"
                    data-rotate="210"
                    style={{ transform: "rotate(210deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/kota_suechika/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/kota_suechika/"
                        data-name-en="Kota Suechika"
                        data-name-ja="末近 浩太"
                        data-study="中東・イスラーム研究の方法論的革新を通した<br>新たな地域研究の開発"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/b-fellows_suechika.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/b-fellows_suechika-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/graphic01.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/03/graphic02.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="15"
                    data-rotate="225"
                    style={{ transform: "rotate(225deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/satoshi-tanaka/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/satoshi-tanaka/"
                        data-name-en="Satoshi Tanaka"
                        data-name-ja="田中 覚"
                        data-study="３次元計測ビッグデータの超高精細可視化と<br>VR応用、多層性ビッグデータの統合的可視化<br>"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_tanaka.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_tanaka-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-7.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-7.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="16"
                    data-rotate="240"
                    style={{ transform: "rotate(240deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/tadahiro-taniguchi/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/tadahiro-taniguchi/"
                        data-name-en="Tadahiro Taniguchi"
                        data-name-ja="谷口 忠大"
                        data-study="次世代共生社会に向けた実世界人工知能を生む<br>記号創発システム科学創成"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_taniguchi.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_taniguchi-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-6.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-6.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="17"
                    data-rotate="255"
                    style={{ transform: "rotate(255deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/yuki-orikasa/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/yuki-orikasa/"
                        data-name-en="Yuki Orikasa"
                        data-name-ja="折笠 有基"
                        data-study="電池・水素エネルギーデバイス解析に基づく<br>革新的な反応原理の創世"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_orikasa.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_orikasa-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-5.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-5.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="18"
                    data-rotate="270"
                    style={{ transform: "rotate(270deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/sayaka-ogawa/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/sayaka-ogawa/"
                        data-name-en="Sayaka Ogawa"
                        data-name-ja="小川 さやか"
                        data-study="マルチモーダルなプラットフォーム<br>エスノグラフィの構築"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_ogawa.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_ogawa-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-4.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/03.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                  <li
                    className="lFellows-slider-item"
                    data-slider-item=""
                    data-index="19"
                    data-rotate="285"
                    style={{ transform: "rotate(285deg)" }}
                  >
                    <a
                      className="lFellows-slider-item-inner"
                      href="https://rara.ritsumei.ac.jp/fellows/takeshi-nakagawa/"
                      draggable="false"
                    >
                      <div
                        className="lFellows-slider-item-content"
                        data-has-data=""
                        data-link="https://rara.ritsumei.ac.jp/fellows/takeshi-nakagawa/"
                        data-name-en="Takeshi Nakagawa"
                        data-name-ja="中川 毅"
                        data-study="地質年代の「世界標準ものさし」の品質向上と、<br>気候変動の履歴の復元　—水月湖年縞に含まれる<br>花粉の化石の同位体比測定—"
                      >
                        <div className="lFellows-slider-item-thumbnail">
                          <img
                            className="lFellows-slider-item-thumbnail-img"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_nakagawa.jpg"
                            alt=""
                            loading="lazy"
                          />
                          <img
                            className="lFellows-slider-item-thumbnail-img -cover"
                            src="https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/b-fellows_nakagawa-1.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="lFellows-slider-item-cover">
                        <span
                          className="lFellows-slider-item-coverItem -l02"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-3.png)",
                          }}
                        ></span>
                        <span
                          className="lFellows-slider-item-coverItem -l03"
                          style={{
                            backgroundImage:
                              "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/02.png)",
                          }}
                        ></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lFellows-slider-info" data-slider-info="">
              <div className="lFellows-slider-info-en">
                <p
                  className="lFellows-slider-info-en-text"
                  data-slider-info-name-en=""
                  style={{ transform: "translate(0px, 0%)" }}
                >
                  {FellowName}
                </p>
              </div>
              <div
                className="cFlatText lFellows-slider-info-textbox"
                data-flat-text=""
                style={{ padding: "0px 22.65px", transform: "scaleX(1.05)" }}
              >
                <div className="lFellows-slider-info-ja">
                  <p
                    className="lFellows-slider-info-ja-text"
                    data-slider-info-name-ja=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    {FellowDescription1}
                  </p>
                </div>
                <div
                  className="lFellows-slider-info-study"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: FellowDescription2 }}
                  ></div>
                </div>
              </div>
              <div className="lFellows-slider-info-more">
                <a
                  className="lFellows-slider-info-more-link"
                  href="https://rara.ritsumei.ac.jp/fellows/yuki-orikasa/"
                  data-slider-info-link=""
                  style={{ transform: "translate(0px, 0%)" }}
                >
                  VIEW DETAIL
                  <svg
                    className="lFellows-slider-info-more-icon"
                    role="img"
                    fill="currentColor"
                    width="17"
                    height="15"
                  ></svg>
                </a>
              </div>
              <ul className="lFellows-slider-dots" data-slider-dots="">
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item -isCurrent"></li>
                <li className="lFellows-slider-dots-item"></li>
                <li className="lFellows-slider-dots-item"></li>
              </ul>
            </div>
            <div className="lFellows-btn">
              <a className="lFellows-btn-link" href="/fellows">
                VIEW ALL FELLOWS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
