import { ComponentConfig } from '@measured/puck'
import HeroSectionComponent from '@/app/(storefront)/btp_components/Home/component/HeroSection'
import ProjectsGallery from '@/app/(storefront)/btp_components/Home/component/ProjectsGallery'
import RecentProjectSectionWrapper from '@/app/(storefront)/btp_components/Home/component/RecentProjectSectionBlock'

export interface RecentProjectSectionProps {
  title: string
  description: string
  // TODO: A mettre dans chaque bloc
  isFullWidth: string
}

// The block structure
export const RecentProjectSectionBlock: ComponentConfig<RecentProjectSectionProps> = {
  label: 'Recent Projects Section',
  fields: {
    title: { type: 'text' },
    description: { type: 'text' },
    isFullWidth: {
      type: 'radio',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
    },
  },
  defaultProps: {
    title: 'Our Recent Projects',
    description: 'A portfolio of our commitment to quality and excellence.',
    isFullWidth: 'No',
  },

  //   render: ({ title, description, isFullWidth }) => {
  //     return (
  //       <ProjectsGallery
  //         title={title}render: ({ title, description, isFullWidth }) => {
  //     return (
  //       <ProjectsGallery
  //         title={title}
  //         description={description}
  //         isFullWidth={isFullWidth}
  //       />
  //     )
  //   },
  //         description={description}
  //         isFullWidth={isFullWidth}
  //       />
  //     )
  //   },
  render: (props) => <RecentProjectSectionWrapper {...props} />,
}
