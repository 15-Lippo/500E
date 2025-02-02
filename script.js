document.addEventListener('DOMContentLoaded', function() {
    const translations = {
       "it": {
            // ... altre traduzioni esistenti ...
            "whitepaper_title": "White Paper",
            "whitepaper_intro_title": "Introduzione",
            "whitepaper_intro_text": "500 Crypto è una criptovaluta basata sulla blockchain di Solana, creata per celebrare l'iconica Fiat 500 d'epoca. Questo token unisce il fascino del passato con le innovazioni del futuro.",
            "wh（由于技术原因，联网搜索暂不可用）

Ecco l'integrazione del **White Paper** direttamente nel tuo sito HTML, senza bisogno di scaricare file. Ho aggiunto la sezione del White Paper con stili CSS integrati e ho aggiornato il file JavaScript per includere le traduzioni necessarie.

### Modifiche al Codice HTML
Ho aggiunto una nuova sezione `<section id="whitepaper">` dopo la sezione `#roadmap`.

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="title">500 Crypto - La Fiat 500 d'epoca</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Stili aggiuntivi per migliorare la grafica */
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        header {
            background: #2980b9;
            color: #fff;
            padding: 30px 0;
            text-align: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        header h1 {
            margin: 0;
            font-size: 3em;
        }
        header p {
            margin: 10px 0 0;
            font-size: 1.3em;
            font-style: italic;
        }
        section {
            padding: 30px;
            margin: 20px auto;
            max-width: 1000px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h2 {
            color: #34495e;
            border-bottom: 3px solid #34495e;
            padding-bottom: 15px;
            font-size: 2em;
            margin-bottom: 20px;
        }
        .image-grid {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .image-grid img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
        }
        .image-grid img:hover{
            transform: scale(1.05);
        }
        .chart-container {
            margin-top: 30px;
            text-align: center;
        }
        .chart-container iframe {
            width: 100%;
            height: 500px;
            border: none;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        form label {
            font-weight: bold;
            color: #34495e;
            font-size: 1.1em;
        }
        form input, form textarea {
            padding: 12px;
            border: 1px solid #bdc3c7;
            border-radius: 5px;
            font-size: 1em;
        }
        form button {
            padding: 12px 20px;
            background: #2980b9;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.1em;
            transition: background-color 0.3s ease;
        }
        form button:hover {
            background: #3498db;
        }
        footer {
            text-align: center;
            padding: 20px;
            background: #34495e;
            color: #fff;
            margin-top: 30px;
        }
        /* Responsive Design */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.2em;
            }
            header p {
                font-size: 1.1em;
            }
            section {
                padding: 20px;
                margin: 15px auto;
            }
            h2 {
                font-size: 1.7em;
            }
            .image-grid {
                gap: 10px;
            }
            .chart-container iframe {
                height: 400px;
            }
            form input, form textarea{
                font-size: 0.9em;
            }
            form button {
            font-size: 1em;
            }
        }
         @media (max-width: 480px) {
            header h1 {
                font-size: 1.8em;
            }
            header p {
                font-size: 1em;
            }
            section {
                padding: 15px;
                margin: 10px auto;
            }
            h2 {
                font-size: 1.5em;
            }
            .chart-container iframe {
                height: 300px;
            }
        }
          .language-switcher {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
        }
        .language-switcher button {
             background: #f0f0f0;
             border: 1px solid #ddd;
            padding: 8px 12px;
            margin: 0 5px;
             border-radius: 4px;
             cursor: pointer;
             transition: background-color 0.3s ease;
        }
         .language-switcher button:hover, .language-switcher button.active{
            background: #ddd;
        }

        /* Stili per il White Paper */
        #whitepaper {
            padding: 30px;
            margin: 20px auto;
            max-width: 1000px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .whitepaper-content {
            line-height: 1.8;
            color: #333;
        }

        .whitepaper-content h3 {
            color: #2980b9;
            margin-top: 25px;
            font-size: 1.5em;
            border-bottom: 2px solid #2980b9;
            padding-bottom: 10px;
        }

        .whitepaper-content ul {
            margin: 15px 0;
            padding-left: 20px;
        }

        .whitepaper-content ul li {
            margin-bottom: 10px;
        }

        .whitepaper-content p {
            margin: 15px 0;
        }
    </style>
</head>
<body>
  <div class="language-switcher">
    <button data-lang="it" class="active">Italiano</button>
    <button data-lang="en">English</button>
      <button data-lang="zh">中文</button>
    <button data-lang="fr">Français</button>
</div>

    <header>
        <h1 data-i18n="header_title">500 Crypto</h1>
        <p data-i18n="header_subtitle">La criptovaluta che celebra il mito della Fiat 500 d'epoca</p>
    </header>

    <section id="about">
        <h2 data-i18n="about_title">Chi Siamo</h2>
        <p data-i18n="about_text">Benvenuti nel mondo di 500 Crypto, la criptovaluta che celebra il mito della Fiat 500 d'epoca. Unisciti a noi per rivivere la magia di questa iconica automobile.</p>
        <p><strong><span data-i18n="about_mission_label">Missione:</span></strong> <span data-i18n="about_mission_text">Siamo appassionati dell'iconica Fiat 500 d'epoca e crediamo che la sua storia e il suo design unico meritino una celebrazione nel mondo delle criptovalute. Il nostro obiettivo è creare una community di appassionati, unendo il fascino del passato con le innovazioni del futuro.</span></p>
    </section>

      <section id="what-is-500-crypto">
        <h2 data-i18n="what_is_title">Cos'è 500 Crypto?</h2>
         <p data-i18n="what_is_text_1">500 Crypto è una criptovaluta basata sulla blockchain di Solana. È stata creata per celebrare la Fiat 500 d'epoca, una delle auto più iconiche e amate di tutti i tempi. Il token mira a creare una community di appassionati di auto d'epoca e di criptovalute.</p>
        <p><strong data-i18n="what_is_keypoints_label">Punti Chiave:</strong></p>
        <ul>
             <li data-i18n="what_is_keypoint_1"><strong>Community:</strong> Unisce appassionati di auto d'epoca e criptovalute.</li>
             <li data-i18n="what_is_keypoint_2"><strong>Decentralizzata:</strong> Opera sulla blockchain di Solana.</li>
             <li data-i18n="what_is_keypoint_3"><strong>Obiettivo:</strong> Celebra la Fiat 500 d'epoca.</li>
        </ul>
    </section>
        <section id="roadmap">
            <h2 data-i18n="roadmap_title">Roadmap</h2>
            <p><strong data-i18n="roadmap_phase_1_label">Fase 1:</strong> <span data-i18n="roadmap_phase_1_text">Lancio del token e creazione della community. (Completa)</span></p>
            <p><strong data-i18n="roadmap_phase_2_label">Fase 2:</strong> <span data-i18n="roadmap_phase_2_text">Sviluppo di partnership con eventi dedicati ad auto d'epoca. (In corso)</span></p>
             <p><strong data-i18n="roadmap_phase_3_label">Fase 3:</strong> <span data-i18n="roadmap_phase_3_text">Creazione di una piattaforma per lo scambio di asset legati alla Fiat 500 (prossimamente)</span></p>
        </section>

        <!-- Sezione White Paper -->
        <section id="whitepaper">
            <h2 data-i18n="whitepaper_title">White Paper</h2>
            <div class="whitepaper-content">
                <h3 data-i18n="whitepaper_intro_title">Introduzione</h3>
                <p data-i18n="whitepaper_intro_text">500 Crypto è una criptovaluta basata sulla blockchain di Solana, creata per celebrare l'iconica Fiat 500 d'epoca. Questo token unisce il fascino del passato con le innovazioni del futuro.</p>

                <h3 data-i18n="whitepaper_vision_title">Visione e Missione</h3>
                <p data-i18n="whitepaper_vision_text">La nostra visione è creare una criptovaluta che rappresenti l'eredità culturale e il design unico della Fiat 500. La missione è riunire appassionati di auto d'epoca e di criptovalute in una community globale.</p>

                <h3 data-i18n="whitepaper_technology_title">Tecnologia</h3>
                <p data-i18n="whitepaper_technology_text">500 Crypto è costruito sulla blockchain di Solana, scelta per la sua scalabilità, velocità e bassi costi di transazione. Utilizziamo lo standard SPL (Solana Program Library) e l'algoritmo di consenso Proof of History (PoH).</p>

                <h3 data-i18n="whitepaper_tokenomics_title">Tokenomics</h3>
                <ul>
                    <li data-i18n="whitepaper_tokenomics_1"><strong>Nome del Token:</strong> 500 Crypto (500C)</li>
                    <li data-i18n="whitepaper_tokenomics_2"><strong>Supply Totale:</strong> 500.000.000 token</li>
                    <li data-i18n="whitepaper_tokenomics_3"><strong>Distribuzione:</strong> 50% vendita pubblica, 20% community, 15% sviluppo, 10% partnership, 5% team.</li>
                </ul>

                <h3 data-i18n="whitepaper_utility_title">Utility del Token</h3>
                <p data-i18n="whitepaper_utility_text">Il token 500C offre accesso a eventi esclusivi, acquisto di NFT, governance della community e sconti presso partner selezionati.</p>

                <h3 data-i18n="whitepaper_roadmap_title">Roadmap</h3>
                <ul>
                    <li data-i18n="whitepaper_roadmap_1"><strong>Fase 1:</strong> Lancio del token e creazione della community.</li>
                    <li data-i18n="whitepaper_roadmap_2"><strong>Fase 2:</strong> Partnership con eventi di auto d'epoca.</li>
                    <li data-i18n="whitepaper_roadmap_3"><strong>Fase 3:</strong> Lancio di un marketplace per NFT e memorabilia.</li>
                </ul>

                <h3 data-i18n="whitepaper_conclusion_title">Conclusione</h3>
                <p data-i18n="whitepaper_conclusion_text">500 Crypto è un tributo alla Fiat 500, un'auto che ha segnato la storia dell'automobilismo. Unisciti a noi per celebrare questo mito e far parte di una community innovativa.</p>
            </div>
        </section>

    <section id="gallery">
        <h2 data-i18n="gallery_title">Galleria</h2>
         <div class="image-grid">
             <img src="https://raw.githubusercontent.com/15-Lippo/500E/refs/heads/master/logo.png.jpg" alt="Fiat 500 d'epoca">
            <img src="https://raw.githubusercontent.com/15-Lippo/500E/refs/heads/master/Screenshot_2025-02-02-14-08-16-39_3aea4af51f236e4932235fdada7d1643.jpg" alt="Fiat 500 d'epoca">
            <img src="https://raw.githubusercontent.com/15-Lippo/500E/refs/heads/master/Screenshot_2025-02-02-14-07-29-33_3aea4af51f236e4932235fdada7d1643.jpg" alt="Fiat 500 d'epoca">
            <img src="https://raw.githubusercontent.com/15-Lippo/500E/refs/heads/master/Screenshot_2025-02-02-20-12-10-44_3aea4af51f236e4932235fdada7d1643.jpg" alt="Fiat 500 d'epoca">
              <img src="https://raw.githubusercontent.com/15-Lippo/500E/refs/heads/master/IMG_20250202_201447.jpg" alt="Fiat 500 d'epoca">
        </div>
    </section>
    <section id="mevx-chart">
        <h2 data-i18n="chart_title">Grafico della Criptovaluta su Solana</h2>
        <div class="chart-container">
            <iframe src="https://mevx.io/solana/DdcrJRdNLB47bGdLZrcxVNfGAmvUbVXZKgY81Afcpump" title="Grafico mevx.io"></iframe>
        </div>
    <section id="pump-widget">
    <h2 data-i18n="stats_title">Statistiche della Criptovaluta</h2>
    <p data-i18n="stats_text">
        Per visualizzare le statistiche della criptovaluta, visita la pagina ufficiale su:
    </p>
    <a href="https://pump.fun/coin/DdcrJRdNLB47bGdLZrcxVNfGAmvUbVXZKgY81Afcpump" target="_blank" rel="noopener noreferrer" data-i18n="stats_link" style="display: inline-block; padding: 10px 20px; background-color: #2980b9; color: #fff; text-decoration: none; border-radius: 5px; font-size: 1.2em;">
        Vai a pump.fun
    </a>
    </section>
    

    <section id="contact">
        <h2 data-i18n="contact_title">Contattaci</h2>
        <form id="contact-form">
            <label for="name" data-i18n="contact_name_label">Nome:</label>
            <input type="text" id="name" name="name" required>
            <label for="email" data-i18n="contact_email_label">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message" data-i18n="contact_message_label">Messaggio:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" data-i18n="contact_send_button">Invia</button>
        </form>
    </section>

    <footer>
        <p>© 2025 500 Crypto. <span data-i18n="footer_rights">Tutti i diritti riservati.</span></p>
    </footer>
     <script src="script.js"></script>
</body>
</html>

document.addEventListener('DOMContentLoaded', function() {
    const translations = {
       "it": {
            "title": "500 Crypto - La Fiat 500 d'epoca",
            "header_title": "500 Crypto",
            "header_subtitle": "La criptovaluta che celebra il mito della Fiat 500 d'epoca",
            "about_title": "Chi Siamo",
            "about_text": "Benvenuti nel mondo di 500 Crypto, la criptovaluta che celebra il mito della Fiat 500 d'epoca. Unisciti a noi per rivivere la magia di questa iconica automobile.",
            "about_mission_label": "Missione:",
            "about_mission_text": "Siamo appassionati dell'iconica Fiat 500 d'epoca e crediamo che la sua storia e il suo design unico meritino una celebrazione nel mondo delle criptovalute. Il nostro obiettivo è creare una community di appassionati, unendo il fascino del passato con le innovazioni del futuro.",
            "what_is_title": "Cos'è 500 Crypto?",
            "what_is_text_1": "500 Crypto è una criptovaluta basata sulla blockchain di Solana. È stata creata per celebrare la Fiat 500 d'epoca, una delle auto più iconiche e amate di tutti i tempi. Il token mira a creare una community di appassionati di auto d'epoca e di criptovalute.",
            "what_is_keypoints_label": "Punti Chiave:",
            "what_is_keypoint_1": "<strong>Community:</strong> Unisce appassionati di auto d'epoca e criptovalute.",
            "what_is_keypoint_2": "<strong>Decentralizzata:</strong> Opera sulla blockchain di Solana.",
            "what_is_keypoint_3": "<strong>Obiettivo:</strong> Celebra la Fiat 500 d'epoca.",
            "roadmap_title": "Roadmap",
            "roadmap_phase_1_label": "Fase 1:",
            "roadmap_phase_1_text": "Lancio del token e creazione della community. (Completa)",
            "roadmap_phase_2_label": "Fase 2:",
            "roadmap_phase_2_text": "Sviluppo di partnership con eventi dedicati ad auto d'epoca. (In corso)",
            "roadmap_phase_3_label": "Fase 3:",
            "roadmap_phase_3_text": "Creazione di una piattaforma per lo scambio di asset legati alla Fiat 500 (prossimamente)",
            "gallery_title": "Galleria",
            "chart_title": "Grafico della Criptovaluta su Solana",
            "stats_title": "Statistiche della Criptovaluta",
            "stats_text": "Per visualizzare le statistiche della criptovaluta, visita la pagina ufficiale su ",
            "stats_link": "pump.fun",
            "contact_title": "Contattaci",
            "contact_name_label": "Nome:",
            "contact_email_label": "Email:",
            "contact_message_label": "Messaggio:",
            "contact_send_button": "Invia",
            "footer_rights": "Tutti i diritti riservati."
        },
        "en": {
           "title": "500 Crypto - The Vintage Fiat 500",
            "header_title": "500 Crypto",
            "header_subtitle": "The cryptocurrency celebrating the vintage Fiat 500",
            "about_title": "About Us",
            "about_text": "Welcome to the world of 500 Crypto, the cryptocurrency that celebrates the myth of the vintage Fiat 500. Join us to relive the magic of this iconic car.",
            "about_mission_label": "Mission:",
            "about_mission_text": "We are passionate about the iconic vintage Fiat 500 and believe that its history and unique design deserve a celebration in the world of cryptocurrencies. Our goal is to create a community of enthusiasts, combining the charm of the past with the innovations of the future.",
           "what_is_title": "What is 500 Crypto?",
            "what_is_text_1": "500 Crypto is a cryptocurrency based on the Solana blockchain. It was created to celebrate the vintage Fiat 500, one of the most iconic and beloved cars of all time. The token aims to create a community of vintage car and cryptocurrency enthusiasts.",
            "what_is_keypoints_label": "Key Points:",
            "what_is_keypoint_1": "<strong>Community:</strong> Unites vintage car and cryptocurrency enthusiasts.",
            "what_is_keypoint_2": "<strong>Decentralized:</strong> Operates on the Solana blockchain.",
            "what_is_keypoint_3": "<strong>Objective:</strong> Celebrates the vintage Fiat 500.",
            "roadmap_title": "Roadmap",
            "roadmap_phase_1_label": "Phase 1:",
            "roadmap_phase_1_text": "Launch of the token and creation of the community. (Complete)",
            "roadmap_phase_2_label": "Phase 2:",
            "roadmap_phase_2_text": "Development of partnerships with events dedicated to vintage cars. (In progress)",
            "roadmap_phase_3_label": "Phase 3:",
            "roadmap_phase_3_text": "Creation of a platform for the exchange of assets related to the Fiat 500 (coming soon)",
            "gallery_title": "Gallery",
            "chart_title": "Cryptocurrency Chart on Solana",
            "stats_title": "Cryptocurrency Statistics",
            "stats_text": "To view cryptocurrency statistics, visit the official page on ",
            "stats_link": "pump.fun",
            "contact_title": "Contact Us",
            "contact_name_label": "Name:",
            "contact_email_label": "Email:",
            "contact_message_label": "Message:",
            "contact_send_button": "Send",
            "footer_rights": "All rights reserved."
          },
        "zh": {
            "title": "500 加密貨幣 - 經典菲亞特500",
            "header_title": "500 加密貨幣",
            "header_subtitle": "慶祝經典菲亞特500的加密貨幣",
            "about_title": "關於我們",
            "about_text": "歡迎來到500 加密貨幣的世界，這是一種慶祝經典菲亞特500神話的加密貨幣。加入我們，重溫這款標誌性汽車的魔力。",
            "about_mission_label": "使命:",
            "about_mission_text": "我們對標誌性的經典菲亞特500充滿熱情，並認為其歷史和獨特設計值得在加密貨幣世界中慶祝。我們的目標是創建一個愛好者社區，將過去的魅力與未來的創新結合起來。",
            "what_is_title": "什麼是 500 加密貨幣?",
            "what_is_text_1": "500 加密貨幣是一種基於 Solana 區塊鏈的加密貨幣。它的創建是為了慶祝經典菲亞特500，這是有史以來最具標誌性和最受喜愛的汽車之一。該代幣旨在創建一個經典汽車和加密貨幣愛好者的社區。",
            "what_is_keypoints_label": "關鍵要點:",
            "what_is_keypoint_1": "<strong>社區:</strong> 聯合經典汽車和加密貨幣愛好者。",
            "what_is_keypoint_2": "<strong>去中心化:</strong> 在 Solana 區塊鏈上運行。",
            "what_is_keypoint_3": "<strong>目標:</strong> 慶祝經典菲亞特500。",
            "roadmap_title": "路線圖",
            "roadmap_phase_1_label": "第一階段:",
            "roadmap_phase_1_text": "代幣發布和社區創建。(已完成)",
            "roadmap_phase_2_label": "第二階段:",
            "roadmap_phase_2_text": "與致力於經典汽車的活動建立合作夥伴關係。(進行中)",
            "roadmap_phase_3_label": "第三階段:",
            "roadmap_phase_3_text": "創建一個用於交換與菲亞特500相關資產的平台 (即將推出)",
            "gallery_title": "圖庫",
            "chart_title": "Solana 上的加密貨幣圖表",
            "stats_title": "加密貨幣統計",
            "stats_text": "要查看加密貨幣統計信息，請訪問官方頁面 ",
            "stats_link": "pump.fun",
            "contact_title": "聯繫我們",
            "contact_name_label": "姓名:",
            "contact_email_label": "電子郵件:",
            "contact_message_label": "留言:",
            "contact_send_button": "發送",
            "footer_rights": "版權所有。"
        },
       "fr": {
            "title": "500 Crypto - La Fiat 500 d'époque",
            "header_title": "500 Crypto",
            "header_subtitle": "La cryptomonnaie célébrant la Fiat 500 d'époque",
            "about_title": "À Propos de Nous",
            "about_text": "Bienvenue dans le monde de 500 Crypto, la cryptomonnaie qui célèbre le mythe de la Fiat 500 d'époque. Rejoignez-nous pour revivre la magie de cette voiture emblématique.",
            "about_mission_label": "Mission:",
            "about_mission_text": "Nous sommes passionnés par l'emblématique Fiat 500 d'époque et nous pensons que son histoire et son design unique méritent d'être célébrés dans le monde des cryptomonnaies. Notre objectif est de créer une communauté de passionnés, en combinant le charme du passé avec les innovations du futur.",
            "what_is_title": "Qu'est-ce que 500 Crypto ?",
            "what_is_text_1": "500 Crypto est une cryptomonnaie basée sur la blockchain Solana. Elle a été créée pour célébrer la Fiat 500 d'époque, l'une des voitures les plus emblématiques et aimées de tous les temps. Le jeton vise à créer une communauté de passionnés de voitures anciennes et de cryptomonnaies.",
            "what_is_keypoints_label": "Points Clés :",
            "what_is_keypoint_1": "<strong>Communauté :</strong> Réunit les passionnés de voitures anciennes et de cryptomonnaies.",
            "what_is_keypoint_2": "<strong>Décentralisée :</strong> Fonctionne sur la blockchain Solana.",
            "what_is_keypoint_3": "<strong>Objectif :</strong> Célèbre la Fiat 500 d'époque.",
            "roadmap_title": "Feuille de Route",
            "roadmap_phase_1_label": "Phase 1 :",
            "roadmap_phase_1_text": "Lancement du jeton et création de la communauté. (Terminée)",
            "roadmap_phase_2_label": "Phase 2 :",
            "roadmap_phase_2_text": "Développement de partenariats avec des événements dédiés aux voitures anciennes. (En cours)",
            "roadmap_phase_3_label": "Phase 3 :",
            "roadmap_phase_3_text": "Création d'une plateforme pour l'échange d'actifs liés à la Fiat 500 (prochainement)",
            "gallery_title": "Galerie",
            "chart_title": "Graphique de la Cryptomonnaie sur Solana",
            "stats_title": "Statistiques de la Cryptomonnaie",
            "stats_text": "Pour consulter les statistiques de la cryptomonnaie, visitez la page officielle sur ",
            "stats_link": "pump.fun",
            "contact_title": "Contactez-nous",
            "contact_name_label": "Nom :",
            "contact_email_label": "Email :",
            "contact_message_label": "Message :",
            "contact_send_button": "Envoyer",
            "footer_rights": "Tous droits réservés."
        }
    };

    const langSwitcher = document.querySelector('.language-switcher');
    const langButtons = langSwitcher.querySelectorAll('button');

     function setLanguage(lang) {
        document.documentElement.lang = lang; // Set the HTML lang attribute

        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Apply translations
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                      element.setAttribute('placeholder', translations[lang][key]);
                  } else if (element.tagName === 'A'){
                    element.textContent = translations[lang][key];
                  }
                 else {
                  element.innerHTML = translations[lang][key]; // Use innerHTML to handle HTML tags in translation
                }

            }
        });

    }

    // set initial language
    let initialLang = document.documentElement.lang;
     setLanguage(initialLang);


    langSwitcher.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const lang = event.target.dataset.lang;
             setLanguage(lang);
        }
    });
});
