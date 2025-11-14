// main.ts

Deno.serve(async (_req: Request) => {
  const htmlContent = getLandingPage();
  return new Response(htmlContent, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
});

console.log("Movie APK promotion server is running at http://localhost:8000");

function getLandingPage(): string {
  const YOUR_APK_DOWNLOAD_LINK = "#";

  return `
    <!DOCTYPE html>
    <html lang="my">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lugi Kar Play - အကောင်းဆုံး ရုပ်ရှင် App</title>
        <style>
            :root {
                --bg-color: #0c0c1e;
                --text-color: #e0e0e0;
                --primary-color: #00aaff;
                --secondary-color: #1a1a3a;
                --card-bg: #1e1e48;
                --accent-gold: #ffd700;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                background-color: var(--bg-color);
                color: var(--text-color);
                margin: 0;
                line-height: 1.6;
            }
            .container {
                max-width: 1100px;
                margin: 0 auto;
                padding: 0 20px;
            }
            section {
                padding: 60px 0;
            }
            h1, h2, h3 {
                font-weight: 700;
                color: #ffffff;
            }
            .section-title {
                text-align: center;
                font-size: 2.5rem;
                margin-bottom: 40px;
                color: var(--primary-color);
            }
            .btn {
                display: inline-block;
                padding: 12px 28px;
                background-color: var(--primary-color);
                color: #fff;
                text-decoration: none;
                border-radius: 50px;
                font-weight: bold;
                transition: transform 0.2s, background-color 0.2s;
            }
            .btn:hover {
                transform: scale(1.05);
                background-color: #0088cc;
            }
            .btn-gold {
                background-color: var(--accent-gold);
                color: #000;
            }
            .btn-gold:hover {
                background-color: #e6c300;
            }
            header {
                background: rgba(12, 12, 30, 0.8);
                padding: 20px 0;
                position: fixed;
                width: 100%;
                top: 0;
                z-index: 1000;
                backdrop-filter: blur(10px);
            }
            header .container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .logo {
                font-size: 1.8rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            .hero {
                background-image: linear-gradient(rgba(12, 12, 30, 0.8), rgba(12, 12, 30, 0.9)), url('https://picsum.photos/1600/900');
                background-size: cover;
                background-position: center;
                text-align: center;
                padding: 180px 0 120px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .hero h1 {
                font-size: 3.5rem;
                margin-bottom: 20px;
                max-width: 800px;
            }
            .hero p {
                font-size: 1.2rem;
                max-width: 600px;
                margin-bottom: 30px;
                opacity: 0.9;
            }
            .hero .app-icon {
                width: 120px;
                height: 120px;
                border-radius: 25px;
                margin-bottom: 20px;
                box-shadow: 0 10px 30px rgba(0, 170, 255, 0.3);
                background-image: url('https://picsum.photos/120/120?grayscale');
                background-size: cover;
            }
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 30px;
            }
            .feature-card {
                background: var(--secondary-color);
                padding: 30px;
                border-radius: 10px;
                text-align: center;
                border: 1px solid #333366;
            }
            .feature-card .icon {
                font-size: 3rem;
                color: var(--primary-color);
                margin-bottom: 20px;
            }
            .pricing-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 30px;
                align-items: center;
            }
            .pricing-card {
                background: var(--card-bg);
                padding: 40px;
                border-radius: 15px;
                text-align: center;
                border: 2px solid #333366;
                transition: transform 0.3s, box-shadow 0.3s;
            }
            .pricing-card:hover {
                transform: translateY(-10px);
            }
            .pricing-card.premium {
                border-color: var(--accent-gold);
                transform: scale(1.05);
                box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
            }
            .pricing-card h3 {
                font-size: 1.8rem;
                color: var(--primary-color);
                margin-bottom: 10px;
            }
            .pricing-card.premium h3 {
                color: var(--accent-gold);
            }
            .price {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .price span {
                font-size: 1rem;
                font-weight: normal;
                opacity: 0.7;
            }
            .pricing-card ul {
                list-style: none;
                padding: 0;
                margin-bottom: 30px;
            }
            .pricing-card ul li {
                margin-bottom: 10px;
            }
            .download {
                background: var(--secondary-color);
                text-align: center;
            }
            .download-btn {
                font-size: 1.5rem;
                padding: 20px 50px;
            }
            footer {
                text-align: center;
                padding: 30px 0;
                background: #000;
                font-size: 0.9rem;
            }
            @media (max-width: 768px) {
                .hero h1 { font-size: 2.5rem; }
                .pricing-card.premium { transform: scale(1); }
            }
        </style>
    </head>
    <body>

        <header>
            <div class="container">
                <div class="logo">Lugi Kar Play</div>
                <a href="#download" class="btn">ဒေါင်းလုဒ်</a>
            </div>
        </header>

        <main>
            <section class="hero">
                <div class="app-icon"></div>
                <h1>သင်အကြိုက်ဆုံး ရုပ်ရှင်နဲ့ ဇာတ်လမ်းတွဲတွေကို တစ်နေရာတည်းမှာ ကြည့်ရှုလိုက်ပါ။</h1>
                <p>မြန်မာစာတန်းထိုး ဇာတ်ကားပေါင်း ထောင်ပေါင်းများစွာကို သင့်ဖုန်းထဲကနေ အချိန်မရွေး၊ နေရာမရွေး ကြည့်ရှုနိုင်မယ့် အကောင်းဆုံး App</p>
                <a href="#download" class="btn btn-gold">APK ကို အခုပဲ ဒေါင်းလုဒ์ဆွဲပါ</a>
            </section>

            <section class="features">
                <div class="container">
                    <h2 class="section-title">ဘာကြောင့် ကျွန်တော်တို့ App ကို ရွေးချယ်သင့်သလဲ?</h2>
                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="icon">🎬</div>
                            <h3>ရုပ်ရှင်နှင့် ဇာတ်လမ်းတွဲ အစုံလင်ဆုံး</h3>
                            <p>ဟောလိဝုဒ်၊ ကိုရီးယား၊ ထိုင်း၊ မြန်မာ ဇာတ်ကားသစ်၊ ဇာတ်ကားဟောင်းပေါင်းများစွာကို စုစည်းထားပါတယ်။</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">🔄</div>
                            <h3>နေ့စဉ် Update အသစ်များ</h3>
                            <p>ရုံတင်ဇာတ်ကားသစ်များနဲ့ ဇာတ်လမ်းတွဲ အပိုင်းသစ်များကို နေ့စဉ်မပြတ် တင်ဆက်ပေးနေပါတယ်။</p>
                        </div>
                        <div class="feature-card">
                            <div class="icon">✨</div>
                            <h3>ကြည်လင်ပြတ်သားသော ရုပ်ထွက်</h3>
                            <p>သင်၏ အင်တာနက်လိုင်းအပေါ်မူတည်ပြီး 4K, 1080p, 720p အရည်အသွေးမျိုးစုံဖြင့် ကြည့်ရှုနိုင်ပါတယ်။</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pricing">
                <div class="container">
                    <h2 class="section-title">သင့်အတွက် အသင့်တော်ဆုံး လစဉ်ကြေး Plan</h2>
                    <div class="pricing-grid">
                        <div class="pricing-card">
                            <h3>အစမ်းသုံး</h3>
                            <div class="price">အခမဲ့</div>
                            <ul>
                                <li>✔️ ရုပ်ရှင်အချို့ကို ကြည့်ရှုနိုင်သည်</li>
                                <li>✔️ 480p အရည်အသွေး</li>
                                <li>❌ ကြော်ငြာများ ပါဝင်သည်</li>
                                <li>❌ Offline ဒေါင်းလုဒ်ဆွဲမရပါ</li>
                            </ul>
                            <a href="#download" class="btn">ရွေးချယ်ရန်</a>
                        </div>
                        <div class="pricing-card premium">
                            <h3>အထူး (Premium)</h3>
                            <div class="price">၃,၀၀၀ <span>ကျပ် / တစ်လ</span></div>
                            <ul>
                                <li>✔️ ရုပ်ရှင်နှင့် ဇာတ်လမ်းတွဲအားလုံး</li>
                                <li>✔️ 4K + HDR အရည်အသွေး</li>
                                <li>✔️ ကြော်ငြာလုံးဝမပါ</li>
                                <li>✔️ Offline ဒေါင်းလုဒ်ဆွဲနိုင်သည်</li>
                            </ul>
                            <a href="#" class="btn btn-gold">ရွေးချယ်ရန်</a>
                        </div>
                        <div class="pricing-card">
                            <h3>ပုံမှန် (Standard)</h3>
                            <div class="price">၂,၀၀၀ <span>ကျပ် / တစ်လ</span></div>
                             <ul>
                                <li>✔️ ရုပ်ရှင်နှင့် ဇာတ်လမ်းတွဲအားလုံး</li>
                                <li>✔️ 1080p အရည်အသွေး</li>
                                <li>✔️ ကြော်ငြာအနည်းငယ်ပါဝင်သည်</li>
                                <li>❌ Offline ဒေါင်းလုဒ်ဆွဲမရပါ</li>
                            </ul>
                            <a href="#" class="btn">ရွေးချယ်ရန်</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="download" class="download">
                <div class="container">
                    <h2 class="section-title">Application ကို အခုပဲ ဒေါင်းလုဒ်ဆွဲလိုက်ပါ</h2>
                    <p>သင်၏ Android ဖုန်းအတွက် နောက်ဆုံးထွက်ဗားရှင်း။</p>
                    <a href="${YOUR_APK_DOWNLOAD_LINK}" class="btn btn-gold download-btn">APK ဖိုင်ကို ဒေါင်းလုဒ်ဆွဲရန်</a>
                    <p style="margin-top: 20px; opacity: 0.7;">Android version 6.0 နှင့်အထက်တွင် အသုံးပြုနိုင်ပါသည်။</p>
                </div>
            </section>
        </main>

        <footer>
            <div class="container">
                <p>&copy; ${new Date().getFullYear()} Lugi Kar Play. All rights reserved.</p>
            </div>
        </footer>

    </body>
    </html>
  `;
}
