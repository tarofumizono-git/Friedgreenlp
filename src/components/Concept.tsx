import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import conceptImage from "figma:asset/c1c3cb94e35c0d15d4a97354ac2fa2aaed78fab2.png";

export function Concept() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#000000] py-32 px-6 flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* Image Side */}
        <div className="relative order-2 lg:order-1">
          <motion.div 
            className="relative h-[600px] overflow-hidden rounded-[var(--radius)] border border-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={conceptImage}
              alt="Fried Green Concept"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8">
              <p className="text-accent font-bold tracking-widest uppercase text-sm">The New Standard</p>
            </div>
          </motion.div>
        </div>

        {/* Text Side */}
        <div className="space-y-12 order-1 lg:order-2">
          <div className="space-y-4">
            <motion.h2 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white leading-tight"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-bold)'
              }}
            >
              Beyond <span className="text-accent">Edamame.</span>
              <br />
              Beyond <span className="text-white/50">Potatoes.</span>
            </motion.h2>
            <p 
              className="text-white/60"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)'
              }}
            >
              枝豆の次へ。ポテトの先へ。
            </p>
          </div>

          <div className="space-y-8">
            <p 
              className="text-white/80 max-w-xl"
              style={{
                fontFamily: 'var(--font-text)',
                fontSize: 'var(--text-base)',
                lineHeight: 1.8
              }}
            >
              世界中のテーブルで愛されてきた「カジュアル・クラシック」を再定義します。
              日本発の「インゲン」という素材と、洗練された「天ぷら」の技術を融合。
              年率+12%で成長を続ける「グリーンスナック」カテゴリーを牽引します。
            </p>
            
            <div className="pl-6 border-l-2 border-accent">
              <p className="text-white/90 italic">
                "Just like French Fries. But Green."
              </p>
              <p className="text-white/50 text-sm mt-2">
                フライドポテトのような手軽さ。けれど、圧倒的にヘルシー。
                罪悪感のない「Green Fried」という新しい選択肢を、あなたのメニューに。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
