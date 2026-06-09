export type Project = {
  id: string;
  title: string;
  sector: string;
  solutions: string;
  locations: number;
  owner: string;
  manager?: string;
  note?: string;
  createdAt: string;
  status: "active" | "inactive" | "completed" | string;
};