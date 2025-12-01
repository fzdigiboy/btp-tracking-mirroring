import TestimonialsHeader from "@/app/(storefront)/btp_components/Testimonials/component/TestimonialsHeader"
import { ComponentConfig } from "@measured/puck"
import { colorPickerField } from "../fields/color-picker"

export type HeadingBlockProps = {
    title: string
    description: string
    isFullWidth: string
    align: {
      title: string
      description: string
    }
    color:{
        text: string
        descrition: string
    }
}


export const HeadingBlock: ComponentConfig<HeadingBlockProps> = {
    label: 'Heading Block',
    fields: {
        title: { type: 'text' },
        description: { type: 'text' },
        color:  {
            type: 'object',
            label: 'Color',
            objectFields: {
                text: colorPickerField,
                descrition: colorPickerField,
            },
        },
        isFullWidth: {
            type: 'radio',
            options: [
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
            ],
        },
        align:  {
            type: 'object',
            label: 'Align',
            objectFields: {
                title:  {
                    type: 'radio',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                },
                description: {
                    type: 'radio',
                    options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ],
                },
            },
        }
    },

    defaultProps: {
        title: 'Success Stories from Our International Partners',
        description: "Hear directly from investors who have successfully built their projects in Togo with us, from anywhere in the world.",
                isFullWidth: 'No',
                align: {
                    title: 'left',
                    description: 'left',
                },
                color: {
                    text: '#000',
                    descrition: '#555',
                },
    },
    render: ({ title, description, isFullWidth, align, color }) => {
        return (
            <TestimonialsHeader title={title} description={description} isFullWidth={isFullWidth} align={align}  color={color} />
        )
    },  
      
}