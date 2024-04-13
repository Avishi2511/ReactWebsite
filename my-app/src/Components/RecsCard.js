import React, { useState, useRef } from 'react';
import './RecsStyles.css';

function RecsCard({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const goToNextItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        scrollToNextItem();
    };

    const goToPrevItem = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
        scrollToPrevItem();
    };

    const scrollToNextItem = () => {
        const container = sliderRef.current;
        if (container) {
            const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
            const nextItem = container.children[nextIndex];
            const rect = nextItem.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const scrollLeft = rect.left - containerRect.left + container.scrollLeft;
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const scrollToPrevItem = () => {
        const container = sliderRef.current;
        if (container) {
            const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
            const prevItem = container.children[prevIndex];
            const rect = prevItem.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const scrollLeft = rect.left - containerRect.left + container.scrollLeft;
            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="card-slider">
            <button className="prev-btn" onClick={goToPrevItem}>
                &lt;
            </button>
            <div className="slider-container" ref={sliderRef}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`slider-item ${
                            index === currentIndex ? 'active' : ''
                        }`}
                    >
                        <img src={item.imageUrl} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={goToNextItem}>
                &gt;
            </button>
        </div>
    );
}

export default RecsCard;
