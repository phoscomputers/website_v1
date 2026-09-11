/**
 * PHOS | HIGH-PERFORMANCE COMPUTING & ENTERPRISE WAREHOUSING
 * Interactive Experience Scripts
 */

/* =================== 5 TOP PCS DATA =================== */
const TOP_PCS_DATA = [
  {
    id: 'apex-titan',
    name: 'PHOS Apex Titan MK-IX',
    category: 'Gaming Flagship',
    type: 'GAMING',
    badge: '4K/8K RAY-TRACING TITAN',
    price: '$5,499',
    desc: 'Unthrottled 4K/8K extreme ray-tracing battle-station engineered with custom hardline liquid cooling and hand-binned silicon.',
    photos: [
      {
        title: 'Front Obsidian Tempered Glass & Crimson Aura',
        url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        desc: 'Anodized black aluminum chassis with laser red LED illumination'
      },
      {
        title: 'Internal Dual 480mm Liquid Loop & GPU Block',
        url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        desc: 'EK Quantum custom acrylic hardline tubing with nickel-plated copper cold plates'
      },
      {
        title: 'Motherboard VRM & Sleeved Cable Routing',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        desc: 'Precision laser-aligned comb cables with military-grade EMI shielding'
      }
    ],
    specs: {
      'Processor (CPU)': 'Intel Core i9-14900KS (24 Cores, 32 Threads, 6.2 GHz Peak OC)',
      'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4090 24GB GDDR6X (Factory Waterblock OC)',
      'System Memory (RAM)': '96GB (2x48GB) DDR5 7200MHz Corsair Dominator Titanium CL32',
      'Primary Storage': '4TB Crucial T700 Gen5 NVMe SSD (12,400 MB/s Read / 11,800 MB/s Write)',
      'Motherboard': 'ASUS ROG MAXIMUS Z790 DARK HERO (Wi-Fi 7, Dual Thunderbolt 4)',
      'Liquid Cooling': 'Custom Dual 480mm Radiators with D5 PWM High-Pressure Pump',
      'Power Supply (PSU)': 'Seasonic PRIME TX-1300W 80 PLUS Titanium Fully Modular',
      'Thermal Profile': 'Sub-28°C Ambient Idle / Sub-62°C under 100% Ray-Tracing Load'
    }
  },
  {
    id: 'neural-x',
    name: 'PHOS Neural-X Deep Learning Cluster',
    category: 'Enterprise AI',
    type: 'AI',
    badge: 'LLM & NEURAL NETWORK CLUSTER',
    price: '$19,850',
    desc: 'Dual-accelerator high-density AI workstation tuned for local LLM fine-tuning, PyTorch tensor training, and massive dataset inference.',
    photos: [
      {
        title: 'Chassis Dual Accelerator Airflow Chamber',
        url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        desc: 'Dual blower-ducted architecture designed for 24/7 continuous model training'
      },
      {
        title: 'Dual RTX 6000 Ada Generation Silicon Bay',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        desc: 'Total 96GB high-bandwidth ECC VRAM across dual NVLink-ready PCIe 5.0 lanes'
      },
      {
        title: 'Enterprise Server-Grade Redundant Power Modules',
        url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        desc: 'Hot-swappable dual 2400W 1+1 redundant titanium power supplies'
      }
    ],
    specs: {
      'Processor (CPU)': 'AMD Ryzen Threadripper Pro 7995WX (96 Cores / 192 Threads, 5.1 GHz)',
      'AI Accelerators (GPU)': '2x NVIDIA RTX 6000 Ada Generation 48GB (Total 96GB ECC VRAM)',
      'System Memory (RAM)': '256GB (8x32GB) Registered ECC DDR5-5600 Octa-Channel Array',
      'Enterprise Storage': '16TB (2x8TB) Micron 9400 PRO Enterprise U.2 NVMe RAID-0',
      'Motherboard': 'ASUS Pro WS WRX90E-SAGE SE (Dual 10GbE SFP+ Ports)',
      'Cooling Solution': 'Dual Industrial Closed-Loop 360mm AIO with Ceramic Bearings',
      'Software Stack': 'Pre-provisioned Ubuntu Linux 24.04 LTS + CUDA 12.4 + PyTorch + Docker',
      'Power Delivery': '2400W Titanium Redundant 1+1 Server PSU'
    }
  },
  {
    id: 'specter-pro',
    name: 'PHOS Specter Pro-X',
    category: 'Esports Gaming',
    type: 'GAMING',
    badge: '540HZ TOURNAMENT KING',
    price: '$3,299',
    desc: 'Low-latency competitive gaming rig built specifically for 540Hz/360Hz esports displays with zero input latency and maximized 1% lows.',
    photos: [
      {
        title: 'Obsidian Minimalist Stealth Enclosure',
        url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        desc: 'Matte black anti-glare finish with crimson backplate accents'
      },
      {
        title: 'Direct Copper Cold Plate & Thermal Transfer',
        url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        desc: '360mm radiator with high-static pressure fans calibrated for ultra-low acoustics'
      },
      {
        title: 'High-Speed Memory & Motherboard Routing',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        desc: 'Hand-tuned low sub-timings (CL30) for zero frame dips in competitive matches'
      }
    ],
    specs: {
      'Processor (CPU)': 'AMD Ryzen 7 7800X3D (8 Cores, 16 Threads with 96MB 3D V-Cache)',
      'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4080 Super 16GB OC Edition',
      'System Memory (RAM)': '64GB (2x32GB) DDR5 6400MHz CL30 AMD EXPO Low Latency',
      'Fast NVMe Storage': '2TB Samsung 990 PRO Gen4 NVMe SSD (7,450 MB/s)',
      'Motherboard': 'MSI MAG X670E TOMAHAWK WIFI (Low-DPC Latency BIOS)',
      'Cooling Architecture': 'Phanteks Glacier One 360D30 Premium Triple-Fan Cooler',
      'Power Supply': 'Corsair RM1000x Shift ATX 3.0 Gold Fully Modular',
      'Input Latency Profile': 'Sub-1.2ms render pipeline latency tuned for CS2 / Valorant / Apex'
    }
  },
  {
    id: 'hyper-station',
    name: 'PHOS Hyper-Station AI Pro',
    category: 'Local AI & CAD',
    type: 'AI',
    badge: 'NEURAL INFERENCE & 3D CAD',
    price: '$6,850',
    desc: 'Balanced workstation designed for local developer AI inference (Llama-3, Mistral, Stable Diffusion XL) and massive parametric CAD assemblies.',
    photos: [
      {
        title: 'Workstation Aluminum Tower with Filtered Mesh',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        desc: 'High-airflow positive pressure dust filtration with tool-less side panels'
      },
      {
        title: 'High-VRAM GPU & Multi-NVMe Heatsink Array',
        url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        desc: 'Heavy-duty copper heat spreaders across all 4 NVMe drive channels'
      },
      {
        title: '128GB High-Density Quad-Channel Memory Banks',
        url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        desc: 'Continuous 24/7 memory stability certified through 72-hour MemTest86 passes'
      }
    ],
    specs: {
      'Processor (CPU)': 'Intel Core Ultra 9 185H / i9-14900K (24 Cores / 32 Threads)',
      'Graphics Accelerator': 'NVIDIA GeForce RTX 4090 24GB (512 Tensor Cores, DLSS 3.5)',
      'Memory Array': '128GB (4x32GB) DDR5 6000MHz High-Stability Quad Array',
      'Dual Storage Array': '2TB OS NVMe + 4TB High-Speed Scratch NVMe (Total 6TB Gen4)',
      'Motherboard': 'ProArt Z790-CREATOR WIFI (Dual 10G/2.5G LAN + Thunderbolt 4)',
      'Cooling': 'Noctua NH-D15 chromax.black Dual-Tower Air Cooler (<22 dB)',
      'Power Delivery': '1200W Seasonic FOCUS GX ATX 3.0 Gold',
      'Local AI Benchmark': 'Over 85 tokens/sec local inference on 8B parameter models'
    }
  },
  {
    id: 'omni-studio',
    name: 'PHOS Omni-Studio Unreal',
    category: 'Gaming & Production',
    type: 'GAMING',
    badge: 'UNREAL ENGINE 5 & REAL-TIME VFX',
    price: '$7,290',
    desc: 'The ultimate crossover rig. Handles cutting-edge 8K virtual filmmaking, Nanite & Lumen photorealism, AI texture upscaling, and max-settings 4K gaming.',
    photos: [
      {
        title: 'Dual-Chamber Studio Acoustic Chassis',
        url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        desc: 'Acoustic sound-dampening foam lining reducing decibel output to near-silence'
      },
      {
        title: 'RTX 4090 OC with Reinforced Anti-Sag Bracket',
        url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        desc: 'Solid aircraft-grade aluminum GPU bracket preventing PCIe slot strain'
      },
      {
        title: 'Ultra-High Speed 10GbE Network & Scratch Storage',
        url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
        desc: '10 Gigabit fiber connection for instant project transfer to NAS warehouse servers'
      }
    ],
    specs: {
      'Processor (CPU)': 'AMD Ryzen 9 7950X3D (16 Cores, 32 Threads, 144MB Cache)',
      'Graphics Card (GPU)': 'NVIDIA GeForce RTX 4090 24GB ASUS ROG STRIX OC',
      'System Memory (RAM)': '96GB (2x48GB) DDR5 6400MHz Low-Latency',
      'Storage Configuration': '4TB Gen5 System Drive + 8TB Gen4 High-Speed Asset Cache',
      'Motherboard': 'ASUS ROG CROSSHAIR X670E HERO (USB4 / PCIe 5.0)',
      'Cooling Loop': 'NZXT Kraken Elite 360 RGB with Custom LCD Telemetry Screen',
      'Power Supply': '1300W MSI MEG Ai1300P PCIE5 Platinum',
      'VFX Validation': 'Tested with Unreal Engine 5.4, DaVinci Resolve Studio & Blender Cycles'
    }
  }
];

