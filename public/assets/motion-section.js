(() => {
  const target = document.querySelector('.hero');
  if (!target || document.getElementById('motion-section')) return;

  const style = document.createElement('style');
  style.textContent = `
    .motion-section{position:relative;background:linear-gradient(180deg,var(--paper) 0%,#efeee8 100%);padding-top:105px;padding-bottom:118px;overflow:hidden}
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
    .laptop-mockup{position:relative;z-index:2;padding-top:18px}
    .laptop-lid{position:relative;padding:16px;background:linear-gradient(180deg,#0d0f0c,#1c1f19);border:1px solid rgba(255,255,255,.12);border-radius:28px;box-shadow:0 30px 70px rgba(0,0,0,.32)}
    .laptop-camera{position:absolute;top:8px;left:50%;width:9px;height:9px;background:#070806;border:1px solid rgba(255,255,255,.08);border-radius:50%;transform:translateX(-50%)}
    .laptop-screen{overflow:hidden;background:#10110f;border-radius:20px}
    .store-topbar{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 18px;color:#dadccf;background:#181b15;border-bottom:1px solid rgba(255,255,255,.08)}
    .store-brand{display:flex;align-items:center;gap:14px}.store-brand strong{color:#fff;font-size:12px;letter-spacing:.12em}.store-brand nav{display:flex;gap:12px;color:#989b92;font-size:10px;text-transform:uppercase;letter-spacing:.07em}
    .store-cart{padding:7px 10px;border:1px solid rgba(255,255,255,.12);border-radius:999px;color:#f5f6ef;font-size:10px;background:rgba(255,255,255,.04)}
    .store-hero{display:grid;grid-template-columns:.92fr 1.08fr;gap:16px;align-items:center;padding:22px;background:linear-gradient(180deg,#11130f,#151713)}
    .store-copy small{display:block;color:var(--accent);font-size:9px;font-weight:800;letter-spacing:.16em;margin-bottom:12px}
    .store-copy h3{margin:0 0 10px;color:#fff;font-family:'Arial Narrow','Helvetica Neue',Arial,sans-serif;font-size:34px;line-height:.96;letter-spacing:-.045em}
    .store-copy p{margin:0 0 16px;color:#a5a89f;font-size:12px;line-height:1.65;max-width:300px}
    .store-actions{display:flex;gap:10px;flex-wrap:wrap}.store-actions span{display:inline-flex;align-items:center;justify-content:center;padding:9px 12px;border-radius:999px;font-size:10px;font-weight:780}.store-actions .primary{color:#131510;background:var(--accent)}.store-actions .secondary{color:#d7dacd;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04)}
    .burger-stage{position:relative;min-height:320px;border-radius:22px;background:radial-gradient(circle at 50% 35%,rgba(185,246,75,.12),transparent 42%),linear-gradient(180deg,#171914 0%,#10110d 100%);border:1px solid rgba(255,255,255,.06);overflow:hidden}
    .hero-tag{position:absolute;top:16px;left:16px;padding:8px 10px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);color:#f2f4ec;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;z-index:3}
    .hero-overlay{position:absolute;left:18px;bottom:18px;z-index:3;display:grid;gap:6px;max-width:180px}.hero-overlay small{color:#9ea294;font-size:9px;letter-spacing:.14em}.hero-overlay strong{color:#fff;font-size:18px;line-height:1.05;letter-spacing:-.03em}.hero-overlay span{color:#b1b4ab;font-size:10px;line-height:1.45}
    .floating-chip{position:absolute;z-index:3;padding:8px 10px;border-radius:999px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(6px);color:#f6f8ef;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.floating-chip.one{top:52px;right:16px}.floating-chip.two{top:88px;right:22px}.floating-chip.three{top:124px;right:18px}
    .burger-scene{position:absolute;left:50%;top:56%;width:240px;height:240px;transform:translate(-45%,-50%)}
    .burger-shadow{position:absolute;left:50%;bottom:22px;width:168px;height:28px;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,.42),rgba(0,0,0,0) 72%);transform:translateX(-50%);animation:shadowPulse 3.8s ease-in-out infinite}
    .burger-layer{position:absolute;left:50%;transform:translateX(-50%);filter:drop-shadow(0 12px 10px rgba(0,0,0,.18));animation-duration:3.8s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
    .bun-top{top:42px;width:168px;height:68px;border-radius:90px 90px 54px 54px;background:linear-gradient(180deg,#f4c47a,#d99239);animation-name:bunTopSplit}
    .bun-top:before{content:'';position:absolute;left:50%;top:14px;width:118px;height:18px;transform:translateX(-50%);background:radial-gradient(circle,rgba(255,255,255,.26),transparent 70%)}
    .bun-top:after{content:'';position:absolute;inset:0;background-image:radial-gradient(circle at 14px 24px,#f7e0ad 0 2px,transparent 3px),radial-gradient(circle at 35px 18px,#f7e0ad 0 2px,transparent 3px),radial-gradient(circle at 60px 24px,#f7e0ad 0 2px,transparent 3px),radial-gradient(circle at 84px 16px,#f7e0ad 0 2px,transparent 3px),radial-gradient(circle at 110px 23px,#f7e0ad 0 2px,transparent 3px),radial-gradient(circle at 132px 18px,#f7e0ad 0 2px,transparent 3px)}
    .lettuce{top:100px;width:174px;height:24px;border-radius:24px;background:linear-gradient(180deg,#94dc57,#5da638);clip-path:polygon(0 42%,8% 18%,18% 48%,27% 23%,36% 55%,47% 18%,58% 54%,68% 20%,78% 52%,88% 25%,100% 46%,100% 100%,0 100%);animation-name:lettuceSplit}
    .tomato{top:118px;width:150px;height:14px;border-radius:14px;background:linear-gradient(180deg,#ff7f73,#da4236);animation-name:tomatoSplit}
    .cheese{top:130px;width:150px;height:18px;background:linear-gradient(180deg,#ffd95c,#ffbe27);clip-path:polygon(0 0,100% 0,100% 55%,82% 100%,63% 48%,43% 100%,24% 50%,0 82%);animation-name:cheeseSplit}
    .patty{top:144px;width:164px;height:28px;border-radius:24px;background:linear-gradient(180deg,#6b3d20,#442211);box-shadow:inset 0 2px 0 rgba(255,255,255,.1);animation-name:pattySplit}
    .bun-bottom{top:170px;width:168px;height:40px;border-radius:18px 18px 32px 32px;background:linear-gradient(180deg,#d18a34,#b87024);animation-name:bunBottomSplit}
    .store-bottom{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px 16px 18px;background:#131510;border-top:1px solid rgba(255,255,255,.06)}
    .mini-card{padding:12px 12px 14px;border:1px solid rgba(255,255,255,.07);border-radius:16px;background:rgba(255,255,255,.03)}.mini-card small{display:block;margin-bottom:6px;color:#8d9187;font-size:9px;letter-spacing:.13em;text-transform:uppercase}.mini-card strong{display:block;color:#fff;font-size:12px;margin-bottom:6px}.mini-card span{display:block;color:#a6aa9f;font-size:10px;line-height:1.5}
    .laptop-base{width:84%;height:14px;margin:0 auto;background:linear-gradient(180deg,#c1c4bd,#8b9084);border-radius:0 0 20px 20px;box-shadow:0 18px 22px rgba(0,0,0,.22)}.laptop-base:after{content:'';display:block;width:26%;height:4px;margin:0 auto;background:rgba(255,255,255,.38);border-radius:999px}
    .motion-note{position:relative;z-index:2;display:grid;gap:6px;margin-top:22px;padding:18px 20px;color:#d3d6cc;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:18px}.motion-note strong{color:#fff;font-size:14px}.motion-note span{color:#a7aba0;font-size:11px;line-height:1.6}
    @keyframes bunTopSplit{0%,100%{transform:translateX(-50%) translateY(0) rotateX(0deg)}25%{transform:translateX(-50%) translateY(-26px) rotateX(7deg)}50%{transform:translateX(-50%) translateY(-58px) rotateX(12deg)}75%{transform:translateX(-50%) translateY(-22px) rotateX(5deg)}}
    @keyframes lettuceSplit{0%,100%{transform:translateX(-50%) translateY(0) rotate(0deg)}25%{transform:translateX(-50%) translateY(-14px) rotate(-2deg)}50%{transform:translateX(-50%) translateY(-28px) rotate(-4deg)}75%{transform:translateX(-50%) translateY(-10px) rotate(-1deg)}}
    @keyframes tomatoSplit{0%,100%{transform:translateX(-50%) translateY(0)}25%{transform:translateX(-50%) translateY(-6px)}50%{transform:translateX(-50%) translateY(-12px)}75%{transform:translateX(-50%) translateY(-4px)}}
    @keyframes cheeseSplit{0%,100%{transform:translateX(-50%) translateY(0)}25%{transform:translateX(-50%) translateY(5px)}50%{transform:translateX(-50%) translateY(10px)}75%{transform:translateX(-50%) translateY(4px)}}
    @keyframes pattySplit{0%,100%{transform:translateX(-50%) translateY(0)}25%{transform:translateX(-50%) translateY(15px)}50%{transform:translateX(-50%) translateY(28px)}75%{transform:translateX(-50%) translateY(10px)}}
    @keyframes bunBottomSplit{0%,100%{transform:translateX(-50%) translateY(0) rotateX(0deg)}25%{transform:translateX(-50%) translateY(16px) rotateX(-4deg)}50%{transform:translateX(-50%) translateY(36px) rotateX(-8deg)}75%{transform:translateX(-50%) translateY(14px) rotateX(-3deg)}}
    @keyframes shadowPulse{0%,100%{transform:translateX(-50%) scale(.92);opacity:.8}50%{transform:translateX(-50%) scale(1.06);opacity:.45}}
    @media(max-width:1180px){.motion-grid{grid-template-columns:1fr;gap:48px}.motion-copy h2,.motion-copy>p{max-width:none}.motion-showcase{padding:32px}.motion-feature-list{grid-template-columns:1fr 1fr 1fr}}
    @media(max-width:760px){.motion-section{padding-top:86px;padding-bottom:88px}.motion-pills{margin:22px 0 24px}.motion-feature-list{grid-template-columns:1fr;gap:10px}.motion-feature-list>div{min-height:unset}.motion-showcase{padding:22px 18px 18px;border-radius:26px}.motion-badge{position:static;margin-bottom:16px}.laptop-lid{padding:12px;border-radius:22px}.laptop-screen{border-radius:16px}.store-topbar{padding:11px 13px}.store-brand nav{display:none}.store-hero{grid-template-columns:1fr;padding:16px}.store-copy h3{font-size:26px}.burger-stage{min-height:260px}.burger-scene{left:50%;top:54%;width:200px;height:200px;transform:translate(-50%,-50%)}.bun-top,.bun-bottom{width:142px}.lettuce{width:148px}.tomato,.cheese{width:130px}.patty{width:140px}.hero-overlay{max-width:160px}.store-bottom{grid-template-columns:1fr}.laptop-base{width:88%}}
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.className = 'section motion-section';
  section.id = 'motion-section';
  section.innerHTML = `
    <div class="container motion-grid">
      <div class="section-heading motion-copy reveal is-visible">
        <div class="eyebrow"><span></span> 3D product animation</div>
        <h2>We create <em>animated store experiences</em> with 3D-style product motion.</h2>
        <p>From floating product reveals to premium storefront mockups, Veyro can build motion-rich websites that show products in a more eye-catching, modern, and high-converting way.</p>
        <div class="motion-pills"><span>3D Elements</span><span>Motion Design</span><span>Product Showcases</span><span>Interactive Websites</span></div>
        <div class="motion-feature-list">
          <div><small>01 / Showcase</small><strong>Animated hero sections</strong><span>We can make products move, separate, float, and reassemble to instantly grab attention.</span></div>
          <div><small>02 / Brand feel</small><strong>Premium visual direction</strong><span>High-end styling, motion cues, and layered composition give your website a more polished look.</span></div>
          <div><small>03 / Conversion</small><strong>Stores that feel memorable</strong><span>Interactive visuals help visitors stay engaged and make your business feel more premium.</span></div>
        </div>
      </div>
      <div class="motion-showcase reveal is-visible">
        <div class="motion-badge"><i></i> 3D-ready creative direction</div>
        <div class="laptop-mockup">
          <div class="laptop-lid">
            <div class="laptop-camera"></div>
            <div class="laptop-screen">
              <div class="store-topbar">
                <div class="store-brand"><strong>YOURSTORE.</strong><nav><span>Shop</span><span>Burgers</span><span>About</span><span>Contact</span></nav></div>
                <div class="store-cart">Cart (2)</div>
              </div>
              <div class="store-hero">
                <div class="store-copy">
                  <small>ANIMATED PRODUCT SHOWCASE</small>
                  <h3>Bring products to life with motion.</h3>
                  <p>A premium store hero with floating 3D-style elements, animated food presentation, and scroll-stopping visual energy.</p>
                  <div class="store-actions"><span class="primary">Shop Burgers</span><span class="secondary">View Animation</span></div>
                </div>
                <div class="burger-stage">
                  <div class="hero-tag">YOURSTORE FEATURED</div>
                  <div class="floating-chip one">3D Elements</div>
                  <div class="floating-chip two">Motion Design</div>
                  <div class="floating-chip three">Interactive</div>
                  <div class="burger-scene">
                    <div class="burger-shadow"></div>
                    <div class="burger-layer bun-top"></div>
                    <div class="burger-layer lettuce"></div>
                    <div class="burger-layer tomato"></div>
                    <div class="burger-layer cheese"></div>
                    <div class="burger-layer patty"></div>
                    <div class="burger-layer bun-bottom"></div>
                  </div>
                  <div class="hero-overlay"><small>DESIGNED TO MOVE</small><strong>Split burger hero animation</strong><span>A looping animated product reveal that makes a storefront feel dynamic and high-end.</span></div>
                </div>
              </div>
              <div class="store-bottom">
                <div class="mini-card"><small>Collection</small><strong>Signature Burgers</strong><span>3D-style menu reveals, visual storytelling, and branded product showcases.</span></div>
                <div class="mini-card"><small>Feature</small><strong>Motion-first layout</strong><span>Layered animation used as part of the website experience, not just a plain video embed.</span></div>
                <div class="mini-card"><small>Effect</small><strong>Attention + conversion</strong><span>Designed to stop the scroll, increase engagement, and make your store more memorable.</span></div>
              </div>
            </div>
          </div>
          <div class="laptop-base"></div>
        </div>
        <div class="motion-note"><strong>Need your own product animated?</strong><span>We can design custom hero animations like this for food brands, ecommerce stores, and premium product showcases.</span></div>
      </div>
    </div>`;

  target.insertAdjacentElement('afterend', section);
})();
