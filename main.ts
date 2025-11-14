// main.ts

Deno.serve(async (_req: Request) => {
  const htmlContent = getNewLandingPage();
  return new Response(htmlContent, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

console.log("New design movie APK server is running at http://localhost:8000");

function getNewLandingPage(): string {
  const YOUR_APK_DOWNLOAD_LINK = "#";

  return `
    <!DOCTYPE html>
    <html lang="my">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lugi Kar Play - ရုပ်ရှင် App ဒီဇိုင်းသစ်</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --color-bg: #100f1c;
                --color-primary: #ef476f;
                --color-secondary: #2c2541;
                --color-accent: #06d6a0;
                --color-text: #e8e8e8;
                --font-family: 'Poppins', sans-serif;
            }
            *, *::before, *::after {
                box-sizing: border-box;
            }
            html {
                scroll-behavior: smooth;
            }
            body {
                font-family: var(--font-family);
                background-color: var(--color-bg);
                color: var(--color-text);
                margin: 0;
                line-height: 1.7;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem;
            }
            img {
                max-width: 100%;
                display: block;
            }
            section {
                padding: 80px 0;
            }
            .section-title {
                text-align: center;
                font-size: 2.8rem;
                font-weight: 700;
                margin-bottom: 50px;
                background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .btn {
                display: inline-block;
                padding: 14px 32px;
                background: linear-gradient(90deg, var(--color-primary), #ff8a64);
                color: #fff;
                text-decoration: none;
                border-radius: 50px;
                font-weight: 600;
                transition: transform 0.3s ease;
                box-shadow: 0 5px 20px rgba(239, 71, 111, 0.4);
            }
            .btn:hover {
                transform: translateY(-3px);
            }
            /* Reveal Animation */
            .reveal {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            .reveal.active {
                opacity: 1;
                transform: translateY(0);
            }
            /* Header */
            .header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                padding: 1.5rem 0;
                z-index: 100;
                background: rgba(16, 15, 28, 0.5);
                backdrop-filter: blur(12px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .header .container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .logo {
                font-size: 1.8rem;
                font-weight: 700;
                color: #fff;
            }
            /* Hero */
            .hero {
                min-height: 100vh;
                display: flex;
                align-items: center;
                text-align: center;
                background: linear-gradient(135deg, rgba(16, 15, 28, 0.95), rgba(44, 37, 65, 0.85)), url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2070&auto=format&fit=crop') no-repeat center center/cover;
            }
            .hero-content h1 {
                font-size: 3.8rem;
                font-weight: 700;
                line-height: 1.2;
                margin-bottom: 1rem;
            }
            .hero-content p {
                font-size: 1.2rem;
                max-width: 650px;
                margin: 0 auto 2rem;
                opacity: 0.8;
            }
            /* Features */
            .feature {
                display: flex;
                align-items: center;
                gap: 4rem;
                margin-bottom: 80px;
            }
            .feature:last-child { margin-bottom: 0; }
            .feature:nth-child(even) { flex-direction: row-reverse; }
            .feature-text { flex: 1; }
            .feature-image { flex: 1; }
            .feature-image img { border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
            /* Pricing */
            .pricing-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
            }
            .pricing-card {
                background: var(--color-secondary);
                padding: 2.5rem;
                border-radius: 15px;
                text-align: center;
                border: 2px solid transparent;
                transition: transform 0.3s;
                position: relative;
                overflow: hidden;
            }
            .pricing-card:hover { transform: translateY(-10px); }
            .pricing-card.premium {
                border-color: var(--color-primary);
                box-shadow: 0 0 40px rgba(239, 71, 111, 0.3);
            }
            .popular-badge {
                position: absolute;
                top: 18px; right: -45px;
                background: var(--color-primary);
                color: #fff;
                padding: 5px 40px;
                transform: rotate(45deg);
                font-size: 0.9rem;
                font-weight: 600;
            }
            .pricing-card h3 { font-size: 1.5rem; margin-bottom: 1rem; }
            .price { font-size: 3rem; font-weight: 700; color: var(--color-accent); margin-bottom: 1rem; }
            .price span { font-size: 1rem; font-weight: 400; color: var(--color-text); opacity: 0.7; }
            .pricing-card ul { list-style: none; padding: 0; margin: 2rem 0; }
            .pricing-card ul li { margin-bottom: 1rem; }
            /* CTA */
            .cta {
                background: var(--color-secondary);
                text-align: center;
                border-radius: 20px;
                padding: 4rem 2rem;
            }
            .cta h2 { font-size: 2.5rem; margin-top: 0; }
            /* Footer */
            .footer {
                text-align: center;
                padding: 3rem 0;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            /* Responsive */
            @media (max-width: 992px) {
                .feature { flex-direction: column !important; text-align: center; }
                .pricing-grid { grid-template-columns: 1fr; }
            }
            @media (max-width: 768px) {
                .hero-content h1 { font-size: 2.8rem; }
            }
        </style>
    </head>
    <body>
        <header class="header">
            <div class="container">
                <div class="logo">Lugi Kar</div>
                <a href="#download" class="btn">ဒေါင်းလုဒ်</a>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="container">
                    <div class="hero-content reveal">
                        <h1>ရုပ်ရှင်နှင့် ဇာတ်လမ်းတွဲများ၊ သင်၏ ကမ္ဘာသစ်ထဲသို့</h1>
                        <p>မြန်မာစာတန်းထိုးဖြင့် နောက်ဆုံးထွက် ဇာတ်ကားပေါင်းများစွာကို သင့်လက်ဖဝါးပေါ်မှာ အဆင်ပြေပြေ ကြည့်ရှုလိုက်ပါ။</p>
                        <a href="#download" class="btn">App ကို အခမဲ့ ရယူပါ</a>
                    </div>
                </div>
            </section>

            <section class="features-section container">
                <div class="feature reveal">
                    <div class="feature-text">
                        <h2>အကြောင်းအရာ စုံလင်မှု</h2>
                        <p>ရုံတင်ဇာတ်ကားသစ်များမှသည် ဂန္ထဝင်ဇာတ်ကားကောင်းများအထိ၊ သင်နှစ်သက်ရာ အမျိုးအစားတိုင်းကို တစ်နေရာတည်းမှာ စုစည်းထားပါသည်။ နေ့စဉ် update အသစ်များကိုလည်း စောင့်မျှော်လိုက်ပါ။</p>
                    </div>
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1627843563095-2df978278783?q=80&w=1974&auto=format&fit=crop" alt="Movies collection">
                    </div>
                </div>
                <div class="feature reveal">
                    <div class="feature-text">
                        <h2>အကောင်းဆုံး အရည်အသွေး</h2>
                        <p>သင်၏ အင်တာနက် အမြန်နှုန်းပေါ် မူတည်၍ 4K HDR အထိ ကြည်လင်ပြတ်သားသော ရုပ်ထွက်ဖြင့် ကြည့်ရှုခံစားနိုင်ပါသည်။ ကြည်လင်တဲ့ ရုပ်ထွက်က ဇာတ်ကားရဲ့ ခံစားမှုကို အပြည့်အဝ ပေးစွမ်းနိုင်မှာပါ။</p>
                    </div>
                    <div class="feature-image">
                        <img src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop" alt="4K Quality">
                    </div>
                </div>
            </section>
            
            <section class="pricing-section container reveal">
                <h2 class="section-title">သင့်အတွက် အကောင်းဆုံး Plan</h2>
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>အခမဲ့</h3>
                        <div class="price">Free</div>
                        <ul>
                            <li>✔️ ကြော်ငြာဖြင့် ကြည့်ရှုရန်</li>
                            <li>✔️ 720p အရည်အသွေး</li>
                            <li>❌ ဇာတ်ကားအားလုံး ကြည့်မရ</li>
                        </ul>
                        <a href="#download" class="btn">စတင်ရန်</a>
                    </div>
                    <div class="pricing-card premium">
                        <div class="popular-badge">လူကြိုက်အများဆုံး</div>
                        <h3>Premium</h3>
                        <div class="price">၃,၀၀၀<span>/လ</span></div>
                        <ul>
                            <li>✔️ ဇာတ်ကားအားလုံး ကြည့်ရှုနိုင်သည်</li>
                            <li>✔️ 4K+HDR အရည်အသွေး</li>
                            <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                        </ul>
                        <a href="#" class="btn">အခုဝယ်မည်</a>
                    </div>
                    <div class="pricing-card">
                        <h3>Standard</h3>
                        <div class="price">၂,၀၀၀<span>/လ</span></div>
                        <ul>
                            <li>✔️ ဇာတ်ကားအားလုံး ကြည့်ရှုနိုင်သည်</li>
                            <li>✔️ 1080p အရည်အသွေး</li>
                            <li>✔️ ကြော်ငြာ အနည်းငယ်ပါဝင်သည်</li>
                        </ul>
                        <a href="#" class="btn">အခုဝယ်မည်</a>
                    </div>
                </div>
            </section>

            <section id="download" class="container reveal">
                <div class="cta">
                    <h2>စောင့်မနေနဲ့တော့!</h2>
                    <p>အကောင်းဆုံး ရုပ်ရှင်ကြည့်ရှုမှု အတွေ့အကြုံအတွက် Lugi Kar Play App ကို အခုပဲ သင့်ဖုန်းထဲမှာ ထည့်သွင်းလိုက်ပါ။</p>
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
            const revealElements = document.querySelectorAll('.reveal');

            function handleScroll() {
                for (let i = 0; i < revealElements.length; i++) {
                    const windowHeight = window.innerHeight;
                    const elementTop = revealElements[i].getBoundingClientRect().top;
                    const elementVisible = 150; // a small offset

                    if (elementTop < windowHeight - elementVisible) {
                        revealElements[i].classList.add('active');
                    } else {
                        // Optional: remove class to re-animate on scroll up
                        // revealElements[i].classList.remove('active');
                    }
                }
            }

            window.addEventListener('scroll', handleScroll);
            document.addEventListener('DOMContentLoaded', handleScroll); // Initial check
        <\/script>
    </body>
    </html>
  `;
}
