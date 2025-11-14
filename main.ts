// main.ts

Deno.serve(async (_req: Request) => {
  const htmlContent = getCinematicLandingPage();
  return new Response(htmlContent, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

console.log("Cinematic design server with Payment Modal is running...");

function getCinematicLandingPage(): string {
  const YOUR_APK_DOWNLOAD_LINK = "#";
  const YOUR_TELEGRAM_LINK = "https://t.me/your_username";

  return `
    <!DOCTYPE html>
    <html lang="my">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lugi Kar Play - Cinematic Experience</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --c-bg: #0d0d1a;
                --c-primary: #8a2be2;
                --c-secondary: #1a1a3d;
                --c-accent: #00f2ea;
                --c-text: #ccc;
                --c-heading: #fff;
                --font-main: 'Kanit', sans-serif;
            }
            *, *::before, *::after { box-sizing: border-box; }
            html { scroll-behavior: smooth; }
            body {
                font-family: var(--font-main);
                background-color: var(--c-bg);
                color: var(--c-text);
                margin: 0;
                line-height: 1.7;
            }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
            img { max-width: 100%; display: block; }
            section { padding: 100px 0; }
            h1, h2, h3, h4 { color: var(--c-heading); font-weight: 600; }
            .btn {
                display: inline-block;
                padding: 15px 35px;
                background-image: linear-gradient(90deg, var(--c-primary), #c039d9);
                color: #fff; text-decoration: none; border-radius: 50px;
                font-weight: 600; transition: all 0.3s ease;
                box-shadow: 0 10px 25px rgba(138, 43, 226, 0.4); border: none; cursor: pointer;
            }
            .btn:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(138, 43, 226, 0.6); }
            /* Header */
            .header {
                position: fixed; top: 0; left: 0; width: 100%;
                padding: 1.5rem 0; z-index: 1000;
                background: linear-gradient(to bottom, rgba(13, 13, 26, 0.8), transparent);
            }
            .header .container { display: flex; justify-content: space-between; align-items: center; }
            .logo { font-size: 2rem; font-weight: 700; color: #fff; letter-spacing: 1px; }
            /* Hero Section */
            .hero {
                min-height: 100vh;
                display: flex; align-items: center; text-align: center;
                position: relative; overflow: hidden;
                background: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop') no-repeat center center/cover;
            }
            .hero::before {
                content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(ellipse at center, rgba(13, 13, 26, 0.5) 0%, rgba(13, 13, 26, 1) 90%);
            }
            .hero-content { position: relative; z-index: 2; }
            .hero-content h1 { font-size: 4.5rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 700; }
            .hero-content p { font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.8; }
            /* Features */
            .section-title { font-size: 3rem; text-align: center; margin-bottom: 60px; }
            .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
            .feature-card {
                background: var(--c-secondary); padding: 2rem;
                border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.1);
                text-align: center; transition: all 0.3s ease;
            }
            .feature-card:hover { transform: translateY(-10px); background: #252552; }
            .feature-icon { margin-bottom: 1rem; color: var(--c-accent); }
            .feature-icon svg { width: 50px; height: 50px; }
            /* Device Showcase */
            .showcase-content { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 4rem; }
            .showcase-text ul { list-style: none; padding: 0; }
            .showcase-text li { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; font-size: 1.1rem; }
            .showcase-text .icon-check { color: var(--c-accent); margin-top: 5px; }
            .showcase-image img { max-width: 350px; }
            /* Pricing */
            .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
            .pricing-card {
                background: var(--c-secondary); padding: 2.5rem; border-radius: 15px;
                border: 1px solid rgba(255, 255, 255, 0.1); text-align: center;
                transition: all 0.3s ease; position: relative;
            }
            .pricing-card:hover { transform: translateY(-10px); }
            .pricing-card.premium { border-color: var(--c-primary); box-shadow: 0 0 50px rgba(138, 43, 226, 0.5); }
            .pricing-card h3 { text-transform: uppercase; font-size: 1.2rem; letter-spacing: 2px; }
            .price { font-size: 3.5rem; font-weight: 700; color: var(--c-accent); margin: 1rem 0; }
            .price span { font-size: 1rem; color: var(--c-text); }
            .pricing-card ul { list-style: none; padding: 0; margin: 2rem 0; }
            .pricing-card ul li { margin-bottom: 1rem; }
            .pricing-card .btn { background: rgba(255,255,255,0.1); box-shadow: none; }
            .pricing-card.premium .btn { background-image: linear-gradient(90deg, var(--c-primary), #c039d9); box-shadow: 0 10px 25px rgba(138, 43, 226, 0.4); }
            /* FAQ */
            .faq-item { background: var(--c-secondary); margin-bottom: 1rem; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.1); }
            .faq-question { padding: 1.5rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
            .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; padding: 0 1.5rem; }
            .faq-item.active .faq-answer { max-height: 200px; padding: 0 1.5rem 1.5rem; }
            /* CTA & Footer */
            #download { text-align: center; }
            .footer { text-align: center; padding: 3rem 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }
            
            /* --- MODAL STYLES (NEW) --- */
            .modal-overlay {
                display: none; position: fixed; top: 0; left: 0;
                width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8);
                z-index: 2000; justify-content: center; align-items: center;
            }
            .modal-overlay.active { display: flex; }
            .modal-content {
                background: var(--c-secondary); padding: 2.5rem;
                border-radius: 15px; width: 90%; max-width: 500px;
                position: relative; text-align: center;
                border: 1px solid var(--c-primary);
                box-shadow: 0 0 60px rgba(138, 43, 226, 0.5);
            }
            .close-btn {
                position: absolute; top: 10px; right: 20px;
                font-size: 2.5rem; color: #fff; cursor: pointer;
                border: none; background: none;
            }
            .payment-info { margin-top: 1.5rem; }
            .payment-method {
                display: flex; align-items: center; justify-content: center;
                gap: 1rem; background: rgba(0,0,0,0.2); padding: 1rem;
                border-radius: 10px; margin-bottom: 1rem;
            }
            .payment-method img { width: 40px; height: 40px; }
            .payment-method .phone { font-size: 1.5rem; font-weight: 600; color: var(--c-accent); }
            .contact-info { margin-top: 2rem; }

            /* Responsive */
            @media (max-width: 992px) {
                .features-grid, .pricing-grid { grid-template-columns: 1fr; }
                .showcase-content { grid-template-columns: 1fr; text-align: center; }
                .showcase-image { order: -1; margin-bottom: 3rem; }
            }
            @media (max-width: 768px) { .hero-content h1 { font-size: 2.8rem; } section { padding: 60px 0; } }
        </style>
    </head>
    <body>
        <header class="header">
            <div class="container">
                <div class="logo">Lugi Kar</div>
                <a href="${YOUR_APK_DOWNLOAD_LINK}" class="btn">ရယူရန်</a>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="video-bg"></div>
                <div class="container hero-content">
                    <h1>ရုပ်ရှင်ပိတ်ကားကို သင့်လက်ထဲမှာ</h1>
                    <p>ကမ္ဘာတစ်ဝှမ်းမှ ရုပ်ရှင်၊ ဇာတ်လမ်းတွဲပေါင်းများစွာကို အဆုံးမဲ့ ကြည့်ရှုခံစားလိုက်ပါ။</p>
                    <a href="#download" class="btn">App ကို ဒေါင်းလုဒ်ဆွဲပါ</a>
                </div>
            </section>
            
            <section id="pricing" class="container">
                <h2 class="section-title">သင့်အတွက် အသင့်တော်ဆုံး Plan</h2>
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>အခမဲ့</h3>
                        <div class="price">Free</div>
                        <ul><li>720p Resolution</li><li>ကြော်ငြာများပါဝင်သည်</li><li>ဇာတ်ကားအကန့်အသတ်ဖြင့်</li></ul>
                        <a href="#download" class="btn">ရယူရန်</a>
                    </div>
                    <div class="pricing-card premium">
                        <h3>Premium</h3>
                        <div class="price">၃,၀၀၀<span>/လ</span></div>
                        <ul><li>4K+HDR Resolution</li><li>ကြော်ငြာလုံးဝမပါ</li><li>ဇာတ်ကားအားလုံး ကြည့်နိုင်သည်</li><li>Offline ဒေါင်းလုဒ်ရနိုင်သည်</li></ul>
                        <button class="btn buy-btn">အခုဝယ်ယူရန်</button>
                    </div>
                    <div class="pricing-card">
                        <h3>Standard</h3>
                        <div class="price">၂,၀၀၀<span>/လ</span></div>
                        <ul><li>1080p Resolution</li><li>ကြော်ငြာအနည်းငယ်ပါဝင်သည်</li><li>ဇာတ်ကားအားလုံး ကြည့်နိုင်သည်</li></ul>
                        <button class="btn buy-btn">အခုဝယ်ယူရန်</button>
                    </div>
                </div>
            </section>

            <section id="faq" class="container">
                <h2 class="section-title">အမေးများသော မေးခွန်းများ</h2>
                <div class="faq-item"><div class="faq-question"><h3>ဘယ်လို ငွေပေးချေရမလဲ?</h3></div><div class="faq-answer"><p>KBZPay, WavePay တို့ဖြင့် အလွယ်တကူ ငွေပေးချေနိုင်ပါသည်။</p></div></div>
                <div class="faq-item"><div class="faq-question"><h3>စက်ဘယ်နှစ်လုံးမှာ သုံးလို့ရမလဲ?</h3></div><div class="faq-answer"><p>Premium plan ဖြင့် စက် (၄) လုံးအထိ တစ်ပြိုင်တည်း ကြည့်ရှုနိုင်ပါသည်။</p></div></div>
            </section>

            <section id="download" class="container">
                 <div style="text-align: center;">
                    <h2 class="section-title">စတင်ဖို့ အဆင်သင့်ဖြစ်ပြီလား?</h2>
                    <p style="max-width: 600px; margin: 0 auto 2rem;">Lugi Kar Play App ကို အခုပဲ ဒေါင်းလုဒ်ဆွဲပြီး အကောင်းဆုံး ရုပ်ရှင်ကြည့်ရှုမှု အတွေ့အကြုံကို ခံစားလိုက်ပါ။</p>
                    <a href="${YOUR_APK_DOWNLOAD_LINK}" class="btn">APK ဖိုင်ကို ဒေါင်းလုဒ်ဆွဲရန်</a>
                 </div>
            </section>
        </main>

        <footer class="footer">
            <div class="container"><p>&copy; ${new Date().getFullYear()} Lugi Kar Play. All rights reserved.</p></div>
        </footer>

        <!-- PAYMENT MODAL (NEW) -->
        <div class="modal-overlay" id="payment-modal">
            <div class="modal-content">
                <button class="close-btn" id="close-modal">&times;</button>
                <h2>ငွေပေးချေရန်</h2>
                <p>အောက်ပါ နံပါတ်များသို့ လစဉ်ကြေးကို လွှဲပေးပါ။</p>
                <div class="payment-info">
                    <div class="payment-method">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/KBZ_Bank_logo.svg/1200px-KBZ_Bank_logo.svg.png" alt="KBZPay Logo">
                        <span class="phone">09xxxxxxxxx</span>
                    </div>
                    <div class="payment-method">
                        <img src="https://play-lh.googleusercontent.com/rG7bTSo4y_tP2aP1vjXyq-rVq-fV-s8cE-tG05a1D1FwBvS4aW0i9y2l_Hh3w=w240-h480-rw" alt="WavePay Logo">
                        <span class="phone">09xxxxxxxxx</span>
                    </div>
                </div>
                <div class="contact-info">
                    <p>ငွေလွှဲပြီးပါက screenshot ကို အောက်ပါ Telegram သို့ ပေးပို့၍ plan activate လုပ်ပါ။</p>
                    <a href="${YOUR_TELEGRAM_LINK}" target="_blank" class="btn">Telegram သို့ ဆက်သွယ်ရန်</a>
                </div>
            </div>
        </div>

        <script>
            // FAQ Accordion
            document.querySelectorAll('.faq-item').forEach(item => {
                item.addEventListener('click', () => item.classList.toggle('active'));
            });

            // MODAL SCRIPT (NEW)
            const paymentModal = document.getElementById('payment-modal');
            const closeModalBtn = document.getElementById('close-modal');
            const buyButtons = document.querySelectorAll('.buy-btn');

            const openModal = () => paymentModal.classList.add('active');
            const closeModal = () => paymentModal.classList.remove('active');

            buyButtons.forEach(button => button.addEventListener('click', openModal));
            closeModalBtn.addEventListener('click', closeModal);
            paymentModal.addEventListener('click', (event) => {
                if (event.target === paymentModal) {
                    closeModal();
                }
            });
        <\/script>
    </body>
    </html>
  `;
}
