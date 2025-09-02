import { css } from '@emotion/react'
import type { ComponentProps } from 'react'

export function Section({ children }: ComponentProps<'section'>) {
  return (
    <section
      css={css`
        padding-inline: 1.5rem;
        display: flex;
        flex-direction: column;
      `}>
      {children}
    </section>
  )
}