let currentSelectedPc = null;
let activeModalIndex = 0;

/* Render PC Cards */
function renderPcs(filter = 'ALL') {
  const container = document.getElementById('pcs-container');
  if (!container) return;

  const filtered = filter === 'ALL'
    ? TOP_PCS_DATA
    : filter === 'GAMING'
      ? TOP_PCS_DATA.filter(p => p.type.includes('GAMING'))
      : TOP_PCS_DATA.filter(p => p.type.includes('AI'));

  container.innerHTML = filtered.map(pc => `
    <div class="glass-card pc-card">
      <div class="pc-photo-frame">
        <img src="${pc.photos[0].url}" alt="${pc.name}">
        <div class="pc-badge-top">
          <i class="fa-solid ${pc.type.includes('AI') ? 'fa-brain' : 'fa-gamepad'} text-red"></i>
          <span>${pc.badge}</span>
        </div>
        <div class="pc-price-tag">${pc.price}</div>
      </div>

      <div class="pc-content">
        <div class="pc-meta">${pc.category}</div>
        <h3 class="pc-name">${pc.name}</h3>
        <p class="pc-desc">${pc.desc}</p>

        <div class="pc-quick-specs">
          ${Object.entries(pc.specs).slice(0, 3).map(([k, v]) => `
            <div class="spec-line">
              <span>${k.split(' ')[0]}:</span>
              <strong>${v}</strong>
            </div>
          `).join('')}
        </div>

        <button class="btn-cyber" style="width: 100%;" onclick="openSpecsModal('${pc.id}')">
          <i class="fa-solid fa-eye"></i>
          <span>VIEW SPECS & 3 GALLERY ANGLES</span>
        </button>
      </div>
    </div>
  `).join('');
}

