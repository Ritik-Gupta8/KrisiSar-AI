/**
 * Self-contained i18n for the landing page.
 * Real UI translations (not a translate widget) for the 5 supported languages.
 * The page keeps icons/colors/links in code and pulls text from here by index.
 */

export type Locale = "en" | "hi" | "mr" | "ta" | "te";

export const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "mr", label: "मराठी", flag: "🇮🇳" },
  { code: "ta", label: "தமிழ்", flag: "🇮🇳" },
  { code: "te", label: "తెలుగు", flag: "🇮🇳" },
];

export interface Item {
  title: string;
  desc: string;
}

export interface Copy {
  eyebrow: string;
  tagline: string;
  subtitle: string;
  getStarted: string;
  watchDemo: string;
  statLabels: [string, string, string, string];
  featuresHeading: string;
  features: Item[];
  problemHeading: string;
  problems: Item[];
  solutionHeading: string;
  solutions: Item[];
  techHeading: string;
  tech: Item[];
  ctaHeading: string;
  ctaSubtitle: string;
  ctaButton: string;
  footerTagline: string;
  footerPowered: string;
  live: string;
  comingSoon: string;
  docs: string;
}

export const COPY: Record<Locale, Copy> = {
  en: {
    eyebrow: "AI · Decision Intelligence Hackathon",
    tagline: "AI-Powered Farm Decision Intelligence",
    subtitle:
      "Stop guessing. Start deciding with confidence. One platform for every farming decision.",
    getStarted: "Get Started",
    watchDemo: "Watch Demo",
    statLabels: ["Farm records", "GPU speedup (RAPIDS)", "Google Cloud tools", "Languages (roadmap)"],
    featuresHeading: "Everything You Need in One Platform",
    features: [
      { title: "Crop Diagnosis", desc: "Upload a crop photo. Get instant disease detection and treatment, powered by Gemini Vision." },
      { title: "Farm Risk Score", desc: "Real-time risk assessment from 0 to 100. Know your farm's health in seconds." },
      { title: "Weather Intelligence", desc: "7-day forecast plus disease-risk prediction. Should you irrigate today? We tell you." },
      { title: "Ask KrisiSar", desc: "AI assistant for any farming question. Ask in natural language, get instant answers." },
      { title: "Government Schemes", desc: "Find schemes you're eligible for — PM-KISAN, insurance, loans — all in one place." },
      { title: "Analytics Dashboard", desc: "Disease trends and risk patterns from 500K records. Data-driven insights for better farming." },
    ],
    problemHeading: "The Problem We Solve",
    problems: [
      { title: "Fragmented Information", desc: "Weather apps, YouTube, WhatsApp groups, dealers — too many scattered sources." },
      { title: "Poor Decisions", desc: "Wrong pesticide timing. Over-irrigation. Missed diseases. Lost income." },
      { title: "Language Barriers", desc: "Most apps are English-only. Most farmers prefer their local language." },
      { title: "No Actionable Advice", desc: "Apps show data. Farmers need decisions: 'What should I do today?'" },
    ],
    solutionHeading: "The KrisiSar AI Solution",
    solutions: [
      { title: "One Platform", desc: "All information unified — Diagnosis, Weather, Risk, Schemes, and Chat." },
      { title: "Actionable Decisions", desc: "Not just data. Clear yes/no answers: 'Spray tomorrow morning.'" },
      { title: "Multilingual", desc: "Use the app in 5 Indian languages — switch anytime from the top of the page. Voice support is next." },
      { title: "Offline-First", desc: "Progressive Web App with cached data for low-connectivity areas — planned next." },
    ],
    techHeading: "Powered by Cutting-Edge Technology",
    tech: [
      { title: "Google Gemini", desc: "Gemini 2.5 for multimodal text and vision intelligence." },
      { title: "Multi-Agent Backend", desc: "Six specialized AI agents orchestrate every decision." },
      { title: "NVIDIA RAPIDS", desc: "22.58× average speedup on analytics with GPU acceleration (cuDF)." },
      { title: "BigQuery", desc: "500K-record analytics warehouse, queried in real time." },
      { title: "Looker Studio", desc: "Interactive dashboards built directly on BigQuery." },
      { title: "Next.js + FastAPI", desc: "Modern, fast, production-ready full-stack architecture." },
    ],
    ctaHeading: "Ready to Make Smarter Decisions?",
    ctaSubtitle: "Join the farmers using AI to increase yields and reduce losses.",
    ctaButton: "Get Started Free",
    footerTagline: "Built for the Google Gen AI Academy — Decision Intelligence Hackathon",
    footerPowered: "Powered by Google Gemini • NVIDIA RAPIDS • BigQuery • Looker",
    live: "Live",
    comingSoon: "Coming soon",
    docs: "Documentation",
  },

  hi: {
    eyebrow: "AI · डिसीज़न इंटेलिजेंस हैकाथॉन",
    tagline: "AI-संचालित कृषि निर्णय बुद्धिमत्ता",
    subtitle:
      "अनुमान लगाना बंद करें। आत्मविश्वास के साथ निर्णय लें। हर कृषि निर्णय के लिए एक मंच।",
    getStarted: "शुरू करें",
    watchDemo: "डेमो देखें",
    statLabels: ["कृषि रिकॉर्ड", "जीपीयू गति (RAPIDS)", "गूगल क्लाउड टूल्स", "भाषाएँ (रोडमैप)"],
    featuresHeading: "एक ही मंच पर वह सब जो आपको चाहिए",
    features: [
      { title: "फसल निदान", desc: "फसल की तस्वीर अपलोड करें। Gemini Vision से तुरंत रोग पहचान और उपचार पाएं।" },
      { title: "फार्म जोखिम स्कोर", desc: "0 से 100 तक रीयल-टाइम जोखिम आकलन। सेकंडों में अपने खेत की सेहत जानें।" },
      { title: "मौसम बुद्धिमत्ता", desc: "7-दिन का पूर्वानुमान और रोग-जोखिम भविष्यवाणी। आज सिंचाई करें या नहीं? हम बताते हैं।" },
      { title: "KrisiSar से पूछें", desc: "किसी भी कृषि प्रश्न के लिए AI सहायक। अपनी भाषा में पूछें, तुरंत उत्तर पाएं।" },
      { title: "सरकारी योजनाएँ", desc: "जिन योजनाओं के आप पात्र हैं उन्हें खोजें — पीएम-किसान, बीमा, ऋण — सब एक जगह।" },
      { title: "एनालिटिक्स डैशबोर्ड", desc: "500K रिकॉर्ड से रोग रुझान और जोखिम पैटर्न। बेहतर खेती के लिए डेटा-आधारित अंतर्दृष्टि।" },
    ],
    problemHeading: "जिस समस्या को हम हल करते हैं",
    problems: [
      { title: "बिखरी हुई जानकारी", desc: "मौसम ऐप, यूट्यूब, व्हाट्सएप समूह, विक्रेता — बहुत सारे बिखरे स्रोत।" },
      { title: "गलत निर्णय", desc: "गलत कीटनाशक समय। अधिक सिंचाई। छूटे हुए रोग। आय की हानि।" },
      { title: "भाषा की बाधाएँ", desc: "अधिकांश ऐप केवल अंग्रेज़ी में। अधिकांश किसान अपनी स्थानीय भाषा पसंद करते हैं।" },
      { title: "कोई व्यावहारिक सलाह नहीं", desc: "ऐप डेटा दिखाते हैं। किसानों को निर्णय चाहिए: 'आज मुझे क्या करना चाहिए?'" },
    ],
    solutionHeading: "KrisiSar AI समाधान",
    solutions: [
      { title: "एक मंच", desc: "सभी जानकारी एकीकृत — निदान, मौसम, जोखिम, योजनाएँ और चैट।" },
      { title: "व्यावहारिक निर्णय", desc: "सिर्फ डेटा नहीं। स्पष्ट हाँ/नहीं उत्तर: 'कल सुबह छिड़काव करें।'" },
      { title: "बहुभाषी", desc: "पेज के ऊपर से कभी भी 5 भारतीय भाषाओं में उपयोग करें। आवाज़ समर्थन अगला।" },
      { title: "ऑफ़लाइन-प्रथम", desc: "कम कनेक्टिविटी वाले क्षेत्रों के लिए कैश्ड डेटा के साथ प्रोग्रेसिव वेब ऐप — अगला नियोजित।" },
    ],
    techHeading: "अत्याधुनिक तकनीक द्वारा संचालित",
    tech: [
      { title: "Google Gemini", desc: "मल्टीमॉडल टेक्स्ट और विज़न बुद्धिमत्ता के लिए Gemini 2.5।" },
      { title: "मल्टी-एजेंट बैकएंड", desc: "छह विशेष AI एजेंट हर निर्णय का संचालन करते हैं।" },
      { title: "NVIDIA RAPIDS", desc: "जीपीयू त्वरण (cuDF) के साथ एनालिटिक्स पर औसतन 22.58× तेज़।" },
      { title: "BigQuery", desc: "500K-रिकॉर्ड एनालिटिक्स वेयरहाउस, रीयल-टाइम में क्वेरी।" },
      { title: "Looker Studio", desc: "सीधे BigQuery पर बने इंटरैक्टिव डैशबोर्ड।" },
      { title: "Next.js + FastAPI", desc: "आधुनिक, तेज़, उत्पादन-तैयार फुल-स्टैक आर्किटेक्चर।" },
    ],
    ctaHeading: "स्मार्ट निर्णय लेने के लिए तैयार हैं?",
    ctaSubtitle: "उपज बढ़ाने और नुकसान कम करने के लिए AI का उपयोग करने वाले किसानों से जुड़ें।",
    ctaButton: "मुफ़्त शुरू करें",
    footerTagline: "Google Gen AI Academy — Decision Intelligence Hackathon के लिए निर्मित",
    footerPowered: "संचालित: Google Gemini • NVIDIA RAPIDS • BigQuery • Looker",
    live: "लाइव",
    comingSoon: "जल्द आ रहा है",
    docs: "दस्तावेज़",
  },

  mr: {
    eyebrow: "AI · डिसिजन इंटेलिजन्स हॅकॅथॉन",
    tagline: "AI-आधारित शेती निर्णय बुद्धिमत्ता",
    subtitle:
      "अंदाज करणे थांबवा. आत्मविश्वासाने निर्णय घ्या. प्रत्येक शेती निर्णयासाठी एकच व्यासपीठ.",
    getStarted: "सुरू करा",
    watchDemo: "डेमो पहा",
    statLabels: ["शेती नोंदी", "जीपीयू वेग (RAPIDS)", "गूगल क्लाउड साधने", "भाषा (रोडमॅप)"],
    featuresHeading: "एकाच व्यासपीठावर आवश्यक ते सर्व",
    features: [
      { title: "पीक निदान", desc: "पिकाचा फोटो अपलोड करा. Gemini Vision कडून त्वरित रोग ओळख आणि उपचार मिळवा." },
      { title: "शेती जोखीम स्कोअर", desc: "0 ते 100 पर्यंत रिअल-टाइम जोखीम मूल्यांकन. काही सेकंदात तुमच्या शेताचे आरोग्य जाणून घ्या." },
      { title: "हवामान बुद्धिमत्ता", desc: "7-दिवसांचा अंदाज आणि रोग-जोखीम भाकीत. आज पाणी द्यावे का? आम्ही सांगतो." },
      { title: "KrisiSar ला विचारा", desc: "कोणत्याही शेती प्रश्नासाठी AI सहाय्यक. तुमच्या भाषेत विचारा, त्वरित उत्तर मिळवा." },
      { title: "सरकारी योजना", desc: "तुम्ही पात्र असलेल्या योजना शोधा — पीएम-किसान, विमा, कर्ज — सर्व एका ठिकाणी." },
      { title: "अ‍ॅनालिटिक्स डॅशबोर्ड", desc: "500K नोंदींमधून रोग कल आणि जोखीम नमुने. उत्तम शेतीसाठी डेटा-आधारित अंतर्दृष्टी." },
    ],
    problemHeading: "आम्ही सोडवत असलेली समस्या",
    problems: [
      { title: "विखुरलेली माहिती", desc: "हवामान अ‍ॅप्स, यूट्यूब, व्हॉट्सअ‍ॅप गट, विक्रेते — खूप विखुरलेले स्रोत." },
      { title: "चुकीचे निर्णय", desc: "चुकीची कीटकनाशक वेळ. अति सिंचन. चुकलेले रोग. उत्पन्नाचे नुकसान." },
      { title: "भाषेचे अडथळे", desc: "बहुतेक अ‍ॅप्स फक्त इंग्रजीत. बहुतेक शेतकरी त्यांची स्थानिक भाषा पसंत करतात." },
      { title: "कृतीयोग्य सल्ला नाही", desc: "अ‍ॅप्स डेटा दाखवतात. शेतकऱ्यांना निर्णय हवेत: 'आज मी काय करावे?'" },
    ],
    solutionHeading: "KrisiSar AI उपाय",
    solutions: [
      { title: "एकच व्यासपीठ", desc: "सर्व माहिती एकत्रित — निदान, हवामान, जोखीम, योजना आणि चॅट." },
      { title: "कृतीयोग्य निर्णय", desc: "फक्त डेटा नाही. स्पष्ट होय/नाही उत्तरे: 'उद्या सकाळी फवारणी करा.'" },
      { title: "बहुभाषिक", desc: "पेजच्या वरून कधीही 5 भारतीय भाषांमध्ये वापरा. आवाज समर्थन पुढील." },
      { title: "ऑफलाइन-प्रथम", desc: "कमी कनेक्टिव्हिटी भागांसाठी कॅश्ड डेटासह प्रोग्रेसिव्ह वेब अ‍ॅप — पुढील नियोजित." },
    ],
    techHeading: "अत्याधुनिक तंत्रज्ञानाने सज्ज",
    tech: [
      { title: "Google Gemini", desc: "मल्टीमॉडल मजकूर आणि व्हिजन बुद्धिमत्तेसाठी Gemini 2.5." },
      { title: "मल्टी-एजंट बॅकएंड", desc: "सहा विशेष AI एजंट प्रत्येक निर्णय हाताळतात." },
      { title: "NVIDIA RAPIDS", desc: "जीपीयू प्रवेग (cuDF) सह अ‍ॅनालिटिक्सवर सरासरी 22.58× वेगवान." },
      { title: "BigQuery", desc: "500K-नोंदी अ‍ॅनालिटिक्स वेअरहाऊस, रिअल-टाइममध्ये क्वेरी." },
      { title: "Looker Studio", desc: "थेट BigQuery वर तयार केलेले इंटरॅक्टिव्ह डॅशबोर्ड." },
      { title: "Next.js + FastAPI", desc: "आधुनिक, वेगवान, उत्पादन-सज्ज फुल-स्टॅक आर्किटेक्चर." },
    ],
    ctaHeading: "हुशार निर्णय घेण्यास तयार आहात?",
    ctaSubtitle: "उत्पादन वाढवण्यासाठी आणि नुकसान कमी करण्यासाठी AI वापरणाऱ्या शेतकऱ्यांमध्ये सामील व्हा.",
    ctaButton: "विनामूल्य सुरू करा",
    footerTagline: "Google Gen AI Academy — Decision Intelligence Hackathon साठी तयार",
    footerPowered: "समर्थित: Google Gemini • NVIDIA RAPIDS • BigQuery • Looker",
    live: "लाइव्ह",
    comingSoon: "लवकरच येत आहे",
    docs: "दस्तऐवज",
  },

  ta: {
    eyebrow: "AI · முடிவு நுண்ணறிவு ஹேக்கத்தான்",
    tagline: "AI சார்ந்த வேளாண் முடிவு நுண்ணறிவு",
    subtitle:
      "யூகிப்பதை நிறுத்துங்கள். நம்பிக்கையுடன் முடிவெடுங்கள். ஒவ்வொரு வேளாண் முடிவுக்கும் ஒரே தளம்.",
    getStarted: "தொடங்குங்கள்",
    watchDemo: "டெமோவைப் பார்க்கவும்",
    statLabels: ["வேளாண் பதிவுகள்", "GPU வேகம் (RAPIDS)", "Google Cloud கருவிகள்", "மொழிகள் (திட்டப்பணி)"],
    featuresHeading: "ஒரே தளத்தில் உங்களுக்குத் தேவையான அனைத்தும்",
    features: [
      { title: "பயிர் நோய் கண்டறிதல்", desc: "பயிர் புகைப்படத்தைப் பதிவேற்றவும். Gemini Vision மூலம் உடனடி நோய் கண்டறிதல் மற்றும் சிகிச்சை பெறவும்." },
      { title: "பண்ணை ஆபத்து மதிப்பெண்", desc: "0 முதல் 100 வரை நிகழ்நேர ஆபத்து மதிப்பீடு. நொடிகளில் உங்கள் பண்ணையின் ஆரோக்கியத்தை அறியவும்." },
      { title: "வானிலை நுண்ணறிவு", desc: "7-நாள் முன்னறிவிப்பு மற்றும் நோய்-ஆபத்து கணிப்பு. இன்று பாசனம் செய்யலாமா? நாங்கள் சொல்கிறோம்." },
      { title: "KrisiSar-ஐக் கேளுங்கள்", desc: "எந்த வேளாண் கேள்விக்கும் AI உதவியாளர். உங்கள் மொழியில் கேளுங்கள், உடனடி பதில் பெறுங்கள்." },
      { title: "அரசு திட்டங்கள்", desc: "நீங்கள் தகுதியுள்ள திட்டங்களைக் கண்டறியவும் — PM-KISAN, காப்பீடு, கடன் — அனைத்தும் ஒரே இடத்தில்." },
      { title: "பகுப்பாய்வு டாஷ்போர்டு", desc: "500K பதிவுகளிலிருந்து நோய் போக்குகள் மற்றும் ஆபத்து வடிவங்கள். சிறந்த வேளாண்மைக்கான தரவு சார்ந்த நுண்ணறிவு." },
    ],
    problemHeading: "நாங்கள் தீர்க்கும் பிரச்சனை",
    problems: [
      { title: "சிதறிய தகவல்", desc: "வானிலை செயலிகள், யூட்யூப், வாட்ஸ்அப் குழுக்கள், விற்பனையாளர்கள் — பல சிதறிய ஆதாரங்கள்." },
      { title: "தவறான முடிவுகள்", desc: "தவறான பூச்சிக்கொல்லி நேரம். அதிக பாசனம். தவறவிட்ட நோய்கள். வருமான இழப்பு." },
      { title: "மொழித் தடைகள்", desc: "பெரும்பாலான செயலிகள் ஆங்கிலத்தில் மட்டுமே. பெரும்பாலான விவசாயிகள் தங்கள் உள்ளூர் மொழியை விரும்புகிறார்கள்." },
      { title: "செயல்படுத்தக்கூடிய ஆலோசனை இல்லை", desc: "செயலிகள் தரவைக் காட்டுகின்றன. விவசாயிகளுக்கு முடிவுகள் தேவை: 'இன்று நான் என்ன செய்ய வேண்டும்?'" },
    ],
    solutionHeading: "KrisiSar AI தீர்வு",
    solutions: [
      { title: "ஒரே தளம்", desc: "அனைத்து தகவலும் ஒருங்கிணைக்கப்பட்டது — நோய் கண்டறிதல், வானிலை, ஆபத்து, திட்டங்கள் மற்றும் அரட்டை." },
      { title: "செயல்படுத்தக்கூடிய முடிவுகள்", desc: "வெறும் தரவு அல்ல. தெளிவான ஆம்/இல்லை பதில்கள்: 'நாளை காலை தெளிக்கவும்.'" },
      { title: "பன்மொழி", desc: "பக்கத்தின் மேலிருந்து எப்போது வேண்டுமானாலும் 5 இந்திய மொழிகளில் பயன்படுத்தவும். குரல் ஆதரவு அடுத்தது." },
      { title: "ஆஃப்லைன்-முதல்", desc: "குறைந்த இணைப்புள்ள பகுதிகளுக்கு தேக்ககப்பட்ட தரவுடன் Progressive Web App — அடுத்ததாக திட்டமிடப்பட்டுள்ளது." },
    ],
    techHeading: "அதிநவீன தொழில்நுட்பத்தால் இயக்கப்படுகிறது",
    tech: [
      { title: "Google Gemini", desc: "பன்முக உரை மற்றும் பார்வை நுண்ணறிவுக்கான Gemini 2.5." },
      { title: "மல்டி-ஏஜென்ட் பேக்கெண்ட்", desc: "ஆறு சிறப்பு AI ஏஜென்டுகள் ஒவ்வொரு முடிவையும் நிர்வகிக்கின்றன." },
      { title: "NVIDIA RAPIDS", desc: "GPU முடுக்கம் (cuDF) மூலம் பகுப்பாய்வில் சராசரியாக 22.58× வேகம்." },
      { title: "BigQuery", desc: "500K-பதிவு பகுப்பாய்வு கிடங்கு, நிகழ்நேரத்தில் வினவப்படுகிறது." },
      { title: "Looker Studio", desc: "நேரடியாக BigQuery மீது உருவாக்கப்பட்ட ஊடாடும் டாஷ்போர்டுகள்." },
      { title: "Next.js + FastAPI", desc: "நவீன, வேகமான, உற்பத்திக்குத் தயார் ஃபுல்-ஸ்டேக் கட்டமைப்பு." },
    ],
    ctaHeading: "புத்திசாலித்தனமான முடிவுகளை எடுக்கத் தயாரா?",
    ctaSubtitle: "விளைச்சலை அதிகரிக்கவும் இழப்புகளைக் குறைக்கவும் AI-ஐப் பயன்படுத்தும் விவசாயிகளுடன் இணையுங்கள்.",
    ctaButton: "இலவசமாகத் தொடங்குங்கள்",
    footerTagline: "Google Gen AI Academy — Decision Intelligence Hackathon-க்காக உருவாக்கப்பட்டது",
    footerPowered: "இயக்குபவை: Google Gemini • NVIDIA RAPIDS • BigQuery • Looker",
    live: "லைவ்",
    comingSoon: "விரைவில் வருகிறது",
    docs: "ஆவணங்கள்",
  },

  te: {
    eyebrow: "AI · నిర్ణయ విజ్ఞాన హ్యాకథాన్",
    tagline: "AI-ఆధారిత వ్యవసాయ నిర్ణయ విజ్ఞానం",
    subtitle:
      "ఊహించడం ఆపండి. నమ్మకంతో నిర్ణయించండి. ప్రతి వ్యవసాయ నిర్ణయానికి ఒకే వేదిక.",
    getStarted: "ప్రారంభించండి",
    watchDemo: "డెమో చూడండి",
    statLabels: ["వ్యవసాయ రికార్డులు", "GPU వేగం (RAPIDS)", "Google Cloud సాధనాలు", "భాషలు (రోడ్‌మ్యాప్)"],
    featuresHeading: "ఒకే వేదికపై మీకు కావలసినదంతా",
    features: [
      { title: "పంట నిర్ధారణ", desc: "పంట ఫోటోను అప్‌లోడ్ చేయండి. Gemini Vision ద్వారా తక్షణ వ్యాధి గుర్తింపు మరియు చికిత్స పొందండి." },
      { title: "వ్యవసాయ ప్రమాద స్కోరు", desc: "0 నుండి 100 వరకు రియల్-టైమ్ ప్రమాద అంచనా. సెకన్లలో మీ పొలం ఆరోగ్యాన్ని తెలుసుకోండి." },
      { title: "వాతావరణ విజ్ఞానం", desc: "7-రోజుల అంచనా మరియు వ్యాధి-ప్రమాద అంచనా. ఈరోజు నీరు పెట్టాలా? మేము చెబుతాము." },
      { title: "KrisiSar ను అడగండి", desc: "ఏ వ్యవసాయ ప్రశ్నకైనా AI సహాయకుడు. మీ భాషలో అడగండి, తక్షణ సమాధానం పొందండి." },
      { title: "ప్రభుత్వ పథకాలు", desc: "మీరు అర్హులైన పథకాలను కనుగొనండి — PM-KISAN, బీమా, రుణాలు — అన్నీ ఒకే చోట." },
      { title: "అనలిటిక్స్ డాష్‌బోర్డ్", desc: "500K రికార్డుల నుండి వ్యాధి ధోరణులు మరియు ప్రమాద నమూనాలు. మెరుగైన వ్యవసాయానికి డేటా-ఆధారిత అంతర్దృష్టులు." },
    ],
    problemHeading: "మేము పరిష్కరించే సమస్య",
    problems: [
      { title: "చెల్లాచెదురైన సమాచారం", desc: "వాతావరణ యాప్‌లు, యూట్యూబ్, వాట్సాప్ గ్రూపులు, డీలర్లు — చాలా చెల్లాచెదురైన మూలాలు." },
      { title: "తప్పు నిర్ణయాలు", desc: "తప్పు పురుగుమందు సమయం. అధిక నీటిపారుదల. తప్పిన వ్యాధులు. ఆదాయ నష్టం." },
      { title: "భాషా అడ్డంకులు", desc: "చాలా యాప్‌లు ఇంగ్లీష్‌లో మాత్రమే. చాలా మంది రైతులు తమ స్థానిక భాషను ఇష్టపడతారు." },
      { title: "ఆచరణాత్మక సలహా లేదు", desc: "యాప్‌లు డేటాను చూపుతాయి. రైతులకు నిర్ణయాలు కావాలి: 'ఈరోజు నేను ఏమి చేయాలి?'" },
    ],
    solutionHeading: "KrisiSar AI పరిష్కారం",
    solutions: [
      { title: "ఒకే వేదిక", desc: "మొత్తం సమాచారం ఏకీకృతం — నిర్ధారణ, వాతావరణం, ప్రమాదం, పథకాలు మరియు చాట్." },
      { title: "ఆచరణాత్మక నిర్ణయాలు", desc: "కేవలం డేటా కాదు. స్పష్టమైన అవును/కాదు సమాధానాలు: 'రేపు ఉదయం పిచికారీ చేయండి.'" },
      { title: "బహుభాషా", desc: "పేజీ పైభాగం నుండి ఎప్పుడైనా 5 భారతీయ భాషల్లో ఉపయోగించండి. వాయిస్ మద్దతు తదుపరి." },
      { title: "ఆఫ్‌లైన్-ఫస్ట్", desc: "తక్కువ కనెక్టివిటీ ప్రాంతాలకు కాష్ చేసిన డేటాతో ప్రోగ్రెసివ్ వెబ్ యాప్ — తదుపరి ప్రణాళిక." },
    ],
    techHeading: "అత్యాధునిక సాంకేతికతతో నడుస్తుంది",
    tech: [
      { title: "Google Gemini", desc: "బహుళరూప టెక్స్ట్ మరియు విజన్ విజ్ఞానం కోసం Gemini 2.5." },
      { title: "మల్టీ-ఏజెంట్ బ్యాకెండ్", desc: "ఆరు ప్రత్యేక AI ఏజెంట్లు ప్రతి నిర్ణయాన్ని నిర్వహిస్తాయి." },
      { title: "NVIDIA RAPIDS", desc: "GPU త్వరణం (cuDF) తో అనలిటిక్స్‌పై సగటున 22.58× వేగం." },
      { title: "BigQuery", desc: "500K-రికార్డ్ అనలిటిక్స్ వేర్‌హౌస్, రియల్-టైమ్‌లో ప్రశ్నించబడుతుంది." },
      { title: "Looker Studio", desc: "నేరుగా BigQuery పై నిర్మించిన ఇంటరాక్టివ్ డాష్‌బోర్డ్‌లు." },
      { title: "Next.js + FastAPI", desc: "ఆధునిక, వేగవంతమైన, ఉత్పత్తికి సిద్ధమైన ఫుల్-స్టాక్ ఆర్కిటెక్చర్." },
    ],
    ctaHeading: "తెలివైన నిర్ణయాలు తీసుకోవడానికి సిద్ధంగా ఉన్నారా?",
    ctaSubtitle: "దిగుబడిని పెంచడానికి మరియు నష్టాలను తగ్గించడానికి AI ను ఉపయోగించే రైతులతో చేరండి.",
    ctaButton: "ఉచితంగా ప్రారంభించండి",
    footerTagline: "Google Gen AI Academy — Decision Intelligence Hackathon కోసం రూపొందించబడింది",
    footerPowered: "శక్తినిచ్చేవి: Google Gemini • NVIDIA RAPIDS • BigQuery • Looker",
    live: "లైవ్",
    comingSoon: "త్వరలో వస్తుంది",
    docs: "డాక్యుమెంటేషన్",
  },
};
