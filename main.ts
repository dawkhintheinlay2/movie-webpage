// main.ts

Deno.serve(async (_req: Request) => {
  const htmlContent = getCinematicLandingPage();
  return new Response(htmlContent, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

console.log("Cinematic design server is running at http://localhost:8000");

function getCinematicLandingPage(): string {
  const YOUR_APK_DOWNLOAD_LINK = "#";

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
            }
            .video-bg {
                position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                object-fit: cover; z-index: -2;
                background: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop') no-repeat center center/cover;
            }
            .hero::before {
                content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background: radial-gradient(ellipse at center, rgba(13, 13, 26, 0.5) 0%, rgba(13, 13, 26, 1) 90%);
                z-index: -1;
            }
            .hero-content h1 { font-size: 4.5rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 700; }
            .hero-content p { font-size: 1.25rem; max-width: 700px; margin: 0 auto 2.5rem; opacity: 0.8; }
            /* Features */
            #features { background-color: var(--c-bg); }
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
            #showcase { background: linear-gradient(180deg, var(--c-bg) 0%, #1a1a3d 100%); }
            .showcase-content { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 4rem; }
            .showcase-text ul { list-style: none; padding: 0; }
            .showcase-text li { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.5rem; font-size: 1.1rem; }
            .showcase-text .icon-check { color: var(--c-accent); margin-top: 5px; }
            .showcase-image { text-align: center; }
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
            .faq-item {
                background: var(--c-secondary); margin-bottom: 1rem; border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .faq-question { padding: 1.5rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
            .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; padding: 0 1.5rem; }
            .faq-item.active .faq-answer { max-height: 200px; padding: 0 1.5rem 1.5rem; }
            /* CTA & Footer */
            #download { text-align: center; }
            .footer { text-align: center; padding: 3rem 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }
            /* Responsive */
            @media (max-width: 992px) {
                .features-grid, .pricing-grid { grid-template-columns: 1fr; }
                .showcase-content { grid-template-columns: 1fr; text-align: center; }
                .showcase-text ul { display: inline-block; text-align: left; }
                .showcase-image { order: -1; margin-bottom: 3rem; }
            }
            @media (max-width: 768px) {
                .hero-content h1 { font-size: 2.8rem; }
                section { padding: 60px 0; }
            }
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
                <div class="container">
                    <div class="hero-content">
                        <h1>ရုပ်ရှင်ပိတ်ကားကို သင့်လက်ထဲမှာ</h1>
                        <p>ကမ္ဘာတစ်ဝှမ်းမှ ရုပ်ရှင်၊ ဇာတ်လမ်းတွဲပေါင်းများစွာကို အဆုံးမဲ့ ကြည့်ရှုခံစားလိုက်ပါ။</p>
                        <a href="#download" class="btn">App ကို ဒေါင်းလုဒ်ဆွဲပါ</a>
                    </div>
                </div>
            </section>

            <section id="features" class="container">
                <h2 class="section-title">သင့်အတွက် အတွေ့အကြုံသစ်</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2.544 10.495c.236-1.03.7-1.99 1.31-2.836l.263-.357.26-.363c.29-.395.594-.778.91-1.144l.29-.333.31-.328c1.3-1.31 3-2.134 4.88-2.43v0c.1-.014.2-.02.3-.02h.004c1.94.02 3.8.724 5.31 2.01l.24.204.28.247c1.32 1.15 2.26 2.65 2.72 4.31l.07.24.04.24c.23 1.25.02 2.53-.59 3.65l-.04.08-.06.1c-.65 1.17-1.63 2.15-2.82 2.82l-.2.12-.17.09c-1.15.61-2.42.93-3.73.93h-.01c-1.32-.01-2.6-.34-3.77-.99l-.24-.13-.23-.13c-1.15-.65-2.14-1.6-2.86-2.75l-.09-.16-.06-.11c-.62-1.1-.85-2.38-.63-3.65l.02-.13zM12 15a3 3 0 100-6 3 3 0 000 6z"></path><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z"></path></svg></div>
                        <h3>အဆုံးမဲ့ကြည့်ရှုခွင့်</h3>
                        <p>ရုပ်ရှင်နှင့် ဇာတ်လမ်းတွဲပေါင်း သောင်းချီကို လစဉ်ကြေးတစ်ခုတည်းဖြင့် အကန့်အသတ်မရှိ ကြည့်ရှုပါ။</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H6v-2h2.5zm4 0v2h-2v-2h2zm4.5 0v2h-2.5v-2H17zm-11-4V8H3v2h3zm5.5 0V8h-3v2h3zm6-2h-3v2h3V8z"></path></svg></div>
                        <h3>4K HDR ရုပ်ထွက်</h3>
                        <p>သင်အကြိုက်ဆုံး ဇာတ်ဝင်ခန်းများကို အသေးစိတ်ကျကျ၊ အကောင်းဆုံး အရည်အသွေးဖြင့် ခံစားလိုက်ပါ။</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3v-3zm-1-8a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"></path></svg></div>
                        <h3>အသစ်များ အမြဲတင်ဆက်</h3>
                        <p>ရုံတင်ဇာတ်ကားသစ်များ၊ နာမည်ကြီး ဇာတ်လမ်းတွဲ အပိုင်းသစ်များကို နေ့စဉ်မပြတ် တင်ဆက်ပေးနေပါတယ်။</p>
                    </div>
                </div>
            </section>
            
            <section id="showcase">
                <div class="container showcase-content">
                    <div class="showcase-text">
                        <h2>ဘယ်နေရာမှာမဆို ကြည့်ရှုနိုင်</h2>
                        <ul>
                            <li><span class="icon-check">✓</span> သင့် Android ဖုန်း၊ တက်ဘလက်များတွင် အသုံးပြုနိုင်။</li>
                            <li><span class="icon-check">✓</span> Offline ကြည့်ရှုရန် ဒေါင်းလုဒ်ဆွဲထားနိုင်။</li>
                            <li><span class="icon-check">✓</span> အသုံးပြုရလွယ်ကူပြီး မြန်မာဘာသာစကား အပြည့်အဝထောက်ပံ့။</li>
                        </ul>
                    </div>
                    <div class="showcase-image">
                        <img src="https://www.free-mockup.com/wp-content/uploads/2023/04/Free-Iphone-14-Pro-Mockup-1.jpg" alt="App on phone mockup">
                    </div>
                </div>
            </section>

            <section id="pricing" class="container">
                <h2 class="section-title">သင့်အတွက် အသင့်တော်ဆုံး Plan</h2>
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>အခမဲ့</h3>
                        <div class="price">Free</div>
                        <ul>
                            <li>720p Resolution</li>
                            <li>ကြော်ငြာများပါဝင်သည်</li>
                            <li>ဇာတ်ကားအကန့်အသတ်ဖြင့်</li>
                        </ul>
                        <a href="#download" class="btn">ရယူရန်</a>
                    </div>
                    <div class="pricing-card premium">
                        <h3>Premium</h3>
                        <div class="price">၃,၀၀၀<span>/လ</span></div>
                        <ul>
                            <li>4K+HDR Resolution</li>
                            <li>ကြော်ငြာလုံးဝမပါ</li>
                            <li>ဇာတ်ကားအားလုံး ကြည့်ရှုနိုင်သည်</li>
                            <li>Offline ဒေါင်းလုဒ်ရနိုင်သည်</li>
                        </ul>
                        <a href="#" class="btn">အခုဝယ်ယူရန်</a>
                    </div>
                    <div class="pricing-card">
                        <h3>Standard</h3>
                        <div class="price">၂,၀၀၀<span>/လ</span></div>
                        <ul>
                            <li>1080p Resolution</li>
                            <li>ကြော်ငြာအနည်းငယ်ပါဝင်သည်</li>
                            <li>ဇာတ်ကားအားလုံး ကြည့်ရှုနိုင်သည်</li>
                        </ul>
                        <a href="#" class="btn">အခုဝယ်ယူရန်</a>
                    </div>
                </div>
            </section>

            <section id="faq" class="container">
                <h2 class="section-title">အမေးများသော မေးခွန်းများ</h2>
                <div class="faq-item">
                    <div class="faq-question"><h3>ဘယ်လို ငွေပေးချေရမလဲ?</h3></div>
                    <div class="faq-answer"><p>KBZPay, WavePay တို့ဖြင့် အလွယ်တကူ ငွေပေးချေနိုင်ပါသည်။</p></div>
                </div>
                <div class="faq-item">
                    <div class="faq-question"><h3>စက်ဘယ်နှစ်လုံးမှာ သုံးလို့ရမလဲ?</h3></div>
                    <div class="faq-answer"><p>Premium plan ဖြင့် စက် (၄) လုံးအထိ တစ်ပြိုင်တည်း ကြည့်ရှုနိုင်ပါသည်။</p></div>
                </div>
                 <div class="faq-item">
                    <div class="faq-question"><h3>Application က iOS မှာ ရနိုင်မလား?</h3></div>
                    <div class="faq-answer"><p>လက်ရှိတွင် Android အတွက်သာ ရရှိနိုင်ပါသေးသည်။ iOS အတွက် မကြာမီလာမည်... စောင့်မျှော်ပါ။</p></div>
                </div>
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
            <div class="container">
                <p>&copy; ${new Date().getFullYear()} Lugi Kar Play. All rights reserved.</p>
            </div>
        </footer>

        <script>
            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                item.addEventListener('click', () => {
                    item.classList.toggle('active');
                });
            });
        <\/script>
    </body>
    </html>
  `;
}
