import Image from "next/image";

import { RiLoginCircleFill } from "react-icons/ri";

function ChientLoginPage() {
  return (
    <main className="main-container">
      <div className="clients-main-container">
        <div className="ChientLoginPage-form-container">
          <form action="#">
            <div className="circl-logo">
              <Image
                src="/assets/logos/tcs-up-down-version-white.svg"
                fill
                style={{ objectFit: "contain" }}
                alt="the circl studio logo"
              />
            </div>
            <div className="line" />
            <div className="login-title">
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
            <button type="submit" className="default-button">
              Login
              <RiLoginCircleFill size={24} className="react-icon" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ChientLoginPage;
