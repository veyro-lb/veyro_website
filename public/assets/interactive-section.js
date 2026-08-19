(() => {
  let attempts = 0;

  const mount = () => {
    const anchor = document.getElementById('motion-section');
    if (!anchor) {
      if (attempts++ < 80) window.setTimeout(mount, 60);
      return;
    }
    if (document.getElementById('interactive-section')) return;

    const style = document.createElement('style');
    style.setAttribute('data-interactive-section-styles', 'true');
    style.textContent = `
      .interactive-section{position:relative;padding:118px 0;background:#11130f;color:#fff;overflow:hidden}
      .interactive-section:before{content:'';position:absolute;left:-180px;top:80px;width:440px;height:440px;border-radius:50%;background:radial-gradient(circle,rgba(185,246,75,.13),transparent 68%);pointer-events:none}
      .interactive-section:after{content:'';position:absolute;right:-140px;bottom:-170px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.06),transparent 70%);pointer-events:none}
      .interactive-grid{position:relative;z-index:2;display:grid;grid-template-columns:.82fr 1.18fr;gap:88px;align-items:center}
      .interactive-copy .eyebrow{color:#b9f64b}.interactive-copy .eyebrow span{background:#b9f64b}
      .interactive-copy h2{max-width:620px;color:#fff}.interactive-copy h2 em{color:#b9f64b}
      .interactive-copy>p{max-width:570px;color:#9da196}
      .interactive-pills{display:flex;flex-wrap:wrap;gap:9px;margin-top:28px}
      .interactive-pills span{padding:9px 13px;border:1px solid rgba(255,255,255,.11);border-radius:999px;background:rgba(255,255,255,.045);color:#d7dad1;font-size:10px;font-weight:780;letter-spacing:.05em;text-transform:uppercase}
      .interactive-footnote{display:flex;align-items:center;gap:12px;margin-top:32px;color:#777c70;font-size:11px;line-height:1.5}
      .interactive-footnote i{display:grid;place-items:center;width:32px;height:32px;border:1px solid rgba(185,246,75,.28);border-radius:50%;color:#b9f64b;font-style:normal;font-size:16px}

      .cardstack-shell{position:relative;min-height:570px;padding:34px;border:1px solid rgba(255,255,255,.08);border-radius:36px;background:linear-gradient(145deg,#1a1d17,#272b22);box-shadow:0 42px 90px rgba(0,0,0,.28)}
      .cardstack-shell:before{content:'';position:absolute;inset:16px;border:1px dashed rgba(255,255,255,.055);border-radius:27px;pointer-events:none}
      .stack-topline{position:relative;z-index:10;display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:20px;color:#8f9488;font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
      .stack-live{display:inline-flex;align-items:center;gap:8px;color:#dfe3d7}.stack-live:before{content:'';width:7px;height:7px;border-radius:50%;background:#b9f64b;box-shadow:0 0 0 5px rgba(185,246,75,.1)}
      .stack-hint{color:#777c70}
      .interactive-stack{position:relative;height:410px;touch-action:pan-y;user-select:none;perspective:1000px}
      .interactive-card{position:absolute;left:50%;top:50%;width:min(86%,500px);height:330px;padding:0;border:0;border-radius:28px;overflow:hidden;text-align:left;cursor:grab;transform-origin:center center;transition:transform 520ms cubic-bezier(.22,.8,.24,1),opacity 420ms ease,filter 420ms ease;box-shadow:0 28px 55px rgba(0,0,0,.28);will-change:transform,opacity;outline:none}
      .interactive-card:active{cursor:grabbing}
      .interactive-card:focus-visible{box-shadow:0 0 0 3px #b9f64b,0 28px 55px rgba(0,0,0,.28)}
      .interactive-card[data-pos='0']{z-index:8;transform:translate(-50%,-50%) translate(0,0) rotate(-1deg) scale(1);opacity:1;filter:none}
      .interactive-card[data-pos='1']{z-index:7;transform:translate(-50%,-50%) translate(20px,20px) rotate(2deg) scale(.965);opacity:.92;filter:saturate(.92)}
      .interactive-card[data-pos='2']{z-index:6;transform:translate(-50%,-50%) translate(39px,40px) rotate(-2.5deg) scale(.93);opacity:.78;filter:saturate(.82)}
      .interactive-card[data-pos='3']{z-index:5;transform:translate(-50%,-50%) translate(57px,59px) rotate(3deg) scale(.895);opacity:.58;filter:saturate(.7)}
      .interactive-card.is-throw-next{transform:translate(-50%,-50%) translate(135%,28px) rotate(14deg) scale(.96)!important;opacity:0!important}
      .interactive-card.is-throw-prev{transform:translate(-50%,-50%) translate(-135%,28px) rotate(-14deg) scale(.96)!important;opacity:0!important}
      @media(hover:hover) and (pointer:fine){
        .interactive-stack:hover .interactive-card[data-pos='0']{transform:translate(-50%,-50%) translate(-15px,-9px) rotate(-2deg) scale(1.015)}
        .interactive-stack:hover .interactive-card[data-pos='1']{transform:translate(-50%,-50%) translate(25px,24px) rotate(3deg) scale(.965)}
        .interactive-stack:hover .interactive-card[data-pos='2']{transform:translate(-50%,-50%) translate(57px,50px) rotate(-3.5deg) scale(.93)}
        .interactive-stack:hover .interactive-card[data-pos='3']{transform:translate(-50%,-50%) translate(86px,77px) rotate(4deg) scale(.895)}
      }
      .card-inner{position:relative;width:100%;height:100%;padding:28px;overflow:hidden}
      .card-inner:after{content:'';position:absolute;right:-70px;bottom:-90px;width:250px;height:250px;border-radius:50%;background:rgba(255,255,255,.12)}
      .card-kicker{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;gap:12px;color:rgba(17,19,15,.68);font-size:9px;font-weight:850;letter-spacing:.14em;text-transform:uppercase}
      .card-kicker span:last-child{display:grid;place-items:center;width:31px;height:31px;border:1px solid rgba(17,19,15,.14);border-radius:50%;font-size:14px}
      .card-title{position:relative;z-index:2;max-width:340px;margin-top:70px;color:#11130f;font-family:'Arial Narrow','Helvetica Neue',Arial,sans-serif;font-size:48px;line-height:.88;letter-spacing:-.045em}
      .card-desc{position:relative;z-index:2;max-width:330px;margin-top:15px;color:rgba(17,19,15,.67);font-size:11px;line-height:1.65}
      .card-visual{position:absolute;right:22px;top:73px;z-index:2;width:108px;height:108px}
      .card-visual .orb{position:absolute;border-radius:50%;border:1px solid rgba(17,19,15,.18)}
      .card-visual .orb.a{inset:5px}.card-visual .orb.b{inset:22px}.card-visual .orb.c{inset:39px;background:rgba(17,19,15,.12)}
      .interactive-card[data-index='0'] .card-inner{background:#b9f64b}
      .interactive-card[data-index='1'] .card-inner{background:#f1efe7}
      .interactive-card[data-index='2'] .card-inner{background:#b8b7ff}
      .interactive-card[data-index='3'] .card-inner{background:#f39b76}
      .interactive-card[data-index='1'] .card-visual{transform:rotate(45deg)}
      .interactive-card[data-index='2'] .card-visual .orb{border-radius:22px}
      .interactive-card[data-index='3'] .card-visual .orb.a{border-radius:18px;transform:rotate(22deg)}

      .stack-controls{position:relative;z-index:10;display:flex;align-items:center;justify-content:space-between;gap:18px;margin-top:25px}
      .stack-status{color:#8f9488;font-size:10px;font-weight:750;letter-spacing:.09em;text-transform:uppercase}.stack-status strong{color:#fff}
      .stack-buttons{display:flex;gap:10px}.stack-buttons button{display:grid;place-items:center;width:48px;height:48px;border:1px solid rgba(255,255,255,.13);border-radius:50%;background:rgba(255,255,255,.04);color:#fff;cursor:pointer;transition:transform 160ms ease,background 160ms ease,border-color 160ms ease}.stack-buttons button:hover{transform:scale(1.06);background:rgba(185,246,75,.11);border-color:rgba(185,246,75,.35)}.stack-buttons button:focus-visible{outline:2px solid #b9f64b;outline-offset:3px}
      .stack-buttons svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}

      @media(max-width:1100px){.interactive-grid{grid-template-columns:1fr;gap:56px}.cardstack-shell{min-height:550px}.interactive-copy h2,.interactive-copy>p{max-width:none}}
      @media(max-width:760px){.interactive-section{padding:86px 0}.interactive-grid{gap:42px}.cardstack-shell{min-height:470px;padding:22px 16px 20px;border-radius:28px}.interactive-stack{height:335px}.interactive-card{width:82%;height:265px;border-radius:22px}.interactive-card[data-pos='1']{transform:translate(-50%,-50%) translate(13px,15px) rotate(2deg) scale(.96)}.interactive-card[data-pos='2']{transform:translate(-50%,-50%) translate(25px,29px) rotate(-2.5deg) scale(.92)}.interactive-card[data-pos='3']{transform:translate(-50%,-50%) translate(37px,43px) rotate(3deg) scale(.88)}.card-inner{padding:21px}.card-title{margin-top:50px;font-size:35px}.card-desc{max-width:235px;font-size:10px}.card-visual{right:13px;top:58px;width:82px;height:82px}.stack-topline{margin-bottom:5px}.stack-hint{display:none}.stack-controls{margin-top:12px}.interactive-footnote{margin-top:24px}}
      @media(prefers-reduced-motion:reduce){.interactive-card{transition:none!important}}
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.className = 'section interactive-section';
    section.id = 'interactive-section';
    section.innerHTML = `
      <div class="container interactive-grid">
        <div class="section-heading interactive-copy reveal is-visible">
          <div class="eyebrow"><span></span> Interactive websites</div>
          <h2>We build websites people can <em>actually interact with.</em></h2>
          <p>Not everything has to sit still. We can create drag interactions, stacked cards, hover reactions, scroll-driven motion, product explorers and custom micro-interactions that make your brand feel more alive.</p>
          <div class="interactive-pills"><span>Drag & swipe</span><span>Hover reactions</span><span>Scroll effects</span><span>Micro-interactions</span><span>Custom UI</span></div>
          <div class="interactive-footnote"><i>↗</i><span>Try the card stack. Drag it, swipe it, or use the arrows — this section is the demo.</span></div>
        </div>

        <div class="cardstack-shell reveal is-visible">
          <div class="stack-topline"><span class="stack-live">Live interaction</span><span class="stack-hint">Drag / click / swipe</span></div>
          <div class="interactive-stack" data-card-stack aria-label="Interactive Veyro capabilities card stack">
            <button class="interactive-card" type="button" data-index="0" aria-label="Interactive card: Hover and motion">
              <div class="card-inner"><div class="card-kicker"><span>01 / Hover + motion</span><span>↗</span></div><div class="card-title">Interfaces that react.</div><div class="card-desc">Buttons, cards and visuals can respond smoothly to the way a visitor moves through your site.</div><div class="card-visual"><span class="orb a"></span><span class="orb b"></span><span class="orb c"></span></div></div>
            </button>
            <button class="interactive-card" type="button" data-index="1" aria-label="Interactive card: Drag and swipe">
              <div class="card-inner"><div class="card-kicker"><span>02 / Drag + swipe</span><span>↔</span></div><div class="card-title">Gestures feel natural.</div><div class="card-desc">Carousels, galleries and product displays can move with direct drag and touch interaction.</div><div class="card-visual"><span class="orb a"></span><span class="orb b"></span><span class="orb c"></span></div></div>
            </button>
            <button class="interactive-card" type="button" data-index="2" aria-label="Interactive card: Scroll storytelling">
              <div class="card-inner"><div class="card-kicker"><span>03 / Scroll effects</span><span>↓</span></div><div class="card-title">Motion tells the story.</div><div class="card-desc">Sections can reveal, transform and progress as people scroll instead of feeling like a static page.</div><div class="card-visual"><span class="orb a"></span><span class="orb b"></span><span class="orb c"></span></div></div>
            </button>
            <button class="interactive-card" type="button" data-index="3" aria-label="Interactive card: Custom UI interactions">
              <div class="card-inner"><div class="card-kicker"><span>04 / Custom UI</span><span>+</span></div><div class="card-title">Made around your brand.</div><div class="card-desc">Interactive details are designed to fit your business, not pasted in as generic effects.</div><div class="card-visual"><span class="orb a"></span><span class="orb b"></span><span class="orb c"></span></div></div>
            </button>
          </div>
          <div class="stack-controls">
            <div class="stack-status"><strong data-stack-current>01</strong> / 04 &nbsp; Interactive capabilities</div>
            <div class="stack-buttons">
              <button type="button" data-stack-prev aria-label="Previous interactive card"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg></button>
              <button type="button" data-stack-next aria-label="Next interactive card"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
            </div>
          </div>
        </div>
      </div>`;

    anchor.insertAdjacentElement('afterend', section);

    const stack = section.querySelector('[data-card-stack]');
    const cards = [...section.querySelectorAll('.interactive-card')];
    const currentLabel = section.querySelector('[data-stack-current]');
    const prev = section.querySelector('[data-stack-prev]');
    const next = section.querySelector('[data-stack-next]');
    let order = [0, 1, 2, 3];
    let locked = false;
    let startX = 0;
    let startY = 0;
    let dragging = false;

    const render = () => {
      cards.forEach((card) => {
        const index = Number(card.dataset.index);
        const pos = order.indexOf(index);
        card.dataset.pos = String(pos);
        card.tabIndex = pos === 0 ? 0 : -1;
        card.setAttribute('aria-hidden', pos === 0 ? 'false' : 'true');
      });
      currentLabel.textContent = String(order[0] + 1).padStart(2, '0');
    };

    const navigate = (direction) => {
      if (locked) return;
      locked = true;
      const front = cards[order[0]];
      front.classList.add(direction === 'prev' ? 'is-throw-prev' : 'is-throw-next');

      window.setTimeout(() => {
        front.classList.remove('is-throw-next', 'is-throw-prev');
        if (direction === 'prev') order.unshift(order.pop());
        else order.push(order.shift());
        render();
        window.setTimeout(() => { locked = false; }, 430);
      }, 270);
    };

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        if (!dragging && card.dataset.pos === '0') navigate('next');
      });
    });

    prev.addEventListener('click', () => navigate('prev'));
    next.addEventListener('click', () => navigate('next'));

    stack.addEventListener('pointerdown', (event) => {
      startX = event.clientX;
      startY = event.clientY;
      dragging = false;
      if (stack.setPointerCapture) stack.setPointerCapture(event.pointerId);
    });

    stack.addEventListener('pointermove', (event) => {
      if (Math.abs(event.clientX - startX) > 8 || Math.abs(event.clientY - startY) > 8) dragging = true;
    });

    stack.addEventListener('pointerup', (event) => {
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) navigate(dx > 0 ? 'prev' : 'next');
      window.setTimeout(() => { dragging = false; }, 0);
    });

    render();
  };

  mount();
})();
