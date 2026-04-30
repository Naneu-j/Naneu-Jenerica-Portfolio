// Sidebar
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
 
    function openSidebar() {
      hamburger.classList.add('open');
      sidebar.classList.add('open');
      overlay.style.display = 'block';
      setTimeout(() => overlay.classList.add('active'), 10);
      document.body.style.overflow = 'hidden';
    }
    function closeSidebar() {
      hamburger.classList.remove('open');
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => overlay.style.display = 'none', 300);
    }
 
    hamburger.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener('click', closeSidebar);
    document.querySelectorAll('.sidebar-link').forEach(l => l.addEventListener('click', closeSidebar));
 
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
 
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
    // Smooth active nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--teal)' : '';
      });
    });
 
    // Form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const honey = this.querySelector('[name="_honey"]');
      if (honey && honey.value) return;
      const btn = this.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        this.reset();
        btn.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }, 800);
    });
