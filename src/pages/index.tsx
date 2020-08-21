import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>My Personal Page</h1>
      <h2>
        Writing partial posts in Notion published via Next.js and Vercel
      </h2>

      <div className="explanation">
        <p>
          Bio or mission statement goes here.
        </p>
      </div>
    </div>
  </>
)
