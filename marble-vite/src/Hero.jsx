import { useState, useEffect, useRef } from "react";
import { Stethoscope, Users, Info, MoveDown } from "lucide-react";
import "./Hero.css";

const slides = [
  {
    type: "video",
    src: "https://marblemedicals.com/wp-content/uploads/2023/09/video-one.mp4",
  },
  {
    type: "image",
    src: "https://marblemedicals.com/wp-content/uploads/2023/10/banner2.jpg",
  },
  {
    type: "image",
    src: "https://marblemedicals.com/wp-content/uploads/2023/10/banner2.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const goTo = (index) => setCurrent(index);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (slides[current].type === "image") {
      intervalRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current]);

  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <section className="hero-section">
      <div className="navbar">
        <img
          src="https://marblemedicals.com/wp-content/uploads/2023/08/logo.svg"
          alt="logo"
          className="logo"
        />

        <div className="nav-links">
          <div className="nav-item">
            <Stethoscope size={18} />
            <span>Doctors</span>
          </div>
          <div className="nav-item">
            <Users size={18} />
            <span>Departments</span>
          </div>
          <div className="nav-item">
            <Info size={18} />
            <span>About us</span>
          </div>
        </div>

        <button className="appointment-btn">Book an Appointment</button>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className="slide"
          style={{
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 10 : 0,
          }}
        >
          {slide.type === "video" ? (
            <video
              ref={index === current ? videoRef : null}
              src={slide.src}
              muted
              autoPlay
              playsInline
              onEnded={nextSlide}
              className="media"
            />
          ) : (
            <img src={slide.src} alt="hero" className="media" />
          )}
          <div className="gradient-overlay" />
        </div>
      ))}

      <div className="hero-content">
        <h1 className="hero-title">
          World-class medical
          <br />
          services
        </h1>
        <p className="hero-subtitle">Your trust is our success</p>
        <div className="arrow-bounce">
          <MoveDown size={60} strokeWidth={0.9} />
        </div>
      </div>

      <div className="dots-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`dot ${current === index ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="slide-arrows">
        <button onClick={prevSlide} className="arrow-btn up">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="white" viewBox="0 0 24 24">
            <path d="M12 4l-7 7h4v9h6v-9h4z" />
          </svg>
        </button>
        <button onClick={nextSlide} className="arrow-btn down">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" fill="white" viewBox="0 0 24 24">
            <path d="M12 20l7-7h-4V4h-6v9H5z" />
          </svg>
        </button>
      </div>

      <a href="https://wa.me/97444483000" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        <img
          src="https://marblemedicals.com/wp-content/uploads/2023/09/whatsapp.svg"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>

      <button className="chat-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="28" height="28" fill="none" stroke="#ffffff" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round">
          <path d="M512 160h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64 64h32v52c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4l76.9-43.5V384c0 35.3 28.7 64 64 64h96l108.9 61.6c2.2 1.6 4.7 2.4 7.1 2.4 6.2 0 12-4.9 12-12v-52h32c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z" />
        </svg>
      </button>
    </section>
  );
}
