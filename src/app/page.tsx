import NavigationCard from '@/components/NavigationCard'
import SocialLinks from '@/components/SocialLinks'
import { navigationItems } from '@/lib/constants'

export default function Home() {
  return (
    <main className="min-h-screen relative p-8 md:p-12 lg:p-24" style={{ backgroundColor: '#F0EEEB' }}>
      {/* Name - Top Center */}
      <div className="w-full flex justify-center mb-8 lg:mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-aldrich font-thin-aldrich">
          Nurana Rustamli
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-12">
          {navigationItems.map((item) => (
            <NavigationCard
              key={item.href}
              iconName={item.iconName}
              iconPath={item.iconPath}
              title={item.title}
              href={item.href}
              color={item.color}
            />
          ))}
        </div>

        {/* Social Links - Bottom Center */}
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </main>
  )
}
