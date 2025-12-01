'use client'

import { Render } from '@measured/puck'
import { config } from '@/collections/Pages/editor/puck-config'
import { Page } from '@/payload-types'

interface PuckRenderProps {
  data: Page['page']
  metadata?: Record<string, any>
}

export function PuckRender({ data, metadata }: PuckRenderProps) {
  return <Render config={config} data={data as any} metadata={metadata} />
}
