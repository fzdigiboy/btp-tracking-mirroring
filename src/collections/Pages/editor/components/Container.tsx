import { ComponentConfig, DropZone } from '@measured/puck'
import React from 'react'
import { colorPickerField } from '../fields/color-picker'
import { imagePickerField } from '../fields/image-picker'
import { spacingField } from '../fields/spacing-field'
// import { shadowPickerField } from '../fields/shadow-picker'
// import { borderRadiusField } from '../fields/border-radius'
// import { gradientPickerField } from '../fields/gradient-picker'

export interface ContainerProps {
  preset?: 'custom' | 'site-settings'
  layout?: {
    display?: 'block' | 'flex' | 'grid'
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'
  }
  size?: {
    width?: string
    height?: string
    minWidth?: string
    maxWidth?: string
    minHeight?: string
    maxHeight?: string
  }
  spacing?: {
    padding?: { top?: string; right?: string; bottom?: string; left?: string }
    margin?: { top?: string; right?: string; bottom?: string; left?: string }
  }
  background?: {
    color?: string
    image?: string
    size?: 'auto' | 'cover' | 'contain'
    position?: string
    repeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'
  }
  border?: {
    style?: 'none' | 'solid' | 'dashed' | 'dotted' | 'double'
    width?: string
    color?: string
    radius?: string
  }
  flex?: {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    justifyContent?:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
    gap?: string
  }
  grid?: {
    columns?: string
    rows?: string
    gap?: string
    justifyContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  }
  typography?: {
    color?: string
    textAlign?: 'left' | 'center' | 'right' | 'justify'
  }
  effects?: {
    boxShadow?: string
    opacity?: string
    filter?: string
  }
  className?: string
}

