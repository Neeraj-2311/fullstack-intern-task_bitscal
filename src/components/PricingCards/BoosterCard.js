import styles from './Pricing.module.css';
import Link from 'next/link';
import { TbCircleCheckFilled, TbRosetteDiscount } from "react-icons/tb";

const BoosterCard = ({active}) => {
  return (
    <div className={`${styles.card} ${styles.booster}`}>
        <div className={styles.priceContainer}>
            <div className={styles.header}>Booster <span>Popular</span></div>
            <div className={styles.priceDiv}>
                <p className={styles.price}>{active==='monthly' ? '$499':'$5,988'} <span>{active==='monthly' ? '/month':'/year'}</span></p>
                <div>
                    <span className={styles.offerTag}>
                        <span><TbRosetteDiscount/></span> 50% off
                    </span>
                    <span className={styles.offerValue}>{active==='monthly'?'$999':'$11,988'}</span>
                </div>
            </div>
        </div>
        <ul className={styles.mainFeatures}>
            {mainFeatures.map((item, index) => (
                <li key={index}>
                  <span><TbCircleCheckFilled/></span>
                  {item}
                </li>
            ))}
        </ul>
        <hr className={styles.hr}/>
        <ul className={styles.otherFeatures}>
            {otherFeatures.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <Link href="https://bitscale.ai/" className={styles.button}>Continue with Booster</Link>
    </div>
  );
};

export default BoosterCard;

const mainFeatures = [
    '25,000 Credits',
    'Webhook, HTTP API',
    'Credit rollover (upto 2x plan credits)',
    'Outbound email Integrations like Instantly, Smartlead.',
    'Dedicated 3 hours from Bitscale expert',
    'Advanced models like Claude Sonnet',
    'Dedicated 8 hours from Bitscale expert',
    '2 way Hubspot integration'
]
const otherFeatures = [
    'Unlimited leads search',
    'Fully enriched 15000 leads',
    'Personalized outreach at scale'
]