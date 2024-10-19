import styles from './Pricing.module.css';
import Link from 'next/link';
import { TbCircleCheckFilled, TbRosetteDiscount } from "react-icons/tb";

const GrowthCard = ({active}) => {
  return (
    <div className={styles.card}>   
        <div className={styles.priceContainer}>
            <div className={styles.header}>Growth</div>
            <div className={styles.priceDiv}>
                <p className={styles.price}>{active === 'monthly' ? '$229':'$2,748'} <span>{active === 'monthly' ? '/month':'/year'}</span></p>
                <div>
                    <span className={styles.offerTag}>
                        <span><TbRosetteDiscount/></span> 50% off
                    </span>
                    <span className={styles.offerValue}>{active==='monthly' ? '$459':'$5,472'}</span>
                </div>
            </div>
        </div>
        <ul className={styles.mainFeatures}>
            {mainFeatures.map((item, index) => (
                <li key={index} className={index===0 && styles.active}>
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
        <Link href="https://bitscale.ai/" className={styles.button}>Continue with Growth</Link>
    </div>
  );
};

export default GrowthCard;

const mainFeatures = [
    '8,000 Credits',
    'Webhooks, HTTP API',
    'Credit rollover (upto 2x plan credits)',
    'Outbound email integrations like Instantly, Smartlead',
    'Dedicated 3 hours from Bitscale expert'
]
const otherFeatures = [
    'Unlimited leads search',
    'Fully enriched 5000 leads',
    'Personalized outreach at scale'
]