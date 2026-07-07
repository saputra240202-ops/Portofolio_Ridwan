export interface Project {
  title: string;
  description: { en: string; id: string };
  tags: string[];
  image: string;
  link: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  colorClass: string;
  category: string;
}

export interface SkillCategoryMeta {
  key: string;
  label: { en: string; id: string };
  emoji: string;
}

export interface Experience {
  title: { en: string; id: string };
  company: string;
  period: { en: string; id: string };
  description: { en: string[]; id: string[] };
  color: string;
}

export interface Education {
  institution: string;
  degree: { en: string; id: string };
  period: string;
  focusAreas: { en: string[]; id: string[] };
}

export const personalInfo = {
  name: "Ridwan Saputra",
  firstName: "Ridwan",
  lastName: "Saputra",
  brand: "Ridwan.Dev",
  title: {
    en: "Junior Web Developer & AI Enthusiast",
    id: "Pengembang Web Junior & Penggiat AI",
  },
  location: "Jakarta, Indonesia",
  email: "saputra.240202@gmail.com",
  phone: "+62 857 1895 5979",
  bio: {
    en: "I am a Junior Web Developer passionate about building modern, responsive, and user-friendly web applications. I leverage AI-powered development tools to improve productivity while ensuring I fully understand and maintain every line of code I build. I continuously learn new technologies and also have practical experience in IT Support, including hardware troubleshooting, networking, and system maintenance.",
    id: "Saya adalah seorang Junior Web Developer yang berfokus pada pengembangan aplikasi web modern, responsif, dan ramah pengguna. Saya memanfaatkan alat pengembangan berbasis AI untuk meningkatkan produktivitas, sambil tetap memastikan setiap baris kode yang saya buat saya pahami dan pelihara dengan baik. Saya terus mempelajari teknologi baru serta memiliki pengalaman praktis di bidang IT Support, termasuk troubleshooting hardware, jaringan, dan pemeliharaan sistem."
  },
  aboutBio: {
    en: [
      "I am a Web Developer passionate about building modern, responsive, and user-focused web applications using React.js, Next.js, Laravel, and MySQL. I leverage AI-powered development tools to enhance productivity and streamline development while ensuring every solution is fully understood, reviewed, and maintainable.",
      "I enjoy learning new technologies and continuously improving my skills to build clean, scalable, and reliable applications. Alongside web development, I have hands-on experience in IT Support, including hardware and software troubleshooting, network configuration, system maintenance, and delivering reliable technical support.",
    ],
    id: [
      "Saya adalah seorang Web Developer yang berfokus pada pengembangan aplikasi web modern, responsif, dan berorientasi pada kebutuhan pengguna menggunakan React.js, Next.js, Laravel, dan MySQL. Saya memanfaatkan alat pengembangan berbasis AI untuk meningkatkan produktivitas dan mempercepat proses pengembangan, sambil tetap memastikan setiap solusi yang saya bangun dipahami, ditinjau, dan mudah dipelihara.",
      "Saya senang mempelajari teknologi baru dan terus mengembangkan kemampuan untuk membangun aplikasi yang bersih, skalabel, dan andal. Selain pengembangan web, saya juga memiliki pengalaman praktis di bidang IT Support, termasuk troubleshooting hardware dan software, konfigurasi jaringan, pemeliharaan sistem, serta memberikan dukungan teknis yang andal.",
    ],
  },
  typingWords: {
    en: ["AI Coding Assistant", "Junior Web Developer", "IT Support"],
    id: ["Asisten Coding AI", "Pengembang Web Junior", "Dukungan IT"],
  },
  social: {
    github: "https://github.com/saputra240202-ops",
    linkedin: "https://www.linkedin.com/in/ridwan-saputra-8a7a3a2a7",
    instagram: "https://www.instagram.com/_rdwnnn.24_/",
  },
  cvPath: "/Ridwan_CV_NEW.pdf",
  formspreeEndpoint: "https://formspree.io/f/mlgpnakb",
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "html5", colorClass: "text-orange-500", category: "Frontend" },
  { name: "CSS3", icon: "css3", colorClass: "text-blue-500", category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: "javascript", colorClass: "text-yellow-400", category: "Frontend" },
  { name: "React.js", icon: "react", colorClass: "text-cyan-400", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", colorClass: "text-slate-900 dark:text-white", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", colorClass: "text-teal-400", category: "Frontend" },
  { name: "Bootstrap", icon: "bootstrap", colorClass: "text-purple-500", category: "Frontend" },
  // Backend
  { name: "Laravel", icon: "laravel", colorClass: "text-red-500", category: "Backend" },
  // Database
  { name: "MySQL", icon: "mysql", colorClass: "text-blue-600", category: "Database" },
  // Desktop
  { name: "Python", icon: "python", colorClass: "text-yellow-500", category: "Desktop" },
  // Tools
  { name: "GitHub", icon: "github", colorClass: "text-slate-800 dark:text-slate-200", category: "Tools" },
  { name: "Visual Studio Code", icon: "vscode", colorClass: "text-blue-500", category: "Tools" },
  { name: "AntiGravity", icon: "antigravity", colorClass: "text-indigo-500", category: "Tools" },
];

