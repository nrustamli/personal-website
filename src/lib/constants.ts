export interface NavigationItem {
  title: string
  href: string
  iconName?: string // For Lucide icons
  iconPath?: string // For custom image icons (path relative to public folder)
  color: 'purple' | 'gray' | 'black'
}

export const navigationItems: NavigationItem[] = [
  {
    title: "projects",
    href: "/projects",
    iconPath: "/images/icons/projects_icon.svg",
    color: "purple",
  },
  {
    title: "contact me",
    href: "/contact",
    iconPath: "/images/icons/contact_icon.svg",
    color: "gray",
  },
  {
    title: "blog",
    href: "/blog",
    iconPath: "/images/icons/blog_icon.svg",
    color: "black",
  },
  {
    title: "resume",
    href: "/resume",
    iconPath: "/images/icons/resume_icon.svg",
    color: "purple",
  },
];

export const socialLinks = {
  github: "https://github.com/nrustamli",
  linkedin: "https://linkedin.com/in/your-profile", // Update with your LinkedIn
} as const;

