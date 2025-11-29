'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔹 這裡改成用 formData，而不是不存在的 name / email 變數
    const payload = { ...formData };

    console.log('[DEBUG] Sending payload:', payload);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      console.log('[DEBUG] Response status:', res.status);

      const data = await res.json().catch(() => null);
      console.log('[DEBUG] Response JSON:', data);

      if (!res.ok || (data && data.success === false)) {
        alert('API 回應錯誤（看 Console）');
        return;
      }

      alert('提交成功！');

      // 🔹 成功後順便把表單清空
      setFormData({
        name: '',
        email: '',
        question: '',
        comments: ''
      });
    } catch (err) {
      console.error('[DEBUG] fetch error:', err);
      alert('fetch 直接 error（網路、CORS 或 Cloudflare function）');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <div
            className="font-mono text-xs text-[#b0b0b0] mb-2 tracking-wider"
            style={{ marginTop: '15px', marginBottom: '15px' }}
          >
            &gt; SECTION_03
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ marginTop: '15px', marginBottom: '15px' }}
          >
            聯絡我們
          </h2>
          <div
            className="h-px w-24 bg-gradient-to-r from-white to-transparent"
            style={{ marginTop: '15px', marginBottom: '30px' }}
          ></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left Column - Contact Info Card */}
          <div
            className="apple-card no-hover"
            style={{
              borderRadius: '18px',
              padding: '28px'
            }}
          >
            <h3
              className="text-xl font-semibold mb-2 text-white"
              style={{ marginBottom: 'calc(0.5rem + 2px)' }}
            >
              聯繫方式
            </h3>
            <div className="text-sm text-[#e0e0e0] leading-relaxed">
              <p style={{ marginBottom: '20px' }}>
                有任何問題或合作需求，歡迎與我們聯繫。我們致力於提供專業的技術服務與優質的客戶體驗。
              </p>
              <div
                className="pt-4 border-t border-[rgba(255,255,255,0.1)]"
                style={{ marginTop: '20px' }}
              >
                <div className="space-y-3">
                  <div style={{ marginBottom: '20px' }}>
                    <div className="text-xs text-[#b0b0b0] mb-1 uppercase tracking-wider">
                      電子郵件
                    </div>
                    <a
                      href="mailto:customerservice@janusforge.com"
                      className="text-white hover:text-[#e8eef5] transition-colors"
                    >
                      customerservice@janusforge.com
                    </a>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div className="text-xs text-[#b0b0b0] mb-1 uppercase tracking-wider">
                      回覆時間
                    </div>
                    <div className="text-white">1-2 個工作天</div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div className="text-xs text-[#b0b0b0] mb-1 uppercase tracking-wider">
                      電話
                    </div>
                    <a
                      href="tel:+886-2-1234-5678"
                      className="text-white hover:text-[#e8eef5] transition-colors"
                    >
                      +886-2-1234-5678
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form Card */}
          <div
            className="apple-card no-hover"
            style={{
              borderRadius: '18px',
              padding: '28px'
            }}
          >
            <h3
              className="text-xl font-semibold mb-2 text-white"
              style={{ marginBottom: 'calc(0.5rem + 2px)' }}
            >
              填寫表單
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Name and Email in Row */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                style={{ marginBottom: '20px' }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[#b0b0b0] mb-2 uppercase tracking-wider"
                  >
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(10,10,10,0.4)] border border-[rgba(255,255,255,0.15)] rounded-lg text-white text-sm placeholder-[#808080] focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#b0b0b0] mb-2 uppercase tracking-wider"
                  >
                    電子郵件
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[rgba(10,10,10,0.4)] border border-[rgba(255,255,255,0.15)] rounded-lg text-white text-sm placeholder-[#808080] focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Question Type */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="question"
                  className="block text-xs text-[#b0b0b0] mb-2 uppercase tracking-wider"
                >
                  問題類型
                </label>
                <select
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(10,10,10,0.4)] border border-[rgba(255,255,255,0.15)] rounded-lg text-white text-sm focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all appearance-none"
                >
                  <option value="" className="bg-[#0a0a0a]">
                    請選擇問題類型
                  </option>
                  <option value="general" className="bg-[#0a0a0a]">
                    一般詢問
                  </option>
                  <option value="project" className="bg-[#0a0a0a]">
                    專案合作
                  </option>
                  <option value="technical" className="bg-[#0a0a0a]">
                    技術支援
                  </option>
                  <option value="other" className="bg-[#0a0a0a]">
                    其他
                  </option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="comments"
                  className="block text-xs text-[#b0b0b0] mb-2 uppercase tracking-wider"
                >
                  訊息內容
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[rgba(10,10,10,0.4)] border border-[rgba(255,255,255,0.15)] rounded-lg text-white text-sm placeholder-[#808080] focus:outline-none focus:border-[rgba(232,238,245,0.4)] transition-all resize-none"
                  placeholder="請描述您的問題或需求..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[rgba(232,238,245,0.1)] border border-[rgba(232,238,245,0.3)] text-white font-medium rounded-lg text-sm hover:bg-[rgba(232,238,245,0.15)] hover:border-[rgba(232,238,245,0.4)] hover:shadow-[0_0_20px_rgba(232,238,245,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '送出中...' : '送出訊息'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}