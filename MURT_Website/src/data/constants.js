// src/data/constants.js
// Centralized content data for easy editing

export const JOIN_URL = "#"; // Update with actual Discord/application link

export const CONTACT_EMAIL = "rov.club@example.com"; // Update with actual email

export const WHAT_WE_DO = [
  {
    title: "ROS2 Control",
    description: "Architecture and implementation of our robot's control system using ROS2, enabling modular and maintainable code."
  },
  {
    title: "Simulation",
    description: "Gazebo-based simulation environment for testing control algorithms and mission scenarios before deployment."
  },
  {
    title: "Perception & Vision",
    description: "Camera calibration, object detection, and situational awareness systems for autonomous navigation."
  },
  {
    title: "UI/Operator Station",
    description: "Requirements gathering, wireframes, and dashboard development for pilot telemetry and control interfaces."
  },
  {
    title: "Electronics & Power",
    description: "Power distribution design, safety systems, connector selection, and motor controller integration."
  },
  {
    title: "Mechanical Design",
    description: "Frame design, buoyancy calculations, tooling development, and waterproofing solutions."
  }
];

export const SUBTEAMS = [
  {
    name: "Control Systems",
    responsibilities: [
      "ROS2 architecture and node design",
      "Autonomy support and mission planning",
      "Thruster control loop integration",
      "Teaching ROS2 fundamentals to the team"
    ]
  },
  {
    name: "UI/Operator Station",
    responsibilities: [
      "Requirements gathering and wireframing",
      "Dashboard and telemetry displays",
      "Pilot interface development",
      "Real-time data visualization"
    ]
  },
  {
    name: "Vision/Perception",
    responsibilities: [
      "Camera selection and calibration",
      "Object detection and tracking",
      "Situational awareness systems",
      "Computer vision pipeline development"
    ]
  },
  {
    name: "Electrical",
    responsibilities: [
      "Power distribution design",
      "Safety systems and fail-safes",
      "Connector selection and waterproofing",
      "Motor controller integration"
    ]
  },
  {
    name: "Mechanical",
    responsibilities: [
      "Frame design and fabrication",
      "Buoyancy calculations and testing",
      "Tooling and manipulator design",
      "Waterproofing and pressure testing"
    ]
  }
];

export const TEAM_LEADS = [
  { name: "Open Role", role: "Control Systems Lead", photo: null },
  { name: "Open Role", role: "UI/Operator Station Lead", photo: null },
  { name: "Open Role", role: "Vision/Perception Lead", photo: null },
  { name: "Open Role", role: "Electrical Lead", photo: null },
  { name: "Open Role", role: "Mechanical Lead", photo: null }
];

export const SPONSOR_TIERS = [
  {
    name: "Platinum",
    benefits: [
      "Logo on ROV frame and competition materials",
      "Featured placement on website and social media",
      "Invitation to team events and demos",
      "Recognition in technical documentation",
      "Direct access to team members for recruitment"
    ]
  },
  {
    name: "Gold",
    benefits: [
      "Logo on website and competition materials",
      "Social media recognition",
      "Invitation to team demos",
      "Access to team members for recruitment"
    ]
  },
  {
    name: "Silver",
    benefits: [
      "Logo on website",
      "Social media mention",
      "Access to team members for recruitment"
    ]
  },
  {
    name: "Bronze",
    benefits: [
      "Logo on website",
      "Recognition in team communications"
    ]
  }
];

export const WHAT_YOU_LEARN = [
  {
    title: "Software Engineering",
    description: "ROS2, Python, C++, Git workflows, software architecture, and real-time systems."
  },
  {
    title: "Hardware Integration",
    description: "Sensor interfacing, motor control, power systems, and embedded programming."
  },
  {
    title: "Mechanical Design",
    description: "CAD modeling, fabrication techniques, material selection, and testing methodologies."
  },
  {
    title: "Project Management",
    description: "Agile workflows, documentation, code reviews, testing practices, and team collaboration."
  }
];

export const FAQ_ITEMS = [
  {
    question: "Do I need prior robotics experience?",
    answer: "No prior experience is required! We welcome students from all backgrounds and years. We'll teach you everything you need to know, from ROS2 basics to mechanical design principles."
  },
  {
    question: "What year can join?",
    answer: "Any year! We have members from first-year undergraduates to graduate students. Each brings unique perspectives and skills to the team."
  },
  {
    question: "How are teams organized?",
    answer: "We organize into subteams (Control Systems, UI/Operator Station, Vision/Perception, Electrical, Mechanical) but encourage cross-collaboration. Members often contribute to multiple areas."
  },
  {
    question: "What tools and technologies do you use?",
    answer: "ROS2 for control systems, Gazebo for simulation, GitHub for version control, CAD software for mechanical design, Python and C++ for software development, and various electronics tools for hardware work."
  },
  {
    question: "What's the time commitment?",
    answer: "We expect around 5-10 hours per week during the build season (fall/winter), with flexibility around exam periods. Meetings are typically weekly with additional work sessions."
  }
];

