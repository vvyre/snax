import { css } from '@emotion/react'
import { ChevronLeft } from 'lucide-react'
import { BaseBtn } from './Btn'
import { useNavigate } from 'react-router'

export function BottomNav() {
  const navigate = useNavigate()

  return (
    <>
      <div
        css={css`
          height: 3.15rem;
          padding-bottom: env(safe-area-inset-bottom);
          padding-inline: 1.5rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          bottom: 0;
          background-color: white;
          border-top: 1px solid #f6f6f6;
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
      </div>
    </>
  )
}
