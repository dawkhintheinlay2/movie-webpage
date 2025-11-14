// main.ts

Deno.serve(async (_req: Request) => {
  const htmlContent = getFinalLandingPage();
  return new Response(htmlContent, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

console.log("Final refined design server is running...");

function getFinalLandingPage(): string {
  const YOUR_APK_DOWNLOAD_LINK = "#";
  const YOUR_TELEGRAM_LINK = "https://t.me/your_username";

  return `
    <!DOCTYPE html>
    <html lang="my">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lugi Kar Play - The Ultimate Entertainment</title>
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
                line-height: 1.6;
            }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
            img { max-width: 100%; display: block; }
            section { padding: 80px 0; }
            h1, h2, h3, h4 { color: var(--c-heading); font-weight: 600; margin-top: 0; }
            .btn {
                display: inline-block;
                padding: 14px 32px;
                background-image: linear-gradient(90deg, var(--c-primary), #c039d9);
                color: #fff; text-decoration: none; border-radius: 50px;
                font-weight: 600; transition: all 0.3s ease;
                box-shadow: 0 8px 20px rgba(138, 43, 226, 0.35); border: none; cursor: pointer;
            }
            .btn:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(138, 43, 226, 0.5); }
            .header {
                position: fixed; top: 0; left: 0; width: 100%;
                padding: 1.2rem 0; z-index: 1000;
                background: rgba(13, 13, 26, 0.7); backdrop-filter: blur(10px);
            }
            .header .container { display: flex; justify-content: space-between; align-items: center; }
            .logo { font-size: 1.8rem; font-weight: 700; color: #fff; letter-spacing: 1px; }
            .hero {
                min-height: 100vh;
                display: flex; align-items: center; text-align: center;
                position: relative; overflow: hidden;
                background: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop') no-repeat center center/cover;
            }
            .hero::before {
                content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(ellipse at center, rgba(13, 13, 26, 0.6) 0%, rgba(13, 13, 26, 1) 85%);
            }
            .hero-content { position: relative; z-index: 2; }
            .hero-content h1 { font-size: 3.5rem; line-height: 1.2; margin-bottom: 1rem; font-weight: 700; }
            .hero-content p { font-size: 1.1rem; max-width: 650px; margin: 0 auto 2.5rem; opacity: 0.9; }
            .section-title { font-size: 2.5rem; text-align: center; margin-bottom: 50px; }
            .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
            .feature-card {
                background: var(--c-secondary); padding: 2rem;
                border-radius: 15px; border: 1px solid rgba(255, 255, 255, 0.05);
                text-align: center; transition: all 0.3s ease;
            }
            .feature-card:hover { transform: translateY(-8px); background: #252552; }
            .feature-icon { margin-bottom: 1rem; color: var(--c-accent); }
            .feature-icon svg { width: 45px; height: 45px; }
            .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
            .pricing-card {
                background: var(--c-secondary); padding: 2rem; border-radius: 15px;
                border: 1px solid rgba(255, 255, 255, 0.1); text-align: center;
                transition: all 0.3s ease; position: relative; display: flex; flex-direction: column;
            }
            .pricing-card:hover { transform: translateY(-10px); }
            .pricing-card.premium { border-color: var(--c-primary); box-shadow: 0 0 50px rgba(138, 43, 226, 0.4); }
            .best-value-badge {
                position: absolute; top: 15px; right: -40px;
                background: var(--c-primary); color: #fff; padding: 4px 40px;
                transform: rotate(45deg); font-size: 0.8rem; font-weight: 600;
            }
            .pricing-card h3 { text-transform: uppercase; font-size: 1.1rem; letter-spacing: 1px; }
            .price { font-size: 2.8rem; font-weight: 700; color: var(--c-accent); margin: 1rem 0; }
            .price span { font-size: 0.9rem; color: var(--c-text); }
            .pricing-card ul { list-style: none; padding: 0; margin: 1.5rem 0; text-align: left; flex-grow: 1; }
            .pricing-card ul li { margin-bottom: 0.8rem; }
            .pricing-card .btn { margin-top: auto; }
            #download { text-align: center; }
            .modal-overlay {
                display: none; position: fixed; top: 0; left: 0;
                width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85);
                z-index: 2000; justify-content: center; align-items: center;
                backdrop-filter: blur(5px);
            }
            .modal-overlay.active { display: flex; }
            .modal-content {
                background: var(--c-secondary); padding: 2rem;
                border-radius: 15px; width: 90%; max-width: 500px;
                position: relative; text-align: center;
                border: 1px solid var(--c-primary);
                box-shadow: 0 0 60px rgba(138, 43, 226, 0.5);
            }
            .close-btn {
                position: absolute; top: 5px; right: 15px;
                font-size: 2.5rem; color: #fff; cursor: pointer;
                border: none; background: none;
            }
            .payment-info { margin-top: 1.5rem; }
            .payment-method {
                display: flex; align-items: center; justify-content: center;
                gap: 1rem; background: rgba(0,0,0,0.2); padding: 1rem;
                border-radius: 10px; margin-bottom: 1rem;
            }
            .payment-method img { width: 40px; height: 40px; border-radius: 8px;}
            .payment-method .phone { font-size: 1.3rem; font-weight: 600; color: var(--c-accent); }
            .contact-info { margin-top: 1.5rem; }
            .footer { text-align: center; padding: 3rem 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }

            @media (max-width: 992px) {
                .pricing-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 768px) {
                .hero-content h1 { font-size: 2.5rem; }
                .section-title { font-size: 2rem; }
                .features-grid, .pricing-grid { grid-template-columns: 1fr; }
                section { padding: 60px 0; }
            }
        </style>
    </head>
    <body>
        <header class="header">
            <div class="container"><div class="logo">Lugi Kar</div><a href="#download" class="btn">ရယူရန်</a></div>
        </header>

        <main>
            <section class="hero">
                <div class="hero-content">
                    <h1>ရုပ်ရှင်ပိတ်ကားကို သင့်လက်ထဲမှာ</h1>
                    <p>ကမ္ဘာတစ်ဝှမ်းမှ ရုပ်ရှင်၊ ဇာတ်လမ်းတွဲပေါင်းများစွာကို အဆုံးမဲ့ ကြည့်ရှုခံစားလိုက်ပါ။</p>
                    <a href="#download" class="btn">App ကို ဒေါင်းလုဒ်ဆွဲပါ</a>
                </div>
            </section>
            
            <section id="pricing" class="container">
                <h2 class="section-title">သင့်အတွက် အကောင်းဆုံး Plan ကိုရွေးချယ်ပါ</h2>
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>အခမဲ့</h3>
                        <div class="price">Free</div>
                        <ul>
                            <li>✔️ Jav Free</li>
                            <li>✔️ Chinese Free</li>
                            <li>✔️ Movie Free</li>
                            <li>✔️ ကြော်ငြာများဖြင့် ကြည့်ရှုရန်</li>
                        </ul>
                        <a href="#download" class="btn">ရယူရန်</a>
                    </div>
                    <div class="pricing-card">
                        <h3>၁ လ</h3>
                        <div class="price">၇၀၀<span>/ကျပ်</span></div>
                        <ul>
                            <li>✔️ ဘောလုံးပွဲတိုက်ရိုက် ကြည့်ရှုနိုင်ခြင်း</li>
                            <li>✔️ VIP တံဆိပ်ပါ Movieများ ကြည့်နိုင်ခြင်း</li>
                            <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                            <li>✔️ 4K အရည်အသွေး</li>
                        </ul>
                        <button class="btn buy-btn" data-plan="၁ လ Plan" data-price="၇၀၀ ကျပ်">အခုဝယ်ယူရန်</button>
                    </div>
                    <div class="pricing-card">
                        <h3>၃ လ</h3>
                        <div class="price">၁,၅၀၀<span>/ကျပ်</span></div>
                        <ul>
                            <li>✔️ ဘောလုံးပွဲတိုက်ရိုက် ကြည့်ရှုနိုင်ခြင်း</li>
                            <li>✔️ VIP တံဆိပ်ပါ Movieများ ကြည့်နိုင်ခြင်း</li>
                            <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                            <li>✔️ 4K အရည်အသွေး</li>
                        </ul>
                        <button class="btn buy-btn" data-plan="၃ လ Plan" data-price="၁,၅၀၀ ကျပ်">အခုဝယ်ယူရန်</button>
                    </div>
                    <div class="pricing-card">
                        <h3>၅ လ</h3>
                        <div class="price">၂,၂၀၀<span>/ကျပ်</span></div>
                        <ul>
                            <li>✔️ ဘောလုံးပွဲတိုက်ရိုက် ကြည့်ရှုနိုင်ခြင်း</li>
                            <li>✔️ VIP တံဆိပ်ပါ Movieများ ကြည့်နိုင်ခြင်း</li>
                            <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                            <li>✔️ 4K အရည်အသွေး</li>
                        </ul>
                        <button class="btn buy-btn" data-plan="၅ လ Plan" data-price="၂,၂၀၀ ကျပ်">အခုဝယ်ယူရန်</button>
                    </div>
                    <div class="pricing-card">
                        <h3>၈ လ</h3>
                        <div class="price">၃,၇၀၀<span>/ကျပ်</span></div>
                        <ul>
                           <li>✔️ ဘောလုံးပွဲတိုက်ရိုက် ကြည့်ရှုနိုင်ခြင်း</li>
                            <li>✔️ VIP တံဆိပ်ပါ Movieများ ကြည့်နိုင်ခြင်း</li>
                            <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                            <li>✔️ 4K အရည်အသွေး</li>
                        </ul>
                        <button class="btn buy-btn" data-plan="၈ လ Plan" data-price="၃,၇၀၀ ကျပ်">အခုဝယ်ယူရန်</button>
                    </div>
                    <div class="pricing-card premium">
                        <div class="best-value-badge">တန်ဖိုးအရှိဆုံး</div>
                        <h3>၁ နှစ်</h3>
                        <div class="price">၅,၀၀၀<span>/ကျပ်</span></div>
                        <ul>
                            <li>✔️ ဘောလုံးပွဲတိုက်ရိုက် ကြည့်ရှုနိုင်ခြင်း</li>
                            <li>✔️ VIP တံဆိပ်ပါ Movieများ ကြည့်နိုင်ခြင်း</li>
                            <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                            <li>✔️ 4K အရည်အသွေး</li>
                        </ul>
                        <button class="btn buy-btn" data-plan="၁ နှစ် Plan" data-price="၅,၀၀၀ ကျပ်">အခုဝယ်ယူရန်</button>
                    </div>
                </div>
            </section>

            <section id="download" class="container">
                 <div style="text-align: center;">
                    <h2 class="section-title">စတင်ဖို့ အဆင်သင့်ဖြစ်ပြီလား?</h2>
                    <p style="max-width: 600px; margin: 0 auto 2rem;">Lugi Kar Play App ကို အခုပဲ ဒေါင်းလုဒ်ဆွဲပြီး အကောင်းဆုံး ဖျော်ဖြေမှု အတွေ့အကြုံကို ခံစားလိုက်ပါ။</p>
                    <a href="${YOUR_APK_DOWNLOAD_LINK}" class="btn">APK ဖိုင်ကို ဒေါင်းလုဒ်ဆွဲရန်</a>
                 </div>
            </section>
        </main>

        <footer class="footer">
            <div class="container"><p>&copy; ${new Date().getFullYear()} Lugi Kar Play. All rights reserved.</p></div>
        </footer>

        <div class="modal-overlay" id="payment-modal">
            <div class="modal-content">
                <button class="close-btn" id="close-modal">&times;</button>
                <h2 id="modal-plan-title">ငွေပေးချေရန်</h2>
                <p>အောက်ပါ နံပါတ်များသို့ ရွေးချယ်ထားသော Plan ၏နှုန်းထားအတိုင်း ငွေလွှဲပေးပါ။</p>
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
            const paymentModal = document.getElementById('payment-modal');
            const closeModalBtn = document.getElementById('close-modal');
            const buyButtons = document.querySelectorAll('.buy-btn');
            const modalPlanTitle = document.getElementById('modal-plan-title');

            const openModal = (plan, price) => {
                modalPlanTitle.textContent = \`\${plan} (\${price})\`;
                paymentModal.classList.add('active');
            };
            const closeModal = () => paymentModal.classList.remove('active');

            buyButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const plan = button.dataset.plan;
                    const price = button.dataset.price;
                    openModal(plan, price);
                });
            });

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
