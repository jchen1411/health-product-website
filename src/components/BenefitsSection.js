import React from 'react';
import { FaCheckCircle, FaLeaf, FaHandsHelping, FaHeartbeat } from 'react-icons/fa';

function BenefitsSection() {
  const benefits = [
    { icon: <FaCheckCircle color="#35a3e2" style={{marginRight: 8}} />, text: "Advanced, evidence-based technology" },
    { icon: <FaHeartbeat color="#35a3e2" style={{marginRight: 8}} />, text: "Supports energy, pain relief & sleep" },
    { icon: <FaLeaf color="#35a3e2" style={{marginRight: 8}} />, text: "Natural, drug-free & safe for all ages" },
    { icon: <FaHandsHelping color="#35a3e2" style={{marginRight: 8}} />, text: "Trusted by clinics and home users" }
  ];
  return (
    <section className="main-section">
      <h3>Why OlyLife?</h3>
      <ul className="benefits-list">
        {benefits.map((b, idx) => (
          <li key={idx}>{b.icon} {b.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default BenefitsSection;
