// 'use client'

// import TestimonialsSectionServer from "./TestimonialsSectionServer"

// export default function TestimonialsSectionWrapper({ title, isFullWidth }: any) {
//   return (
//     <TestimonialsSectionServer
//       title={title}
//       isFullWidth={isFullWidth}
//     />
//   )
// }

// import ProjectsGallery from "./ProjectsGallery"


// async function fetchProjects() {
//   const res = await fetch("/api/projects/recent", { cache: "no-store" })
//   return res.json()
// }

// export async function RecentProjectSectionWrapper(props: any) {
//   const projects = await fetchProjects()

//   return <ProjectsGallery {...props} projects={projects} />
// }

"use client"

import { useEffect, useState } from "react"
import TestimonialsGallery from "./TestimonialsGallery"

export default function TestimonialsSectionWrapper(props: any) {
  const [testimonies, setTestimonies] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/testimonies/all", { cache: "no-store" })
      const data = await res.json()
      setTestimonies(data)
    }

    load()
  }, [])

  return <TestimonialsGallery {...props} testimonies={testimonies} />
}
