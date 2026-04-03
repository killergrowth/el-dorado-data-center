// Scroll-based header behavior
(function () {
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // Mobile menu toggle
  var toggle = document.querySelector('.mobile-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      var icon = toggle.querySelector('.menu-icon');
      var closeIcon = toggle.querySelector('.close-icon');
      if (icon) icon.classList.toggle('hidden');
      if (closeIcon) closeIcon.classList.toggle('hidden');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var isOpen = btn.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-btn').forEach(function (b) {
        b.classList.remove('open');
        var a = b.nextElementSibling;
        if (a) a.classList.remove('open');
      });
      // Toggle this one
      if (!isOpen) {
        btn.classList.add('open');
        if (answer) answer.classList.add('open');
      }
    });
  });

  // Mark active nav link
  var currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && (currentPath === href || currentPath.startsWith(href + '.html'))) {
      link.classList.add('nav-link-active');
    }
    if (href === '/index.html' && (currentPath === '/' || currentPath === '/index.html')) {
      link.classList.add('nav-link-active');
    }
  });
})();
