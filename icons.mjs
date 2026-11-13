// Power-Up Talent signature icon set: simple 24px line icons drawn for this site.
// Icons inherit colour via `currentColor` and are decorative (aria-hidden) unless labelled nearby.
const paths = {
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/><path d="M12 1.5V5M12 19v3.5M1.5 12H5M19 12h3.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 13.6c2.8.2 5 2.6 5 5.4"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5"/>',
  handshake: '<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2.8 2.8 0 0 0-4 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a5.1 5.1 0 0 1 6.2-.8l.5.3a3.6 3.6 0 0 0 2.5.4L21 6"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2M3 4h8"/>',
  radar: '<path d="M19.1 4.9A10 10 0 1 0 22 12"/><path d="M16.2 7.8A6 6 0 1 0 18 12"/><circle cx="12" cy="12" r="1.6"/><path d="m13.2 10.8 6-6"/>',
  shield: '<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  globe: '<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19M12 2.5a14.5 14.5 0 0 0 0 19"/>',
  list: '<path d="m3 6 1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17M11 6h10M11 12h10M11 18h10"/>',
  file: '<path d="M14 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8Z"/><path d="M14 2.5V8h5.5M8.5 13h7M8.5 17h5"/>',
  lock: '<rect x="4" y="10.5" width="16" height="11" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5M12 15v2.5"/>',
  book: '<path d="M2.5 4.5h6a3.5 3.5 0 0 1 3.5 3.5v13a2.6 2.6 0 0 0-2.6-2.6H2.5ZM21.5 4.5h-6A3.5 3.5 0 0 0 12 8v13a2.6 2.6 0 0 1 2.6-2.6h6.9Z"/>',
  layers: '<path d="m12 2.5 9.5 5-9.5 5-9.5-5Z"/><path d="m2.5 12 9.5 5 9.5-5M2.5 16.5l9.5 5 9.5-5"/>',
  database: '<ellipse cx="12" cy="5" rx="8.5" ry="3"/><path d="M3.5 5v14c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3V5M3.5 12c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3"/>',
  bulb: '<path d="M9 18h6M10 21.5h4"/><path d="M12 2.5a6.5 6.5 0 0 0-4 11.6c.7.6 1 1.4 1 2.4V18h6v-1.5c0-1 .3-1.8 1-2.4a6.5 6.5 0 0 0-4-11.6Z"/>',
  arrow: '<circle cx="12" cy="12" r="9.5"/><path d="M8 12h8M12.5 8l4 4-4 4"/>',
  usercheck: '<circle cx="9" cy="8" r="4"/><path d="M2.5 21c0-3.6 2.9-6.5 6.5-6.5 1.5 0 2.9.5 4 1.4"/><path d="m15.5 18 2 2 4-4.5"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>',
  truck: '<path d="M1.5 5.5h12v11h-12ZM13.5 9.5h4l3.5 3.5v3.5h-7.5"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  hardhat: '<path d="M2.5 18.5h19M4 18.5v-3a8 8 0 0 1 16 0v3"/><path d="M10 7.8V5h4v2.8M8 8.6V13M16 8.6V13"/>',
  cog: '<circle cx="12" cy="12" r="3.2"/><path d="M12 1.8v3M12 19.2v3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M1.8 12h3M19.2 12h3M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1"/><circle cx="12" cy="12" r="7"/>',
  trend: '<path d="m2.5 17 6.5-6.5 4 4 8.5-8.5"/><path d="M15.5 6h6v6"/>',
  clock: '<circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.5 2.5"/>',
  award: '<circle cx="12" cy="9" r="6.5"/><path d="m8.5 14.5-1.5 7.5 5-2.8 5 2.8-1.5-7.5"/><path d="m9.5 9 1.8 1.8L14.8 7.5"/>',
  power: '<path d="M12 2.5v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/>',
  chat: '<path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5A8.5 8.5 0 1 1 21 12Z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>',
  search: '<circle cx="10.5" cy="10.5" r="7"/><path d="m15.8 15.8 5.7 5.7"/>',
  sparkle: '<path d="M12 2.5 14 10l7.5 2-7.5 2-2 7.5-2-7.5-7.5-2L10 10Z"/><path d="M19 2.5v4M17 4.5h4"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/>',
  building: '<path d="M4 21.5V4a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 15 4v17.5M15 9h3.5a1.5 1.5 0 0 1 1.5 1.5v11M2.5 21.5h19"/><path d="M8 7h3M8 11h3M8 15h3"/>',
  chart: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>',
  compass: '<circle cx="12" cy="12" r="9.5"/><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4Z"/>',
  check: '<circle cx="12" cy="12" r="9.5"/><path d="m7.5 12 3 3 6-6.5"/>'
};

export const ico = (name, cls = 'sig-ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths.check}</svg>`;

export const iconBadge = (name, variant = '') => `<span class="icon-badge ${variant}">${ico(name)}</span>`;
