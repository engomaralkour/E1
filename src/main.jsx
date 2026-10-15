import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Mail,
  MapPin,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  ExternalLink,
  Layers3,
  Smartphone,
  Monitor,
  Database,
  Send,
  CheckCircle2,
} from "lucide-react";
import "./styles.css";

const content = {
  en: {
    nav: [
      "Home",
      "About",
      "Skills",
      "Projects",
      "Experience",
      "Education",
      "Contact",
    ],
    eyebrow: "SOFTWARE ENGINEER · WEB DEVELOPER",
    hello: "Hello, I'm",
    titleA: "Omar",
    titleB: " Al-Kour",
    role: "Software Engineer & Full-Stack Web Developer",
    intro:
      "I build modern web applications and scalable digital experiences with clean code, thoughtful design, and reliable APIs.",
    projectsBtn: "Explore projects",
    cvBtn: "Download CV",
    scroll: "Scroll to discover",
    stats: [
      "Years learning & building",
      "Featured projects",
      "Technologies explored",
      "Commitment to quality",
    ],
    aboutTag: "A LITTLE ABOUT ME",
    aboutTitle: "Turning ideas into useful digital products.",
    aboutText:
      "I'm a fourth-year Informatics Engineering student focused on software development and modern web technologies. I enjoy building responsive interfaces, designing structured APIs, and connecting frontend experiences with reliable backend systems. I'm always learning and looking for opportunities to solve real-world problems through technology.",
    location: "Daraa, Syria",
    studyLevel: "4th-year student",
    focus: "Current focus",
    focusText: "Full-stack web development",
    skillsTag: "MY TOOLKIT",
    skillsTitle: "Skills & technologies",
    skillsText: "Tools I use to design, build, and improve web applications.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database & tools",
    projectsTag: "SELECTED WORK",
    projectsTitle: "Projects I've worked on",
    projectsText:
      "A selection of academic and personal project concepts. Replace demo links and screenshots with your real project details before publishing.",
    viewProject: "Project details",
    projectNote: "Project showcase",
    experienceTag: "MY JOURNEY",
    experienceTitle: "Experience & learning",
    experienceText:
      "My journey so far, with a focus on continuous learning and practical development.",
    experienceTitle1: "Personal & academic projects",
    experienceDate1: "Ongoing",
    experienceDesc1:
      "Practicing frontend development, REST API integration, database design, and full-stack application structure through hands-on projects.",
    experienceTitle2: "Software development learning",
    experienceDate2: "Ongoing",
    experienceDesc2:
      "Building skills in React, Laravel, PHP, SQL, JavaScript, and modern development workflows.",
    educationTag: "EDUCATION",
    educationTitle: "Learning with purpose.",
    university: "Homs University",
    degree: "Informatics Engineering",
    educationDate: "Fourth-year student",
    educationText:
      "Developing a foundation in programming, software engineering, databases, and application development.",
    servicesTag: "HOW I CAN HELP",
    servicesTitle: "Services",
    servicesText: "Ways I can contribute to a project or team.",
    service1: "Web application development",
    service1d:
      "Responsive web experiences built with modern frontend and backend technologies.",
    service2: "Frontend development",
    service2d:
      "Clean, accessible interfaces using React, JavaScript, and Tailwind CSS.",
    service3: "REST API integration",
    service3d:
      "Connecting frontend applications to APIs and organizing reliable data flows.",
    service4: "Website improvements",
    service4d:
      "UI refinements, responsive fixes, and maintainability improvements.",
    contactTag: "LET'S CONNECT",
    contactTitle: "Have a project in mind?",
    contactText:
      "I'm open to discussing opportunities, collaborations, and interesting web projects.",
    name: "Your name",
    email: "Your email",
    message: "Tell me about your project",
    send: "Prepare email",
    emailHint: "This form opens your email app with the message prepared.",
    footer: "Designed and built with care.",
    rights: "All rights reserved.",
    soon: "Add your real project URL",
    noExperience: "No formal work experience listed yet",
    noExperienceText:
      "This portfolio highlights learning, technical skills, and project work without claiming professional experience.",
  },
  ar: {
    nav: [
      "الرئيسية",
      "من أنا",
      "المهارات",
      "المشاريع",
      "الخبرة",
      "التعليم",
      "تواصل معي",
    ],
    eyebrow: "مهندس برمجيات · مطور ويب",
    hello: "مرحباً، أنا",
    titleA: "عمر",
    titleB: " الكور",
    role: "مهندس برمجيات ومطور تطبيقات ويب فول ستاك",
    intro:
      "أطوّر تطبيقات ويب حديثة وتجارب رقمية قابلة للتوسع، مع التركيز على الكود النظيف والتصميم المدروس وواجهات API موثوقة.",
    projectsBtn: "استكشف المشاريع",
    cvBtn: "تحميل السيرة الذاتية",
    scroll: "تابع لاستكشاف الموقع",
    stats: [
      "سنوات تعلّم وتطوير",
      "مشاريع مختارة",
      "تقنيات استكشفتها",
      "الالتزام بالجودة",
    ],
    aboutTag: "نبذة عني",
    aboutTitle: "أحوّل الأفكار إلى منتجات رقمية مفيدة.",
    aboutText:
      "أنا طالب سنة رابعة في هندسة المعلوماتية، أركّز على تطوير البرمجيات وتقنيات الويب الحديثة. أستمتع ببناء واجهات متجاوبة، وتصميم واجهات API منظمة، وربط الواجهات الأمامية بأنظمة خلفية موثوقة. أحرص على التعلّم المستمر واستخدام التقنية لحل مشكلات واقعية.",
    location: "درعا، سوريا",
    studyLevel: "طالب سنة رابعة",
    focus: "مجال التركيز الحالي",
    focusText: "تطوير تطبيقات الويب فول ستاك",
    skillsTag: "أدواتي التقنية",
    skillsTitle: "المهارات والتقنيات",
    skillsText: "أدوات أستخدمها لتصميم تطبيقات الويب وبنائها وتحسينها.",
    frontend: "الواجهة الأمامية",
    backend: "الواجهة الخلفية",
    database: "قواعد البيانات والأدوات",
    projectsTag: "أعمال مختارة",
    projectsTitle: "مشاريع عملت عليها",
    projectsText:
      "مجموعة من المشاريع الأكاديمية والأفكار الشخصية. استبدل الروابط والصور التجريبية بتفاصيل مشاريعك الحقيقية قبل النشر.",
    viewProject: "تفاصيل المشروع",
    projectNote: "عرض المشروع",
    experienceTag: "رحلتي",
    experienceTitle: "الخبرة والتعلّم",
    experienceText:
      "رحلتي حتى الآن مع التركيز على التعلّم المستمر والتطبيق العملي.",
    experienceTitle1: "مشاريع شخصية وأكاديمية",
    experienceDate1: "مستمر",
    experienceDesc1:
      "تطبيق مهارات تطوير الواجهات، وربط REST API، وتصميم قواعد البيانات، وبناء هيكل تطبيقات فول ستاك من خلال مشاريع عملية.",
    experienceTitle2: "تعلّم تطوير البرمجيات",
    experienceDate2: "مستمر",
    experienceDesc2:
      "تطوير المهارات في React وLaravel وPHP وSQL وJavaScript وسير عمل تطوير البرمجيات الحديث.",
    educationTag: "التعليم",
    educationTitle: "تعلّم بهدف واضح.",
    university: "جامعة حمص",
    degree: "هندسة المعلوماتية",
    educationDate: "طالب سنة رابعة",
    educationText:
      "بناء أساس في البرمجة وهندسة البرمجيات وقواعد البيانات وتطوير التطبيقات.",
    servicesTag: "كيف يمكنني المساعدة؟",
    servicesTitle: "الخدمات",
    servicesText: "طرق يمكنني من خلالها المساهمة في مشروع أو فريق.",
    service1: "تطوير تطبيقات الويب",
    service1d:
      "تجارب ويب متجاوبة باستخدام تقنيات الواجهة الأمامية والخلفية الحديثة.",
    service2: "تطوير الواجهات الأمامية",
    service2d:
      "واجهات مرتبة وسهلة الاستخدام باستخدام React وJavaScript وTailwind CSS.",
    service3: "ربط واجهات REST API",
    service3d: "ربط تطبيقات الواجهة الأمامية بالـ APIs وتنظيم تدفق البيانات.",
    service4: "تحسين المواقع",
    service4d: "تحسين الواجهة، ومعالجة مشاكل التجاوب، ورفع قابلية صيانة الكود.",
    contactTag: "لنتواصل",
    contactTitle: "هل لديك مشروع في ذهنك؟",
    contactText:
      "يسعدني الحديث عن فرص العمل والتعاون والمشاريع البرمجية المميزة.",
    name: "اسمك",
    email: "بريدك الإلكتروني",
    message: "أخبرني عن مشروعك",
    send: "تجهيز رسالة بريد",
    emailHint: "هذا النموذج يفتح تطبيق البريد لديك مع تجهيز الرسالة.",
    footer: "صُمّم وطُوّر بعناية.",
    rights: "جميع الحقوق محفوظة.",
    soon: "أضف رابط مشروعك الحقيقي",
    noExperience: "لا توجد خبرة وظيفية رسمية مضافة حالياً",
    noExperienceText:
      "يعرض هذا البورتفوليو التعلّم والمهارات التقنية والمشاريع دون ادعاء خبرة مهنية غير موجودة.",
  },
};

