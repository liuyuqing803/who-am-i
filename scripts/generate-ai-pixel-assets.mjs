import { mkdir, writeFile } from "node:fs/promises";
import { deflateSync } from "node:zlib";
import { Buffer } from "node:buffer";

const OUT_DIR = new URL("../assets/ai-pixel/", import.meta.url);

function makeRng(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function crc32(buf) {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }

  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data = Buffer.alloc(0)) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}

function encodePng(width, height, pixels) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * (width * 4 + 1);
    raw[rowStart] = 0;
    Buffer.from(pixels.buffer, pixels.byteOffset + y * width * 4, width * 4).copy(
      raw,
      rowStart + 1,
    );
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(raw, { level: 9 })),
    pngChunk("IEND"),
  ]);
}

function hexToRgba(hex, alpha = 255) {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
    alpha,
  ];
}

function makeCanvas(width, height, base = "#080a10") {
  const data = new Uint8ClampedArray(width * height * 4);
  const bg = hexToRgba(base);
  for (let i = 0; i < data.length; i += 4) {
    data[i] = bg[0];
    data[i + 1] = bg[1];
    data[i + 2] = bg[2];
    data[i + 3] = 255;
  }
  return { width, height, data };
}

function rect(c, x, y, w, h, color, alpha = 255) {
  const [r, g, b] = hexToRgba(color, alpha);
  const a = alpha / 255;
  const x0 = Math.max(0, Math.floor(x));
  const y0 = Math.max(0, Math.floor(y));
  const x1 = Math.min(c.width, Math.ceil(x + w));
  const y1 = Math.min(c.height, Math.ceil(y + h));

  for (let yy = y0; yy < y1; yy++) {
    let idx = (yy * c.width + x0) * 4;
    for (let xx = x0; xx < x1; xx++, idx += 4) {
      c.data[idx] = Math.round(r * a + c.data[idx] * (1 - a));
      c.data[idx + 1] = Math.round(g * a + c.data[idx + 1] * (1 - a));
      c.data[idx + 2] = Math.round(b * a + c.data[idx + 2] * (1 - a));
      c.data[idx + 3] = 255;
    }
  }
}

function stroke(c, x, y, w, h, color, t = 4, alpha = 255) {
  rect(c, x, y, w, t, color, alpha);
  rect(c, x, y + h - t, w, t, color, alpha);
  rect(c, x, y, t, h, color, alpha);
  rect(c, x + w - t, y, t, h, color, alpha);
}

function grid(c, step, color, alpha = 22) {
  for (let x = 0; x < c.width; x += step) rect(c, x, 0, 1, c.height, color, alpha);
  for (let y = 0; y < c.height; y += step) rect(c, 0, y, c.width, 1, color, alpha);
}

function glowRect(c, x, y, w, h, color) {
  rect(c, x - 32, y - 32, w + 64, h + 64, color, 12);
  rect(c, x - 16, y - 16, w + 32, h + 32, color, 24);
  rect(c, x, y, w, h, color, 210);
}

function bars(c, x, y, widths, color, alpha = 170) {
  widths.forEach((w, i) => rect(c, x, y + i * 18, w, 6, color, alpha));
}

