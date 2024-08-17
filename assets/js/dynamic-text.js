document.addEventListener('DOMContentLoaded', function () {
    const titles = ['Software Engineer', 'ML Enthusiast', 'Researcher'];
    let currentTitleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Typing speed in milliseconds
    const deletingSpeed = 50; // Deleting speed in milliseconds
    const pauseTime = 2000; // Pause time at the end of each title
    const dynamicTitleElement = document.getElementById('dynamic-title');
    const cursorElement = document.querySelector('.cursor');

    function type() {
        const currentTitle = titles[currentTitleIndex];
        if (isDeleting) {
            dynamicTitleElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicTitleElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => isDeleting = true, pauseTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();
});