export const skillCategories: SkillCategoryMeta[] = [
  { key: "Frontend", label: { en: "Frontend", id: "Frontend" }, emoji: "🎨" },
  { key: "Backend", label: { en: "Backend", id: "Backend" }, emoji: "⚙️" },
  { key: "Database", label: { en: "Database", id: "Database" }, emoji: "🗄️" },
  { key: "Desktop", label: { en: "Desktop", id: "Desktop" }, emoji: "🖥️" },
  { key: "Tools", label: { en: "Tools & Workflow", id: "Alat & Workflow" }, emoji: "🛠️" },
];

export const projects: Project[] = [
  {
    title: "School Payments",
    description: {
      en: "To automatically record payments, track students, payment status, and generate school financial reports.",
      id: "Sistem otomatis untuk mencatat pembayaran, melacak status siswa dan pembayaran, serta membuat laporan keuangan sekolah.",
    },
    tags: ["Laravel", "Tailwind", "Chart.js"],
    image: "/projects/dashboard-admin.jpg",
    link: "https://github.com/saputra240202-ops/PembayaranSekolah.git",
    category: "Laravel",
  },
  {
    title: "Mosque Financial Dashboard",
    description: {
      en: "A web-based financial management system to digitize mosque cash flows. Features income/expense tracking, automated reporting, and real-time dashboard visualization.",
      id: "Sistem manajemen keuangan berbasis web untuk mendigitalisasi arus kas masjid. Memiliki fitur pelacakan pemasukan/pengeluaran, pelaporan otomatis, dan visualisasi dashboard real-time.",
    },
    tags: ["Laravel", "Tailwind", "Chart.js"],
    image: "/projects/dashboard-masjid.jpeg",
    link: "https://github.com/saputra240202-ops/Dashboard-Masjid.git",
    category: "Laravel",
  },
  {
    title: "Overtime Reporting System Website",
    description: {
      en: "Make a website-based overtime request system to facilitate employees in making overtime requests and facilitate human resources in approving overtime requests.",
      id: "Sistem permintaan lembur berbasis website yang memfasilitasi karyawan dalam mengajukan lembur serta memudahkan divisi HR dalam menyetujui permintaan lembur.",
    },
    tags: ["Laravel", "Tailwind", "Chart.js"],
    image: "/projects/Dashboard_Admin_Lembur.png",
    link: "https://github.com/saputra240202-ops/SistemLaporanLembur.git",
    category: "Laravel",
  },
  {
    title: "Website Berita Negara RI",
    description: {
      en: "Re-design the front-end website of the Berita Negara RI.",
      id: "Merancang ulang bagian front-end dari website Berita Negara Republik Indonesia (BNRI).",
    },
    tags: ["React", "Typescript", "Tailwind CSS"],
    image: "/projects/BNRI-FrontEnd.jpeg",
    link: "https://github.com/saputra240202-ops/BNRI-Frontend.git",
    category: "React",
  },
  {
    title: "Document Verification Program (Desktop)",
    description: {
      en: "A desktop application for verifying and extracting data between SK and Notary Deeds.",
      id: "Aplikasi desktop untuk memverifikasi dan mengekstrak data antara SK dan Akta Notaris.",
    },
    tags: ["Python", "PySide6", "SQLite3"],
    image: "/projects/BNTBN.png",
    link: "https://github.com/saputra240202-ops/BNTBN.git",
    category: "Python",
  },
  {
    title: "FinanceApp - Website Budget Tracking",
    description: {
      en: "FinanceApp is a modern financial management app designed to help users track their budget, savings, and daily expenses in real-time.",
      id: "FinanceApp adalah aplikasi manajemen keuangan modern yang dirancang untuk membantu pengguna melacak anggaran, tabungan, dan pengeluaran harian secara real-time.",
    },
    tags: ["Laravel", "Vue.js", "Tailwind"],
    image: "/projects/budget-tracking.jpeg",
    link: "https://github.com/saputra240202-ops/Website-Budget-Tracking.git",
    category: "Vue",
  },
];

