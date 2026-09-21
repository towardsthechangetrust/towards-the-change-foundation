export type Language = "en" | "ta";

export const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navPrograms: "Programs",
    navGallery: "Gallery",
    navDonate: "Support Us",
    navContact: "Contact",
    navGetInvolved: "Get involved",
    navVolunteer: "Volunteer with us",
    navDonateButton: "Donate",

    // Tagline & Hero
    tagline: "A step towards humanity",
    heroHeading: "A step towards humanity, one community at a time.",
    heroSubheading:
      "Towards the Change Foundation is a youth-led movement working on health, safety, education and livelihoods across Tamil Nadu. It is built on the idea that lasting change comes from small, consistent steps.",
    heroLocationBadge: "Based in Salem, Tamil Nadu · since 2021",
    heroOurStory: "Our story",

    // Recognition
    recognitionBadge: "Recognition",
    recognitionTitle: "Chief Minister's Youth Award, 2026",
    recognitionText:
      "In 2026, the Government of Tamil Nadu recognised our founder, Nirmal Kathirvel, with the Chief Minister's Youth Award for youth-led social innovation and community empowerment across the state.",

    // Focus Areas Section
    focusTitle: "Where we show up",
    focusSubtitle: "Six focus areas, one aim: communities that can stand on their own.",

    // Journey
    journeyTitle: "Every step has taken us further",
    journeySubtitle: "A small, steady trail of work rather than one giant leap.",

    // CTA
    ctaTitle: "Take the next step with us",
    ctaSubtitle:
      "Whether it's volunteering a weekend, partnering as an organisation, or spreading the word, every step counts.",
    ctaButton: "Get in touch",

    // Footer
    footerSite: "Site",
    footerReach: "Reach us",
    footerRights: "All rights reserved.",
  },
  ta: {
    // Navigation
    navAbout: "எங்களைப் பற்றி",
    navPrograms: "திட்டங்கள்",
    navGallery: "புகைப்படங்கள்",
    navDonate: "ஆதரவளிக்க",
    navContact: "தொடர்புக்கு",
    navGetInvolved: "இணையுங்கள்",
    navVolunteer: "தன்னார்வலராக இணையுங்கள்",
    navDonateButton: "நன்கொடை",

    // Tagline & Hero
    tagline: "மனிதத்தை நோக்கி ஒரு படி",
    heroHeading: "மனிதத்தை நோக்கி ஒரு படி, ஒவ்வொரு சமூகமாக.",
    heroSubheading:
      "டுவர்ட்ஸ் தி சேஞ்ச் பவுண்டேஷன் என்பது தமிழ்நாடு முழுவதும் சுகாதாரம், பாதுகாப்பு, கல்வி மற்றும் வாழ்வாதாரங்களில் பணியாற்றும் இளைஞர்களால் வழிநடத்தப்படும் இயக்கமாகும். நிலையான மாற்றம் சிறிய, தொடர்ச்சியான அடிகளிலிருந்து வருகிறது.",
    heroLocationBadge: "சேலம், தமிழ்நாடு · 2021 முதல்",
    heroOurStory: "எங்கள் பயணம்",

    // Recognition
    recognitionBadge: "அங்கீகாரம்",
    recognitionTitle: "முதலமைச்சர் இளைஞர் விருது, 2026",
    recognitionText:
      "2026-ஆம் ஆண்டில், இளைஞர் தலைமையிலான சமூக விழிப்புணர்வு மற்றும் மக்கள் மேம்பாட்டுப் பணிகளுக்காக, நமது நிறுவனர் நிர்மல் கதிர்வேல் அவர்களுக்கு தமிழ்நாடு அரசால் முதலமைச்சர் இளைஞர் விருது வழங்கப்பட்டது.",

    // Focus Areas Section
    focusTitle: "எங்கள் சேவை களங்கள்",
    focusSubtitle: "ஆறு முக்கிய துறைகள், ஒரே நோக்கம்: தற்சார்பு கொண்ட சமூகங்கள்.",

    // Journey
    journeyTitle: "ஒவ்வொரு அடியும் எங்களை முன்னோக்கி நகர்த்தியுள்ளது",
    journeySubtitle: "ஒரே பெரிய பாய்ச்சலுக்குப் பதிலாக, தொடர்ச்சியான நிலையான களப்பணி.",

    // CTA
    ctaTitle: "எங்களுடன் அடுத்த அடியை எடுத்து வையுங்கள்",
    ctaSubtitle:
      "வார இறுதியில் தன்னார்வத் தொண்டு செய்தல், அமைப்பாக இணைதல் அல்லது விழிப்புணர்வை பரப்புதல் என ஒவ்வொரு முயற்சியும் முக்கியமானது.",
    ctaButton: "தொடர்பு கொள்ள",

    // Footer
    footerSite: "பக்கங்கள்",
    footerReach: "முகவரி & தொடர்பு",
    footerRights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
