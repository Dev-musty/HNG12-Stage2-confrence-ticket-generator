import { useState } from 'react';
import './card.css';

const PricingSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState('free');

  const plans = [
    { id: 'free', name: 'Free', type: 'REGULAR ACCESS', price: '0', period: '20/52' },
    { id: 'vip', name: 'VIP ACCESS', type: 'VIP ACCESS', price: '150', period: '20/52' },
    { id: 'vvip', name: 'VVIP ACCESS', type: 'VVIP ACCESS', price: '150', period: '20/52' },
  ];

  return (
    <div className="pricing-container">
      {plans.map((plan) => (
        <div
          key={plan.id}
          onClick={() => setSelectedPlan(plan.id)}
          className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`}
        >
          <div className="pricing-content">
            <div className="pricing-header">
              <span className="price">
                {plan.id === 'free' ? 'Free' : `$${plan.price}`}
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

export default PricingSelector;