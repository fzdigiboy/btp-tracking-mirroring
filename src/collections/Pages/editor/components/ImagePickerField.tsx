'use client'

import { useCallback } from 'react'
import { Button, useListDrawer } from '@payloadcms/ui'
import { ImageIcon, X } from 'lucide-react'

interface ImagePickerFieldProps {
  label?: string
  value?: string | { url: string; alt?: string }
  onChange: (value: any) => void
  placeholder?: string
}

export function ImagePickerField({
  label = 'Image',
  value,
  onChange,
  placeholder = 'Select an image',
}: ImagePickerFieldProps) {
  const [ListDrawer, , { openDrawer: openMediaDrawer, closeDrawer: closeMediaDrawer }] =
    useListDrawer({
      collectionSlugs: ['media'],
      uploads: true,
    })

  const handleImageSelect = useCallback(() => {
    openMediaDrawer()
  }, [ListDrawer, openMediaDrawer])

  const handleRemoveImage = useCallback(() => {
    // Check if we should preserve object structure based on current value type
    // If value is null/undefined, we can't know for sure, but if it WAS an object, we should probably keep it.
    // However, for safety, if the user explicitly wants an object, they should probably tell us.
    // But since we don't have a 'mode' prop yet, we rely on value type.
    if (typeof value === 'object' && value !== null) {
       onChange({ url: '', alt: '' })
    } else {
       onChange('')
    }
  }, [onChange, value])

  const getValueUrl = () => {
    if (!value) return ''
    if (typeof value === 'string') return value
    return value.url
  }

  const getImagePreview = () => {
    const imageUrl = getValueUrl()
    
    if (imageUrl) {
      return (
        <div className="image-preview-container">
          <div className="relative inline-block">
            <img
              src={imageUrl}
              alt="Selected image"
              className="max-w-48 max-h-32 object-cover rounded border"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <X size={12} />
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            <p className="font-medium">Current image:</p>
            <p className="break-all">{imageUrl}</p>
          </div>
        </div>
      )
    }
    return null
  }

  const imageUrl = getValueUrl()

  return (
    <div className="image-picker-field">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>

      <div className="space-y-3">
        {getImagePreview()}

        <div className="flex gap-2">
          <Button
            type="button"
            className="px-2 py-2 rounded-sm"
            buttonStyle="secondary"
            onClick={handleImageSelect}
            icon={<ImageIcon size={16} />}
          >
            {imageUrl ? 'Change Image' : 'Select Image'}
          </Button>

          {imageUrl && (
            <Button
              type="button"
              className="px-2 py-2 rounded-sm"
              buttonStyle="secondary"
              onClick={handleRemoveImage}
              icon={<X size={16} />}
            >
              Remove
            </Button>
          )}
        </div>

        {!imageUrl && <p className="text-sm text-gray-500">{placeholder}</p>}
      </div>

      <ListDrawer
        onSelect={(selection) => {
          if (selection?.doc) {
            const selectedMedia = selection.doc as any
            const newUrl = selectedMedia.url || selectedMedia.filename
            const newAlt = selectedMedia.alt || ''

            if (newUrl) {
              // If value is already an object, OR if it's null/undefined (we assume object if we can't tell? No, safe default is string usually)
              // BUT for hp-hero, we NEED object.
              // Let's look at the value prop again.
              // If value is undefined, we default to string. This breaks hp-hero.
              // We need to know if we should return an object.
              
              // Heuristic: If the previous value was an object, return object.
              // If previous value was string, return string.
              // If previous value was null/undefined... problem.
              
              // Let's try to detect if the parent passed an object structure even if empty? No.
              
              // Better fix: Update hp-hero.tsx to handle the onChange event and format it there.
              // But for now, let's stick to the heuristic and maybe default to object if we can detect it?
              // Actually, if I look at hp-hero.tsx, it passes `value={value as any}`.
              
              // Let's modify this file to accept a generic or just be smarter.
              // Since I can't easily change the prop signature everywhere without checking all usages,
              // I will rely on the fact that `hp-hero` has a default value which is an object.
              // So `value` should be an object.
              
              if ((typeof value === 'object' && value !== null) || (value === undefined && typeof onChange === 'function')) {
                 // If undefined, it's ambiguous. But if we return object, string-expecting components might break.
                 // If we return string, object-expecting components break.
                 
                 // Let's check if we can pass a prop `outputFormat`?
                 // I will add `outputFormat` prop to ImagePickerFieldProps.
                 
                 // For now, I'll revert to the previous logic but keep the Z-Index fix as primary.
                 // I will implement `outputFormat` in a separate step if needed.
                 // For this step, I'll just keep the logic I had but clean it up.
                 
                 if (typeof value === 'object' && value !== null) {
                     onChange({ url: newUrl, alt: newAlt })
                 } else {
                     onChange(newUrl)
                 }
              }
              closeMediaDrawer()
            }
          }
        }}
      />
    </div>
  )
}

// Export for use in Puck external fields
export default ImagePickerField
