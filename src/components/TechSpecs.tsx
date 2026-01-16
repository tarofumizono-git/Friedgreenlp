import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function TechSpecs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const specs = [
    { label: "商品名", value: "Fried Green (インゲンフライ)" },
    { label: "産地", value: "国内産 (舞台ファーム & 提携農場)" },
    { label: "荷姿", value: "3,000g 業務用パック" },
    { label: "1人前目安", value: "80g - 130g" },
    { label: "調理方法", value: "フライヤー (175-180°C)" },
    { label: "調理時間", value: "2分30秒 - 3分00秒" },
    { label: "保存方法", value: "冷凍 (-18°C以下)" },
    { label: "賞味期限", value: "製造より18ヶ月" },
  ];

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#000000] py-32 px-6">
      <motion.div
        style={{ opacity }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-20 border-b border-white/20 pb-10">
          <h2 
            className="text-white mb-4"
            style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-bold)'
            }}
          >
            製品仕様
          </h2>
          <p className="text-white/50">Technical Specifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
           {specs.map((spec, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 border-b border-white/10 pb-4"
             >
                <span className="text-white/40 text-sm font-medium">{spec.label}</span>
                <span className="text-white text-lg font-medium">{spec.value}</span>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 p-8 bg-[#111] border border-white/10 rounded-[var(--radius)] text-center">
           <p className="text-white/60 text-sm">
             *プロフェッショナルな厨房環境向けに最適化されています。
             <br/>
             仕様は製品改良のため予告なく変更される場合があります。
           </p>
        </div>
      </motion.div>
    </section>
  );
}
