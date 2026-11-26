import * as b from "react";
import * as O from "react/jsx-runtime";
import {
  motion as Q,
  AnimatePresence as Wp,
  useScroll as kg,
  useSpring as Lg,
  useTransform as Ng,
} from "framer-motion";
import Credit from "./Credit";

var Rg = (...e) =>
  e
    .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
    .join(` `)
    .trim();
var zg = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
var Bg = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
    n ? n.toUpperCase() : t.toLowerCase(),
  );
var Vg = (e) => {
  let t = Bg(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Hg = {
  xmlns: `http://www.w3.org/2000/svg`,
  width: 24,
  height: 24,
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 2,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
};
var Ug = (e) => {
  for (let t in e)
    if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
  return !1;
};
var Wg = (0, b.forwardRef)(
  (
    {
      color: e = `currentColor`,
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = ``,
      children: a,
      iconNode: o,
      ...s
    },
    c,
  ) =>
    (0, b.createElement)(
      `svg`,
      {
        ref: c,
        ...Hg,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Rg(`lucide`, i),
        ...(!a && !Ug(s) && { "aria-hidden": `true` }),
        ...s,
      },
      [
        ...o.map(([e, t]) => (0, b.createElement)(e, t)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
var Gg = (e, t) => {
  let n = (0, b.forwardRef)(({ className: n, ...r }, i) =>
    (0, b.createElement)(Wg, {
      ref: i,
      iconNode: t,
      className: Rg(`lucide-${zg(Vg(e))}`, `lucide-${e}`, n),
      ...r,
    }),
  );
  return ((n.displayName = Vg(e)), n);
};
var Kg = Gg(`calendar-plus`, [
  [`path`, { d: `M16 19h6`, key: `xwg31i` }],
  [`path`, { d: `M16 2v4`, key: `4m81vk` }],
  [`path`, { d: `M19 16v6`, key: `tddt3s` }],
  [
    `path`,
    {
      d: `M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5`,
      key: `1glfrc`,
    },
  ],
  [`path`, { d: `M3 10h18`, key: `8toen8` }],
  [`path`, { d: `M8 2v4`, key: `1cmpym` }],
]);
var qg = Gg(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]);
var Jg = Gg(`clock`, [
  [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
  [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
]);
var Yg = Gg(`heart`, [
  [
    `path`,
    {
      d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
      key: `mvr1a0`,
    },
  ],
]);
var Xg = Gg(`map-pin`, [
  [
    `path`,
    {
      d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
      key: `1r0f0z`,
    },
  ],
  [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
]);
var Zg = Gg(`navigation`, [
  [`polygon`, { points: `3 11 22 2 13 21 11 13 3 11`, key: `1ltx0t` }],
]);
var Qg = Gg(`sparkles`, [
  [
    `path`,
    {
      d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
      key: `1s2grr`,
    },
  ],
  [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
  [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
  [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
]);
function $g({ className: e = ``, intensity: t = 1 }) {
  return (0, O.jsxs)(`div`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 overflow-hidden ${e}`,
    style: { opacity: t },
    children: [
      (0, O.jsx)(`div`, {
        className: `absolute -top-1/3 left-[-20%] h-[80%] w-[90%] rounded-full blur-3xl`,
        style: {
          background: `radial-gradient(circle at 50% 50%, oklch(0.5 0.14 265 / 0.6), transparent 65%)`,
          animation: `aurora-drift 18s ease-in-out infinite`,
        },
      }),
      (0, O.jsx)(`div`, {
        className: `absolute top-[10%] right-[-25%] h-[75%] w-[85%] rounded-full blur-3xl`,
        style: {
          background: `radial-gradient(circle at 50% 50%, oklch(0.8 0.12 85 / 0.5), transparent 65%)`,
          animation: `aurora-drift 24s ease-in-out infinite reverse`,
        },
      }),
      (0, O.jsx)(`div`, {
        className: `absolute bottom-[-25%] left-[10%] h-[70%] w-[80%] rounded-full blur-3xl`,
        style: {
          background: `radial-gradient(circle at 50% 50%, oklch(0.78 0.08 40 / 0.35), transparent 65%)`,
          animation: `aurora-drift 30s ease-in-out infinite`,
        },
      }),
      (0, O.jsx)(`div`, {
        className: `absolute inset-0 mix-blend-soft-light`,
        style: {
          backgroundImage: `radial-gradient(oklch(0.98 0.02 92 / 0.35) 1px, transparent 1px)`,
          backgroundSize: `22px 22px`,
        },
      }),
    ],
  });
}
function e_({ count: e = 14, burst: t = !1 }) {
  return (0, O.jsx)(`div`, {
    "aria-hidden": !0,
    className: `pointer-events-none absolute inset-0 overflow-hidden`,
    children: (0, b.useMemo)(
      () =>
        Array.from({ length: e }, (e, n) => ({
          id: n,
          left: Math.random() * 100,
          size: 8 + Math.random() * 12,
          delay: t ? Math.random() * 0.4 : Math.random() * 12,
          duration: (t ? 3.2 : 11) + Math.random() * 6,
          drift: (Math.random() - 0.5) * 140,
          spin: 180 + Math.random() * 540,
          hue:
            Math.random() > 0.5
              ? `oklch(0.78 0.115 85)`
              : `oklch(0.86 0.06 40)`,
          opacity: 0.35 + Math.random() * 0.45,
        })),
      [e, t],
    ).map((e) =>
      (0, O.jsx)(
        Q.span,
        {
          className: `absolute top-[-8%]`,
          style: {
            left: `${e.left}%`,
            width: e.size,
            height: e.size * 0.62,
            borderRadius: `60% 10% 60% 10%`,
            background: e.hue,
            opacity: e.opacity,
          },
          initial: { y: `-10vh`, x: 0, rotate: 0 },
          animate: { y: `115vh`, x: e.drift, rotate: e.spin },
          transition: {
            duration: e.duration,
            delay: e.delay,
            repeat: t ? 0 : 1 / 0,
            ease: `linear`,
          },
        },
        e.id,
      ),
    ),
  });
}
var $ = {
  groom: {
    name: `Siddhesh`,
    fullName: `Siddhesh Bhikaji More`,
    line: `Son of Mr. Bhikaji Sajanaji More`,
  },
  bride: {
    name: `Shivani`,
    fullName: `Shivani Prakash Sable`,
    line: `Daughter of Mr. Prakash Mahadu Sable`,
  },
  dateISO: `2026-12-12T10:00:00+05:30`,
  endISO: `2026-12-12T15:00:00+05:30`,
  dateLabel: `Saturday, 12 December 2026`,
  timeLabel: `Saturday · 10:00 AM onwards`,
  occasionLabel: `Engagement Ceremony`,
  venue: {
    name: `Sai Palace Hotel`,
    area: `Andheri East`,
    address: `Mahakali Caves Road, Chakala, Andheri East, Mumbai`,
    mapUrl: `https://maps.app.goo.gl/pE2ExRpyNnppwiAp9?g_st=ic`,
  },
};
var ru = Gg(`utensils`, [
  [`path`, { d: `M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2`, key: `cjf0a3` }],
  [`path`, { d: `M7 2v20`, key: `1473qp` }],
  [
    `path`,
    { d: `M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7`, key: `j28e5` },
  ],
]);
function Rings() {
  let d = (t) => ({ duration: 1.6, delay: t, ease: [0.65, 0, 0.35, 1] });
  return (0, O.jsxs)(Q.svg, {
    viewBox: `0 0 240 190`,
    role: `img`,
    "aria-label": `Two interlocked engagement rings`,
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    className: `mt-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]`,
    style: { width: `78%`, maxWidth: 300, marginBottom: `5.5rem` },
    children: [
      (0, O.jsx)(`defs`, {
        children: (0, O.jsxs)(`linearGradient`, {
          id: `ringGold`,
          x1: `0`,
          y1: `0`,
          x2: `1`,
          y2: `1`,
          children: [
            (0, O.jsx)(`stop`, { offset: `0%`, stopColor: `#b8892f` }),
            (0, O.jsx)(`stop`, { offset: `45%`, stopColor: `#f7e6a6` }),
            (0, O.jsx)(`stop`, { offset: `100%`, stopColor: `#c49a3c` }),
          ],
        }),
      }),
      (0, O.jsx)(`ellipse`, {
        cx: 120,
        cy: 178,
        rx: 80,
        ry: 6,
        fill: `oklch(0.93 0.05 88 / 0.18)`,
      }),
      (0, O.jsx)(Q.circle, {
        cx: 145,
        cy: 112,
        r: 55,
        fill: `none`,
        stroke: `url(#ringGold)`,
        strokeWidth: 7,
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: d(1),
      }),
      (0, O.jsx)(Q.circle, {
        cx: 95,
        cy: 112,
        r: 55,
        fill: `none`,
        stroke: `url(#ringGold)`,
        strokeWidth: 7,
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: d(1.25),
      }),
      (0, O.jsxs)(Q.g, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 2.7, duration: 0.5 },
        children: [
          (0, O.jsx)(`path`, {
            d: `M108.2 71.1 A55 55 0 0 1 133.6 58.2`,
            fill: `none`,
            stroke: `oklch(0.2 0.06 268 / 0.28)`,
            strokeWidth: 9.5,
          }),
          (0, O.jsx)(`path`, {
            d: `M108.2 71.1 A55 55 0 0 1 133.6 58.2`,
            fill: `none`,
            stroke: `url(#ringGold)`,
            strokeWidth: 7,
          }),
        ],
      }),
      (0, O.jsxs)(Q.g, {
        initial: { opacity: 0, y: -14, scale: 0.6 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { delay: 2.9, type: `spring`, stiffness: 180, damping: 12 },
        style: { originX: `95px`, originY: `50px` },
        children: [
          (0, O.jsx)(`path`, {
            d: `M82 43 L89 34 L101 34 L108 43 L95 59 Z`,
            fill: `oklch(0.97 0.02 250)`,
            stroke: `#e3c36f`,
            strokeWidth: 1.5,
            strokeLinejoin: `round`,
          }),
          (0, O.jsx)(`path`, {
            d: `M82 43 H108 M89 34 L95 43 L101 34 M95 43 V59`,
            fill: `none`,
            stroke: `#e3c36f`,
            strokeWidth: 1,
          }),
        ],
      }),
      [
        [60, 40, 0],
        [186, 50, 0.5],
        [204, 120, 1],
        [34, 132, 1.5],
      ].map(([x, y, t]) =>
        (0, O.jsx)(
          Q.path,
          {
            d: `M${x} ${y - 7} L${x + 2} ${y - 2} L${x + 7} ${y} L${x + 2} ${y + 2} L${x} ${y + 7} L${x - 2} ${y + 2} L${x - 7} ${y} L${x - 2} ${y - 2} Z`,
            fill: `#f3dc96`,
            initial: { opacity: 0, scale: 0.4 },
            animate: { opacity: [0, 1, 0.3, 1], scale: [0.4, 1, 0.8, 1] },
            transition: {
              delay: 3 + t,
              duration: 2.4,
              repeat: 1 / 0,
              repeatType: `reverse`,
            },
            style: { originX: `${x}px`, originY: `${y}px` },
          },
          x,
        ),
      ),
    ],
  });
}
function t_() {
  let e = (0, b.useRef)(null),
    { scrollYProgress: t } = kg({
      target: e,
      offset: [`start start`, `end start`],
    }),
    n = Lg(t, { stiffness: 100, damping: 24, mass: 0.4 }),
    r = Ng(n, [0, 1], [`0%`, `22%`]),
    i = Ng(n, [0, 1], [`0%`, `38%`]),
    a = Ng(n, [0, 1], [`0%`, `80%`]),
    o = Ng(n, [0, 0.55], [1, 0]),
    s = Ng(n, [0, 1], [`0%`, `-18%`]),
    c = Ng(n, [0, 1], [1, 1.12]);
  return (0, O.jsxs)(`section`, {
    ref: e,
    className: `bg-emerald-deep relative flex w-full flex-col items-center overflow-hidden`,
    style: { minHeight: `max(100svh, 640px)` },
    children: [
      (0, O.jsx)($g, { intensity: 1 }),
      (0, O.jsx)(`div`, {
        className: `from-emerald-ink/50 via-emerald-deep/20 to-emerald-ink/90 absolute inset-0 bg-gradient-to-b`,
      }),
      (0, O.jsx)(Q.div, {
        "aria-hidden": !0,
        style: {
          y: r,
          background: `radial-gradient(ellipse at 50% 80%, oklch(0.82 0.1 80 / 0.22), transparent 62%)`,
        },
        className: `absolute bottom-0 left-1/2 h-[62%] w-[130%] -translate-x-1/2 rounded-t-full blur-2xl`,
      }),
      (0, O.jsx)(e_, { count: 12 }),
      (0, O.jsx)(Q.img, {
        src: `/images/garland.png`,
        alt: ``,
        "aria-hidden": !0,
        style: { y: i },
        className: `pointer-events-none absolute -top-2 left-1/2 w-[135%] max-w-none -translate-x-1/2 opacity-90`,
      }),
      (0, O.jsxs)(`div`, {
        className: `relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 text-center`,
        style: { paddingTop: `calc(min(100vw, 520px) * 0.45 + 14px)` },
        children: [
          (0, O.jsxs)(Q.div, {
            style: { y: a, opacity: o },
            className: `flex flex-col items-center`,
            children: [
              (0, O.jsx)(Q.p, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.9 },
                className: `text-gold-soft/90 text-[0.6rem] tracking-[0.5em] uppercase`,
                children: `Together with their families`,
              }),
              (0, O.jsxs)(Q.h1, {
                initial: { opacity: 0, y: 24, filter: `blur(8px)` },
                animate: { opacity: 1, y: 0, filter: `blur(0px)` },
                transition: {
                  delay: 0.4,
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                },
                className: `mt-5 flex flex-col items-center leading-[0.82]`,
                children: [
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil font-display text-[4.25rem] font-light`,
                    children: $.bride.name,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `font-script text-gold/80 my-1 text-3xl`,
                    children: `and`,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil font-display text-[4.25rem] font-light`,
                    children: $.groom.name,
                  }),
                ],
              }),
              (0, O.jsx)(Q.div, {
                initial: { opacity: 0, scaleX: 0 },
                animate: { opacity: 1, scaleX: 1 },
                transition: { delay: 1, duration: 0.9 },
                className: `rule-gold mt-7 w-40`,
              }),
              (0, O.jsx)(Q.p, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 1.1, duration: 0.9 },
                className: `font-script text-gold-foil mt-5 text-3xl`,
                style: { padding: `0 0.25em 0.1em` },
                children: `are getting engaged`,
              }),
              (0, O.jsxs)(Q.p, {
                initial: { opacity: 0, y: 14, scale: 0.96 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { delay: 1.25, duration: 0.9 },
                className: `mt-5 flex items-center justify-center`,
                style: { gap: 14 },
                children: [
                  (0, O.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `text-gold`,
                    style: { fontSize: 11 },
                    children: `◆`,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil font-display`,
                    style: {
                      fontSize: `2rem`,
                      fontWeight: 500,
                      letterSpacing: `0.12em`,
                      lineHeight: 1.2,
                      paddingLeft: `0.12em`,
                    },
                    children: `12 · 12 · 2026`,
                  }),
                  (0, O.jsx)(`span`, {
                    "aria-hidden": !0,
                    className: `text-gold`,
                    style: { fontSize: 11 },
                    children: `◆`,
                  }),
                ],
              }),
            ],
          }),
          (0, O.jsx)(Q.div, {
            style: { y: s, scale: c },
            className: `mt-auto flex w-full flex-col items-center`,
            children: (0, O.jsx)(Rings, {}),
          }),
        ],
      }),
      (0, O.jsxs)(Q.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.8 },
        style: { opacity: o },
        className: `text-gold/70 absolute bottom-4 z-20 flex flex-col items-center`,
        children: [
          (0, O.jsx)(`span`, {
            className: `text-[0.55rem] tracking-[0.4em] uppercase`,
            children: `Scroll`,
          }),
          (0, O.jsx)(Q.span, {
            animate: { y: [0, 6, 0] },
            transition: { repeat: 1 / 0, duration: 2 },
            children: (0, O.jsx)(qg, { className: `h-4 w-4` }),
          }),
        ],
      }),
    ],
  });
}
function n_({ children: e, speed: t = 40, scaleRange: n, className: r = `` }) {
  let i = (0, b.useRef)(null),
    { scrollYProgress: a } = kg({
      target: i,
      offset: [`start end`, `end start`],
    }),
    o = Lg(a, { stiffness: 90, damping: 22, mass: 0.4 }),
    s = Ng(o, [0, 1], [t, -t]),
    c = Ng(o, [0, 0.5, 1], [n?.[0] ?? 1, n?.[1] ?? 1, n?.[0] ?? 1]);
  return (0, O.jsx)(`div`, {
    ref: i,
    className: r,
    children: (0, O.jsx)(Q.div, { style: { y: s, scale: c }, children: e }),
  });
}
var r_ = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};
function i_({ children: e, delay: t = 0, className: n = `` }) {
  return (0, O.jsx)(Q.div, {
    className: n,
    variants: r_,
    initial: `hidden`,
    whileInView: `show`,
    viewport: { once: !0, amount: 0.25 },
    transition: { delay: t },
    children: e,
  });
}
function a_({ label: e }) {
  return (0, O.jsxs)(`div`, {
    className: `flex items-center justify-center gap-3`,
    children: [
      (0, O.jsx)(`span`, { className: `rule-gold w-16` }),
      e
        ? (0, O.jsx)(`span`, {
            className: `font-sans text-[0.65rem] tracking-[0.42em] text-gold uppercase`,
            children: e,
          })
        : (0, O.jsx)(`span`, { className: `text-gold text-sm`, children: `✦` }),
      (0, O.jsx)(`span`, { className: `rule-gold w-16` }),
    ],
  });
}
function o_({ person: e, role: t, flip: n }) {
  return (0, O.jsx)(i_, {
    className: `relative`,
    children: (0, O.jsxs)(`div`, {
      className: `bg-card/70 border-gold/30 shadow-luxe relative overflow-hidden rounded-[2rem] border p-6 backdrop-blur-sm`,
      children: [
        (0, O.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 opacity-[0.07]`,
          style: {
            backgroundImage: `url('/images/mandala-texture.jpg')`,
            backgroundSize: `cover`,
          },
        }),
        (0, O.jsxs)(`div`, {
          className: `relative flex flex-col items-center justify-center text-center`,
          style: { minHeight: 150, padding: `14px 0` },
          children: [
            (0, O.jsx)(`span`, {
              className: `text-gold text-[0.6rem] tracking-[0.45em] uppercase`,
              style: { paddingLeft: `0.45em` },
              children: t,
            }),
            (0, O.jsx)(`h3`, {
              className: `text-primary mt-3 text-3xl font-light`,
              style: { lineHeight: 1.15 },
              children: e.fullName,
            }),
            (0, O.jsx)(`span`, { className: `rule-gold my-4 w-20` }),
            (0, O.jsx)(`p`, {
              className: `text-muted-foreground text-xs tracking-wide`,
              children: e.line,
            }),
          ],
        }),
      ],
    }),
  });
}
function s_() {
  return (0, O.jsxs)(`section`, {
    className: `relative overflow-hidden px-5 py-20`,
    children: [
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -top-6 -left-10 w-44 opacity-40`,
      }),
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -right-10 -bottom-6 w-44 rotate-180 opacity-40`,
      }),
      (0, O.jsxs)(`div`, {
        className: `relative mx-auto max-w-md`,
        children: [
          (0, O.jsxs)(i_, {
            className: `text-center`,
            children: [
              (0, O.jsx)(a_, { label: `The Couple` }),
              (0, O.jsx)(`h2`, {
                className: `text-primary mt-5 text-4xl font-light`,
                children: `Two families, one promise`,
              }),
              (0, O.jsx)(`p`, {
                className: `text-muted-foreground mx-auto mt-3 max-w-xs text-sm leading-relaxed`,
                children: `With the blessings of our elders, we exchange rings and begin the first chapter of forever.`,
              }),
            ],
          }),
          (0, O.jsxs)(`div`, {
            className: `mt-10 space-y-8`,
            children: [
              (0, O.jsx)(n_, {
                speed: 26,
                children: (0, O.jsx)(o_, {
                  person: $.bride,
                  role: `The Bride`,
                }),
              }),
              (0, O.jsx)(`div`, {
                className: `flex justify-center`,
                children: (0, O.jsx)(`span`, {
                  className: `font-script text-gold animate-float-soft text-5xl`,
                  children: `&`,
                }),
              }),
              (0, O.jsx)(n_, {
                speed: -26,
                children: (0, O.jsx)(o_, {
                  person: $.groom,
                  role: `The Groom`,
                  flip: !0,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var c_ = new Date($.dateISO).getTime();
function l_() {
  let e = Math.max(0, c_ - Date.now());
  return {
    days: Math.floor(e / 864e5),
    hours: Math.floor((e / 36e5) % 24),
    minutes: Math.floor((e / 6e4) % 60),
    seconds: Math.floor((e / 1e3) % 60),
  };
}
function u_({ value: e, label: t }) {
  let n = String(e).padStart(2, `0`);
  return (0, O.jsxs)(`div`, {
    className: `border-gold/25 bg-emerald-ink/40 relative flex flex-col items-center overflow-hidden rounded-2xl border px-2 py-4 backdrop-blur-sm`,
    children: [
      (0, O.jsx)(`div`, {
        className: `relative h-11 w-full overflow-hidden`,
        children: (0, O.jsx)(Wp, {
          mode: `popLayout`,
          initial: !1,
          children: (0, O.jsx)(
            Q.span,
            {
              initial: { y: `70%`, opacity: 0, filter: `blur(4px)` },
              animate: { y: `0%`, opacity: 1, filter: `blur(0px)` },
              exit: { y: `-70%`, opacity: 0, filter: `blur(4px)` },
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              className: `text-gold-foil font-display absolute inset-0 flex items-center justify-center text-4xl font-light tabular-nums`,
              children: n,
            },
            n,
          ),
        }),
      }),
      (0, O.jsx)(`span`, {
        className: `text-ivory/55 mt-2 text-[0.55rem] tracking-[0.3em] uppercase`,
        children: t,
      }),
    ],
  });
}
function d_() {
  let [e, t] = (0, b.useState)(l_);
  return (
    (0, b.useEffect)(() => {
      let e = setInterval(() => t(l_()), 1e3);
      return () => clearInterval(e);
    }, []),
    (0, O.jsxs)(`section`, {
      className: `bg-emerald-ink relative overflow-hidden px-5 py-20`,
      children: [
        (0, O.jsx)(`div`, {
          className: `pointer-events-none absolute inset-0 opacity-20`,
          style: {
            backgroundImage: `url('/images/mandala-texture.jpg')`,
            backgroundSize: `140%`,
            backgroundPosition: `center`,
          },
        }),
        (0, O.jsx)(`div`, {
          className: `from-emerald-ink via-emerald-ink/60 to-emerald-ink absolute inset-0 bg-gradient-to-b`,
        }),
        (0, O.jsxs)(`div`, {
          className: `relative mx-auto max-w-md text-center`,
          children: [
            (0, O.jsxs)(i_, {
              children: [
                (0, O.jsx)(a_, { label: `Counting down` }),
                (0, O.jsxs)(`h2`, {
                  className: `text-ivory mt-5 text-4xl font-light`,
                  children: [
                    `Until we make it `,
                    (0, O.jsx)(`span`, {
                      className: `font-script text-gold-foil`,
                      style: { paddingRight: `0.2em` },
                      children: `official`,
                    }),
                  ],
                }),
              ],
            }),
            (0, O.jsx)(i_, {
              delay: 0.12,
              children: (0, O.jsxs)(`div`, {
                className: `mt-9 grid grid-cols-4 gap-2.5`,
                children: [
                  (0, O.jsx)(u_, { value: e.days, label: `Days` }),
                  (0, O.jsx)(u_, { value: e.hours, label: `Hours` }),
                  (0, O.jsx)(u_, { value: e.minutes, label: `Mins` }),
                  (0, O.jsx)(u_, { value: e.seconds, label: `Secs` }),
                ],
              }),
            }),
            (0, O.jsx)(i_, {
              delay: 0.2,
              children: (0, O.jsx)(`p`, {
                className: `text-ivory/55 mt-6 text-xs tracking-[0.25em] uppercase`,
                children: `${$.dateLabel} · 10:00 AM`,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function f_(e) {
  return new Date(e).toISOString().replace(/[-:]/g, ``).split(`.`)[0] + `Z`;
}
function p_() {
  let e = [
      `BEGIN:VCALENDAR`,
      `VERSION:2.0`,
      `PRODID:-//Engagement Invite//EN`,
      `BEGIN:VEVENT`,
      `UID:${Date.now()}@engagement`,
      `DTSTAMP:${f_(new Date().toISOString())}`,
      `DTSTART:${f_($.dateISO)}`,
      `DTEND:${f_($.endISO)}`,
      `SUMMARY:${$.bride.name} & ${$.groom.name} — Engagement`,
      `LOCATION:${$.venue.name}\\, ${$.venue.address.replace(/,/g, `\\,`)}`,
      `DESCRIPTION:Engagement ceremony at 10:00 AM. Lunch to follow.\\n${$.venue.mapUrl}`,
      `END:VEVENT`,
      `END:VCALENDAR`,
    ].join(`\r
`),
    t = URL.createObjectURL(new Blob([e], { type: `text/calendar` })),
    n = document.createElement(`a`);
  ((n.href = t),
    (n.download = `shivani-siddhesh-engagement.ics`),
    n.click(),
    URL.revokeObjectURL(t));
}
var m_ = [
  { icon: Qg, label: `The Occasion`, value: $.occasionLabel },
  { icon: Jg, label: `Day & Time`, value: $.timeLabel },
  { icon: Xg, label: `Venue`, value: `${$.venue.name}, ${$.venue.area}` },
];
var SONG = { id: `6zoKKPTzWUE`, title: `Dhaga Dhaga`, from: `Daagdi Chaawl` };
var PlayIcon = Gg(`play`, [
  [`polygon`, { points: `6 3 20 12 6 21 6 3`, key: `1oa8hb` }],
]);
var PauseIcon = Gg(`pause`, [
  [`rect`, { x: `14`, y: `4`, width: `4`, height: `16`, rx: `1`, key: `zuxfzm` }],
  [`rect`, { x: `6`, y: `4`, width: `4`, height: `16`, rx: `1`, key: `1okwgv` }],
]);
var ytApi;
function loadYT() {
  return (
    ytApi ||
    (ytApi = new Promise((res) => {
      if (window.YT && window.YT.Player) return res(window.YT);
      let prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev && prev();
        res(window.YT);
      };
      let s = document.createElement(`script`);
      s.src = `https://www.youtube.com/iframe_api`;
      document.head.appendChild(s);
    }))
  );
}
// One shared background-music player (YouTube IFrame API). It is created as
// soon as the page loads, so a tap on the gate seal can start it instantly.
var music = (() => {
  let player = null,
    ready = !1,
    wantPlay = !1,
    checkTimer = 0,
    state = { playing: !1, blocked: !1 },
    subs = new Set(),
    set = (s) => {
      state = { ...state, ...s };
      subs.forEach((f) => f());
    },
    isRunning = () => {
      let s = player?.getPlayerState?.();
      return s === 1 || s === 3;
    },
    start = () => {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      clearTimeout(checkTimer);
      // If the browser refused to start the audio, drop back to "tap to play".
      checkTimer = setTimeout(() => {
        wantPlay && !isRunning() && set({ playing: !1, blocked: !0 });
      }, 3500);
    };
  return {
    mount() {
      if (player || typeof document > `u`) return;
      player = `loading`;
      let box = document.createElement(`div`);
      box.setAttribute(`aria-hidden`, `true`);
      Object.assign(box.style, {
        position: `fixed`,
        left: `0`,
        bottom: `0`,
        width: `200px`,
        height: `200px`,
        opacity: `0`,
        pointerEvents: `none`,
        zIndex: `-1`,
        overflow: `hidden`,
      });
      let host = document.createElement(`div`);
      box.appendChild(host);
      document.body.appendChild(box);
      loadYT().then((YT) => {
        player = new YT.Player(host, {
          videoId: SONG.id,
          width: 200,
          height: 200,
          playerVars: {
            playsinline: 1,
            controls: 0,
            rel: 0,
            loop: 1,
            playlist: SONG.id,
          },
          events: {
            onReady: () => {
              ready = !0;
              wantPlay && start();
            },
            onError: () => set({ playing: !1, blocked: !0 }),
            onStateChange: (e) => {
              if (e.data === 1) set({ playing: !0, blocked: !1 });
              else if (e.data === 2) set({ playing: !1 });
              else if (e.data === 0 && wantPlay) player.playVideo();
            },
          },
        });
      });
    },
    play() {
      wantPlay = !0;
      set({ playing: !0 });
      ready ? start() : this.mount();
    },
    pause() {
      wantPlay = !1;
      clearTimeout(checkTimer);
      ready && player.pauseVideo();
      set({ playing: !1 });
    },
    toggle() {
      state.playing ? this.pause() : this.play();
    },
    subscribe: (f) => (subs.add(f), () => subs.delete(f)),
    get: () => state,
  };
})();
function useMusic() {
  return (0, b.useSyncExternalStore)(music.subscribe, music.get, music.get);
}
var MusicNote = Gg(`music`, [
  [`path`, { d: `M9 18V5l12-2v13`, key: `1jmyc2` }],
  [`circle`, { cx: `6`, cy: `18`, r: `3`, key: `fqmcym` }],
  [`circle`, { cx: `18`, cy: `16`, r: `3`, key: `1hluhg` }],
]);
function MusicFab() {
  let { playing: p } = useMusic();
  return (0, O.jsxs)(Q.button, {
    type: `button`,
    onClick: () => music.toggle(),
    "aria-label": p ? `Pause music` : `Play music`,
    "data-music": p ? `playing` : `paused`,
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 1.2, type: `spring`, stiffness: 220, damping: 16 },
    whileTap: { scale: 0.9 },
    className: `text-emerald-ink shadow-gold fixed z-40 grid place-items-center rounded-full`,
    style: {
      right: 16,
      bottom: `calc(18px + env(safe-area-inset-bottom))`,
      width: 46,
      height: 46,
      backgroundImage: `var(--gradient-gold)`,
    },
    children: [
      (0, O.jsx)(Q.span, {
        "aria-hidden": !0,
        className: `absolute inset-0 rounded-full`,
        style: { border: `1.5px dashed var(--emerald-ink)`, opacity: 0.35, margin: 4 },
        animate: p ? { rotate: 360 } : { rotate: 0 },
        transition: p
          ? { repeat: 1 / 0, duration: 8, ease: `linear` }
          : { duration: 0.4 },
      }),
      p &&
        (0, O.jsx)(Q.span, {
          "aria-hidden": !0,
          className: `border-gold/40 absolute inset-0 rounded-full border`,
          animate: { scale: [1, 1.5], opacity: [0.9, 0] },
          transition: { repeat: 1 / 0, duration: 1.8, ease: `easeOut` },
        }),
      (0, O.jsx)(p ? PauseIcon : MusicNote, {
        size: 17,
        strokeWidth: 2,
        fill: p ? `currentColor` : `none`,
      }),
    ],
  });
}
function SongRow() {
  let { playing } = useMusic(),
    toggle = () => music.toggle();
  return (0, O.jsxs)(Q.button, {
    type: `button`,
    onClick: toggle,
    whileTap: { scale: 0.98 },
    "aria-label": `${playing ? `Pause` : `Play`} ${SONG.title}`,
    className: `relative flex w-full items-center gap-4 px-6 py-4`,
    style: { textAlign: `left` },
    children: [
      (0, O.jsxs)(`span`, {
        className: `text-emerald-ink shadow-gold relative grid h-10 w-10 shrink-0 place-items-center rounded-full`,
        style: { backgroundImage: `var(--gradient-gold)` },
        children: [
          playing &&
            (0, O.jsx)(Q.span, {
              className: `border-gold/40 absolute inset-0 rounded-full border`,
              animate: { scale: [1, 1.45], opacity: [0.8, 0] },
              transition: { repeat: 1 / 0, duration: 1.6, ease: `easeOut` },
            }),
          (0, O.jsx)(playing ? PauseIcon : PlayIcon, {
            size: 15,
            fill: `currentColor`,
            style: playing ? void 0 : { marginLeft: 2 },
          }),
        ],
      }),
      (0, O.jsxs)(`div`, {
        className: `min-w-0`,
        style: { flex: 1 },
        children: [
          (0, O.jsx)(`p`, {
            className: `text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase`,
            children: playing ? `Now playing` : `Our song · tap to play`,
          }),
          (0, O.jsxs)(`p`, {
            className: `text-foreground truncate text-sm`,
            children: [
              SONG.title,
              (0, O.jsxs)(`span`, {
                className: `text-muted-foreground`,
                children: [` · `, SONG.from],
              }),
            ],
          }),
        ],
      }),
      (0, O.jsx)(`span`, {
        "aria-hidden": !0,
        style: { display: `flex`, alignItems: `flex-end`, gap: 3, height: 18 },
        children: [0.9, 0.5, 1, 0.65].map((h, i) =>
          (0, O.jsx)(
            Q.span,
            {
              style: {
                width: 3,
                height: 18,
                borderRadius: 2,
                background: `var(--gold)`,
                originY: 1,
              },
              animate: playing
                ? { scaleY: [h * 0.35, h, h * 0.5, h * 0.9, h * 0.35] }
                : { scaleY: h * 0.3 },
              transition: playing
                ? { repeat: 1 / 0, duration: 1 + i * 0.18, ease: `easeInOut` }
                : { duration: 0.3 },
            },
            i,
          ),
        ),
      }),
    ],
  });
}
function h_() {
  return (0, O.jsx)(`section`, {
    className: `relative px-5 py-20`,
    children: (0, O.jsxs)(`div`, {
      className: `mx-auto max-w-md`,
      children: [
        (0, O.jsxs)(i_, {
          className: `text-center`,
          children: [
            (0, O.jsx)(a_, { label: `When & Where` }),
            (0, O.jsx)(`h2`, {
              className: `text-primary mt-5 text-4xl font-light`,
              children: `The ring ceremony`,
            }),
          ],
        }),
        (0, O.jsx)(i_, {
          delay: 0.1,
          children: (0, O.jsxs)(`div`, {
            className: `border-gold/30 bg-card shadow-luxe mt-8 overflow-hidden rounded-[2rem] border`,
            children: [
              (0, O.jsxs)(`div`, {
                className: `from-primary to-emerald-ink bg-gradient-to-br px-6 py-7 text-center`,
                children: [
                  (0, O.jsx)(`p`, {
                    className: `text-gold/80 text-[0.6rem] tracking-[0.45em] uppercase`,
                    children: `Save the date`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-ivory font-display mt-2 text-5xl font-light`,
                    children: `12`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-ivory/85 text-sm tracking-[0.35em] uppercase`,
                    children: `December 2026`,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-gold/80 mt-2 text-[0.6rem] tracking-[0.45em] uppercase`,
                    children: `Saturday`,
                  }),
                ],
              }),
              (0, O.jsx)(`div`, {
                className: `divide-gold/15 divide-y`,
                children: [...m_.map(({ icon: e, label: t, value: n }) =>
                  (0, O.jsxs)(
                    `div`,
                    {
                      className: `flex items-center gap-4 px-6 py-4`,
                      children: [
                        (0, O.jsx)(`span`, {
                          className: `bg-secondary text-primary grid h-10 w-10 shrink-0 place-items-center rounded-full`,
                          children: (0, O.jsx)(e, { className: `h-4 w-4` }),
                        }),
                        (0, O.jsxs)(`div`, {
                          className: `min-w-0`,
                          children: [
                            (0, O.jsx)(`p`, {
                              className: `text-muted-foreground text-[0.6rem] tracking-[0.3em] uppercase`,
                              children: t,
                            }),
                            (0, O.jsx)(`p`, {
                              className: `text-foreground truncate text-sm`,
                              children: n,
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  ),
                ), (0, O.jsx)(SongRow, {}, `song`)],
              }),
              (0, O.jsx)(`div`, {
                className: `px-6 pt-2 pb-6`,
                children: (0, O.jsxs)(Q.button, {
                  whileTap: { scale: 0.97 },
                  onClick: p_,
                  className: `from-primary to-emerald-ink text-ivory shadow-gold flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r py-4 text-xs tracking-[0.3em] uppercase`,
                  children: [
                    (0, O.jsx)(Kg, { className: `h-4 w-4` }),
                    `Add to calendar`,
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, O.jsx)(i_, {
          delay: 0.16,
          children: (0, O.jsxs)(`div`, {
            className: `border-gold/30 bg-card shadow-luxe mt-6 overflow-hidden rounded-[2rem] border`,
            children: [
              (0, O.jsxs)(`div`, {
                className: `relative`,
                children: [
                  (0, O.jsx)(`img`, {
                    src: `/images/map-preview.jpg`,
                    alt: `Map to ${$.venue.name}`,
                    loading: `lazy`,
                    width: 1024,
                    height: 768,
                    className: `h-48 w-full object-cover`,
                  }),
                  (0, O.jsx)(`div`, {
                    className: `from-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent`,
                  }),
                ],
              }),
              (0, O.jsxs)(`div`, {
                className: `px-6 pt-2 pb-6 text-center`,
                children: [
                  (0, O.jsx)(`p`, {
                    className: `text-primary text-xl`,
                    children: $.venue.name,
                  }),
                  (0, O.jsx)(`p`, {
                    className: `text-muted-foreground mx-auto mt-1 max-w-xs text-xs leading-relaxed`,
                    children: $.venue.address,
                  }),
                  (0, O.jsxs)(Q.a, {
                    whileTap: { scale: 0.97 },
                    href: $.venue.mapUrl,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `border-gold/50 text-primary hover:bg-secondary mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-xs tracking-[0.3em] uppercase transition-colors`,
                    children: [
                      (0, O.jsx)(Zg, { className: `h-4 w-4` }),
                      `Get directions`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
var lunchMenu = [
  { n: `I`, title: `A warm welcome`, note: `10:00 AM` },
  { n: `II`, title: `The rings`, note: `with your blessings` },
  { n: `III`, title: `Lunch`, note: `to follow` },
];
function LunchStamp() {
  return (0, O.jsxs)(`div`, {
    className: `relative`,
    style: { width: 118, height: 118 },
    children: [
      (0, O.jsxs)(Q.svg, {
        viewBox: `0 0 120 120`,
        "aria-hidden": !0,
        className: `absolute inset-0`,
        animate: { rotate: 360 },
        transition: { repeat: 1 / 0, duration: 26, ease: `linear` },
        children: [
          (0, O.jsx)(`circle`, {
            cx: 60,
            cy: 60,
            r: 58,
            fill: `var(--card)`,
            stroke: `var(--gold)`,
            strokeWidth: 1.5,
          }),
          (0, O.jsx)(`circle`, {
            cx: 60,
            cy: 60,
            r: 54,
            fill: `none`,
            stroke: `var(--gold)`,
            strokeWidth: 0.6,
            strokeDasharray: `2 3`,
          }),
          (0, O.jsx)(`path`, {
            id: `stampRing`,
            d: `M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0`,
            fill: `none`,
          }),
          (0, O.jsx)(`text`, {
            fill: `var(--primary)`,
            style: {
              fontFamily: `Jost, sans-serif`,
              fontSize: 9.5,
              fontWeight: 500,
            },
            children: (0, O.jsx)(`textPath`, {
              href: `#stampRing`,
              textLength: 268,
              lengthAdjust: `spacing`,
              children: `LUNCH TO FOLLOW ✦ LUNCH TO FOLLOW ✦`,
            }),
          }),
        ],
      }),
      (0, O.jsx)(`div`, {
        className: `text-primary absolute grid place-items-center rounded-full`,
        style: {
          inset: 31,
          backgroundImage: `var(--gradient-gold)`,
        },
        children: (0, O.jsx)(ru, { size: 24, strokeWidth: 1.6 }),
      }),
    ],
  });
}
function L_() {
  return (0, O.jsx)(`section`, {
    className: `relative overflow-hidden px-5`,
    style: { paddingBottom: 80 },
    children: (0, O.jsxs)(`div`, {
      className: `mx-auto max-w-md`,
      children: [
        (0, O.jsxs)(i_, {
          className: `text-center`,
          children: [
            (0, O.jsx)(a_, { label: `On the menu` }),
            (0, O.jsxs)(`h2`, {
              className: `text-primary mt-5 text-4xl font-light`,
              children: [
                `Rings first, `,
                (0, O.jsx)(`span`, {
                  className: `font-script text-gold`,
                  children: `then lunch`,
                }),
              ],
            }),
          ],
        }),
        (0, O.jsx)(i_, {
          delay: 0.1,
          children: (0, O.jsxs)(`div`, {
            className: `border-gold/30 bg-card shadow-luxe relative rounded-[2rem] border px-6 text-center`,
            style: { marginTop: 84, paddingTop: 76, paddingBottom: 32 },
            children: [
              (0, O.jsx)(`div`, {
                className: `absolute left-1/2 -translate-x-1/2`,
                style: { top: -59 },
                children: (0, O.jsx)(LunchStamp, {}),
              }),
              (0, O.jsx)(`div`, {
                "aria-hidden": !0,
                className: `border-gold/30 pointer-events-none absolute border`,
                style: { inset: 8, borderRadius: `1.5rem` },
              }),
              (0, O.jsx)(`p`, {
                className: `text-muted-foreground text-[0.6rem] tracking-[0.45em] uppercase`,
                children: `Saturday · 12 December`,
              }),
              (0, O.jsx)(`div`, {
                className: `mt-6`,
                style: { display: `grid`, gap: 18 },
                children: lunchMenu.map((e, t) =>
                  (0, O.jsxs)(
                    Q.div,
                    {
                      initial: { opacity: 0, x: -16 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0, amount: 0.6 },
                      transition: { delay: 0.15 + t * 0.15, duration: 0.7 },
                      style: { display: `flex`, alignItems: `baseline`, gap: 10 },
                      children: [
                        (0, O.jsx)(`span`, {
                          className: `font-display text-gold text-sm`,
                          style: { width: 26, textAlign: `left` },
                          children: e.n,
                        }),
                        (0, O.jsx)(`span`, {
                          className: `font-display text-primary text-xl`,
                          style: { whiteSpace: `nowrap` },
                          children: e.title,
                        }),
                        (0, O.jsx)(`span`, {
                          "aria-hidden": !0,
                          style: {
                            flex: 1,
                            minWidth: 12,
                            borderBottom: `1.5px dotted var(--gold)`,
                            transform: `translateY(-4px)`,
                          },
                        }),
                        (0, O.jsx)(`span`, {
                          className: `text-muted-foreground text-xs`,
                          style: { whiteSpace: `nowrap`, fontStyle: `italic` },
                          children: e.note,
                        }),
                      ],
                    },
                    e.n,
                  ),
                ),
              }),
              (0, O.jsx)(`span`, { className: `rule-gold mx-auto mt-8 block w-28` }),
              (0, O.jsx)(`p`, {
                className: `font-script text-gold mt-5`,
                style: { fontSize: `1.7rem`, lineHeight: 1.25, textWrap: `balance` },
                children: `Come for the rings, stay for the feast`,
              }),
              (0, O.jsx)(`p`, {
                className: `text-muted-foreground mx-auto mt-3 max-w-xs text-xs leading-relaxed`,
                children: `Lunch will be served at ${$.venue.name} right after the ceremony. Please do join us at the table.`,
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function g_() {
  return (0, O.jsxs)(`footer`, {
    className: `bg-emerald-ink relative overflow-hidden px-5 pt-20 pb-10`,
    children: [
      (0, O.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 opacity-25`,
        style: {
          backgroundImage: `url('/images/mandala-texture.jpg')`,
          backgroundSize: `120%`,
          backgroundPosition: `top center`,
        },
      }),
      (0, O.jsx)($g, { intensity: 0.5 }),
      (0, O.jsx)(`div`, {
        className: `from-emerald-ink/70 via-emerald-ink/85 to-emerald-ink absolute inset-0 bg-gradient-to-b`,
      }),
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -top-4 -left-8 w-36 opacity-30`,
      }),
      (0, O.jsx)(`img`, {
        src: `/images/floral-corner.png`,
        alt: ``,
        "aria-hidden": !0,
        loading: `lazy`,
        className: `pointer-events-none absolute -top-4 -right-8 w-36 -scale-x-100 opacity-30`,
      }),
      (0, O.jsxs)(`div`, {
        className: `relative mx-auto max-w-md text-center`,
        children: [
          (0, O.jsxs)(i_, {
            children: [
              (0, O.jsx)(a_, { label: `With love` }),
              (0, O.jsx)(`p`, {
                className: `font-script text-gold-foil mt-6 text-4xl leading-snug`,
                children: `Come bless our beginning`,
              }),
              (0, O.jsx)(`p`, {
                className: `text-ivory/70 mx-auto mt-5 max-w-sm text-sm leading-relaxed`,
                children: [
                  `A new chapter, a special day, and the people we love around us.`,
                  (0, O.jsx)(`br`, {}),
                  `We warmly invite you to join us in celebrating this beautiful occasion and sharing in our happiness!`,
                ],
              }),
            ],
          }),
          (0, O.jsx)(i_, {
            delay: 0.12,
            children: (0, O.jsxs)(`div`, {
              className: `mt-9 flex flex-col items-center`,
              children: [
                (0, O.jsx)(`span`, { className: `rule-gold w-28` }),
                (0, O.jsxs)(`p`, {
                  className: `text-ivory font-display mt-6 text-3xl font-light`,
                  children: [
                    $.bride.name,
                    ` `,
                    (0, O.jsx)(`span`, {
                      className: `font-script text-gold`,
                      children: `&`,
                    }),
                    ` `,
                    $.groom.name,
                  ],
                }),
                (0, O.jsx)(`p`, {
                  className: `text-ivory/50 mt-2 text-[0.6rem] tracking-[0.4em] uppercase`,
                  children: `12 · 12 · 2026 · Mumbai`,
                }),
              ],
            }),
          }),
          (0, O.jsxs)(`p`, {
            className: `text-ivory/35 mt-12 flex items-center justify-center gap-1.5 text-[0.6rem] tracking-[0.3em] uppercase`,
            children: [
              `Made with `,
              (0, O.jsx)(Yg, { className: `text-gold h-3 w-3 fill-current` }),
              ` for our people`,
            ],
          }),
        ],
      }),
      (0, O.jsx)(`div`, {
        className: `mt-3 text-[10px] uppercase tracking-[0.35em] opacity-70`,
        children: (0, O.jsx)(Credit, {}),
      }),
    ],
  });
}
function __({ onOpen: e }) {
  let [t, n] = (0, b.useState)(!1);
  return (0, O.jsxs)(Q.div, {
    className: `fixed inset-0 z-50 flex items-center justify-center overflow-hidden`,
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
    children: [
      [-1, 1].map((e) =>
        (0, O.jsxs)(
          Q.div,
          {
            className: `bg-emerald-ink absolute inset-y-0 w-[51%] overflow-hidden`,
            style: { [e === -1 ? `left` : `right`]: 0 },
            animate: t ? { x: `${e * 105}%` } : { x: 0 },
            transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] },
            children: [
              (0, O.jsx)($g, { intensity: 0.55 }),
              (0, O.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 opacity-20`,
                style: {
                  backgroundImage: `url('/images/mandala-texture.jpg')`,
                  backgroundSize: `cover`,
                  backgroundPosition: e === -1 ? `right center` : `left center`,
                },
              }),
              (0, O.jsx)(`div`, {
                className: `absolute inset-y-0 w-[2px]`,
                style: {
                  [e === -1 ? `right` : `left`]: 0,
                  background: `var(--gradient-gold)`,
                },
              }),
            ],
          },
          e,
        ),
      ),
      (0, O.jsx)(e_, { count: 10 }),
      (0, O.jsx)(Wp, {
        children:
          !t &&
          (0, O.jsxs)(Q.div, {
            className: `relative z-10 flex flex-col items-center px-8 text-center`,
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, scale: 0.9, filter: `blur(6px)` },
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            children: [
              (0, O.jsx)(`span`, {
                className: `text-gold/80 text-[0.55rem] tracking-[0.5em] uppercase`,
                children: `An engagement invitation`,
              }),
              (0, O.jsxs)(`h1`, {
                className: `font-display mt-5 flex flex-col items-center text-5xl leading-none font-light`,
                children: [
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil`,
                    children: $.bride.name,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `font-script text-gold/80 my-1 text-3xl`,
                    children: `&`,
                  }),
                  (0, O.jsx)(`span`, {
                    className: `text-gold-foil`,
                    children: $.groom.name,
                  }),
                ],
              }),
              (0, O.jsx)(`span`, { className: `rule-gold mt-6 w-32` }),
              (0, O.jsxs)(Q.button, {
                onClick: () => {
                  t || (music.play(), n(!0), window.setTimeout(e, 1500));
                },
                whileTap: { scale: 0.92 },
                whileHover: { scale: 1.05 },
                className: `group relative mt-12 grid h-28 w-28 place-items-center`,
                "aria-label": `Open the invitation`,
                children: [
                  (0, O.jsx)(Q.span, {
                    className: `border-gold/40 absolute inset-0 rounded-full border`,
                    animate: { scale: [1, 1.28, 1], opacity: [0.7, 0, 0.7] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 2.6,
                      ease: `easeOut`,
                    },
                  }),
                  (0, O.jsx)(Q.span, {
                    className: `shadow-gold grid h-20 w-20 place-items-center rounded-full`,
                    style: { backgroundImage: `var(--gradient-gold)` },
                    animate: { y: [0, -5, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 3.4,
                      ease: `easeInOut`,
                    },
                    children: (0, O.jsxs)(`span`, {
                      className: `font-script text-emerald-ink text-3xl leading-none`,
                      children: [
                        $.bride.name[0],
                        (0, O.jsx)(`span`, {
                          style: { fontSize: `0.6em`, margin: `0 1px` },
                          children: `&`,
                        }),
                        $.groom.name[0],
                      ],
                    }),
                  }),
                ],
              }),
              (0, O.jsx)(Q.p, {
                className: `text-ivory/60 mt-8 text-[0.6rem] tracking-[0.4em] uppercase`,
                animate: { opacity: [0.4, 1, 0.4] },
                transition: { repeat: 1 / 0, duration: 2.4 },
                children: `Tap the seal to open`,
              }),
            ],
          }),
      }),
    ],
  });
}
function v_() {
  let { scrollYProgress: e } = kg(),
    t = Lg(e, { stiffness: 120, damping: 26, mass: 0.3 });
  return (0, O.jsx)(Q.div, {
    "aria-hidden": !0,
    className: `fixed top-0 right-0 left-0 z-40 h-[3px] origin-left`,
    style: { scaleX: t, backgroundImage: `var(--gradient-gold)` },
  });
}
function S_() {
  let [e, t] = (0, b.useState)(!1);
  (0, b.useEffect)(() => music.mount(), []);
  return (
    (0, b.useEffect)(
      () => (
        (document.body.style.overflow = e ? `` : `hidden`),
        () => {
          document.body.style.overflow = ``;
        }
      ),
      [e],
    ),
    (0, O.jsxs)(O.Fragment, {
      children: [
        (0, O.jsx)(Wp, {
          children: !e && (0, O.jsx)(__, { onOpen: () => t(!0) }, `opener`),
        }),
        e && (0, O.jsx)(v_, {}),
        e && (0, O.jsx)(MusicFab, {}),
        (0, O.jsxs)(Q.main, {
          initial: { opacity: 0, scale: 1.03 },
          animate: e ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 },
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          className: `bg-background mx-auto w-full max-w-[520px] overflow-hidden`,
          children: [
            (0, O.jsx)(t_, {}),
            (0, O.jsx)(s_, {}),
            (0, O.jsx)(d_, {}),
            (0, O.jsx)(h_, {}),
            (0, O.jsx)(g_, {}),
          ],
        }),
      ],
    })
  );
}
export default S_;
