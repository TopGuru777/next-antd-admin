import { Row } from 'antd'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { ColStyled } from '../components/shared/'
import UserCard from '../components/dashboard-components/UserCard'
import VisitCard from '../components/dashboard-components/VisitCard'
import LikeCard from '../components/dashboard-components/LikeCard'
import CommentCard from '../components/dashboard-components/CommentCard'
import moment from 'moment'

const Dashboard = () => {
  const USER_DATA = []
  const VISIT_DATA = []
  const COMMENT_DATA = []
  const LIKE_DATA = []
  const beginDay = new Date().getTime()
  for (let i = 0; i < 10; i++) {
    const x = moment(new Date(beginDay - 1000 * 60 * 60 * 24 * i)).format(
      'YYYY-MM-DD'
    )
    USER_DATA.unshift({ x, y: Math.floor(Math.random() * 20) + 1 })
    VISIT_DATA.unshift({ x, y: Math.floor(Math.random() * 20) + 1 })
    COMMENT_DATA.unshift({ x, y: Math.floor(Math.random() * 20) + 1 })
    LIKE_DATA.unshift({ x, y: Math.floor(Math.random() * 20) + 1 })
  }

  const DAYS = 10 - 1

  const TOTAL_USERS = 124
  const DAILY_USERS = 15
  const DAILY_USERS_CHANGE = USER_DATA[DAYS].y - USER_DATA[DAYS - 1].y

  const TOTAL_VISITS = 50
  const DAILY_VISITS = 17
  const DAILY_VISITS_CHANGE = VISIT_DATA[DAYS].y - VISIT_DATA[DAYS - 1].y

  const TOTAL_LIKES = 25
  const DAILY_LIKES = 5
  const DAILY_LIKES_CHANGE = LIKE_DATA[DAYS].y - LIKE_DATA[DAYS - 1].y

  const TOTAL_COMMENTS = 35
  const DAILY_COMMENTS = 12
  const DAILY_COMMENTS_CHANGE = COMMENT_DATA[DAYS].y - COMMENT_DATA[DAYS - 1].y

  // for (let i = 0; i < 10; i++) {
  //   data[i].y = 0
  // }
  // data[12].y = 0

  return (
    <Layout>
      <Row
        gutter={16}
        style={{ marginTop: 20, marginLeft: 12, marginRight: 12 }}
      >
        <ColStyled xs={24} sm={12}>
          <UserCard
            TOTAL_USERS={TOTAL_USERS}
            DAILY_USERS={DAILY_USERS}
            DAILY_USERS_CHANGE={DAILY_USERS_CHANGE}
            USER_DATA={USER_DATA}
          />
        </ColStyled>

        <ColStyled xs={24} sm={12}>
          <VisitCard
            TOTAL_VISITS={TOTAL_VISITS}
            DAILY_VISITS={DAILY_VISITS}
            DAILY_VISITS_CHANGE={DAILY_VISITS_CHANGE}
            VISIT_DATA={VISIT_DATA}
          />
        </ColStyled>

        <ColStyled xs={24} sm={12}>
          <LikeCard
            TOTAL_LIKES={TOTAL_LIKES}
            DAILY_LIKES={DAILY_LIKES}
            DAILY_LIKES_CHANGE={DAILY_LIKES_CHANGE}
            LIKE_DATA={LIKE_DATA}
          />
        </ColStyled>

        <ColStyled xs={24} sm={12}>
          <CommentCard
            TOTAL_COMMENTS={TOTAL_COMMENTS}
            DAILY_COMMENTS={DAILY_COMMENTS}
            DAILY_COMMENTS_CHANGE={DAILY_COMMENTS_CHANGE}
            COMMENT_DATA={COMMENT_DATA}
          />
        </ColStyled>
      </Row>
    </Layout>
  )
}

// Dashboard.getInitialProps = async () => {
//   console.log('dashboard getting data')
//   const test = await new Promise(resolve =>
//     setTimeout(() => {
//       resolve('dog')
//     }, 5000)
//   )
//   console.log('done :)')

//   return {
//     test
//   }
// }

export default Dashboard
