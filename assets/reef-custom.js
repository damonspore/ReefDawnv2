/**
 * Reef Telecom theme JS — vanilla only, deferred.
 * Scroll reveals, reduced motion (root class + reveal fallback), media query listener.
 */
(function () {
  'use strict';

  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function prefersReducedMotion() {
    return mqReduce.matches;
  }

  function setReducedMotionClass() {
    if (prefersReducedMotion()) {
      document.documentElement.classList.add('reef-reduced-motion');
    } else {
      document.documentElement.classList.remove('reef-reduced-motion');
    }
  }

  /** Ensure .reef-reveal nodes are visible when CSS/JS disagree (e.g. slow CSS load). */
  function revealAllIfReducedMotion() {
    if (!prefersReducedMotion()) return;
    document.querySelectorAll('.reef-reveal:not(.is-visible)').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  function initScrollReveals() {
    if (prefersReducedMotion()) {
      revealAllIfReducedMotion();
      return;
    }

    var nodes = document.querySelectorAll('.reef-reveal:not(.reef-reveal--skip)');
    if (!nodes.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    nodes.forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    setReducedMotionClass();
    revealAllIfReducedMotion();
    initScrollReveals();
  }

  if (typeof mqReduce.addEventListener === 'function') {
    mqReduce.addEventListener('change', function () {
      setReducedMotionClass();
      revealAllIfReducedMotion();
      if (prefersReducedMotion()) return;
      initScrollReveals();
    });
  } else if (typeof mqReduce.addListener === 'function') {
    mqReduce.addListener(function () {
      setReducedMotionClass();
      revealAllIfReducedMotion();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
