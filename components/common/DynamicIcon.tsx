import React from "react";
import {
  SunMedium,
  Zap,
  Cpu,
  Wrench,
  ShieldCheck,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
  ExternalLink,
  FileText,
  ChevronRight,
  Menu,
  X,
  AlertCircle,
  HelpCircle,
  Activity,
  LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  SunMedium,
  Zap,
  Cpu,
  Wrench,
  ShieldCheck,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Building2,
  ExternalLink,
  FileText,
  ChevronRight,
  Menu,
  X,
  AlertCircle,
  Activity,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent {...props} />;
}

