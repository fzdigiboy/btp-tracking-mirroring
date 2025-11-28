import { ComponentConfig } from "@measured/puck"
import { colorPickerField } from "../fields/color-picker"
import AboutCTA from "@/app/(storefront)/btp_components/About/component/AboutCTA"
import ContactCTA from "@/app/(storefront)/btp_components/Home/component/ContactCTA"
import ServicesCTA from "@/app/(storefront)/btp_components/Services/component/ServicesCTA"
import TestimonialsCTA from "@/app/(storefront)/btp_components/Testimonials/component/TestimonialsCTA"

export interface Custom4BlocksProps {
    variant: 'about' | 'home' | 'services' | 'testimonials'
    title: string
    titleColor: string
    descriptionColor: string
    description: string
    backgroundColor: string
    sectionBgColor: string
    isFullWidth: string
    button: {
        text: string
        href: string
        color: string
        textColor: string
    }
    // haveButton: string
}

export const Custom4Blocks: ComponentConfig<Custom4BlocksProps> = {
    label: 'CTA Block (4 Variants)',
    fields: {
        variant: {
            type: 'select',
            label: 'CTA Style',
            options: [
                { label: 'About CTA', value: 'about' },
                { label: 'Home CTA', value: 'home' },
                { label: 'Services CTA', value: 'services' },
                { label: 'Testimonials CTA', value: 'testimonials' },
            ],
        },
        title: { type: 'text' },
        description: { type: 'textarea' },
        titleColor: colorPickerField,
        descriptionColor: colorPickerField,
        backgroundColor: colorPickerField,
        sectionBgColor: colorPickerField,
        isFullWidth: {
            type: 'radio',
            options: [
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
            ],
        },
        button: {
            type: 'object',
            label: 'Button',
            objectFields: {
                text: { type: 'text' },
                href: { type: 'text' },
                color: colorPickerField,
                textColor: colorPickerField,
            },
        },
        // haveButton: {
        //     type: 'radio',
        //     options: [
        //         { label: 'Yes', value: 'Yes' },
        //         { label: 'No', value: 'No' },
        //     ],
        // },
    },
    defaultProps: {
        variant: 'home',
        title: 'Ready to Start Your Project in Togo?',
        description: 'Let\'s build your future, together. Contact us for a free, no-obligation consultation.',
        titleColor: '#000000',
        descriptionColor: '#003366',
        backgroundColor: '#003366',
        sectionBgColor: '#f9fafb',
        isFullWidth: 'No',
        button: {
            text: 'Get In Touch',
            href: '#contact',
            color: '#003366',
            textColor: '#ffffff',
        },
        // haveButton: 'Yes',
    },
    render: ({ variant, title, description, titleColor, descriptionColor, backgroundColor, sectionBgColor, isFullWidth, button }) => {
        const props = {
            title,
            description,
            titleColor,
            descriptionColor,
            backgroundColor,
            sectionBgColor,
            isFullWidth,
            button,
            // haveButton,
        }

        switch (variant) {
            case 'about':
                return <AboutCTA {...props} />
            case 'services':
                return <ServicesCTA {...props} />
            case 'testimonials':
                return <TestimonialsCTA {...props} />
            case 'home':
            default:                
                return <ContactCTA {...props} />
        }
    }
}
