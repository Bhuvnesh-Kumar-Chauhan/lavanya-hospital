(() => {
  const config = window.HOSPITAL_CONFIG || {};
  const setText = (selector, value) => {
    if (!value) return;
    document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
  };
  setText('[data-hospital-name]', config.name);
  setText('[data-hospital-phone]', config.phoneDisplay);
  setText('[data-hospital-address]', config.address);
  setText('[data-visiting-hours]', config.visitingHours);
  setText('[data-hospital-email]', config.email || 'Hospital email to be updated');
  document.querySelectorAll('[data-phone-link]').forEach(link => {
    if (config.phoneLink) link.href = `tel:${config.phoneLink}`;
    else link.addEventListener('click', event => { event.preventDefault(); alert('Hospital phone number has not been configured yet.'); });
  });
  if (config.email) document.querySelectorAll('[data-hospital-email]').forEach(el => { el.href = `mailto:${config.email}`; });
  ['mapLink', 'mapLinkBottom'].forEach(id => {
    const link = document.getElementById(id);
    if (link && config.mapUrl) { link.href = config.mapUrl; }
    else if (link) { link.addEventListener('click', event => { event.preventDefault(); alert('Add the verified Google Maps URL in public/js/site-config.js.'); }); }
  });
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  const observer = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));

  // Front-end demonstration only: no patient data is transmitted or stored.
  const form = document.getElementById('appointmentForm');
  const status = document.getElementById('formStatus');
  if (form && status) form.addEventListener('submit', event => {
    event.preventDefault(); status.className = 'form-status';
    if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Please complete the required fields and check the consent box.'; status.classList.add('error'); return; }
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const type = String(data.get('enquiryType') || '').trim();
    if (config.whatsappNumber) {
      const message = `Lavanya Hospital website enquiry%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEnquiry: ${encodeURIComponent(type)}%0ADepartment/Doctor: ${encodeURIComponent(String(data.get('department') || 'Not specified'))}%0AMessage: ${encodeURIComponent(String(data.get('message') || 'Not provided'))}`;
      status.textContent = 'Opening WhatsApp so you can send the enquiry to the hospital. No appointment is confirmed until the hospital responds.';
      status.classList.add('success');
      window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
    } else {
      status.textContent = 'The form design is ready, but submission is not connected yet. Please configure a secure form backend or the hospital WhatsApp number before launch.';
      status.classList.add('error');
    }
  });
})();
