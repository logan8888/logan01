import { motion } from 'framer-motion';

const petals = [
  { startY: "90%",  startX: "5%",  endX: "12%",  dur: 45, delay: 0,  size: 500, rot: 0,   color: 'rgba(210,185,165,0.7)'  },
  { startY: "60%",  startX: "70%", endX: "63%",  dur: 52, delay: 0,  size: 600, rot: 60,  color: 'rgba(195,170,148,0.65)' },
  { startY: "95%",  startX: "35%", endX: "42%",  dur: 48, delay: 8,  size: 520, rot: 120, color: 'rgba(220,195,175,0.72)' },
  { startY: "45%",  startX: "85%", endX: "79%",  dur: 55, delay: 0,  size: 580, rot: 180, color: 'rgba(200,175,152,0.68)' },
  { startY: "90%",  startX: "20%", endX: "27%",  dur: 50, delay: 15, size: 490, rot: 240, color: 'rgba(215,190,168,0.7)'  },
  { startY: "75%",  startX: "52%", endX: "46%",  dur: 42, delay: 0,  size: 540, rot: 300, color: 'rgba(205,180,158,0.66)' },
];

const RisingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          initial={{ y: p.startY, x: p.startX, rotate: p.rot, opacity: 0 }}
          animate={{
            y: [p.startY, "30%", "-20%"],
            x: [
              p.startX,
              `calc(${p.startX} + ${i % 2 === 0 ? '4' : '-4'}%)`,
              p.endX,
            ],
            rotate: [p.rot, p.rot + 20, p.rot + 40],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
            times: [0, 0.2, 0.85, 1],
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '45% 55% 60% 40% / 50% 40% 60% 50%',
            filter: 'blur(25px)',
            background: p.color,
          }}
        />
      ))}
    </div>
  );
};

export default RisingPetals;
