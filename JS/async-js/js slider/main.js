document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");

    //* Config
    const config = {
        interval: 3000,
        showDots: true,
    };

    //* Nav buttons
    const prevButton = document.createElement('button');
    prevButton.classList.add('btn', 'prev');
    prevButton.textContent = 'Prev';
    carousel.parentNode.insertBefore(prevButton, carousel);

    const nextButton = document.createElement('button');
    nextButton.classList.add('btn', 'next');
    nextButton.textContent = 'Next';
    carousel.parentNode.appendChild(nextButton);

    //* Insert dots
    for (let i = 0; i < items.length; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.dataset.index = i;
        dotsContainer.appendChild(dot);
    }
    let dots = document.querySelectorAll(".dot");

    //* Show specific item
    function showItem(index) {
        items.forEach((item, idx) => {
        item.classList.remove("active");
        dots[idx].classList.remove("active");
        if (idx === index) {
            item.classList.add("active");
            dots[idx].classList.add("active");
        }
        });
    }

    //* Navigation buttons functional
    prevButton.addEventListener("click", () => {
        let activeIndex = [...items].findIndex((item) => item.classList.contains("active"));
        let newIndex = (activeIndex - 1 + items.length) % items.length;
        showItem(newIndex);
    });

    nextButton.addEventListener("click", () => {
        let activeIndex = [...items].findIndex((item) => item.classList.contains("active"));
        let newIndex = (activeIndex + 1) % items.length;
        showItem(newIndex);
    });

    //* Event listeners for dots
    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
        let index = parseInt(this.dataset.index);
        showItem(index);
        });
    });

    //* Mouse listeners
    carousel.addEventListener('mouseover', () => {
        clearInterval(intervalId);
    });

    carousel.addEventListener('mouseout', () => {
        autoplay();
    });

    let intervalId;

    //* Autoscroll
    function autoplay() {
        intervalId = setInterval(() => {
            let activeIndex = [...items].findIndex((item) => item.classList.contains("active"));
            let newIndex = (activeIndex + 1) % items.length;
            showItem(newIndex);
        }, config.interval);
    }

    //* Pause/resume
    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    document.body.appendChild(pauseButton);

    pauseButton.addEventListener('click', () => {
        if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        pauseButton.textContent = 'Resume';
        } else {
        autoplay();
        pauseButton.textContent = 'Pause';
        }
    });

    //* Keyboard nav
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
        let activeIndex = [...items].findIndex((item) => item.classList.contains("active"));
        let newIndex = (activeIndex - 1 + items.length) % items.length;
        showItem(newIndex);
        } else if (event.key === 'ArrowRight') {
        let activeIndex = [...items].findIndex((item) => item.classList.contains("active"));
        let newIndex = (activeIndex + 1) % items.length;
        showItem(newIndex);
        }
    });
    autoplay();
});

