import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import experienceImage from "figma:asset/b54738f6fa2d07695c27f8fc59fa9cca736732c0.png";

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const comparisonData = [
    {
      category: "食感",
      potato: "重厚な食感 (油分 × 澱粉)",
      green: "天ぷらのような軽さ (薄衣)",
      highlight: true
    },
    {
      category: "素材",
      potato: "じゃがいも (高糖質)",
      green: "インゲン (食物繊維 & 低カロリー)",
      highlight: true
    },
    {
      category: "調理",
      potato: "下準備・二度揚げが必要",
      green: "冷凍のまま 2.5分",
      highlight: true
    },
    {
      category: "体験",
      potato: "背徳感 (Guilty Pleasure)",
      green: "ヘルシー (Guilt-Free)",
      highlight: true
    }
  ];

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#000000] py-32 px-6 relative">
       {/* Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-12 space-y-6">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
            style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '-0.02em'
            }}
          >
            The New Standard.
          </motion.h2>
          <p 
            className="text-accent text-xl md:text-2xl font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            なぜ、ポテトからのアップグレードなのか。
          </p>
        </div>

        {/* Featured Image */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 relative rounded-[var(--radius)] overflow-hidden border border-white/10 group"
        >
           <div className="aspect-[21/9] w-full relative">
             <img 
               src={experienceImage} 
               alt="Fried Green Beans Ingredients" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-bold text-xl tracking-wide mb-2">From Farm to Fryer.</p>
                <p className="text-white/70 text-sm max-w-lg">
                  新鮮なインゲンと、独自配合の衣（バッター）。
                  素材そのものの美味しさを閉じ込め、油切れの良い軽やかな食感を実現しています。
                </p>
             </div>
           </div>
        </motion.div>

        {/* Comparison Table */}
        <div className="w-full bg-[#0A0A0A] border border-white/10 rounded-[var(--radius)] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5">
            <div className="text-white/50 font-bold">比較項目</div>
            <div className="text-white/50 font-bold text-center">フライドポテト</div>
            <div className="text-accent font-bold text-center flex items-center justify-center gap-2">
              FRIED GREEN <span className="bg-accent text-black text-[10px] px-2 py-0.5 rounded-full">PRO</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {comparisonData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 p-8 hover:bg-white/[0.02] transition-colors items-center"
              >
                {/* Category */}
                <div className="text-white font-bold text-lg">
                  {item.category}
                </div>

                {/* Potato (Competitor) */}
                <div className="text-white/60 text-center px-4">
                  {item.potato}
                </div>

                {/* Green (Our Product) */}
                <div className="text-accent text-center font-bold px-4 relative">
                  {item.green}
                  {item.highlight && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 lg:opacity-100">
                       <Check className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-[var(--radius)] border border-accent/20 bg-accent/5 text-center"
        >
          <p className="text-white/90 text-lg">
            <span className="text-accent font-bold">"Tempura-light" Texture:</span> 日本の職人技とカジュアルダイニングの利便性が融合。
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
