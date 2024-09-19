import React, { useState } from 'react';

const Services = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const portfolioItems = [
      { category: 'App', imgSrc: 'public/img/portfolio/health-thumb.jpg', title: 'Health', description: 'Health Services' },
      { category: 'Web', imgSrc: 'public/img/portfolio/gausala-2.jpg', title: 'Gaushala', description: 'Gaushala' },
      { category: 'App', imgSrc: 'public/img/portfolio/pla.jpg', title: 'Nature', description: 'Nature' },
      { category: 'Card', imgSrc: 'public/img/portfolio/education1.jpg', title: 'Education', description: 'Education' },
      { category: 'Web', imgSrc: 'public/img/portfolio/environment-day-generic_625x300_1528170066781-1.jpg', title: 'Environment Day', description: 'Environment Day' },
      { category: 'App', imgSrc: 'public/img/portfolio/DSC02294.JPG', title: 'App 3', description: 'App' },
      { category: 'Card', imgSrc: 'public/img/portfolio/med.jpg', title: 'Meditation', description: 'Meditation' },
      { category: 'Card', imgSrc: 'public/img/portfolio/prav.jpg', title: 'Pravachan', description: 'Pravachan' },
      { category: 'Web', imgSrc: 'public/img/portfolio/katha.jpg', title: 'Katha', description: 'Katha' },
    ];
  
    const filteredItems = portfolioItems.filter((item) => activeFilter === 'All' || item.category === activeFilter);
  
    return (
      <section id="portfolio" className="portfolio py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
              Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit 
              alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
  
          <div className="flex justify-center mb-8">
            <ul id="portfolio-filters" className="flex space-x-6">
              <li 
                className={`cursor-pointer font-medium ${activeFilter === 'All' ? 'text-gray-800' : 'text-gray-600'}`}
                onClick={() => setActiveFilter('All')}
              >
                All
              </li>
              <li 
                className={`cursor-pointer font-medium ${activeFilter === 'App' ? 'text-gray-800' : 'text-gray-600'}`}
                onClick={() => setActiveFilter('App')}
              >
                1
              </li>
              <li 
                className={`cursor-pointer font-medium ${activeFilter === 'Card' ? 'text-gray-800' : 'text-gray-600'}`}
                onClick={() => setActiveFilter('Card')}
              >
                2
              </li>
              <li 
                className={`cursor-pointer font-medium ${activeFilter === 'Web' ? 'text-gray-800' : 'text-gray-600'}`}
                onClick={() => setActiveFilter('Web')}
              >
                3
              </li>
            </ul>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={index}
                category={item.category}
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const PortfolioItem = ({ imgSrc, title, description }) => {
    return (
      <div className="portfolio-item">
        <div className="portfolio-wrap relative overflow-hidden rounded-lg shadow-lg group">
          <img src={imgSrc} className="w-full h-auto object-cover" alt={title} />
          <div className="portfolio-info absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p className="mb-4">{description}</p>
            <div className="flex space-x-4">
              <a href={imgSrc} className="text-white">
                <i className="bx bx-plus text-2xl"></i>
              </a>
              <a href="portfolio-details.html" className="text-white">
                <i className="bx bx-link text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Services