import React from 'react'

export default function about() {
  return (
    <div>
      <div className="container " id="abt">
        <button type="button" className="btn btn-dark btn-lg">About</button>
    </div>

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="{% static 'EM-2.jpg' %}" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block" id="EM">
                    <h5>Elon Musk:--</h5>
                    <p>Education is basically availaible for free, you can learn anything you want for free</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="{% static 'AE-2.jpg' %}" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block" id="AE">
                    <h5>Albert Einstien:--</h5>
                    <p>Education is what remains after one has forgotten what one has learned in school.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="{% static 'BF.png' %}" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Benjamin Franklin</h5>
                    <p> An investment in knowledge pays the best interest</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}
