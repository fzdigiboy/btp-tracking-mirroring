import CoreValuesSection from "@/app/(storefront)/btp_components/About/component/CoreValuesSection"
import { ComponentConfig } from "@measured/puck"
import { ModernEmojiIconPickerField } from "../fields/modernIconPicker"

export type ABBlock4Props = {
    title: string
    subtitle: string
    blocks: Array<{
        title: string
        description: string
        icon: string
    }>
    isFullWidth: string
}


export const ABBlock4: ComponentConfig<ABBlock4Props> = {
    label: 'AB Block 4',
    fields: {
        title: { type: 'text' },
        subtitle: { type: 'text' },
        blocks: {
            type: 'array',
            label: 'Blocks',
            arrayFields: {
                title: { type: 'text' },
                description: { type: 'text' },
                icon: ModernEmojiIconPickerField,
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
        title: 'Our Guiding Principles',
        subtitle: 'Our Core Values',
        blocks:[
            {
                title: 'Transparency',
                description: 'Open communication and clear reporting at every stage. You are always in the know, no matter the distance.',
                icon: '👁️',
            },
            {
                title: 'Quality',
                description: 'We use premium materials and skilled local craftsmanship to build durable, high-standard properties.',
                icon: '✓',
            },
            {
                title: 'Innovation',
                description: 'Embracing modern construction techniques and sustainable practices for efficient and future-proof buildings.',
                icon: '💡',
            },
            {
                title: 'Trust',
                description: 'Your investment is our responsibility. We build lasting relationships based on integrity and reliability.',
                icon: '🤝',
            },
        ],
        isFullWidth: 'No',
    },
    render: ({ title, subtitle, blocks, isFullWidth }) => {
        return (
            <CoreValuesSection title={title} blocks={blocks} isFullWidth={isFullWidth}  subtitle={subtitle} />
        )
    },  
      
}