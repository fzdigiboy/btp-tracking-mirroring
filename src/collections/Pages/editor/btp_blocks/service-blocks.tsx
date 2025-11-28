import ProjectsBlockComp from "@/app/(storefront)/btp_components/Services/component/ProjectsBlockComp"
import { ComponentConfig } from "@measured/puck"

export interface ServiceBlockProps {
  title: string
  isFullWidth: string
  limit: number  
}

export const ServiceListBlock :ComponentConfig<ServiceBlockProps> = {
  label: 'Service List',
  fields: {
    title: { type: 'text' },
    isFullWidth: { type: 'radio', options: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ] },
    limit: { type: 'number', max: 10, min: 1 },
  },
  defaultProps: {
    title: 'Our Services',
    isFullWidth: 'No',
    limit: 6,
  },

  render: ({ title, isFullWidth, limit }) => {
    return (
      <ProjectsBlockComp title={title} isFullWidth={isFullWidth} limit={limit} />
    )
  },
}