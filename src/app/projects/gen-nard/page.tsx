'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import DicePointCloud3D from '@/components/pointclouds/DicePointCloud3D'
import Star3D from '@/components/pointclouds/Star3D'
import ThemeToggle from '@/components/ThemeToggle'

export default function GenNardPage() {
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
          GenNard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Baggammon game where users can generate themed checkers and a board.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {['React', 'TypeScript', 'Three.js', 'HuggingFace', 'Qwen-72B', 'FLUX.1', 'Firebase', 'Cloud Run', 'Docker'].map((tech) => (
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
            href="https://github.com/nrustamli/GenNard"
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
            href="https://gennard-app.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/30 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 rounded-md text-sm font-medium hover:bg-white/50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Live Site
          </a>
        </div>
      </motion.div>

      {/* 3D element */}
      <div className="relative w-full h-[55vh]">
        <DicePointCloud3D xLookAt={0} />
      </div>

      {/* Blog post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
        className="max-w-4xl mx-auto px-8 md:px-12 py-16"
      >
        <h2 className="text-3xl font-sans text-black dark:text-white mb-4">From Text Prompt to 3D Backgammon Board: How the AI Pipeline Works</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          You type &ldquo;moon vs sun&rdquo; into a text box. About thirty seconds later, you&apos;re moving crescent-moon checkers across a starry night board against golden sun discs. No image uploads, no manual configuration — just one string of text and the game re-skins itself. Here&apos;s exactly how that works under the hood.
        </p>

        <img
          src="/images/projects/gennard/moon_vs_star_theme_example.png"
          alt="Moon vs Star theme example"
          className="w-full rounded-lg mb-12 border border-black/10 dark:border-white/10"
        />

        {/* The Two-Step AI Pipeline */}
        <h2 className="text-2xl font-sans text-black dark:text-white mb-4">The Two-Step AI Pipeline</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          When you hit Generate, the client fires a single <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">POST /api/generate-theme</code> with two fields: your <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">prompt</code> and a <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">styleMode</code> (<code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">classic</code> or <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">creative</code>). That&apos;s it. Everything else happens on the server.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          The first thing the server does is <em>not</em> call an AI model. It hashes the request — <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">SHA-256(prompt|styleMode).slice(0, 16)</code> — and checks if a file already exists at <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">generated/&lt;hash&gt;/theme.json</code>. If it does, the response goes back immediately with zero AI cost. Same prompt, same result, instant return.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If it&apos;s a cache miss, the server spins up the two-step pipeline:
        </p>

        <img
          src="/images/projects/gennard/gennard_flowchart.svg"
          alt="AI pipeline flowchart"
          className="mx-auto block mb-6 dark:invert"
        />

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          <strong className="text-black dark:text-white">First the LLM doesn&apos;t draw anything, it plans.</strong> <strong className="text-black dark:text-white">Qwen-72B</strong> receives your raw prompt and its only job is to output a structured JSON object: a name and description for each player&apos;s theme, three image generation prompts (one per texture), and ten hex color values for the board UI. That&apos;s it. No images, just a plan. Text models are genuinely good at this kind of structured extraction — much better than asking an image model to also figure out the color palette.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          <strong className="text-black dark:text-white"> After that three images, fired in parallel.</strong> The server takes those three image prompts and sends them simultaneously to <strong className="text-black dark:text-white">FLUX.1-schnell</strong> (via HuggingFace). One call for player 1&apos;s checker, one for player 2&apos;s, one for the board texture. Because they run in parallel rather than sequentially, the total wait time is roughly the slowest single call — not three times longer.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          Each image comes back as a base64 data URL. The entire response — two checker textures, one board texture, ten colors, metadata — is one self-contained JSON object. Nothing is stored on a file server. Nothing requires a second fetch.
        </p>

        {/* From JSON Response to 3D Scene */}
        <h2 className="text-2xl font-sans text-black dark:text-white mb-4">From JSON Response to 3D Scene</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          The server response lands on the client as a single TypeScript interface called <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">ThemeGenerationResponse</code>, defined in <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">shared/</code> so both sides agree on the shape without duplicating types.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          On the client, a Zustand store acts as a simple state machine: <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">idle → loading → ready → error</code>. The <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">LandingPage</code> calls <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">generate()</code> and the store flips to <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">loading</code>. When the response arrives, it flips to <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">ready</code>. The <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">GamePage</code> watches the store and only renders the 3D board once status is <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">ready</code> — clean, no prop-drilling, no component talking directly to the API.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          The interesting part is <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">useTextureLoader</code>. Three.js normally wants a URL it can fetch — but the response already contains the full image data as base64 data URLs. The hook feeds those directly into <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">THREE.TextureLoader</code>, which handles base64 just fine. The result is <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">THREE.Texture</code> objects that get passed as props into the scene components. GPU receives the textures, <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">Checker3D</code> and <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">Board3D</code> apply them to their materials, and what the AI described in text is now physically rendered geometry.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          One detail worth noting: the hook cleans up on unmount — <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">texture.dispose()</code> — so you&apos;re not leaking GPU memory every time a user navigates away and back.
        </p>

        {/* The Orchestrator Pattern */}
        <h2 className="text-2xl font-sans text-black dark:text-white mb-4">The Orchestrator Pattern</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          The AI integration sits behind a simple interface. The active provider is controlled by a single environment variable — <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">THEME_PROVIDER</code> — so swapping models requires no route changes and no client changes.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          This works because both the HuggingFace orchestrator and any alternative implement the same interface:
        </p>
        <pre className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 overflow-x-auto mb-5">{`interface IOrchestrator {
  generate(prompt: string, styleMode: StyleMode): Promise<ThemeGenerationResponse>
}`}</pre>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          The entry point picks one at startup and the rest of the app never needs to know which it got. This is useful beyond just switching providers — you can point <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">THEME_PROVIDER</code> at a cheaper model in production and a more capable one for testing, without touching any application logic.
        </p>

        {/* The Game Engine */}
        <h2 className="text-2xl font-sans text-black dark:text-white mb-4">The Game Engine Is Deliberately Ignorant of All This</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          While the AI pipeline is async, non-deterministic, and talks to external services, the game engine is the exact opposite. It&apos;s a standalone TypeScript package with zero runtime dependencies. Every function is pure — same input always produces the same output. The core is a single reducer:
        </p>
        <pre className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 overflow-x-auto mb-5">{`gameReducer(state, action) → state`}</pre>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          The engine has no idea textures exist. The AI pipeline has no idea backgammon exists. They share no code. This separation is what makes both halves easy to reason about — the unpredictable part (AI) and the deterministic part (game logic) never get tangled together.
        </p>

        {/* Deployment */}
        <h2 className="text-2xl font-sans text-black dark:text-white mb-4">Deployment: One Routing Trick Worth Stealing</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          The client lives on Firebase Hosting (a CDN), the server lives on Cloud Run. Different domains — which normally means CORS headaches. Instead of configuring CORS headers, Firebase has a rewrite rule:
        </p>
        <pre className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 overflow-x-auto mb-5">{`{ "source": "/api/**", "run": { "serviceId": "gennard-server" } }`}</pre>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          From the browser&apos;s perspective, everything is the same origin. <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">/api/generate-theme</code> hits Firebase, Firebase proxies it to Cloud Run. No CORS config, no hardcoded backend URL in the client bundle.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          The Cloud Run service runs with <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">min-instances=1</code>, meaning there&apos;s always at least one warm container. AI calls already take 10–30 seconds — adding a cold-start on top of that would make the product feel broken. Keeping one instance alive is cheap compared to the UX cost.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
          Secrets (<code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">HF_TOKEN</code>, <code className="bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm">THEME_PROVIDER</code>) are injected at runtime by Google Secret Manager, never baked into the Docker image or committed to the repo.
        </p>

      </motion.div>

      {/* Back link */}
      <div className="max-w-2xl mx-auto px-8 md:px-12 pb-16">
        <Link href="/projects" className="text-purple-500 hover:underline text-sm md:text-base">
          ← Back to Projects
        </Link>
      </div>

      <ThemeToggle />
    </main>
  )
}