function filterPcs(category) {
  playSfx('click');
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (category === 'ALL') document.getElementById('f-all').classList.add('active');
  else if (category === 'GAMING') document.getElementById('f-gaming').classList.add('active');
  else if (category === 'AI') document.getElementById('f-ai').classList.add('active');

  renderPcs(category);
}

/* Modal Logic */
function openSpecsModal(pcId) {
  playSfx('click');
  const pc = TOP_PCS_DATA.find(p => p.id === pcId);
  if (!pc) return;
  currentSelectedPc = pc;

  document.getElementById('modal-pc-badge').textContent = `${pc.badge} // SPECIFICATION BREAKDOWN`;
  document.getElementById('modal-pc-name').textContent = pc.name;
  document.getElementById('modal-pc-price').textContent = pc.price;

  // Render Gallery
  switchPhotoAngle(0);

  // Render Thumbnails
  const thumbsContainer = document.getElementById('modal-thumbnails-row');
  thumbsContainer.innerHTML = pc.photos.map((p, idx) => `
    <div class="thumb-btn ${idx === 0 ? 'active' : ''}" id="thumb-${idx}" onclick="switchPhotoAngle(${idx})">
      <img src="${p.url}" alt="${p.title}">
      <span style="position: absolute; bottom: 2px; left: 4px; font-family: var(--font-mono); font-size: 8px; font-weight: bold; color: #fff; background: rgba(0,0,0,0.6); padding: 1px 4px; border-radius: 2px;">
        ANGLE 0${idx + 1}
      </span>
    </div>
  `).join('');

  // Render Specs Table
  const table = document.getElementById('modal-specs-table');
  table.innerHTML = Object.entries(pc.specs).map(([label, val], i) => `
    <tr style="${i % 2 === 0 ? 'background: rgba(255,255,255,0.02);' : ''}">
      <td>${label}</td>
      <td>${val}</td>
    </tr>
  `).join('');

  document.getElementById('specs-modal').classList.add('open');
}

