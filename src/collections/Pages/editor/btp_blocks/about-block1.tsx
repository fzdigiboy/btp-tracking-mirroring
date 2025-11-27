import AboutHero from "@/app/(storefront)/btp_components/About/component/AboutHero"
import { ComponentConfig } from '@measured/puck'
import ImagePickerField from "../components/ImagePickerField"
import { colorPickerField } from '../fields/color-picker'

export interface AboutBlock1Props {
    title: string
    description: string
    image?: {
        url: string
        alt: string
    }
    linearGradient: string
    isFullWidth: string
}

export const AboutBlock1: ComponentConfig<AboutBlock1Props> =  {
    label: 'About Block 1',
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
        title: 'Bridging Distances, Building Dreams in Togo',
        description: 'We are your trusted partner on the ground, turning your investment vision into concrete reality with confidence and excellence, no matter where you are in the world.',
        image: {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQKrk_9DVTb5kOM-FLWFq7_In8_bBFyXv8Y8DL_HBaj91wrNZtyIyStp2iFIBe89a5k2xc_fTYH_EdgmYhib2y1N31XcYcR5IxpTbjFVyrK-AGDJjhyYhJfrJlRtgfZI79kYP1mlBJ4JfTs6hP0CMbkr_wVbeCLPW9js1Qaftjl-sK8HtdTz9IlZtis6yBBENZgYw6MXyv5lDYFhzYz8FAvMjkl4OIYpQbA5XE_kNq12lz24cbGHKAtdR4ByMp1MpMxgUaTZkcWTdd',
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