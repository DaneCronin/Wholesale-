import React from 'react';
import ThreeDScene from '../models/Coffeebag.jsx';




const OurCoffees = () => {
  return (
    <section className="w-full h-screen relative">
         <div>
          {/* 3d Coffee Bag */}
          <ThreeDScene />

      
      <div id="content">
        {/* Coffee description content here */}

      </div>
    </div>
      
    </section>
  )
}

export default OurCoffees;
