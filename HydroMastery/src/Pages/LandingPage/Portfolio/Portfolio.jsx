import './Portfolio.css';

import Images from './Images.json';
import { useEffect, useMemo, useState } from 'react';
import Options from './Options.json'
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
    
    const [currentCategory, setCurrentCategory] = useState('ALL');

    const categories = useMemo(() => (['ALL',...new Set(Images.map(i => i.Category))]),[]);

    const createCategories = () => {

        return <ul id="portfolio-flters">
            {categories.map(category => <li key={category} onClick={()=> setCurrentCategory(category)} className={currentCategory === category? "filter-active": ''}>{category}</li>)}
          </ul>
    }

    const createImages = (images) => {
        return images.map(image => (
        <div key={image.Title} className="col-lg-4 col-md-6 col-sm-12 portfolio-item">
            {/* <div className="portfolio-wrap">
              <img src={image.URL} className="img-fluid" alt={image.Title}/>
              <div className="portfolio-links">
                  <a href={image.URL} data-gallery="portfolioGallery" className="portfolio-lightbox" title={image.Title}><i className="bx bx-plus"></i></a>
                  <a href={image.Link} title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div> */}
            <div className="portfolio-wrap">
            <Card  className="custom-card" border={image.Border} style={{ width: '22rem'}}>
              <Card.Header style={{backgroundColor: image.BackgroundColor}}>{image.Category}</Card.Header>
              <Card.Body>
                <Card.Title>{image.Title}</Card.Title>
                <Card.Text>
                  {image.Price}
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
        </div>
      ))
    }

    const showingImages = useMemo(() => currentCategory === 'ALL'? Images: Images.filter(image => image.Category === currentCategory), [currentCategory])

    return <section id="pricing" className="portfolio">
    <div className="container">

      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>{Options.Title}</h2>
        <p>{Options.Subtitle}</p>
      </div>

      <div className="row" data-aos="fade-in">
        <div className="col-lg-12 d-flex justify-content-center">
          {createCategories()}
        </div>
      </div>

      <div className="row portfolio-container" data-aos="fade-up">
            {createImages(showingImages)}
      </div>

    </div>
  </section>
}