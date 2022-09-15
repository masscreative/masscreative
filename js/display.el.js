var dispTel = "+6287876382398";
var iconTel = `<i class="fa-brands fa-whatsapp"></i>`; // use fontawesome
var dispemail = "masscreative.id@gmail.com";
var iconEmail = `<i class="fa-solid fa-envelope"></i>`;
var dispText = "Bantuan : 09.00wib - 20.00wib";
var iconText = `<i class="fa-solid fa-clock"></i>`;
var dispAddText = "History Oder";
var iconAddText = `<i class="fa-solid fa-file-signature"></i>`;
var linkAddText = "/p/history-order.html";
var imageLogo = "https://rawcdn.githack.com/masscreativeid/theme/13d7405f575cdfae698839a1759126a03aa728fa/assets/masscreativeid-logo.svg";

function dispHeaderTop() {
  $("#header-top").html(`
  <div class="container">
  <div class="header-row">
  <div class="header-column justify-content-start">
    <div class="header-row">
        <ul class="list list-unstyled list-inline mb-0">
            <li class="list-inline-item text-color-dark me-md-4 mb-0 d-none d-md-inline-block">
                <span class="text-color-default text-2">Ada Pertanyaan?</span>
            </li>
            <li class="list-inline-item me-4 mb-0">
                <a href="https://wa.me/${dispTel}" class="text-color-primary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
                ${iconTel} ${dispTel.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, "$1-$2-$3-$4")}
                </a>
            </li>
            <li class="list-inline-item me-4 mb-0 d-none d-md-inline-block">
                <a href="mailto:${dispemail}" class="text-color-primary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
                ${iconEmail} ${dispemail}
                </a>
            </li>
            <li class="list-inline-item me-4 mb-0 d-none d-md-inline-block">
                <a style="cursor:pointer" class="text-color-primary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
                ${iconText} ${dispText}
                </a>
            </li>
        </ul>
    </div>
    </div>
    <div class="header-column justify-content-end">
	  <div class="header-row">
		  <ul class="list list-unstyled list-inline mb-0">
			<li class="list-inline-item mb-0">
			  <a href="${linkAddText}" class="text-color-primary text-color-hover-primary font-weight-semibold text-decoration-none text-2">
              ${dispAddText} ${iconAddText}
			  </a>
			</li>
		  </ul>
	  </div>
  </div>
  </div>
  </div>`);
}

