(() => {
  const target = document.querySelector('.customize-section');
  if (!target || document.getElementById('motion-section')) return;

  const style = document.createElement('style');
  style.textContent = `
    .motion-section{background:var(--paper)}
    .motion-grid{display:grid;grid-template-columns:.82fr 1.18fr;align-items:center;gap:78px}
    .motion-feature-list{display:grid;gap:14px;margin-top:34px}
    .motion-feature-list>div{padding:18px 20px;background:rgba(255,255,255,.55);border:1px solid var(--line);border-radius:18px;box-shadow:0 10px 24px rgba(17,18,15,.04)}
    .motion-feature-list strong{display:block;margin-bottom:6px;font-size:15px}
    .motion-feature-list span{color:var(--muted);font-size:12px;line-height:1.55}
    .motion-showcase{position:relative;padding:36px;background:linear-gradient(145deg,#191b16,#2b2f25);border-radius:var(--radius-lg);box-shadow:0 35px 80px rgba(12,14,10,.18);overflow:hidden}
    .motion-showcase:before{content:'';position:absolute;left:-70px;bottom:-70px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(185,246,75,.22),transparent 68%)}
    .motion-badge{position:absolute;top:18px;right:18px;z-index:4;display:inline-flex;align-items:center;gap:9px;padding:10px 14px;color:#42453d;background:rgba(255,255,255,.88);border:1px solid rgba(255,255,255,.9);border-radius:999px;box-shadow:0 12px 28px rgba(0,0,0,.16);font-size:10px;font-weight:780}
    .laptop-mockup{position:relative;z-index:2;padding-top:18px}
    .laptop-lid{position:relative;padding:16px;background:linear-gradient(180deg,#0d0f0c,#1c1f19);border:1px solid rgba(255,255,255,.12);border-radius:28px;box-shadow:0 30px 70px rgba(0,0,0,.32)}
    .laptop-camera{position:absolute;top:8px;left:50%;width:9px;height:9px;background:#070806;border:1px solid rgba(255,255,255,.08);border-radius:50%;transform:translateX(-50%)}
    .laptop-screen{overflow:hidden;background:#10110f;border-radius:20px}
    .laptop-site-bar{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 18px;color:#dadccf;background:#181b15;border-bottom:1px solid rgba(255,255,255,.08);font-size:10px;letter-spacing:.08em;text-transform:uppercase}
    .laptop-site-bar strong{color:#fff;font-size:11px}.laptop-site-bar span{color:#989b92;font-size:9px}
    .laptop-video-wrap{aspect-ratio:16/9;background:#0f100d;overflow:hidden}.laptop-video{width:100%;height:100%;display:block;object-fit:cover}
    .laptop-site-copy{display:grid;gap:10px;padding:22px 22px 24px;color:#fff}.laptop-site-copy small{color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.16em}.laptop-site-copy strong{font-family:'Arial Narrow','Helvetica Neue',Arial,sans-serif;font-size:30px;line-height:.98;letter-spacing:-.04em}.laptop-site-copy p{max-width:520px;margin:0;color:#a5a89f;font-size:13px}
    .laptop-base{width:84%;height:14px;margin:0 auto;background:linear-gradient(180deg,#c1c4bd,#8b9084);border-radius:0 0 20px 20px;box-shadow:0 18px 22px rgba(0,0,0,.22)}.laptop-base:after{content:'';display:block;width:26%;height:4px;margin:0 auto;background:rgba(255,255,255,.38);border-radius:999px}
    .motion-note{position:relative;z-index:2;display:grid;gap:6px;margin-top:22px;padding:18px 20px;color:#d3d6cc;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:18px}.motion-note strong{color:#fff;font-size:14px}.motion-note span{color:#a7aba0;font-size:11px;line-height:1.6}
    @media(max-width:1050px){.motion-grid{grid-template-columns:1fr;gap:48px}.motion-showcase{padding:28px}}
    @media(max-width:760px){.motion-showcase{padding:22px 18px 18px}.motion-badge{position:static;margin-bottom:16px}.laptop-lid{padding:12px;border-radius:22px}.laptop-screen{border-radius:16px}.laptop-site-bar{padding:11px 13px}.laptop-site-bar span{display:none}.laptop-site-copy{padding:18px 16px 20px}.laptop-site-copy strong{font-size:24px}.motion-feature-list>div{padding:16px}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.className = 'section motion-section';
  section.id = 'motion-section';
  section.innerHTML = `
    <div class="container motion-grid">
      <div class="section-heading reveal is-visible">
        <div class="eyebrow"><span></span> Beyond static design</div>
        <h2>We can also create <em>3D animations & motion-rich websites.</em></h2>
        <p>Want your website to feel more premium, immersive, and memorable? Veyro can create 3D-inspired visuals, animated product showcases, and dynamic website experiences that help your brand stand out.</p>
        <div class="motion-feature-list">
          <div><strong>3D product presentation</strong><span>Show products, concepts, and visuals in a more eye-catching way.</span></div>
          <div><strong>Motion-focused design</strong><span>Add animated scenes and polished storytelling to your online presence.</span></div>
          <div><strong>Premium brand feel</strong><span>Blend video, interaction, and web design into one modern experience.</span></div>
        </div>
      </div>
      <div class="motion-showcase reveal is-visible">
        <div class="motion-badge"><span class="pulse"></span> 3D-ready creative direction</div>
        <div class="laptop-mockup">
          <div class="laptop-lid">
            <div class="laptop-camera"></div>
            <div class="laptop-screen">
              <div class="laptop-site-bar"><strong>VEYRO STUDIO</strong><span>Websites · 3D · Motion</span></div>
              <div class="laptop-video-wrap"><video class="laptop-video" autoplay muted loop playsinline preload="metadata"><source src="/assets/3d-showcase.mp4" type="video/mp4"></video></div>
              <div class="laptop-site-copy"><small>CREATIVE CAPABILITIES</small><strong>3D animation + modern web design</strong><p>We build engaging visual experiences that combine branded websites with motion and presentation.</p></div>
            </div>
          </div>
          <div class="laptop-base"></div>
        </div>
        <div class="motion-note"><strong>Need something more advanced?</strong><span>Ask Veyro for animated website elements, showcase videos, and 3D-styled visual experiences.</span></div>
      </div>
    </div>`;

  target.insertAdjacentElement('afterend', section);
})();
