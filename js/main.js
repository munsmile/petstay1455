// 펫스테이1455 — 공통 스크립트

document.addEventListener("DOMContentLoaded", function () {
  // 모바일 GNB 토글
  var toggle = document.querySelector(".nav-toggle");
  var gnb = document.querySelector(".gnb");
  if (toggle && gnb) {
    toggle.addEventListener("click", function () {
      gnb.classList.toggle("open");
      var expanded = gnb.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    gnb.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        gnb.classList.remove("open");
      });
    });
  }

  // 헤더 그림자 (스크롤 시)
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.style.boxShadow = window.scrollY > 8 ? "0 6px 20px -14px rgba(46,39,33,0.4)" : "none";
    });
  }

  // 스크롤 등장 효과
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // 방문자 카운터 (footer의 "Hosted on cafe24" 텍스트를 더블클릭하면 숨겨진 누적 방문 수가 나타남)
  var counterEl = document.getElementById("visitCounter");
  var counterTrigger = document.getElementById("secretCounterTrigger");
  if (counterEl && counterTrigger) {
    fetch("https://abacus.jasoncameron.dev/hit/petstay1455-gyeongju-pension/site-visits")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        counterEl.textContent = "누적 방문 " + data.value.toLocaleString() + "회";
      })
      .catch(function () {
        counterEl.textContent = "방문자 수를 불러올 수 없습니다";
      });

    counterTrigger.addEventListener("dblclick", function () {
      counterEl.classList.toggle("visible");
    });
  }

  // 네이버 지도 (오시는 길)
  var mapEl = document.getElementById("naverMap");
  if (mapEl) {
    if (window.naver && window.naver.maps) {
      var location = new naver.maps.LatLng(35.8174878, 129.1719039);
      var map = new naver.maps.Map(mapEl, {
        center: location,
        zoom: 16
      });
      new naver.maps.Marker({
        position: location,
        map: map
      });
    } else {
      mapEl.textContent = "지도를 불러올 수 없습니다.";
    }
  }

  // 예약 특가 팝업
  var promoPopup = document.getElementById("promoPopup");
  if (promoPopup) {
    var PROMO_DISMISS_KEY = "petstay1455_promo_dismissed_until";
    var dismissedUntil = Number(localStorage.getItem(PROMO_DISMISS_KEY) || 0);

    function openPromo() {
      promoPopup.classList.add("is-open");
      promoPopup.setAttribute("aria-hidden", "false");
    }
    function closePromo() {
      promoPopup.classList.remove("is-open");
      promoPopup.setAttribute("aria-hidden", "true");
    }

    if (Date.now() > dismissedUntil) {
      setTimeout(openPromo, 400);
    }

    promoPopup.querySelectorAll("[data-promo-close]").forEach(function (el) {
      el.addEventListener("click", closePromo);
    });

    var dismissBtn = document.getElementById("promoDismissBtn");
    if (dismissBtn) {
      dismissBtn.addEventListener("click", function () {
        var oneDay = 24 * 60 * 60 * 1000;
        localStorage.setItem(PROMO_DISMISS_KEY, String(Date.now() + oneDay));
        closePromo();
      });
    }

    var copyBtn = document.getElementById("promoCopyBtn");
    if (copyBtn) {
      var phoneNumber = "010-6645-1455";
      var originalLabel = copyBtn.textContent;

      var resetLabel = function () {
        copyBtn.textContent = originalLabel;
        copyBtn.classList.remove("copied");
      };
      var showCopied = function () {
        copyBtn.textContent = "복사완료!";
        copyBtn.classList.add("copied");
        setTimeout(resetLabel, 1600);
      };
      var fallbackCopy = function () {
        var temp = document.createElement("textarea");
        temp.value = phoneNumber;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.focus();
        temp.select();
        try {
          document.execCommand("copy");
          showCopied();
        } catch (e) {
          copyBtn.textContent = "복사 실패";
          setTimeout(resetLabel, 1600);
        }
        document.body.removeChild(temp);
      };

      copyBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(phoneNumber).then(showCopied).catch(fallbackCopy);
        } else {
          fallbackCopy();
        }
      });
    }
  }
});