export const experiences: Experience[] = [
  {
    title: {
      en: "Staff IT Intern",
      id: "Magang Staf IT",
    },
    company: "Perum Percetakan Negara Republik Indonesia (PNRI)",
    period: {
      en: "November 2025 - May 2026",
      id: "November 2025 - Mei 2026",
    },
    description: {
      en: [
        "Troubleshooting hardware in a PNRI",
        "Assisting internal tool development using AI-assisted coding",
        "Prototyping and debugging",
      ],
      id: [
        "Memperbaiki masalah perangkat keras di lingkungan PNRI",
        "Membantu pengembangan tool internal menggunakan pemrograman berbantuan AI",
        "Membuat purwarupa (prototyping) dan melakukan debugging kode",
      ],
    },
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: {
      en: "Administrative Staff",
      id: "Staf Administrasi",
    },
    company: "SMA GIKI 2 JAKARTA",
    period: {
      en: "September 2025 - November 2025",
      id: "September 2025 - November 2025",
    },
    description: {
      en: [
        "Handled school correspondence and document archiving",
        "Maintained student data and teacher records",
        "Prepared official documents and formal reports",
        "Managed petty cash records and expense tracking",
      ],
      id: [
        "Menangani surat-menyurat sekolah dan pengarsipan dokumen",
        "Memelihara data siswa dan catatan guru",
        "Menyiapkan dokumen resmi dan laporan formal",
        "Mengelola catatan kas kecil dan melacak pengeluaran",
      ],
    },
    color: "from-violet-500 to-purple-500",
  },
  {
    title: {
      en: "IT Support Intern",
      id: "Magang IT Support",
    },
    company: "Badan Pemeriksa Keuangan Republik Indonesia (BPK)",
    period: {
      en: "February 2024 - June 2024",
      id: "Februari 2024 - Juni 2024",
    },
    description: {
      en: [
        "Delivered frontline IT support to auditors and government personnel",
        "Hardware troubleshooting within BPK",
        "Software installation and configuration",
      ],
      id: [
        "Memberikan dukungan IT langsung kepada auditor dan personel pemerintah",
        "Memperbaiki masalah perangkat keras di lingkungan BPK",
        "Melakukan instalasi dan konfigurasi perangkat lunak",
      ],
    },
    color: "from-pink-500 to-rose-500",
  },
  {
    title: {
      en: "IT Support Intern",
      id: "Magang IT Support",
    },
    company: "Badan Perencanaan Pembangunan Nasional (Bappenas)",
    period: {
      en: "January 2019 - March 2019",
      id: "Januari 2019 - Maret 2019",
    },
    description: {
      en: [
        "Support IT operations within Bappenas",
        "Hardware maintenance",
        "Basic networking support",
      ],
      id: [
        "Mendukung operasional IT di dalam lingkungan Bappenas",
        "Pemeliharaan perangkat keras",
        "Memberikan dukungan dasar jaringan",
      ],
    },
    color: "from-amber-500 to-orange-500",
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Bina Sarana Informatika",
    degree: {
      en: "Bachelor of Information Systems",
      id: "S1 Sistem Informasi",
    },
    period: "2021 – 2025",
    focusAreas: {
      en: ["Database Systems", "Web Development", "AI-Assisted Development"],
      id: ["Sistem Basis Data", "Pengembangan Web", "Pengembangan Berbantuan AI"],
    },
  },
  {
    institution: "SMK Muhammadiyah 1 Jakarta",
    degree: {
      en: "Computer & Network Engineering",
      id: "Teknik Komputer & Jaringan (TKJ)",
    },
    period: "2017 – 2020",
    focusAreas: {
      en: [],
      id: [],
    },
  },
];

