import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const profile = {
  name: "Neela Bhavya Sri",
  title: "AI & ML Undergraduate | Web Developer | Machine Learning & Automation Enthusiast",
  location: "Hyderabad, Telangana, India",
  email: "bhavyasrineela11@gmail.com",
  phone: "+91 8096480779",
  linkedin: "https://www.linkedin.com/in/neela-bhavya-sri-191033322",
  github: "https://github.com/Bhavyaneela2",
  image: "myphoto.jpeg",
};

const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Achievements", "Education", "Contact"];

const skills = [
  { group: "Programming", icon: "💻", items: ["Python", "Java", "SQL"] },
  { group: "Web Technologies", icon: "✨", items: ["HTML", "CSS", "JavaScript", "React"] },
  { group: "AI/ML", icon: "🤖", items: ["Machine Learning", "TensorFlow", "OpenCV"] },
  { group: "Database", icon: "🗄️", items: ["PostgreSQL"] },
  { group: "Tools", icon: "🛠️", items: ["VS Code", "Git", "GitHub", "Eclipse", "n8n", "Figma"] },
  { group: "Professional", icon: "🤝", items: ["Communication", "Collaboration", "Leadership"] },
];

const projects = [
   {
    title: "Navy Hydroacoustic Surveillance System",
    stack: "Python, AI/ML, OpenCV, Acoustic Signal Processing, Computer Vision",
    desc: "Developed an automated multi-modal naval surveillance system that analyzes underwater acoustic signals and sea-surface images for intelligent maritime threat detection. The system divides sea regions into zones and assigns real-time threat intensity levels such as LOW, MEDIUM, and HIGH using AI-driven analysis. Interactive maps, heatmaps, and visual alerts help naval personnel identify high-risk areas quickly and improve defense response efficiency.",
  },
    {
  title: "WanderGo – AI-Powered Travel Planning Platform",
  stack: "React, JavaScript, Python, SQL, Machine Learning, Generative AI",
  desc: "Built a full-stack travel planning platform that provides AI-driven destination recommendations, personalized itineraries, and intelligent trip planning assistance.",
  },

  {
    title: "Gamified Learning Platform for Rural Areas",
    stack: "HTML, CSS, JavaScript, React, JSON, SQL",
    desc: "Designed a gamified web learning platform to improve student engagement using points, badges, and challenges. Implemented responsive UI and SQL-based user progress tracking with dynamic content management using JSON.",
  },
  {
    title: "Prevention and Prediction on Shunting in Fetal",
    stack: "HTML, CSS, JavaScript, Python",
    desc: "Developed a healthcare web application that provides personalized nutrition recommendations for expecting mothers. Built an intuitive interface for data input and visualization to support maternal health insights.",
  },

];

