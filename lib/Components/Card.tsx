import { motion } from "framer-motion";

export const Card = ({ title, number, children }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -20, rotate: -2 }}
            className="p-10 bg-black/40 border border-white/10 rounded-3xl backdrop-blur-sm group hover:border-primary/50 transition-colors"
        >
            <div className="text-6xl font-black text-white/5 mb-8 group-hover:text-primary/20 transition-colors font-artistic">{number}</div>
            <h3 className="text-3xl font-bold mb-4 font-artistic">{title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{children}</p>
        </motion.div>
    );
}