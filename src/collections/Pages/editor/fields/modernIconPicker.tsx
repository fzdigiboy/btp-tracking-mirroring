'use client'

import { ExternalField } from '@measured/puck'
import { useMemo, useState } from 'react'

interface EmojiIconPickerFieldProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

// Catégories d'emojis organisées
const EMOJI_CATEGORIES = {
  'Populaires': [
    '✓', '✔️', '✅', '⭐', '🌟', '💡', '🔥', '💪', '👍', '🎯',
    '🏆', '💎', '⚡', '🚀', '🎨', '📱', '💻', '🖥️', '⚙️', '🔧',
    '🤝', '👁️', '💰', '📊', '🏠', '🌍', '📞', '✉️', '🔒', '❤️'
  ],
  'Émotions & Gestes': [
    '😊', '😃', '😄', '😁', '😆', '🙂', '🙃', '😉', '😌', '😍',
    '🥰', '😘', '😗', '😙', '😚', '🤗', '🤩', '🤔', '🤨', '😐',
    '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪',
    '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞',
    '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍',
    '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝',
    '🙏', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠'
  ],
  'Cœurs & Amour': [
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
    '❤️‍🔥', '❤️‍🩹', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝',
    '💟', '♥️', '💌', '💋', '😍', '🥰', '😘', '😻', '💑', '💏'
  ],
  'Business & Finance': [
    '💼', '💰', '💵', '💴', '💶', '💷', '💸', '💳', '🪙', '💹',
    '📊', '📈', '📉', '💱', '💲', '🏦', '🏢', '🏛️', '🏪', '🏬',
    '🏭', '🏗️', '⚖️', '📋', '📝', '📄', '📃', '📑', '📜', '📰',
    '🗂️', '📁', '📂', '🗃️', '🗄️', '📌', '📍', '✂️', '🖇️', '📎'
  ],
  'Construction & Outils': [
    '🏗️', '🏠', '🏡', '🏘️', '🏚️', '🏢', '🏬', '🏭', '🏛️', '⛪',
    '🕌', '🛕', '🕍', '⛩️', '🗼', '🗽', '🏰', '🏯', '🏟️', '🎡',
    '🔨', '⚒️', '🛠️', '🔧', '🪛', '🔩', '⚙️', '🪚', '⛏️', '🪓',
    '⛓️', '🧱', '🪜', '🪝', '🧰', '🧲', '🪤', '📐', '📏', '📍'
  ],
  'Communication & Réseaux': [
    '📞', '☎️', '📱', '📲', '📟', '📠', '🔌', '🔋', '💻', '🖥️',
    '🖨️', '⌨️', '🖱️', '🖲️', '💾', '💿', '📀', '🧮', '🎙️', '🎚️',
    '📧', '✉️', '📨', '📩', '📤', '📥', '💬', '💭', '🗨️', '🗯️',
    '💌', '📮', '📬', '📭', '📪', '📫', '📯', '📢', '📣', '🔔',
    '🔕', '🔊', '🔉', '🔈', '🔇', '📻', '📺', '📡', '🛰️', '📶'
  ],
  'Localisation & Voyage': [
    '📍', '📌', '🗺️', '🧭', '🌍', '🌎', '🌏', '🗾', '🏔️', '⛰️',
    '🌋', '🗻', '🏕️', '🏖️', '🏜️', '🏝️', '🏞️', '🗿', '🛤️', '🛣️',
    '🗼', '🗽', '⛲', '⛱️', '🏛️', '🕌', '🛕', '🕍', '⛩️', '🕋',
    '⛪', '🏰', '🏯', '🏟️', '🎡', '🎢', '🎠', '⛵', '🚤', '🛳️'
  ],
  'Symboles & Validations': [
    '✓', '✔️', '✅', '☑️', '✖️', '❌', '❎', '➕', '➖', '➗',
    '✳️', '✴️', '❇️', '‼️', '⁉️', '❗', '❓', '❔', '❕', '⭕',
    '🚫', '⛔', '📛', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭',
    '⚠️', '🔰', '♻️', '🔱', '🔯', '☸️', '✡️', '☪️', '☮️', '🕉️',
    '⚛️', '🛐', '⭐', '🌟', '💫', '✨', '⚡', '🔥', '💥', '💯'
  ],
  'Vision & Lumière': [
    '👁️', '👀', '👁️‍🗨️', '🔍', '🔎', '🔭', '🔬', '💡', '🔦', '🏮',
    '🪔', '🕯️', '💥', '✨', '🌟', '⭐', '🌠', '💫', '⚡', '🔥',
    '💡', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘',
    '🌑', '🌒', '🌓', '🌔', '🌙', '☀️', '🌤️', '⛅', '🌥️', '☁️'
  ],
  'Innovation & Technologie': [
    '💡', '🚀', '🛸', '🛰️', '🔬', '🔭', '⚗️', '🧪', '🧬', '🦠',
    '💉', '💊', '🩹', '🩺', '🔋', '🔌', '💻', '🖥️', '🖨️', '⌨️',
    '🖱️', '🖲️', '💾', '💿', '📀', '🧮', '📱', '📲', '☎️', '📞',
    '📟', '📠', '📡', '🔭', '🔬', '🧲', '🧰', '🔧', '🪛', '⚙️',
    '⚡', '🔥', '💥', '✨', '🌟', '⭐', '🎯', '🎨', '🖼️', '🎭'
  ],
  'Nature & Environnement': [
    '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄',
    '🌾', '💐', '🌷', '🌹', '🥀', '🌺', '🌸', '🌼', '🌻', '🌞',
    '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒',
    '🌓', '🌔', '🌙', '🌎', '🌍', '🌏', '🪐', '💫', '⭐', '🌟',
    '✨', '⚡', '☄️', '💥', '🔥', '🌪️', '🌈', '☀️', '🌤️', '⛅',
    '🌥️', '☁️', '🌦️', '🌧️', '⛈️', '🌩️', '🌨️', '❄️', '☃️', '⛄'
  ],
  'Qualité & Excellence': [
    '⭐', '🌟', '✨', '💫', '💎', '💍', '👑', '🏆', '🥇', '🥈',
    '🥉', '🏅', '🎖️', '🎗️', '🏵️', '🎫', '🎟️', '🎪', '🎭', '🎨',
    '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸', '🪕',
    '🎻', '🎲', '♠️', '♥️', '♦️', '♣️', '🃏', '🀄', '🎴', '💯',
    '🔝', '🔜', '🔛', '🔚', '🔙', '🎯', '🎊', '🎉', '🎈', '🎀'
  ],
  'Transport & Véhicules': [
    '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐',
    '🛻', '🚚', '🚛', '🚜', '🦯', '🦽', '🦼', '🛴', '🚲', '🛵',
    '🏍️', '🛺', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟',
    '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇',
    '🚊', '🚉', '✈️', '🛫', '🛬', '🛩️', '💺', '🛰️', '🚁', '🛸',
    '🚀', '🛶', '⛵', '🚤', '🛥️', '🛳️', '⛴️', '🚢', '⚓', '⛽'
  ],
  'Nourriture & Boissons': [
    '🍎', '🍏', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈',
    '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦',
    '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔',
    '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈',
    '☕', '🫖', '🍵', '🧃', '🥤', '🧋', '🍶', '🍺', '🍻', '🥂',
    '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🍽️'
  ],
  'Sport & Activités': [
    '⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱',
    '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳',
    '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '🛷',
    '⛸️', '🥌', '🎿', '⛷️', '🏂', '🪂', '🏋️', '🤼', '🤸', '⛹️',
    '🤺', '🤾', '🏌️', '🏇', '🧘', '🏊', '🤽', '🚣', '🧗', '🚵',
    '🚴', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🎗️', '🏵️', '🎫'
  ],
  'Sécurité & Protection': [
    '🔒', '🔓', '🔐', '🔑', '🗝️', '🔏', '🛡️', '⚔️', '🔫', '🏹',
    '🛠️', '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🪓', '🧰', '🧲', '🪛',
    '⚙️', '🔩', '⛓️', '🧱', '🪚', '🔪', '🗡️', '💣', '🧨', '🪃',
    '🚨', '🚔', '🚓', '🚑', '🚒', '🛡️', '⚠️', '🔰', '⛔', '🚫',
    '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗', '❓', '⁉️'
  ],
  'Éducation & Science': [
    '📚', '📖', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📃',
    '📜', '📄', '📰', '🗞️', '📑', '🔖', '🏷️', '💰', '💴', '💵',
    '💶', '💷', '💸', '💳', '🧾', '✉️', '📧', '📨', '📩', '📤',
    '📥', '📦', '📫', '📪', '📬', '📭', '📮', '🗳️', '✏️', '✒️',
    '🖋️', '🖊️', '🖌️', '🖍️', '📝', '💼', '📁', '📂', '🗂️', '📅',
    '📆', '🗒️', '🗓️', '📇', '📈', '📉', '📊', '📋', '📌', '📍'
  ],
}