export const Container: ComponentConfig<ContainerProps> = {
  label: 'Container',
  fields: {
    // Preset option to use Site Settings
    preset: {
      type: 'radio',
      label: 'Preset',
      options: [
        { label: 'Custom (Manual)', value: 'custom' },
        { label: 'Site Settings (Auto)', value: 'site-settings' },
      ],
    },
    // Layout - Essential
    layout: {
      type: 'object',
      label: 'Layout',
      objectFields: {
        display: {
          type: 'select',
          label: 'Display',
          options: [
            { label: 'Block', value: 'block' },
            { label: 'Flex', value: 'flex' },
            { label: 'Grid', value: 'grid' },
          ],
        },
        position: {
          type: 'select',
          label: 'Position',
          options: [
            { label: 'Static', value: 'static' },
            { label: 'Relative', value: 'relative' },
            { label: 'Absolute', value: 'absolute' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Sticky', value: 'sticky' },
          ],
        },
        overflow: {
          type: 'select',
          label: 'Overflow',
          options: [
            { label: 'Visible', value: 'visible' },
            { label: 'Hidden', value: 'hidden' },
            { label: 'Scroll', value: 'scroll' },
            { label: 'Auto', value: 'auto' },
          ],
        },
      },
    },

    // Size - Essential
    size: {
      type: 'object',
      label: 'Size',
      objectFields: {
        width: { type: 'text', label: 'Width' },
        height: { type: 'text', label: 'Height' },
        minWidth: { type: 'text', label: 'Min Width' },
        maxWidth: { type: 'text', label: 'Max Width' },
        minHeight: { type: 'text', label: 'Min Height' },
        maxHeight: { type: 'text', label: 'Max Height' },
      },
    },

    // Spacing - Essential with SpacingField
    spacing: {
      type: 'object',
      label: 'Spacing',
      objectFields: {
        padding: spacingField,
        margin: spacingField,
      },
    },

    // Background - Essential with custom fields
    background: {
      type: 'object',
      label: 'Background',
      objectFields: {
        color: colorPickerField,
        // gradient: gradientPickerField,
        image: {
          // @ts-ignore
          type: 'custom',
          render: ({ field, name, value, onChange }: any) => {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const ImagePickerField = require('../components/ImagePickerField').ImagePickerField
            return (
              <ImagePickerField
                label={field.label || name}
                value={value || ''}
                onChange={onChange}
                placeholder="Choose an image from your media library"
              />
            )
          },
        },

        size: {
          type: 'select',
          label: 'Image Size',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
          ],
        },
        position: { type: 'text', label: 'Image Position' },
        repeat: {
          type: 'select',
          label: 'Image Repeat',
          options: [
            { label: 'Repeat', value: 'repeat' },
            { label: 'No Repeat', value: 'no-repeat' },
          ],
        },
      },
    },

    // Border with BorderRadiusField
    border: {
      type: 'object',
      label: 'Border',
      objectFields: {
        style: {
          type: 'select',
          label: 'Style',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Solid', value: 'solid' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Dotted', value: 'dotted' },
          ],
        },
        width: { type: 'text', label: 'Width' },
        color: colorPickerField,
        // radius: borderRadiusField,
      },
    },

    // Flex - Conditional
    flex: {
      type: 'object',
      label: 'Flex Settings',
      objectFields: {
        direction: {
          type: 'select',
          label: 'Direction',
          options: [
            { label: 'Row', value: 'row' },
            { label: 'Row Reverse', value: 'row-reverse' },
            { label: 'Column', value: 'column' },
            { label: 'Column Reverse', value: 'column-reverse' },
          ],
        },
        wrap: {
          type: 'select',
          label: 'Wrap',
          options: [
            { label: 'No Wrap', value: 'nowrap' },
            { label: 'Wrap', value: 'wrap' },
            { label: 'Wrap Reverse', value: 'wrap-reverse' },
          ],
        },
        justifyContent: {
          type: 'select',
          label: 'Justify Content',
          options: [
            { label: 'Start', value: 'flex-start' },
            { label: 'End', value: 'flex-end' },
            { label: 'Center', value: 'center' },
            { label: 'Space Between', value: 'space-between' },
            { label: 'Space Around', value: 'space-around' },
            { label: 'Space Evenly', value: 'space-evenly' },
          ],
        },
        alignItems: {
          type: 'select',
          label: 'Align Items',
          options: [
            { label: 'Start', value: 'flex-start' },
            { label: 'End', value: 'flex-end' },
            { label: 'Center', value: 'center' },
            { label: 'Baseline', value: 'baseline' },
            { label: 'Stretch', value: 'stretch' },
          ],
        },
        gap: { type: 'text', label: 'Gap' },
      },
    },

    // Grid - Conditional
    grid: {
      type: 'object',
      label: 'Grid Settings',
      objectFields: {
        columns: { type: 'text', label: 'Template Columns' },
        rows: { type: 'text', label: 'Template Rows' },
        gap: { type: 'text', label: 'Gap' },
        justifyContent: {
          type: 'select',
          label: 'Justify Content',
          options: [
            { label: 'Start', value: 'start' },
            { label: 'End', value: 'end' },
            { label: 'Center', value: 'center' },
            { label: 'Space Between', value: 'space-between' },
          ],
        },
        alignItems: {
          type: 'select',
          label: 'Align Items',
          options: [
            { label: 'Start', value: 'start' },
            { label: 'End', value: 'end' },
            { label: 'Center', value: 'center' },
            { label: 'Stretch', value: 'stretch' },
          ],
        },
      },
    },

    // Typography
    typography: {
      type: 'object',
      label: 'Typography',
      objectFields: {
        color: colorPickerField,
        textAlign: {
          type: 'select',
          label: 'Text Align',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Justify', value: 'justify' },
          ],
        },
      },
    },

    // Effects
    effects: {
      type: 'object',
      label: 'Effects',
      objectFields: {
        boxShadow: { type: 'text', label: 'Box Shadow' },
        opacity: { type: 'text', label: 'Opacity (0-1)' },
        filter: { type: 'text', label: 'Filter' },
      },
    },

    // Advanced
    className: { type: 'text', label: 'Custom CSS Class' },
  },
  defaultProps: {
    preset: 'custom',
    layout: { display: 'block', position: 'relative' },
    size: { width: '100%', minHeight: '100px' },
    spacing: { padding: { top: '16px', right: '16px', bottom: '16px', left: '16px' } },
  },
  render: ({
    preset,
    layout,
    flex,
    grid,
    size,
    spacing,
    background,
    border,
    effects,
    typography,
    className,
  }) => {
    // Si preset est 'site-settings', utiliser la classe site-container
    if (preset === 'site-settings') {
      return (
        <div className={`site-container ${className || ''}`}>
          <DropZone zone="content" />
        </div>
      )
    }

    // Sinon, utiliser le mode custom avec tous les styles
    const containerStyle: React.CSSProperties = {
      // Position
      position: layout?.position,
      overflow: layout?.overflow,

      // Size
      width: size?.width,
      height: size?.height,
      minWidth: size?.minWidth,
      maxWidth: size?.maxWidth,
      minHeight: size?.minHeight,
      maxHeight: size?.maxHeight,

      // Spacing
      paddingTop: spacing?.padding?.top,
      paddingRight: spacing?.padding?.right,
      paddingBottom: spacing?.padding?.bottom,
      paddingLeft: spacing?.padding?.left,
      marginTop: spacing?.margin?.top,
      marginRight: spacing?.margin?.right,
      marginBottom: spacing?.margin?.bottom,
      marginLeft: spacing?.margin?.left,

      // Background
      backgroundColor: background?.color,
      backgroundImage: background?.image ? `url(${background.image})` : undefined,
      backgroundSize: background?.size,
      backgroundPosition: background?.position,
      backgroundRepeat: background?.repeat,

      // Border
      borderStyle: border?.style,
      borderWidth: border?.width,
      borderColor: border?.color,
      borderRadius: border?.radius,

      // Effects
      boxShadow: effects?.boxShadow,
      opacity: effects?.opacity ? parseFloat(effects.opacity) : undefined,
      filter: effects?.filter,

      // Typography
      color: typography?.color,
      textAlign: typography?.textAlign,
    }

    const dropZoneStyle: React.CSSProperties = {
      // Layout
      display: layout?.display,

      // Flex
      flexDirection: flex?.direction,
      flexWrap: flex?.wrap,
      justifyContent: layout?.display === 'flex' ? flex?.justifyContent : grid?.justifyContent,
      alignItems: layout?.display === 'flex' ? flex?.alignItems : grid?.alignItems,
      gap: layout?.display === 'flex' ? flex?.gap : grid?.gap,

      // Grid
      gridTemplateColumns: grid?.columns,
      gridTemplateRows: grid?.rows,

      // Ensure DropZone fills the container
      width: '100%',
      minHeight: '100%',
    }

    return (
      <div style={containerStyle} className={className}>
        <DropZone zone="content" style={dropZoneStyle} />
      </div>
    )
  },
}