function drawHero(width, height, mobile = false) {
  const rng = makeRng(mobile ? 0xa170b11e : 0xa1702026);
  const c = makeCanvas(width, height);
  grid(c, mobile ? 24 : 32, "#39d8ff", 18);
  grid(c, mobile ? 96 : 128, "#ff5fc8", 14);

  if (mobile) {
    rect(c, 0, Math.floor(height * 0.67), width, Math.ceil(height * 0.33), "#080a10", 210);
  } else {
    rect(c, 0, 0, Math.floor(width * 0.42), height, "#080a10", 190);
  }

  const palette = ["#39d8ff", "#91f05d", "#ff5fc8", "#ffd166"];
  for (let i = 0; i < 120; i++) {
    const x = Math.floor((mobile ? width * 0.08 : width * 0.36) + rng() * width * (mobile ? 0.84 : 0.58));
    const y = Math.floor(height * 0.08 + rng() * height * 0.68);
    const s = [4, 8, 12, 16][Math.floor(rng() * 4)];
    rect(c, x - (x % 4), y - (y % 4), s, s, palette[i % palette.length], 42 + (i % 4) * 24);
  }

  const sceneX = mobile ? Math.floor(width * 0.12) : Math.floor(width * 0.48);
  const sceneY = mobile ? Math.floor(height * 0.12) : Math.floor(height * 0.15);
  const sceneW = mobile ? Math.floor(width * 0.76) : Math.floor(width * 0.43);
  const sceneH = mobile ? Math.floor(height * 0.46) : Math.floor(height * 0.58);
  rect(c, sceneX + 18, sceneY + 22, sceneW, sceneH, "#02040a", 110);
  rect(c, sceneX, sceneY, sceneW, sceneH, "#111625", 230);
  stroke(c, sceneX, sceneY, sceneW, sceneH, "#39d8ff", mobile ? 3 : 4, 230);
  stroke(c, sceneX + 12, sceneY + 12, sceneW - 24, sceneH - 24, "#ff5fc8", mobile ? 2 : 3, 120);

  const tile = mobile ? 18 : 22;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 13; col++) {
      if ((row + col) % 4 === 0 || (row === 4 && col > 2 && col < 10)) {
        const x = sceneX + 48 + col * tile;
        const y = sceneY + 64 + row * tile;
        const color = row === 4 ? "#91f05d" : col % 3 === 0 ? "#39d8ff" : "#26334f";
        rect(c, x, y, tile - 6, tile - 6, color, row === 4 ? 210 : 145);
      }
    }
  }

  const cx = sceneX + Math.floor(sceneW * 0.58);
  const cy = sceneY + Math.floor(sceneH * 0.48);
  glowRect(c, cx - 50, cy - 50, 100, 100, "#39d8ff");
  rect(c, cx - 38, cy - 38, 76, 76, "#080a10", 255);
  stroke(c, cx - 38, cy - 38, 76, 76, "#91f05d", 5, 230);
  rect(c, cx - 18, cy - 18, 14, 14, "#ff5fc8", 240);
  rect(c, cx + 6, cy - 18, 14, 14, "#ff5fc8", 240);
  rect(c, cx - 20, cy + 14, 40, 8, "#ffd166", 230);
  for (let i = 0; i < 7; i++) {
    rect(c, cx - 84 + i * 28, cy - 70, 12, 20, "#39d8ff", 140);
    rect(c, cx - 84 + i * 28, cy + 58, 12, 20, "#91f05d", 140);
  }

  const panelX = mobile ? Math.floor(width * 0.12) : Math.floor(width * 0.52);
  const panelY = mobile ? Math.floor(height * 0.61) : Math.floor(height * 0.67);
  const panelW = mobile ? Math.floor(width * 0.76) : Math.floor(width * 0.34);
  const panelH = mobile ? Math.floor(height * 0.16) : Math.floor(height * 0.18);
  rect(c, panelX, panelY, panelW, panelH, "#0c1220", 238);
  stroke(c, panelX, panelY, panelW, panelH, "#ffd166", mobile ? 3 : 4, 210);
  bars(c, panelX + 24, panelY + 26, [panelW * 0.58, panelW * 0.42, panelW * 0.66, panelW * 0.31], "#91f05d", 190);
  rect(c, panelX + panelW - 74, panelY + 26, 42, 42, "#ff5fc8", 170);
  rect(c, panelX + panelW - 60, panelY + 40, 14, 14, "#080a10", 255);

  return c;
}

function drawBackground(width, height) {
  const rng = makeRng(0xbacc2026);
  const c = makeCanvas(width, height, "#070910");
  grid(c, 32, "#39d8ff", 12);
  grid(c, 128, "#ff5fc8", 10);
  const palette = ["#39d8ff", "#91f05d", "#ff5fc8", "#ffd166"];

  for (let i = 0; i < 70; i++) {
    const x = Math.floor((rng() * width) / 8) * 8;
    const y = Math.floor((rng() * height) / 8) * 8;
    const w = (2 + Math.floor(rng() * 8)) * 8;
    const h = [8, 16, 24][Math.floor(rng() * 3)];
    rect(c, x, y, w, h, palette[i % palette.length], 22 + (i % 3) * 10);
  }

  rect(c, 0, 0, width, height, "#080a10", 92);
  return c;
}

const files = [
  ["hero.png", drawHero(1280, 720, false)],
  ["hero-mobile.png", drawHero(720, 960, true)],
  ["background.png", drawBackground(1280, 720)],
];

await mkdir(OUT_DIR, { recursive: true });

for (const [name, canvas] of files) {
  await writeFile(new URL(name, OUT_DIR), encodePng(canvas.width, canvas.height, canvas.data));
  console.log(`wrote ${name} ${canvas.width}x${canvas.height}`);
}
