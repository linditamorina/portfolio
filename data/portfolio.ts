// data/portfolio.ts

export const personalInfo = {
  name: "Lindita Morina",
  title: {
    en: "Software Engineer & Web Developer",
    al: "Inxhiniere Softuerike & Zhvilluese Web",
    tr: "Yazılım Mühendisi & Web Geliştirici"
  },
  email: "linditamorinna@gmail.com",
  github: "https://github.com/linditamorina",
  phone: "+383 45 883 994",
  location: "Mitrovice, Kosovo",
  about: {
    en: "Final-year Computer Science and Engineering student focused on web and application development. Experienced in building practical projects and continuously improving skills through self-driven learning. Comfortable using AI tools to enhance development, problem-solving, and productivity.",
    al: "Studente e vitit të fundit në Shkenca Kompjuterike dhe Inxhinieri e fokusuar në zhvillimin e uebit dhe aplikacioneve. E eksperimentuar në ndërtimin e projekteve praktike dhe përmirësimin e vazhdueshëm të rritjes profesionale përmes vetë-mësimit. E aftë në përdorimin e mjetetve të inteligjencës artificiale për të përmirësuar zhvillimin, zgjidhjen e problemeve dhe produktivitetin.",
    tr: "Web ve uygulama geliştirmeye odaklanmış, Bilgisayar Bilimleri ve Mühendisliği son sınıf öğrencisi. Pratik projeler geliştirme ve kendi kendine öğrenme yoluyla becerilerini sürekli geliştirme konusunda deneyimli. Geliştirme, problem çözme ve üretkenliği artırmak için yapay zeka araçlarını rahatça kullanabilen."
  }
};

export const navLinks = [
  { 
    name: { en: "Home", al: "Ballina", tr: "Anasayfa" }, 
    href: "#home" 
  },
  { 
    name: { en: "Projects", al: "Projektet", tr: "Projeler" }, 
    href: "#projects" 
  },
  { 
    name: { en: "Experience", al: "Eksperienca", tr: "Deneyim" }, 
    href: "#experience" 
  },
];

export const skills = ["JavaScript", "ReactJs", "React Native", "NextJs", "Python", "SQL"]; 

