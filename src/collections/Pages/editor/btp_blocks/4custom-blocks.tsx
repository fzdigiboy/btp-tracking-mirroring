import { ComponentConfig } from "@measured/puck"
import { colorPickerField } from "../fields/color-picker"
import AboutCTA from "@/app/(storefront)/btp_components/About/component/AboutCTA"

export interface Custom4BlocksProps {
    title: string
    description: string
    backgroundColor: string
    sectionBgColor: string
    isFullWidth: string
    button: Array<{
        text: string
        href: string
        color: string
        textColor: string
    }>
    haveButton: string
}

export const Custom4Blocks: ComponentConfig<Custom4BlocksProps> = {
    label: 'Custom 4 Blocks',
    fields: {
        title: { type: 'text' },
        description: { type: 'textarea' },
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
            type: 'array',
            label: 'Buttons',
            arrayFields: {
                text: { type: 'text' },
                href: { type: 'text' },
                color: colorPickerField,
                textColor: colorPickerField,
            },
        },
        haveButton: {
            type: 'radio',
            options: [
                { label: 'Yes', value: 'Yes' },
                { label: 'No', value: 'No' },
            ],
        },
    },
    defaultProps: {
        title: 'Custom 4 Blocks',
        description: 'Custom 4 Blocks',
        backgroundColor: '#000000',
        sectionBgColor: '#000000',
        isFullWidth: 'No',
        button: [
            {
                text: 'Button 1',
                href: '#',
                color: '#003366',
                textColor: '#FFFFFFFF',
            },
            {
                text: 'Button 2',
                href: '#',
                color: '#FFFFFFFF',
                textColor: '#003366',
            },
        ],
        haveButton: 'Yes',
    },
    render: ({ title, description, backgroundColor, sectionBgColor, isFullWidth, button, haveButton }) => {
        return (
            <AboutCTA
                title={title}
                description={description}
                backgroundColor={backgroundColor}
                sectionBgColor={sectionBgColor}
                isFullWidth={isFullWidth}
                button={button}
                haveButton={haveButton}
            />
        )
    }
}