export const EmojiIconPickerField = ({
  label,
  value,
  onChange,
  placeholder,
}: EmojiIconPickerFieldProps) => {
  const [showPicker, setShowPicker] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Populaires')

  // Recherche dans tous les emojis
  const allEmojis = useMemo(() => {
    return Object.values(EMOJI_CATEGORIES).flat()
  }, [])

  // Filtrer les emojis selon la recherche et la catégorie
  const filteredEmojis = useMemo(() => {
    if (searchQuery.trim()) {
      // Si recherche, chercher dans tous les emojis et catégories
      return allEmojis.filter((emoji) => emoji.includes(searchQuery))
    }
    return EMOJI_CATEGORIES[selectedCategory as keyof typeof EMOJI_CATEGORIES] || []
  }, [searchQuery, selectedCategory, allEmojis])

  const categories = Object.keys(EMOJI_CATEGORIES)

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
            fontSize: '20px',
          }}
        >
          {value || '😊'}
        </div>
        <span style={{ flex: 1, fontSize: '14px', color: '#374151' }}>
          {value || placeholder || 'Choisir un emoji'}
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
              placeholder="Rechercher un emoji..."
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
                maxHeight: '120px',
                overflowY: 'auto',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '6px 12px',
                    fontSize: '11px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: selectedCategory === category ? '#3b82f6' : '#d1d5db',
                    backgroundColor: selectedCategory === category ? '#eff6ff' : '#ffffff',
                    color: selectedCategory === category ? '#3b82f6' : '#6b7280',
                    cursor: 'pointer',
                    fontWeight: selectedCategory === category ? '500' : '400',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
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
              {filteredEmojis.length} emoji(s) trouvé(s)
            </div>
          )}

          {/* Grille d'emojis */}
          <div
            style={{
              padding: '12px',
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gap: '6px',
              overflowY: 'auto',
              maxHeight: '280px',
            }}
          >
            {filteredEmojis.map((emoji, index) => {
              const isSelected = value === emoji

              return (
                <div
                  key={`${emoji}-${index}`}
                  onClick={() => {
                    onChange(emoji)
                    setShowPicker(false)
                    setSearchQuery('')
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    borderRadius: '6px',
                    backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                    border: isSelected ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '24px',
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
                  title={emoji}
                >
                  {emoji}
                </div>
              )
            })}
          </div>

          {filteredEmojis.length === 0 && (
            <div
              style={{
                padding: '32px',
                textAlign: 'center',
                color: '#6b7280',
                fontSize: '14px',
              }}
            >
              Aucun emoji trouvé
            </div>
          )}

          {/* Bouton fermer */}
          <div style={{ padding: '12px', borderTop: '1px solid #e5e7eb' }}>
            <button
              onClick={() => {
                setShowPicker(false)
                setSearchQuery('')
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

export const ModernEmojiIconPickerField: ExternalField<string> = {
  type: 'custom',
  render: ({ name, value, onChange }: any) => {
    return (
      <EmojiIconPickerField
        label={name}
        value={value || ''}
        onChange={onChange}
        placeholder="Sélectionner un emoji"
      />
    )
  },
}