export const projects = [
  {
    title: {
      en: "Inventory Management System",
      al: "Sistemi i Menaxhimit të Inventarit",
      tr: "Stok Yönetim Sistemi"
    },
    description: {
      en: "A modern inventory management system built with Next.js and Supabase. Features real-time stock tracking with a dynamic dashboard (charts), role-based (Admin/Staff) data isolation via Row Level Security (RLS), and automated low-stock notifications.",
      al: "Një sistem modern i menaxhimit të inventarit i ndërtuar me Next.js dhe Supabase. Ofron gjurmim të stokut në kohë reale me një panel dinamik (grafikë), izolim të të dhënave sipas roleve (Admin/Staf) përmes Row Level Security (RLS), dhe njoftime automatike për stokun e ulët.",
      tr: "Next.js ve Supabase ile oluşturulmuş modern bir stok yönetim sistemi. Dinamik bir panel (grafikler) ile gerçek zamanlı stok takibi, Satır Düzeyinde Güvenlik (RLS) aracılığıyla rol tabanlı (Yönetici/Personel) veri yalıtımı ve otomatik düşük stok bildirimleri özelliklerini içerir."
    },
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Recharts"],
    github: "https://github.com/linditamorina/inventory_management.git",
    liveDemo: null 
  },
  {
    title: {
      en: "Project Vision",
      al: "Project Vision",
      tr: "Project Vision"
    },
    description: {
      en: "A professional full-stack project management platform built with the MERN stack. Features secure JWT authentication for private workspaces, real-time CRUD operations, milestone tracking, and a modern dark-mode UI with glassmorphism design.",
      al: "Një platformë profesionale full-stack për menaxhimin e projekteve e ndërtuar me MERN stack. Përfshin autentikim të sigurt me JWT për hapësirat private të punës, operacione CRUD në kohë reale, gjurmim të etapave (milestones), dhe një ndërfaqe moderne dark-mode me dizajnin glassmorphism.",
      tr: "MERN stack ile oluşturulmuş profesyonel bir pool-stack proje yönetim platformu. Özel çalışma alanları için güvenli JWT kimlik doğrulaması, gerçek zamanlı CRUD işlemleri, dönüm noktası (milestone) takibi ve glassmorphism tasarımına sahip modern bir karanlık mod kullanıcı arayüzü sunar."
    },
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/linditamorina/project-management.git",
    liveDemo: null 
  },
  {
    title: {
      en: "PostoAi",
      al: "PostoAi",
      tr: "PostoAi"
    },
    description: {
      en: "An AI-powered marketing automation platform built with Next.js and Supabase. Integrated OpenAI to generate comprehensive social media plans, captions, and visual assets based on business data.",
      al: "Një platformë e automatizimit të marketingut e fuqizuar nga inteligjenca artificiale, e ndërtuar me Next.js dhe Supabase. Ka të integruar OpenAI për të gjeneruar plane gjithëpërfshirëse për mediat sociale, mbishkrime (captions) dhe asete vizuale bazuar në të dhënat e biznesit.",
      tr: "Next.js ve Supabase ile oluşturulmuş, yapay zeka destekli bir pazarlama otomasyon platformu. İş verilerine dayalı kapsamlı sosyal medya planları, altyazılar ve görsel varlıklar oluşturmak için OpenAI entegre edilmiştir."
    },
    tech: ["Next.js", "Supabase", "OpenAI"],
    github: "https://github.com/linditamorina",
    liveDemo: "https://posto-ai-nine.vercel.app/" 
  },
  {
    title: {
      en: "MedSearch - Mobile Medication Manager",
      al: "MedSearch - Menaxheri Mobil i Medikamenteve",
      tr: "MedSearch - Mobil İlaç Yöneticisi"
    },
    description: {
      en: "Cross-platform application using React Native and Supabase that integrates the OpenFDA API to provide real-time medication data and personal schedule management.",
      al: "Aplikacion cross-platform duke përdorur React Native dhe Supabase që integron OpenFDA API për të ofruar të dhëna për medikamentet në kohë reale dhe menaxhimin e orarit personal.",
      tr: "Gerçek zamanlı ilaç verileri ve kişisel program yönetimi sağlamak için OpenFDA API'sini entegre eden, React Native ve Supabase kullanan çoklu platform (cross-platform) uygulaması."
    },
    tech: ["React Native", "Supabase", "OpenFDA API"],
    github: "https://github.com/linditamorina/MedSearch",
    liveDemo: null 
  },
  {
    title: {
      en: "Expenses Tracker",
      al: "Gjurmuesi i Shpenzimeve",
      tr: "Gider Takipçisi"
    },
    description: {
      en: "A mobile application built with React Native and Expo for tracking daily expenses. Features include data visualization through charts and category-based filtering.",
      al: "Një aplikacion mobil i ndërtuar me React Native dhe Expo për gjurmimin e shpenzimeve ditore. Karakteristikat përfshijnë vizualizimin e të dhënave përmes grafikëve dhe filtrimit në bazë të kategorive.",
      tr: "Günlük giderleri takip etmek için React Native ve Expo ile oluşturulmuş bir mobil uygulama. Özellikler arasında grafikler aracılığıyla veri görselleştirme ve kategori tabanlı filtreleme yer alır."
    },
    tech: ["React Native", "Expo", "Charts"],
    github: "https://github.com/linditamorina/ExpensesTracker",
    liveDemo: null
  }
];

export const experience = [
  {
    role: {
      en: "Programming Instructor",
      al: "Instruktore e Programimit",
      tr: "Programlama Eğitmeni"
    },
    company: "Pro English Center",
    period: "04.2025 - 07.2025", 
    description: {
      en: "Taught students from the 3rd to the 9th grade with a focus on hands-on coding and practical projects. Guided the class toward building a real-world JavaScript project.",
      al: "Ligjërova për nxënësit nga klasa e 3-të deri në klasën e 9-të me fokus në kodimin praktik dhe projekte reale. Udhëhoqa klasën drejt ndërtimit të një projekti konkret në JavaScript.",
      tr: "3. sınıftan 9. sınıfa kadar olan öğrencilere uygulamalı kodlama ve pratik projelere odaklanarak eğitim verdim. Sınıfı gerçek dünya JavaScript projesi geliştirmeye yönlendirdim."
    }
  }
];