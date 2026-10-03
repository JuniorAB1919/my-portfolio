import authentication from '../assets/projects/authentication.jpg'
import flux_project from '../assets/projects/flux_project.jpg'
import linimate_project from '../assets/projects/linimate_project.png'
import personalFinancial from '../assets/projects/personalFinancial.jpg'
import Restaurant from '../assets/projects/Restaurant.jpg'

export const profile = {
  name: 'Andrews Osei Bonsu',
  role: 'Software Engineer',
  focus: 'Backend & Full-Stack Developer',
  tagline:'I design and build practical software systems — from responsive interfaces to secure, reliable backend services.',
  location: 'University of Mines and Technology · Computer Science & Engineering',
  email: 'bonsuandrewsosei1919@gmail.com',
  phones: ['053 154 9801', '020 241 8709'],
  github: 'https://github.com/JuniorAB1919',
  githubHandle: 'github.com/JuniorAB1919',
  linkedin: 'https://www.linkedin.com/in/andrews-osei-bonsu',
}

export const heroStack = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Flask', icon: 'flask' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' },
]

export const about = {
  paragraphs: [
    "I'm a software engineer with a strong interest in building practical solutions to real problems. My work spans full-stack web applications, backend APIs, authentication systems, developer tools, financial applications and business management software.",
    'I enjoy taking an idea, or a problem someone actually has, and turning it into a functional, structured, usable system — then improving it as requirements and feedback come in.',
    "I'm particularly interested in backend development, full-stack architecture, applied AI and automation, and in continually improving how I design and build reliable software.",
  ],
  interests: ['Backend Engineering', 'Full-Stack Systems', 'AI & Automation', 'Data Security'],
}

export const process = [
  { step: '01', title: 'Understand', body: 'Start with the problem, the requirements, and the people who will actually use the system.' },
  { step: '02', title: 'Design', body: 'Break the problem into manageable components and design the architecture before writing code.' },
  { step: '03', title: 'Build', body: 'Develop the frontend, backend and supporting services with clean, modular, maintainable code.' },
  { step: '04', title: 'Test', body: 'Validate functionality through structured testing, debugging and real-world usage scenarios.' },
  { step: '05', title: 'Improve', body: 'Refine the system based on testing, feedback, and requirements that change as it gets used.' },
]

export const skillGroups = [
  { label: 'Software Engineering', items: ['Software Architecture', 'REST API Design', 'OOP', 'Authentication & Authorization', 'Testing', 'Debugging'] },
  { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend', items: ['Python', 'Flask', 'FastAPI', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'SQLAlchemy'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Database Design', 'JPA / Hibernate'] },
  { label: 'Tools', items: ['Git & GitHub', 'Docker', 'Swagger / OpenAPI', 'TanStack Query', 'Zustand'] },
]

export const projects = [
  {
    id: 'linimate',
    image: linimate_project,
    name: 'Linimate',
    type: 'Developer Tool',
    status: 'Live',
    description: 'An educational programming visualization platform that helps junior developers understand how code executes, step by step.',
    focus: ['Developer Tools', 'Code Execution', 'Visualization'],
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'Monaco Editor'],
    whatWasHard: `The trickiest part was building the code execution and visualization system. 
                  It was challenging to safely execute the user’s code, capture each step of execution, 
                  and then translate those steps into a clear visual representation of variables, outputs, 
                  and the current line being executed.`,
    links: { demo: '#', github: '#' },
  },
  {
    
  id: 'flux',
  image: flux_project,
  name: 'Flux',
  type: 'Product Engineering',
  status: 'Live',
  description:
    `A modern Kanban-style project management app — boards, lists and cards with drag-and-drop, 
    authentication, notifications, attachments, comments, checklists and optimistic UI.`,
  focus: [
    'Full-Stack Development',
    'State Management',
    'UI Architecture'
  ],
  tech: [
    'React',
    'TypeScript',
    'Vite',
    'Tailwind CSS',
    'Zustand',
    'TanStack Query',
    'Socket.IO'
  ],

  whatWasHard:
    `The trickiest part was managing complex state across boards, lists, cards, 
    and user interactions while keeping the UI responsive. Implementing drag-and-drop with optimistic updates, 
    rollback on failures, authentication state, file attachments, comments, checklists, and notifications required 
    careful coordination between Zustand and TanStack Query. Building the mock API layer also added complexity
     because it had to simulate realistic network delays, CRUD operations, and failure scenarios 
     while keeping the frontend experience consistent.`,
  links: {
    demo: '#',
    github: '#'
  }

  },
  {
  
  id: 'finance-tracker',
  image: personalFinancial,
  name: 'Personal Finance Tracker',
  type: 'Financial Application',
  status: 'Completed',
  description: 'A full-stack platform for managing transactions, analyzing financial activity and exploring investment insights.',
  focus: ['Full-Stack Development', 'Analytics', 'Security'],
  tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'JPA', 'Recharts'],
  whatWasHard: `The most challenging part was connecting the Spring Boot backend with the React dashboard 
  while keeping financial data secure and user-specific. Building the analytics and investment features 
  also required handling different data flows and external market data, including fallback data when live 
  market information was unavailable. Maintaining a consistent and responsive experience across the dashboard, 
  transactions, analytics and investment views required careful API design and state management.`,
  links: { github: '#' },
  },
  {
  
  id: 'flask-auth',
  image: authentication,
  name: 'Flask Authentication System',
  type: 'Backend / REST API',
  status: 'Completed',
  description: `A modular authentication and authorization API — JWT authentication, role-based access control, 
  token blacklisting, audit logging, secure password hashing, input validation and database migrations.`,
  focus: ['Backend Engineering', 'Authentication', 'Security'],
  tech: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'Marshmallow', 'Bcrypt', 'Pytest'],
  whatWasHard: `The most challenging part was designing a secure authentication flow while keeping the 
  backend modular and maintainable. JWT authentication had to work alongside token blacklisting, 
  role-based access control, password hashing, input validation and audit logging without tightly 
  coupling these responsibilities. Separating the application into routes, services, schemas, models 
  and utilities helped keep the security logic organized, testable and easier to extend.`,
  links: { github: '#' },
  },
  {

  id: 'restaurant-oms',
  image: Restaurant,
  name: 'Restaurant Order Management System',
  type: 'Business Application',
  status: 'Completed',
  description: `A professional restaurant management system for managing menus, processing orders, monitoring queues, 
  generating receipts, tracking sales and maintaining persistent business data.`,
  focus: ['Order Processing', 'Data Management', 'Business Logic'],
  tech: ['Python', 'CSV', 'WebView GUI', 'Data Validation', 'Reporting'],
  whatWasHard: `The most challenging part was designing the order-processing workflow 
  and keeping the different parts of the system synchronized. Menu management, order creation,
  queue status updates, tax calculations, receipt generation and sales reporting all depended on consistent data. 
  Building reliable CSV-based persistence with validation, automatic backups, atomic writes and error handling also 
  required careful attention to data integrity.`,
  links: { github: '#' },

  },
]