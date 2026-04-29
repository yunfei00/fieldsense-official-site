import {
  Activity,
  Antenna,
  BarChart3,
  Clock3,
  Cpu,
  FileText,
  FlaskConical,
  Laptop,
  Layers3,
  Map,
  Radar,
  Radio,
  ScanLine,
  Settings2,
  ShieldCheck,
  Target
} from "lucide-react";
import type { IconName } from "@/types/content";

export const iconMap = {
  radar: Radar,
  activity: Activity,
  map: Map,
  target: Target,
  cpu: Cpu,
  radio: Radio,
  shield: ShieldCheck,
  antenna: Antenna,
  flask: FlaskConical,
  scan: ScanLine,
  chart: BarChart3,
  laptop: Laptop,
  settings: Settings2,
  clock: Clock3,
  layers: Layers3,
  file: FileText
} satisfies Record<IconName, typeof Activity>;

