const workflowList = document.querySelector('#workflow-list');
const workflows = ['Morning Brief', 'Meeting Preparation', 'Inbox Triage', 'Reporting', 'Content System', 'Team Knowledge'];

workflows.forEach((name, index) => {
  const button = document.createElement('button');
  const panel = document.createElement('div');
  button.className = 'workflow';
  button.type = 'button';
  button.setAttribute('aria-expanded', 'false');
  button.innerHTML = `<span>0${index + 1}</span><b>${name}</b><i>+</i>`;
  panel.className = 'panel';
  panel.innerHTML = '<p><b>WHAT GOES IN</b>Relevant context, examples, and quality checks.</p><p><b>WHAT YOU BUILD</b>A reusable process the team can keep using.</p>';
  button.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
  workflowList.append(button, panel);
});

const team = document.querySelector('#team');
const hours = document.querySelector('#hours');
const rate = document.querySelector('#rate');
const teamOutput = document.querySelector('#teamout');
const hoursOutput = document.querySelector('#hoursout');
const rateOutput = document.querySelector('#rateout');
const annual = document.querySelector('#annual');
const value = document.querySelector('#value');

function updateCalculator() {
  const recoveredHours = Number(team.value) * Number(hours.value) * 52;
  const recoveredValue = recoveredHours * Number(rate.value);
  teamOutput.value = team.value;
  hoursOutput.value = hours.value;
  rateOutput.value = `$${rate.value}`;
  annual.textContent = recoveredHours.toLocaleString();
  value.textContent = recoveredValue.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

[team, hours, rate].forEach((control) => control.addEventListener('input', updateCalculator));
updateCalculator();

document.querySelector('.intro h2').innerHTML = 'Bring your work <span class="mark">into the room.</span>';
document.querySelector('.method h2').innerHTML = 'Make something <em>your team can use.</em>';
document.querySelector('.proof h2').innerHTML = 'Practical systems. <em>Real proof.</em>';
const palmer = document.querySelectorAll('.proof-card')[2];
palmer.innerHTML = "<small>PALMER'S</small><h3>Product briefs, made faster.</h3><p>AI-supported product-brief workflows after director-level training.</p>";

const stableStyles = document.createElement('style');
stableStyles.textContent = `
  .portrait:before { content: none; }
  .portrait { padding: 0; align-items: stretch; }
  .portrait img { display: block; width: 100%; height: 100%; min-height: 380px; object-fit: cover; object-position: center; }
  .ai-site-nav { display: flex; align-items: center; gap: clamp(14px, 2vw, 28px); }
  .ai-site-nav a { font: 10px var(--m); letter-spacing: .07em; text-decoration: none; }
  .ai-site-nav a:hover { color: var(--r); }
  .ai-mobile-menu-trigger, .ai-mobile-menu { display: none; }
  @property --ring-sweep { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
  .gauges .ring { --ring-sweep: 0deg; background: conic-gradient(var(--arc) 0deg var(--ring-sweep), #ffffff28 var(--ring-sweep) 360deg); animation: ring-fill 4.8s cubic-bezier(.55, 0, .25, 1) infinite alternate; }
  .gauges .g:nth-child(even) .ring { background: conic-gradient(from calc(0deg - var(--ring-sweep)), var(--arc) 0deg var(--ring-sweep), #ffffff28 var(--ring-sweep) 360deg); animation-delay: -2.4s; }
  @keyframes ring-fill { from { --ring-sweep: 0deg; } to { --ring-sweep: 235deg; } }
  @media (prefers-reduced-motion: reduce) { .gauges .ring { --ring-sweep: 235deg; animation: none; } }
  @media (max-width: 580px) {
    header { position: relative; justify-content: space-between; }
    .ai-site-nav { display: none; }
    .ai-mobile-menu-trigger { position: absolute; right: 16px; top: 50%; display: inline-flex; align-items: center; gap: 6px; border: 0; background: transparent; color: var(--i); font: 10px var(--m); letter-spacing: .07em; cursor: pointer; transform: translateY(-50%); }
    .ai-mobile-menu-trigger span { font-size: 16px; line-height: 0; }
    .ai-mobile-menu { position: absolute; z-index: 10; top: calc(100% + 1px); right: 14px; display: none; min-width: 190px; padding: 8px 16px; background: var(--v); border: 1px solid var(--i); box-shadow: 5px 5px var(--i); text-align: left; }
    .ai-mobile-menu.is-open { display: block; }
    .ai-mobile-menu a { display: block; padding: 11px 0; border-bottom: 1px solid #332b2740; font: 400 18px var(--s); letter-spacing: -.05em; text-decoration: none; }
    .ai-mobile-menu a:last-child { border-bottom: 0; }
    .hero.wrap { padding-top: 42px; }
    .hero > div:first-child > .k { display: none; }
    .intro { gap: 36px; }
    .intro.wrap { padding-top: 42px; padding-bottom: 38px; }
    .method.wrap { padding-top: 42px; padding-bottom: 30px; }
    .workflows { gap: 28px; }
    .workflows.wrap { padding-top: 38px; padding-bottom: 38px; }
    .calc { gap: 26px; background: var(--p); color: var(--i); }
    .calc.wrap { padding-top: 38px; padding-bottom: 36px; }
    .calc h2, .calc output, .calc .result strong, .calc .disc { color: var(--i); }
    .calc input { accent-color: var(--r); }
    .calc .result { border-color: var(--i); }
    .calc .calc-controls .control:first-child { margin-top: 0; }
    .calc .calc-controls .control:last-child { margin-bottom: 0; }
    .calc .results { margin-top: 0; }
    .proof.wrap { padding-top: 38px; padding-bottom: 36px; }
    .sanam { gap: 26px; }
    .sanam.wrap { padding-top: 38px; padding-bottom: 28px; }
    .sanam > div:nth-child(2) { display: contents; }
    .sanam > div:nth-child(2) > .k { display: none; }
    .sanam > div:nth-child(2) > h2 { order: -1; margin-bottom: 0; }
    .sanam > div:nth-child(2) > p { margin-bottom: 0; }
    .sanam .cred p:nth-child(n + 3) { border-bottom: 0; }
    .ways.wrap { padding-top: 30px; padding-bottom: 20px; }
    .cta.wrap { padding-top: 24px; padding-bottom: 36px; }
    .cta .form { margin-bottom: 0; }
    .hero, .intro, .method, .workflows, .calc, .proof, .sanam, .ways, .cta, footer { text-align: center; }
    .hero > div, .intro-copy, .method > div, .workflows > div, .calc-intro, .calc-controls, .results, .proof > div, .sanam > div, .ways article { justify-self: center; }
    .hero .lead, .hero .sub, .intro p, .method > div > p, .workflows > div > p, .calc-intro > p, .cta > p { margin-left: auto; margin-right: auto; }
    .stages, .proof-grid, .ways-grid, .cred { text-align: center; }
    .stage, .proof-card, .ways article, .result { text-align: center; }
    .workflow { grid-template-columns: 1fr 1fr 1fr; text-align: center; }
    .workflow span { text-align: left; }
    .workflow i { text-align: right; }
    .panel.open, .panel.open p { text-align: center; }
    .control label { justify-content: center; gap: 10px; }
    .form, .form label, .form input, .form textarea { text-align: center; }
    footer { justify-content: center; }
  }
  @media (min-width: 581px) and (max-width: 850px) {
    .hero, .intro, .method, .workflows, .calc, .proof, .sanam, .ways, .cta, footer { text-align: center; }
    .hero > div, .intro-copy, .method > div, .workflows > div, .calc-intro, .calc-controls, .results, .proof > div, .sanam > div, .ways article { justify-self: center; }
    .hero .lead, .hero .sub, .intro p, .method > div > p, .workflows > div > p, .calc-intro > p, .cta > p { margin-left: auto; margin-right: auto; }
    .hero.wrap { padding-top: 56px; padding-bottom: 54px; }
    .cards { max-width: min(500px, 100%); justify-self: center; }
    .intro.wrap, .method.wrap, .workflows.wrap, .calc.wrap, .proof.wrap, .sanam.wrap, .ways.wrap, .cta.wrap { padding-top: 52px; padding-bottom: 48px; }
    .intro, .sanam { gap: 36px; }
    .workflows { gap: 32px; }
    .stages, .proof-grid, .ways-grid, .cred { text-align: center; }
    .stage, .proof-card, .ways article, .result { text-align: center; }
    .workflow { grid-template-columns: 1fr 1fr 1fr; text-align: center; }
    .workflow span { text-align: left; }
    .workflow i { text-align: right; }
    .panel.open, .panel.open p { text-align: center; }
    .calc { gap: 28px; background: var(--p); color: var(--i); }
    .calc h2, .calc output, .calc .result strong, .calc .disc { color: var(--i); }
    .calc input { accent-color: var(--r); }
    .calc .result { border-color: var(--i); }
    .calc .calc-controls, .calc .results { width: min(640px, 100%); margin-left: auto; margin-right: auto; }
    .control label { justify-content: center; gap: 10px; }
    .form, .form label, .form input, .form textarea { text-align: center; }
    .cta .form .button { grid-column: 1 / -1; justify-self: center; }
    footer { justify-content: center; }
  }
  @media (min-width: 851px) {
    .hero.wrap { padding-top: clamp(46px, 5vw, 70px); padding-bottom: clamp(58px, 6vw, 82px); }
    .cards { max-width: 520px; gap: 18px; }
    .card { min-height: 205px; padding: 24px; }
    .card b { font-size: 30px; }
    .sys { min-height: 154px; }
    .intro.wrap, .method.wrap, .workflows.wrap, .calc.wrap, .proof.wrap, .sanam.wrap, .ways.wrap, .cta.wrap { padding-top: clamp(52px, 4vw, 60px); padding-bottom: clamp(52px, 4vw, 60px); }
    .intro { gap: 50px; }
    .stages { margin-top: 28px; }
    .workflows { gap: 54px; }
    .proof h2 { white-space: nowrap; }
    .cta .form .button { grid-column: 1 / -1; justify-self: center; }
    .calc { grid-template-columns: 1fr 1fr; gap: 34px; background: var(--p); color: var(--i); }
    .calc .calc-intro { grid-column: 1 / -1; max-width: none; margin: 0; }
    .calc .calc-intro h2 { white-space: nowrap; color: var(--i); font-size: clamp(39px, 4.9vw, 68px); margin-bottom: 12px; }
    .calc .calc-intro p:last-child { margin-bottom: 0; }
    .calc .calc-controls { align-self: start; padding-top: 4px; }
    .calc .results { align-self: start; margin: 0; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 16px; }
    .calc .result { min-width: 0; padding: 24px; border-color: var(--i); }
    .calc .result strong { color: var(--i); font-size: clamp(34px, 2.8vw, 54px); letter-spacing: -.07em; white-space: nowrap; }
    .calc .disc, .calc output { color: var(--i); }
    .calc input { accent-color: var(--r); }
  }
`;
document.head.append(stableStyles);

const resourcesLink = document.querySelector('.ways article:last-child a');
if (resourcesLink) resourcesLink.href = '/resources/';
const pageHeader = document.querySelector('header');
const headerContent = pageHeader?.querySelector('.ai-nav-wrap') || pageHeader;
if (pageHeader && !pageHeader.querySelector('.ai-mobile-menu-trigger')) {
  const trigger = document.createElement('button');
  trigger.className = 'ai-mobile-menu-trigger';
  trigger.type = 'button';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.innerHTML = 'MENU <span>+</span>';
  const menu = document.createElement('nav');
  menu.className = 'ai-mobile-menu';
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.innerHTML = '<a href="/ai-at-work/">AI at Work</a><a href="/resources/">Resources</a><a href="#inquire">Contact</a>';
  headerContent.append(trigger);
  pageHeader.append(menu);
  trigger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
    trigger.innerHTML = isOpen ? 'CLOSE <span>−</span>' : 'MENU <span>+</span>';
  });
}
