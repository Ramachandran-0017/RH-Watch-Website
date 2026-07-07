document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number");

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );

  statNumbers.forEach((el) => statObserver.observe(el));

  const timelineItems = document.querySelectorAll(".timeline-item");

  const timelineObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  timelineItems.forEach((item) => timelineObserver.observe(item));
});
