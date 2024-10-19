import styles from './Pricing.module.css';
import TrialCard from './TrialCard';
import GrowthCard from './GrowthCard';
import BoosterCard from './BoosterCard';
import EnterpriseCard from './EnterpriseCard';

const Pricing = ({active, wrap}) => {
  return (
    <div className={`${styles.container} ${!wrap && styles.scroll}`}>
      <TrialCard/>
      <GrowthCard active={active}/>
      <BoosterCard active={active}/>
      <EnterpriseCard/>
    </div>
  );
};

export default Pricing;