function switchPhotoAngle(idx) {
  if (!currentSelectedPc) return;
  playSfx('click');
  activeModalIndex = idx;
  const photo = currentSelectedPc.photos[idx];
  document.getElementById('modal-main-photo').src = photo.url;
  document.getElementById('modal-photo-title').textContent = photo.title;
  document.getElementById('modal-photo-desc').textContent = photo.desc;

  document.querySelectorAll('.thumb-btn').forEach((btn, i) => {
    if (i === idx) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

function closeSpecsModal() {
  playSfx('click');
  document.getElementById('specs-modal').classList.remove('open');
}

function selectCurrentPcForEnquiry() {
  if (!currentSelectedPc) return;
  closeSpecsModal();
  document.getElementById('enq-subject').value = `Enquiry for ${currentSelectedPc.name}`;
  document.getElementById('enq-message').value = `Hi PHOS Team,\n\nI would like to enquire about the ${currentSelectedPc.name} (${currentSelectedPc.price}). Please send me the formal quotation, lead time, and warehouse dispatch schedule.`;
  
  showToast(`Selected ${currentSelectedPc.name}! Proceeding to Enquiry.`);
  scrollToPage('page-3');
}

/* Scroll Navigation */
function scrollToPage(pageId) {
  playSfx('click');
  const el = document.getElementById(pageId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Scroll spy
window.addEventListener('scroll', () => {
  const p1 = document.getElementById('page-1');
  const p2 = document.getElementById('page-2');
  const p3 = document.getElementById('page-3');
  const scrollPos = window.scrollY + window.innerHeight / 3;

  document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
  if (p3 && scrollPos >= p3.offsetTop) {
    document.getElementById('tab-p3').classList.add('active');
  } else if (p2 && scrollPos >= p2.offsetTop) {
    document.getElementById('tab-p2').classList.add('active');
  } else {
    document.getElementById('tab-p1').classList.add('active');
  }
});

/* Toast Helper */
function showToast(msg) {
  const toast = document.getElementById('cyber-toast');
  document.getElementById('toast-text').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function copyText(txt, alertMsg) {
  playSfx('click');
  navigator.clipboard.writeText(txt).then(() => {
    showToast(alertMsg);
  });
}

/* Google Form link customizer */
function toggleEditGoogleForm() {
  playSfx('click');
  const editBox = document.getElementById('form-url-edit-box');
  editBox.style.display = editBox.style.display === 'none' ? 'block' : 'none';
}

function saveCustomGoogleForm() {
  playSfx('click');
  const input = document.getElementById('custom-form-input');
  const val = input.value.trim();
  if (val) {
    document.getElementById('google-form-link-btn').href = val;
    document.getElementById('current-form-url').textContent = val;
    document.getElementById('test-form-link').href = val;
    document.getElementById('form-url-edit-box').style.display = 'none';
    showToast('Google Form link saved successfully!');
  }
}

/* Direct message submit */
function handleDirectMessageSubmit(e) {
  e.preventDefault();
  playSfx('activate');
  const name = document.getElementById('enq-name').value;
  showToast(`Enquiry transmitted, ${name}! We will reply to your email within 2 hours.`);
  e.target.reset();
}

/* =================== AMBIENT CANVAS PARTICLES =================== */
const canvas = document.getElementById('cyber-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
const particleCount = 42;
let mouse = { x: null, y: null, radius: 140 };

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.4 + 0.1;
    this.isRed = Math.random() > 0.65;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    if (mouse.x !== null && mouse.y !== null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        let force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 1.5;
        this.y -= (dy / dist) * force * 1.5;
      }
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.isRed ? `rgba(255, 30, 56, ${this.alpha * 1.5})` : `rgba(180, 195, 220, ${this.alpha * 0.5})`;
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let dx = particles[i].x - particles[j].x;
      let dy = particles[i].y - particles[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(255, 30, 56, ${(1 - dist / 130) * 0.12})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }
    }
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* =================== WEB AUDIO SYNTHESIZER =================== */
let audioCtx = null;
let sfxOn = false;

function toggleAudioEngine() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();

  sfxOn = !sfxOn;
  const btn = document.getElementById('sfx-toggle-btn');
  const icon = document.getElementById('sfx-icon');
  const text = document.getElementById('sfx-text');

  if (sfxOn) {
    btn.classList.add('active');
    icon.className = 'fa-solid fa-volume-high text-red';
    text.textContent = 'SFX: ON';
    playSfx('activate');
    showToast('Cybernetic Audio Interface: ONLINE');
  } else {
    btn.classList.remove('active');
    icon.className = 'fa-solid fa-volume-xmark';
    text.textContent = 'SFX: OFF';
  }
}

function playSfx(type) {
  if (!sfxOn || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.06);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'activate') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.16);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      osc.start(now);
      osc.stop(now + 0.16);
    }
  } catch (e) {}
}

// Init PCs on load
document.addEventListener('DOMContentLoaded', () => {
  renderPcs('ALL');
});