function dispHeader() {
  $("#header-logo").html(`<div class="header-row">
  <div class="header-logo">
    <a href="/">
      <img src="${imageLogo}" class="img-fluid" width="96" height="38" alt="" />
    </a>
  </div>
  </div>`);
  $("#header-main").html(`<nav class="collapse">
  <ul class="nav nav-pills" id="mainNav">
    <li class="dropdown">
      <a class="dropdown-item" data-hash-offset="0" data-hash-offset-lg="130" href="/"> Home </a>
    </li>

    <li class="dropdown dropdown-mega">
      <a class="dropdown-item dropdown-toggle" href="/p/software.html"> Software </a>
      <ul class="dropdown-menu">
        <li>
          <div class="dropdown-mega-content">
            <div class="row">
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Mac <i class="fa-brands fa-apple" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/audio-editors-and-converters-mac-os.html">Audio editors and converters</a></li>
                  <li><a class="dropdown-item" href="/p/mac-os-for-hackintosh-pc.html">Mac OS (for Hackintosh PC)</a></li>
                  <li><a class="dropdown-item" href="/p/office-programs-mac-os.html">Office programs</a></li>
                  <li><a class="dropdown-item" href="/p/other-programs-mac-os.html">Other programs</a></li>
                  <li><a class="dropdown-item" href="/p/plugins-for-adobe-software-mac-os.html">Plugins for Adobe software</a></li>
                  <li><a class="dropdown-item" href="/p/programs-for-design-graphics-mac-os.html">Programs For Design Graphics</a></li>
                  <li><a class="dropdown-item" href="/p/programs-for-the-internet-and-networks-mac-os.html">Programs for the Internet and networks</a></li>
                  <li><a class="dropdown-item" href="/p/system-programs-mac-os.html">System programs</a></li>
                  <li><a class="dropdown-item" href="/p/video-editing-software-mac-os.html">Video editing software</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Windows <i class="fa-brands fa-windows" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/ibm-pc.html">IBM-PC</a></li>
                  <li><a class="dropdown-item" href="/p/macos-macintosh.html">MacOS (Macintosh)</a></li>
                  <li><a class="dropdown-item" href="/p/software-animasi.html">Animasi</a></li>
                  <li><a class="dropdown-item" href="/p/software-antivirus.html">Antivirus</a></li>
                  <li><a class="dropdown-item" href="/p/software-audio-video-player.html">Audio Video Player</a></li>
                  <li><a class="dropdown-item" href="/p/software-backup.html">Backup</a></li>
                  <li><a class="dropdown-item" href="/p/software-cad-architecture.html">CAD Architecture</a></li>
                  <li><a class="dropdown-item" href="/p/software-cad-electronic-hap.html">CAD Electronic HAP</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Windows <i class="fa-brands fa-windows" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/software-cad-mesin-enginering.html">CAD Mesin Enginering</a></li>
                  <li><a class="dropdown-item" href="/p/software-cad-scientific-system.html">CAD Scientific System</a></li>
                  <li><a class="dropdown-item" href="/p/software-file-manager.html">File Manager</a></li>
                  <li><a class="dropdown-item" href="/p/software-jaringan-internet.html">Jaringan Internet</a></li>
                  <li><a class="dropdown-item" href="/p/software-konverter.html">Konverter</a></li>
                  <li><a class="dropdown-item" href="/p/software-linux.html">Linux</a></li>
                  <li><a class="dropdown-item" href="/p/software-penampil-grafis.html">Penampil Grafis</a></li>
                  <li><a class="dropdown-item" href="/p/software-perekam-layar.html">Perekam Layar</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Windows <i class="fa-brands fa-windows" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/software-perkantoran-pendidikan.html">Perkantoran Pendidikan</a></li>
                  <li><a class="dropdown-item" href="/p/software-plugin-desain-grafis.html">Plugin Desain Grafis</a></li>
                  <li><a class="dropdown-item" href="/p/software-plugin-pemodelan-3d.html">Plugin Pemodelan 3D</a></li>
                  <li><a class="dropdown-item" href="/p/software-plugin-pengolah-audio.html">Plugin Pengolah Audio</a></li>
                  <li><a class="dropdown-item" href="/p/software-plugin-pengolah-video.html">Plugin Pengolah Video</a></li>
                  <li><a class="dropdown-item" href="/p/software-programing-komputer-dan-website.html">Programing Komputer dan Website</a></li>
                  <li><a class="dropdown-item" href="/p/software-system-operasi.html">System Operasi</a></li>
                  <li><a class="dropdown-item" href="/p/software-utilitas.html">Utilitas</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>

    <li class="dropdown dropdown-mega">
      <a class="dropdown-item dropdown-toggle" href="/p/software.html"> Material Design </a>
      <ul class="dropdown-menu">
        <li>
          <div class="dropdown-mega-content">
            <div class="row">
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Material Audio <i class="fa-solid fa-music" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/backsound-audio-librari.html">Backsound Audio Librari</a></li>
                  <li><a class="dropdown-item" href="/p/patterns-dan-background.html">Patterns dan Background</a></li>
                  <li><a class="dropdown-item" href="/p/sample-libraries.html">Sample Libraries</a></li>
                  <li><a class="dropdown-item" href="/p/sound-effects.html">Sound effects</a></li>
                  <li><a class="dropdown-item" href="/p/soundbanks-dan-synthesizer-presets.html">Soundbanks, Synthesizer and Presets</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Material Grafis <i class="fa-solid fa-palette" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/3d-model-dan-material.html">3D model dan Material</a></li>
                  <li><a class="dropdown-item" href="/p/add-ons-adobe-programs.html">Add-ons Adobe programs</a></li>
                  <li><a class="dropdown-item" href="/p/clipart.html">Clipart</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <span class="dropdown-mega-sub-title">Material Video <i class="fa-solid fa-clapperboard" style="font-size: 16px; margin-left: 8px"></i></span>
                <ul class="dropdown-mega-sub-nav">
                  <li><a class="dropdown-item" href="/p/add-ons-post-processing-programs.html">Add-ons post-processing programs</a></li>
                  <li><a class="dropdown-item" href="/p/footage.html">Footage</a></li>
                  <li><a class="dropdown-item" href="/p/project-compilations.html">Project compilations</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>

    <li class="dropdown">
      <a class="dropdown-item dropdown-toggle" href="#"> Game PC </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/p/adventures-and-quests.html">Adventures and quests</a></li>
        <li><a class="dropdown-item" href="/p/arcade.html">Arcade</a></li>
        <li><a class="dropdown-item" href="/p/chess.html">Chess</a></li>
        <li><a class="dropdown-item" href="/p/fighting-games.html">Fighting games</a></li>
        <li><a class="dropdown-item" href="/p/first-person-action.html">First person action</a></li>
        <li><a class="dropdown-item" href="/p/for-the-little-ones.html">For the little ones</a></li>
        <li><a class="dropdown-item" href="/p/horror.html">Horror</a></li>
        <li><a class="dropdown-item" href="/p/hot-new.html">Hot New</a></li>
        <li><a class="dropdown-item" href="/p/logic-games.html">Logic games</a></li>
        <li><a class="dropdown-item" href="/p/multiplayer-games.html">Multiplayer Games</a></li>
        <li><a class="dropdown-item" href="/p/quests-in-the-style-of-hidden-objects.html">Quests and Hidden Objects</a></li>
        <li><a class="dropdown-item" href="/p/real-time-strategy.html">Real Time Strategy</a></li>
        <li><a class="dropdown-item" href="/p/role-playing-games.html">Role-playing games</a></li>
        <li><a class="dropdown-item" href="/p/simulators.html">Simulators</a></li>
        <li><a class="dropdown-item" href="/p/third-person-action.html">Third person action</a></li>
        <li><a class="dropdown-item" href="/p/turn-strategies.html">Turn Strategies</a></li>
        <li><a class="dropdown-item" href="/p/visual-novels.html">visual novels</a></li>
        <li><a class="dropdown-item" href="/p/game-for-mac.html">Game For Mac</a></li>
      </ul>
    </li>

    <li class="dropdown">
      <a class="dropdown-item" data-hash-offset="0" data-hash-offset-lg="130" href="/p/video-course.html"> Video Course </a>
    </li>

    <li class="dropdown">
      <a class="dropdown-item" data-hash-offset="0" data-hash-offset-lg="130" href="/p/blog.html"> BLOG </a>
    </li>

    <li class="dropdown">
      <a class="dropdown-item" data-hash-offset="0" data-hash-offset-lg="130" href="/p/tentang.html"> TENTANG </a>
    </li>

    <li class="dropdown">
      <a class="dropdown-item" data-hash-offset="0" data-hash-offset-lg="130" href="/p/gratis-download.html"> GRATIS DOWNLOAD </a>
    </li>
  </ul>
</nav>`);
}

