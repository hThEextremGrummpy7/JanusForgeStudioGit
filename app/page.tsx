import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header - Dark Cold Black & White */}
      <header className="sticky top-0 z-50 tesla-header">
        <div className="container mx-auto px-6 py-4 md:px-8">
          <nav className="flex items-center justify-end">
            <div className="flex gap-8 text-sm" style={{ marginTop: '15px' }}>
              <a href="#about" className="font-mono text-[#b0b0b0] hover:text-white transition-all duration-300 tracking-wider uppercase text-[15px]">
                About
              </a>
              <a href="#work" className="font-mono text-[#b0b0b0] hover:text-white transition-all duration-300 tracking-wider uppercase text-[15px]">
                Work
              </a>
              <a href="/contact" className="font-mono text-[#b0b0b0] hover:text-white transition-all duration-300 tracking-wider uppercase text-[15px]">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Dark Cold Black & White */}
      <section className="hero-section py-32 md:py-40 lg:py-48">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-12 lg:mb-0">
            {/* Text Content */}
            <div className="hero-content">
              <div className="font-mono text-xs text-[#b0b0b0] mb-4 tracking-wider" style={{ marginTop: '12px', marginBottom: '12px' }}>
                &gt; INITIALIZING...
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">JANUS</span>
                <br />
                <span className="hero-text-accent">FORGE</span>
                <br />
                <span className="text-white">STUDIO</span>
              </h1>
              <p className="text-lg hero-subtitle leading-relaxed max-w-xl font-light" style={{ marginTop: '20px', marginBottom: '20px' }}>
                AI - Vision - Innovation - Forge the Future. Shape the Impossible !
              </p>
            </div>
          </div>
        </div>
        
        {/* Full-width image section */}
        <div className="hero-image-full relative h-64 md:h-80 lg:h-96 overflow-hidden mt-12">
          <Image
            src="/hero-pattern.svg"
            alt="Silver cold tone pattern full width"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
          <div className="absolute inset-0 border-t border-b border-[rgba(255,255,255,0.15)]"></div>
        </div>
      </section>

      {/* Section 1 - Projects - Dark Cold Black & White */}
      <section id="work" className="py-20 border-b border-[rgba(255,255,255,0.1)]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs text-[#b0b0b0] mb-2 tracking-wider" style={{ marginTop: '15px', marginBottom: '15px' }}>
              &gt; SECTION_01
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginTop: '15px', marginBottom: '15px' }}>Introduction</h2>
            <div className="h-px w-24 bg-gradient-to-r from-white to-transparent" style={{ marginTop: '15px', marginBottom: '30px' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Introduction Card - First Position */}
            <div 
              className="apple-card transition-all group cursor-pointer"
              style={{
                borderRadius: '18px',
                padding: '28px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
                關於 Janus Forge Studio
              </h3>
              <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
                我們的團隊擁有全端開發、APP應用程式開發經驗。專注於導入高效能 AI 架構工程，使用可擴展的數位解決方案，結合前端與後端技術，並運用AI人工智慧架構設計，為客戶提供創新的技術服務與優質的使用體驗。
              </p>
            </div>
            
            {/* Project 2 - AII Enterprise Integration - Second Position */}
            <div 
              className="apple-card transition-all group cursor-pointer"
              style={{
                borderRadius: '18px',
                padding: '28px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
                AI 企業整合
              </h3>
              <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
                Janus Forge 不是另一間「玩 AI 工具」的工作室。我們把 AI 當成一個完整的系統，結合雲端、運算、前端技術、資料架構，讓企業與個人能 用得懂、用得快、用得安心。我們打造的是一個未來型的創意引擎——能生成、能分析、能理解，也能陪你走到最後一步。
              </p>
            </div>
            
            {/* Project 3 - Our Commitment */}
            <div 
              className="apple-card transition-all group cursor-pointer"
              style={{
                borderRadius: '18px',
                padding: '28px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
                鍛造你的AI工作室
              </h3>
              <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
                打造 AI 小型工作室，就是把創意、效率與科技濃縮在一個靈活的空間裡。透過輕量 GPU 工作站、雲端 AI 工具與自動化流程，你能在有限預算下打造極具戰力的內容產製中心。影像生成、行銷素材、數據整理、腳本撰寫都能以幾倍速度完成，讓單人或小團隊擁有媲美大型公司的創作能量。這樣的 AI Studio 是 快速和即時調整、少量成本以達到高度輸出。每一分投入，都能轉換成可見的產能與更具想像力的作品，為現代創作者最強的基地。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Testing Projects - Dark Cold Black & White */}
      <section className="py-20 border-b border-[rgba(255,255,255,0.1)]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-12">
            <div className="font-mono text-xs text-[#b0b0b0] mb-2 tracking-wider" style={{ marginTop: '15px', marginBottom: '15px' }}>
              &gt; SECTION_02
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginTop: '15px', marginBottom: '15px' }}>核心價值</h2>
            <div className="h-px w-24 bg-gradient-to-r from-white to-transparent" style={{ marginTop: '15px', marginBottom: '30px' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Test Project 1 */}
            <div 
              className="apple-card transition-all group cursor-pointer"
              style={{
                borderRadius: '18px',
                padding: '28px',
                marginBottom: '40px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
                NGO SPONSERSHIP
              </h3>
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[rgba(255,255,255,0.05)]" style={{ marginBottom: '15px' }}>
                <Image
                  src={process.env.NEXT_PUBLIC_TEST_PROJECT_1_IMAGE || 'https://picsum.photos/id/1015/800/600'}
                  alt="NGO SPONSERSHIP"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
                每一個微小的行動，都能讓世界更靠近善的方向。我們致力於陪伴弱勢、支持教育，並透過 AI 導入工作流程，提升行政效率、精準管理資源，讓每一分投入都真正被用在最需要的地方。
              </p>
            </div>
            
            {/* Test Project 2 */}
            <div 
              className="apple-card transition-all group cursor-pointer"
              style={{
                borderRadius: '18px',
                padding: '28px',
                marginBottom: '40px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
                中小企業 AI 工作流 導入
              </h3>
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[rgba(255,255,255,0.05)]" style={{ marginBottom: '15px' }}>
                <Image
                  src={process.env.NEXT_PUBLIC_TEST_PROJECT_2_IMAGE || 'https://picsum.photos/id/1018/800/600'}
                  alt="中小企業 AI 工作流 導入"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
                中小企業面臨人力不足、流程分散、決策速度慢等挑戰。透過 AI 工作流導入，企業能將重複性作業自動化，整合客服、行銷、庫存、報表等關鍵流程，讓每位員工專注於更具價值的工作。 <strong>AI 不取代人</strong>，而是讓企業用更少資源達成更高效率。
              </p>
            </div>
            
            {/* Test Project 3 */}
            <div 
              className="apple-card transition-all group cursor-pointer"
              style={{
                borderRadius: '18px',
                padding: '28px',
                marginBottom: '40px'
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#e8eef5] transition-colors" style={{ marginBottom: 'calc(0.5rem + 2px)' }}>
                AI 影音創作
              </h3>
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-[rgba(255,255,255,0.05)]" style={{ marginBottom: '15px' }}>
                <Image
                  src={process.env.NEXT_PUBLIC_TEST_PROJECT_3_IMAGE || 'https://picsum.photos/id/1025/800/600'}
                  alt="AI 影音創作"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-[#e0e0e0] leading-relaxed mb-4 group-hover:text-[#d0d8e0] transition-colors">
                每一幀都有靈魂，<br />
                AI 只是讓它更快被雕刻出來。<br />
                影片，不再被器材定義，<br />
                而是被想像力塑造。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Our Commitment Section - Full Width */}
      <section className="w-full pt-12 pb-12 relative overflow-hidden" style={{
        paddingTop: 'calc(3rem + 3px)',
        paddingBottom: 'calc(3rem + 3px)',
        background: '#000000'
      }}>
        <div className="container mx-auto relative z-10" style={{
          paddingLeft: '3rem',
          paddingRight: '3rem'
        }}>
          <div 
            className="rounded-3xl" 
            style={{
              padding: '3rem',
              background: 'linear-gradient(135deg, rgba(220, 220, 230, 0.15) 0%, rgba(200, 200, 210, 0.1) 50%, rgba(180, 180, 190, 0.15) 100%)',
              border: '1px solid rgba(220, 220, 230, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div style={{ marginBottom: '4rem' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">我們的承諾</h2>
              <div className="h-px w-24 bg-gradient-to-r from-white to-transparent mb-8"></div>
            </div>
            <p className="text-base md:text-lg text-[#e0e0e0] leading-relaxed max-w-4xl">
              我們承諾提供最高品質的服務與解決方案。透過持續創新、專業技術與誠信合作，我們致力於超越客戶期望，建立長期且互信的夥伴關係，共同創造卓越價值與成功。
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Dark Cold Black & White */}
      <footer className="py-10 border-t border-[rgba(255,255,255,0.1)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex gap-6 text-sm text-[#b0b0b0]" style={{ marginTop: '10px', marginBottom: '10px' }}>
              <a href="#contact" className="hover:text-white transition-all">聯絡我們</a>
              <a href="#" className="hover:text-white transition-all">LinkedIn</a>
              <a href="#" className="hover:text-white transition-all">Twitter</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)] text-xs text-[#b0b0b0] font-mono text-center" style={{ marginTop: '10px', marginBottom: '10px' }}>
            © 2025 Janus Forge Studio. All rights reserve.
          </div>
        </div>
      </footer>
    </main>
  );
}
