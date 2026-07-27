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
});
