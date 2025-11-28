'use client'

// Requette pour avoir toutes les pages
import { useEffect, useState } from 'react'

export function PageSelectorField({ value, onChange }: any) {
  const [pages, setPages] = useState<any[]>([])

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/pages?depth=0')
      const data = await res.json()
      setPages(data.docs || [])
    }
    load()
  }, [])

  return (
    <select
      value={value?.id || ''}
      onChange={(e) => {
        const page = pages.find((p) => p.id === e.target.value)
        onChange(page ? { id: page.id, slug: page.slug } : null)
      }}
      className="border rounded p-2 w-full"
    >
      <option value="">-- Select internal page --</option>

      {pages.map((page) => (
        <option key={page.id} value={page.id}>
          {page.title}
        </option>
      ))}
    </select>
  )
}
