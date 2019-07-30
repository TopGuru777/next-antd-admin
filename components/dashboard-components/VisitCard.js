import {
  CardStyled,
  MainIcon,
  CardDivider,
  NumberInfoStyled,
  CardFooter,
  HelperIcon,
  BarContainer
} from '../shared'
import dynamic from 'next/dynamic'

const MiniArea = dynamic(
  import('ant-design-pro/lib/Charts').then(mod => mod.MiniArea),
  { ssr: false }
)

export default ({
  TOTAL_VISITS,
  DAILY_VISITS,
  DAILY_VISITS_CHANGE,
  VISIT_DATA
}) => (
  <CardStyled>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <MainIcon type="environment" style={{ color: '#F73F3F' }} />
      <NumberInfoStyled subTitle="Total visits" total={TOTAL_VISITS} />
      <HelperIcon title="Total number of times sculptures have been visited" />
    </div>

    <BarContainer>
      <MiniArea line data={VISIT_DATA} borderColor="#F73F3F" color="#fff2f0" />
    </BarContainer>

    <CardDivider />

    <CardFooter
      title="Daily visits"
      value={DAILY_VISITS}
      change={DAILY_VISITS_CHANGE}
    />
  </CardStyled>
)
