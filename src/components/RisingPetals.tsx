import { motion } from 'framer-motion';

const petalsConfig = [
  { startY: "110%", delay: 0,  x1: "10%",  x2: "15%",  dur: 22 },
  { startY: "60%",  delay: 0,  x1: "70%",  x2: "65%",  dur: 25 },
  { startY: "80%",  delay: 0,  x1: "40%",  x2: "45%",  dur: 20 },
  { startY: "30%",  delay: 0,  x1: "85%",  x2: "80%",  dur: 28 },
  { startY: "110%", delay: 5,  x1: "55%",  x2: "60%",  dur: 24 },
  { startY: "110%", delay: 10, x1: "25%",  x2: "20%",  dur: 21 },
  { startY: "50%",  delay: 0,  x1: "5%",   x2: "10%",  dur: 30 },
  { startY: "110%", delay: 8,  x1: "90%",  x2: "85%",  dur: 23 },
];

const RisingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petalsConfig.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            y: p.startY,
            x: p.x1,
            rotate: i * 45,
            opacity: 0,
          }}
          animate={{
            y: "-20%",
            x: p.x2,
            rotate: i * 45 + 180,
            opacity: [0, 0.45, 0.45, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute w-48 h-48 md:w-[28rem] md:h-[28rem] rounded-[45%_55%_65%_35%/45%_45%_55%_55%] blur-3xl"
          style={{ background: i % 2 === 0 ? 'rgba(180,168,152,0.35)' : 'rgba(160,148,132,0.3)' }}
        />
      ))}
    </div>
  );
};

export default RisingPetals;
