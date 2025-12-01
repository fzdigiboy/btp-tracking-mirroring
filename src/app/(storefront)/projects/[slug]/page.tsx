// import Header from "../common_component/header";
// // import Footer from "../common_component/footer";
// import Footer from '../btp_preview/common_component/footer'
// import Header from '../btp_preview/common_component/header'
import { getPayloadClient } from '@/lib/payload'
import Footer from '../../btp_preview/common_component/footer'
import Header from '../../btp_preview/common_component/header'
// import ImageGallery from './component/ImageGallery'
import ProjectContent from './component/ProjectContent'
import ProjectHeader from './component/ProjectHeader'
import ProjectInfo from './component/ProjectInfo'
import MediaGallery from '../../btp_components/Testimonials/component/CustomMediaPlayer'

export default async function ProjectDetails({ params }: any) {
  const payload = await getPayloadClient()

  const resolved = await params
  const idParam = resolved.slug

  const project = await payload.find({
    collection: 'projects',
    limit: 1,
    depth: 2,
    pagination: false,
    where: {
      id: {
        equals: idParam,
      },
    },
  })

  const testimonies = await payload.find({
    collection: 'testimonies',
    limit: 50, // nombre max de témoignages à récupérer
    sort: '-createdAt', // optionnel : plus récents en premier
    where: {
      project: {
        equals: idParam, // filtre sur l'id du projet
      },
    },
  })

  console.log('response', testimonies)
  const normalizedImages = (project.docs[0].image ?? []).map((img: any) =>
    typeof img === 'string' ? img : img?.url,
  )
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 px-4 md:px-8 lg:px-14">
          <ProjectHeader title={project.docs[0].title} location={project.docs[0].location} />
          {/* <ImageGallery images={normalizedImages} /> */}
          <MediaGallery mediaUrls={normalizedImages} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ProjectContent
              content={project.docs[0].content as any}
              testimonies={testimonies.docs}
            />
            <ProjectInfo
              duration={project.docs[0].projectInfo.duration}
              size={project.docs[0].projectInfo.size.value}
              unity={project.docs[0].projectInfo.size.unit}
              services={project.docs[0].projectInfo.services}
            />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
