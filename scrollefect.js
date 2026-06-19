const revealItems = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-up, .reveal-down'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  {
    threshold: 0.2,          // 20% გამოჩენისას იწყება
    rootMargin: '0px 0px -60px 0px' // ნაზად, სანამ ბოლომდე შემოვა
  }
);

revealItems.forEach(item => revealObserver.observe(item));
