/* =============================================================
   PROFILE / BIO / HONORS / SERVICE
   Edit this file to update your header, bio, honors, and service.
   After editing, commit + push — the site updates automatically.
   ============================================================= */
window.SITE = window.SITE || {};

SITE.profile = {
  name: "Ishan G. Thakkar, Ph.D.",
  title: "Endowed Reese S. Terry Professor · Associate Professor",
  dept: "Department of Electrical and Computer Engineering",
  org: "University of Kentucky, Lexington, KY",
  lab: "Director, Unconventional Computing Architectures and Technologies (UCAT) Laboratory",
  thesis: "Designing unconventional (more-than-Moore) architectures and technologies for energy-efficient, sustainable, reliable, and secure computing — from silicon photonics and in-memory computing to neuromorphic hardware.",
  office: "215 Davis Marksbury Building, 329 Rose St, Lexington, KY 40508",
  phone: "+1 (859) 323-8424",
  email: "igthakkar@uky.edu",
  photo: "assets/img/profile.jpg", // drop a headshot here (falls back to a monogram)
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=UQNt-S8AAAAJ&hl=en" },
    { label: "DBLP",           url: "https://dblp.org/search?q=Ishan+Thakkar" },
    { label: "CV (PDF)",       url: "assets/Thakkar_CV.pdf" },
    { label: "UCAT Lab",       url: "https://github.com/uky-UCAT" },
    { label: "Email",          url: "mailto:igthakkar@uky.edu" }
  ],
  // Short bio shown on the home page (each string is a paragraph)
  bio: [
    "Ishan Thakkar is an Associate Professor endowed with the Reese S. Terry Professorship in the Department of Electrical and Computer Engineering at the University of Kentucky, Lexington, KY. He is the Director of the Unconventional Computing Architectures and Technologies (UCAT) Laboratory.",
    "He received his Ph.D. and M.S. in Electrical Engineering from Colorado State University (CSU), Fort Collins, CO, where he was a member of the Embedded Systems and High-Performance Computing (EPiC) Laboratory. His research broadly focuses on designing and optimizing unconventional (more-than-Moore) architectures and technologies for energy-efficient, reliable, and secure computing across embedded systems, the internet-of-things (IoT), and high-performance computing."
  ]
};

// Research-interest keywords (home page chips)
SITE.interests = [
  "Silicon photonics", "Optical computing", "Neuromorphic computing",
  "In-memory computing", "Stochastic computing", "Monolithic 3D (M3D) integration",
  "Photonic devices & sensors", "Manycore hardware security", "Sustainable computing"
];

// Selected honors (most recent first). Edit freely.
SITE.honors = [
  { year: "2025", text: "NSF CAREER Award — sustainable computing with reconfigurable, multifunctional integrated electro-photonic hardware (2025–2029)." },
  { year: "2025", text: "Reese S. Terry Professorship, Pigman College of Engineering (2025–2030)." },
  { year: "2026", text: "Best Paper Award Nomination, IEEE Optical Interconnects and Packaging (OIP) Conference." },
  { year: "2024", text: "Robley D. Evans Faculty Fellowship in Electrical Engineering (2024–2025)." },
  { year: "2022", text: "Outstanding Reviewer Award, IEEE/ACM CODES+ISSS at ESWEEK." },
  { year: "2021", text: "Best Paper Award, ACM GLSVLSI; Best Paper Finalist, IEEE ISVLSI." },
  { year: "2020", text: "Best Paper Award Honorary Selection, ACM GLSVLSI." },
  { year: "2016", text: "Best Paper Award, ACM SLIP; Best Paper Finalist, IEEE ISQED." },
  { year: "—",    text: "Four Best Poster Awards to UCAT students at the UKY ECE Research Symposia." }
];

// Selected service. Edit freely.
SITE.service = [
  "Associate Editor, ACM Transactions on Embedded Computing Systems (TECS), 2026–.",
  "Associate Editor, IEEE Transactions on Sustainable Computing (TSUSC), 2025–.",
  "Guest Editor, Elsevier Memories (Special Issue: Memory Technologies for HPC/AI Workloads), 2024–.",
  "Social Media Co-Chair, ACM SIGDA Executive Committee, 2021–.",
  "Program Chair, IEEE iSES 2024; General Chair, Workshop on Computing with Unconventional Technologies (CUT), 2019 & 2020.",
  "Track Chair (ML/AI for VLSI), ACM GLSVLSI 2025 & 2026; Track Chair, IEEE VLSID 2026.",
  "40+ Technical Program Committees (DAC, CODES+ISSS, NOCS, GLSVLSI, ISQED, DATE, RTAS, IGSC, VLSID) and NSF/DOE proposal review panels."
];
