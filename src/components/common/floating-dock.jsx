"use client"
import { motion } from "framer-motion"
import { Home, Mail, Settings, User, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const dockItems = [
  { icon: Home, label: "Home" },
  { icon: Mail, label: "Mail" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help" },
]

export function FloatingDock() {
  return (
    <TooltipProvider>
      <motion.div
        className="fixed right-5 top-1/4 border-2 z-50 shadow-2xl shadow-teal-900 border-teal-600 -translate-y-1/2 flex flex-col gap-8 bg-background/10 backdrop-blur-sm p-3 rounded-full "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {dockItems.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <motion.button
                className="p-2 rounded-full text-muted-foreground hover:text-teal-600 hover:bg-muted transition-colors"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-6 h-6" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </TooltipProvider>
  )
}

