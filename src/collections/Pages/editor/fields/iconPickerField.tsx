'use client'

import { ExternalField } from '@measured/puck'
import * as LucideIcons from 'lucide-react'
import { useMemo, useState } from 'react'

interface IconPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

// Obtenir toutes les icônes disponibles dans Lucide
const getAllLucideIcons = (): string[] => {
  return Object.keys(LucideIcons).filter(
    (key) =>
      key !== 'createLucideIcon' &&
      key !== 'default' &&
      typeof (LucideIcons as any)[key] === 'function',
  )
}

// Catégories d'icônes populaires
const ICON_CATEGORIES = {
  'Réseaux Sociaux': [
    'Facebook',
    'Twitter',
    'Instagram',
    'Linkedin',
    'Youtube',
    'Github',
    'Twitch',
    'MessageCircle', // WhatsApp style
    'Send', // Telegram style
    'Share2',
  ],
  Construction: [
    'Building',
    'Building2',
    'Hammer',
    'Wrench',
    'HardHat',
    'Drill',
    'Paintbrush',
    'Ruler',
    'Package',
    'Truck',
  ],
  Navigation: [
    'Home',
    'MapPin',
    'Navigation',
    'Compass',
    'Map',
    'ArrowRight',
    'ArrowLeft',
    'ChevronRight',
    'ChevronLeft',
    'Menu',
  ],
  Communication: [
    'Mail',
    'Phone',
    'MessageSquare',
    'Bell',
    'Inbox',
    'Send',
    'PhoneCall',
    'Video',
    'Mic',
  ],
  Interface: [
    'Search',
    'Settings',
    'User',
    'Users',
    'Star',
    'Heart',
    'Plus',
    'Minus',
    'X',
    'Check',
  ],
}

export const IconPickerField = ({ label, value, onChange, placeholder }: IconPickerFieldProps) => {
  const [showPicker, setShowPicker] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')

  const allIcons = useMemo(() => getAllLucideIcons(), [])

  // Icônes populaires (toutes catégories combinées)
  const popularIcons = useMemo(() => {
    return Object.values(ICON_CATEGORIES).flat()
  }, [])

  // Filtrer les icônes selon la recherche et la catégorie
  const filteredIcons = useMemo(() => {
    let icons =
      selectedCategory === 'Tous'
        ? allIcons
        : selectedCategory === 'Populaires'
          ? popularIcons
          : ICON_CATEGORIES[selectedCategory as keyof typeof ICON_CATEGORIES] || []

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      icons = allIcons.filter((icon) => icon.toLowerCase().includes(query))
    }

    return icons
  }, [searchQuery, selectedCategory, allIcons, popularIcons])

  // Obtenir le composant d'icône
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent || LucideIcons.HelpCircle
  }

  const SelectedIcon = getIconComponent(value || 'HelpCircle')

  const categories = ['Tous', 'Populaires', ...Object.keys(ICON_CATEGORIES)]

  return (
    <div style={{ marginBottom: '16px', position: 'relative' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
          }}
        >
          {label}
        </label>
      )}

      {/* Bouton de sélection */}
      <div
        onClick={() => setShowPicker(!showPicker)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 14px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#3b82f6'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#d1d5db'
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            borderRadius: '4px',
          }}
        >
          <SelectedIcon size={20} color="#374151" />
        </div>
        <span style={{ flex: 1, fontSize: '14px', color: '#374151' }}>
          {value || placeholder || 'Choisir une icône'}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transform: showPicker ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#6b7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Picker dropdown */}
      {showPicker && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            backgroundColor: '#ffffff',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            maxHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Barre de recherche */}
          <div style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>
            <input
              type="text"
              placeholder="Rechercher par nom (ex: facebook, home, mail)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#d1d5db'
              }}
              autoFocus
            />
          </div>

          {/* Filtres par catégorie */}
          {!searchQuery && (
            <div
              style={{
                padding: '12px',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: selectedCategory === category ? '#3b82f6' : '#d1d5db',
                    backgroundColor: selectedCategory === category ? '#eff6ff' : '#ffffff',
                    color: selectedCategory === category ? '#3b82f6' : '#6b7280',
                    cursor: 'pointer',
                    fontWeight: selectedCategory === category ? '500' : '400',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = '#f9fafb'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Info recherche */}
          {searchQuery && (
            <div
              style={{
                padding: '8px 12px',
                fontSize: '12px',
                color: '#6b7280',
                backgroundColor: '#f9fafb',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              {filteredIcons.length} icône(s) trouvée(s) pour &quot;{searchQuery}&quot;
            </div>
          )}

          {/* Grille d'icônes */}
          <div
            style={{
              padding: '12px',
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '8px',
              overflowY: 'auto',
              maxHeight: '320px',
            }}
          >
            {filteredIcons.slice(0, 100).map((iconName) => {
              const IconComp = getIconComponent(iconName)
              const isSelected = value === iconName

              return (
                <div
                  key={iconName}
                  onClick={() => {
                    onChange(iconName)
                    setShowPicker(false)
                    setSearchQuery('')
                    setSelectedCategory('Tous')
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '10px 6px',
                    borderRadius: '6px',
                    backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                    border: isSelected ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#f9fafb'
                      e.currentTarget.style.borderColor = '#d1d5db'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.borderColor = '#e5e7eb'
                    }
                  }}
                  title={iconName}
                >
                  <IconComp size={22} color={isSelected ? '#3b82f6' : '#374151'} />
                  <span
                    style={{
                      fontSize: '9px',
                      color: isSelected ? '#3b82f6' : '#6b7280',
                      textAlign: 'center',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '100%',
                    }}
                  >
                    {iconName}
                  </span>
                </div>
              )
            })}
          </div>

          {filteredIcons.length === 0 && (
            <div
              style={{
                padding: '32px',
                textAlign: 'center',
                color: '#6b7280',
                fontSize: '14px',
              }}
            >
              Aucune icône trouvée pour &quot;{searchQuery}&quot;
            </div>
          )}

          {filteredIcons.length > 100 && (
            <div
              style={{
                padding: '8px 12px',
                fontSize: '12px',
                color: '#6b7280',
                textAlign: 'center',
                backgroundColor: '#f9fafb',
                borderTop: '1px solid #e5e7eb',
              }}
            >
              Affichage des 100 premiers résultats. Affinez votre recherche.
            </div>
          )}

          {/* Bouton fermer */}
          <div style={{ padding: '12px', borderTop: '1px solid #e5e7eb' }}>
            <button
              onClick={() => {
                setShowPicker(false)
                setSearchQuery('')
                setSelectedCategory('Tous')
              }}
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#f3f4f6',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e7eb'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6'
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export const iconPickerField: ExternalField<string> = {
  // @ts-ignore
  type: 'custom',
  render: ({ name, value, onChange }: any) => {
    return (
      <IconPickerField
        label={name}
        value={value || ''}
        onChange={onChange}
        placeholder="Sélectionner une icône"
      />
    )
  },
}
