import { OverlayProvider } from 'overlay-kit'
import type { ReactNode } from 'react'
import { SWRConfig } from 'swr'
import { DevTools } from 'jotai-devtools'
import { GlobalStyle } from 'styles/global'
import 'jotai-devtools/styles.css'
export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{}}>
        <OverlayProvider>{children}</OverlayProvider>
      </SWRConfig>
      <DevTools position="top-right" />
    </>
  )
}
