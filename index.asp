<%response.ContentType="text/html;charset=UTF-8"%>
<!doctype html>
<html>
<head>
    <!--#include virtual = "/include/head.asp" -->
</head>
<body>
    <!--#include virtual = "/include/topmenu.asp" -->

    <div class="main-index-wrapper">
        <div class="full-container">
            <div class="main-slider">
                <div class="swiper">
                    <div class="swiper-wrapper" pagination-clickable="true">
                        <!--
                        인디오더 color
                        핑크 : #E5007E
                        옐로우: #f59c00
                        그린: #00a754
                        퍼플: #9e1b79
                        스카이블루: #3ea3dc
                        라이트그린: #a2c62c
                        라이트 블루: #2ab8cb
                        라이트 옐로우: #fcea10
                        라이트 핑크: #f9c6c0
                        -->

                        <!-- 이미지만 나오는 슬라이더와 텍스트와 함께 나오는 슬라이더는 순서 바뀌어도 상관없고, 둘중에 하나만 있어도 상관없음 -->
                        <div class="swiper-slide">
                            <a href="">
                                <img src="/assets/images/1940x1100-001.jpg" alt="content-title">
                            </a>
                        </div>

                        <div class="swiper-slide">
                            <a href="" class="with-text">
                                <div class="txt-area" style="background: #E5007E;">
                                    <div class="txt">
                                        <h2>Die Cut Stickers</h2>
                                        <p>Perfectly shaped die-cut stickers to make your designs stand out.</p>
                                    </div>
                                    <span class="btn-type">Get Yours Now</span>
                                </div>
                                <img src="/assets/images/1000x1100-001.jpg" alt="content-title">
                            </a>
                        </div>

                        <div class="swiper-slide">
                            <a href="" class="with-text">
                                <div class="txt-area" style="background: #00a754;">
                                    <div class="txt">
                                        <h2>Unforgettable Cards, Perfectly Crafted</h2>
                                        <p>Premium quality cards designed to leave a lasting impression, tailored to reflect your brand's identity.</p>
                                    </div>
                                    <span class="btn-type">Get Yours Now</span>
                                </div>
                                <img src="/assets/images/1000x1100-002.jpg" alt="content-title">
                            </a>
                        </div>

                        <div class="swiper-slide">
                            <a href="">
                                <img src="/assets/images/1940x1100-002.jpg" alt="content-title">
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        <div class="full-container">
            <div class="ad-txt-wrapper">
                <span>Express free shipping</span>
            </div>
        </div>


        <!-- <div class="section-container main-banner-container img-border-rd">
            <div class="container-xxxl">
                <img src="/assets/images/241213OFF-1.jpg" alt="main-banner-title">
            </div>

            <!-- <div class="container-xxxl">
                <div class="row g-3 half">
                    <div class="col-md-6">
                        <img src="https://picsum.photos/1576/700" alt="main-banner-title">
                    </div>
                    <div class="col-md-6">
                        <img src="https://picsum.photos/1552/700" alt="main-banner-title">
                    </div>
                </div>
            </div> --
        </div> -->

        <div class="section-wrapper popular-products-wrapper img-border-rd">
            <div class="container-xxxl">
                <h2>Popular items</h2>
                <div class="row gx-xl-4 gx-lg-3 gx-2 gy-xl-4 gy-lg-3 gy-2 list-wrapper">
                    <div class="col-lg-3 col-6">
                        <a href="/products/die-cut-stickers/">
                            <img src="/assets/images/618x824-die-cut-sticker.jpg">
                            <h5>Die Cut Stickers</h5>
                        </a>
                    </div>

                    <div class="col-lg-3 col-6">
                        <a href="/products/extra-nouveau-17pt-350gsm-business-cards/">
                            <img src="/assets/images/618x824-extra-pola-business-cards-17pt.jpg">
                            <h5>Extra Nouveau Business Cards 17pt 350gsm</h5>
                        </a>
                    </div>

                    <div class="col-lg-3 col-6">
                        <a href="/products/postcards/">
                            <img src="/assets/images/618x824-postcards.jpg">
                            <h5>Post Cards</h5>
                        </a>
                    </div>

                    <div class="col-lg-3 col-6">
                        <a href="/products/tags/">
                            <img src="/assets/images/618x824-tags.jpg">
                            <h5>Tags</h5>
                        </a>
                    </div>

                    <!-- <div class="col-lg-3 col-6">
                        <a href="/products/tags/">
                            <img src="/assets/images/618x824-rectangle-stickers.jpg">
                            <h5>Rectangle Kiss Cut Stickers</h5>
                        </a>
                    </div> -->
                </div>
            </div>
        </div>



        <!-- <div class="section-wrapper discover-category-wrapper has-top-border has-bottom-border">
            <div class="container-xxxl">

                <div class="row g-5">
                    <div class="col-lg-auto col-sm-12 me-lg-3">
                        <div class="category-wrapper">
                            <div class="title">
                                <h2>Discover<br>Category</h2>
                            </div>
                            <div class="list">
                                <ul>
                                    <li class="selected"><a href="">All</a></li>
                                    <li><a>Christmas</a></li>
                                    <li><a>Cake</a></li>
                                    <li><a>Wedding</a></li>
                                    <li><a>Mothers day</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row gx-3 gy-5 list-wrapper">
                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Christmas Cards</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Cake Topper</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Wedding Invitations</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Wrapping Paper Sheets</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Rectangle Kiss Cut Stickers</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Menu</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>

                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Post Cards</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>

                            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                <a href="">
                                    <div class="title-box">
                                        <div class="info">
                                            <p>Category Title</p>
                                            <button type="button"><i class="xi-arrow-right"></i></button>
                                        </div>
                                        <h5>Tags</h5>
                                    </div>
                                    <div class="image-box">
                                        <img src="https://placehold.co/1430x1430">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="view-more">
                            <button type="button">View more <i class="xi-angle-down vertical-align-2 f14 leftmargin-5"></i></button>
                        </div>
                    </div>

                </div>




            </div>
        </div> -->




        <!-- <div class="dark-bg bg-main mt-5 py-5">
            <div class="container-xxxl">
                <div class="row bottompadding-80">
                    <div class="col-12">
                        <h1 class="color-white font-secondary">Something... Title</h1>
                    </div>
                </div>
                <div class="row g-2 color-white">
                    <div class="col-lg-2 col-md-4 col-sm-6 py-3">
                        <img src="/assets/images/618x824-rectangle-stickers.jpg" alt="Product Name">
                        <p class="topmargin-5 toppadding-10 f15 t300">Rectangle Kiss Cut Stickers</p>
                    </div>

                    <div class="col-lg-2 col-md-4 col-sm-6 py-3">
                        <img src="/assets/images/618x824-menu.jpg" alt="Product Name">
                        <p class="topmargin-5 toppadding-10 f15 t300">Menu</p>
                    </div>

                    <div class="col-lg-2 col-md-4 col-sm-6 py-3">
                        <img src="https://picsum.photos/618/824" alt="Product Name">
                        <p class="topmargin-5 toppadding-10 f15 t300">Product Name</p>
                    </div>

                    <div class="col-lg-2 col-md-4 col-sm-6 py-3">
                        <img src="https://picsum.photos/618/824" alt="Product Name">
                        <p class="topmargin-5 toppadding-10 f15 t300">Product Name</p>
                    </div>

                    <div class="col-lg-2 col-md-4 col-sm-6 py-3">
                        <img src="https://picsum.photos/618/824" alt="Product Name">
                        <p class="topmargin-5 toppadding-10 f15 t300">Product Name</p>
                    </div>

                    <div class="col-lg-2 col-md-4 col-sm-6 py-3">
                        <img src="https://picsum.photos/618/824" alt="Product Name">
                        <p class="topmargin-5 toppadding-10 f15 t300">Product Name</p>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="other-products-wrapper">
            <div class="container-xxl">
                <h3 class="font-secondary t600 bottommargin-20">Related Products</h3>
                <div class="row pd-list-default-wrapper border-rd">
                    <div class="col-lg-6">
                        <div class="each-block">
                            <div class="img-block">
                                <img src="https://placehold.co/1552x1254" alt="">
                            </div>
                            <div class="txt-block">
                                <h5>Business cards</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="row gy-4">
                            <div class="col-lg-6">
                                <div class="each-block">
                                    <div class="img-block">
                                        <img src="https://placehold.co/752x564" alt="">
                                    </div>
                                    <div class="txt-block">
                                        <h5>Business cards</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="each-block">
                                    <div class="img-block">
                                        <img src="https://placehold.co/752x564" alt="">
                                    </div>
                                    <div class="txt-block">
                                        <h5>Business cards</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="each-block">
                                    <div class="img-block">
                                        <img src="https://placehold.co/752x564" alt="">
                                    </div>
                                    <div class="txt-block">
                                        <h5>Business cards</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="each-block">
                                    <div class="img-block">
                                        <img src="https://placehold.co/752x564" alt="">
                                    </div>
                                    <div class="txt-block">
                                        <h5>Business cards</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div> -->


    </div>


    <!--#include virtual = "/include/footer.asp" -->
    <!--#include virtual = "/include/bottom.asp" -->

    <script>
    // 메인 슬라이더
    var swiper = new Swiper(".main-slider .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        loopedSlides: 2,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
    });

    // 모든 이미지와 h5 타이틀 alt에 넣기
    document.querySelectorAll("div").forEach(div => {
        const img = div.querySelector("img");
        const h5 = div.querySelector("h5");
        if (img && h5) {
            img.setAttribute("alt", h5.textContent.trim());
        }
    });


    // Discover category 선택
    $(document).ready(function() {
        $('.discover-category-wrapper .list li').click(function() {
        	if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            }

            else {
                $(this).addClass('selected');
                $(this).siblings('li').removeClass('selected');
            }
        });
    }, false);

    </script>

</body>
</html>
