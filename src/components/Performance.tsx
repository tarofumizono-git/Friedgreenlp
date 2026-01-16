import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Zap, Layers } from "lucide-react";
import imgHighMargin from "figma:asset/0abd3274983891525dc7d6ba913812fc449f5e4d.png";
import imgZeroSkill from "figma:asset/f8b5fd0a74275634eb9ac8664089a7294912695c.png";
import imgVersatility from "figma:asset/a7e2a3435b80af92fc79ef9935c7a8fe18d387e3.png";

export function Performance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#000000] py-32 px-6 border-t border-white/5">
      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 
                className="text-white"
                style={{ 
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-h1)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: 1.1
                }}
            >
              Built for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Business.</span>
            </h2>
            <p className="text-accent text-xl">経営を変える、パフォーマンス。</p>
          </div>
          <div className="max-w-md pb-2">
             <p className="text-white/60">
               Fried Greenは単なる食材ではありません。
               <br/>
               現代のダイニング経営のために設計された、P/L最適化ソリューションです。
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[800px]">
           {/* Card 1: High Margin */}
           <motion.div 
             whileHover={{ scale: 1.01 }}
             className="relative h-full min-h-[500px] p-12 bg-[#0A0A0A] border border-white/10 rounded-[var(--radius)] overflow-hidden group flex flex-col justify-end"
           >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                  <img src={imgHighMargin} alt="High Margin Product" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              
              <div className="relative z-10 space-y-6">
                 <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <TrendingUp className="text-accent w-6 h-6" />
                 </div>
                 
                 <div>
                    <h3 className="text-white text-3xl font-bold mb-2">High Margin</h3>
                    <p className="text-white/70">高収益モデル</p>
                 </div>
                 
                 <div className="flex items-baseline gap-4">
                    <span className="text-6xl font-bold text-white">25-31<span className="text-3xl text-accent">%</span></span>
                    <span className="text-white/70 text-sm tracking-wider uppercase">Ideal COGS</span>
                 </div>
                 
                 <p className="text-white/80 max-w-sm text-sm leading-relaxed">
                    標準的なフライドポテトより20〜60%高い価格設定が可能でありながら、コストは適正範囲に抑制。
                 </p>
              </div>
           </motion.div>

           <div className="space-y-6 flex flex-col h-full">
              {/* Card 2: Zero Skill */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative flex-1 p-10 bg-[#0A0A0A] border border-white/10 rounded-[var(--radius)] overflow-hidden group min-h-[300px] flex items-end"
              >
                 {/* Background Image */}
                 <div className="absolute inset-0 z-0">
                      <img src={imgZeroSkill} alt="Zero Skill Frying" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                 </div>

                 <div className="relative z-10 flex items-start gap-6 w-full">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                        <Zap className="text-primary w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white text-2xl font-bold mb-1">Zero Skill</h3>
                        <p className="text-white/70 mb-4 text-sm">熟練シェフ不要</p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                             <div className="inline-block bg-white/10 rounded px-3 py-1 text-sm text-white/90 border border-white/10 backdrop-blur-sm">
                                175°C / 2.5 min
                             </div>
                             <p className="text-white/80 text-sm">
                                誰が厨房に立っても、常に完璧な仕上がりを保証。
                             </p>
                        </div>
                    </div>
                 </div>
              </motion.div>

              {/* Card 3: Versatility */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative flex-1 p-10 bg-[#0A0A0A] border border-white/10 rounded-[var(--radius)] overflow-hidden group min-h-[300px] flex items-end"
              >
                  {/* Background Image */}
                 <div className="absolute inset-0 z-0">
                      <img src={imgVersatility} alt="Versatility Serving" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                 </div>

                 <div className="relative z-10 flex items-start gap-6 w-full">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                        <Layers className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-1">Versatility</h3>
                        <p className="text-white/70 mb-4 text-sm">無限のバリエーション</p>
                        <p className="text-white/80 text-sm">
                           バーのスナック、サイドメニュー、メインの付け合わせに。
                           あらゆる料理スタイルに適応します。
                        </p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
