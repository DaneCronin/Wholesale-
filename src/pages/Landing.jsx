import React from 'react'
import Background from '../assets/images/CatandCloud Bags.png';

const Landing = () => {
  return (
    <section className="max-w-full max-h-full">
      <div className="max-w-full mx-auto object-cover ">
      <img className="max-w-full max-h-full object-cover" src={Background}/>
      </div>

    </section>
  );
}

export default Landing;