function dispFooter() {
  $("#footer").html(`
    <div class="container">
    <div class="footer-ribbon">
      <span>Gak Pakai Ribet</span>
    </div>
    <div class="row py-5 my-4">
      <div class="col-md-6 mb-4 mb-lg-0">
        <a href="index.html" class="logo pe-0 pe-lg-3">
          <img
            alt="Porto Website Template"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMzY2IDc2OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM2NiA3Njg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxsaW5rIGhyZWY9Imh0dHA6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2FyaXN0YS0yMCIgcmVsPSJzdHlsZXNoZWV0IiAvPgkgDQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojN0NCNzNGO30NCgkuc3Qxe2ZvbnQtZmFtaWx5OidBcmlzdGEgMi4wJywgc2Fucy1zZXJpZjt9DQoJLnN0Mntmb250LXNpemU6NDczLjE5NXB4O30NCjwvc3R5bGU+DQo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgwLjQzNSAwIDAgMSAyNCA1MDIuMDE2NikiIGNsYXNzPSJzdDAgc3QxIHN0MiI+bWFzc2NyZWF0aXZlLmlkPC90ZXh0Pg0KPC9zdmc+DQo="
            class="opacity-7 bottom-4 footer-logo"
            height="72" style="height:72px;"/>
        </a>
        <p class="mt-2 mb-2">Gak bakalan kesel lagi deh, download item item untuk kebutuhan ide kreativitasmu, tanpa ragu, tanpa jebakan iklan, dan link link gaJe</p>
        <p class="mb-0">
          <a href="/p/tentang.html" class="btn-flat btn-xs text-color-light"><strong class="text-2">LIHAT DETAILS</strong><i class="fas fa-angle-right p-relative top-1 ps-2"></i></a>
        </p>
      </div>
      <div class="col-md-6">
        <h5 class="text-3 mb-3">HUBUNGI KAMI</h5>
        <div class="row">
          <div class="col-md-6">
            <ul class="list list-icons list-icons-lg">
              <li class="mb-1">
                <i class="far fa-dot-circle text-color-primary"></i>
                <p class="m-0">Medan - Sumatra Utara</p>
              </li>
              <li class="mb-1">
                <i class="fab fa-whatsapp text-color-primary"></i>
                <p class="m-0">
                  <a href="tel:+6287876382398">(+62) 878-7638-2398</a>
                </p>
              </li>
              <li class="mb-1">
                <i class="fa-solid fa-envelope text-color-primary"></i>
                <p class="m-0">
                  <a href="mailto:masscreative.id@gmail.com">masscreative.id@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list list-icons list-icons-sm">
              <li><i class="fas fa-angle-right"></i><a href="/p/page-faq.html" class="link-hover-style-1 ms-1"> FAQ's</a></li>
              <li><i class="fas fa-angle-right"></i><a href="/p/sitemap.html" class="link-hover-style-1 ms-1"> Sitemap</a></li>
              <li><i class="fas fa-angle-right"></i><a href="/p/contact-us.html" class="link-hover-style-1 ms-1"> Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright footer-copyright-style-2">
    <div class="container py-2">
      <div class="row py-4">
        <div class="col d-flex align-items-center justify-content-center">
          <p>masscreativeid © Copyright 2022. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>  
    `);
}

