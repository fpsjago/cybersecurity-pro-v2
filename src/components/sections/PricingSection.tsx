import { useState } from 'react';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';

const BASE_URL = import.meta.env.BASE_URL || '';

const tiers = [
  {
    name: 'Starter',
    price: { monthly: 99, annual: 79 },
    description: 'For small teams getting started with cybersecurity',
    features: [
      { name: 'Up to 50 endpoints', included: true },
      { name: 'Endpoint protection (EDR)', included: true },
      { name: 'Email security', included: true },
      { name: 'Basic threat intelligence', included: true },
      { name: '24/7 support', included: true },
      { name: 'API access', included: false },
      { name: 'Cloud security (CNAPP)', included: false },
      { name: 'SSO & MFA', included: false },
      { name: 'SIEM/SOAR', included: false },
      { name: 'Custom integrations', included: false }
    ],
    cta: { label: 'Start Free Trial', href: `${BASE_URL}/contact/` },
    popular: false
  },
  {
    name: 'Professional',
    price: { monthly: 299, annual: 249 },
    description: 'For growing businesses with advanced security needs',
    features: [
      { name: 'Up to 200 endpoints', included: true },
      { name: 'Endpoint protection (EDR)', included: true },
      { name: 'Email security', included: true },
      { name: 'Advanced threat intelligence', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Full API access', included: true },
      { name: 'Cloud security (CNAPP)', included: true },
      { name: 'SSO & MFA', included: true },
      { name: 'SIEM/SOAR', included: false },
      { name: 'Custom integrations', included: false }
    ],
    cta: { label: 'Start Free Trial', href: `${BASE_URL}/contact/` },
    popular: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 999, annual: 849 },
    description: 'For large organizations requiring complete security',
    features: [
      { name: 'Unlimited endpoints', included: true },
      { name: 'Endpoint protection (EDR)', included: true },
      { name: 'Email security', included: true },
      { name: 'Premium threat intelligence', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Full API access', included: true },
      { name: 'Cloud security (CNAPP)', included: true },
      { name: 'SSO & MFA', included: true },
      { name: 'Full SIEM/SOAR platform', included: true },
      { name: 'Unlimited custom integrations', included: true }
    ],
    cta: { label: 'Start Free Trial', href: `${BASE_URL}/contact/` },
    popular: false
  },
  {
    name: 'Custom',
    price: { monthly: 0, annual: 0 },
    description: 'Tailored solutions for unique security requirements',
    features: [
      { name: 'Custom endpoint limits', included: true },
      { name: 'All security solutions', included: true },
      { name: 'On-premise deployment option', included: true },
      { name: 'Custom threat intelligence feeds', included: true },
      { name: 'Dedicated security team', included: true },
      { name: 'Custom API development', included: true },
      { name: 'White-label options', included: true },
      { name: 'Custom SLA agreements', included: true },
      { name: 'Managed security services', included: true },
      { name: 'Full customization', included: true }
    ],
    cta: { label: 'Contact Sales', href: `${BASE_URL}/contact/` },
    popular: false
  }
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-12)' }}>
        <PricingToggle
          value={billingCycle}
          onChange={setBillingCycle}
          discount={20}
        />
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-6)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            {...tier}
            billingCycle={billingCycle}
          />
        ))}
      </div>
    </div>
  );
}
