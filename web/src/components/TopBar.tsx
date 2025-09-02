import { css } from '@emotion/react'
import { ChevronLeft, Menu } from 'lucide-react'
import { BaseBtn } from './Btn'
import { useNavigate, useParams } from 'react-router'
import { RightMenu } from './RightMenu'
import { useState, type ReactNode } from 'react'

export function TopBar({ title }: { title: ReactNode }) {
  const { '*': catchAll } = useParams()
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)

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
        <BaseBtn
          onClick={() => setOpen(!open)}
          css={css`
            margin: 0;
            padding: 0;
            border: none;
            z-index: 99;
            background-color: transparent;
            color: ${open ? 'white' : 'gray'};
            width: 1.5rem;
            height: 1.5rem;
          `}>
          <Menu />
        </BaseBtn>
      </div>
      <RightMenu open={open} />
    </>
  )
}
