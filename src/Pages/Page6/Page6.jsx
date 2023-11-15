import React,{useRef,useState,useEffect } from 'react';
import './Page6.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Page6 = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <div className="page6-container">
      <div className="title-page6">what we did</div>

        <button className="page6-slider" onClick={() => {
            handleHorizantalScroll(elementRef.current, 25, 100, 10);
          }}>
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#f32525", fontSize: "2rem" }} />
        </button>
      <div className="page6-content" ref={elementRef}>
      
        <div className="cont1" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont2" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont3" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont4" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont5" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
        <div className="cont6" style={{ backgroundImage: "url('./rectphoto1.png')" }}>
          <div className="cont-name">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: 'rgba(242, 41, 41, 1)', transform: 'rotate(135deg)', height: '30px' }} />
            Surfweek
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
