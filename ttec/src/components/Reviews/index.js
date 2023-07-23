import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import arrow from "../../assets/next-arrow.png";

const Reviews = () => {
  const reviews = [
    {
      reviewText:
        "I am so grateful to TTEC for providing me with learning sedorim, chavrusos, and shiurim, so that I could maintain my learning while I pursue my career”.",
      name: "Jacob Pillemer",
    },
    {
      reviewText:
        "TTEC has been the greatest post-Yeshiva learning program that I could have imagined. There is no way that I could have maintained two full sedorim every day while completing my degree without having a program like TTEC.",
      name: "Yehuda Dayan",
    },
    {
      reviewText:
        "Having set sedorim and shiurim throughout the past two years while I completed my degree with SUNY enabled me to reach both my learning and my professional goals. Although I am now working full-time, I know that TTEC will always be there for me.",
      name: "Yehuda Lichtenstein",
    },
    {
      reviewText:
        "TTEC provided me with a warm Yeshiva environment and excellent rabbeim, and allowed me to complete my business degree in only four semesters. I honestly didn’t think it would be possible to continue to grow in learning the way that I did while completing my degree. For that I will be eternally grateful.",
      name: "Yehuda Biren",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    if (currentReviewIndex >= reviews.length) {
      setCurrentReviewIndex(0);
    } else if (currentReviewIndex < 0) {
      setCurrentReviewIndex(reviews.length - 1);
    }
  }, [currentReviewIndex, reviews.length]);

  const handleNext = () => {
    setCurrentReviewIndex(currentReviewIndex + 1);
  };

  const handlePrev = () => {
    setCurrentReviewIndex(currentReviewIndex - 1);
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="testimonials-container">
      <div className="carousel-container">
        <TransitionGroup>
          <CSSTransition
            key={currentReviewIndex}
            timeout={500}
            classNames="fade"
          >
            {currentReview ? (
              <div className="review-container">
                <div className="review-text">
                  <cite>~ {currentReview.name} ~</cite>
                  <q>{currentReview.reviewText}</q>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </CSSTransition>
        </TransitionGroup>
        <div className="review-btn-container">
          <button onClick={handlePrev}>
            <img
              className="arrow arrow-left flip"
              src={arrow}
              alt="previous"
            ></img>
          </button>
          <button onClick={handleNext}>
            <img className="arrow arrow-right" src={arrow} alt="next"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
