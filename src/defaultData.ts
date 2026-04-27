import { AppState } from "./types";

export const defaultState: AppState = {
  data: {
    personalInfo: {
      firstName: "Jane",
      lastName: "Doe",
      jobTitle: "Software Engineer",
      email: "jane.doe@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://janedoe.example",
      linkedin: "https://linkedin.com/in/janedoe",
      github: "https://github.com/dejmsi",
      summary: "A passionate and results-driven professional with experience in software development and a strong focus on delivering high-quality products. Eager to take on new challenges and contribute to team success.",
      atsContent: "Software Engineering, JavaScript, TypeScript, React, Node.js, Agile, Teamwork, Communication, Problem Solving"
    },
    experience: [
      {
        id: "1",
        company: "Tech Corp Inc.",
        role: "Senior Developer",
        startDate: "2020",
        endDate: "Present",
        description: "• Led a team of 5 developers to build and launch a new core product.\n• Improved application performance by 30% through code optimization.\n• Collaborated with product managers and designers to define technical requirements.",
      },
      {
        id: "2",
        company: "StartUp LLC",
        role: "Web Developer",
        startDate: "2018",
        endDate: "2020",
        description: "• Developed responsive and user-friendly web interfaces using React.\n• Integrated third-party APIs and services.\n• Participated in daily stand-ups and sprint planning.",
      }
    ],
    education: [
      {
        id: "1",
        institution: "University of Technology",
        degree: "B.S. in Computer Science",
        startDate: "2014",
        endDate: "2018",
      }
    ],
    skills: [
      { id: "s1", name: "JavaScript" },
      { id: "s2", name: "TypeScript" },
      { id: "s3", name: "React" },
      { id: "s4", name: "Node.js" },
      { id: "s5", name: "SQL" },
      { id: "s6", name: "Git & GitHub" }
    ],
    certifications: [
      { id: "c1", name: "AWS Certified Developer", date: "2021" }
    ],
    hobbies: [
      { id: "h1", name: "Photography" },
      { id: "h2", name: "Open Source Contributing" },
      { id: "h3", name: "Hiking" }
    ],
  },
  settings: {
    template: 'modern',
    fontFamily: 'font-sans',
    primaryColor: '#0f172a', // slate
  }
};
