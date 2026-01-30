(function () {
  const scripts = [
    // Jquery
    '/assets/js/jquery-3.7.1.min.js',
    '/assets/js/jquery-migrate-1.4.1.min.js',
    '/assets/plugins/jquery-ui-1.14.1/jquery-ui.min.js',

    // Dropzone
    '/assets/js/dropzone.js',

    // bootstrap datepicker
    '/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js',

    // Swiper Slide
    '/assets/plugins/swiper@11/swiper-bundle.min.js',

    // gsap
    '/assets/js/gsap/gsap.min.js',
    '/assets/js/gsap/scrollTrigger.min.js',

    // Core
    '/assets/js/script.js',
    '/assets/js/common.js'
  ];

  function loadScript(index) {
    if (index >= scripts.length) {
      // 모든 공통 스크립트 로드 완료
      document.dispatchEvent(new Event('core:ready'));
      return;
    }

    const s = document.createElement('script');
    s.src = scripts[index];
    s.onload = () => loadScript(index + 1);
    document.body.appendChild(s);
  }

  loadScript(0);;
})();
