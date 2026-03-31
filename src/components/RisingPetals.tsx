import { motion } from 'framer-motion';

const petals = [
  { startY: "100%", startX: "8%",  endX: "14%",  dur: 40, delay: 0,  size: 600, rot: 0   },
  { startY: "70%",  startX: "72%", endX: "66%",  dur: 50, delay: 0,  size: 700, rot: 60  },
  { startY: "100%", startX: "38%", endX: "44%",  dur: 45, delay: 6,  size: 550, rot: 120 },
  { startY: "50%",  startX: "88%", endX: "82%",  dur: 55, delay: 0,  size: 650, rot: 180 },
  { startY: "100%", startX: "22%", endX: "28%",  dur: 48, delay: 14, size: 580, rot: 240 },
  { startY: "80%",  startX: "55%", endX: "50%",  dur: 52, delay: 0,  size: 620, rot: 300 },
];

const RisingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          initial={{ y: p.startY, x: p.startX, rotate: p.rot, opacity: 0 }}
          animate={{
            y: [p.startY, "40%", "0%", "-25%"],
            x: [p.startX, `calc(${p.startX} + ${i % 2 === 0 ? '+' : '-'}3%)`, p.endX, `calc(${p.endX} + ${i % 2 === 0 ? '-' : '+'}2%)`],
            rotate: [p.rot, p.rot + 25, p.rot + 10, p.rot + 35],
            opacity: [0, 0.55, 0.55, 0.55, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '45% 55% 60% 40% / 50% 40% 60% 50%',
            filter: 'blur(60px)',
            background: i % 3 === 0
              ? 'rgba(195,178,155,0.5)'
              : i % 3 === 1
              ? 'rgba(175,160,138,0.45)'
              : 'rgba(210,195,172,0.48)',
          }}
        />
      ))}
    </div>
  );
};

export default RisingPetals;
