import './card.css';
import PropTypes from 'prop-types';

const PricingSelector = ({ selectedPlan, setSelectedPlan }) => {
  

  const plans = [
    { id: 'FREE', name: 'Free', type: 'REGULAR ACCESS', price: '0', period: '20/52' },
    { id: 'VIP', name: 'VIP ACCESS', type: 'VIP ACCESS', price: '150', period: '20/52' },
    { id: 'VVIP', name: 'VVIP ACCESS', type: 'VVIP ACCESS', price: '150', period: '20/52' },
  ];
 
  
  return (
    <div className="pricing-container">
      {plans.map((plan) => (
        <div
          key={plan.id}
          onClick={() => setSelectedPlan(plan.id) }
          className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`}
        >
          <div className="pricing-content">
            <div className="pricing-header">
              <span className="price">
                {plan.id === 'FREE' ? 'Free' : `$${plan.price}`}
              </span>
            </div>
            <div className="plan-type">{plan.type}</div>
            <div className="plan-period">{plan.period}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
PricingSelector.propTypes = {
  selectedPlan: PropTypes.string.isRequired,
  setSelectedPlan: PropTypes.func.isRequired,
};
export default PricingSelector;