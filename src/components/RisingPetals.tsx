import { motion } from 'framer-motion';

const petalCount = 24;

const petals = Array.from({ length: petalCount }, (_, i) => ({
  x: `${(i * 4.1) % 100}%`,
  size: 18 + (i % 5) * 8,
  dur: 8 + (i % 7) * 1.5,
  delay: (i * 0.6) % 10,
  rotate: i * 37,
  drift: (i % 2 === 0 ? 1 : -1) * (1.5 + (i % 4)),
  color: i % 3 === 0
    ? 'rgba(210,175,175,0.75)'
    : i % 3 === 1
    ? 'rgba(225,190,190,0.7)'
    : 'rgba(195,165,165,0.72)',
}));

const RisingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            y: '110%',
            x: p.x,
            rotate: p.rotate,
            opacity: 0,
          }}
          animate={{
            y: '-10%',
            x: `calc(${p.x} + ${p.drift}%)`,
            rotate: p.rotate + 180,
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
            times: [0, 0.15, 0.85, 1],
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size * 1.4,
            borderRadius: '50% 40% 60% 30% / 60% 50% 50% 40%',
            filter: 'blur(2px)',
            background: p.color,
          }}
        />
      ))}
    </div>
  );
};

export default RisingPetals;
