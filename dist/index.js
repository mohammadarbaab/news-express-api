"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(
  "/images",
  express_1.default.static(path_1.default.join(__dirname, "../public/images"))
);
app.get("/", (req, res) => {
  const home = [
    {
      status: "ok",
      totalResults: 28,
      articles: [
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "tipranks.com",
          title: "UBS Sounds the Alarm on Tesla Stock",
          description:
            "Down 34% since the start of the year, Tesla (NASDAQ:TSLA) stock is now officially the worst-performing stock in the S&P 500. Realizing that Tesla s... #tesla",
          url: "https://biztoc.com/x/b2df9a4911174519",
          urlToImage: "https://c.biztoc.com/p/b2df9a4911174519/s.webp",
          publishedAt: "2024-03-16T20:45:06Z",
          content:
            "Down 34% since the start of the year, Tesla (NASDAQ:TSLA) stock is now officially the worst-performing stock in the S&amp;P 500. Realizing that Tesla s...\r\n#tesla\r\nThis story appeared on tipranks.com… [+2 chars]",
        },
        {
          source: {
            id: null,
            name: "WebProNews",
          },
          author: "Staff",
          title:
            "Elon Musk Takes a Dig at Don Lemon: “Don ‘Veruca Salt’ Lemon”",
          description:
            "WebProNews\nElon Musk Takes a Dig at Don Lemon: “Don ‘Veruca Salt’ Lemon”\nAccording to The NY Post's report, Lemon's list of requests included a staggering $5 million upfront payment, an $8 million salary, and an equity stake in the platform. But it didn't sto…",
          url: "https://www.webpronews.com/elon-musk-takes-a-dig-at-don-lemon-don-veruca-salt-lemon/",
          urlToImage:
            "https://www.webpronews.com/wp-content/uploads/2024/03/Screenshot-2024-03-16-at-4.28.50-PM.jpg",
          publishedAt: "2024-03-16T20:31:15Z",
          content:
            "Elon Musk, the enigmatic billionaire and CEO of Tesla and SpaceX, has once again ignited a fiery exchange of words, this time targeting former CNN host Don Lemon. In a scathing tweet posted on Friday… [+3170 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "seattletimes.com",
          title:
            "Former Tesla worker settles discrimination case, ending appeals over lowered $3.2 million verdict",
          description:
            "Tesla and a Black man who worked at the company’s California factory have settled a discrimination case that drew attention to the company's treatment of minorities.#tesla",
          url: "https://biztoc.com/x/160456da0176a33c",
          urlToImage: "https://c.biztoc.com/273/og.png",
          publishedAt: "2024-03-16T20:27:10Z",
          content:
            "Tesla and a Black man who worked at the companys California factory have settled a discrimination case that drew attention to the company's treatment of minorities.\r\n#tesla\r\nThis story appeared on se… [+16 chars]",
        },{
          source: {
            id: null,
            name: "Android Central",
          },
          author: "Steven Shaw",
          title:
            "Android 15 could allow devices to be tracked even when switched off",
          description:
            "Recent Pixel phones may be able to send Bluetooth beacons to nearby compatible devices.",
          url: "https://www.androidcentral.com/apps-software/android-15-could-allow-devices-to-be-tracked-even-when-switched-off",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/JwFDzY3SMrwdQVC3pzbJLW-1200-80.jpg",
          publishedAt: "2024-03-15T15:57:20Z",
          content:
            "Android 15 is expected to introduce a Powered Off Finder API. This API will enable compatible devices to be tracked even when switched off. The feature is expected to be available on recent Pixel p…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Tim Hardwick",
          title:
            "Caviar's 18-Karat Gold Custom Apple Vision Pro Won't Start at $3,499",
          description:
            "Caviar, a company known for making luxury variants of popular tech gadgets, intends to release a custom Apple Vision Pro plated with 18-karat gold next year that will inevitably set you back more than Apple's $3,499 starting price.",
          url: "https://www.macrumors.com/2024/03/15/caviar-apple-vision-pro-custom-gold/",
          urlToImage:
            "https://images.macrumors.com/t/SJ9lA0gpykVntIEqZOC2kUIK8uE=/1600x/article-new/2024/03/caviar-vision-pro2.jpg",
          publishedAt: "2024-03-15T14:33:16Z",
          content:
            "Caviar, a company known for making luxury variants of popular tech gadgets, intends to release a custom Apple Vision Pro plated with 18-karat gold next year that will inevitably set you back more th…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Joe Rossignol",
          title:
            "Apple's Butterfly Keyboard Repair Program for MacBooks is Nearly Over",
          description:
            "Apple's long-running butterfly keyboard service program for MacBooks is ending soon, with only a few models still eligible for a free repair.",
          url: "https://www.macrumors.com/2024/03/15/apple-butterfly-keyboard-program-nearly-over/",
          urlToImage:
            "https://images.macrumors.com/t/BACgiSD8cMcDNf_FrmX4SfWsz9E=/1600x/article-new/2024/03/MacBook-Keyboard-Close.jpg",
          publishedAt: "2024-03-15T19:36:09Z",
          content:
            "Apple's long-running butterfly keyboard service program for MacBooks is ending soon, with only a few models still eligible for a free repair. Below, we take a look back at Apple's butterfly keyboard…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "TipTop Shop App Offers Single-Transaction Buying, Selling and Device Trade-Ins",
          description:
            "TipTop, an app for trading in used devices and getting instant cash, today launched a new feature called Shop.",
          url: "https://www.macrumors.com/2024/03/15/tiptop-shop-trade-in-app/",
          urlToImage:
            "https://images.macrumors.com/t/1mEyzd5LYAiiLsocBtYC1zyoo3s=/1600x/article-new/2024/03/tiptop-shop.jpg",
          publishedAt: "2024-03-15T15:04:34Z",
          content:
            "TipTop, an app for trading in used devices and getting instant cash, today launched a new feature called Shop. With TipTop Shop, users are able to buy new, open box, and refurbished items, while als…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Tim Hardwick",
          title:
            "iPad Air Next on Apple's OLED Tablet Roadmap Following iPad Pro",
          description:
            "The iPad Air will be the next Apple tablet to adopt OLED display panel technology following its upcoming OLED iPad Pro models, according to an updated forecast from research firm Omdia.",
          url: "https://www.macrumors.com/2024/03/15/ipad-air-oled-adoption-timeline/",
          urlToImage:
            "https://images.macrumors.com/t/HzTXwS-UM0hjtxDIsG_18-RKo-g=/2363x/article-new/2021/06/OLED-iPad-Air.jpg",
          publishedAt: "2024-03-15T10:30:18Z",
          content:
            "The iPad Air will be the next Apple tablet to adopt OLED display panel technology following its upcoming OLED iPad Pro models, according to an updated forecast from research firm Omdia. In 2028, we e…",
        },
        {
          source: {
            id: null,
            name: "Yahoo Entertainment",
          },
          author: "Bloomberg",
          title:
            "Tesla Looks Like a Falling Knife, But Some Analysts Are Holding On",
          description:
            "Tesla Inc. shares are in free fall this year, but some investors are betting the electric carmaker is due for a rebound.",
          url: "https://finance.yahoo.com/news/tesla-looks-falling-knife-analysts-222516772.html",
          urlToImage:
            "https://s.yimg.com/uu/api/res/1.2/3v0HbzGZ.WpJg_8E.oyMUw--~B/aD0zNTk7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_technology_68/20a08e3d9d944d71b70386a51b5b79d4",
          publishedAt: "2024-03-16T19:25:16Z",
          content:
            "(Bloomberg) -- Tesla Inc. shares are in free fall this year, but some investors are betting the electric carmaker is due for a rebound.\r\nAnalysts have been slashing their price targets on Elon Musk… [+2859 chars]",
        },
        {
          source: {
            id: null,
            name: "MarketWatch",
          },
          author: "Claudia Assis",
          title:
            "Tesla stock falls again after UBS analysts say its days as the leader of the EV market are over",
          description:
            "Shares of Tesla Inc. fell Tuesday, and were on track to suffer their lowest close in nearly two years, after UBS analyst Patrick Hummel downgraded the electric-car maker to neutral from buy, saying its days as the undisputed leader in the electric-vehicle market…",
          url: "https://www.marketwatch.com/story/tesla-stock-falls-again-after-ubs-analysts-say-its-days-as-the-leader-of-the-ev-market-are-over-11648152676",
          urlToImage: "https://images.mktw.net/im-416762/social",
          publishedAt: "2024-03-16T19:15:00Z",
          content:
            "Shares of Tesla Inc. TSLA, -1.69% fell Tuesday, and were on track to suffer their lowest close in nearly two years, after UBS analyst Patrick Hummel downgraded the electric-car maker to neutral from … [+2439 chars]",
        },
        {
          source: {
            id: null,
            name: "MarketWatch",
          },
          author: "Claudia Assis",
          title:
            "Tesla stock falls again after UBS analysts say its days as the leader of the EV market are over",
          description:
            "Shares of Tesla Inc. fell Tuesday, and were on track to suffer their lowest close in nearly two years, after UBS analyst Patrick Hummel downgraded the electric-car maker to neutral from buy, saying its days as the undisputed leader in the electric-vehicle market…",
          url: "https://www.marketwatch.com/story/tesla-stock-falls-again-after-ubs-analysts-say-its-days-as-the-leader-of-the-ev-market-are-over-11648152676",
          urlToImage: "https://images.mktw.net/im-416762/social",
          publishedAt: "2024-03-16T19:15:00Z",
          content:
            "Shares of Tesla Inc. TSLA, -1.69% fell Tuesday, and were on track to suffer their lowest close in nearly two years, after UBS analyst Patrick Hummel downgraded the electric-car maker to neutral from … [+2439 chars]",
        },
        {
          source: {
            id: null,
            name: "MarketWatch",
          },
          author: "Claudia Assis",
          title:
            "Tesla stock falls again after UBS analysts say its days as the leader of the EV market are over",
          description:
            "Shares of Tesla Inc. fell Tuesday, and were on track to suffer their lowest close in nearly two years, after UBS analyst Patrick Hummel downgraded the electric-car maker to neutral from buy, saying its days as the undisputed leader in the electric-vehicle market…",
          url: "https://www.marketwatch.com/story/tesla-stock-falls-again-after-ubs-analysts-say-its-days-as-the-leader-of-the-ev-market-are-over-11648152676",
          urlToImage: "https://images.mktw.net/im-416762/social",
          publishedAt: "2024-03-16T19:15:00Z",
          content:
            "Shares of Tesla Inc. TSLA, -1.69% fell Tuesday, and were on track to suffer their lowest close in nearly two years, after UBS analyst Patrick Hummel downgraded the electric-car maker to neutral from … [+2439 chars]",
        },
      ],
    },
  ];
  res.json(home);
});
app.get("/general", (req, res) => {
  const general = [
    {
      status: "ok",
      totalResults: 28,
      articles: [
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "investorplace.com",
          title: "The 3 Most Undervalued S&P 500 Stocks to Buy in March 2024",
          description:
            "These stocks are down but far from out Despite the market being near all-time highs, there are plenty of stocks that are in the red for the year. Many familiar names are not shared at the current rally, and they have seen their share price slump in recent mon…",
          url: "https://biztoc.com/x/e659af546c7ae462",
          urlToImage: "https://c.biztoc.com/p/e659af546c7ae462/s.webp",
          publishedAt: "2024-03-16T19:18:14Z",
          content:
            "These stocks are down but far from outDespite the market being near all-time highs, there are plenty of stocks that are in the red for the year. Many familiar names are not shared at the current rall… [+299 chars]",
        },
        {
          source: {
            id: null,
            name: "WebProNews",
          },
          author: "Staff",
          title: "Norway’s Tesla Revolution: A Blueprint for World Dominance",
          description:
            "WebProNews\nNorway’s Tesla Revolution: A Blueprint for World Dominance\nIndeed, Tesla's ascendancy in Norway is palpable. Last year, over 23,000 Model Ys were sold, accounting for a staggering 20% of all vehicles sold in the country, cementing its position as t…",
          url: "https://www.webpronews.com/norways-tesla-revolution-a-blueprint-for-world-dominance/",
          urlToImage:
            "https://www.webpronews.com/wp-content/uploads/2024/03/Screenshot-2024-03-16-at-3.09.32-PM.jpg",
          publishedAt: "2024-03-16T19:11:03Z",
          content:
            "In Norway’s crisp, snow-laden landscapes, a silent revolution is unfolding, one that transcends the fjords and peaks that define this Scandinavian nation. Here, amidst the breathtaking beauty of natu… [+2633 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "fortune.com",
          title:
            "Hertz’s electric vehicle and CEO about-face is the latest twist after a COVID bankruptcy filing and a deep relationship with Carl Icahn",
          description:
            "It seemed like a good idea at the time. Now we know better. Hertz, reeling from a bankruptcy and the pandemic, announced plans to buy 100,000 Teslas in late 2021. The splashy move certainly helped Elon Musk’s electric-vehicle maker, which saw its market cap s…",
          url: "https://biztoc.com/x/cc776329b946de2d",
          urlToImage: "https://c.biztoc.com/p/cc776329b946de2d/s.webp",
          publishedAt: "2024-03-16T19:04:05Z",
          content:
            "It seemed like a good idea at the time. Now we know better.Hertz, reeling from a bankruptcy and the pandemic, announced plans to buy 100,000 Teslas in late 2021. The splashy move certainly helped Elo… [+281 chars]",
        },
        {
          source: {
            id: null,
            name: "OilPrice.com",
          },
          author: "OilPrice.com",
          title:
            "Armenia’s Controversial Dry Port Project Hinges on Foreign Investment",
          description:
            "Armenian officials are hoping to mitigate the chill in Yerevan’s relations with Russia by creating a dry port that plugs the country into emerging international trade corridors. The government plan seeks to transform Armenia into a “transit, transport and exp…",
          url: "https://oilprice.com/Energy/Energy-General/Armenias-Controversial-Dry-Port-Project-Hinges-on-Foreign-Investment.html",
          urlToImage:
            "https://d32r1sh890xpii.cloudfront.net/article/718x300/2024-03-15_fpv3i059gi.jpg",
          publishedAt: "2024-03-16T19:00:00Z",
          content:
            "Europes energy shortage has opened…\r\nTesla stock has plummeted in…\r\nOil prices remain rangebound ahead…\r\nBy Eurasianet - Mar 16, 2024, 2:00 PM CDTArmenian officials are hoping to mitigate the chill i… [+5392 chars]",
        },
        {
          source: {
            id: null,
            name: "Biztoc.com",
          },
          author: "Benzinga Insights",
          title: "Gerdau S.A. Acquires Indian Firm For $100 Million",
          description:
            "Brazilian steelmaker Gerdau S.A. (NYSE: GGB) is purchasing India’s leading producer of cold-drawn bright steel bars, Sterling & Wilson Precision Steel Pipes Pvt. Ltd, for $100 million, its parent company Sterling and Wilson Renewables Ltd (BOM:542760) said in a…",
          url: "https://biztoc.com/x/1be07ed141d90c88",
          urlToImage: "https://c.biztoc.com/p/1be07ed141d90c88/s.webp",
          publishedAt: "2024-03-16T18:52:14Z",
          content:
            "Brazilian steelmaker Gerdau S.A. (NYSE: GGB) is purchasing India’s leading producer of cold-drawn bright steel bars, Sterling & Wilson Precision Steel Pipes Pvt. Ltd, for $100 million, its parent co… [+1962 chars]",
        },
        {
          "source": {
              "id": null,
              "name": "Electrek"
          },
          "author": "Steven Delatorre",
          "title": "Daily EV Recap: March 19, 2024",
          "description": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is now available on Apple Podcasts, Spotify, TuneIn and...",
          "url": "http://electrek.co/2024/03/19/daily-ev-recap-march-19-2024/",
          "urlToImage": null,
          "publishedAt": "2024-03-19T23:32:58Z",
          "content": "Listen to a recap of the top stories of the day from Electrek. Quick Charge is now available on Apple Podcasts, Spotify, TuneIn and our RSS feed for Overcast and other podcast players.\r\nNew episodes … [+883 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "author": "nytimes.com",
          "title": "U.S. Accuses Two Men of Stealing Tesla Trade Secrets",
          "description": "A Canadian man who lives in China was arrested Tuesday and held in New York after he and a business partner were accused of trying to sell secret battery manufacturing technology belonging to Tesla. Federal prosecutors in Brooklyn asked a judge to hold Klaus …",
          "url": "https://biztoc.com/x/5fc419ee5a48b004",
          "urlToImage": "https://c.biztoc.com/p/5fc419ee5a48b004/s.webp",
          "publishedAt": "2024-03-19T23:24:06Z",
          "content": "A Canadian man who lives in China was arrested Tuesday and held in New York after he and a business partner were accused of trying to sell secret battery manufacturing technology belonging to Tesla.F… [+281 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Forbes"
          },
          "author": "Andrew Leahey, Contributor, \n Andrew Leahey, Contributor\n https://www.forbes.com/sites/andrewleahey/",
          "title": "35 Major Corporations Spent More On Top Executives Than Taxes",
          "description": "A recent report jointly prepared by Americans for Tax Fairness (ATF) and the Institute for Policy Studies (IPS), working from data gathered for a study by the Institut...",
          "url": "https://www.forbes.com/sites/andrewleahey/2024/03/19/35-major-corporations-spent-more-on-top-executives-than-taxes/",
          "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65fa1ac922a29daed6887f68/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          "publishedAt": "2024-03-19T23:09:10Z",
          "content": "TOPSHOT - CEO of Tesla Motors Elon Musk speaks at the Tesla Giga Texas manufacturing \"Cyber Rodeo\" ... [+] grand opening party on April 7, 2022 in Austin, Texas. - Tesla welcomed throngs of electric … [+4283 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Biztoc.com"
          },
          "author": "pagesix.com",
          "title": "Elon Musk defends routine ketamine usage, says it’s good for business",
          "description": "Click to email a link to a friend (Opens in new window) Click to share on Twitter (Opens in new window) Click to share on Facebook (Opens in new window) Elon Musk does not think his investors should be concerned with his prescription drug use — particularly k…",
          "url": "https://biztoc.com/x/157a3c66db78a297",
          "urlToImage": "https://c.biztoc.com/p/157a3c66db78a297/og.webp",
          "publishedAt": "2024-03-19T23:02:12Z",
          "content": "Click to email a link to a friend (Opens in new window)Click to share on Twitter (Opens in new window)Click to share on Facebook (Opens in new window)Elon Musk does not think his investors should be … [+292 chars]"
      },
      {
          "source": {
              "id": "next-big-future",
              "name": "Next Big Future"
          },
          "author": "Brian Wang",
          "title": "Tesla FSD 12.3 Wide Release by end of March 2024",
          "description": "Tesla FSD 12.3 is getting very strong reviews as much better than version 11 and being a huge upgrade over version 12.2. It seems to be safer than FSD version 11 with many major improvements like smoother humanlike driving and the ability to perform U-turns. …",
          "url": "https://www.nextbigfuture.com/2024/03/tesla-fsd-12-3-wide-release-by-end-of-march-2024.html",
          "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2024/03/Screen-Shot-2024-03-19-at-3.00.24-PM-1024x304.jpg",
          "publishedAt": "2024-03-19T22:15:42Z",
          "content": "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Investing.com"
          },
          "author": "Reuters",
          "title": "China-based Canadian stole Tesla secrets, say US prosecutors",
          "description": "China-based Canadian stole Tesla secrets, say US prosecutors",
          "url": "https://www.investing.com/news/world-news/owners-of-chinabased-company-charged-in-us-with-conspiracy-to-steal-secrets-3344918",
          "urlToImage": "https://i-invdn-com.investing.com/news/news_headline_open_108x81._800x533_L_1419519630.jpg",
          "publishedAt": "2024-03-19T22:15:38Z",
          "content": "NEW YORK (Reuters) -A Canadian resident of China has been arrested in the United States for allegedly stealing electric car manufacturer Tesla (NASDAQ:TSLA)'s trade secrets and conspiring to sell the… [+1098 chars]"
      },
      ],
    },
  ];
  res.json(general);
});
app.get("/entertainment", (req, res) => {
  const entertainment = [
    {
      status: "ok",
      totalResults: 70,
      articles: [
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "TOI Entertainment Desk",
          title:
            "Shaitaan box office collection day 9: Ajay Devgn, Jyothika, R Madhavan's film inches closer to Rs 100 cro - TOI Etimes",
          description:
            "Director Vikas Bahl's thriller Shaitaan, starring Ajay Devgn, Jyothika, and R Madhavan, showcased an impressive hold on its second Saturday at the box",
          url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/shaitaan-box-office-collection-day-9-ajay-devgn-jyothika-r-madhavans-film-inches-closer-to-rs-100-crore-mark-collects-a-solid-rs-8-crore/articleshow/108551939.cms",
          urlToImage:
            "https://static.toiimg.com/thumb/msid-108551927,width-1070,height-580,imgsize-75428,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          publishedAt: "2024-03-16T17:04:00Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "M9.news",
          },
          author: "M9",
          title: "Sexual Harassment: Popular OTT Actor Jailed - M9",
          description: null,
          url: "https://www.m9.news/movienews/sexual-harassment-popular-ott-actor-o-yeong-su-jailed/",
          urlToImage: null,
          publishedAt: "2024-03-16T16:05:14Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "Hindustan Times",
          },
          author: "Ashima Grover",
          title:
            "Kanye West still obsessed with Kim Kardashian? Bianca Censori's X-rated fashion ‘game plan’ outed - Hindustan Times",
          description:
            "Experts claim Kanye West's alleged ‘controlling ways’ over wife Bianca Censori's risque wardrobe choices are fairly calculated for a reason.",
          url: "https://www.hindustantimes.com/entertainment/music/kanye-west-still-obsessed-with-kim-kardashian-bianca-censoris-x-rated-fashion-game-plan-outed-101710593812390.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2024/03/16/1600x900/kanye-west-bianca-censori-game-plan-kim_1710604003045_1710604015491.jpg",
          publishedAt: "2024-03-16T15:47:53Z",
          content:
            "Kanye West's wife and Australian Yeezy architect Bianca Censori shot to spicy fame in recent memory for particular reasons. Her unswerving X-rated fashion choices nearly landed her with jail time in … [+2955 chars]",
        },
        {
          source: {
            id: null,
            name: "123telugu.com",
          },
          author: null,
          title:
            "Photo Moment: Nikhil and Pallavi Varma at their baby’s cradle function - 123telugu",
          description:
            "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
          url: "https://www.123telugu.com/mnews/photo-moment-nikhil-and-pallavi-varma-at-their-babys-cradle-function.html",
          urlToImage:
            "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          publishedAt: "2024-03-16T15:30:00Z",
          content:
            "Hero Nikhil recently became a father, and he is highly elated with the addition of a new member to the family. On 21st February, Nikhil’s wife, Pallavi Varma, gave birth to a baby boy. Nikhil lost hi… [+643 chars]",
        },
        {
          source: {
            id: null,
            name: "123telugu.com",
          },
          author: null,
          title:
            "AP elections effect – Makers of Kalki 2898 AD to discuss release startegy - 123telugu",
          description:
            "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
          url: "https://www.123telugu.com/mnews/ap-elections-effect-makers-of-kalki-2898-ad-to-discuss-release-startegy.html",
          urlToImage:
            "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          publishedAt: "2024-03-16T14:57:00Z",
          content:
            "The political atmosphere in AP is getting heated up as the election date has been announced. The much-awaited elections will be held on May 13, 2024, and preparations are on for the same.\r\nWell, Prab… [+847 chars]",
        },
        {
          source: {
            id: null,
            name: "News18",
          },
          author: "Chirag Sehgal",
          title:
            "Samantha Ruth Prabhu Was 'Uncomfortable' During Oo Antava Shoot: 'I Was Shaking From Fear...' - News18",
          description:
            "Samantha Ruth Prabhu admitted that she did not feel very confident but decided to do Oo Antava because she wanted to explore something new.",
          url: "https://www.news18.com/movies/samantha-ruth-prabhu-uncomfortable-allu-arjun-pushpa-oo-antava-shoot-i-was-shaking-from-fear-8817763.html",
          urlToImage:
            "https://images.news18.com/ibnlive/uploads/2024/03/samantha-ruth-prabhu-1-2024-03-a326012ff58f0b2295c60ab7392a36bc-16x9.jpg?impolicy=website&width=1200&height=675",
          publishedAt: "2024-03-16T14:36:43Z",
          content:
            "Samantha Ruth Prabhu set the dance floor on fire when she featured in Allu Arjuns Pushpa: The Rise with the song Oo Antava. In a recent interview, Samantha opened up about shooting the track when she… [+1555 chars]",
        },
        {
          source: {
            id: null,
            name: "123telugu.com",
          },
          author: null,
          title:
            "HanuMan on OTT: Prasanth Varma’s superhero film streaming now in Hindi - 123telugu",
          description:
            "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
          url: "https://www.123telugu.com/mnews/hanuman-on-ott-prasanth-varmas-superhero-film-streaming-now-in-hindi.html",
          urlToImage:
            "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          publishedAt: "2024-03-16T14:34:00Z",
          content:
            "Teja Sajja played the protagonist in the superhero film HanuMan, which is one of the biggest blockbusters in Telugu cinema with a gross of over 300 crores. Directed by Prasanth Varma, the film blew a… [+730 chars]",
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Ankita Shukla",
          title:
            "Radhika Merchant to Priyanka Chopra Jonas: Who wore what to Isha Ambani and Bulgari's Roman Holi party - The Times of India",
          description:
            "The party held at Antilia was one star-studded affair. Let's have a look at who wore what to the posh party.",
          url: "https://timesofindia.indiatimes.com/life-style/fashion/web-stories/from-radhika-merchant-to-priyanka-chopra-jonas-who-wore-what-to-isha-ambani-and-bulgaris-roman-holi-party/photostory/108546646.cms",
          urlToImage:
            "https://static.toiimg.com/thumb/msid-108546738,imgsize-52612,width-900,height-1200,resizemode-6/108546738.jpg",
          publishedAt: "2024-03-16T14:30:00Z",
          content:
            "The party thrown at Ambani home 'Antilia' by Isha Ambani for Bulgari, was a star-studded affair. Let's have a look at who wore what to the stylish do.",
        },
      ],
    },
  ];
  res.json(entertainment);
});
app.get("/health", (req, res) => {
  const health = [
    {
      status: "ok",
      totalResults: 45,
      articles: [
        {
          source: {
            id: "usa-today",
            name: "USA Today",
          },
          author: "USA TODAY",
          title:
            "Target to roll out new self-checkout policy: Must be 10 items or less - USA TODAY",
          description: null,
          url: "https://www.usatoday.com/story/money/shopping/2024/03/16/target-self-checkout-policy/72998660007/",
          urlToImage: null,
          publishedAt: "2024-03-16T18:39:13Z",
          content: null,
        },
        {
          source: {
            id: "the-washington-post",
            name: "The Washington Post",
          },
          author: "Ellen Francis, Amber Ferguson",
          title:
            "Boeing 737-800 missing panel after United Airlines flight lands in Oregon - The Washington Post",
          description:
            "A United Airlines Boeing 737-800 that landed Friday in Oregon’s Medfort Airport from San Francisco was missing an external panel, officials said.",
          url: "https://www.washingtonpost.com/transportation/2024/03/16/boeing-plane-panel-missing-united-airlines-oregon/",
          urlToImage:
            "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J3XUNPFZABFKAQUENBB5EIVB2I.jpg&w=1440",
          publishedAt: "2024-03-16T16:13:10Z",
          content:
            "Investigators are looking into why a Boeing plane was missing an external panel after a San Francisco to Oregon flight, officials said. The company was already facing heightened scrutiny from travele… [+2726 chars]",
        },
        {
          source: {
            id: null,
            name: "Fox Business",
          },
          author: "Michael Dorgan",
          title:
            "Lottery winner claims colossal $1.765B Powerball ticket from October - Fox Business",
          description:
            "A person representing a group of lottery players has come forward to claim October's massive $1.765 billion Powerball jackpot win",
          url: "https://www.foxbusiness.com/personal-finance/lottery-winner-claims-colossal-1-765b-powerball-ticket-october",
          urlToImage:
            "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/03/0/0/Powerball.jpg?ve=1&tl=1",
          publishedAt: "2024-03-16T15:01:00Z",
          content:
            "The Golden State with the golden ticket.\r\nThe California Lottery has revealed that a person has come forward to claim the massive $1.765 billion Powerball jackpot win from October – the second-larges… [+3180 chars]",
        },
        {
          source: {
            id: null,
            name: "CNBC",
          },
          author: "Meredith Mutter",
          title:
            "Bitcoin may start to lose its reputation as a volatile asset. Here's why - CNBC",
          description:
            '"What\'s driving the bitcoin market right now is a simple demand-supply imbalance," Bitwise CIO Matt Hougan told CNBC\'s "ETF Edge" on this week.',
          url: "https://www.cnbc.com/2024/03/16/bitcoin-may-lose-its-reputation-as-a-volatile-asset-heres-why.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/106853986-16158213942021-03-15t050058z_1116457850_rc2hbm9wwql1_rtrmadp_0_usa-crypto-currencies-atms.jpeg?v=1644343961&w=1920&h=1080",
          publishedAt: "2024-03-16T15:00:01Z",
          content:
            "Bitcoin may start to lose its reputation as a volatile asset.\r\nAccording to Bitwise Asset Management's Matt Hougan, the cryptocurrency's wild price swings have come down substantially over the past d… [+1609 chars]",
        },
        {
          source: {
            id: "associated-press",
            name: "Associated Press",
          },
          author: "STAN CHOE, CHRISTOPHER RUGABER",
          title:
            "Mnuchin's interest in TikTok and distressed NY bank echoes his pre-Trump investment playbook - The Associated Press",
          description:
            "Steven Mnuchin is a former U.S. Treasury secretary who said this week that he is interested in buying TikTok, just days after his investment firm led a $1 billion deal to inject life into a beaten-down bank. It all sounds like a wacky Hollywood script, but it…",
          url: "https://apnews.com/article/mnuchin-tiktok-nycb-indymac-lego-movie-5527566c81a6f3d9b288bba232f55684",
          urlToImage:
            "https://dims.apnews.com/dims4/default/08db369/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1d%2Ff0%2Fae8b7e7e10cea8f8312c2078c066%2F7c5b00c65afa4153a84bace70db474b1",
          publishedAt: "2024-03-16T14:53:00Z",
          content:
            "NEW YORK (AP) It seems like a bizarre mishmash: A former Trump cabinet official is saying he wants to buy TikTok just days after leading a group that pumped $1 billion into a beaten-down bank. But it… [+5810 chars]",
        },
        {
          source: {
            id: null,
            name: "Investor's Business Daily",
          },
          author: "Investor's Business Daily",
          title:
            "Tesla Stock Is Plunging, But It's Not Cheaper By This Earnings Metric - Investor's Business Daily",
          description:
            "Shares have largely tracked tumbling Tesla earnings estimates.",
          url: "https://www.investors.com/news/tesla-stock-is-plunging-not-cheaper-by-earnings-metric/",
          urlToImage:
            "https://www.investors.com/wp-content/uploads/2023/07/Stock-Tesla-RedSilo-adobe.jpg",
          publishedAt: "2024-03-16T13:00:00Z",
          content:
            "Tesla (TSLA) has had a terrible start to 2024, losing more than a third of its value. But Tesla stock hasn't become significantly cheaper, by a key metric.\r\nXOften when a stock sells off hard, invest… [+4683 chars]",
        },
        {
          source: {
            id: null,
            name: "Yahoo Entertainment",
          },
          author: null,
          title:
            "Inside Boeing's very bad week: Whistleblowers, nosedives and a DOJ investigation. - Yahoo! Voices",
          description: null,
          url: "https://www.yahoo.com/news/inside-boeings-very-bad-week-whistleblowers-nosedives-and-a-doj-investigation-180402912.html",
          urlToImage: null,
          publishedAt: "2024-03-16T12:32:25Z",
          content:
            "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]",
        },
        {
          source: {
            id: null,
            name: "CNBC",
          },
          author: "Kate Dore, CFP®",
          title:
            "What investors need to know about crypto taxes amid the latest bitcoin rally - CNBC",
          description:
            "The price of bitcoin hit records this week. Here are key things to know about crypto taxes for buyers and sellers.",
          url: "https://www.cnbc.com/2024/03/16/heres-how-to-calculate-crypto-taxes-amid-the-latest-bitcoin-rally.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107357620-1705002801419-gettyimages-1925090359-_r7a4220_k7r9uolj.jpeg?v=1707909443&w=1920&h=1080",
          publishedAt: "2024-03-16T12:30:01Z",
          content:
            "Whether you're a longtime crypto investor or recently purchased digital assets, here are some key things to know from crypto tax experts. \r\nHow to answer Form 1040 'digital assets' question\r\nCryptocu… [+3347 chars]",
        },
        {
          source: {
            id: "bloomberg",
            name: "Bloomberg",
          },
          author: "Elizabeth Elkin",
          title: "Natural Gas Bear Market Is Boon for US Economy - Bloomberg",
          description:
            "The dramatic collapse of US natural gas prices this year is quietly helping to boost the nation’s economy, slashing some energy costs even as the prices of other necessities continue to rise.",
          url: "https://www.bloomberg.com/news/articles/2024-03-16/natural-gas-bear-market-is-boon-for-us-economy",
          urlToImage:
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivWF3jvroIXo/v1/1200x798.jpg",
          publishedAt: "2024-03-16T12:30:00Z",
          content:
            "The dramatic collapse of US natural gas prices this year is quietly helping to boost the nations economy, slashing some energy costs even as the prices of other necessities continue to rise.\r\nWhile n… [+376 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title:
            "Norfolk County Council beats Apple in £385m iPhone row - BBC.com",
          description:
            "The local authority - and others - had accused the tech giant of misleading shareholders.",
          url: "https://www.bbc.com/news/technology-68580235",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/0549/production/_132935310_116a49f47097727d49c5be85d99b4328e906956d351_8_1462_8221462x822.jpg",
          publishedAt: "2024-03-16T12:26:40Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "TheStreet",
          },
          author: "Rob Lenihan",
          title:
            "Analysts revamp Adobe stock price target after earnings - TheStreet",
          description: "Here's what could happen next to Adobe shares.",
          url: "https://www.thestreet.com/investing/analysts-revamp-adobe-stock-price-target-after-earnings",
          urlToImage:
            "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjA1MDQzMjkyNjgzOTA0NjQ0/india-b20-economy.jpg",
          publishedAt: "2024-03-16T11:28:00Z",
          content:
            "In 1982, most people's knowledge of artificial intelligence came from science fiction movies.\r\nThat was the year that John Warnock and Charles Geschke founded the software company Adobe  (ADBE)  in W… [+4857 chars]",
        },
        {
          source: {
            id: "the-washington-post",
            name: "The Washington Post",
          },
          author: "Rachel Lerman",
          title:
            "11 charts that show how the economy is stabilizing after Covid hit - The Washington Post",
          description:
            "A new normal has settled into the U.S. economy — one that nobody could have predicted four years ago. Here’s what it looks like now, in 11 charts.",
          url: "https://www.washingtonpost.com/business/2024/03/16/economy-recovery-covid-unemployment-wages-debt-groceries/",
          urlToImage:
            "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/DCCMQKUAT6XLNWM3BCQERRG7IY_size-normalized.jpg&w=1440",
          publishedAt: "2024-03-16T11:22:36Z",
          content:
            "After a pandemic-fueled roller coaster, the U.S. economy is finally steadying.\r\nFour years ago this week, the first wave of what would grow to be 20 million job losses set in, although most Americans… [+8803 chars]",
        },
        {
          source: {
            id: null,
            name: "New York Post",
          },
          author: "Fox Business",
          title:
            "Mega Millions jackpot reaches $875M after nobody wins grand prize - New York Post ",
          description:
            "Friday’s winning numbers were 13, 25, 50, 51 and 66 with a Mega ball of 6 and a 5X Megaplier.",
          url: "https://nypost.com/2024/03/16/us-news/mega-millions-jackpot-reaches-875m-after-nobody-wins-grand-prize/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2024/03/newspress-collage-k1ngp6hif-1710581305934.jpg?quality=75&strip=all&1710566950&w=1024",
          publishedAt: "2024-03-16T10:50:00Z",
          content:
            "The Mega Millions jackpot now sits at an estimated $875 million after no tickets matched the winning numbers during Friday’s drawing.\r\nThe winning numbers drawn Friday night were 13, 25, 50, 51 and 6… [+1342 chars]",
        },
        {
          source: {
            id: "financial-times",
            name: "Financial Times",
          },
          author: "Alexandra White",
          title:
            "'Stretched' US consumers start to pull back on spending - Financial Times",
          description:
            "Retail sales reach a plateau while company executives see disposable income squeezed",
          url: "https://www.ft.com/content/121ee349-e20b-4f15-a41a-a1a4d7564bb0",
          urlToImage:
            "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F82741574-2674-4b4e-8616-f6af8e8f3b12.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
          publishedAt: "2024-03-16T10:00:46Z",
          content:
            "Evidence is mounting that many Americans have reached their limit for tolerating higher prices, raising questions about how much consumer expenditures will continue to power US economic growth this y… [+5726 chars]",
        },
        {
          source: {
            id: "the-wall-street-journal",
            name: "The Wall Street Journal",
          },
          author: "The Wall Street Journal",
          title:
            "U.S. Is Investigating Meta for Role in Drug Sales - WSJ - The Wall Street Journal",
          description: null,
          url: "https://www.wsj.com/tech/u-s-is-investigating-meta-for-role-in-drug-sales-574944cb",
          urlToImage: null,
          publishedAt: "2024-03-16T09:31:37Z",
          content: null,
        },
        {
          source: {
            id: "financial-times",
            name: "Financial Times",
          },
          author: "Tabby Kinder",
          title:
            "Reddit IPO reveals the reality check for Silicon Valley - Financial Times",
          description:
            "Companies and their backers are starting to show more signs of acceptance of valuation cuts in ‘down round’ financing",
          url: "https://www.ft.com/content/01d2640e-1f80-4447-90cb-d9aa91c6a01f",
          urlToImage:
            "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F313d101c-abac-4a6b-b3ec-54b80ef5e7d8.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
          publishedAt: "2024-03-16T05:00:46Z",
          content:
            "When Reddit lists on the New York Stock Exchange next week, the social media platform is expected to carry a valuation of up to $6.4bn well down on the $10bn it was worth in 2021. It will be the firs… [+4365 chars]",
        },
        {
          source: {
            id: "usa-today",
            name: "USA Today",
          },
          author: "Anthony Robledo",
          title:
            "Cable TV companies required to give direct pricing totals, FCC rules - USA TODAY",
          description:
            "Cable and satellite-TV providers will need to show the total costs for video subscriptions as part of an effort to improve pricing transparency.",
          url: "https://www.usatoday.com/story/entertainment/tv/2024/03/16/cable-tv-companies-direct-pricing-totals-requirement/72995486007/",
          urlToImage:
            "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/16/USAT/72995509007-getty-images-1194888655.jpg?crop=2120,1193,x0,y110&width=2120&height=1193&format=pjpg&auto=webp",
          publishedAt: "2024-03-16T04:49:33Z",
          content:
            "Cable and satellite-TV providers will need to show the total costs for video subscriptions as part of a Federal Communications Commission effort to improve pricing transparency.\r\nIn a news release Th… [+1725 chars]",
        },
      ],
    },
  ];
  res.json(health);
});
app.get("/technology", (req, res) => {
  const technology = [
    {
      status: "ok",
      totalResults: 10,
      articles: [
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Ingrid Lunden",
          title: "LinkedIn wants to add gaming to its platform | TechCrunch",
          description:
            "LinkedIn, the Microsoft-owned social platform, has made a name for itself primarily as a platform for people looking to network and pick up knowledge for",
          url: "https://techcrunch.com/2024/03/16/linkedin-wants-to-add-gaming-to-its-platform/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2019/01/linkedin-china-e1547032000499.jpg?resize=1200,636",
          publishedAt: "2024-03-16T17:12:13Z",
          content:
            "LinkedIn, the Microsoft-owned social platform, has made a name for itself primarily as a platform for people looking to network and pick up knowledge for professional purposes, and for recruitment — … [+3402 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Paul Sawers",
          title:
            "AI is keeping GitHub chief legal officer Shelley McKinley busy | TechCrunch",
          description:
            "GitHub's chief legal officer, Shelley McKinley, has plenty on her plate, what with legal wrangles around its Copilot pair-progammer, as well as the",
          url: "https://techcrunch.com/2024/03/16/ai-is-keeping-github-chief-legal-officer-shelley-mckinley-busy/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2024/03/2023-11-09_GitHub_Universe_0478_6c2d7f-e1710576548561.jpg?resize=1200,674",
          publishedAt: "2024-03-16T08:24:28Z",
          content:
            "GitHub’s chief legal officer, Shelley McKinley, has plenty on her plate, what with legal wrangles around its Copilot pair-progammer, as well as the Artificial Intelligence (AI) Act, which was voted t… [+13710 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Amanda Silberling",
          title:
            "Gumroad no longer allows most NSFW art, leaving its adult creators panicked | TechCrunch",
          description:
            "Gumroad, an e-commerce company for creators, updated its rules to more strictly limit NSFW content, citing restrictions from payment processors like",
          url: "https://techcrunch.com/2024/03/15/gumroad-no-longer-allows-most-nsfw-art-leaving-its-adult-creators-panicked/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2024/03/gumroad-nsfw-banned.jpg?resize=1200,675",
          publishedAt: "2024-03-15T22:36:10Z",
          content:
            "Gumroad, an e-commerce company for creators, updated its rules to more strictly limit NSFW content, citing restrictions from payment processors like Stripe and PayPal.\r\nFor creators who sell adult ar… [+3844 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Jacquelyn Melinek",
          title: "Starbucks ditches its Odyssey NFT program | TechCrunch",
          description:
            "Starbucks launched Starbucks Odyssey in 2022 as its initial foray into the web3 world.",
          url: "https://techcrunch.com/2024/03/15/starbucks-odysseys-nfts-brand-loyalty/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1420597584.jpg?resize=1200,800",
          publishedAt: "2024-03-15T21:42:21Z",
          content:
            "Update: Starbucks announced Friday that it’s discontinuing its NFT program, to “prepare for what comes next as we continue to evolve the program,” according to an FAQ page.   \r\nWe spoke with Steve Ka… [+3663 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Kyle Wiggers and Devin Coldewey",
          title:
            "This Week in AI: Midjourney bets it can beat the copyright police | TechCrunch",
          description:
            "In this edition of This Week in AI, TC's AI-focused column, we look at image generator Midjourney doubling down on the fair use argument.",
          url: "https://techcrunch.com/2024/03/16/this-week-in-ai-midjourney-bets-it-can-beat-the-copyright-police/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2023/08/haje1_a_colorful_illustration_of_Steve_Blank_in_16x9_aspect_rat_f5646179-f466-4f19-b2c0-54bb4d506aff.jpeg?resize=1200,695",
          publishedAt: "2024-03-15T21:36:20Z",
          content:
            "Keeping up with an industry as fast-moving as AI is a tall order. So until an AI can do it for you, here's a handy roundup of recent stories in the world of machine learning, along with notable resear… [+7906 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Manish Singh",
          title:
            "India drops plan to require approval for AI model launches | TechCrunch",
          description:
            "India is walking back on a recent AI advisory after receiving criticism from many local and global entrepreneurs and investors. The Ministry of India is walking back on a recent AI advisory after receiving criticism from entrepreneurs and investors.",
          url: "https://techcrunch.com/2024/03/15/india-drops-plan-to-require-approval-for-ai-model-launches/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-691021212.jpg?resize=1200,800",
          publishedAt: "2024-03-15T19:31:05Z",
          content:
            "India is walking back on a recent AI advisory after receiving criticism from many local and global entrepreneurs and investors.\r\nThe Ministry of Electronics and IT shared an updated AI advisory with … [+1762 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Aria Alamalhodaei",
          title:
            "Leaked SpaceX documents show company forbids employee stock sales if it deems they've misbehaved | TechCrunch",
          description:
            "SpaceX requires employees to agree to some unusual terms related to their stock awards, which have a chilling effect on staff, according to sources and SpaceX requires employees to agree to some unusual terms related to their stock awards, which have a chilli…",
          url: "https://techcrunch.com/2024/03/15/spacex-employee-stock-sales-forbidden/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2024/03/musk-spacex-employee-stock.jpg?resize=1200,675",
          publishedAt: "2024-03-15T19:19:14Z",
          content:
            "SpaceX requires employees to agree to some unusual terms related to their stock awards, which have a chilling effect on staff, according to sources and internal documents viewed by TechCrunch. \r\nThat… [+6477 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Sean O'Kane",
          title:
            "Lordstown Motors comes out of bankruptcy with a new name to fight Foxconn | TechCrunch",
          description:
            "The remaining shell of the EV startup will look to merge with another business while it fights Foxconn in court.",
          url: "https://techcrunch.com/2024/03/15/lordstown-motors-nu-ride-chapter-11-foxconn/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2022/11/Lordstown_Endruance_Photo008.jpg?resize=1200,800",
          publishedAt: "2024-03-15T17:59:31Z",
          content:
            "Lordstown Motors has emerged from bankruptcy with a new name and a nearly-singular focus: continuing its lawsuit against iPhone-maker Foxconn for allegedly “destroying the business of an American sta… [+2622 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Ron Miller",
          title:
            "Aaron Levie leads Box into its third era focused on workflow automation and AI | TechCrunch",
          description:
            "The content management industry is shifting from pure management to AI and workflow automation to put the content to work.",
          url: "https://techcrunch.com/2024/03/16/aaron-levie-box-workflow-automation-ai/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2021/10/Aaron-Levie.jpeg?resize=1200,801",
          publishedAt: "2024-03-15T17:29:18Z",
          content:
            "Box began life almost 20 years ago in a dorm room at USC when Aaron Levie conceived of an online file storage and sharing system. A few years later, Levies original idea was becoming commoditized, an… [+6534 chars]",
        },
        {
          source: {
            id: "techcrunch",
            name: "TechCrunch",
          },
          author: "Haje Jan Kamps",
          title: "Pornhub says, ‘Bad Texas! No smut for you!’ | TechCrunch",
          description:
            "Welcome to Startups Weekly — your weekly recap of everything you can’t miss from the world of startups. Sign up here to get it in your inbox every Friday.",
          url: "https://techcrunch.com/2024/03/15/pornhub-says-bad-texas-no-smut-for-you/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2023/02/pornhub-banner.jpg?resize=1200,837",
          publishedAt: "2024-03-15T02:25:50Z",
          content:
            "Welcome to Startups Weekly your weekly recap of everything you cant miss from the world of startups. Sign up here to get it in your inbox every Friday.\r\nPornhub has been playing a game of chicken wit… [+7098 chars]",
        },
      ],
    },
  ];
  res.json(technology);
});
app.get("/apple", (req, res) => {
  const apple = [
    {
      status: "ok",
      totalResults: 1869,
      articles: [
        {
          source: {
            id: null,
            name: "Android Central",
          },
          author: "Jay Bonggolto",
          title:
            "Apple's latest AI acquisition might give Google Gemini some serious competition",
          description:
            "Apple's presumed acquisition of Canada's DarwinAI might mean it's gearing up to amp up AI directly in its future products.",
          url: "https://www.androidcentral.com/apps-software/gemini-nano-might-soon-have-a-competitor-from-apple",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/kaiZtJYJMfW7BhxmhtMiK6-1200-80.jpg",
          publishedAt: "2024-03-15T11:04:55Z",
          content:
            "Apple has apparently acquired Ontario-based startup DarwinAI, indicating its entry into the generative AI race. DarwinAI specializes in AI for visual inspection of manufacturing components and is kno…",
        },
        {
          source: {
            id: null,
            name: "Android Central",
          },
          author: "Steven Shaw",
          title:
            "Android 15 could allow devices to be tracked even when switched off",
          description:
            "Recent Pixel phones may be able to send Bluetooth beacons to nearby compatible devices.",
          url: "https://www.androidcentral.com/apps-software/android-15-could-allow-devices-to-be-tracked-even-when-switched-off",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/JwFDzY3SMrwdQVC3pzbJLW-1200-80.jpg",
          publishedAt: "2024-03-15T15:57:20Z",
          content:
            "Android 15 is expected to introduce a Powered Off Finder API. This API will enable compatible devices to be tracked even when switched off. The feature is expected to be available on recent Pixel p…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Tim Hardwick",
          title:
            "Caviar's 18-Karat Gold Custom Apple Vision Pro Won't Start at $3,499",
          description:
            "Caviar, a company known for making luxury variants of popular tech gadgets, intends to release a custom Apple Vision Pro plated with 18-karat gold next year that will inevitably set you back more than Apple's $3,499 starting price.",
          url: "https://www.macrumors.com/2024/03/15/caviar-apple-vision-pro-custom-gold/",
          urlToImage:
            "https://images.macrumors.com/t/SJ9lA0gpykVntIEqZOC2kUIK8uE=/1600x/article-new/2024/03/caviar-vision-pro2.jpg",
          publishedAt: "2024-03-15T14:33:16Z",
          content:
            "Caviar, a company known for making luxury variants of popular tech gadgets, intends to release a custom Apple Vision Pro plated with 18-karat gold next year that will inevitably set you back more th…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Joe Rossignol",
          title:
            "Apple's Butterfly Keyboard Repair Program for MacBooks is Nearly Over",
          description:
            "Apple's long-running butterfly keyboard service program for MacBooks is ending soon, with only a few models still eligible for a free repair.",
          url: "https://www.macrumors.com/2024/03/15/apple-butterfly-keyboard-program-nearly-over/",
          urlToImage:
            "https://images.macrumors.com/t/BACgiSD8cMcDNf_FrmX4SfWsz9E=/1600x/article-new/2024/03/MacBook-Keyboard-Close.jpg",
          publishedAt: "2024-03-15T19:36:09Z",
          content:
            "Apple's long-running butterfly keyboard service program for MacBooks is ending soon, with only a few models still eligible for a free repair. Below, we take a look back at Apple's butterfly keyboard…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "TipTop Shop App Offers Single-Transaction Buying, Selling and Device Trade-Ins",
          description:
            "TipTop, an app for trading in used devices and getting instant cash, today launched a new feature called Shop.",
          url: "https://www.macrumors.com/2024/03/15/tiptop-shop-trade-in-app/",
          urlToImage:
            "https://images.macrumors.com/t/1mEyzd5LYAiiLsocBtYC1zyoo3s=/1600x/article-new/2024/03/tiptop-shop.jpg",
          publishedAt: "2024-03-15T15:04:34Z",
          content:
            "TipTop, an app for trading in used devices and getting instant cash, today launched a new feature called Shop. With TipTop Shop, users are able to buy new, open box, and refurbished items, while als…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Tim Hardwick",
          title:
            "iPad Air Next on Apple's OLED Tablet Roadmap Following iPad Pro",
          description:
            "The iPad Air will be the next Apple tablet to adopt OLED display panel technology following its upcoming OLED iPad Pro models, according to an updated forecast from research firm Omdia.",
          url: "https://www.macrumors.com/2024/03/15/ipad-air-oled-adoption-timeline/",
          urlToImage:
            "https://images.macrumors.com/t/HzTXwS-UM0hjtxDIsG_18-RKo-g=/2363x/article-new/2021/06/OLED-iPad-Air.jpg",
          publishedAt: "2024-03-15T10:30:18Z",
          content:
            "The iPad Air will be the next Apple tablet to adopt OLED display panel technology following its upcoming OLED iPad Pro models, according to an updated forecast from research firm Omdia. In 2028, we e…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Hartley Charlton",
          title:
            "The MacRumors Show: Will the New iPad Air Be a Big Enough Upgrade?",
          description:
            "On this week's episode of The MacRumors Show, we discuss Apple's upcoming iPad Air models, which are expected to be announced in just a matter of weeks.",
          url: "https://www.macrumors.com/2024/03/15/the-macrumors-show-new-ipad-air-upgrade/",
          urlToImage:
            "https://images.macrumors.com/t/qH_hRLerQCk_cMRgXLL8uPxwPVg=/1600x/https://img.youtube.com/vi/oa3GY7loQgc/maxresdefault.jpg",
          publishedAt: "2024-03-15T16:08:58Z",
          content:
            "On this week's episode of The MacRumors Show, we discuss Apple's upcoming iPad Air models, which are expected to be announced in just a matter of weeks. The sixth-generation ‌iPad Air‌ is rumored to…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title: "You Can Now Browse Vision Pro Apps on the Web",
          description:
            "Apple today made the visionOS App Store available on the web, giving Vision Pro users and prospective owners a way to see what apps are available for the device.",
          url: "https://www.macrumors.com/2024/03/15/visionos-app-store-web/",
          urlToImage:
            "https://images.macrumors.com/t/EyPN1iXGjP-2kM0hTDXvIDx1VE0=/2500x/article-new/2024/02/Vision-Pro-Apps-Feature.jpg",
          publishedAt: "2024-03-15T23:24:29Z",
          content:
            "Apple today made the visionOS App Store available on the web, giving Vision Pro users and prospective owners a way to see what apps are available for the device. As noted by 9to5Mac, Vision Pro apps…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Joe Rossignol",
          title:
            "Walmart Begins Selling MacBook Air With M1 Chip for $699 in U.S.",
          description:
            "Walmart today announced that it has started selling the MacBook Air with the M1 chip in the U.S., with pricing set at a very reasonable $699.",
          url: "https://www.macrumors.com/2024/03/15/walmart-selling-macbook-air-with-m1-chip/",
          urlToImage:
            "https://images.macrumors.com/t/1kF3lWGsQLbxYSXSGnlAHnCH858=/1600x/article-new/2024/03/Walmart-MacBook-Air-M1.jpg",
          publishedAt: "2024-03-15T13:57:39Z",
          content:
            "Walmart today announced that it has started selling the MacBook Air with the M1 chip in the U.S., with pricing set at a very reasonable $699. The laptop can be ordered now on Walmart.com, and it wi…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "Best Buy Selling M1 MacBook Air for $650, a New All-Time Low Price",
          description:
            "Best Buy is selling the 13-inch M1 MacBook Air for $649.99, which is the lowest price that we've seen to date on the machine.",
          url: "https://www.macrumors.com/2024/03/15/best-buy-macbook-air-all-time-low/",
          urlToImage:
            "https://images.macrumors.com/t/Fy_DJRIwHh4l0j54PryX1yvVuBM=/2125x/article-new/2022/06/M1-MacBook-Air-Deals-Feature-Warm.jpg",
          publishedAt: "2024-03-15T23:47:34Z",
          content:
            "Best Buy is selling the 13-inch M1 MacBook Air for $649.99, which is the lowest price that we've seen to date on the machine. Best Buy's price drop comes just hours after Walmart started selling the…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title: "Five Key Upgrades Coming to iPhone 16",
          description:
            "The iPhone is Apple's top-selling product, and it gets an update every year. In 2024, we're expecting the iPhone 16 and iPhone 16 Pro lineup, with an arguably more interesting feature set than we got with the iPhone 15 and iPhone 15 Pro.",
          url: "https://www.macrumors.com/2024/03/15/5-key-iphone-16-features/",
          urlToImage:
            "https://images.macrumors.com/t/UN-YWSR6DqoDa7DGJO7Dtm1fYVA=/2500x/article-new/2024/02/iPhone-16-Camera-Lozenge-2-Perspective-Gray.jpg",
          publishedAt: "2024-03-15T20:45:03Z",
          content:
            "The iPhone is Apple's top-selling product, and it gets an update every year. In 2024, we're expecting the iPhone 16 and iPhone 16 Pro lineup, with an arguably more interesting feature set than we got…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "MacRumors Giveaway: Win an iPad Air and Rock Paper Pencil Kit From Astropad",
          description:
            "For this week's giveaway, we've teamed up with Astropad to offer MacRumors readers a chance to win an iPad Air, an Apple Pencil 2, and two Astropad accessories.",
          url: "https://www.macrumors.com/2024/03/15/macrumors-giveaway-astropad-ipad/",
          urlToImage:
            "https://images.macrumors.com/t/tePeFytE2nKVZezQysk8dHI0wfQ=/1920x/article-new/2024/03/rock-paper-pencil-1.jpg",
          publishedAt: "2024-03-15T16:25:47Z",
          content:
            "For this week's giveaway, we've teamed up with Astropad to offer MacRumors readers a chance to win an iPad Air, an Apple Pencil 2, and two Astropad accessories. Astropad is known for the Astropad Stu…",
        },
        {
          source: {
            id: "business-insider",
            name: "Business Insider",
          },
          author: "Geoff Weiss",
          title:
            "The first Apple computer you can buy directly from Walmart is a $700 MacBook Air",
          description:
            "For the first time, Walmart is selling Macs directly, starting with the MacBook Air with an M1 chip, which is no longer being sold new at Apple.",
          url: "https://www.businessinsider.com/walmart-selling-macs-directly-for-first-time-good-deal-2024-3",
          urlToImage:
            "https://i.insider.com/65f484c91851e792f0f01f92?width=1200&format=jpeg",
          publishedAt: "2024-03-15T19:51:04Z",
          content:
            "It's the first time you can buy a Mac directly from Walmart.Felix Zahn/Getty Images\r\n<ul><li>Walmart is selling Macs directly for the first time, starting at $700 for a MacBook Air.</li><li>Walmart h…",
        },
        {
          source: {
            id: "business-insider",
            name: "Business Insider",
          },
          author: "Geoff Weiss",
          title: "A TikTok ban could be terrible news for Apple and Tesla",
          description:
            "Analysts said China could very well retaliate against US tech giants operating in the country if a TikTok ban comes to fruition.",
          url: "https://www.businessinsider.com/tiktok-ban-may-hurt-apple-tesla-us-companies-2024-3",
          urlToImage:
            "https://i.insider.com/65f35d33857f90b71522c056?width=1200&format=jpeg",
          publishedAt: "2024-03-15T17:50:30Z",
          content:
            'TikTok drama in the US could end up hurting Apple.Christoph Dernbach/picture alliance via Getty Images\r\n<ul><li>China\'s foreign ministry said banning TikTok would "eventually backfire on the US."</li…',
        },
      ],
    },
  ];
  res.json(apple);
});
app.get("/science", (req, res) => {
  const science = [
    {
      status: "ok",
      totalResults: 1869,
      articles: [
        {
          source: {
            id: null,
            name: "Android Central",
          },
          author: "Jay Bonggolto",
          title:
            "Apple's latest AI acquisition might give Google Gemini some serious competition",
          description:
            "Apple's presumed acquisition of Canada's DarwinAI might mean it's gearing up to amp up AI directly in its future products.",
          url: "https://www.androidcentral.com/apps-software/gemini-nano-might-soon-have-a-competitor-from-apple",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/kaiZtJYJMfW7BhxmhtMiK6-1200-80.jpg",
          publishedAt: "2024-03-15T11:04:55Z",
          content:
            "Apple has apparently acquired Ontario-based startup DarwinAI, indicating its entry into the generative AI race. DarwinAI specializes in AI for visual inspection of manufacturing components and is kno…",
        },
        {
          source: {
            id: null,
            name: "Android Central",
          },
          author: "Steven Shaw",
          title:
            "Android 15 could allow devices to be tracked even when switched off",
          description:
            "Recent Pixel phones may be able to send Bluetooth beacons to nearby compatible devices.",
          url: "https://www.androidcentral.com/apps-software/android-15-could-allow-devices-to-be-tracked-even-when-switched-off",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/JwFDzY3SMrwdQVC3pzbJLW-1200-80.jpg",
          publishedAt: "2024-03-15T15:57:20Z",
          content:
            "Android 15 is expected to introduce a Powered Off Finder API. This API will enable compatible devices to be tracked even when switched off. The feature is expected to be available on recent Pixel p…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Tim Hardwick",
          title:
            "Caviar's 18-Karat Gold Custom Apple Vision Pro Won't Start at $3,499",
          description:
            "Caviar, a company known for making luxury variants of popular tech gadgets, intends to release a custom Apple Vision Pro plated with 18-karat gold next year that will inevitably set you back more than Apple's $3,499 starting price.",
          url: "https://www.macrumors.com/2024/03/15/caviar-apple-vision-pro-custom-gold/",
          urlToImage:
            "https://images.macrumors.com/t/SJ9lA0gpykVntIEqZOC2kUIK8uE=/1600x/article-new/2024/03/caviar-vision-pro2.jpg",
          publishedAt: "2024-03-15T14:33:16Z",
          content:
            "Caviar, a company known for making luxury variants of popular tech gadgets, intends to release a custom Apple Vision Pro plated with 18-karat gold next year that will inevitably set you back more th…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Joe Rossignol",
          title:
            "Apple's Butterfly Keyboard Repair Program for MacBooks is Nearly Over",
          description:
            "Apple's long-running butterfly keyboard service program for MacBooks is ending soon, with only a few models still eligible for a free repair.",
          url: "https://www.macrumors.com/2024/03/15/apple-butterfly-keyboard-program-nearly-over/",
          urlToImage:
            "https://images.macrumors.com/t/BACgiSD8cMcDNf_FrmX4SfWsz9E=/1600x/article-new/2024/03/MacBook-Keyboard-Close.jpg",
          publishedAt: "2024-03-15T19:36:09Z",
          content:
            "Apple's long-running butterfly keyboard service program for MacBooks is ending soon, with only a few models still eligible for a free repair. Below, we take a look back at Apple's butterfly keyboard…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "TipTop Shop App Offers Single-Transaction Buying, Selling and Device Trade-Ins",
          description:
            "TipTop, an app for trading in used devices and getting instant cash, today launched a new feature called Shop.",
          url: "https://www.macrumors.com/2024/03/15/tiptop-shop-trade-in-app/",
          urlToImage:
            "https://images.macrumors.com/t/1mEyzd5LYAiiLsocBtYC1zyoo3s=/1600x/article-new/2024/03/tiptop-shop.jpg",
          publishedAt: "2024-03-15T15:04:34Z",
          content:
            "TipTop, an app for trading in used devices and getting instant cash, today launched a new feature called Shop. With TipTop Shop, users are able to buy new, open box, and refurbished items, while als…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Tim Hardwick",
          title:
            "iPad Air Next on Apple's OLED Tablet Roadmap Following iPad Pro",
          description:
            "The iPad Air will be the next Apple tablet to adopt OLED display panel technology following its upcoming OLED iPad Pro models, according to an updated forecast from research firm Omdia.",
          url: "https://www.macrumors.com/2024/03/15/ipad-air-oled-adoption-timeline/",
          urlToImage:
            "https://images.macrumors.com/t/HzTXwS-UM0hjtxDIsG_18-RKo-g=/2363x/article-new/2021/06/OLED-iPad-Air.jpg",
          publishedAt: "2024-03-15T10:30:18Z",
          content:
            "The iPad Air will be the next Apple tablet to adopt OLED display panel technology following its upcoming OLED iPad Pro models, according to an updated forecast from research firm Omdia. In 2028, we e…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Hartley Charlton",
          title:
            "The MacRumors Show: Will the New iPad Air Be a Big Enough Upgrade?",
          description:
            "On this week's episode of The MacRumors Show, we discuss Apple's upcoming iPad Air models, which are expected to be announced in just a matter of weeks.",
          url: "https://www.macrumors.com/2024/03/15/the-macrumors-show-new-ipad-air-upgrade/",
          urlToImage:
            "https://images.macrumors.com/t/qH_hRLerQCk_cMRgXLL8uPxwPVg=/1600x/https://img.youtube.com/vi/oa3GY7loQgc/maxresdefault.jpg",
          publishedAt: "2024-03-15T16:08:58Z",
          content:
            "On this week's episode of The MacRumors Show, we discuss Apple's upcoming iPad Air models, which are expected to be announced in just a matter of weeks. The sixth-generation ‌iPad Air‌ is rumored to…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title: "You Can Now Browse Vision Pro Apps on the Web",
          description:
            "Apple today made the visionOS App Store available on the web, giving Vision Pro users and prospective owners a way to see what apps are available for the device.",
          url: "https://www.macrumors.com/2024/03/15/visionos-app-store-web/",
          urlToImage:
            "https://images.macrumors.com/t/EyPN1iXGjP-2kM0hTDXvIDx1VE0=/2500x/article-new/2024/02/Vision-Pro-Apps-Feature.jpg",
          publishedAt: "2024-03-15T23:24:29Z",
          content:
            "Apple today made the visionOS App Store available on the web, giving Vision Pro users and prospective owners a way to see what apps are available for the device. As noted by 9to5Mac, Vision Pro apps…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Joe Rossignol",
          title:
            "Walmart Begins Selling MacBook Air With M1 Chip for $699 in U.S.",
          description:
            "Walmart today announced that it has started selling the MacBook Air with the M1 chip in the U.S., with pricing set at a very reasonable $699.",
          url: "https://www.macrumors.com/2024/03/15/walmart-selling-macbook-air-with-m1-chip/",
          urlToImage:
            "https://images.macrumors.com/t/1kF3lWGsQLbxYSXSGnlAHnCH858=/1600x/article-new/2024/03/Walmart-MacBook-Air-M1.jpg",
          publishedAt: "2024-03-15T13:57:39Z",
          content:
            "Walmart today announced that it has started selling the MacBook Air with the M1 chip in the U.S., with pricing set at a very reasonable $699. The laptop can be ordered now on Walmart.com, and it wi…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "Best Buy Selling M1 MacBook Air for $650, a New All-Time Low Price",
          description:
            "Best Buy is selling the 13-inch M1 MacBook Air for $649.99, which is the lowest price that we've seen to date on the machine.",
          url: "https://www.macrumors.com/2024/03/15/best-buy-macbook-air-all-time-low/",
          urlToImage:
            "https://images.macrumors.com/t/Fy_DJRIwHh4l0j54PryX1yvVuBM=/2125x/article-new/2022/06/M1-MacBook-Air-Deals-Feature-Warm.jpg",
          publishedAt: "2024-03-15T23:47:34Z",
          content:
            "Best Buy is selling the 13-inch M1 MacBook Air for $649.99, which is the lowest price that we've seen to date on the machine. Best Buy's price drop comes just hours after Walmart started selling the…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title: "Five Key Upgrades Coming to iPhone 16",
          description:
            "The iPhone is Apple's top-selling product, and it gets an update every year. In 2024, we're expecting the iPhone 16 and iPhone 16 Pro lineup, with an arguably more interesting feature set than we got with the iPhone 15 and iPhone 15 Pro.",
          url: "https://www.macrumors.com/2024/03/15/5-key-iphone-16-features/",
          urlToImage:
            "https://images.macrumors.com/t/UN-YWSR6DqoDa7DGJO7Dtm1fYVA=/2500x/article-new/2024/02/iPhone-16-Camera-Lozenge-2-Perspective-Gray.jpg",
          publishedAt: "2024-03-15T20:45:03Z",
          content:
            "The iPhone is Apple's top-selling product, and it gets an update every year. In 2024, we're expecting the iPhone 16 and iPhone 16 Pro lineup, with an arguably more interesting feature set than we got…",
        },
        {
          source: {
            id: null,
            name: "MacRumors",
          },
          author: "Juli Clover",
          title:
            "MacRumors Giveaway: Win an iPad Air and Rock Paper Pencil Kit From Astropad",
          description:
            "For this week's giveaway, we've teamed up with Astropad to offer MacRumors readers a chance to win an iPad Air, an Apple Pencil 2, and two Astropad accessories.",
          url: "https://www.macrumors.com/2024/03/15/macrumors-giveaway-astropad-ipad/",
          urlToImage:
            "https://images.macrumors.com/t/tePeFytE2nKVZezQysk8dHI0wfQ=/1920x/article-new/2024/03/rock-paper-pencil-1.jpg",
          publishedAt: "2024-03-15T16:25:47Z",
          content:
            "For this week's giveaway, we've teamed up with Astropad to offer MacRumors readers a chance to win an iPad Air, an Apple Pencil 2, and two Astropad accessories. Astropad is known for the Astropad Stu…",
        },
        {
          source: {
            id: "business-insider",
            name: "Business Insider",
          },
          author: "Geoff Weiss",
          title:
            "The first Apple computer you can buy directly from Walmart is a $700 MacBook Air",
          description:
            "For the first time, Walmart is selling Macs directly, starting with the MacBook Air with an M1 chip, which is no longer being sold new at Apple.",
          url: "https://www.businessinsider.com/walmart-selling-macs-directly-for-first-time-good-deal-2024-3",
          urlToImage:
            "https://i.insider.com/65f484c91851e792f0f01f92?width=1200&format=jpeg",
          publishedAt: "2024-03-15T19:51:04Z",
          content:
            "It's the first time you can buy a Mac directly from Walmart.Felix Zahn/Getty Images\r\n<ul><li>Walmart is selling Macs directly for the first time, starting at $700 for a MacBook Air.</li><li>Walmart h…",
        },
        {
          source: {
            id: "business-insider",
            name: "Business Insider",
          },
          author: "Geoff Weiss",
          title: "A TikTok ban could be terrible news for Apple and Tesla",
          description:
            "Analysts said China could very well retaliate against US tech giants operating in the country if a TikTok ban comes to fruition.",
          url: "https://www.businessinsider.com/tiktok-ban-may-hurt-apple-tesla-us-companies-2024-3",
          urlToImage:
            "https://i.insider.com/65f35d33857f90b71522c056?width=1200&format=jpeg",
          publishedAt: "2024-03-15T17:50:30Z",
          content:
            'TikTok drama in the US could end up hurting Apple.Christoph Dernbach/picture alliance via Getty Images\r\n<ul><li>China\'s foreign ministry said banning TikTok would "eventually backfire on the US."</li…',
        },
      ],
    },
  ];
  res.json(science);
});
app.get("/sports", (req, res) => {
  const sports= [
    {
      "status": "ok",
      "totalResults": 70,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Shantanu Srivastava",
          "title": "Smriti Mandhana keeps RCB's date with history as Bangalore claim maiden WPL title with 8-wicket win over DC - Hindustan Times",
          "description": "Delhi Capitals lose their second WPL final in a row after a batting collapse with Royal Challengers winning the final by 8 wickets. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/sensational-sophie-molineux-steals-dc-thunder-smriti-mandhana-rcb-thrash-meg-lanning-and-co-to-claim-maiden-wpl-title-101710692634187.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/17/1600x900/CRICKET-IND-WPL-T20-DELHI-BANGALORE-7_1710694754294_1710694770820.jpg",
          "publishedAt": "2024-03-17T17:09:23Z",
          "content": "The wait is over for Royal Challengers Bangalore (RCB). The much-loved, much-debated franchise with the biggest stars and glitziest ad campaigns finally has a title, and it has taken them 16 years to… [+4681 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "\"T20 World Cup Just 5 Days After IPL Final\": R Ashwin Sums Up India's Cricket Schedule Chaos | Cricket News - NDTV Sports",
          "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
          "url": "https://news.google.com/rss/articles/CBMigQFodHRwczovL3Nwb3J0cy5uZHR2LmNvbS9pcGwtMjAyNC90MjAtd29ybGQtY3VwLWp1c3QtNS1kYXlzLWFmdGVyLWlwbC1maW5hbC1yLWFzaHdpbi1zdW1zLXVwLWluZGlhcy1jcmlja2V0LXNjaGVkdWxlLWNoYW9zLTUyNTYxNjXSAQA",
          "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
          "publishedAt": "2024-03-17T15:16:02Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "SB Nation"
          },
          "author": "David Pasztor",
          "title": "Chelsea 4-2 Leicester City, FA Cup: Post-match reaction, ratings - We Ain't Got No History",
          "description": "WINNER WINNER MAKING THINGS INTERESTING DINNER",
          "url": "https://weaintgotnohistory.sbnation.com/2024/3/17/24103811/chelsea-4-2-leicester-city-fa-cup-post-match-reaction-ratings",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/fNVSdLoRo4BgMT2N7AQCkc_XUBk=/0x0:4426x2317/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25340767/2091354446.jpg",
          "publishedAt": "2024-03-17T14:45:36Z",
          "content": "Chelsea made a positive start to the game, and Cole Palmer almost opened the scoring inside of five minutes with a neat little heel-flick at the near post on a corner. The ball looped over everyone b… [+2257 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "News18"
          },
          "author": "Feroz Khan",
          "title": "Unhappiness Over Salary Details Leaked to Media, IPL Commitment: Why Shane Watson Turned Down Offer to Coac - News18",
          "description": "It was being reported that Pakistan Cricket Board has accepted Shane Watson's salary demand but the Australian still turned down the offer.",
          "url": "https://www.news18.com/cricket/leaking-salary-details-to-media-ipl-commitment-why-shane-watson-turned-down-offer-to-coach-pakistan-8818879.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/03/shane-watson-afp-2024-03-365dbb31cf1b949966824c60eacde63e-16x9.jpg?impolicy=website&width=1200&height=675",
          "publishedAt": "2024-03-17T14:19:00Z",
          "content": "Australia legend Shane Watson recently dropped out from the race to become the next Pakistan mens team head coach despite the Pakistan Cricket Board (PCB) reportedly meeting his salary demands.\r\nBesi… [+2055 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "'Indran-Chandran': Ravindra Jadeja's Special Message For R Ashwin Has A Rajnikanth Twist - NDTV Sports",
          "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
          "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2NyaWNrZXQvaW5kcmFuLWNoYW5kcmFuLXJhdmluZHJhLWphZGVqYXMtc3BlY2lhbC1tZXNzYWdlLWZvci1yLWFzaHdpbi1oYXMtYS1yYWpuaWthbnRoLXR3aXN0LTUyNTY1ODHSAYIBaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vY3JpY2tldC9pbmRyYW4tY2hhbmRyYW4tcmF2aW5kcmEtamFkZWphcy1zcGVjaWFsLW1lc3NhZ2UtZm9yLXItYXNod2luLWhhcy1hLXJham5pa2FudGgtdHdpc3QtNTI1NjU4MS9hbXAvMQ",
          "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
          "publishedAt": "2024-03-17T14:04:55Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Crictracker.com"
          },
          "author": "Rishabh Beniwal",
          "title": "Why has BCCI banned certain colours on IPL jerseys? Preity Zinta reveals - CricTracker",
          "description": "Indian Premier League (IPL) team Punjab Kings (PBKS) unveiled their jersey for the upcoming IPL 2024 on Saturday, March 16 at the Elante Mall in Chandigarh. PBKS captain Shikhar Dhawan, fast bowler Ar",
          "url": "https://www.crictracker.com/cricket-news/why-has-bcci-banned-certain-colours-on-ipl-jerseys-preity-zinta-reveals/",
          "urlToImage": "https://media.crictracker.com/media/attachments/1710678803009_Punjab-Kings-and-Preity-Zinta.jpeg",
          "publishedAt": "2024-03-17T12:30:00Z",
          "content": "Indian Premier League (IPL) team Punjab Kings (PBKS) unveiled their jersey for the upcoming IPL 2024 on Saturday, March 16 at the Elante Mall in Chandigarh. PBKS captain Shikhar Dhawan, fast bowler A… [+1919 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI Sports Desk",
          "title": "'Virat Kohli one of my favourite guys to...': Former RCB skipper has a new admirer in Faf du Plessis - The Times of India",
          "description": "Cricket News: Virat Kohli on Sunday returned to India, following the birth of his son Akaay, and is set to join his franchise Royal Challengers Bangalore's training",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/virat-kohli-one-of-my-favourite-guys-to-former-rcb-skipper-has-a-new-admirer-in-faf-du-plessis/articleshow/108564795.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-108564818,width-1070,height-580,imgsize-66696,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-03-17T12:13:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "\"Don't See Myself Anywhere\": India Star's Blunt T20 World Cup Selection Admission | Cricket News - NDTV Sports",
          "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
          "url": "https://news.google.com/rss/articles/CBMidGh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2NyaWNrZXQvZG9udC1zZWUtbXlzZWxmLWFueXdoZXJlLWluZGlhLXN0YXJzLWJsdW50LXQyMC13b3JsZC1jdXAtc2VsZWN0aW9uLWFkbWlzc2lvbi01MjU2MDg10gEA",
          "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
          "publishedAt": "2024-03-17T12:05:07Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Jofra Archer To Play For RCB In IPL 2024? Social Media Post Has Fans Wondering | Cricket News - NDTV Sports",
          "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
          "url": "https://news.google.com/rss/articles/CBMifmh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2lwbC0yMDI0L2pvZnJhLWFyY2hlci10by1wbGF5LWZvci1yY2ItaW5zdGFncmFtLXN0b3J5LWJyZWFrcy1pbnRlcm5ldC1haGVhZC1vZi1pcGwtMjAyNC1vcGVuZXItNTI1NjI0MtIBAA",
          "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
          "publishedAt": "2024-03-17T11:57:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Managing Madrid"
          },
          "author": "Sam Leveridge",
          "title": "Three questions and three answers from Osasuna 2-4 Real Madrid - Managing Madrid",
          "description": "Real Madrid’s unbeaten run continues in LALIGA",
          "url": "https://www.managingmadrid.com/2024/3/17/24103214/three-questions-and-three-answers-from-osasuna-2-4-real-madrid-laliga-vinicius-junior-fede-valverde",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/S9ICDpyVH0P6hlvqIp7qijXyWAo=/0x460:6423x3823/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25339659/2082110406.jpg",
          "publishedAt": "2024-03-17T11:10:35Z",
          "content": "Real Madrid head into the international break off the back of another victory which has ensured that their unbeaten streak continues courtesy of a 4-2 win at El Sadar against Osasuna. The victory con… [+5244 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Crictracker.com"
          },
          "author": "CricTracker Staff",
          "title": "PSL 2024: Final, ISL vs MUL Match Prediction – Who will win today’s match between ISL vs MUL? - CricTracker",
          "description": "The grand final of the Pakistan Super League (PSL 2024) will feature a clash between Islamabad United (ISL) and Multan Sultans (MUL) at the National Bank Cricket Arena in Karachi, on Monday, March 18…",
          "url": "https://www.crictracker.com/cricket-match-predictions/psl-2024-final-isl-vs-mul-match-prediction-who-will-win-todays-match-between-isl-vs-mul-2539-5134/",
          "urlToImage": "https://media.crictracker.com/media/attachments/1677417377658_Multan-Sulthans.jpeg",
          "publishedAt": "2024-03-17T11:05:00Z",
          "content": "The grand final of the Pakistan Super League (PSL 2024) will feature a clash between Islamabad United (ISL) and Multan Sultans (MUL) at the National Bank Cricket Arena in Karachi, on Monday, March 18… [+2549 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI Sports Desk",
          "title": "'I got injections, blood removed...': Hardik Pandya recalls painful recuperation after World Cup injury - The Times of India",
          "description": "Cricket News: Hardik Pandya sustained the ankle injury during India's fourth World Cup match against Bangladesh while delivering his first over. Hindered by the inj",
          "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/i-got-injections-blood-removed-hardik-pandya-recalls-painful-recuperation-after-world-cup-injury/articleshow/108563551.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-108563543,width-1070,height-580,imgsize-44146,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-03-17T10:53:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Trouble In Pakistan Cricket Team? Young Fast Bowler Reveals 'Culture Of Insecurity' | Cricket News - NDTV Sports",
          "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
          "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2NyaWNrZXQvdHJvdWJsZS1pbi1wYWtpc3Rhbi1jcmlja2V0LXRlYW0teW91bmctZmFzdC1ib3dsZXItcmV2ZWFscy1jdWx0dXJlLW9mLWluc2VjdXJpdHktNTI1NTg4MdIBAA",
          "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
          "publishedAt": "2024-03-17T10:20:17Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Firstpost"
          },
          "author": null,
          "title": "India vs West Indies: R Ashwin says he is not expecting call-up to T20 World Cup squad, admits his chances - Firstpost",
          "description": "India vs West Indies: R Ashwin says he is not expecting call-up to T20 World Cup squad, admits his chances",
          "url": "https://www.firstpost.com/firstcricket/sports-news/india-vs-west-indies-r-ashwin-says-he-is-not-expecting-call-up-to-t20-world-cup-squad-admits-his-chances-10410761.html",
          "urlToImage": "https://images.firstpost.com/wp-content/uploads/2021/09/Ashwin-Ravichandran-620-1629875412-0.jpg",
          "publishedAt": "2024-03-17T10:11:00Z",
          "content": "West Indies legend Viv Richards recently commented on India's strategy for the upcoming T20 World Cup, claiming that the selectors should not ignore the presence of R Ashwin and Ravindra Jadeja in t… [+1861 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Express News Service",
          "title": "Bombay HC dismisses plea seeking ban on BCCI; says cricket can’t be stopped for cricket betting | Sports News,The Indian Express - The Indian Express",
          "description": "Advocate Arvind Tiwari, who filed the PIL, had contended that online cricket betting is directly responsible for the fixing scandals.",
          "url": "https://indianexpress.com/article/sports/cricket/bombay-hc-dismisses-plea-seeking-ban-on-bcci-says-cricket-cant-be-stopped-for-cricket-betting-7859832/",
          "urlToImage": "https://images.indianexpress.com/2022/03/cricket-9.jpg",
          "publishedAt": "2024-03-17T09:59:00Z",
          "content": "The Bombay High Court (HC) recently dismissed a public interest litigation (PIL) that sought a ban on the Board of Control for Cricket in India (BCCI). A division bench of Chief Justice Dipankar Dut… [+2008 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "hindustantimes.com",
          "title": "SA vs ZIM: South Africa opt to bowl against Zimbabwe in 2nd T20I - Hindustan Times",
          "description": "South Africa made three changes, with Wiaan Mulder, Beuran Hendricks and Anrich Nortje replacing Dwaine Pretorius, Keshav Maharaj and Kagiso Rabada in the side. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/south-africa-opt-to-bowl-against-zimbabwe-in-2nd-t20i-101710607748925.html",
          "urlToImage": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2024/03/17/Pictures/_30b39d8e-aad1-11ec-b154-2f62482cb7cb.jpg",
          "publishedAt": "2024-03-17T09:50:33Z",
          "content": "South Africa won the toss and opted to bowl against Zimbabwe in the second T20 International of their three-match series at Boland Park on Wednesday.\r\nSouth Africa made three changes, with Wiaan Mul… [+1828 chars]"
        }
      ]
    }
    
  ];
  res.json(sports);
});

const PORT = process.env.PORT || 9200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
