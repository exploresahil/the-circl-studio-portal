import Image from "next/image";
import { MouseParallax } from "react-just-parallax";

function BackgroundAnimation() {
  return (
    <div className="background-animation">
      <MouseParallax
        enableOnTouchDevice
        isAbsolutelyPositioned
        strength={0.02}
        zIndex={4}
      >
        <div className="circl-bg circl-red move" />
      </MouseParallax>
      <MouseParallax
        enableOnTouchDevice
        isAbsolutelyPositioned
        strength={0.05}
        zIndex={4}
      >
        <div className="circl-bg circl-blue move" />
      </MouseParallax>
      <MouseParallax
        enableOnTouchDevice
        isAbsolutelyPositioned
        strength={0.1}
        zIndex={4}
      >
        <div className="infinity-one move">
          <Image
            className="procohat-infinity"
            src="/assets/logos/Infinity.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="the circl studio logo"
          />
        </div>
      </MouseParallax>
      <MouseParallax
        enableOnTouchDevice
        isAbsolutelyPositioned
        strength={0.2}
        zIndex={4}
      >
        <div className="infinity-two move">
          <Image
            className="procohat-infinity"
            src="/assets/logos/Infinity.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="the circl studio logo"
          />
        </div>
      </MouseParallax>
    </div>
  );
}

export default BackgroundAnimation;
