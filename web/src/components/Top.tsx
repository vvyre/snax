import { css } from '@emotion/react'
import type { ReactNode } from 'react'
import { TopBar } from './TopBar'
import { Caption } from './Caption'

/**
 * @prop `(icon)` 이모지를 권장합니다
 * @prop `(title)` 한 줄을 권장하며, 두 줄까지 허용합니다
 * @prop `(subtitle)` 두 줄까지 허용합니다
 */
export function Top({
  icon,
  title,
  subtitle,
}: {
  icon?: string
  title?: ReactNode
  subtitle?: ReactNode
}) {
  return (
    <div
      css={css`
        padding-top: 1rem;
        padding-inline: 1.5rem;
        @media screen and (min-width: 600px) {
          margin-left: 3.15rem;
        }
      `}>
      <TopBar title={title} />

      <div
        css={css`
          margin-bottom: 0.5rem;
        `}>
        <span
          css={css`
            font-size: 2.5rem;
          `}>
          {icon}
        </span>
      </div>

      {subtitle && (
        <div>
          <Caption
            css={css`
              font-size: 0.95rem;
            `}>
            {subtitle}
          </Caption>
        </div>
      )}
    </div>
  )
}
