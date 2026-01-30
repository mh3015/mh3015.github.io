// 메인카테고리 메뉴
$(document).ready(function () {
  const normalize = (path) => path.replace(/\/$/, '');
  const currentPath = normalize(location.pathname);

  $("header").load("/include/html/header.html", function () {
    // 2차 메뉴 active
    document
      .querySelectorAll('.header-container nav.right-wrapper a[href]')
      .forEach(link => {
        if (normalize(link.getAttribute('href')) === currentPath) {
          link.classList.add('active');
        }
      });

    // 1차 버튼 active
    document
      .querySelectorAll('.header-container nav button[data-path]')
      .forEach(btn => {
        const btnPath = normalize(btn.dataset.path);

        if (currentPath.startsWith(btnPath)) {
          btn.classList.add('active');
        }
      });
  });

  // 서브 메뉴(sub-nav-wrapper) active 처리
  document
    .querySelectorAll('.sub-nav-wrapper a[href]')
    .forEach(link => {
      const linkPath = normalize(link.getAttribute('href'));
      
      // 경로가 정확히 일치하거나, 빈 값이 아닐 때 체크
      if (linkPath && currentPath === linkPath) {
        link.classList.add('active');
        // 부모인 li 태그에도 스타일이 필요하다면 아래 줄 주석 해제
        // link.parentElement.classList.add('active');
      }
    });
});



// HEADER 백그라운드 변경
$(document).ready(function(){
	$(window).scroll(function(){ 
		if($(window).scrollTop() >= 2) {
			$('header').addClass("scrolled");
		} else { 
			$('header').removeClass("scrolled");
		};
		return false;
	});



  // 공통 TOP 버튼 연동
  $(document).on('click', '.go-to-top', function(e) {
      e.preventDefault();
      if ($('.visual-stage').length > 0) {
          lockVisual();
      } else {
          $('html, body').stop().animate({ scrollTop: 0 }, 500);
      }
  });
}); 




// 서브페이지 타이틀 이미지 제어
$(document).ready(function () {
  const currentPath = window.location.pathname;

  // 1. 페이지별 이미지 경로 설정 (URL: 이미지주소)
  const subBgConfig = {
    "/services/hw": "/assets/images/subPage-header-01.jpg",
    // "/services/sw": "/assets/images/bg-sw.jpg",
    // "/services/cctv": "/assets/images/bg-cctv.jpg"
  };

  // 2. 현재 경로에 맞는 이미지 찾기
  // (완전 일치하지 않더라도 포함되어 있으면 적용되도록 find 사용 가능)
  const bgImage = Object.keys(subBgConfig).find(path => currentPath.includes(path));

  if (bgImage) {
    const targetElement = document.querySelector('.sub-page-title-wrapper'); // 이미지가 들어갈 요소
    
    if (targetElement) {
      targetElement.style.backgroundImage = `url('${subBgConfig[bgImage]}')`;
      targetElement.style.backgroundSize = 'cover';
      targetElement.style.backgroundPosition = 'center';
      targetElement.style.backgroundRepeat = 'no-repeat';
    }
  }
});


// Pre Footer 이미지 변경
  $(window).scroll(function(){ 
  const currentPath = window.location.pathname;

  // 1. 페이지별 이미지 경로 설정 (URL: 이미지주소)
  const preFooterConfig = {
    "/services/hw": "/assets/images/layout-pre-footer-3840x400.jpg",
    // "/services/sw": "/assets/images/bg-sw.jpg",
    // "/services/cctv": "/assets/images/bg-cctv.jpg"
  };

  // 2. 현재 경로에 맞는 이미지 찾기
  // (완전 일치하지 않더라도 포함되어 있으면 적용되도록 find 사용 가능)
  const preFooterImage = Object.keys(preFooterConfig).find(path => currentPath.includes(path));

  if (preFooterImage) {
    const targetElement = document.querySelector('.layout-pre-footer-wrapper'); // 이미지가 들어갈 요소
    
    if (targetElement) {
      targetElement.style.backgroundImage = `url('${preFooterConfig[preFooterImage]}')`;
      targetElement.style.backgroundSize = 'cover';
      targetElement.style.backgroundPosition = 'center';
      targetElement.style.backgroundRepeat = 'no-repeat';
    }
  }
});



// Animation Start
$('.animate').scrolla({
  mobile: false,
  once: false
});