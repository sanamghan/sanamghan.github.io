/* Approved homepage navigation and contact-path updates. */
const aiWorkUrl = '/ai-at-work/';
const resourcesUrl = '/resources/';

function addMobileMenu() {
  const wrap = document.querySelector('.nav-wrap');
  if (!wrap || wrap.querySelector('.mobile-menu-trigger')) return;
  const trigger = document.createElement('button');
  trigger.className = 'mobile-menu-trigger';
  trigger.type = 'button';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.innerHTML = 'Menu <span>+</span>';
  const menu = document.createElement('nav');
  menu.className = 'homepage-mobile-menu';
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.innerHTML = `<a href="${aiWorkUrl}">AI at Work</a><a href="${resourcesUrl}">Resources</a><a href="#contact">Contact</a>`;
  wrap.append(trigger);
  document.body.append(menu);
  trigger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(open));
    trigger.innerHTML = open ? 'Close <span>−</span>' : 'Menu <span>+</span>';
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = 'Menu <span>+</span>';
  }));
}

function applyApprovedHomepageChanges() {
  const nav = document.querySelector('.nav-links');
  const buttonRow = document.querySelector('.button-row');
  if (!nav || !buttonRow) return false;
  nav.innerHTML = `<a href="${aiWorkUrl}">AI at Work</a><a href="${resourcesUrl}">Resources</a><a href="#contact">Contact</a>`;
  buttonRow.innerHTML = `<a class="button primary" href="${aiWorkUrl}">Explore AI at Work</a>`;
  document.querySelectorAll('.contact-options a').forEach((link) => {
    const label = link.textContent.trim();
    if (label.includes('Bring AI training')) {
      link.href = aiWorkUrl;
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.innerHTML = 'Explore AI at Work <span aria-hidden="true">↗</span>';
    }
    if (label.includes('Work with me directly')) link.innerHTML = 'Work with Sanam <span aria-hidden="true">↗</span>';
    if (label.includes('Speaking and workshop inquiry')) link.remove();
    if (label.includes('Partner with Girl Meets Code')) link.remove();
  });
  addMobileMenu();
  return true;
}

const observer = new MutationObserver(() => {
  if (applyApprovedHomepageChanges()) observer.disconnect();
});
observer.observe(document.documentElement, { childList: true, subtree: true });
if (applyApprovedHomepageChanges()) observer.disconnect();
window.addEventListener('load', () => {
  if (applyApprovedHomepageChanges()) observer.disconnect();
});
