import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFlask,
  SiFastapi,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const ICONS = {
  python: SiPython,
  java: FaJava,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  flask: SiFlask,
  fastapi: SiFastapi,
  spring: SiSpring,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
}

// Renders a small brand icon for a given stack key, with a title for accessibility.
export default function TechIcon({ icon, name, size = 18 }) {
  const Icon = ICONS[icon]
  if (!Icon) return null
  return <Icon size={size} title={name} aria-label={name} />
}
