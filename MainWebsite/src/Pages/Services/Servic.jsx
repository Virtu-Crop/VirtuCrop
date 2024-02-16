import React, { useState, useEffect } from 'react';
import "./Services.scss";
import { faSliders } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  // List of items and thumbnails
  const items = document.querySelectorAll('.slider .list .item');
  const thumbnails = document.querySelectorAll('.thumbnail .item');

  // Use state to manage active item index
  const [itemActive, setItemActive] = useState(0);

  const countItem = items.length - 1;

  const nextSlide = () => {
    if (itemActive !== countItem) {
      setItemActive(itemActive + 1);
      showSlider();
    } else if (itemActive === countItem) {
      setItemActive(0);
      showSlider();
    }

  }
  const prevSlide = () => {
    if (itemActive !== 1) {
      setItemActive(itemActive - 1);
      showSlider();
    } else if (countItem == 0) {
      setItemActive(countItem);
      showSlider();
    }
  }

  // Function to show slider
  function showSlider() {
    // Remove active class from old item and thumbnail
    document.querySelector('.slider .list .item.active')?.classList.remove('active');
    document.querySelector('.thumbnail .item.active')?.classList.remove('active');

    // Add active class to new item and thumbnail
    items[itemActive]?.classList.add('active');
    thumbnails[itemActive]?.classList.add('active');
  }

  // Click event for thumbnails
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      setItemActive(index); // Update itemActive state
    });
  });



  return (
    <>
      <div className="slider">
        {/* <!-- list Items --> */}
        <div className="list">
          <div className="item active">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">
              {/* <p>design</p> */}
              <h2>Software Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">
              <p>design</p>
              <h2>Slider 02</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">
              <p>design</p>
              <h2>Slider 03</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">
              <p>design</p>
              <h2>Slider 04</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">
              <p>design</p>
              <h2>Slider 05</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">
              <p>design</p>
              <h2>Slider 06</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem  dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- button arrows --> */}
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>{"<"}</button>
          <button id="next" onClick={nextSlide}>{">"}</button>
        </div>
        {/* <!-- thumbnail --> */}
        {/* <div className="thumbnail">
          <div class="item active">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src="../../src/assets/tech/bcd.jpg" />
            <div className="content">Name Slider</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Services;
