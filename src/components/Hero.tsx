import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import heroImage from "figma:asset/a474ff6fc9b27418da7bc223f864dfee2bc22d2c.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Background Image with clear visibility */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroImage}
          alt="Fried Green Beans Dipping"
          className="w-full h-full object-cover object-center md:object-right"
        />
        {/* Gradient to ensure text readability on the left while keeping image clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000000]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Product Title */}
          <h1 
            className="text-white mb-2 tracking-tighter leading-none"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(80px, 10vw, 140px)', // Responsive massive size
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            FRIED <br/> GREEN
          </h1>
          
          {/* Main Copy */}
          <p 
            className="text-accent mb-12 tracking-wide text-2xl md:text-4xl"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--font-weight-bold)',
            }}
          >
            Order Without Thinking.
          </p>

          {/* Dual Meaning Context - Stacked or Grid based on space */}
          <div className="grid grid-cols-1 gap-6 mb-12 max-w-xl">
             {/* toC Context */}
             <div className="border-l-2 border-accent/50 pl-6 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(10,207,131,0.5)]" />
                  <p className="text-accent font-bold text-xs tracking-wider uppercase">For Guests</p>
                </div>
                <p className="text-white font-medium text-lg mb-1">
                  A New Default Standard.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  ポテトのような手軽さ、それ以上の満足感。<br className="hidden md:block"/>
                  ゲストがメニューを見る前に、思わず注文してしまう。<br className="hidden md:block"/>
                  罪悪感のない「やみつき」を、新しいスタンダードに。
                </p>
             </div>

             {/* toB Context */}
             <div className="border-l-2 border-primary/50 pl-6 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(24,160,251,0.5)]" />
                  <p className="text-primary font-bold text-xs tracking-wider uppercase">For Owners</p>
                </div>
                <p className="text-white font-medium text-lg mb-1">
                  Automated Success.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  ゼロ・フリクション。ただメニューに加えるだけ。<br className="hidden md:block"/>
                  オペレーションの手間なく、勝手に売れていく仕組みを。
                </p>
             </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-bold)'
            }}
          >
            お問い合わせはこちら
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
