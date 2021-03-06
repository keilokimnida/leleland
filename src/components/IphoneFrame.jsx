import React from 'react';
import { Icon } from '@iconify/react';

const IphoneFrame = ({ children, variation, topVariation="light", unselectable=true }) => {
  return (
    <figure className={`c-Device c-Device--iphone-x c-Device--${variation === "dark" ? "dark": "light"} c-Device--${unselectable ? "unselectable" : "selectable"}`}>
      <div className="c-Device__Frame">
        <div className="c-Device__Screen">
          {children}
        </div>
      </div>
      <div className={`c-Device__Top c-Device__Top--${topVariation === "dark" ? "dark" : "light"}`}>
        <p className="c-Device__Top-left">
          9:41
        </p>
        <p className="c-Device__Top-right">
          <Icon className="c-Device__Icon" icon="fluent:cellular-data-1-20-filled" />
          <Icon className="c-Device__Icon" icon="fluent:wifi-2-24-filled" />
          <Icon className="c-Device__Icon" icon="bi:battery-full" />
        </p>
      </div>
      <div className="c-Device__Stripe"></div>
      <div className="c-Device__Header"></div>
      <div className="c-Device__Sensors"></div>
      <div className="c-Device__Btns"></div>
      <div className="c-Device__Power"></div>
    </figure>
  );
};

export default IphoneFrame;