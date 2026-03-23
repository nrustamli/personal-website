'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import ProjectsIcon from '@/components/icons/ProjectsIcon'
import ContactIcon from '@/components/icons/ContactIcon'
import BlogIcon from '@/components/icons/BlogIcon'
import ResumeIcon from '@/components/icons/ResumeIcon'

const iconComponentMap: Record<string, React.FC<{ className?: string }>> = {
  projects: ProjectsIcon,
  contact: ContactIcon,
  blog: BlogIcon,
  resume: ResumeIcon,
}

interface NavigationCardProps {
  iconName?: string // For Lucide icons
  icon?: string // Custom animated SVG icon key
  title: string
  href: string
  color?: 'purple' | 'gray' | 'black'
  download?: boolean
}

const colorClasses = {
  purple: 'text-purple-500',
  gray: 'text-gray-600',
  black: 'text-black',
}

// Icon mapping - maps string names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  FolderKanban: LucideIcons.FolderKanban,
  Send: LucideIcons.Send,
  FileText: LucideIcons.FileText,
  FileCheck: LucideIcons.FileCheck,
} as Record<string, LucideIcon>

export default function NavigationCard({
  iconName,
  icon,
  title,
  href,
  color = 'purple',
  download,
}: NavigationCardProps) {
  const Icon = iconName ? iconMap[iconName] : null
  const InlineIcon = icon ? iconComponentMap[icon] : undefined

  const Wrapper = download
    ? (props: { children: React.ReactNode }) => (
        <a href={href} download>{props.children}</a>
      )
    : (props: { children: React.ReactNode }) => (
        <Link href={href}>{props.children}</Link>
      )

  return (
    <Wrapper>
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="
          group
          bg-white/20
          backdrop-blur-md
          border border-white/30
          rounded-lg
          shadow-lg
          hover:shadow-xl
          hover:bg-white/30
          transition-all
          duration-300
          p-6
          cursor-pointer
          h-full
          flex
          flex-col
          items-center
          justify-center
          relative
        "
      >
        {InlineIcon ? (
          // Animated inline SVG icon
          <div className="mb-4 w-12 h-12 flex items-center justify-center">
            <InlineIcon className="w-full h-full" />
          </div>
        ) : Icon ? (
          // Lucide icon
          <Icon className={cn('w-12 h-12 mb-4', colorClasses[color])} />
        ) : (
          // Fallback
          <LucideIcons.FileText className={cn('w-12 h-12 mb-4', colorClasses[color])} />
        )}
        <h3 className="text-lg font-medium text-black dark:text-white">{title}</h3>
      </motion.div>
    </Wrapper>
  )
}

