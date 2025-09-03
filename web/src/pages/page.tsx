import { Divider } from 'components/Divider'
import { FixedCTA } from 'components/FixedCTA'
import { Section } from 'components/Section'
import { Top } from 'components/Top'
import { useBottomSheet } from 'hooks/useBottomSheet'

export function StartPage() {
  const sheet = useBottomSheet()
  return (
    <>
      <Top />
      <Divider size={2} />
      <Section>메뉴 아직 없는데용</Section>
      <FixedCTA
        gridType="1Col"
        onConfirm={() => {
          console.log('??')
          sheet.open(<>헐</>)
        }}
        confirmTxt="열어 당장"
      />
    </>
  )
}
