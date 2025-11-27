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
import ProjectsGallery from "./ProjectsGallery"

export default function RecentProjectSectionWrapper(props: any) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/projects/recent", { cache: "no-store" })
      const data = await res.json()
      setProjects(data)
    }

    load()
  }, [])

  return <ProjectsGallery {...props} projects={projects} />
}
