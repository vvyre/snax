import { css } from '@emotion/react'
import { BaseBtn, CancelBtn } from './Btn'

type CTAProps =
  | { gridType: '1Col'; confirmTxt: string; onConfirm: () => void }
  | {
      gridType: '2ColA'
      confirmTxt: string
      cancelTxt: string
      onConfirm: () => void
      onCancel: () => void
    }
  | {
      gridType: '2ColB'
      confirmTxt: string
      cancelTxt: string
      onConfirm: () => void
      onCancel: () => void
    }

export function FixedCTA(props: CTAProps) {
  return (
    <div
      css={css`
        position: fixed;
        padding-inline: 1.5rem;
        padding-bottom: env(safe-area-inset-bottom);
        bottom: 1.5rem;
        width: 100%;
      `}>
      {(() => {
        switch (props.gridType) {
          case '1Col': {
            const { confirmTxt, onConfirm } = props
            return <BaseBtn onClick={onConfirm}>{confirmTxt}</BaseBtn>
          }
          case '2ColA': {
            const { confirmTxt, cancelTxt, onConfirm, onCancel } = props
            return (
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 0.5rem;
                `}>
                <CancelBtn onClick={onCancel}>{cancelTxt}</CancelBtn>
                <BaseBtn onClick={onConfirm}>{confirmTxt}</BaseBtn>
              </div>
            )
          }
          case '2ColB': {
            const { confirmTxt, cancelTxt, onConfirm, onCancel } = props
            return (
              <div
                css={css`
                  display: grid;
                  grid-template-columns: 2fr 3fr;
                  gap: 0.5rem;
                `}>
                <CancelBtn onClick={onCancel}>{cancelTxt}</CancelBtn>
                <BaseBtn onClick={onConfirm}>{confirmTxt}</BaseBtn>
              </div>
            )
          }
          default: {
            return null
          }
        }
      })()}
    </div>
  )
}
