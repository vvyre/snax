import { css } from '@emotion/react'
import { ChevronLeft } from 'lucide-react'
import { BaseBtn } from './Btn'
import { useNavigate, useParams } from 'react-router'
import { type ReactNode } from 'react'

export function TopBar({ title }: { title: ReactNode }) {
  const { '*': catchAll } = useParams()
  const navigate = useNavigate()

  return (
    <>
      <div
        css={css`
          padding-top: env(safe-area-inset-top);
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}>
        {catchAll ? (
          <div
            css={css`
              display: flex;
              gap: 0.5rem;
              align-items: center;
            `}>
            <BaseBtn
              onClick={() => navigate('/')}
              css={css`
                margin: 0;
                padding: 0;
                border: none;
                background-color: transparent;
                color: gray;
                width: 1.5rem;
                height: 1.5rem;
              `}>
              <ChevronLeft size={24} />
            </BaseBtn>
            <h1
              css={css`
                font-size: 1.15rem;
                font-weight: 600;
                line-height: 1;
              `}>
              {title}
            </h1>
          </div>
        ) : (
          <span />
        )}
        <div />
      </div>
    </>
  )
}
