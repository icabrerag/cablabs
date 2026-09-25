export type Project = {
  id: "management" | "deuda" | "revely" | "novara" | "rengalil";
  title: string;
  stack: string[];
  visual: "management" | "finance" | "game" | "commerce" | "landing";
  href?: string;
  confidential?: boolean;
};

export const projects: Project[] = [
  { id: "management", title: "Business Management Platform", stack: ["Next.js", "FastAPI", "MySQL", "Docker", "TanStack Query"], visual: "management", confidential: true },
  { id: "deuda", title: "Deuda Cero", stack: ["Next.js", "FastAPI", "MySQL", "Docker"], visual: "finance" },
  { id: "revely", title: "Revely", stack: ["Next.js", "FastAPI", "MySQL", "Vercel", "Render"], visual: "game" },
  { id: "novara", title: "NOVARA", stack: ["Shopify", "E-commerce", "UI Design"], visual: "commerce" },
  { id: "rengalil", title: "Maderas Rengalil", stack: ["Next.js", "Responsive UI", "Vercel"], visual: "landing", href: "https://maderas-rengalil.vercel.app" },
];

export const stackItems = [
  ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query"],
  ["Python", "FastAPI", "Node.js", "REST APIs", "JWT / OAuth2"],
  ["MySQL", "PostgreSQL", "SQL", "Data modeling"],
  ["Docker", "Git / GitHub", "Vercel", "Render", "Azure", "CI/CD"],
];

export const explored = ["NestJS", "MongoDB", "GraphQL", "React Native", "AWS", "GCP", "Java / Spring", ".NET", "Testing", "Multi-tenant"];