function dispSection1() {
  $("#banner1").html(``);
}

function dispSection2() {
  $("#banner2").html(`<div class="container">
  <div class="row justify-content-center py-4 my-5">
    <div class="col-lg-10">
      <div class="tabs tabs-bottom tabs-center tabs-simple">
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="200">
            <a class="nav-link active" href="#tabsNavigationSimpleIcons1" data-bs-toggle="tab">
              <span class="featured-boxes featured-boxes-style-6 p-0 m-0">
                <span class="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                  <span class="box-content p-0 m-0">
                    <i class="icon-featured fa-solid fa-gamepad"></i>
                  </span>
                </span>
              </span>
              <h4 class="font-weight-bold text-color-dark text-3 mb-0 pb-0 mt-2">PC GAMES</h4>
            </a>
          </li>
          <li class="nav-item appear-animation" data-appear-animation="fadeInLeftShorter">
            <a class="nav-link" href="#tabsNavigationSimpleIcons2" data-bs-toggle="tab">
              <span class="featured-boxes featured-boxes-style-6 p-0 m-0">
                <span class="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                  <span class="box-content p-0 m-0">
                    <i class="icon-featured fa-solid fa-compass-drafting"></i>
                  </span>
                </span>
              </span>
              <h4 class="font-weight-bold text-color-dark text-3 mb-0 pb-0 mt-2">SOFTWARE</h4>
            </a>
          </li>
          <li class="nav-item appear-animation" data-appear-animation="fadeInRightShorter">
            <a class="nav-link" href="#tabsNavigationSimpleIcons3" data-bs-toggle="tab">
              <span class="featured-boxes featured-boxes-style-6 p-0 m-0">
                <span class="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                  <span class="box-content p-0 m-0">
                    <i class="icon-featured fa-solid fa-icons"></i>
                  </span>
                </span>
              </span>
              <h4 class="font-weight-bold text-color-dark text-3 mb-0 pb-0 mt-2">MATERIALS</h4>
            </a>
          </li>
          <li class="nav-item appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="200">
            <a class="nav-link" href="#tabsNavigationSimpleIcons4" data-bs-toggle="tab">
              <span class="featured-boxes featured-boxes-style-6 p-0 m-0">
                <span class="featured-box featured-box-primary featured-box-effect-6 p-0 m-0">
                  <span class="box-content p-0 m-0">
                    <i class="icon-featured fa-solid fa-chalkboard-user"></i>
                  </span>
                </span>
              </span>
              <h4 class="font-weight-bold text-color-dark text-3 mb-0 pb-0 mt-2">TUTORIALS</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="300">
          <div class="tab-pane active" id="tabsNavigationSimpleIcons1">
            <div class="text-center">
              <p class="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat urna arcu, vel molestie nunc commodo non. Nullam vestibulum odio vitae fermentum rutru , vel molestie nunc commodo non. Nullam vestibulum odio vitae fermentum rutrum , vel molestie nunc commodo non.
              </p>
              <p class="px-5">Mauris lobortis nulla ut aliquet interdum. Donec commodo ac elit sedauris lobortis nulla ut aliquet interdum. Donec commodo ac elit sed placerat. Mauris ac sodales gravida. In eros felis, elementum.</p>
            </div>
          </div>
          <div class="tab-pane" id="tabsNavigationSimpleIcons2">
            <div class="text-center">
              <p class="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu nunc in justo hendrerit vulputate in sed nibh. Ut tristique metus eu ipsum egestas, vel malesuada odio semper. Aenean quis ultrices nisl. Ut sagittis tellus ac aliquet rhoncus. Aliquam.
              </p>
              <p class="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit neque non purus vulputate eleifend. Donec porta, ipsum non congue accumsan, odio orci dapibus leo, sit amet vehicula ligula nulla.</p>
            </div>
          </div>
          <div class="tab-pane" id="tabsNavigationSimpleIcons3">
            <div class="text-center">
              <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc metus, accumsan ac eros fermentum, blandit sagittis orci. Ut a laoreet massa. In mauris diam, dapibus at commodo in, egestas ut elit. Curabitur dignissim tellus nulla, ut porta ante.</p>
              <p class="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar a mi in vehicula. Sed aliquam, turpis sed lacinia viverra, est neque pretium ex, et varius est massa vel sem.</p>
            </div>
          </div>
          <div class="tab-pane" id="tabsNavigationSimpleIcons4">
            <div class="text-center">
              <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu magna vitae diam tempus aliquam ut sed lectus. Aenean posuere, enim a maximus commodo, metus sem sodales augue, vel sagittis mauris lectus sit amet sapien. Maecenas rhoncus magna sit.</p>
              <p class="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae metus nec nunc porttitor vehicula. Curabitur sit amet efficitur mauris. Curabitur nisl velit, mattis id elit in, placerat pellentesque urna.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
}

function dispSection3() {
  $("#hiasan3").html(`<div class="container">
  <div class="row py-4 my-5">
    <div class="col py-3">
      <div class="owl-carousel owl-theme mb-0" data-plugin-options="{'responsive': {'0': {'items': 1}, '476': {'items': 1}, '768': {'items': 5}, '992': {'items': 7}, '1200': {'items': 7}}, 'autoplay': true, 'autoplayTimeout': 3000, 'dots': false}">
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-1.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-2.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-3.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-4.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-5.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-6.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-4.png" alt="" />
        </div>
        <div>
          <img class="img-fluid opacity-2" src="https://www.okler.net/previews/porto/9.6.0/img/logos/logo-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>`);
}
// Cut After Coding
dispHeaderTop();
dispHeader();
dispFooter();
dispSection1();
dispSection2();
dispSection3();
