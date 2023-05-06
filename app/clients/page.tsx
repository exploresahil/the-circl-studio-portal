"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import BackgroundAnimation from "@/components/BackgroundAnimation";

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

function Clients() {
  const [isGlowVisible, setIsGlowVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setIsGlowVisible(true);
  };

  const handleMouseLeave = () => {
    setIsGlowVisible(false);
  };

  const glowStyle = {
    display: isGlowVisible ? "block" : "none",
    position: "absolute" as Position,
    width: "500px",
    height: "500px",
    top: `${cursorPosition.y}px`,
    left: `${cursorPosition.x}px`,
  };

  return (
    <div className="portal-main-container ">
      <div
        className="login-card-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="circl-glow" style={glowStyle} />
        <div className="login-left-card">
          <Link href="/" title="Go to Home Page">
            <div className="circl-logo">
              <Image
                src="/assets/logos/tcs-up-down-version-white.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="the circl studio logo"
              />
            </div>
          </Link>
          <h2>Clients</h2>
        </div>
        <div className="login-right-card">
          <form action="#">
            <div className="login-title">
              <h2>Login</h2>
              <p>Please enter your email and password to access your files</p>
            </div>
            <input
              className="userName"
              type="text"
              placeholder="Username"
              required
            />
            <input
              className="password"
              type="password"
              placeholder="Password"
              required
            />
            <button>login</button>
          </form>
        </div>
        <div className="finger-texture">
          <Image
            className="texture"
            src="/assets/texture/Metal003_1K_Roughness.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="the circl studio logo"
          />
        </div>
      </div>
      <BackgroundAnimation />
      <div className="aurora"></div>
    </div>
  );
}

export default Clients;
