import React from "react";

const index = () => {
  return (
    <div class="lFooter" data-footer="">
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
            src="/assets/img/index/footer/pc/1x/b-footer_ring.svg"
            width="534"
            height="534"
            alt=""
            loading="lazy"
            style="animation-play-state: paused;"
          />
          <picture>
            <source
              srcset="/assets/img/index/footer/sp/1x/b-footer_hand01.png"
              media="(max-width: 767px)"
            />
            <img
              class="lFooter-image-left"
              data-footer-hand-left=""
              src="/assets/img/index/footer/pc/1x/b-footer_hand01.png"
              width="462"
              height="367"
              alt=""
              loading="lazy"
              srcset="/assets/img/index/footer/pc/1x/b-footer_hand01.png 1x,/assets/img/index/footer/pc/2x/b-footer_hand01@2x.png 2x"
              style="transform: translate3d(26.1304px, 47.1105px, 0px) rotate(0.5779deg);"
            />
          </picture>
          <picture>
            <source
              srcset="/assets/img/index/footer/sp/1x/b-footer_hand02.png"
              media="(max-width: 767px)"
            />
            <img
              class="lFooter-image-right"
              data-footer-hand-right=""
              src="/assets/img/index/footer/pc/1x/b-footer_hand02.png"
              width="514"
              height="351"
              alt=""
              loading="lazy"
              srcset="/assets/img/index/footer/pc/1x/b-footer_hand02.png 1x,/assets/img/index/footer/pc/2x/b-footer_hand02@2x.png 2x"
              style="transform: translate3d(28.5806px, 47.1105px, 0px) rotate(-0.5779deg);"
            />
          </picture>
          <div class="lFooter-image-logo">
            <img
              src="/assets/img/common/b-logo-rara.svg"
              width="133"
              height="139"
              alt=""
              loading="lazy"
              srcset="/assets/img/common/b-logo-rara.svg 1x,/assets/img/common/b-logo-rara.svg 2x"
            />
          </div>
          <div class="lFooter-image-illust">
            <picture>
              <source
                srcset="/assets/img/index/footer/sp/1x/b-footer_illust02.png"
                media="(max-width: 767px)"
              />
              <img
                src="/assets/img/index/footer/pc/1x/b-footer_illust02.png"
                width="349"
                height="354"
                alt=""
                loading="lazy"
                srcset="/assets/img/index/footer/pc/1x/b-footer_illust02.png 1x,/assets/img/index/footer/pc/2x/b-footer_illust02@2x.png 2x"
              />
            </picture>
          </div>
        </div>
      </div>
      <footer class="cFooter" data-footer="">
        <div class="cFooter-container">
          <div class="cFooter-inner">
            <a
              class="cFooter-logo"
              href="http://www.ritsumei.ac.jp/"
              target="_blank"
            >
              <svg
                class="cFooter-logo-item"
                role="img"
                fill="currentColor"
                width="599"
                height="150"
              >
                <use xlink:href="/assets/img/common/svg-symbols.svg#svg-b-logo_ritsumeikan"></use>
              </svg>
            </a>
            <ul class="cFooter-list">
              <li
                class="cFlatText cFooter-item"
                data-flat-text=""
                style="padding: 0px 3.25px; transform: scaleX(1.05);"
              >
                <a
                  class="cLinkNoborder -isWhiteIcon cFooter-text"
                  href="http://www.ritsumei.ac.jp/privacypolicy/"
                  target="_blank"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li
                class="cFlatText cFooter-item"
                data-flat-text=""
                style="padding: 0px 4.25px; transform: scaleX(1.05);"
              >
                <a
                  class="cLinkNoborder -isWhiteIcon cFooter-text"
                  href="http://www.ritsumei.ac.jp/research/"
                  target="_blank"
                >
                  立命館大学（研究<span class="_cb1">・</span>産学連携
                  <span class="_cr1">）</span>
                </a>
              </li>
              <li
                class="cFlatText cFooter-item"
                data-flat-text=""
                style="padding: 0px 4.65px; transform: scaleX(1.05);"
              >
                <a
                  class="cLinkNoborder -isWhiteIcon cFooter-text"
                  href="http://www.ritsumei.ac.jp/research/member/"
                  target="_blank"
                >
                  立命館大学 研究部（学内者向け<span class="_cr1">）</span>
                </a>
              </li>
              <li
                class="cFlatText cFooter-item"
                data-flat-text=""
                style="padding: 0px 2.95px; transform: scaleX(1.05);"
              >
                <a
                  class="cLinkNoborder -isWhiteIcon cFooter-text"
                  href="http://www.ritsumei.ac.jp/features/r2030/"
                  target="_blank"
                >
                  学園ビジョンR2030
                </a>
              </li>
            </ul>
            <div class="cFooter-pagetop -inner">
              <div
                class="cPageTop -inner -isPlay -isProgressStop"
                data-pagetop=""
              >
                <a class="cPageTop-link" href="#top">
                  <div class="cPageTop-text">Page top</div>
                  <div class="cPageTop-line -bottom"></div>
                  <span class="cPageTop-arrow">
                    <svg role="img" fill="currentColor" width="18" height="10">
                      <use xlink:href="/assets/img/common/svg-symbols.svg#svg-b-footer_arrow"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="cFooter-pagetop -outer">
          <div class="cPageTop -outer -isPlay -isProgressStop" data-pagetop="">
            <a class="cPageTop-link" href="#top">
              <div class="cPageTop-text">Page top</div>
              <div class="cPageTop-line -bottom"></div>
              <span class="cPageTop-arrow">
                <svg role="img" fill="currentColor" width="18" height="10">
                  <use xlink:href="/assets/img/common/svg-symbols.svg#svg-b-footer_arrow"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
