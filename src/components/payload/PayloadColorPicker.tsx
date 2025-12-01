'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'
import { TextFieldClientProps } from 'payload'
import { ColorPickerField as BaseColorPicker } from '@/collections/Pages/editor/fields/color-picker'

export const PayloadColorPicker: React.FC<TextFieldClientProps> = ({ field, path, readOnly }) => {
  const { value, setValue } = useField<string>({ path })

  return (
    <div className="field-type">
      <BaseColorPicker
        label={field.label as string}
        value={value || ''}
        onChange={(val) => setValue(val)}
        placeholder="Choose a color"
      />
    </div>
  )
}
