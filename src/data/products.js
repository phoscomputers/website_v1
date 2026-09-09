export const PRODUCTS_DATA = [
  {
    id: 'chronos-apex',
    name: 'PHOS Chronos Apex 4K Titan',
    category: 'rigs',
    badge: 'FLAGSHIP ENTHUSIAST',
    badgeColor: 'border-[#ff1e38]/60 text-white bg-[#ff1e38]/20',
    meta: 'PHOS APEX // CHRONOS MK-V',
    price: 5499,
    priceLabel: 'STARTING AT',
    stockCount: 18,
    stockStatus: 'In Warehouse (18 Units)',
    desc: 'Ultra-enthusiast hardline liquid-cooled architecture designed for unthrottled 4K/8K ray tracing, multi-stream encoding, and heavy real-time production rendering.',
    specs: {
      cpu: 'Intel Core i9-14900KS (24-Core, 6.2GHz)',
      gpu: 'NVIDIA GeForce RTX 4090 24GB GDDR6X',
      ram: '96GB DDR5 7200MHz Corsair Dominator Titanium',
      storage: '4TB Gen5 Extreme NVMe (12,400 MB/s)',
      cooling: 'Custom EK Quantum Hardline Dual 480mm Loop',
      motherboard: 'ASUS ROG MAXIMUS Z790 DARK HERO',
      power: 'Seasonic PRIME TX-1300W Titanium'
    }
  },
  {
    id: 'neural-x',
    name: 'PHOS Neural-X Workstation',
    category: 'workstations',
    badge: 'DEEP LEARNING / VFX CLUSTER',
    badgeColor: 'border-[#ff1e38] text-[#ff334b] bg-[#ff1e38]/25',
    meta: 'ENTERPRISE COMPUTE NODE',
    price: 19850,
    priceLabel: 'ENTERPRISE CONFIG',
    stockCount: 6,
    stockStatus: 'Built to Order (3-Day Turnaround)',
    desc: 'Dual-accelerator high-density compute tower optimized for LLM fine-tuning, photorealistic Unreal Engine 5 virtual production, and molecular simulations.',
    specs: {
      cpu: 'AMD Ryzen Threadripper Pro 7995WX (96 Cores / 192 Threads)',
      gpu: '2x NVIDIA RTX 6000 Ada Generation 48GB (96GB ECC VRAM)',
      ram: '256GB ECC Registered Octa-Channel DDR5-5600',
      storage: '16TB Enterprise NVMe U.2 Array (Micron 9400 PRO)',
      cooling: 'Industrial Closed-Loop Dual Liquid Coolers',
      motherboard: 'ASUS Pro WS WRX90E-SAGE SE (Dual 10GbE)',
      power: '2400W Titanium Redundant 1+1 PSU'
    }
  },
  {
    id: 'specter-pro',
    name: 'PHOS Specter Pro-X',
    category: 'rigs',
    badge: 'ESPORTS 540HZ READY',
    badgeColor: 'border-white/20 text-white bg-black/60',
    meta: 'COMPETITIVE FRAME-RATE KING',
    price: 3299,
    priceLabel: 'STARTING AT',
    stockCount: 32,
    stockStatus: 'In Warehouse (32 Units Ready)',
    desc: 'Engineered for tournament-grade 540Hz esports monitors with near-zero frame latency, direct cold-plate thermal transfer, and silent acoustics.',
    specs: {
      cpu: 'AMD Ryzen 7 7800X3D (8-Core with 3D V-Cache)',
      gpu: 'NVIDIA GeForce RTX 4080 Super 16GB OC Edition',
      ram: '64GB DDR5 6400MHz CL30 EXPO Low-Latency',
      storage: '2TB Gen4 NVMe SSD (7,400 MB/s)',
      cooling: 'Phanteks Glacier One 360D30 Premium AIO',
      motherboard: 'MSI MAG X670E TOMAHAWK WIFI',
      power: 'Corsair RM1000x Shift ATX 3.0 Gold'
    }
  },
  {
    id: 'nomad-18',
    name: 'PHOS Nomad Precision 18',
    category: 'laptops',
    badge: 'MOBILE DESKTOP REPLACEMENT',
    badgeColor: 'border-white/20 text-white bg-black/60',
    meta: 'PORTABLE WORKFORCE FLEET',
    price: 3899,
    priceLabel: 'FLEET UNIT PRICE',
    stockCount: 45,
    stockStatus: 'In Warehouse (45 Units)',
    desc: '18-inch desktop power packaged in a CNC magnesium unibody. Designed for game developers, VFX artists, and mobile AI deployments on location.',
    specs: {
      cpu: 'Intel Core i9-14900HX (Up to 5.8 GHz Turbo)',
      gpu: 'NVIDIA RTX 4090 Laptop GPU (175W Maximum TGP)',
      ram: '64GB DDR5 5600MHz Dual-Channel',
      storage: '4TB (2x2TB) Gen4 NVMe RAID-0 Array',
      cooling: 'Full Vapor Chamber + Liquid Metal Thermal Interface',
      screen: '18" 4K UHD+ 240Hz Mini-LED 100% DCI-P3 1000 nits',
      power: '330W GaN Ultra-Compact Power Adapter'
    }
  },
  {
    id: 'gpu-pallet',
    name: 'Enterprise Master GPU & Motherboard Lots',
    category: 'parts',
    badge: 'OEM FACTORY DIRECT LOT',
    badgeColor: 'border-[#ff1e38] text-[#ff334b] bg-[#ff1e38]/25',
    meta: 'FACTORY SEALED OEM TIER-1',
    price: 'Tiered B2B',
    priceLabel: 'VOLUME PRICING',
    stockCount: 420,
    stockStatus: 'Master Carton / Pallet Available',
    desc: 'Bulk commercial allocations of RTX 4090/4080, workstation Ada GPUs, ASUS ROG motherboards, and Corsair platinum power supplies for system integrators.',
    specs: {
      packaging: 'Original Factory Anti-Static Sealed Cartons',
      serialization: 'Direct Factory Digital Barcode Serial Manifest',
      warranty: 'Full OEM Factory Warranty + PHOS Advance RMA',
      moq: 'Singular or Pallet Tiers (5 - 500 units)',
      dispatch: 'Armored Freight & Temperature Controlled Dispatch',
      logistics: 'Fulfilled directly from 50,000 sq ft logistics hub'
    }
  },
  {
    id: 'obsidian-studio',
    name: 'PHOS Obsidian Studio Master',
    category: 'rigs',
    badge: 'CONTENT CREATION & 3D',
    badgeColor: 'border-white/20 text-white bg-black/60',
    meta: 'AUDIO STUDIO / 4K TIMELINE',
    price: 2649,
    priceLabel: 'STARTING AT',
    stockCount: 24,
    stockStatus: 'In Warehouse (24 Units)',
    desc: 'Acoustically dampened chassis operating below 22dB under 100% render load. Certified for DaVinci Resolve Studio, Adobe Premiere, and Blender cycles.',
    specs: {
      cpu: 'Intel Core i7-14700K (20-Core, 28-Threads)',
      gpu: 'NVIDIA GeForce RTX 4070 Ti Super 16GB Studio Edition',
      ram: '64GB DDR5 6000MHz High-Stability Low Latency',
      storage: '2TB OS NVMe + 4TB High-Speed Scratch Cache Drive',
      cooling: 'Acoustic Sound-Dampened Liquid Loop with Noctua PWM Fans',
      motherboard: 'GIGABYTE Z790 AERO G (VisionLINK Thunderbolt)',
      power: '850W Platinum Ultra-Quiet PSU'
    }
  }
];
