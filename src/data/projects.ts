export type ProjectCategory = "development" | "robotics" | "ai";

export type Project = {
  id: string;
  anchor: string;
  category: ProjectCategory;
  featured?: boolean;
  roleKey: string;
  statusKey: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "gan-sr",
    anchor: "gansr",
    category: "ai",
    featured: true,
    roleKey: "role.team2",
    statusKey: "status.comingSoon",
    tech: ["Python", "GAN", "Computer Vision", "Deep Learning"],
    link: "/projects/development#gansr",
  },
  {
    id: "social-network",
    anchor: "social-network",
    category: "development",
    featured: true,
    roleKey: "role.solo",
    statusKey: "status.comingSoon",
    tech: ["Python", "Django", "SQL"],
    link: "/projects/development#social-network",
  },
  {
    id: "chatbot",
    anchor: "chatbot",
    category: "development",
    featured: false,
    roleKey: "role.solo",
    statusKey: "status.comingSoon",
    tech: ["Python", "Django", "AI"],
    link: "/projects/development#chatbot",
  },
  {
    id: "realtime-chat",
    anchor: "realtime-chat",
    category: "development",
    featured: true,
    roleKey: "role.team2",
    statusKey: "status.comingSoon",
    tech: ["Node.js", "React", "MySQL", "WebSockets"],
    link: "/projects/development#realtime-chat",
  },
  {
    id: "smart-campus",
    anchor: "smart-campus",
    category: "robotics",
    featured: true,
    roleKey: "role.teamLead",
    statusKey: "status.comingSoon",
    tech: ["ESP32", "Arduino", "Sensors", "Real-time Web"],
    link: "/projects/robotics-iot#smart-campus",
  },
];
