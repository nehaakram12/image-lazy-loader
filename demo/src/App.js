import React, { Component } from "react";
import Picture from "@nehaakram12/image-lazy-loader";
import "@nehaakram12/image-lazy-loader/lib/main.css";
import "./app.css";

const data = [
  {
    title: "article-image.png",
    handle: "AMCxJ1FMTZ2nxlHPBdKw",
    width: 881,
    height: 597
  },
  {
    title: "news-1.jpg",
    handle: "YjGENBRhmDmm5OIuo55A",
    width: 2160,
    height: 1440
  },
  {
    title: "news-7.jpg",
    handle: "rtGR9Sy7T86adyVinsxu",
    width: 2160,
    height: 1440
  },
  {
    title: "news-6.jpg",
    handle: "2QWRgNHSRiNG1j302wYe",
    width: 2160,
    height: 1440
  },
  {
    title: "news-2.jpg",
    handle: "1BhY5G2KS66448676mfH",
    width: 2160,
    height: 1440
  },
  {
    title: "news-5.jpg",
    handle: "CJBfIwm4SqqVG6fkyuyH",
    width: 2160,
    height: 1440
  },
  {
    title: "news-3.jpg",
    handle: "hli1CK1oSey9M9KY5I0m",
    width: 2160,
    height: 1440
  },
  {
    title: "news-4.jpg",
    handle: "NJZFaYzHTSWgzRDKY0vn",
    width: 2160,
    height: 1440
  },
  {
    title: "partners-3.jpg",
    handle: "6205DwETZy8B9SB3xmEw",
    width: 2160,
    height: 1350
  },
  {
    title: "partners-2.jpg",
    handle: "mepvhc6kSXqdXt04QGlu",
    width: 2160,
    height: 1350
  },
  {
    title: "partners-4.jpg",
    handle: "H0jEt74XQKiSqWeTF7QX",
    width: 2160,
    height: 1350
  },
  {
    title: "partners-5.jpg",
    handle: "X54t3PkRVyQgrZY1Lhyx",
    width: 2160,
    height: 1350
  },
  {
    title: "partners-1.jpg",
    handle: "fD0kwewqRJOAMQcVgqXW",
    width: 2160,
    height: 1350
  },
  {
    title: "partners-batman.jpg",
    handle: "NanjSz7KSQ2vQVrgskBo",
    width: 2160,
    height: 1350
  },
  {
    title: "image1.jpg",
    handle: "f9q0G50GTkeekL0jP0l5",
    width: 427,
    height: 386
  },
  {
    title: "text-two-images-image1.jpg",
    handle: "7bFxOEAiRp6xhn1OzO5T",
    width: 530,
    height: 301
  },
  {
    title: "text-two-images-image2.jpg",
    handle: "JAhUXcaxSfusKvaiL3uE",
    width: 531,
    height: 301
  },
  {
    title: "image-text-one-image.jpg",
    handle: "Vu60rVCeRCPHMNj8LB3Z",
    width: 276,
    height: 184
  },
  {
    title: "image-text-two-image2.jpg",
    handle: "u6eS6LZmQ5CLlEGIPQ09",
    width: 531,
    height: 301
  },
  {
    title: "image-text-two-image1.jpg",
    handle: "wAMyQvveRwynO3DcsUjh",
    width: 530,
    height: 301
  },
  {
    title: "text-quote-image.jpg",
    handle: "7E4YtyNvS5t9o87iH04M",
    width: 726,
    height: 726
  },
  {
    title: "video-image.jpg",
    handle: "UQrnmMSBupscDSQcNoKw",
    width: 2160,
    height: 1200
  },
  {
    title: "spotlight-1.jpg",
    handle: "XhJ3HkiQd9GVQN25vQyg",
    width: 719,
    height: 820
  },
  {
    title: "spotlight-4.jpg",
    handle: "QmQcipMQCagciA2eEdCw",
    width: 722,
    height: 820
  },
  {
    title: "spotlight-3.jpg",
    handle: "fZNJUABBS4WXPApai1jQ",
    width: 718,
    height: 820
  },
  {
    title: "spotlight-2.jpg",
    handle: "5KuMHPZoSK6w4GYghpCm",
    width: 721,
    height: 1029
  },
  {
    title: "carousel-image-green.png",
    handle: "vp2J9IWfQp2uknrwpyG1",
    width: 1110,
    height: 653
  },
  {
    title: "carousel-image-grey.png",
    handle: "ea9CDCiCQ4tWAyoHDmKQ",
    width: 1110,
    height: 653
  },
  {
    title: "carousel-image-pink.png",
    handle: "WJSGlAYBTPiwbGoSjDAv",
    width: 1110,
    height: 653
  },
  {
    title: "carousel-image-red.png",
    handle: "QktsPK7zSzOH5UN22zFa",
    width: 1110,
    height: 653
  },
  {
    title: "carousel-image-original.png",
    handle: "lPbKJ82FTXKSmZdoLsOe",
    width: 1110,
    height: 653
  },
  {
    title: "Nic.png",
    handle: "WAOCUD1mQfygjWIeDAhG",
    width: 191,
    height: 70
  },
  {
    title: "Aspect.png",
    handle: "HWoc0pPSoGgREQN2niIF",
    width: 240,
    height: 126
  },
  {
    title: "Genesys Logo copy.png",
    handle: "oxIEpfZR2KIkohSg3V78",
    width: 240,
    height: 49
  },
  {
    title: "Altitude.png",
    handle: "Z6SOXGXxRWqYukkgtYer",
    width: 240,
    height: 55
  },
  {
    title: "Avaya Logo copy.png",
    handle: "SW9pUGZVSZGurY4MAUHw",
    width: 240,
    height: 70
  },
  {
    title: "Huawei.png",
    handle: "b4TQdHZIRHGA534i8xCJ",
    width: 240,
    height: 40
  },
  {
    title: "Cisco.png",
    handle: "CqrxpCaSK6z1FUKieKDc",
    width: 240,
    height: 127
  },
  {
    title: "video-mckinsey.jpg",
    handle: "vQ9It29RQfyL2YKSZcJw",
    width: 2160,
    height: 1200
  },
  {
    title: "image1.png",
    handle: "SjmFOO9tRumKJH3cP636",
    width: 795,
    height: 450
  },
  {
    title: "00Left Text pic.png",
    handle: "ZFBFS6aSpqIbqO4gjI1r",
    width: 795,
    height: 450
  },
  {
    title: "01Experian.jpg",
    handle: "l1CTS8zSAeC2G70k4HuQ",
    width: 1107,
    height: 1230
  },
  {
    title: "03Infutor.jpg",
    handle: "4wKolQvKRl2mISvRBp5i",
    width: 1107,
    height: 1230
  },
  {
    title: "04Greenstone.jpg",
    handle: "SpLy41rRMq9iPziVti1k",
    width: 1107,
    height: 1230
  },
  {
    title: "05Axesor.jpg",
    handle: "O5SXZ69vRKCYq3KdMc7l",
    width: 1107,
    height: 1230
  },
  {
    title: "02Acxiom.jpg",
    handle: "gQpxWPUpSq2iLssd42Cz",
    width: 1107,
    height: 1230
  },
  {
    title: "asesor.png",
    handle: "BExq50OQSmG5cUWsDM2z",
    width: 204,
    height: 34
  },
  {
    title: "acxiom.png",
    handle: "80JfBntAQbaT04iCn1QU",
    width: 204,
    height: 51
  },
  {
    title: "convergys.png",
    handle: "XI4Htb2rRYuMiQIiMGhe",
    width: 280,
    height: 89
  },
  {
    title: "alorca.png",
    handle: "tjm2eYK4RkmFOacKyAyq",
    width: 206,
    height: 58
  },
  {
    title: "infutor-data-solutions-squarelogo-1488837288415.png",
    handle: "Rppw8agJRfyXdMrmQZiI",
    width: 200,
    height: 55
  },
  {
    title: "experian_logo.png",
    handle: "38nXJlXHQY5FhoankMYs",
    width: 199,
    height: 65
  },
  {
    title: "Screen Shot 2018-02-26 at 15.05.37.png",
    handle: "QEAtlCHRE1LiCCvLR10g",
    width: 226,
    height: 58
  },
  {
    title: "infutor-data-solutions-squarelogo-1488837288415.png",
    handle: "5tuzd7JcQUpRoSkuO8xl",
    width: 200,
    height: 55
  },
  {
    title: "Screen Shot 2018-02-26 at 15.05.37.png",
    handle: "4XUk909QICk20TLWINCJ",
    width: 226,
    height: 58
  },
  {
    title: "convergys.png",
    handle: "d3nyDAl9SPKG0hW5tMUW",
    width: 280,
    height: 89
  },
  {
    title: "asesor.png",
    handle: "J9G9XkSMTOiMBnH5Y5pw",
    width: 204,
    height: 34
  },
  {
    title: "acxiom.png",
    handle: "qOHzvgH7RQ2S9v0eRXvx",
    width: 204,
    height: 51
  },
  {
    title: "alorca.png",
    handle: "KjE6Hc7sRmSUxV0lAV5C",
    width: 206,
    height: 58
  },
  {
    title: "experian_logo.png",
    handle: "R8avzGuxR1Gzla2AXI3o",
    width: 199,
    height: 65
  },
  {
    title: "mike-wilson-39902-unsplash.jpg",
    handle: "DM9xkvALRgOhhFBdszac",
    width: 630,
    height: 570
  },
  {
    title: "Bert-and-Ernie.jpg",
    handle: "7c3qagsSKKTBs69zDI3Z",
    width: 630,
    height: 570
  },
  {
    title: "supported-hero.jpg",
    handle: "M9hQXMpySzaKC5K3XEwA",
    width: 2160,
    height: 1350
  },
  {
    title: "meerkat.png",
    handle: "mgTvHUiFTEKoeKqOtXqI",
    width: 630,
    height: 570
  },
  {
    title: "alorica vector transparent.png",
    handle: "5IRcaKObTqOQy8Ufadcg",
    width: 294,
    height: 83
  },
  {
    title: "spotlight-business-2.png",
    handle: "uByEGoLrRQudYqHuKxEO",
    width: 1083,
    height: 795
  },
  {
    title: "spoltight-business-1.png",
    handle: "UQvcy5jvTeOtuBAI7276",
    width: 1083,
    height: 894
  },
  {
    title: "Convergys Logo transparent.png",
    handle: "sEou7E5R4WURKYfM7hnQ",
    width: 300,
    height: 96
  },
  {
    title: "video-image.jpg",
    handle: "Fq51q6YsQyqOpUvGXg8k",
    width: 2160,
    height: 1200
  },
  {
    title: "client2-placeholder-hero.jpg",
    handle: "ar65uTouRHSACd66kQkh",
    width: 2160,
    height: 1350
  },
  {
    title: "client1-hero.jpg",
    handle: "mo65HBo2QKS3hZMT5dls",
    width: 2160,
    height: 1350
  },
  {
    title: "video-mckinsey.jpg",
    handle: "O8K8LEomRHy1nTmtcv0c",
    width: 2160,
    height: 1200
  },
  {
    title: "flag-brazil-brazil-flag-home-independence-day-work.jpg",
    handle: "XbN3uUexT9KYnQ2SqpHC",
    width: 300,
    height: 200
  },
  {
    title: "hero-management.jpg",
    handle: "D3UaGvvGRUO1ihPm1o4F",
    width: 2160,
    height: 1200
  },
  {
    title: "hero-team.jpg",
    handle: "LTskWcFDTiOPAscm5vAq",
    width: 2160,
    height: 1200
  },
  {
    title: "hero-team-board.jpg",
    handle: "YdsYXVTT6qZ6X4FZiio1",
    width: 2160,
    height: 1200
  },
  {
    title: "office-new-york.jpg",
    handle: "IeeHcy0RCap83ZeemLS1",
    width: 2160,
    height: 477
  },
  {
    title: "office-placeholder.jpg",
    handle: "lHAeC4YMSQGbfsHsUMhc",
    width: 2160,
    height: 477
  },
  {
    title: "BPO Header:Hero.jpg",
    handle: "ivyw97S1yhbGElJFjYQT",
    width: 3872,
    height: 2592
  },
  {
    title: "00Right Text pic (Option2).jpeg",
    handle: "hf4juAs3Sku6hnVSZW1Z",
    width: 4256,
    height: 2832
  },
  {
    title: "01 HERO Sky.jpg",
    handle: "IsQtHSTGRs6dAjoS3RDA",
    width: 2667,
    height: 1500
  },
  {
    title: "02SKY 3.png",
    handle: "ouQo4GV5SGKfedDmRZ8U",
    width: 722,
    height: 542
  },
  {
    title: "marcus-wallis-473530-unsplash.jpg",
    handle: "HJ7X6ySQQ5ShWv48IMd4",
    width: 3399,
    height: 4598
  },
  {
    title: "bike-biker-clouds-53990.jpg",
    handle: "MGte5fSkTUCnPCuC85FA",
    width: 4272,
    height: 1120
  },
  {
    title: "fabio-ballasina-385482-unsplash.jpg",
    handle: "QtrFnP9pTvitFGErWtxJ",
    width: 4272,
    height: 2848
  },
  {
    title: "kyle-hinkson-502461-unsplash.jpg",
    handle: "pITZHIx1S9uDGnvXHMtl",
    width: 4032,
    height: 3024
  },
  {
    title: "woman-listening-to-music_4460x4460.jpg",
    handle: "G3kGCGUSSr64FWMYZgvM",
    width: 4460,
    height: 2968
  },
  {
    title: "woman-on-tablet-patio_4460x4460.jpg",
    handle: "qrVGF4b1ThSqQ6cCweof",
    width: 4460,
    height: 2973
  },
  {
    title: "Founding fathers 2.jpg",
    handle: "xADU4jgSMe2dtJkwU1hW",
    width: 3508,
    height: 2480
  },
  {
    title: "westworld-logo.png",
    handle: "yTArm6uDSRSFNMsp7K0D",
    width: 1650,
    height: 980
  },
  {
    title: "TinStar_S01_2000 (1).png",
    handle: "jXG3h0duRcagGydPr5Wt",
    width: 1650,
    height: 980
  },
  {
    title: "GV_14_SaveMe_S01-8362248.png",
    handle: "O7nZ7LHkRSyTuHk8RM1y",
    width: 1650,
    height: 980
  },
  {
    title: "Sky-Riviera-d9197eb.png",
    handle: "FwIOo7GShXWniK5F41ow",
    width: 1650,
    height: 980
  },
  {
    title: "marcus-wallis-473530-unsplash copy.jpg",
    handle: "Zwc6BrSAqiMz1Eg21zOw",
    width: 3399,
    height: 3602
  },
  {
    title: "01 HERO Sky.png",
    handle: "IYjMqm88SwemWzkz00QU",
    width: 2673,
    height: 1512
  },
  {
    title: "VIDEO IMAGE dark.png",
    handle: "dXmeFKnQf6UZMR2cIbfM",
    width: 785,
    height: 445
  },
  {
    title:
      "001-Afiniti-the-1.3-billion-algorithm-company-that-makes-a-call-center-more-humane.png",
    handle: "70T0KphKQFKeA31u3sbj",
    width: 914,
    height: 462
  },
  {
    title:
      "002-La-Tribune-interviews-Afiniti’s-GM-of-France-Jérôme-de-Castries.jpg",
    handle: "xyTs1MyRsyZKIjUQAc0g",
    width: 612,
    height: 306
  },
  {
    title:
      "003b-A-great-idea-doesn’t-thrive-without-a-good-team-behind-it-Afiniti-CEO-in-interview-with-Expansión.jpg",
    handle: "oY7gA2snSqKPwUS2j9WV",
    width: 546,
    height: 247
  },
  {
    title:
      "003a-A-great-idea-doesn’t-thrive-without-a-good-team-behind-it-Afiniti-CEO-in-interview-with-Expansión.jpg",
    handle: "PpgaZUMnQpughPyzBzQJ",
    width: 674,
    height: 420
  },
  {
    title: "team-advisory.jpg",
    handle: "kgdKxpUnR92cceW3fQsf",
    width: 2160,
    height: 1200
  },
  {
    title: "team-home.jpg",
    handle: "Wu8Zi7xCTlSemYcCjoBQ",
    width: 2160,
    height: 1200
  },
  {
    title: "team-directors.jpg",
    handle: "dbqoYyyR3qVyFmmNubWH",
    width: 2160,
    height: 1200
  },
  {
    title: "team-management.jpg",
    handle: "YGaMTkjShuIHQiF0tKoS",
    width: 2160,
    height: 1200
  },
  {
    title: "004-Época-NEGÓCIOS-interviews-our-CEO-Zia-Chishti.jpg",
    handle: "UfnnUe9ThuI6KxQ7LkL7",
    width: 2400,
    height: 3600
  },
  {
    title: "01 Halo TMO.jpg",
    handle: "msuYQ8RASbiE7J9itbYH",
    width: 2500,
    height: 1407
  },
  {
    title: "art-bright-close-up-158826.jpg",
    handle: "tt1SIfseS1qAlDv9rebw",
    width: 3872,
    height: 2592
  },
  {
    title: "woman-using-pink-smart-phone_4460x4460.jpg",
    handle: "GpS3DxDiSQS3SnHi6tOB",
    width: 4460,
    height: 2973
  },
  {
    title: "james-baldwin-560081-unsplash.jpg",
    handle: "NkFRkDNTmWBzLJ37QSAL",
    width: 6592,
    height: 4395
  },
  {
    title: "maxresdefault.jpg",
    handle: "FJvXjHV9S5qFOicbqi1n",
    width: 1280,
    height: 720
  },
  {
    title: "screen-shot-2017-02-02-at-11-41-17-am.png",
    handle: "GfTi8MSrTsS1csTAGjo7",
    width: 1199,
    height: 670
  },
  {
    title: "01-Justin-bieber-T-Mobile-ad-2017-a-billboard-1548.jpg",
    handle: "ML8VNMrbTPmyupuI6euS",
    width: 1548,
    height: 1024
  },
  {
    title: "woman-using-pink-smart-phone_4460x4460.jpg",
    handle: "j88VbXYT8C2r3hu0PTkg",
    width: 4460,
    height: 2973
  },
  {
    title: "justin-bieber-t-mobile-ad.jpg",
    handle: "l0hVyZOMTfWe0G11T73V",
    width: 620,
    height: 393
  },
  {
    title: "lego-bricks-pattern.jpg",
    handle: "MX5FtO74RTStYQxWdSDf",
    width: 5222,
    height: 3853
  },
  {
    title: "01 Halo Virgin.png",
    handle: "dQM5JP74T9iiNwKwXVAC",
    width: 1500,
    height: 1125
  },
  {
    title: "fibrebroadbandstrandsimagered-580x358.jpg",
    handle: "9jmO7YiuRzSSR2TqPHYe",
    width: 580,
    height: 358
  },
  {
    title: "streetcar-at-night_4460x4460.jpg",
    handle: "dtGxQteKTquHKdDcmzsM",
    width: 4460,
    height: 2974
  },
  {
    title: "01AT&T_preview-3.png",
    handle: "iT8iaWktSWm6j0zeLN1o",
    width: 4961,
    height: 3508
  },
  {
    title: "005-Afiniti-Taps-AI-to-Optimize-Customer-Agent-Pairing.jpg",
    handle: "twEdbpbFTle2BHbQh3Zi",
    width: 960,
    height: 640
  },
  {
    title:
      "006-Afiniti-Named-to-the-2018-AI-100-Highlighting-Advancements-in-Artificial-Intelligence-and-Enterprise-Solutions.jpg",
    handle: "Bf6ij8B4Qra9vfgbNOkD",
    width: 884,
    height: 646
  },
  {
    title:
      "007a-Zia-Chishti-shares-his-story-of-entrepreneurial-success-with-The-Express-Tribune.jpg",
    handle: "XlnDMARPQ521NGMhOoRe",
    width: 768,
    height: 649
  },
  {
    title:
      "008-Alonso-Aznar-La-inteligencia-artificial-va-a-cambiar-todas-las-industrias.jpg",
    handle: "rVmi8FOxQVittSX5SsVi",
    width: 660,
    height: 364
  },
  {
    title:
      "007b-Zia-Chishti-shares-his-story-of-entrepreneurial-success-with-The-Express-Tribune.jpg",
    handle: "W4gW76VrTVibCWFP6gCd",
    width: 768,
    height: 512
  },
  {
    title:
      "007c-Zia-Chishti-shares-his-story-of-entrepreneurial-success-with-The-Express-Tribune.jpg",
    handle: "UHGBsQSRSqcb3m0K5XVA",
    width: 768,
    height: 512
  },
  {
    title: "board-profile-3.jpg",
    handle: "7gxXEZS0OicE4sMeRyQF",
    width: 975,
    height: 1455
  },
  {
    title: "board-profile-2.jpg",
    handle: "GTw8DDE2RWWvmUtPtT40",
    width: 975,
    height: 1455
  },
  {
    title: "009-10-Best-Tech-Startups-in-Washington-D.C.jpg",
    handle: "QzYiXb4QwWbVfaVEqLo7",
    width: 768,
    height: 512
  },
  {
    title:
      "010-Afiniti-to-partner-with-Avaya-on-transformational-new-AI-initiative.jpg",
    handle: "ODgR8QgROG14AQxgKvlm",
    width: 1200,
    height: 628
  },
  {
    title:
      "011-Altitude-and-Afiniti-Partner-to-Optimize-Business-Results-with-Artificial-Intelligence-in-the-Contact-Center.jpg",
    handle: "6ygei0MBT1criHGKaQpf",
    width: 768,
    height: 512
  },
  {
    title:
      "012c-Tycoon-Takes-Investors-Heli-Skiing-to-Show-Them-Pakistan’s-Safe.jpg",
    handle: "DfqciTlLS6O7UzRGK5n8",
    width: 2209,
    height: 1308
  },
  {
    title:
      "012b-Tycoon-Takes-Investors-Heli-Skiing-to-Show-Them-Pakistan’s-Safe.jpg",
    handle: "04vjNLbRe6fyTQNJn9rw",
    width: 2120,
    height: 1254
  },
  {
    title:
      "012a-Tycoon-Takes-Investors-Heli-Skiing-to-Show-Them-Pakistan’s-Safe.jpg",
    handle: "8Fcnae6TviUNYFukIWsQ",
    width: 2222,
    height: 1481
  },
  {
    title: "013-Afiniti-signs-agreement-with-Huawei.png",
    handle: "YXSuIjaOQGuH11biWxVA",
    width: 2100,
    height: 1500
  },
  {
    title: "014-Artificial-intelligence-in-sales-10-companies-to-watch.jpg",
    handle: "WQQfzUTiyWzyHrO6g0zg",
    width: 1920,
    height: 1280
  },
  {
    title: "015-Robots-may-not-take-your-job-after-all-says-Forbes.jpg",
    handle: "QSER7SyKTsWJJfaH5rSA",
    width: 960,
    height: 640
  },
  {
    title: "Beatrice Headshot.jpg",
    handle: "7flrdiuYQM6hCetEPwCX",
    width: 884,
    height: 1024
  },
  {
    title: "Priya Sangameswaran Headshot.jpg",
    handle: "nrnMWZoaQD6eroB0Cwyq",
    width: 2400,
    height: 3000
  },
  {
    title: "tasja keetman.afiniti.zia finals.16-681.o10 copy.jpg",
    handle: "pboH0RufQ86JaZBva9eH",
    width: 1000,
    height: 1500
  },
  {
    title: "Liz Murdoch.jpeg",
    handle: "SkQGDkC6RMmXqWtAkSOS",
    width: 2048,
    height: 1152
  },
  {
    title: "Lord John Browne.jpg",
    handle: "qzz4gN8xTAeWO16PHxRY",
    width: 4000,
    height: 2667
  },
  {
    title: "Alex De Juniac 1.jpg",
    handle: "08WnXOnrSlOL0fWYuUc8",
    width: 1520,
    height: 855
  },
  {
    title: "Mike McMullen.jpg",
    handle: "DYlU9cBVRWO1Bmzng515",
    width: 1280,
    height: 960
  },
  {
    title: "Alex De Juniac.JPG",
    handle: "blv1emUpR3CNH3vc3ewl",
    width: 4265,
    height: 3165
  },
  {
    title: "local-office.jpg",
    handle: "uIGPIs9SS2i7VahxEGZL",
    width: 726,
    height: 459
  },
  {
    title: "01 HERO Sky.png",
    handle: "BO2c0oITpmFPa5gVTdS5",
    width: 2673,
    height: 1512
  },
  {
    title: "01 Halo TMO.jpg",
    handle: "3htYfmjcSSKE1ertTvxx",
    width: 2160,
    height: 1350
  },
  {
    title: "art-bright-close-up-158826.jpg",
    handle: "n4QA5zT5eoX2Qdrk2FUA",
    width: 795,
    height: 450
  },
  {
    title: "woman-using-pink-smart-phone_4460x4460.jpg",
    handle: "ytOP35vYSxaaElVoFrtb",
    width: 795,
    height: 450
  },
  {
    title: "01-Justin-bieber-T-Mobile-ad-2017-a-billboard-1548.jpg",
    handle: "ILMJcaW3SPWEfrxo4jzg",
    width: 1650,
    height: 980
  },
  {
    title: "maxresdefault.jpg",
    handle: "aRHzQeW2TrWpHBudAmGy",
    width: 1650,
    height: 980
  },
  {
    title: "screen-shot-2017-02-02-at-11-41-17-am.jpg",
    handle: "AVUpXX5MRBmfYDEQQZfX",
    width: 1650,
    height: 980
  },
  {
    title: "justin-bieber-t-mobile-ad.jpg",
    handle: "Sykc6rXgSfWhtdPPmE0M",
    width: 795,
    height: 450
  },
  {
    title: "01 Hero At&T.jpg",
    handle: "voTClVSny4LL6CK3uDQA",
    width: 2160,
    height: 1350
  },
  {
    title: "At&T China copy.jpg",
    handle: "qBRqparhQLqAbzqVUrh5",
    width: 1650,
    height: 980
  },
  {
    title: "john-robert-marasigan-238147.jpg",
    handle: "DWnrCGnqQLGeAufe60Jn",
    width: 795,
    height: 450
  },
  {
    title:
      "016-Our-CEO-talks-about-how-we-are-using-AI-to-create-results-in-the-hospitality-sector.jpg",
    handle: "V1poIwSRSiHLhLlHq5eQ",
    width: 1024,
    height: 604
  },
  {
    title: "rawpixel-com-256641.jpg",
    handle: "qG0ycA2uR8CONzMdsi6j",
    width: 795,
    height: 450
  },
  {
    title: "juja-han-456323.jpg",
    handle: "yxwgrjqUQwfNOm90p8Gl",
    width: 795,
    height: 450
  },
  {
    title: "Italy Left copy.jpg",
    handle: "ojlK7JTSqPl5OAY9epbA",
    width: 1650,
    height: 980
  },
  {
    title: "01 Halo Virgin.jpg",
    handle: "Ch0iHr9GRe6lMUOjzLgT",
    width: 2160,
    height: 1350
  },
  {
    title: "fibrebroadbandstrandsimagered-580x358.jpg",
    handle: "DvnJLj2KQaiBj3rorbpd",
    width: 795,
    height: 450
  },
  {
    title: "streetcar-at-night_4460x4460.jpg",
    handle: "e3MFf7zXS2m9msPztkN9",
    width: 795,
    height: 450
  },
  {
    title: "017-Newest-AI-Unicorn-Afiniti-Reportedly-Preparing-For-IPO.jpg",
    handle: "zTDWRqXRUtjQ6Z3f0bAL",
    width: 3164,
    height: 2373
  },
  {
    title: "caleb-george-352-unsplash.jpg",
    handle: "sT4rBLQN6A9BD3YXe1QI",
    width: 795,
    height: 450
  },
  {
    title: "shiro-hatori-258976-unsplash.jpg",
    handle: "wQoC975HTNTWkt16QNwy",
    width: 795,
    height: 450
  },
  {
    title: "richard-branson-brexit.jpg",
    handle: "Cl6xjPsuQaSjroKkC50Y",
    width: 1650,
    height: 980
  },
  {
    title: "virgin_media_broadband_0.jpg",
    handle: "U9c83qqRV6uuNVdDhz4w",
    width: 1650,
    height: 980
  },
  {
    title: "Sizing Done VM1.png",
    handle: "0SyMtyfpSLy6ZsTHoriZ",
    width: 1650,
    height: 980
  },
  {
    title: "017-Newest-AI-Unicorn-Afiniti-Reportedly-Preparing-For-IPO.jpg",
    handle: "vUOJNadcSHKkJYwMcWQK",
    width: 3164,
    height: 2373
  },
  {
    title:
      "018a-Sales-AI-company-Afiniti-valued-at-1.6-billion-files-for-IPO.jpg",
    handle: "4XIaXDHlQkSQbXR0W10Y",
    width: 1440,
    height: 1080
  },
  {
    title:
      "018b-Sales-AI-company-Afiniti-valued-at-1.6-billion-files-for-IPO.jpg",
    handle: "bTRmf6c0TBaFR9DhrVxt",
    width: 300,
    height: 200
  },
  {
    title:
      "019-We-are-excited-to-welcome-Wyatt-Roy-as-the-new-head-of-our-Australian-team-Welcome-to-Afiniti-Wyatt!.jpg",
    handle: "n60YkvF0QXCuNepcitBq",
    width: 596,
    height: 350
  }
];

class App extends Component {
  render() {
    return (
      <div className={"gallery"}>
        {data.map(item => (
          <Picture
            key={item.handle}
            handle={item.handle}
            className={"item"}
            objectFitMode
            width={item.width}
            alt={item.title}
          />
        ))}
      </div>
    );
  }
}

export default App;
