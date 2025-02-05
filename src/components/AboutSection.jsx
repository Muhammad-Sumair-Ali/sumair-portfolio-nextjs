import {
    GithubIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon,
    MapPinIcon,
    LinkIcon,
    ClockIcon,
    HeartIcon,
  } from "lucide-react"
  import { Card, CardContent } from "@/components/ui/card"
  import Map from "./common/Map"
  
  export default function AboutSection() {
    return (
      <div className="m-auto relative max-w-[1010px] mb-12 mt-4 mx-auto p-4 space-y-4">
        <div className="absolute -right-72 -top-8 transform -translate-x-1/2 h-[230px] w-[650px] bg-gradient-to-r from-purple-900 via-pink-950 to-orange-900 blur-3xl opacity-40 -z-10"></div>
  
        {/* Grid container with improved responsive columns */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Location Card - Added overflow-hidden */}
          <Card className="bg-black text-white border-zinc-800 overflow-hidden">
            <CardContent>
              <div className="flex  items-center gap-2 p-4">
                <MapPinIcon className="w-4 h-4" />
                <span>Karachi, Sindh</span>
              </div>
              <div className=" relative h-[200px] w-full overflow-hidden rounded-lg">
                <Map className="h-full w-full" />
              </div>
            </CardContent>
          </Card>
  
          {/* Connect Card - Fixed height for consistency */}
          <Card className="bg-black text-white border-zinc-800 h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="w-4 h-4" />
                <span>Connect</span>
              </div>
              <div className="space-y-4 flex-1">
                {[
                  { icon: <GithubIcon className="w-5 h-5" />, text: "GitHub" },
                  { icon: <FacebookIcon className="w-5 h-5" />, text: "Facebook" },
                  { icon: <InstagramIcon className="w-5 h-5" />, text: "Instagram" },
                  { icon: <TwitterIcon className="w-5 h-5" />, text: "X" },
                  { icon: <YoutubeIcon className="w-5 h-5" />, text: "YouTube" },
                ].map((item, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
  
          {/* Stacks Card - Fixed height and padding */}
          <Card className="bg-black text-white border-zinc-800 h-full">
            <CardContent className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="m6 17 2-5-2-5" />
                  <path d="m2 17 2-5-2-5" />
                  <path d="m14 17 2-5-2-5" />
                  <path d="m18 17 2-5-2-5" />
                </svg>
                <span>Stacks</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="aspect-square w-full bg-zinc-800 rounded-lg flex items-center justify-center"
                  >
                    {/* Placeholder */}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
  
          {/* Coding Hours Card - Fixed height */}
          <Card className="bg-black text-white border-zinc-800 h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <ClockIcon className="w-4 h-4" />
                <span>Coding hours</span>
              </div>
              <div className="text-4xl font-bold mt-auto">3873 hrs</div>
            </CardContent>
          </Card>
  
          {/* Favorite Framework Card - Fixed aspect ratio */}
          <Card className="bg-black text-white border-zinc-800 h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <HeartIcon className="w-4 h-4" />
                <span>Fav. framework</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-2xl font-bold">N</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }