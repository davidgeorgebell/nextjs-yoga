import { motion } from 'framer-motion';

export default function AnimationX({ children }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0.2 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
