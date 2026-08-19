(() => {
  const target = document.querySelector('.hero');
  if (!target || document.getElementById('motion-section')) return;

  const style = document.createElement('style');
  style.textContent = `
    .motion-section{background:linear-gradient(180deg,var(--paper) 0%,#efeee8 100%);padding-top:105px;padding-bottom:118px;overflow:hidden}
    .motion-section:before{content:'';position:absolute;right:-160px;top:15%;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle,rgba(185,246,75,.17),transparent 68%);pointer-events:none}
    .motion-grid{display:grid;grid-template-columns:.78fr 1.22fr;align-items:center;gap:72px}
    .motion-copy h2{max-width:610px}.motion-copy>p{max-width:560px}
    .motion-pills{display:flex;flex-wrap:wrap;gap:9px;margin:26px 0 30px}.motion-pills span{padding:9px 13px;border:1px solid var(--line);background:rgba(255,255,255,.55);border-radius:999px;color:#4e5049;font-size:10px;font-weight:780;letter-spacing:.04em;text-transform:uppercase}
    .motion-feature-list{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:30px}
    .motion-feature-list>div{min-height:126px;padding:17px;background:rgba(255,255,255,.63);border:1px solid var(--line);border-radius:18px;box-shadow:0 12px 28px rgba(17,18,15,.04)}
    .motion-feature-list small{display:block;margin-bottom:11px;color:var(--accent-deep);font-size:9px;font-weight:850;letter-spacing:.13em}.motion-feature-list strong{display:block;margin-bottom:6px;font-size:13px}.motion-feature-list span{color:var(--muted);font-size:11px;line-height:1.5}
    .motion-showcase{position:relative;padding:38px;background:linear-gradient(145deg,#151713,#282c22);border:1px solid rgba(255,255,255,.06);border-radius:38px;box-shadow:0 42px 90px rgba(12,14,10,.22);overflow:hidden}
    .motion-showcase:before{content:'';position:absolute;left:-90px;bottom:-110px;width:330px;height:330px;border-radius:50%;background:radial-gradient(circle,rgba(185,246,75,.24),transparent 68%)}
    .motion-showcase:after{content:'';position:absolute;right:-70px;top:-90px;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.08),transparent 70%)}
    .motion-badge{position:absolute;top:18px;right:18px;z-index:5;display:inline-flex;align-items:center;gap:8px;padding:10px 14px;color:#353831;background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.92);border-radius:999px;box-shadow:0 12px 28px rgba(0,0,0,.18);font-size:10px;font-weight:800}.motion-badge i{width:7px;height:7px;background:var(--accent);border-radius:50%;box-shadow:0 0 0 5px rgba(185,246,75,.18)}
    .laptop-mockup{position:relative;z-index:2;padding-top:22px}.laptop-lid{position:relative;padding:15px;background:linear-gradient(180deg,#0a0b09,#1b1e18);border:1px solid rgba(255,255,255,.13);border-radius:28px 28px 20px 20px;box-shadow:0 32px 70px rgba(0,0,0,.38)}.laptop-camera{position:absolute;top:7px;left:50%;width:8px;height:8px;background:#050605;border:1px solid rgba(255,255,255,.08);border-radius:50%;transform:translateX(-50%)}.laptop-screen{overflow:hidden;background:#f5f2ea;border-radius:19px}
    .store-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:13px 17px;color:#171914;background:#f7f4ec;border-bottom:1px solid rgba(17,18,15,.10)}.store-brand{font-family:'Arial Narrow','Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:900;letter-spacing:.13em}.store-links{display:flex;gap:14px;color:#696c63;font-size:7px;font-weight:760;letter-spacing:.05em;text-transform:uppercase}.store-cart{padding:6px 8px;background:#171914;color:#fff;border-radius:999px;font-size:7px}
    .store-hero{position:relative;aspect-ratio:16/9;overflow:hidden;background:#11130f}.store-hero video{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.9) contrast(1.03)}.store-hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,12,9,.72) 0%,rgba(10,12,9,.18) 47%,rgba(10,12,9,.03) 100%)}
    .store-overlay{position:absolute;z-index:2;left:24px;top:50%;max-width:260px;color:#fff;transform:translateY(-50%)}.store-overlay small{display:block;margin-bottom:9px;color:var(--accent);font-size:7px;font-weight:850;letter-spacing:.18em;text-transform:uppercase}.store-overlay strong{display:block;font-family:'Arial Narrow','Helvetica Neue',Arial,sans-serif;font-size:clamp(26px,3.1vw,43px);line-height:.89;letter-spacing:-.045em}.store-overlay p{max-width:230px;margin:10px 0 14px;color:rgba(255,255,255,.72);font-size:8px;line-height:1.45}.store-cta{display:inline-flex;align-items:center;gap:12px;padding:8px 11px;color:#171914;background:var(--accent);border-radius:999px;font-size:7px;font-weight:850}.store-3d-label{position:absolute;z-index:3;right:15px;bottom:14px;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;max-width:180px}.store-3d-label span{padding:6px 8px;color:#171914;background:rgba(255,255,255,.9);border:1px solid rgba(255,255,255,.7);border-radius:999px;backdrop-filter:blur(8px);font-size:6px;font-weight:820;letter-spacing:.06em;text-transform:uppercase}.store-3d-label span:first-child{background:var(--accent)}
    .store-products{display:grid;grid-template-columns:1.15fr .85fr .85fr;gap:8px;padding:9px;background:#f7f4ec}.store-card{min-height:72px;padding:10px;background:#e7e1d6;border-radius:10px;overflow:hidden;position:relative}.store-card:first-child{background:#d8e6c1}.store-card small{display:block;color:#66695f;font-size:6px;letter-spacing:.08em;text-transform:uppercase}.store-card strong{display:block;margin-top:5px;color:#171914;font-size:9px}.store-card:after{content:'';position:absolute;right:-12px;bottom:-17px;width:58px;height:58px;border-radius:50%;background:rgba(255,255,255,.5)}
    .laptop-base{width:86%;height:14px;margin:0 auto;background:linear-gradient(180deg,#d0d3cc,#8a8f83);border-radius:0 0 22px 22px;box-shadow:0 19px 24px rgba(0,0,0,.25)}.laptop-base:after{content:'';display:block;width:25%;height:4px;margin:0 auto;background:rgba(255,255,255,.42);border-radius:999px}
    .motion-note{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:22px;padding:17px 19px;color:#d8dacf;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.08);border-radius:17px}.motion-note strong{color:#fff;font-size:13px}.motion-note span{max-width:410px;color:#a9ada3;font-size:10px;line-height:1.55}.motion-note b{color:var(--accent);font-size:18px}
    @media(max-width:1050px){.motion-grid{grid-template-columns:1fr;gap:48px}.motion-showcase{padding:30px}.motion-feature-list{max-width:720px}}
    @media(max-width:760px){.motion-section{padding-top:78px;padding-bottom:86px}.motion-showcase{padding:21px 16px 18px;border-radius:28px}.motion-badge{position:static;width:max-content;margin-bottom:14px}.laptop-mockup{padding-top:0}.laptop-lid{padding:10px;border-radius:20px}.laptop-screen{border-radius:13px}.store-nav{padding:10px 11px}.store-links{display:none}.store-overlay{left:15px;max-width:190px}.store-overlay strong{font-size:27px}.store-overlay p{display:none}.store-3d-label{right:9px;bottom:9px;max-width:130px}.store-products{grid-template-columns:1fr 1fr}.store-products .store-card:last-child{display:none}.motion-feature-list{grid-template-columns:1fr}.motion-feature-list>div{min-height:0}.motion-note{align-items:flex-start;flex-direction:column}}
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
        <div class="laptop-mockup" aria-label="Laptop showing a YourStore ecommerce website with 3D animation">
          <div class="laptop-lid">
            <div class="laptop-camera"></div>
            <div class="laptop-screen">
              <div class="store-nav">
                <strong class="store-brand">YOURSTORE.</strong>
                <div class="store-links"><span>Shop</span><span>New Arrivals</span><span>About</span></div>
                <span class="store-cart">Cart (2)</span>
              </div>
              <div class="store-hero">
                <video autoplay muted loop playsinline preload="metadata"><source src="/assets/3d-showcase.mp4" type="video/mp4"></video>
                <div class="store-overlay">
                  <small>Immersive product drop</small>
                  <strong>Designed to move.</strong>
                  <p>A modern storefront where animation becomes part of the shopping experience.</p>
                  <span class="store-cta">Explore Collection <b>→</b></span>
                </div>
                <div class="store-3d-label"><span>3D Elements</span><span>Motion Design</span><span>Interactive</span></div>
              </div>
              <div class="store-products">
                <div class="store-card"><small>Featured experience</small><strong>Animated product storytelling</strong></div>
                <div class="store-card"><small>Collection 01</small><strong>Motion / 3D</strong></div>
                <div class="store-card"><small>Collection 02</small><strong>Web + Visuals</strong></div>
              </div>
            </div>
          </div>
          <div class="laptop-base"></div>
        </div>
        <div class="motion-note"><div><strong>More than a normal website.</strong><br><span>We can combine ecommerce, branded interfaces, 3D-style elements and animation in one polished experience.</span></div><b>↗</b></div>
      </div>
    </div>`;

  target.insertAdjacentElement('afterend', section);
})();
