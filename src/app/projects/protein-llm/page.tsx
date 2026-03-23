'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HelixPointCloud3D from '@/components/pointclouds/HelixPointCloud3D'
import Star3D from '@/components/pointclouds/Star3D'
import ThemeToggle from '@/components/ThemeToggle'

export default function ProteinLLMPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] dark:bg-[#1c1336]">

      {/* Nav */}
      <div className="px-8 md:px-12 lg:px-16 pt-8 md:pt-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7">
            <Star3D className="w-full h-full" minHeight="0" />
          </div>
          <Link
            href="/"
            className="text-lg md:text-xl text-black dark:text-white font-aldrich font-thin-aldrich hover:opacity-70 transition-opacity"
          >
            Nurana Rustamli
          </Link>
        </div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="text-center px-8 pt-16 pb-8"
      >
        <h1
          className="text-5xl md:text-6xl text-black dark:text-white font-aldrich font-thin-aldrich mb-4 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => window.location.reload()}
        >
          Domain BERT
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Masters Research Project where I trained an encoder on domain-level sequences to obtain an embedding space covering 77 million protein.
        </p>
       
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
          {['Python', 'PyTorch' , 'Transformer', 'BERT', 'AlphaFold', 'Pfam', 'Masked Modeling'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-lg border border-[#B64CF7] dark:border-indigo-500 bg-[#F5E6FD] dark:bg-indigo-900/30 text-[#B64CF7] dark:text-indigo-300 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://github.com/nrustamli/domainbert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="/domainbert.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 rounded-md text-sm font-medium hover:bg-white/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download PDF
          </a>
        </div>
      </motion.div>

      {/* 3D + Abstract */}
      <div className="flex items-center px-8 md:px-12 lg:px-16">
        <div className="relative w-1/2 h-[55vh]">
          <HelixPointCloud3D xLookAt={0} />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl md:text-3xl font-aldrich text-black dark:text-white mb-4 text-center">Abstract</h2>
     <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          Today protein LLMs are widely used to solve tasks like structure and function prediction. With
their utility depending on the quality of the learned embedding space. To build such spaces,
transformer-based masked-token models are typically trained on amino-acid tokenisations. This
study asks whether biological structure could be similarly captured if tokens are protein domains
instead. We train an encoder on domain-level sequences and obtain an embedding space covering
77 million proteins. The resulting space shows some organisation: embeddings cluster by similarity,
embedding proximity correlates with multi-domain architecture order, and neighbours display
Gene Ontology consistency, indicating that the model captures both domain composition and
ordering. Despite limits in training scale and embedding dimensionality, these results provide
proof of concept that domain-based tokenisation is biologically informative. We conclude that
protein LLMs trained using domain tokens can complement residue-level models and may support
downstream applications such as protein function prediction and design.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-8 md:px-12 pb-16">
        <Link href="/projects" className="text-purple-500 hover:underline text-sm md:text-base">
          ← Back to Projects
        </Link>
      </div>

      <ThemeToggle />
    </main>
  )
}
