'use client'

import { Puck } from '@measured/puck'
import { useField, useForm, useTheme } from '@payloadcms/ui'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import '@measured/puck/puck.css'
import { config } from '../editor/puck-config'
import './PuckEditor.scss'
import './dark-mode.css'

const initialData = {}

const PuckEditor = () => {
  const { value, setValue } = useField<any>({ path: 'page' })
  const { theme } = useTheme()
  const { value: title, setValue: setTitle } = useField<any>({
    path: 'title',
  })
  const { value: handle, setValue: setHandle } = useField<any>({
    path: 'handle',
  })
  const { submit } = useForm()
  const save = () => {
    submit()
  }
  const onChange = (data: any) => {
    setValue(data)
    if (data.root?.props?.title !== title) {
      setTitle(data.root?.props?.title)
    }
    if (data.root?.props?.handle !== handle) {
      setHandle(data.root?.props?.handle)
    }
  }

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <div
      className={`twp fixed inset-0 z-[0] h-screen w-full overflow-auto bg-white ${theme === 'dark' ? 'dark bg-gray-900' : ''}`}
      data-theme={theme}
    >
      <Puck
        config={config}
        data={value || initialData}
        onPublish={save}
        onChange={onChange}
        iframe={{ enabled: true }}
        overrides={{
          // headerActions: () => <></>,
        }}
      />
    </div>,
    document.body
  )
}

export default PuckEditor