const skillGroups = [
  {
    key: "frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  { key: "backend", items: ["PHP", "Laravel", "REST API", "Python / Django"] },
  {
    key: "database",
    items: ["MySQL", "Git", "GitHub", "Postman", "Responsive Design"],
  },
];

const projects = [
  {
    name: "School Management System",
    ar: "نظام إدارة مدرسة",
    type: "Full-stack web application",
    typeAr: "تطبيق ويب فول ستاك",
    stack: ["React", "Laravel", "MySQL"],
    icon: GraduationCap,
    color: "blue",
    desc: "A school platform concept for organizing students, teachers, subjects, and academic workflows.",
    descAr: "فكرة منصة لإدارة الطلاب والأساتذة والمواد والعمليات الأكاديمية.",
  },
  {
    name: "Hospital Management System",
    ar: "نظام إدارة مشفى",
    type: "Management platform",
    typeAr: "منصة إدارية",
    stack: ["React", "REST API", "Database"],
    icon: BriefcaseBusiness,
    color: "violet",
    desc: "A management system concept focused on organizing patient, doctor, and clinic information.",
    descAr: "فكرة نظام لتنظيم معلومات المرضى والأطباء والعيادات.",
  },
  {
    name: "Job Opportunities Platform",
    ar: "منصة فرص العمل",
    type: "Web platform",
    typeAr: "منصة ويب",
    stack: ["React", "Tailwind CSS", "API"],
    icon: Layers3,
    color: "cyan",
    desc: "A platform concept for browsing opportunities and organizing job-related information.",
    descAr: "فكرة منصة لاستعراض الفرص وتنظيم المعلومات المتعلقة بالوظائف.",
  },
];

function App() {
  const [lang, setLang] = useState(
    () => localStorage.getItem("portfolio-lang") || "en",
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-lang", lang);
    localStorage.setItem("portfolio-theme", theme);
  }, [lang, theme, isAr]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`,
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Omar Al-Kour home">
          <span>O</span>
          <b>A</b>
          <i>.</i>
        </a>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {t.nav.map((label, i) => (
            <button
              key={label}
              onClick={() =>
                goTo(
                  [
                    "home",
                    "about",
                    "skills",
                    "projects",
                    "experience",
                    "education",
                    "contact",
                  ][i],
                )
              }>
              {label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            onClick={() => setLang(isAr ? "en" : "ar")}
            aria-label="Switch language">
            <Globe size={15} />
            <span>{isAr ? "EN" : "عربي"}</span>
          </button>
          <button
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle color theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              {t.eyebrow}
            </div>
            <p className="hello">{t.hello}</p>
            <h1>
              {t.titleA}
              <span className="gradient-text">{t.titleB}</span>
            </h1>
            <h2>{t.role}</h2>
            <p className="hero-description">{t.intro}</p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => goTo("projects")}>
                {t.projectsBtn}
                <ArrowUpRight size={17} />
              </button>
              <a
                className="button button-secondary"
                href="/omar-al-kour-cv.pdf"
                download>
                <Download size={16} />
                {t.cvBtn}
              </a>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub">
                {/* <Github size={17} /> */}
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn">
                {/* <Linkedin size={17} /> */}
              </a>
              <a href="mailto:your-email@example.com" aria-label="Email">
                <Mail size={17} />
              </a>
              <span className="social-divider"></span>
              <span className="availability">
                <span></span>
                {isAr ? "متاح للتعاون" : "Open to opportunities"}
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="visual-glow"></div>
            <div className="code-window">
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
                <small>developer.tsx</small>
              </div>
              <div className="code-lines">
                <p>
                  <i>01</i>
                  <span className="code-purple">const</span> developer = {"{"}
                </p>
                <p>
                  <i>02</i>&nbsp;&nbsp;name:{" "}
                  <span className="code-green">"Omar Al-Kour"</span>,
                </p>
                <p>
                  <i>03</i>&nbsp;&nbsp;role:{" "}
                  <span className="code-green">"Software Engineer"</span>,
                </p>
                <p>
                  <i>04</i>&nbsp;&nbsp;stack: [
                  <span className="code-blue">"React"</span>,
                </p>
                <p>
                  <i>05</i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-blue">"Laravel"</span>,{" "}
                  <span className="code-blue">"PHP"</span>],
                </p>
                <p>
                  <i>06</i>&nbsp;&nbsp;mindset:{" "}
                  <span className="code-green">"Always learning"</span>
                </p>
                <p>
                  <i>07</i>
                  {"};"}
                </p>
                <p className="code-comment">
                  <i>08</i>// Turning ideas into reality.
                </p>
              </div>
              <div className="window-footer">
                <span>
                  <Code2 size={14} /> JavaScript
                </span>
                <span>UTF-8</span>
                <span>Ln 08, Col 1</span>
              </div>
            </div>
            <div className="floating-card card-react">
              <span className="tech-symbol">⚛</span>
              <div>
                <b>React</b>
                <small>Frontend</small>
              </div>
            </div>
            <div className="floating-card card-laravel">
              <span className="laravel-mark">L</span>
              <div>
                <b>Laravel</b>
                <small>Backend</small>
              </div>
            </div>
            <div className="hero-caption">
              <span className="caption-line"></span>
              <span>CODE · BUILD · CREATE</span>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => goTo("about")}>
            <ArrowDown size={15} />
            {t.scroll}
          </button>
        </section>

        <section className="stats section-wrap" aria-label="Highlights">
          {[
            ["02+", t.stats[0]],
            ["03+", t.stats[1]],
            ["10+", t.stats[2]],
            ["100%", t.stats[3]],
          ].map(([num, label]) => (
            <div className="stat" key={label}>
              <strong>{num}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section section-wrap" id="about">
          <div className="section-heading">
            <span className="section-tag">{t.aboutTag}</span>
            <h2>{t.aboutTitle}</h2>
          </div>
          <div className="about-grid">
            <div className="about-card profile-card">
              <div className="avatar-placeholder">
                <Code2 size={48} />
                <span>
                  O<span>A</span>
                </span>
              </div>
              <div className="profile-name">Omar Al-Kour</div>
              <div className="profile-role">
                {isAr
                  ? "مهندس برمجيات ومطور ويب"
                  : "Software Engineer & Web Developer"}
              </div>
              <div className="profile-divider"></div>
              <div className="profile-detail">
                <MapPin size={15} />
                <span>{t.location}</span>
              </div>
              <div className="profile-detail">
                <GraduationCap size={15} />
                <span>{t.studyLevel}</span>
              </div>
            </div>
            <div className="about-copy">
              <p>{t.aboutText}</p>
              <div className="focus-card">
                <div className="focus-icon">
                  <Code2 size={20} />
                </div>
                <div>
                  <span>{t.focus}</span>
                  <strong>{t.focusText}</strong>
                </div>
                <CheckCircle2 className="focus-check" size={19} />
              </div>
              <div className="about-pills">
                <span>Problem solving</span>
                <span>Clean code</span>
                <span>Continuous learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="skills">
          <div className="section-heading">
            <span className="section-tag">{t.skillsTag}</span>
            <h2>{t.skillsTitle}</h2>
            <p>{t.skillsText}</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group, idx) => (
              <div className="skill-group" key={group.key}>
                <div className="skill-group-heading">
                  <span className={`skill-group-icon group-${idx}`}>
                    <Code2 size={19} />
                  </span>
                  <h3>{t[group.key]}</h3>
                </div>
                <div className="skill-list">
                  {group.items.map((item, i) => (
                    <div className="skill-chip" key={item}>
                      <span className={`skill-dot dot-${(i + idx) % 5}`}></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-wrap" id="projects">
          <div className="section-heading">
            <span className="section-tag">{t.projectsTag}</span>
            <h2>{t.projectsTitle}</h2>
            <p>{t.projectsText}</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <article
                  className={`project-card project-${project.color}`}
                  key={project.name}>
                  <div className="project-art">
                    <div className="project-art-grid"></div>
                    <div className="project-art-icon">
                      <Icon size={34} />
                    </div>
                    <span className="project-index">0{i + 1}</span>
                    <div className="project-art-label">{project.type}</div>
                  </div>
                  <div className="project-content">
                    <div className="project-kicker">
                      {isAr ? project.typeAr : project.type}
                    </div>
                    <h3>{isAr ? project.ar : project.name}</h3>
                    <p>{isAr ? project.descAr : project.desc}</p>
                    <div className="project-stack">
                      {project.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <a
                      className="project-link"
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer">
                      {t.viewProject}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section section-wrap" id="experience">
          <div className="section-heading">
            <span className="section-tag">{t.experienceTag}</span>
            <h2>{t.experienceTitle}</h2>
            <p>{t.experienceText}</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <Layers3 size={19} />
              </div>
              <div className="timeline-body">
                <span className="timeline-date">{t.experienceDate1}</span>
                <h3>{t.experienceTitle1}</h3>
                <p>{t.experienceDesc1}</p>
              </div>
              <span className="timeline-type">
                {isAr ? "مشاريع" : "PROJECTS"}
              </span>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <Code2 size={19} />
              </div>
              <div className="timeline-body">
                <span className="timeline-date">{t.experienceDate2}</span>
                <h3>{t.experienceTitle2}</h3>
                <p>{t.experienceDesc2}</p>
              </div>
              <span className="timeline-type">
                {isAr ? "تعلّم" : "LEARNING"}
              </span>
            </div>
            <div className="timeline-note">
              <BriefcaseBusiness size={18} />
              <div>
                <strong>{t.noExperience}</strong>
                <p>{t.noExperienceText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="education">
          <div className="education-panel">
            <div className="education-copy">
              <span className="section-tag">{t.educationTag}</span>
              <h2>{t.educationTitle}</h2>
              <p>{t.educationText}</p>
              <div className="education-meta">
                <div className="education-icon">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3>{t.university}</h3>
                  <p>{t.degree}</p>
                  <span>{t.educationDate}</span>
                </div>
              </div>
            </div>
            <div className="education-visual">
              <div className="education-ring ring-a"></div>
              <div className="education-ring ring-b"></div>
              <GraduationCap size={94} strokeWidth={1} />
              <span>LEARN · BUILD · GROW</span>
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="services">
          <div className="section-heading">
            <span className="section-tag">{t.servicesTag}</span>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
          </div>
          <div className="services-grid">
            {[
              { icon: Monitor, title: t.service1, desc: t.service1d },
              { icon: Code2, title: t.service2, desc: t.service2d },
              { icon: Database, title: t.service3, desc: t.service3d },
              { icon: Smartphone, title: t.service4, desc: t.service4d },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div className="service-card" key={title}>
                <div className={`service-icon service-icon-${i}`}>
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="service-number">0{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="section-tag">{t.contactTag}</span>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-method">
                <span>
                  <Mail size={18} />
                </span>
                <div>
                  <small>Email</small>
                  <a href="mailto:your-email@example.com">
                    your-email@example.com
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <span>
                  <MapPin size={18} />
                </span>
                <div>
                  <small>{isAr ? "الموقع" : "Location"}</small>
                  <strong>{t.location}</strong>
                </div>
              </div>
              <div className="contact-social">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"></a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"></a>
                <a href="mailto:your-email@example.com">
                  <Mail size={18} />
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="form-row">
                <label>
                  {t.name}
                  <input required name="name" placeholder={t.name} />
                </label>
                <label>
                  {t.email}
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder={t.email}
                  />
                </label>
              </div>
              <label>
                {t.message}
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder={t.message}></textarea>
              </label>
              <button className="button button-primary" type="submit">
                {t.send}
                <Send size={16} />
              </button>
              <small className="form-hint">{t.emailHint}</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span>O</span>
          <b>A</b>
          <i>.</i>
        </a>
        <p>
          © {new Date().getFullYear()} Omar Al-Kour. {t.rights}
        </p>
        <span>{t.footer}</span>
        <button
          className="back-top"
          onClick={() => goTo("home")}
          aria-label="Back to top">
          <ArrowUpRight size={18} />
        </button>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
