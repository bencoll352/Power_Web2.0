# Power-Up Talent Website 2.0 (`Power_Web2.0`)

> Official website for **Power-Up Talent Ltd** with high-performance responsive styling, mobile optimization, SEO/AEO metadata, and video streaming support.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)

### Running Locally
To launch the built-in HTTP server with instant HTTP 206 video range request support:
```bash
node server.js
```
The server will be available at: [http://localhost:3000](http://localhost:3000)

Alternatively, using npm:
```bash
npm start
```

---

## 📁 Project Structure

```text
Power_Web2.0/
├── assets/                  # Media assets (images, video references, icons)
├── about.html               # About Power-Up Talent & mission
├── coaching.html            # Commercial Academy & Coaching programmes
├── contact.html             # Contact & inquiry form
├── index.html               # Main homepage / landing experience
├── info.html                # Platform specifications & deep-dive information
├── platform.html            # CorePlatform technology & agent architecture
├── talent.html              # Headhunting, talent acquisition & search
├── why-us.html              # Differentiators, guarantees & client outcomes
├── main.js                  # Client-side interactive behaviors & navigations
├── styles.css               # Global responsive design system & typography
├── server.js                # Node.js zero-dependency HTTP server with range streaming
├── firebase.json            # Google Firebase Hosting configuration
└── package.json             # Project metadata & deployment scripts
```

---

## 🌐 Deployment

### Firebase Hosting
```bash
npm run deploy:firebase
```

### Vercel
```bash
npm run deploy:vercel
```

### Netlify
```bash
npm run deploy:netlify
```
