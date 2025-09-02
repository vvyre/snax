import { css } from '@emotion/react'
import type { ComponentProps } from 'react'

export function BaseBtn({ ...props }: ComponentProps<'button'>) {
  return (
    <button
      css={css`
        cursor: pointer;
        width: 100%;
        font-size: 1rem;
        line-height: 1;
        height: 3.15rem;
        padding-inline: 0.8rem;
        border: 1px solid transparent;
        background-color: black;
        color: white;
        border-radius: 0.3rem;
        transition: scale ease 0.1s;
        &:disabled {
          background-color: gainsboro;
          cursor: not-allowed;
        }
        &:active {
          scale: 0.99 0.95;
        }
      `}
      {...props}
    />
  )
}

export function CancelBtn({ ...props }: ComponentProps<'button'>) {
  return (
    <BaseBtn
      onClick={props.onClick}
      css={css`
        background-color: #f6f6f6;
        color: black;
      `}>
      {props.children}
    </BaseBtn>
  )
}
