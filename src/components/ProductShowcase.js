import React from 'react';

function ProductShowcase() {
  const products = [
    {
      name: 'OlyLife PEMF Mat',
      desc: 'Full-body Pulsed Electromagnetic Field therapy for sleep, pain & energy.',
      image: '/assets/images/pefm-mat.jpg', // Use real image name if you have it
      link: 'https://official.olylifeglobal.com/products/pemf-mat'
    },
    {
      name: 'Terahertz Wand',
      desc: 'Targeted Terahertz energy for rejuvenation, comfort, and cellular wellness.',
      image: '/assets/images/terahertz-wand.jpg',
      link: 'https://official.olylifeglobal.com/products/terahertz-wand'
    },
    {
      name: 'OlyLife Vascular Device',
      desc: 'Promotes healthy blood flow, supports circulation & overall vitality.',
      image: '/assets/images/vascular-device.jpg',
      link: 'https://official.olylifeglobal.com/products/vascular-device'
    }
  ];

  return (
    <section className="main-section">
      <h3>Featured Products</h3>
      <div className="product-list">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.desc}</p>
            <a className="cta" href={product.link} target="_blank" rel="noopener noreferrer" style={{marginTop: '1rem', display: 'inline-block'}}>Buy Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
