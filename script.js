


    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    // Mobile toggle for nav (simple)
    const toggleNav = document.getElementById('toggleNav');
    const navLinks = document.getElementById('navLinks');
    if(toggleNav){
      toggleNav.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
        else navLinks.style.display = 'flex';
      });
    }

    // Certificate modal open
    function openCert(card){
      const src = card.getAttribute('data-cert-src');
      const img = document.getElementById('certModalImg');
      const download = document.getElementById('certDownload');
      img.src = src;
      download.href = src;
      const modal = new bootstrap.Modal(document.getElementById('certModal'));
      modal.show();
    }

    // Smooth scrolling for in-page nav
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
      });
    });

    // Hide nav links when resizing to desktop
    window.addEventListener('resize', () => {
      if(window.innerWidth > 980) navLinks.style.display = 'flex';
      else navLinks.style.display = 'none';
    });
    // initial
    if(window.innerWidth > 980) navLinks.style.display = 'flex'; else navLinks.style.display = 'none';
  


    // Get modal and buttons
var modal = document.getElementById("certificateModal");
var btn = document.getElementById("viewCertificateBtn");
var closeBtn = document.getElementById("closeModalBtn");

// When the user clicks the "View Certificate" button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
