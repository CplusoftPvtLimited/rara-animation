import React, { useEffect, useRef, useState } from "react";
import "./canvasLoader.css";

function CanvasLoader({ onComplete }) {
  const canvasRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const animationSpeed = 6;
    const lineLength = 500;

    let x = document.documentElement.clientWidth; // Start from the top-right corner
    let y = -280; // Start from the top-right corner

    console.log("x: ", x);
    function animate() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - lineLength, y + lineLength); // Diagonal line to the bottom-left corner
      context.lineWidth = 1; // Line width
      context.stroke();
      x -= animationSpeed;
      y += animationSpeed;

      if (x <= canvasWidth - lineLength || y >= canvasHeight) {
        setAnimationComplete(true);
        onComplete();
      } else {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }, [onComplete]);

  return (
    <div
      className={`canvas-loader-container ${animationComplete ? "hidden" : ""}`}
    >
      <canvas
        ref={canvasRef}
        className="canvas-loader"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </div>
  );
}

export default CanvasLoader;
