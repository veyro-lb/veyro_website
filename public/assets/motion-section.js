(() => {
  const target = document.querySelector('.hero');
  if (!target || document.getElementById('motion-section')) return;

  const IMAGES = [
    { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png', bg: '#F4845F', panel: '#F79B7F' },
    { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png', bg: '#6BBF7A', panel: '#85CC92' },
    { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png', bg: '#E882B4', panel: '#ED9DC4' },
    { src: 'https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png', bg: '#6EB5FF', panel: '#8DC4FF' },
  ];

  IMAGES.forEach(({ src }) => { const img = new Image(); img.src = src; });

  if (!document.querySelector('link[href*="family=Anton"]')) {
    const pre1 = document.createElement('link'); pre1.rel = 'preconnect'; pre1.href = 'https://fonts.googleapis.com';
    const pre2 = document.createElement('link'); pre2.rel = 'preconnect'; pre2.href = 'https://fonts.gstatic.com'; pre2.crossOrigin = 'anonymous';
    const font = document.createElement('link'); font.rel = 'stylesheet'; font.href = 'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap';
    document.head.append(pre1, pre2, font);
  }

  const style = document.createElement('style');
  style.textContent = `
    .motion-section{position:relative;background:linear-gradient(180deg,var(--paper) 0%,#efeee8 100%);padding-top:105px;padding-bottom:118px;overflow:hidden}
    .motion-section:before{content:'';position:absolute;right:-160px;top:15%;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle,rgba(185,246,75,.17),transparent 68%);pointer-events:none}
    .motion-grid{display:grid;grid-template-columns:.78fr 1.22fr;align-items:center;gap:72px}
    .motion-copy h2{max-width:610px}.motion-copy>p{max-width:560px}
    .motion-pills{display:flex;flex-wrap:wrap;gap:9px;margin:26px 0 30px}.motion-pills span{padding:9px 13px;border:1px solid var(--line);background:rgba(255,255,255,.55);border-radius:999px;color:#4e5049;font-size:10px;font-weight:780;letter-spacing:.04em;text-transform:uppercase}
    .motion-feature-list{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:30px}.motion-feature-list>div{min-height:126px;padding:17px;background:rgba(255,255,255,.63);border:1px solid var(--line);border-radius:18px;box-shadow:0 12px 28px rgba(17,18,15,.04)}.motion-feature-list small{display:block;margin-bottom:11px;color:var(--accent-deep);font-size:9px;font-weight:850;letter-spacing:.13em}.motion-feature-list strong{display:block;margin-bottom:6px;font-size:13px}.motion-feature-list span{color:var(--muted);font-size:11px;line-height:1.5}
    .motion-showcase{position:relative;padding:38px;background:linear-gradient(145deg,#151713,#282c22);border:1px solid rgba(255,255,255,.06);border-radius:38px;box-shadow:0 42px 90px rgba(12,14,10,.22);overflow:hidden}.motion-showcase:before{content:'';position:absolute;left:-90px;bottom:-110px;width:330px;height:330px;border-radius:50%;background:radial-gradient(circle,rgba(185,246,75,.24),transparent 68%)}.motion-showcase:after{content:'';position:absolute;right:-70px;top:-90px;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.08),transparent 70%)}
    .motion-badge{position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;gap:8px;padding:10px 14px;color:#353831;background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.92);border-radius:999px;box-shadow:0 12px 28px rgba(0,0,0,.18);font-size:10px;font-weight:800}.motion-badge i{width:7px;height:7px;background:var(--accent);border-radius:50%;box-shadow:0 0 0 5px rgba(185,246,75,.18)}
    .laptop-mockup{position:relative;z-index:2;padding-top:22px}.laptop-lid{position:relative;padding:15px;background:linear-gradient(180deg,#0a0b09,#1b1e18);border:1px solid rgba(255,255,255,.13);border-radius:28px 28px 20px 20px;box-shadow:0 32px 70px rgba(0,0,0,.38)}.laptop-camera{position:absolute;top:7px;left:50%;width:8px;height:8px;background:#050605;border:1px solid rgba(255,255,255,.08);border-radius:50%;transform:translateX(-50%)}.laptop-screen{overflow:hidden;background:#111;border-radius:19px}.laptop-base{width:86%;height:14px;margin:0 auto;background:linear-gradient(180deg,#d0d3cc,#8a8f83);border-radius:0 0 22px 22px;box-shadow:0 19px 24px rgba(0,0,0,.25)}.laptop-base:after{content:'';display:block;width:25%;height:4px;margin:0 auto;background:rgba(255,255,255,.42);border-radius:999px}

    .toonhub{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;font-family:'Inter',sans-serif;transition:background-color 650ms cubic-bezier(.4,0,.2,1)}
    .toonhub-grain{position:absolute;inset:0;z-index:50;pointer-events:none;opacity:.4;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E");background-size:200px 200px;background-repeat:repeat}
    .toonhub-ghost{position:absolute;z-index:2;left:0;right:0;top:18%;display:flex;align-items:center;justify-content:center;pointer-events:none;user-select:none;white-space:nowrap;color:#fff;font-family:'Anton',sans-serif;font-size:clamp(58px,18vw,170px);font-weight:900;line-height:1;letter-spacing:-.02em;text-transform:uppercase}
    .toonhub-brand{position:absolute;z-index:60;top:14px;left:16px;color:#fff;font-size:8px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:.9}
    .toonhub-carousel{position:absolute;inset:0;z-index:3}.toonhub-item{position:absolute;aspect-ratio:.6/1;transition:transform 650ms cubic-bezier(.4,0,.2,1),filter 650ms cubic-bezier(.4,0,.2,1),opacity 650ms cubic-bezier(.4,0,.2,1),left 650ms cubic-bezier(.4,0,.2,1);will-change:transform,filter,opacity}.toonhub-item img{width:100%;height:100%;object-fit:contain;object-position:bottom center;display:block;user-select:none;pointer-events:none}
    .toonhub-copy{position:absolute;z-index:60;left:22px;bottom:18px;max-width:205px;color:#fff}.toonhub-copy .title{margin:0 0 7px;font-size:11px;font-weight:700;letter-spacing:.02em;text-transform:uppercase;opacity:.95}.toonhub-copy .quote{margin:0 0 10px;font-size:7px;line-height:1.55;opacity:.85}.toonhub-nav{display:flex;gap:8px}.toonhub-nav button{width:34px;height:34px;border:2px solid #fff;border-radius:50%;background:transparent;color:#fff;display:grid;place-items:center;cursor:pointer;transition:transform 150ms,background-color 150ms}.toonhub-nav button:hover{transform:scale(1.08);background:rgba(255,255,255,.12)}.toonhub-nav svg{width:17px;height:17px;stroke-width:2.25}
    .toonhub-discover{position:absolute;z-index:60;right:17px;bottom:18px;display:flex;align-items:center;gap:8px;color:#fff;font-family:'Anton',sans-serif;font-size:clamp(16px,3.2vw,38px);font-weight:400;letter-spacing:-.02em;line-height:1;text-transform:uppercase;text-decoration:none;opacity:.95;transition:opacity 200ms}.toonhub-discover:hover{opacity:1}.toonhub-discover svg{width:18px;height:18px;stroke-width:2.25}

    .motion-note{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:22px;padding:17px 19px;color:#d8dacf;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.08);border-radius:17px}.motion-note strong{color:#fff;font-size:13px}.motion-note span{max-width:410px;color:#a9ada3;font-size:10px;line-height:1.55}.motion-note b{color:var(--accent);font-size:18px}
    @media(max-width:1050px){.motion-grid{grid-template-columns:1fr;gap:48px}.motion-showcase{padding:30px}.motion-feature-list{max-width:720px}}
    @media(max-width:760px){.motion-section{padding-top:78px;padding-bottom:86px}.motion-showcase{padding:21px 16px 18px;border-radius:28px}.motion-badge{position:static;width:max-content;margin-bottom:14px}.laptop-mockup{padding-top:0}.laptop-lid{padding:10px;border-radius:20px}.laptop-screen{border-radius:13px}.motion-feature-list{grid-template-columns:1fr}.motion-feature-list>div{min-height:0}.motion-note{align-items:flex-start;flex-direction:column}.toonhub-copy{left:12px;bottom:10px;max-width:130px}.toonhub-copy .quote{display:none}.toonhub-copy .title{font-size:7px}.toonhub-nav button{width:26px;height:26px}.toonhub-nav svg{width:13px;height:13px}.toonhub-brand{top:9px;left:10px;font-size:6px}.toonhub-discover{right:10px;bottom:10px;font-size:15px}.toonhub-discover svg{width:13px;height:13px}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.className = 'section motion-section';
  section.id = 'motion-section';
  section.innerHTML = `
    <div class="container motion-grid">
      <div class="section-heading motion-copy reveal is-visible">
        <div class="eyebrow"><span></span> 3D + Motion Experiences</div>
        <h2>Your website doesn’t have to stay <em>flat.</em></h2>
        <p>Veyro can blend custom web design with 3D elements, animated scenes and motion-driven product storytelling — turning a normal store into an experience people remember.</p>
        <div class="motion-pills"><span>3D Elements</span><span>Animated Products</span><span>Scroll Motion</span><span>Interactive Visuals</span></div>
        <div class="motion-feature-list">
          <div><small>01</small><strong>3D product moments</strong><span>Make products and visuals feel dimensional, premium and alive.</span></div>
          <div><small>02</small><strong>Motion-led websites</strong><span>Use animation to guide attention and make browsing feel more engaging.</span></div>
          <div><small>03</small><strong>Built into your brand</strong><span>The motion, colors and presentation are designed around your business.</span></div>
        </div>
      </div>
      <div class="motion-showcase reveal is-visible">
        <div class="motion-badge"><i></i> Veyro 3D capability</div>
        <div class="laptop-mockup" aria-label="Laptop showing an interactive TOONHUB figurine carousel">
          <div class="laptop-lid"><div class="laptop-camera"></div><div class="laptop-screen"><div class="toonhub" data-toonhub>
            <div class="toonhub-grain"></div>
            <div class="toonhub-ghost">3D SHAPE</div>
            <div class="toonhub-brand">TOONHUB</div>
            <div class="toonhub-carousel" data-toon-carousel></div>
            <div class="toonhub-copy"><p class="title">TOONHUB FIGURINES</p><p class="quote">The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.</p><div class="toonhub-nav"><button type="button" aria-label="Previous figurine" data-toon-prev><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg></button><button type="button" aria-label="Next figurine" data-toon-next><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></button></div></div>
            <a class="toonhub-discover" href="#packages">DISCOVER IT <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
          </div></div></div><div class="laptop-base"></div>
        </div>
        <div class="motion-note"><div><strong>More than a normal website.</strong><br><span>We can combine ecommerce, branded interfaces, 3D-style elements and animation in one polished experience.</span></div><b>↗</b></div>
      </div>
    </div>`;
  target.insertAdjacentElement('afterend', section);

  const root = section.querySelector('[data-toonhub]');
  const carousel = section.querySelector('[data-toon-carousel]');
  let activeIndex = 0;
  let isAnimating = false;
  let isMobile = window.innerWidth < 640;

  const nodes = IMAGES.map((item, index) => {
    const el = document.createElement('div');
    el.className = 'toonhub-item';
    el.dataset.index = String(index);
    const img = document.createElement('img');
    img.src = item.src; img.alt = `TOONHUB figurine ${index + 1}`; img.draggable = false;
    el.appendChild(img); carousel.appendChild(el); return el;
  });

  const applyRole = (node, role) => {
    let left = '50%', height = '22%', bottom = '12%', scale = 1, blur = 4, opacity = 1, z = 5;
    if (role === 'center') { left = '50%'; height = isMobile ? '60%' : '92%'; bottom = isMobile ? '22%' : '0'; scale = isMobile ? 1.25 : 1.68; blur = 0; opacity = 1; z = 20; }
    if (role === 'left') { left = isMobile ? '20%' : '30%'; height = isMobile ? '16%' : '28%'; bottom = isMobile ? '32%' : '12%'; blur = 2; opacity = .85; z = 10; }
    if (role === 'right') { left = isMobile ? '80%' : '70%'; height = isMobile ? '16%' : '28%'; bottom = isMobile ? '32%' : '12%'; blur = 2; opacity = .85; z = 10; }
    if (role === 'back') { left = '50%'; height = isMobile ? '13%' : '22%'; bottom = isMobile ? '32%' : '12%'; blur = 4; opacity = 1; z = 5; }
    Object.assign(node.style, { left, height, bottom, opacity: String(opacity), zIndex: String(z), filter: `blur(${blur}px)`, transform: `translateX(-50%) scale(${scale})` });
  };

  const render = () => {
    root.style.backgroundColor = IMAGES[activeIndex].bg;
    const roles = { [activeIndex]: 'center', [(activeIndex + 3) % 4]: 'left', [(activeIndex + 1) % 4]: 'right', [(activeIndex + 2) % 4]: 'back' };
    nodes.forEach((node, i) => applyRole(node, roles[i]));
  };

  const navigate = (direction) => {
    if (isAnimating) return;
    isAnimating = true;
    activeIndex = direction === 'next' ? (activeIndex + 1) % 4 : (activeIndex + 3) % 4;
    render();
    window.setTimeout(() => { isAnimating = false; }, 650);
  };

  section.querySelector('[data-toon-prev]').addEventListener('click', () => navigate('prev'));
  section.querySelector('[data-toon-next]').addEventListener('click', () => navigate('next'));
  window.addEventListener('resize', () => { const nextMobile = window.innerWidth < 640; if (nextMobile !== isMobile) { isMobile = nextMobile; render(); } });
  render();
})();