const certifications = [
  "Google AI/ML Virtual Internship – Eduskills",
  "PwC Launchpad – Advisory Program",
  "PwC Job Simulation Experience Program",
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "Salesforce AgentForce Specialist",
  "GenAI in Data Analytics – Meta & Infosys SpringBoard",
  "Cisco CCNA Enterprise, Networking, Security and Automation",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </motion.div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900 ${className}`}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="text-lg font-extrabold tracking-tight">
            Neela<span className="text-sky-500">.</span>
          </a>

          <div className="hidden items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-sky-500">
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-full border border-slate-200 p-2 dark:border-white/10"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
              <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                ✨ Available for internships and projects
              </div>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Hi, I’m <span className="text-sky-500">{profile.name}</span>
              </h1>

              <p className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200">{profile.title}</p>
              <p className="mt-3 font-medium text-sky-600 dark:text-sky-300">AI/ML Enthusiast • Web Developer • Problem Solver</p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                AI & ML undergraduate with experience in Python, Java, SQL, React, and TensorFlow. Passionate about building innovative solutions and applying Artificial Intelligence to solve real-world challenges.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                 <a
                  href="resume.pdf"
                  download="resume.pdf"
                  className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600"
>
               ⬇️ Download Resume
                    </a>
                <a
                  href="resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white hover:bg-sky-600"
                >
                  📄 View Resume
                </a>
                <a href="#contact" className="rounded-full border border-slate-300 px-6 py-3 font-semibold hover:text-sky-500">
                  Contact Me
                </a>
                <a href="#projects" className="rounded-full px-6 py-3 font-semibold hover:text-sky-500">
                  View Projects
                </a>
              </div>

              <div className="mt-7 flex gap-4 flex-wrap">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border px-4 py-3 font-semibold hover:text-sky-500">
                  LinkedIn
                </a>

                <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border px-4 py-3 font-semibold hover:text-sky-500">
                  GitHub
                </a>

                <a
                  href="https://leetcode.com/u/TA2JxPt9yb/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-4 py-3 font-semibold hover:text-sky-500"
                >
                  LeetCode
                </a>

                <a href={`mailto:${profile.email}`} className="rounded-full border px-4 py-3 font-semibold hover:text-sky-500">
                  Email
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-slate-900">
                <img src={profile.image} alt="Neela Bhavya Sri" className="h-[520px] w-full rounded-[1.5rem] object-cover object-center" />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="About" title="A focused student building real-world digital solutions" />
            <Card className="p-8 shadow-xl">
              <div className="grid gap-8 md:grid-cols-3">
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 md:col-span-2">
                  I am a proactive and goal-oriented IT professional with hands-on experience in software development and database management.
                  Skilled in Java, SQL, HTML, CSS, JavaScript, Python, React, and MySQL with certified training in multiple technologies.
                  Strong analytical and problem-solving abilities with a commitment to continuous learning. Proven capacity to work effectively
                  both independently and in collaborative team environments.
                </p>

                <div className="space-y-4 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
                  <p>🎓 CMR Technical Campus</p>
                  <p>📘 B.Tech | CSE (AI & ML)</p>
                  <p>📊 GPA – 8.46</p>
                  <p>📍 {profile.location}</p>
                  <p>✉️ {profile.email}</p>
                  <p>📞 {profile.phone}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="skills" className="bg-slate-50 px-4 py-20 dark:bg-slate-900/40 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Skills" title="Technical and professional strengths" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <Card key={skill.group} className="p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-2xl bg-sky-100 p-3 text-xl">{skill.icon}</div>
                    <h3 className="text-xl font-bold">{skill.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium dark:bg-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="Experience" title="Practical exposure and teamwork" />
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Web Development Intern – UDAAN Society</h3>
              <p className="mt-1 text-sky-600">January 2026 – March 2026</p>
              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
               Worked as a Web Development Intern at UDAAN Society, contributing to website development, content management, and project coordination. Collaborated with teams to improve digital solutions while strengthening technical and professional skills.
              </p>
            </Card>
          </div>
        </section>

        <section id="projects" className="bg-slate-50 px-4 py-20 dark:bg-slate-900/40 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Projects" title="Selected work" />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className="p-7 transition hover:-translate-y-1 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="my-4 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700">
                    {project.stack}
                  </p>
                  <p className="leading-8 text-slate-700 dark:text-slate-300">{project.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Certifications" title="Learning achievements" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
                  🏆 {cert}
                </div>
              ))}
            </div>
          </div>
        </section>
                <section id="achievements" className="bg-slate-50 px-4 py-20 dark:bg-slate-900/40 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Achievements"
              title="Milestones and accomplishments"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                🏆 Selected for National Level Smart India Hackathon 2025
              </Card>

              <Card className="p-6">
                💻 Solved 50+ LeetCode Problems in DSA
              </Card>

              <Card className="p-6">
                🚀 Built 3+ AI/ML & Web Development Projects
              </Card>

              <Card className="p-6">
                🎓 Completed Google AI/ML Virtual Internship through Eduskills
              </Card>
            </div>
          </div>
        </section>
        

        <section id="education" className="bg-slate-50 px-4 py-20 dark:bg-slate-900/40 md:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="Education" title="Academic background" />
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold">B.Tech in CSE (AI & ML)</h3>
              <p className="mt-2 text-lg">CMR Technical Campus, Medchal</p>
              <p className="mt-2 text-sky-600">GPA: 8.63 | Year of Passing: 2027</p>
            </Card>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Contact" title="Let’s connect" />
            <Card className="p-7 shadow-xl">
              <p>✉️ {profile.email}</p>
              <p className="mt-3">📞 {profile.phone}</p>
              <p className="mt-3">📍 {profile.location}</p>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-4 py-7 text-center text-sm font-medium">
        Designed & Developed by Neela Bhavya Sri
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 rounded-full bg-sky-500 p-3 text-white">
          ↑
        </button>
      )}
    </div>
  );
}