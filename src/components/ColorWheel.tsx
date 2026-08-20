"use client";

import { useRef, useState } from "react";

/**
 * A minimal draggable HSL color wheel: angle around the circle = hue,
 * distance from center = saturation, lightness held at a fixed 50%.
 */
export function ColorWheel({
  onChange,
  size = 132,
}: {
  onChange: (hsl: string) => void;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [marker, setMarker] = useState({ x: 50, y: 50 }); // percent
  const [hue, setHue] = useState(30);
  const [sat, setSat] = useState(50);
  const [dragging, setDragging] = useState(false);

  function apply(nextHue: number, nextSat: number) {
    const h = ((nextHue % 360) + 360) % 360;
    const s = Math.max(0, Math.min(100, nextSat));
    setHue(h);
    setSat(s);
    const rad = (h * Math.PI) / 180;
    setMarker({
      x: 50 + Math.cos(rad) * (s / 2),
      y: 50 + Math.sin(rad) * (s / 2),
    });
    onChange(`hsl(${Math.round(h)} ${Math.round(s)}% 50%)`);
  }

  function updateFromPointer(clientX: number, clientY: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const radius = rect.width / 2;
    const dist = Math.min(1, Math.hypot(dx, dy) / radius);

    let nextHue = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (nextHue < 0) nextHue += 360;
    apply(nextHue, dist * 100);
  }

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label="בורר צבע חופשי"
        aria-valuemin={0}
        aria-valuemax={360}
        aria-valuenow={Math.round(hue)}
        aria-valuetext={`גוון ${Math.round(hue)} מעלות, רוויה ${Math.round(sat)}%`}
        onPointerDown={(e) => {
          setDragging(true);
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          updateFromPointer(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => {
          if (dragging) updateFromPointer(e.clientX, e.clientY);
        }}
        onPointerUp={() => setDragging(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") apply(hue + 8, sat);
          if (e.key === "ArrowLeft") apply(hue - 8, sat);
          if (e.key === "ArrowUp") apply(hue, sat + 8);
          if (e.key === "ArrowDown") apply(hue, sat - 8);
        }}
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at center, #fff 0%, transparent 72%)," +
            "conic-gradient(from 90deg, red, yellow, lime, cyan, blue, magenta, red)",
        }}
        className="relative cursor-crosshair touch-none rounded-full border border-line shadow-inner outline-none focus-visible:ring-2 focus-visible:ring-signal"
      >
        <span
          className="pointer-events-none absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
        />
      </div>
      <span className="text-[11px] text-paper-dim">גררו, או חצים לאחר פוקוס</span>
    </div>
  );
}
