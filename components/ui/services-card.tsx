import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
}

export function ServiceCard({ title, description, Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 via-zinc-700/10 to-zinc-600/10 rounded-xl blur-xl 
                    transition-all duration-500 group-hover:blur-2xl group-hover:from-zinc-700/20 group-hover:via-zinc-600/20 group-hover:to-zinc-500/20" />
      <div className="relative p-8 rounded-xl bg-gradient-to-br from-zinc-900/10 via-zinc-800/10 to-zinc-700/10 border border-zinc-700/30 backdrop-blur-sm
                    transition-all duration-300 group-hover:-translate-y-2 group-hover:border-zinc-600/40 group-hover:from-zinc-800/15 group-hover:via-zinc-700/15 group-hover:to-zinc-600/15">
        <div className="mb-6">
          <Icon className="w-12 h-12 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-zinc-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}