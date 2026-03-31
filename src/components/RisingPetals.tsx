import { motion } from 'framer-motion';

const RisingPetals = () => {
  // Create 6-8 large petal-like shapes
  const petals = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: "110%", 
            x: `${Math.random() * 100}%`, 
            rotate: Math.random() * 360,
            opacity: 0 
          }}
          animate={{ 
            y: "-20%", 
            x: `${(Math.random() * 100) + (Math.sin(i) * 15)}%`,
            rotate: (Math.random() * 360) + 180,
            opacity: [0, 0.3, 0.3, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          className="absolute w-64 h-64 md:w-[35rem] md:h-[35rem] bg-aura-taupe/40 rounded-[45%_55%_65%_35%/45%_45%_55%_55%] blur-3xl"
        />
      ))}
    </div>
  );
};

export default RisingPetals;
