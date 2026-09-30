/**
 * ===== SCRIPTS DEL PORTAFOLIO =====
 * Funcionalidades interactivas del sitio web.
 * Compartido por index.html, pas2.html, privacidad.html y cookies.html,
 * por eso cada bloque comprueba que sus elementos existan antes de usarlos.
 */

document.addEventListener('DOMContentLoaded', function () {

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ===== NAVBAR: EFECTO DE SCROLL =====
    var navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (!navbar) return;
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }


    // ===== BOTÓN VOLVER ARRIBA =====
    var backToTop = document.getElementById('back-to-top');

    function handleBackToTop() {
        if (!backToTop) return;
        backToTop.classList.toggle('visible', window.scrollY > 400);
    }

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            // Devuelve el foco al inicio de la página para usuarios de teclado
            var firstFocusable = document.querySelector('.nav-logo');
            if (firstFocusable) firstFocusable.focus({ preventScroll: true });
        });
    }

    function onScroll() {
        handleNavbarScroll();
        handleBackToTop();
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });


    // ===== MENÚ MÓVIL =====
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    function setMenu(open) {
        if (!navToggle || !navLinks) return;
        navToggle.classList.toggle('active', open);
        navLinks.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            setMenu(!navLinks.classList.contains('active'));
        });

        document.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () { setMenu(false); });
        });

        // Cerrar con la tecla Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                setMenu(false);
                navToggle.focus();
            }
        });
    }


    // ===== AVISO EMERGENTE (toast) =====
    var toast = document.getElementById('toast');
    var toastTimer;

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2500);
    }


    // ===== BOTÓN COMPARTIR =====
    // Usa el menú nativo de compartir (móvil) y, si no existe, copia el enlace.
    document.querySelectorAll('.js-share').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var url = window.location.href.split('#')[0];
            var data = {
                title: document.title,
                text: 'Mira el portafolio de David',
                url: url
            };

            function copyLink() {
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(url).then(
                        function () { showToast('Enlace copiado al portapapeles'); },
                        function () { window.prompt('Copia este enlace:', url); }
                    );
                } else {
                    window.prompt('Copia este enlace:', url);
                }
            }

            if (navigator.share) {
                navigator.share(data).catch(function (err) {
                    if (err && err.name !== 'AbortError') copyLink();
                });
            } else {
                copyLink();
            }
        });
    });


    // ===== AÑO ACTUAL EN EL FOOTER =====
    var yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // ===== ANIMACIONES AL HACER SCROLL =====
    // Los elementos con clase .reveal aparecen suavemente al entrar en pantalla.
    // Las barras de habilidad (.skill-progress) se llenan al hacerse visibles.
    var revealItems = document.querySelectorAll('.reveal, .skill-progress');

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
        revealItems.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

        revealItems.forEach(function (el, index) {
            if (el.classList.contains('reveal')) {
                el.style.setProperty('--reveal-delay', (index % 3) * 0.1 + 's');
            }
            observer.observe(el);
        });
    }
});
