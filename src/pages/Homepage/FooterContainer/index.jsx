import React from "react";

import "./index.css";

import PecuniaLogoBG from "../../../assets/images/pecunia_logo_bg.png";

const index = () => {
  return (
    <div id="footerContainer">
      <div class="lFooter-container">
        <div class="lFooter-inner">
          <div class="lFooter-particle -first"></div>
          <div class="lFooter-particle -second"></div>
          <div class="lFooter-particle -third"></div>
          <div class="lFooter-particle -forth"></div>
          <div class="lFooter-particle -fifth"></div>
          <div class="lFooter-particle -sixth"></div>
          <img
            class="lFooter-ring -isPlay"
            data-footer-ring=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/1x/b-footer_ring.svg"
            width="534"
            height="534"
            alt=""
            loading="lazy"
            style={{ animationPlayState: "play" }}
          />
          <picture>
            <source
              srcset="https://rara.ritsumei.ac.jp/assets/img/index/footer/sp/1x/b-footer_hand01.png"
              media="(max-width: 767px)"
            />
            <img
              class="lFooter-image-left"
              data-footer-hand-left=""
              src="https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/1x/b-footer_hand01.png"
              width="462"
              height="367"
              alt=""
              loading="lazy"
              srcset="https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/1x/b-footer_hand01.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/2x/b-footer_hand01@2x.png 2x"
              style={{
                transform:
                  "translate3d(25.4675px, 46.9724px, 0px) rotate(0.6055deg)",
              }}
            />
          </picture>
          <picture>
            <source
              srcset="https://rara.ritsumei.ac.jp/assets/img/index/footer/sp/1x/b-footer_hand02.png"
              media="(max-width: 767px)"
            />
            <img
              class="lFooter-image-right"
              data-footer-hand-right=""
              src="https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/1x/b-footer_hand02.png"
              width="514"
              height="351"
              alt=""
              loading="lazy"
              srcset="https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/1x/b-footer_hand02.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/2x/b-footer_hand02@2x.png 2x"
              style={{
                transform:
                  "translate3d(29.2297px, 46.9724px, 0px) rotate(-0.6055deg)",
              }}
            />
          </picture>
          <div class="lFooter-image-logo">
            <img
              src={PecuniaLogoBG}
              width="133"
              height="139"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="lFooter-image-illust">
            <picture>
              <source
                srcset="https://rara.ritsumei.ac.jp/assets/img/index/footer/sp/1x/b-footer_illust02.png"
                media="(max-width: 767px)"
              />
              <img
                src="/assets/img/index/footer/pc/1x/b-footer_illust02.png"
                width="349"
                height="354"
                alt=""
                loading="lazy"
                srcset="https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/1x/b-footer_illust02.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/footer/pc/2x/b-footer_illust02@2x.png 2x"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
