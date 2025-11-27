'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hthegrumpy.app.n8n.cloud/webhook-test/http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('表單已送出，我們會盡快回覆您！');
        setFormData({
          name: '',
          email: '',
          question: '',
          comments: ''
        });
      } else {
        throw new Error('提交失敗');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('提交時發生錯誤，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header - Dark Cold Black & White */}
      <header className="sticky top-0 z-50 tesla-header" style={{ marginTop: '7px' }}>
        <div className="container mx-auto px-6 py-4 md:px-8">
          <nav className="flex items-center justify-end">
            <div className="flex gap-8 font-mono tracking-wider uppercase text-[15px]">
              <Link href="/#about" className="text-[#b0b0b0] hover:text-white transition-all duration-300">
                About
              </Link>
              <Link href="/#work" className="text-[#b0b0b0] hover:text-white transition-all duration-300">
                Work
              </Link>
              <Link href="/contact" className="text-[#b0b0b0] hover:text-white transition-all duration-300">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Section - Simplified */}
      <section className="flex-grow py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16">
              <div className="font-mono text-xs text-[#b0b0b0] mb-4 tracking-wider">
                &gt; CONTACT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                聯繫我們
              </h1>
              <p className="text-[#b0b0b0] text-lg">
                有任何問題或合作需求，歡迎與我們聯繫
              </p>
            </div>

            {/* Contact Form - Centered */}
            <div className="tesla-glass-card p-10 md:p-12 rounded-2xl">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-[#e0e0e0] mb-3">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[rgba(10,10,10,0.6)] border border-white rounded-lg text-white placeholder-[#808080] focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all"
                    placeholder="請輸入您的姓名"
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-[#e0e0e0] mb-3">
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[rgba(10,10,10,0.6)] border border-white rounded-lg text-white placeholder-[#808080] focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Question Type */}
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="question" className="block text-sm font-medium text-[#e0e0e0] mb-3">
                    問題類型
                  </label>
                  <select
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[rgba(10,10,10,0.6)] border border-white rounded-lg text-white focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0a0a0a]">請選擇問題類型</option>
                    <option value="general" className="bg-[#0a0a0a]">一般詢問</option>
                    <option value="project" className="bg-[#0a0a0a]">專案合作</option>
                    <option value="technical" className="bg-[#0a0a0a]">技術支援</option>
                    <option value="other" className="bg-[#0a0a0a]">其他</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="comments" className="block text-sm font-medium text-[#e0e0e0] mb-3">
                    訊息內容
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-[rgba(10,10,10,0.6)] border border-white rounded-lg text-white placeholder-[#808080] focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all resize-none"
                    placeholder="請描述您的問題或需求..."
                  />
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-[rgba(232,238,245,0.1)] border border-[rgba(232,238,245,0.3)] text-white font-medium rounded-lg hover:bg-[rgba(232,238,245,0.15)] hover:border-[rgba(232,238,245,0.4)] hover:shadow-[0_0_20px_rgba(232,238,245,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '送出中...' : '送出訊息'}
                  </button>
                </div>
              </form>
            </div>

            {/* Simple Contact Info */}
            <div className="mt-12 text-center">
              <div className="space-y-4 text-[#b0b0b0]">
                <div>
                  <a href="mailto:customerservice@janusforge.com" className="hover:text-white transition-colors">
                    customerservice@janusforge.com
                  </a>
                </div>
                <div className="text-sm">
                  我們會在 1-2 個工作天內回覆
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Dark Cold Black & White */}
      <footer className="py-12 border-t border-[rgba(255,255,255,0.1)] mt-auto">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="font-mono text-xs text-[#b0b0b0]" style={{ marginBottom: '5px' }}>
              &gt; SECTION_02
            </div>
            <div className="flex gap-6 text-sm text-[#b0b0b0]">
              <Link href="/contact" className="hover:text-white transition-all">CONTACT</Link>
              <a href="#" className="hover:text-white transition-all">GITHUB</a>
              <a href="#" className="hover:text-white transition-all">LINKEDIN</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)] text-xs text-[#b0b0b0] font-mono text-center">
            © 2024 | JANUS FORGE STUDIO
          </div>
        </div>
      </footer>
    </main>
  );
}
