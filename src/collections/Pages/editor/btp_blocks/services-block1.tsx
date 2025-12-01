import { ComponentConfig } from "@measured/puck"
import ImagePickerField from "../components/ImagePickerField"
import { colorPickerField } from "../fields/color-picker"
import AboutHero from "@/app/(storefront)/btp_components/About/component/AboutHero"


export interface ServicesBlock1Props {
    title: string
    description: string
    image?: {
        url: string
        alt: string
    }
    linearGradient: string
    isFullWidth: string
}

export const ServicesBlock1: ComponentConfig<ServicesBlock1Props> =  {
    label: 'Services Block 1',
    fields: {
        title: { type: 'text' },
        description: { type: 'textarea' },
        image: {
            type: 'custom',
            label: 'Background Image',
            render: ({ onChange, value }) => (
            <ImagePickerField
                label="Background Image"
                value={value as any}
                onChange={onChange as any}
                placeholder="Select a background image from your media library"
            />
            ),
        },
        linearGradient: colorPickerField,
        isFullWidth: {
            type: 'radio',
            options: [
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
            ],
        },
    },
    defaultProps: {
        title: 'Our Services: Your Vision, Expertly Built',
        description: 'We provide a full suite of end-to-end services, ensuring your investment in Togo is secure, transparent, and successful from anywhere in the world.',
        image: {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYkslTvJM_OPS30hfG58QtPO5bzwxOH7IqAlv3mXBVER7CkTyRzxc9mE3obYW5eSbGK5rOITtYco0wTcWPm3UgN9uSMbQzN43LodkGqaVlcIOftIJKdE-gPX_3cfdByn84VenzQu-xWwCju1C1C8PtH9FXxZISn_iwfCc6D8HTOS63BURURP6_CbcnEfEMi9lAOPziCjFFJg_fnXriu2fJpZWIJAO8EcD1u7DNM_SQ7MtAKcMf33K2HHem6T9QSLe8lVTKoq_i8a7u',
            alt: 'TogoBuild'
        },
        linearGradient: '#000000',
        isFullWidth: 'No',
    },
    render: ({ title, description, image, linearGradient, isFullWidth }) => {
        return (
            <AboutHero 
                title={title}
                description={description}
                image={image}
                linearGradient={linearGradient}
                isFullWidth={isFullWidth}
            />
        )
    }
}
