import StatsSection from "@/app/(storefront)/btp_components/Home/component/StatsSection"
import { ComponentConfig } from "@measured/puck"
import { colorPickerField } from "../fields/color-picker"

export interface NumberProps {
    numberBlocks: Array<{
        title: string
        description: string
        color: string
        textColor: string
    }>
    isFullWidth: string

}

// The block structure
export const NumberBlock:ComponentConfig<NumberProps> = {
  label: 'Number',
  fields: {
    numberBlocks: {
      type: 'array',
      label: 'Number Blocks',
      arrayFields: {
        title: { type: 'text' },
        description: { type: 'text' },
                color: colorPickerField,
                textColor: colorPickerField,
        
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
    numberBlocks:[
      {
          title: '50+',
          description: 'Projects Delivered',
          color: '#003366',
          textColor: '#708DBD',

      },
      {
          title: '15+',
          description: 'Years of Experience',
          color: '#003366',
          textColor: '#708DBD',

      },
      {
          title: '100%',
          description: 'Client Satisfaction',
          color: '#003366',
          textColor: '#708DBD',     
                   },
  ],
    isFullWidth: 'No',
},
  render: ({ numberBlocks, isFullWidth }) => {
    return (
      <StatsSection numberBlocks={numberBlocks} isFullWidth={isFullWidth} />
    )
  },
}