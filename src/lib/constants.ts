export interface NavigationItem {
  title: string
  href: string
  iconName?: string // For Lucide icons
  icon?: 'projects' | 'contact' | 'blog' | 'resume'
  color: 'purple' | 'gray' | 'black'
  download?: boolean
}

export const navigationItems: NavigationItem[] = [
  {
    title: "projects",
    href: "/projects",
    icon: "projects",
    color: "purple",
  },
  {
    title: "contact me",
    href: "/contact",
    icon: "contact",
    color: "gray",
  },
  {
    title: "blog",
    href: "/blog",
    icon: "blog",
    color: "black",
  },
  {
    title: "resume",
    href: "/Resume_Nurana_Rustamli.pdf",
    icon: "resume",
    color: "purple",
    download: true,
  },
];

export const socialLinks = {
  github: "https://github.com/nrustamli",
  linkedin: "https://linkedin.com/in/your-profile", // Update with your LinkedIn
} as const;

