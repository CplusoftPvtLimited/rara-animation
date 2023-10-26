import React, { useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Footer from "../footer";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger, Draggable);
// Define the HOC
const HocCustomScrollbar = (WrappedComponent) => {
  const CustomScrollbar = (props) => {
    const [scrollY, setscrollY] = useState(0);
    let scrollPos = 0;
    useEffect(() => {
      const scrollContainer = document.querySelector(".custom-container");
      const scrollbar = document.querySelector(".c-scrollbar_thumb");

      let touchStartPos = 0;
      let touchScrollPos = 0;

      function updateScrollbar() {
        const scrollbarHeight =
          (scrollContainer.offsetHeight * scrollContainer.offsetHeight) /
          scrollContainer.scrollHeight;

        gsap.set(scrollbar, {
          height: scrollbarHeight,
          y:
            (scrollPos * (scrollContainer.offsetHeight - scrollbarHeight)) /
            (scrollContainer.scrollHeight - scrollContainer.offsetHeight),
        });
      }

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
          if (arguments.length) {
            scrollPos = value;
            scrollContainer.scrollTop = scrollPos; // setter
          }
          return scrollContainer.scrollTop; // getter
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: "transform",
      });

      let firstScroll = true;
      let debounceTimeout = null; // For debouncing the scroll event

      scrollContainer.addEventListener(
        "wheel",
        (e) => {
          clearTimeout(debounceTimeout); // Clear previous timeout

          if (window.location.pathname == "/" && firstScroll && e.deltaY > 0) {
            scrollPos = 60;
            debounceTimeout = setTimeout(() => {
              firstScroll = false; // Set to false after a pause in scroll actions
            }, 100); // 100ms pause to consider as a separate action
          } else {
            scrollPos = gsap.utils.clamp(
              0,
              scrollContainer.scrollHeight - scrollContainer.offsetHeight,
              scrollPos + e.deltaY
            );
          }

          // Reset the firstScroll flag when reaching the top.
          if (scrollPos === 0 && e.deltaY < 0) {
            firstScroll = true;
          }

          gsap.to(scrollContainer, {
            scrollTop: scrollPos,
            overwrite: "auto",
            onUpdate: updateScrollbar,
            duration: 0.1,
            scrub: 1,
            onComplete: () => {
              ScrollTrigger.update();
              // console.log("SCROLL TRIGGER UPDATE ---------", scrollPos);
            },
          });

          e.preventDefault();
        },
        { passive: false }
      );

      // Adjusted touch event handling
      scrollContainer.addEventListener(
        "touchstart",
        (e) => {
          touchStartPos = e.touches[0].clientY;
          touchScrollPos = scrollPos;
        },
        { passive: true }
      );
      let scrollDebounceTimeout = null;
      scrollContainer.addEventListener(
        "touchmove",
        (e) => {
          clearTimeout(debounceTimeout); // Clear previous timeout

          const touchY = e.touches[0].clientY;
          const deltaY = touchY - touchStartPos;
          const sensitivity = 1.5;
          const newScrollPos = gsap.utils.clamp(
            0,
            scrollContainer.scrollHeight - scrollContainer.offsetHeight,
            touchScrollPos - deltaY * sensitivity
          );

          // Limit scroll to 60 when at the top
          if (newScrollPos < 60) {
            scrollPos = newScrollPos;
          } else if (scrollPos < 60 && deltaY > 0) {
            scrollPos = gsap.utils.clamp(
              0,
              60,
              scrollPos + deltaY * sensitivity
            );
          } else {
            scrollPos = gsap.utils.clamp(
              0,
              scrollContainer.scrollHeight - scrollContainer.offsetHeight,
              newScrollPos
            );
          }

          scrollPos = newScrollPos;
          gsap.to(scrollContainer, {
            scrollTop: scrollPos,
            overwrite: "auto",
            onUpdate: updateScrollbar,
            duration: 0.1,
            ease: "power1.inOut",
            onComplete: () => {
              ScrollTrigger.update();
            },
          });

          e.preventDefault();
        },
        { passive: false }
      );

      // Adjusted scrollbar drag event

      window.addEventListener("resize", updateScrollbar);
      updateScrollbar();

      Draggable.create(scrollbar, {
        type: "y",
        bounds: scrollbar.parentNode,
        onPress: function () {
          this.startY = this.y;
          this.startScroll = scrollPos;
        },
        onDrag: function () {
          scrollPos =
            this.startScroll +
            ((this.y - this.startY) *
              (scrollContainer.scrollHeight - scrollContainer.offsetHeight)) /
              (scrollContainer.offsetHeight - scrollbar.offsetHeight);
          gsap.to(scrollContainer, {
            scrollTop: scrollPos,
            overwrite: "auto",
            onUpdate: updateScrollbar,
            duration: 0.1,
            onComplete: () => ScrollTrigger.update(),
          });
        },
      });

      ScrollTrigger.addEventListener("refreshInit", () => {
        gsap.set(scrollContainer, { overflowY: "scroll" });
      });

      ScrollTrigger.addEventListener("refresh", () => {
        gsap.set(scrollContainer, { overflowY: "hidden" });
      });

      ScrollTrigger.refresh();
      // Return the WrappedComponent with the clickCount prop and the onClick handler
    }, []);
    return (
      <div className="scrollContainer">
        <div className="custom-container">
          <WrappedComponent {...props} />
          <FooterRoute />
        </div>

        <span className="c-scrollbar">
          <span
            className="c-scrollbar_thumb"
            style={{ transform: "translate(0, 0)" }}
          ></span>
        </span>
      </div>
    );
  };

  // Return the enhanced component
  return CustomScrollbar;
};

function FooterRoute() {
  const location = useLocation();
  const isInStudentRoute = location.pathname.includes("/student");
  return isInStudentRoute ? null : <Footer />;
}

export default HocCustomScrollbar;
