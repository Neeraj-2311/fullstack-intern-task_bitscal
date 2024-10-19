import styles from './Pricing.module.css';
import Link from 'next/link';
import { TbCircleCheckFilled } from "react-icons/tb";

const TrialCard = () => {
  return (
    <div className={styles.card}>   
        <div className={styles.priceContainer}>
            <div className={styles.header}>Trial</div>
            <div className={styles.priceDiv}>
                <p className={styles.price}>Try now</p>
                <p className={styles.priceHeading}>Get personalised template</p>
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
        <Link href="https://bitscale.ai/" className={styles.button}>Try Now</Link>
    </div>
  );
};

export default TrialCard;

const mainFeatures = [
    '25+ data sources',
    'GPT4, LinkedIn and others',
    'Access to slack community',
    '10+ templates to scale your outbound',
]
const otherFeatures = [
    'Explore product capabilities'
]