import { css } from '@emotion/react'
import { Banana, BanIcon, PackageSearchIcon, TvIcon } from 'lucide-react'

export function RightMenu({ open }: { open: boolean }) {
  return (
    <div
      css={css`
        background-color: black;
        z-index: 9;
        height: 100dvh;
        width: clamp(220px, 33vw, 300px);
        padding: 4rem 0.75rem 4rem 0.75rem;
        position: fixed;
        right: 0;
        top: 0;
        transform: translateX(${open ? 0 : '101%'});
        transition: transform ease-in-out 0.1s;
      `}>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          row-gap: 1.5rem;
          column-gap: 0.35rem;
          justify-items: center;
          color: white;
        `}>
        <TvIcon strokeWidth={1.5} />
        <BanIcon strokeWidth={1.5} />
        <Banana strokeWidth={1.5} />
        <PackageSearchIcon strokeWidth={1.5} />
        <TvIcon strokeWidth={1.5} />
        <BanIcon strokeWidth={1.5} />
        <Banana strokeWidth={1.5} />
        <PackageSearchIcon strokeWidth={1.5} />
        <TvIcon strokeWidth={1.5} />
        <BanIcon strokeWidth={1.5} />
        <Banana strokeWidth={1.5} />
        <PackageSearchIcon strokeWidth={1.5} />
      </div>
    </div>
  )
}
