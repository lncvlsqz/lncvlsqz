import { motion, useReducedMotion } from "framer-motion";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 0.8,
  as = "div",
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={
        prefersReducedMotion ? false : { opacity: 0, y, filter: "blur(10px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : delay,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
