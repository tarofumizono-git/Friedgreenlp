import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export function CallToAction() {
  return (
    <section className="min-h-screen w-full bg-[#000000] py-32 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 
            className="text-white"
            style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-h1)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 1.1
            }}
          >
            The Future of Sides <br/>
            <span className="text-accent">is Green.</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            サイドメニューの未来を、いま実装しよう。
            <br/>
            <span className="text-sm text-white/40 mt-2 block">新しいスタンダードを、あなたのメニューへ。</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative inline-flex items-center gap-3 px-12 py-6 bg-accent text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(10,207,131,0.4)]">
            <span className="text-lg font-bold">サンプルをリクエスト</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="group inline-flex items-center gap-3 px-12 py-6 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-all duration-300">
            <Mail className="w-6 h-6" />
            <span className="text-lg font-medium">お問い合わせ</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-24 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left opacity-50 text-sm">
             <div>
                <p className="mb-2 font-bold text-white">FRIED GREEN Pro</p>
                <p>Tokyo, Japan</p>
             </div>
             <div className="flex flex-col md:items-end">
                <p>© 2024 FRIED GREEN Pro.</p>
                <p>All rights reserved.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
