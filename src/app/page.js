'use client'
import Pricing from "@/components/PricingCards/Pricing";
import { CiGrid2V, CiGrid41 } from "react-icons/ci"; // Icons for layout toggle
import { useState } from "react";

export default function Home() {

  const [active, setActive] = useState('monthly');
  const [wrap, setWrap] = useState(true);

  return (
    <div className="main">
      {/* Toggle container for switching between Monthly and Annual pricing */}
      <div className={'toggleContainer'}>
        <button
          className={`toggleButton ${active === 'monthly' ? 'toggleActive' : ''}`}
          onClick={() => setActive('monthly')}
        >
          Monthly
        </button>
        <button
          className={`toggleButton ${active === 'annual' ? 'toggleActive' : ''}`}
          onClick={() => setActive('annual')}
        >
          Annual
        </button>
      </div>
      {/* Button for toggling layout presentation between "Scrollable" and "flex" views */}
      <div className={'modeSwitch'}>
        {wrap ? 
          <button onClick={() => setWrap(!wrap)}>
            <CiGrid2V/>
          </button>
          :
          <button onClick={() => setWrap(!wrap)}>
            <CiGrid41/>
          </button>
        }
      </div>
      {/* Pricing component that adjusts based on payment cycle state and layout mode */}
      <Pricing active={active} wrap={wrap}/>
    </div>
  );
}