import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Server, BarChart3, RefreshCw, TrendingUp } from "lucide-react";
import imgInput from "figma:asset/ee75a98bbfa4b9a849fd21d3bde3c082dac4ab8e.png";
import imgOrder from "figma:asset/1559d0e850859762c1cd17f82cc3db7ac8e61ec8.png";
import imgProfit from "figma:asset/5dff414d0d60744d4153a28beb19c62ef6ede687.png";

export function Ecosystem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section ref={ref} className="min-h-screen w-full bg-[#000000] py-32 px-6 relative overflow-hidden">
      {/* Background Map Graphic - Abstract */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
         <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDExODI3OXww&ixlib=rb-4.1.0&q=80&w=1080"
            className="w-full h-full object-cover opacity-30"
            alt="Data Network"
         />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center max-w-5xl mx-auto mb-20">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6 border border-accent/20"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Automated Supply Chain</span>
          </motion.div>

          <h2 
            className="text-white mb-8"
            style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 1.1
            }}
          >
            需要予測自動発注システム
          </h2>
          <p className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto">
            データに基づいた管理で、機会損失と廃棄ロスを同時に削減。
            <br />
            <span className="text-white/50 text-lg mt-2 block">
              日々の出数を入力するだけで、AIが最適な在庫レベルを維持し、自動で補充を行います。
            </span>
          </p>
        </div>

        {/* System Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {/* Step 1 */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1, duration: 0.6 }}
             className="relative h-[400px] p-8 bg-[#0A0A0A] border border-white/10 rounded-[var(--radius)] overflow-hidden group flex flex-col justify-end"
           >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                  <img src={imgInput} alt="Sales Data Input" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black border-r border-t border-white/10 rotate-45 hidden md:block z-20" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                    <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">1. 売上データ入力</h3>
                <p className="text-white/70 text-sm">
                    店舗での出数を入力
                </p>
              </div>
           </motion.div>

           {/* Step 2 */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="relative h-[400px] p-8 bg-accent/5 border border-accent/20 rounded-[var(--radius)] overflow-hidden group flex flex-col justify-end"
           >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                  <img src={imgOrder} alt="AI Auto Order" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black border-r border-t border-accent/20 rotate-45 hidden md:block z-20" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-accent/20">
                    <Server className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">2. AI自動発注</h3>
                <p className="text-white/70 text-sm">
                    在庫数に応じて自動発注
                </p>
              </div>
           </motion.div>

           {/* Step 3 */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3, duration: 0.6 }}
             className="relative h-[400px] p-8 bg-[#0A0A0A] border border-white/10 rounded-[var(--radius)] overflow-hidden group flex flex-col justify-end"
           >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                  <img src={imgProfit} alt="Profit Optimization" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                    <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">3. 収益最大化</h3>
                <p className="text-white/70 text-sm">
                    食品ロス削減 & 高収益化
                </p>
              </div>
           </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="p-6 bg-white/[0.02] rounded-2xl text-center border border-white/5">
              <div className="text-accent text-3xl font-bold mb-1">97%</div>
              <div className="text-white/40 text-xs font-bold tracking-widest">配送品質 (OTIF)</div>
           </div>
           <div className="p-6 bg-white/[0.02] rounded-2xl text-center border border-white/5">
              <div className="text-accent text-3xl font-bold mb-1">7 Days</div>
              <div className="text-white/40 text-xs font-bold tracking-widest">在庫回転日数</div>
           </div>
           <div className="p-6 bg-white/[0.02] rounded-2xl text-center border border-white/5">
              <div className="text-white text-3xl font-bold mb-1">Zero</div>
              <div className="text-white/40 text-xs font-bold tracking-widest">廃棄ロス目標</div>
           </div>
           <div className="p-6 bg-white/[0.02] rounded-2xl text-center border border-white/5">
              <div className="text-white text-3xl font-bold mb-1">Real-time</div>
              <div className="text-white/40 text-xs font-bold tracking-widest">リアルタイム同期</div>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
