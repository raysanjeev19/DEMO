import React from "react";
import "./body.css"

const Body = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/us/business/solutions/industries/education/101321/Technology-in-Education_HD01_HOME-KV-CAROUSEL.jpg?imwidth=1366"
            className="d-block w-100 h-100 object-fit-cover"
            alt="..."
          />
           <div className="carousel-caption-wrapper">
             <div className="carousel-caption" style={{fontSize:28,margin:100}} >Reliable Engineering Takes Many Forms</div> 
             <div className="carousel-caption" style={{fontSize:20}}>Donec ut ultricies ante. Proin at sodales risus. Fusce tempor dui id convallis sollicitudin. Mauris vitae elit elementum, faucibus libero a, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div> 
             </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.topgear.com.ph/topgear/images/2020/10/01/edsa-busway-4-1601543794.jpg"
            className="d-block w-100 h-100 object-fit-cover"
            alt="..."
          />
           <div className="carousel-caption-wrapper">
              <div className="carousel-caption" style={{fontSize:28,margin:100}} >Reliable Engineering Takes Many Forms</div> 
             <div className="carousel-caption" style={{fontSize:20}}>Donec ut ultricies ante. Proin at sodales risus. Fusce tempor dui id convallis sollicitudin. Mauris vitae elit elementum, faucibus libero a, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div> 
             </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://set-edu.com/wp-content/uploads/2024/02/cover.jpg"
            className="d-block w-100 h-100 object-fit-cover"
            alt="..."
          />
              <div className="carousel-caption-wrapper">
             <div className="carousel-caption" style={{fontSize:28,margin:100}} >Reliable Engineering Takes Many Forms</div> 
             <div className="carousel-caption" style={{fontSize:20}}>Donec ut ultricies ante. Proin at sodales risus. Fusce tempor dui id convallis sollicitudin. Mauris vitae elit elementum, faucibus libero a, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div> 
             </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Body;
