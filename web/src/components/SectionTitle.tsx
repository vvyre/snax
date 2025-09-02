import { css } from '@emotion/react'
import type { ReactNode } from 'react'
import { Caption } from './Caption'

export function SectionTitle({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <div
      css={css`
        margin-bottom: 1.5rem;
      `}>
      <h2
        css={css`
          line-height: 1.3;
          font-size: 1.15rem;
          font-weight: 500;
          display: block;
          margin-inline: 0;
        `}>
        {title}
      </h2>
      {subtitle && (
        <Caption
          css={css`
            margin-top: 0.5rem;
          `}>
          {subtitle}
        </Caption>
      )}
    </div>
  )
}
