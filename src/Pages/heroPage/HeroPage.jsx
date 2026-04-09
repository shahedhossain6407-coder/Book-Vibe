import React from 'react';
import imageHero from '../../../assets/hero_img.jpg'

const HeroPage = () => {
    return (
        <div className='container mx-auto '>
            <div className="hero bg-base-200 min-h-[70vh] my-3">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={imageHero}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold mb-20">Books to freshen up <br /> your bookshelf</h1>
     
      <button className="btn btn-success">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HeroPage;