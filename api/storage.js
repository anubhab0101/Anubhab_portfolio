
import { randomUUID } from "crypto";
import { users, contacts, projects, testimonials, certificates } from "../shared/schema";

class MemStorage {
  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    this.certificates = new Map();
    this.initializeProjects();
    this.initializeTestimonials();
    this.initializeCertificates();
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact) {
    const id = randomUUID();
    const contact = { 
      ...insertContact,
      subject: insertContact.subject ?? null,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts() {
    return Array.from(this.contacts.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getProjects() {
    return Array.from(this.projects.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getProjectsByCategory(category) {
    return Array.from(this.projects.values())
      .filter(project => project.category === category)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async searchProjects(query) {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.projects.values())
      .filter(project => 
        project.title.toLowerCase().includes(lowercaseQuery) ||
        project.description.toLowerCase().includes(lowercaseQuery) ||
        (project.technologies && project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery)))
      )
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createProject(insertProject) {
    const id = randomUUID();
    const project = { 
      ...insertProject,
      image: insertProject.image ?? null,
      technologies: insertProject.technologies ?? null,
      liveUrl: insertProject.liveUrl ?? null,
      githubUrl: insertProject.githubUrl ?? null,
      featured: insertProject.featured ?? null,
      id,
      createdAt: new Date()
    };
    this.projects.set(id, project);
    return project;
  }

  async getTestimonials() {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createTestimonial(insertTestimonial) {
    const id = randomUUID();
    const testimonial = { 
      ...insertTestimonial,
      image: insertTestimonial.image ?? null,
      company: insertTestimonial.company ?? null,
      rating: insertTestimonial.rating ?? null,
      id,
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getCertificates() {
    return Array.from(this.certificates.values()).sort(
      (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
    );
  }

  async createCertificate(insertCertificate) {
    const id = randomUUID();
    const certificate = { 
      ...insertCertificate,
      expiryDate: insertCertificate.expiryDate ?? null,
      credentialId: insertCertificate.credentialId ?? null,
      credentialUrl: insertCertificate.credentialUrl ?? null,
      image: insertCertificate.image ?? null,
      description: insertCertificate.description ?? null,
      skills: insertCertificate.skills ?? null,
      featured: insertCertificate.featured ?? null,
      id,
      createdAt: new Date()
    };
    this.certificates.set(id, certificate);
    return certificate;
  }

  initializeProjects() {
    const sampleProjects = [
      {
        title: "NLP/ML Analysis Platform",
        description: "An NLP and ML analysis platform offering a comprehensive, user-friendly environment for ingesting, processing, and analyzing large volumes of textual or structured data using state-of-the-art AI methodologies.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["Python", "Streamlit", "NLP", "Machine Learning", "Gemini AI"],
        liveUrl: "https://geminiintigration.streamlit.app/",
        category: "Machine Learning",
        featured: "true"
      },
      {
        title: "Pneumonia Detection from Chest X-Ray",
        description: "A machine learning application that uses ML algorithms to analyze chest X-rays and automatically identify pneumonia signs, helping doctors diagnose quickly and accurately.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        technologies: ["Python", "TensorFlow", "Computer Vision", "Healthcare AI", "CNN"],
        liveUrl: "https://anubhab0101-pneumonia-detection-from-chest-x-ray-pp-qdevtn.streamlit.app/",
        category: "Healthcare AI",
        featured: "true"
      }
    ];

    sampleProjects.forEach(project => {
      const id = randomUUID();
      const fullProject = {
        ...project,
        image: project.image ?? null,
        technologies: project.technologies ?? null,
        liveUrl: project.liveUrl ?? null,
        githubUrl: project.githubUrl ?? null,
        featured: project.featured ?? null,
        id,
        createdAt: new Date()
      };
      this.projects.set(id, fullProject);
    });
  }

  initializeTestimonials() {
    const sampleTestimonials = [
      {
        name: "Dr. Sarah Singh",
        role: "Lead Data Scientist",
        company: "TechMed Solutions",
        content: "Anubhab's work on the pneumonia detection system was exceptional. His attention to detail and understanding of medical AI applications is impressive for someone at his level.",
        rating: "4.6"
      },
      {
        name: "Prof. Jyoti Ranjan Swain",
        role: "Professor of Computer Science",
        company: "CV Raman Global University",
        content: "One of the most dedicated students I've worked with. Anubhab consistently delivers high-quality projects and shows great potential in machine learning and Python development.",
        rating: "5"
      },
      {
        name: "Amit Patel",
        role: "Senior Software Engineer",
        company: "Innovation Labs",
        content: "His code quality and problem-solving approach are remarkable. Definitely someone to watch in the tech space.",
        rating: "4.0"
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = randomUUID();
      const fullTestimonial = {
        ...testimonial,
        image: testimonial.image ?? null,
        company: testimonial.company ?? null,
        rating: testimonial.rating ?? null,
        id,
        createdAt: new Date()
      };
      this.testimonials.set(id, fullTestimonial);
    });
  }

  initializeCertificates() {
    const sampleCertificates = [
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Google (via Coursera)",
        issueDate: "2024-09-04",
        credentialUrl: "https://coursera.org/share/6635b6b61026d0acc77f627d113afc76",
        image: "@assets/Screenshot 2025-08-07 213355_1754671102579.png",
        description: "Comprehensive 7-course professional certificate covering the complete UX design process from research to prototype testing.",
        skills: ["UX Design", "User Research", "Figma", "Prototyping", "Wireframing", "User Testing"],
        featured: "true"
      },
      {
        title: "Design a User Experience for Social Good & Prepare for Jobs",
        issuer: "Google (via Coursera)",
        issueDate: "2024-09-04",
        credentialUrl: "https://coursera.org/share/ca08f594080138cbcb6e6d65de8a22c9",
        image: "@assets/Screenshot 2025-08-07 213229_1754671102578.png",
        description: "Learn to apply UX design principles to create solutions for social good while preparing for UX careers.",
        skills: ["UX Design", "Social Impact Design", "Career Preparation"],
        featured: "true"
      },
      {
        title: "Create High-Fidelity Designs and Prototypes in Figma",
        issuer: "Google (via Coursera)",
        issueDate: "2024-08-23",
        credentialUrl: "https://coursera.org/share/77f54540bd8cd3eeb62ee8e9063a3130",
        image: "@assets/Screenshot 2025-08-07 213247_1754671102578.png",
        description: "Advanced Figma skills for creating high-fidelity designs and interactive prototypes.",
        skills: ["Figma", "High-Fidelity Design", "Interactive Prototypes", "Design Systems"],
        featured: "true"
      },
      {
        title: "Build Wireframes and Low-Fidelity Prototypes",
        issuer: "Google (via Coursera)",
        issueDate: "2024-08-21",
        credentialUrl: "https://coursera.org/share/501d006eca9994f9fa901043665f456d",
        image: "@assets/Screenshot 2025-08-07 213305_1754671102579.png",
        description: "Learn to create wireframes and low-fidelity prototypes as part of the design process.",
        skills: ["Wireframing", "Low-Fidelity Prototyping", "Information Architecture"],
        featured: "true"
      },
      {
        title: "Foundations of User Experience (UX) Design",
        issuer: "Google (via Coursera)",
        issueDate: "2024-08-19",
        credentialUrl: "https://coursera.org/share/46d2324026d8a82ef9f432e519222b43",
        image: "@assets/Screenshot 2025-08-07 213320_1754671102579.png",
        description: "Introduction to UX design fundamentals, design thinking process, and accessibility principles.",
        skills: ["UX Fundamentals", "Design Thinking", "Accessibility", "User Empathy"],
        featured: "true"
      },
      {
        title: "Build Dynamic User Interfaces (UI) for Websites",
        issuer: "Google (via Coursera)",
        issueDate: "2024-08-23",
        credentialUrl: "https://coursera.org/share/12e01427db15bb2aa68968e8ad36e361",
        image: "@assets/Screenshot 2025-08-07 213338_1754671102579.png",
        description: "Learn to design and build responsive, dynamic user interfaces for websites.",
        skills: ["UI Design", "Responsive Design", "Web Development", "User Interfaces"],
        featured: "true"
      },
      {
        title: "Start the UX Design Process: Empathize, Define, and Ideate",
        issuer: "Google (via Coursera)",
        issueDate: "2024-08-23",
        credentialUrl: "https://coursera.org/share/782f9caf5cd976b1e5a7d7ff9ed8c3af",
        image: "@assets/Screenshot 2025-08-07 213408_1754671102580.png",
        description: "Learn the first three phases of the design thinking process: empathize, define, and ideate.",
        skills: ["Design Thinking", "User Empathy", "Problem Definition", "Ideation"],
        featured: "true"
      },
      {
        title: "Conduct UX Research and Test Early Concepts",
        issuer: "Google (via Coursera)",
        issueDate: "2024-08-23",
        credentialUrl: "https://coursera.org/share/c594fbdcbdd366b3a6abb64219ae4e93",
        image: "@assets/Screenshot 2025-08-07 213423_1754671102580.png",
        description: "Learn to conduct user research and test early design concepts and prototypes.",
        skills: ["User Research", "Usability Testing", "Research Methods", "User Interviews"],
        featured: "true"
      },
      {
        title: "Introduction to Cyber Security",
        issuer: "Simplilearn SkillUp",
        issueDate: "2024-06-11",
        credentialId: "6718232",
        credentialUrl: "https://simpli-web.app.link/e/xhlIhqgGFVb",
        image: "@assets/Screenshot 2025-08-07 213439_1754671102580.png",
        description: "Foundational course covering cyber security principles, threat analysis, and security best practices.",
        skills: ["Cyber Security", "Threat Analysis", "Security Best Practices", "Risk Management"],
        featured: "true"
      },
      {
        title: "Building a Machine Learning Ready Organization",
        issuer: "Simplilearn SkillUp",
        issueDate: "2024-06-11",
        credentialId: "6718015",
        credentialUrl: "https://simpli-web.app.link/e/9CIcOkpGFVb",
        image: "@assets/Screenshot 2025-08-07 213451_1754671102580.png",
        description: "Learn to build organizational capabilities for successful machine learning implementation and adoption.",
        skills: ["Machine Learning Strategy", "Organizational Development", "ML Implementation", "Data Strategy"],
        featured: "true"
      },
      {
        title: "Getting Python Interview Ready",
        issuer: "Simplilearn SkillUp",
        issueDate: "2024-06-10",
        credentialId: "6715181",
        credentialUrl: "https://simpli-web.app.link/e/xFagQHcGFVb",
        image: "@assets/Screenshot 2025-08-07 213505_1754671102580.png",
        description: "Prepare for Python technical interviews with coding challenges, data structures, and algorithms.",
        skills: ["Python", "Technical Interviews", "Data Structures", "Algorithms", "Problem Solving"],
        featured: "true"
      },
      {
        title: "Python (Basic)",
        issuer: "HackerRank",
        issueDate: "2024-06-09",
        credentialId: "B1ESE3025281",
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/b1e5e3025281",
        image: "@assets/Screenshot 2025-08-07 213519_1754671102581.png",
        description: "Demonstrated proficiency in Python programming fundamentals through HackerRank skill assessment.",
        skills: ["Python", "Programming Fundamentals", "Problem Solving", "Code Implementation"],
        featured: "true"
      },
      {
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        issueDate: "2025-06-14",
        credentialId: "D525C9BFDDFC",
        credentialUrl: "https://www.hackerrank.com/certificates/iframe/d525c9bfddfc",
        image: "@assets/Screenshot 2025-08-07 213648_1754671102581.png",
        description: "Certified in basic problem-solving skills including algorithmic thinking and logical reasoning.",
        skills: ["Problem Solving", "Algorithms", "Logical Reasoning", "Analytical Thinking"],
        featured: "true"
      }
    ];

    sampleCertificates.forEach(certificate => {
      const id = randomUUID();
      const fullCertificate = {
        ...certificate,
        expiryDate: certificate.expiryDate ?? null,
        credentialId: certificate.credentialId ?? null,
        credentialUrl: certificate.credentialUrl ?? null,
        image: certificate.image ?? null,
        description: certificate.description ?? null,
        skills: certificate.skills ?? null,
        featured: certificate.featured ?? null,
        id,
        createdAt: new Date()
      };
      this.certificates.set(id, fullCertificate);
    });
  }
}

export const storage = new MemStorage();
