export interface Project {
  id: number
  slug: string
  title: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'spot-the-artist',
    title: 'Spot the Artist',
    description:
      "An AI-powered Web Application that allows users to discover and store Anna Laurini's famous artworks around their city.",
  },
  {
    id: 2,
    slug: 'protein-llm',
    title: 'Protein LLM',
    description:
      'Masters Research Project where I trained an encoder on domain-level sequences to obtain an embedding space covering 77 million protein.',
  },
  {
    id: 3,
    slug: 'gen-nard',
    title: 'GenNard',
    description:
     'Baggammon game where users can generate themed checkers and a board.',
  },
  {
    
    id: 4,
    slug: 'galanthus',
    title: 'Galanthus',
    description: 'A small group research project that suggests plan for a blockchain-powered disaster relife platform.',
  },
]
