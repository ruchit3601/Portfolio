"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import {
  Play,
  Info,
  Github,
  Mail,
  Phone,
  Linkedin,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  Download,
  Menu,
  X,
  Send,
  Star,
  Trophy,
  Target,
} from "lucide-react"

export default function NetflixResume() {
  const [selectedSection, setSelectedSection] = useState("overview")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setSelectedSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: `Thanks ${name}! I'll get back to you soon.`,
    })
    setContactFormOpen(false)
  }

  // Handle PDF download
  const handleDownloadPDF = () => {
    toast({
      title: "Generating PDF...",
      description: "Your PDF will be ready in a moment!",
    })
    setTimeout(() => {
      window.print()
    }, 500)
  }

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "C++", "Java", "C#"],
    "Frameworks & Libraries": ["Express.js", "React", "Node.js", "Django", "Django REST Framework", ".NET"],
    "Web Technologies": ["HTML", "CSS", "JavaScript", "Web APIs", "ASP.NET MVC", "Responsive Web Design"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "GCP", "Kubernetes", "Docker", "CI/CD Pipelines"],
    "DevOps & Tools": ["Git", "GitHub", "GitLab", "Vercel", "Eclipse", "VS Code", "PyCharm", "Apache Tomcat"],
    "Testing & Debugging": ["Debugging", "Automated Testing (Postman, Jest)", "Regression Tests", "Unit Testing"],
    "Soft Skills": ["SEO", "Microsoft Word", "Excel", "Google Docs", "Google Sheet"],
  }

  const projects = [
    {
      id: 1,
      title: "Skyward Travels",
      date: "Mar 2025",
      description:
        "Designed a simulation of a microservices-based travel platform with booking, payment, loyalty rewards, and analytics dashboards.",
      longDescription:
        "A comprehensive microservices-based travel platform simulation that demonstrates real-world booking systems, payment processing, and customer loyalty programs. Features interactive dashboards and real-time user interactions.",
      features: [
        "Developed full-stack features for booking flow, loyalty point system, and real-time user interaction using React, Node.js, and Framer Motion",
        "Created interactive dashboards for customer journey, BI reports, and system health across services",
        "Simulated real-time events and 90% success-rate payment logic for demo purposes",
        "Implemented secure role-based access and smooth UI transitions using Tailwind CSS",
        "Microservices architecture with healthcare, logistics, and workforce management modules",
        "Real-time analytics and business intelligence reporting",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Framer Motion",
        "Tailwind CSS",
        "MongoDB",
        "Express.js",
        "Microservices",
        "REST APIs",
        "Role-based Access",
      ],
      github: "https://github.com/ruchit3601/skyward-travels",
      demo: "https://skyward-travels-39j4.vercel.app/",
      impact: "Microservices-based architecture simulation",
    },
    {
      id: 2,
      title: "FoodDelivery",
      date: "Feb 2022",
      description: "Developed a real-time food delivery platform using React.js, Node.js, and MongoDB.",
      longDescription:
        "A comprehensive food delivery platform that connects customers with restaurants. Features real-time order tracking, secure payment processing, and an intuitive user interface for seamless food ordering experience.",
      features: [
        "Implemented secure authentication and session management",
        "Integrated payment gateways and real-time order tracking",
        "Deployed using Kubernetes, Docker, and CI/CD pipelines",
        "Real-time notifications for order status updates",
        "Restaurant dashboard for order management",
        "Customer review and rating system",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "Nginx",
        "Kubernetes",
        "Docker",
        "Travis CI",
        "Postman",
      ],
      github: "https://github.com/ruchit3601/master-project",
      demo: "http://13.234.14.85:3080/delivery",
      impact: "Real-time order tracking system",
    },
    {
      id: 3,
      title: "Quiz-Using-Django",
      date: "July 2024",
      description: "Developed an engaging multiuser quiz platform using Django and Python.",
      longDescription:
        "An interactive quiz platform that allows multiple users to participate in quizzes simultaneously. Features performance analytics, real-time scoring, and comprehensive admin dashboard for quiz management.",
      features: [
        "Ensured seamless functionality with robust validations and error-handling",
        "Delivered actionable insights by visualizing performance trends with Tableau",
        "Created a dynamic, user-friendly application",
        "Multi-user support with real-time scoring",
        "Admin panel for quiz creation and management",
        "Performance analytics and reporting",
      ],
      tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Tableau"],
      github: "https://github.com/ruchit3601/Quiz-Using-Django",
      demo: "#",
      impact: "Enhanced knowledge assessment for 500+ users",
    },
    {
      id: 4,
      title: "TicketHub",
      date: "May 2021 - July 2021",
      description: "Optimized frontend performance, increasing booking efficiency by 30%.",
      longDescription:
        "A comprehensive movie ticket booking platform with real-time seat selection, promo code integration, and secure payment processing. Built with focus on user experience and performance optimization.",
      features: [
        "Developed intuitive UI for movie rentals and promo code applications",
        "Integrated RESTful APIs for seamless data retrieval",
        "Implemented Razorpay payment gateway for secure transactions",
        "Improved cross-browser compatibility",
        "Real-time seat selection and booking",
        "Mobile-responsive design",
      ],
      tech: ["JavaScript", "HTML", "CSS", "RESTful APIs", "Razorpay"],
      github: "https://github.com/ruchit3601/bookmyshow",
      demo: "https://bookmyshow.vercel.app/",
      impact: "30% increase in booking efficiency",
    },
  ]

  const experience = [
    {
      title: "Software Developer Intern",
      company: "SilverThread Solutions – Toronto, ON",
      period: "Jan 2025 – Apr 2025",
      location: "Toronto, ON",
      type: "Internship",
      achievements: [
        "Collaborated in a cross-functional team to design and prototype internal tools for healthcare, logistics, and workforce management",
        "Led the development of a microservices-based Skyward Travels platform, simulating real-world booking, payment, and loyalty modules with interactive dashboards",
        "Contributed to system architecture planning, API design, and front-end development using React.js, Tailwind CSS, and Node.js",
        "Delivered a secure, role-based membership management web app for the Horizon Hikers initiative using MongoDB, Express, and HTML/CSS",
        "Actively participated in sprint planning, daily standups, and weekly demos, presenting progress to senior mentors and peers",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "MongoDB",
        "Express.js",
        "Microservices",
        "System Architecture",
        "API Design",
      ],
    },
    {
      title: "Junior Software Expert",
      company: "The Logic Factory – Delmia Quintiq (Private Community)",
      period: "Jan 2023 - Dec 2023",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Actively attended agile meetings with the manager, discussing project roadmap and key deliverables",
        "Contributed to project success by preparing and delivering presentations at demo presentations",
        "Proactively learned and mastered the Delmia Quintiq platform, an advanced supply chain software",
        "Successfully developed an application for QuiCo to optimize planning and scheduling using Quill programming language",
        "Demonstrated adaptability, Innovation, and Problem-Solving skills in supply chain management",
      ],
      skills: ["Agile", "Supply Chain Management", "Quill Programming", "Project Management", "Presentations"],
    },
    {
      title: "MERN Developer Intern",
      company: "ShapeAi – Mumbai, India",
      period: "Jun 2021 - Dec 2021",
      location: "Mumbai, India",
      type: "Internship",
      achievements: [
        "Designed and developed web applications using MongoDB, Express.js, React, and Node.js",
        "Created RESTful APIs and integrated them with frontend applications",
        "Improved database performance using MongoDB indexing and query optimization",
        "Worked in an Agile environment, contributing to sprint planning and daily stand-ups",
      ],
      skills: ["MERN Stack", "RESTful APIs", "MongoDB", "React", "Node.js", "Express.js"],
    },
  ]

  const education = [
    {
      degree: "Postgraduate Diploma in FSDT (Full Stack Software Development)",
      institution: "LAMBTON COLLEGE, TORONTO",
      period: "2024 - 2025",
      cgpa: "3.6",
      location: "Toronto, Canada",
      highlights: [
        "Software Engineering, Database Management, Web Development, Data Structures and Algorithms",
        "Participated in Google Developer Student Club at Lambton(LCIT)",
        "Organized tech-workshops for students during 2024",
      ],
    },
    {
      degree: "Bachelor Degree in Computer Engineering",
      institution: "GUJARAT TECHNOLOGICAL UNIVERSITY, INDIA",
      period: "2020 - 2023",
      cgpa: "8.9",
      location: "Gujarat, India",
      highlights: [
        "Learned and mastered various coding languages",
        "Successfully collaborated on team projects",
        "Delivered impactful solutions",
      ],
    },
  ]

  const awards = [
    {
      title: "Job-a-thon by GeeksforGeeks",
      rank: "1701st out of 1.2 lakh participants",
      description: "Demonstrated competitive problem-solving skills and algorithmic efficiency",
    },
    {
      title: "Scaler CodeX 2.0+",
      rank: "985th out of 13,000 participants",
      description: "Showcased advanced coding expertise",
    },
    {
      title: "February Long 2022-II, Division 3",
      rank: "171st rank",
      description: "Highlighted strong algorithmic problem-solving capabilities",
    },
    {
      title: "CodeKaze",
      rank: "1475th out of 10,000 participants",
      description: "Emphasized efficient coding and logical thinking",
    },
    {
      title: "Job-a-thon by GeeksforGeeks",
      rank: "1454th rank",
      description: "Showcased persistence and coding proficiency",
    },
    {
      title: "Newton's Grand Coding Contest 2022",
      rank: "5257th out of 11,000 participants",
      description: "Demonstrated consistent problem-solving abilities",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Netflix-style Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-gradient-to-b from-black to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-red-600 text-2xl font-bold hover:text-red-500 transition-colors"
            >
              RUCHIT
            </button>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("overview")}
                className={`hover:text-gray-300 transition-colors ${selectedSection === "overview" ? "text-white" : "text-gray-400"}`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`hover:text-gray-300 transition-colors ${selectedSection === "experience" ? "text-white" : "text-gray-400"}`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`hover:text-gray-300 transition-colors ${selectedSection === "projects" ? "text-white" : "text-gray-400"}`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`hover:text-gray-300 transition-colors ${selectedSection === "skills" ? "text-white" : "text-gray-400"}`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className={`hover:text-gray-300 transition-colors ${selectedSection === "education" ? "text-white" : "text-gray-400"}`}
              >
                Education
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadPDF}
              className="hidden md:flex bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("overview")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors"
              >
                Education
              </button>
              <Button onClick={handleDownloadPDF} className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="overview"
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            RUCHIT <span className="text-red-600">CHUDASAMA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Software Developer | MERN Stack Expert | Problem Solver
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>ruchitchudasama123@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>6479953601</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Toronto, Canada</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              View Portfolio
            </Button>
            <Dialog open={contactFormOpen} onOpenChange={setContactFormOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
                >
                  <Info className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle>Get In Touch</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Let's discuss how we can work together!
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required className="bg-gray-800 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      className="bg-gray-800 border-gray-600 text-white"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/ruchit3601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruchit-chudasama-040070211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/Ruchit_3601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Code className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Education Section */}
        <section id="education" className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{edu.degree}</CardTitle>
                  <CardDescription className="text-red-400">{edu.institution}</CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    <Badge variant="outline" className="border-red-600 text-red-400">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">{exp.title}</CardTitle>
                  <CardDescription className="text-red-400">{exp.company}</CardDescription>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="border-red-600 text-red-400 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </CardTitle>
                  <CardDescription className="text-red-400">{project.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-red-900 text-red-200">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-green-600 text-green-400 text-xs">
                      <Target className="w-3 h-3 mr-1" />
                      {project.impact}
                    </Badge>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Detail Modal */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
              {selectedProject && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-red-400">
                      {selectedProject.date} • {selectedProject.impact}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-300">{selectedProject.longDescription}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-red-900 text-red-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-4 pt-4">
                      <Button asChild className="bg-red-600 hover:bg-red-700">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        asChild
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="w-8 h-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-red-600 text-red-400 text-xs hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Volunteering Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">Volunteering & Leadership</h2>
          </div>
          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
            <CardHeader>
              <CardTitle className="text-white">TUTOR</CardTitle>
              <CardDescription className="text-red-400">NRC Coding Club – India</CardDescription>
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                May 2022 – Dec 2023
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">
                  • Teaching data structures & algorithms to new programmers, providing clear understanding of
                  fundamental concepts
                </li>
                <li className="text-gray-300 text-sm">
                  • Participated in real-time coding contests on platforms like LeetCode, HackerRank, and GeeksforGeeks
                </li>
                <li className="text-gray-300 text-sm">
                  • Introduced students to various coding platforms for effective practice and skill development
                </li>
                <li className="text-gray-300 text-sm">
                  • Organized team-building workshops and participated in peer-led hackathons
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Awards Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="w-8 h-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold">Awards & Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{award.title}</h4>
                      <p className="text-red-400 text-xs mb-2">{award.rank}</p>
                      <p className="text-gray-400 text-xs">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">Ready to build something amazing together?</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:ruchitchudasama123@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ruchit3601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruchit-chudasama-040070211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <Separator className="my-6 bg-gray-700" />
          <p className="text-gray-500 text-sm">© 2025 Ruchit Chudasama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