export const navLinks = {
  en: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  id: [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Kontak", href: "#contact" },
  ],
};

export const aboutFeatures = {
  en: [
    {
      icon: "Code",
      title: "Clean Code",
      description: "Structured & optimized",
      color: "text-indigo-500 bg-indigo-500/10",
    },
    {
      icon: "Palette",
      title: "Modern UI",
      description: "Pixel perfect design",
      color: "text-violet-500 bg-violet-500/10",
    },
    {
      icon: "Rocket",
      title: "Fast Perf.",
      description: "Lightning fast load",
      color: "text-pink-500 bg-pink-500/10",
    },
    {
      icon: "Smartphone",
      title: "Responsive",
      description: "Mobile first layout",
      color: "text-emerald-500 bg-emerald-500/10",
    },
  ],
  id: [
    {
      icon: "Code",
      title: "Kode Bersih",
      description: "Terstruktur & optimal",
      color: "text-indigo-500 bg-indigo-500/10",
    },
    {
      icon: "Palette",
      title: "UI Modern",
      description: "Desain presisi tinggi",
      color: "text-violet-500 bg-violet-500/10",
    },
    {
      icon: "Rocket",
      title: "Performa Cepat",
      description: "Waktu muat secepat kilat",
      color: "text-pink-500 bg-pink-500/10",
    },
    {
      icon: "Smartphone",
      title: "Responsif",
      description: "Layout ramah perangkat mobile",
      color: "text-emerald-500 bg-emerald-500/10",
    },
  ],
};

export const sectionTranslations = {
  en: {
    hero: {
      greeting: "Hi, I am",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
      scrollDown: "Scroll Down",
    },
    about: {
      subtitle: "About Me",
      title: "Know Who",
      gradientWord: "I Am",
    },
    skills: {
      subtitle: "My Skills",
      title: "What I",
      gradientWord: "Do Best",
    },
    projects: {
      subtitle: "My Portfolio",
      title: "Featured",
      gradientWord: "Projects",
      all: "All",
      viewProject: "View Project",
    },
    experience: {
      subtitle: "My Journey",
      title: "Work",
      gradientWord: "Experience",
      education: "Education",
    },
    contact: {
      subtitle: "Get In Touch",
      title: "Let's Work",
      gradientWord: "Together",
      description: "Have a project in mind or just want to say hi? Feel free to reach out. I'll get back to you as soon as possible!",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
      },
    },
    footer: {
      copyright: "All rights reserved.",
      madeWith: "Made with",
      by: "by",
    }
  },
  id: {
    hero: {
      greeting: "Halo, Saya",
      downloadCv: "Unduh CV",
      contactMe: "Hubungi Saya",
      scrollDown: "Gulir ke Bawah",
    },
    about: {
      subtitle: "Tentang Saya",
      title: "Kenali Siapa",
      gradientWord: "Saya",
    },
    skills: {
      subtitle: "Keahlian Saya",
      title: "Apa yang",
      gradientWord: "Saya Kuasai",
    },
    projects: {
      subtitle: "Portofolio Saya",
      title: "Proyek",
      gradientWord: "Pilihan",
      all: "Semua",
      viewProject: "Lihat Proyek",
    },
    experience: {
      subtitle: "Perjalanan Saya",
      title: "Pengalaman",
      gradientWord: "Kerja",
      education: "Pendidikan",
    },
    contact: {
      subtitle: "Hubungi Saya",
      title: "Mari Bekerja",
      gradientWord: "Sama",
      description: "Ada proyek yang ingin didiskusikan atau sekadar ingin menyapa? Jangan ragu untuk menghubungi. Saya akan membalas secepatnya!",
      form: {
        name: "Nama Anda",
        email: "Email Anda",
        subject: "Subjek",
        message: "Pesan",
        send: "Kirim Pesan",
        sending: "Mengirim...",
      },
    },
    footer: {
      copyright: "Hak cipta dilindungi.",
      madeWith: "Dibuat dengan",
      by: "oleh",
    }
  }
};
