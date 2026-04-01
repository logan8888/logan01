import { motion } from 'framer-motion';

const petalCount = 28;

// Spread petals evenly across x, stagger delays across full duration so
// they're always distributed up the section — never all clumped at bottom
const petals = Array.from({ length: petalCount }, (_, i) => {
  const dur = 10 + (i % 6) * 1.8;
  return {
    x: `${(i / petalCount) * 100}%`,
    size: 14 + (i % 6) * 7,
    dur,
    // Spread delay across full duration so at load time petals are at all heights
    delay: -((i / petalCount) * dur),
    rotate: i * 41,
    drift: (i % 2 === 0 ? 1 : -1) * (1 + (i % 3)),
    color: i % 3 === 0
      ? 'rgba(188,128,128,0.88)'
      : i % 3 === 1
      ? 'rgba(205,145,145,0.82)'
      : 'rgba(172,115,115,0.85)',
  };
});

const RisingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            y: '100%',
            x: p.x,
            rotate: p.rotate,
            opacity: 0,
          }}
          animate={{
            y: '-5%',
            x: `calc(${p.x} + ${p.drift}%)`,
            rotate: p.rotate + 160,
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
            times: [0, 0.12, 0.88, 1],
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: p.size,
            height: p.size * 1.5,
            borderRadius: '50% 40% 60% 30% / 60% 50% 50% 40%',
            filter: 'none',
            background: p.color,
          }}
        />
      ))}
    </div>
  );
};

export default RisingPetals;
