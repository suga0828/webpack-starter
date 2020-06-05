import * as React from "react";

import { Input } from "./components/Input.tsx";
import { Button } from "./components/Button.tsx";

const bgPath = 'assets/bg.svg'

const sectionStyle = {
  backgroundImage: 'url('+ bgPath +')',
};

export const App = () => (
  <div style={sectionStyle} className="app">
    <img className="brand-image" src="./assets/brand.svg" alt="Shopify Brand"/>
    <section>
      <h2 className="section__title">Sell online with Shopify</h2>
      <p className="section__subtitle">Trusted by over 1,000,000 businesses worldwide</p>
      <div className="section__actions">
        <Input placeholder="Enter your email address" />
        <Button text="Start free trial" />
      </div>
      <p className="section__description">Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
      <img className="banner-image" src="./assets/banner.png" alt="Shopify platform"/>
    </section>
  </div>
);
