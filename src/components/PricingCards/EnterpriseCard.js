import styles from './Pricing.module.css';
import Link from 'next/link';
import { TbCircleCheckFilled } from "react-icons/tb";

const EnterpriseCard = () => {
  return (
    <div className={styles.card}>   
        <div className={styles.priceContainer}>
            <div className={styles.header}>Enterprise</div>
            <div className={styles.priceDiv}>
                <p className={styles.price}>Contact Us</p>
                <p className={styles.priceHeading}>For individual pricing</p>
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

export default EnterpriseCard;

const mainFeatures = [
    'Dta privacy certification',
    'Priority Support',
    'Dedicated Bitscale expert',
    'Private Slack Channel',
    'Collaborate workspaces and templates'
]
const otherFeatures = [
    'Perfect for High-Volume End-to-End CRM Data Enrichment',
    'Unlimited list of leads with unlimited data points'
]