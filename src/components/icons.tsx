import { Code2, GraduationCap, Compass, FlaskConical } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Role } from "@/data/portfolio";

export const roleIcons: Record<Role["icon"], LucideIcon> = {
  code: Code2,
  podium: GraduationCap,
  compass: Compass,
  flask: FlaskConical,
};
