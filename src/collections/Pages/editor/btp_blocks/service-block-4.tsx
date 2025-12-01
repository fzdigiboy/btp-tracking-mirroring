import ProcessTimeline from "@/app/(storefront)/btp_components/Services/component/ProcessTimeline"
import { ComponentConfig } from "@measured/puck"
import { ModernEmojiIconPickerField } from "../fields/modernIconPicker"

export type ServiceBlock4Props = {
    title: string
    description: string
    steps: Array<{
        title: string
        icon: string
    }>
    isFullWidth: string
}


export const ServiceBlock4: ComponentConfig<ServiceBlock4Props> = {
    label: 'Service Block 4',
    fields: {
        title: { type: 'text' },
        description: { type: 'text' },
        steps: {
            type: 'array',
            label: 'Steps',
            arrayFields: {
                title: { type: 'text' },
                icon:ModernEmojiIconPickerField,
            },
        },
       
        isFullWidth: {
            type: 'radio',
            options: [
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
            ],
        },
    },

    defaultProps: {
        title: 'Your Journey From Idea to Delivery',
        description: "We've streamlined the entire process into a clear, manageable journey. Here's a high-level look at how we'll bring your project to life, together.",
        steps:[
            {
                title: 'Consultation',
                icon: '💡',
            },
            {
                title: 'Land Secured',
                icon: '📍',
            },
            {
                title: 'Design Approved',
                icon: '✏️',
            },
            {
                title: 'Construction Start',
                icon: '🏗️',
            },
            {
                title: 'Project Completion',
                icon: '🏠',
            },
            {
                title: 'Key Handover',
                icon: '🔑',
              },
          
        ],
        isFullWidth: 'No',
    },
    render: ({ title, description, steps, isFullWidth }) => {
        return (
            <ProcessTimeline title={title} steps={steps} isFullWidth={isFullWidth}  description={description} />
        )
    },  
      
}