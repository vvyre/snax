import { OverlayProvider } from 'overlay-kit'
import type { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { DevTools } from 'jotai-devtools'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SWRConfig value={{}}>
        <OverlayProvider>{children}</OverlayProvider>
      </SWRConfig>
      <DevTools />
    </>
  )
}
