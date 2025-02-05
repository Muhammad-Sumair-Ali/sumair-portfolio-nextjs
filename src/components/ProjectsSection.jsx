"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Badge, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Pic from "@/assets/Feature.jpg";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

import { useState } from "react";
import { IconBulb, IconBulbOff } from "@tabler/icons-react";

function ProjectCard({ project }) {
  const {
    title,
    description,
    longDescription,
    image,
    liveUrl,
    githubUrl,
    tags,
  } = project;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col">
      <Card className="group border relative overflow-hidden rounded-lg border-gray-800 bg-gradient-to-br from-zinc-900 to-black shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-800/20">
        <div className=" absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
         
        <div className="relative aspect-video cursor-pointer overflow-hidden">
          

          <Image
            src={Pic || "/placeholder.svg"}
            alt={title}
            fill
            className="object-conatin transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <CardContent className="relative z-10 p-3 px-6 ">
          <h3 className="mb-2 -mt-1 text-2xl font-bold  text-white">{title}</h3>
          
          <div className="flex flex-wrap text-[11px] gap-2">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="bg-zinc-900 hover:bg-zinc-700  transition-all duration-700 px-4 font-semibold py-2 rounded-3xl text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="relative z-10  flex justify-between gap-2 p-6 pt-0   ">
          <div className="flex gap-2">
            {liveUrl && (
              <Button
                asChild
                className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Link href={liveUrl} target="_blank">
                  <ExternalLink className="mr-1 h-5 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {githubUrl && (
              <Button
                asChild
                className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Link href={githubUrl} target="_blank">
                  <Github className="mr-1 h-5 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
            onClick={() => setShowDetails(true)}
          >
            <Info className=" h-4 w-4" />
            More Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl bg-zinc-950 text-white border-0 ">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full h-44 overflow-hidden cursor-pointer rounded-lg">
            <Image
              src={Pic || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover "
            />
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap text-[13px] gap-x-3">
              {tags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="bg-zinc-900 hover:bg-zinc-700  transition-all duration-700 px-4 font-semibold py-2 rounded-3xl text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-zinc-300">{longDescription || description}</p>
            <div className="flex gap-2">
              {liveUrl && (
                <Button
                  asChild
                  className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <Link href={liveUrl} target="_blank">
                    <ExternalLink className="mr-1 h-5 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {githubUrl && (
                <Button
                  asChild
                  className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <Link href={githubUrl} target="_blank">
                    <Github className="mr-1 h-5 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Blog",
      description: "Share my knowledge and experience",
      longDescription:
        "A full-stack blog platform built with Next.js, featuring a custom CMS, markdown support, and dynamic routing. Implements modern web development practices including SSR, ISR, and optimized image loading.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-05%20030222-46qsE9kc8n7m1drlWhfpRXkoxkf3YQ.png",
      liveUrl: "https://example.com/blog",
      githubUrl: "https://github.com/username/blog",
      tags: ["TypeScript", "PostgreSQL", "Next.js", "Drizzle", "MDX"],
    },
    {
      title: "Friend quiz cheat tool",
      description: "Get full score in friend quiz",
      longDescription:
        "An interactive quiz application that helps users achieve perfect scores. Built with TypeScript and Next.js, featuring real-time scoring, progress tracking, and responsive design.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-05%20030222-46qsE9kc8n7m1drlWhfpRXkoxkf3YQ.png",
      liveUrl: "https://example.com/quiz",
      githubUrl: "https://github.com/username/quiz",
      tags: ["TypeScript", "Next.js"],
    },
  ];
  return (
    <div className="m-auto relative max-w-[1010px]  mb-12 mt-4 mx-auto py-4 px-2">
      <div className="absolute top-10 left-24   transform -translate-x-1/2 h-[230px] w-[650px] bg-gradient-to-r from-purple-800 via-pink-800 to-orange-800 blur-3xl opacity-40 -ml-20 -z-10"></div>
      <h2 className="text-3xl font-bold mb-6 text-center m-auto">
        Selected Projects
      </h2>
      <div className=" grid grid-cols-1 mb-14 px-4 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <Button
        variant="outline"
        className="group px-4 m-auto py-3 -mt-4 text-sm bg-zinc-950 border-gray-800 text-gray-200 hover:bg-zinc-800 hover:text-gray-100 transition-all flex items-center gap-2"
      >
        See More Projects
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default ProjectsSection;
