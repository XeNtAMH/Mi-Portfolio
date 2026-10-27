// ============================================================
//  DATOS PERSONALES Y ENLACES
// ============================================================
export const profile = {
  name: "Eric Mora Hernández",
  email: "pedroglzzz08@gmail.com",
  phone: "+53 56203081",
  phoneLink: "tel:+5356203081",
  location: "Santa Clara, Cuba",
  github: "https://github.com/XeNtAMH",
  linkedin: "https://www.linkedin.com/in/eric-mora-hern%C3%A1ndez-698167361/",
  photo: "/profile.jpg",
};

// ============================================================
//  TECNOLOGÍAS (logos desde la CDN de Devicon)
//  mono: true → logo de un solo color, se vuelve blanco en modo oscuro
// ============================================================
const dv = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`;

export const techs = {
  react: { name: "React", logo: dv("react") },
  javascript: { name: "JavaScript", logo: dv("javascript") },
  html5: { name: "HTML5", logo: dv("html5") },
  css3: { name: "CSS3", logo: dv("css3") },
  vite: { name: "Vite", logo: dv("vitejs") },
  python: { name: "Python", logo: dv("python") },
  django: { name: "Django REST", logo: dv("django", "plain"), mono: true },
  postgresql: { name: "PostgreSQL", logo: dv("postgresql") },
  supabase: { name: "Supabase", logo: dv("supabase") },
  git: { name: "Git", logo: dv("git") },
  github: { name: "GitHub", logo: dv("github"), mono: true },
  vscode: { name: "VS Code", logo: dv("vscode") },
};

// Orden del carrusel infinito
export const marqueeOrder = [
  "react",
  "javascript",
  "html5",
  "css3",
  "vite",
  "python",
  "django",
  "postgresql",
  "supabase",
  "git",
  "github",
  "vscode",
];

// Grupos de la sección Habilidades (los títulos están en cada idioma)
export const skillGroups = [
  { id: "frontend", items: ["react", "javascript", "html5", "css3", "vite"] },
  { id: "backend", items: ["python", "django"] },
  { id: "database", items: ["postgresql", "supabase"] },
  { id: "tools", items: ["git", "github", "vscode"] },
];

// ============================================================
//  PROYECTOS
//  → Sustituye los "repo" por los reales
//  → Capturas en /public/projects/ con el nombre indicado en "image"
//  category: "frontend" | "fullstack"
// ============================================================
export const projectsBase = [
  {
    id: "mels-creations",
    name: "Mel's Creations",
    image: "/projects/mel.png",
    category: "frontend",
    tech: ["react"],
    demo: "https://mels-creations.onrender.com/",
    repo: "https://github.com/XeNtAMH/REPO-MELS-CREATIONS",
  },
  {
    id: "foamy-art",
    name: "Foamy Art",
    image: "/projects/foamy.png",
    category: "frontend",
    tech: ["react"],
    demo: "https://foamy-art.onrender.com/",
    repo: "https://github.com/XeNtAMH/Foamy-Art-2",
  },
  {
    id: "videojuegos-os",
    name: "Video Games Store",
    image: "/projects/video.png",
    category: "fullstack",
    tech: ["react", "django", "postgresql", "supabase"],
    demo: "https://videojuegos-os.pedroglzzz08.workers.dev/home",
    repo: "https://github.com/XeNtAMH/Videojuegos_OS",
  },
  {
    id: "el-buen-viaje",
    name: "El Buen Viaje",
    image: "/projects/library.png",
    category: "fullstack",
    tech: ["react", "django", "postgresql", "supabase"],
    demo: "https://el-buen-viaje-web.onrender.com/",
    repo: "https://github.com/XeNtAMH/Library",
  },
];

// ============================================================
//  TEXTOS POR IDIOMA
// ============================================================
export const content = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
      theme: "Cambiar tema",
    },
    hero: {
      available: "Disponible para proyectos freelance",
      greeting: "Hola, soy",
      role: "Desarrollador Full-Stack Freelance",
      text: "Creo aplicaciones web responsive y APIs RESTful con React, Python y Django, con una experiencia de usuario fluida y una integración fiable entre frontend y backend.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contáctame",
    },
    stats: [
      { value: 4, suffix: "", label: "Proyectos desplegados" },
      { value: 2, suffix: "", label: "Apps full-stack" },
      { value: 2, suffix: "", label: "Idiomas (ES / EN C2)" },
      { value: 100, suffix: "%", label: "Diseño responsive" },
    ],
    marquee: "Tecnologías con las que trabajo",
    about: {
      eyebrow: "Quién soy",
      title: "Sobre mí",
      summary:
        "Soy un desarrollador full-stack junior con experiencia práctica en React, Python y Django. Construyo aplicaciones web responsive y APIs RESTful que garantizan una experiencia de usuario fluida y una integración fiable entre el frontend y el backend.",
      summary2:
        "Trabajo como freelance, colaborando directamente con clientes desde la toma de requisitos hasta el despliegue.",
      cards: {
        education: {
          title: "Educación",
          line1: "Ingeniería Informática (2024 - Actualidad)",
          line2: 'Universidad Central "Marta Abreu" de Las Villas',
        },
        languages: {
          title: "Idiomas",
          line1: "Español: Nativo",
          line2: "Inglés: Avanzado (C2)",
        },
        freelance: {
          title: "Freelance",
          line1: "Del requisito al despliegue",
          line2: "Trabajo directo con el cliente",
        },
      },
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Proyectos",
      intro: "Proyectos web desplegados que he diseñado y desarrollado.",
      demo: "Ver demo",
      repo: "Código",
      imagePlaceholder: "Captura pendiente",
      filters: { all: "Todos", frontend: "Frontend", fullstack: "Full-stack" },
      items: {
        "mels-creations": {
          type: "Catálogo de productos",
          description:
            "Aplicación web de catálogo ligera y responsive, pensada para presentar productos. Enfocada en un diseño limpio, tiempos de carga rápidos y una navegación intuitiva, sin dependencias de backend.",
        },
        "foamy-art": {
          type: "Catálogo de productos",
          description:
            "Catálogo web frontend responsive para mostrar productos visuales de forma elegante. Con un diseño cuidado, gestión eficiente del estado en el cliente y compatibilidad total entre dispositivos.",
        },
        "videojuegos-os": {
          type: "E-commerce full-stack",
          description:
            "Tienda online full-stack de videojuegos y consolas. Interfaz responsive, catálogo de productos seguro, flujos de pago personalizados y soporte multimoneda.",
        },
        "el-buen-viaje": {
          type: "Librería virtual y gestión",
          description:
            "Plataforma para venta de libros online, control de alquileres y gestión interna del negocio. Incluye monitorización automática de préstamos, programación de devoluciones y herramientas de inventario.",
        },
      },
    },
    skills: {
      eyebrow: "Stack tecnológico",
      title: "Habilidades",
      intro: "Las herramientas y tecnologías con las que construyo mis proyectos.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Bases de datos",
        tools: "Herramientas",
      },
      competenciesTitle: "Competencias",
      competencies: [
        "Desarrollo full-stack",
        "APIs RESTful",
        "Diseño responsive",
        "Diseño de bases de datos",
        "Testing de software",
        "Colaboración en GitHub",
      ],
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      items: [
        {
          date: "Enero 2026 - Actualidad",
          role: "Desarrollador Full-Stack Junior",
          company: "Freelance",
          bullets: [
            "Desarrollo de aplicaciones full-stack desde el concepto hasta el despliegue, asegurando un rendimiento óptimo.",
            "Diseño y construcción de APIs RESTful con Django REST Framework para dar soporte al frontend.",
            "Creación de aplicaciones web interactivas con React para aumentar la interacción del usuario.",
            "Desarrollo de layouts y componentes responsive que mejoran la experiencia en todos los dispositivos.",
            "Diseño de elementos de interfaz personalizados que mejoran la interacción y la satisfacción del usuario.",
            "Colaboración con clientes para recopilar requisitos y definir el alcance de los proyectos.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Trabajamos juntos?",
      text: "¿Tienes un proyecto en mente? Cuéntame tu idea y la convertimos en una aplicación web.",
      cta: "Enviar un correo",
      email: "Correo",
      phone: "Teléfono",
    },
    footer: { rights: "Todos los derechos reservados.", top: "Volver arriba" },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      theme: "Toggle theme",
    },
    hero: {
      available: "Available for freelance projects",
      greeting: "Hi, I'm",
      role: "Freelance Full-Stack Developer",
      text: "I build responsive web applications and RESTful APIs with React, Python and Django, delivering smooth user experiences and reliable frontend-backend integration.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    stats: [
      { value: 4, suffix: "", label: "Deployed projects" },
      { value: 2, suffix: "", label: "Full-stack apps" },
      { value: 2, suffix: "", label: "Languages (ES / EN C2)" },
      { value: 100, suffix: "%", label: "Responsive design" },
    ],
    marquee: "Technologies I work with",
    about: {
      eyebrow: "Who I am",
      title: "About me",
      summary:
        "I'm a junior full-stack developer with hands-on experience in React, Python and Django. I build responsive web applications and RESTful APIs that deliver smooth user experiences and reliable frontend-backend integration.",
      summary2:
        "I work as a freelancer, collaborating directly with clients from requirements gathering through deployment.",
      cards: {
        education: {
          title: "Education",
          line1: "B.Sc. Computer Engineering (2024 - Current)",
          line2: 'Universidad Central "Marta Abreu" de Las Villas',
        },
        languages: {
          title: "Languages",
          line1: "Spanish: Native",
          line2: "English: Proficient (C2)",
        },
        freelance: {
          title: "Freelance",
          line1: "From requirements to deployment",
          line2: "Working directly with clients",
        },
      },
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Projects",
      intro: "Deployed web projects that I designed and developed.",
      demo: "Live demo",
      repo: "Code",
      imagePlaceholder: "Screenshot pending",
      filters: { all: "All", frontend: "Frontend", fullstack: "Full-stack" },
      items: {
        "mels-creations": {
          type: "Product catalog",
          description:
            "A lightweight, responsive web catalog application tailored for product presentation. Built with a focus on clean UI design, fast loading times, and an intuitive browsing experience without backend dependencies.",
        },
        "foamy-art": {
          type: "Product catalog",
          description:
            "A responsive frontend web catalog built to present visual products cleanly. Focused on a sleek UI layout, efficient client-side state handling, and seamless cross-device compatibility.",
        },
        "videojuegos-os": {
          type: "Full-stack e-commerce",
          description:
            "A full-stack online store for video games and consoles. Focused on a responsive user interface, secure product catalogs, and customized payment workflows with multi-currency support.",
        },
        "el-buen-viaje": {
          type: "Virtual bookstore & management",
          description:
            "A web platform for online book sales, rental tracking, and internal business management. Includes automated loan monitoring, return scheduling, and inventory tools.",
        },
      },
    },
    skills: {
      eyebrow: "Tech stack",
      title: "Skills",
      intro: "The tools and technologies I use to build my projects.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Databases",
        tools: "Tools",
      },
      competenciesTitle: "Core competencies",
      competencies: [
        "Full stack development",
        "RESTful APIs",
        "Responsive design",
        "Database design",
        "Software testing",
        "GitHub collaboration",
      ],
    },
    experience: {
      eyebrow: "Career",
      title: "Experience",
      items: [
        {
          date: "January 2026 - Current",
          role: "Junior Full-Stack Developer",
          company: "Freelance",
          bullets: [
            "Developed full-stack applications from concept to deployment, ensuring optimal performance.",
            "Designed and built RESTful APIs using Django REST Framework, enabling effective frontend functionality.",
            "Designed interactive web applications using React to enhance user engagement.",
            "Developed responsive layouts and components, enhancing user experience across devices.",
            "Designed custom UI elements that improved user interaction and satisfaction on websites.",
            "Collaborated with clients to gather requirements and clarify scope.",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      text: "Have a project in mind? Tell me your idea and let's turn it into a web application.",
      cta: "Send an email",
      email: "Email",
      phone: "Phone",
    },
    footer: { rights: "All rights reserved.", top: "Back to top" },
  },
};