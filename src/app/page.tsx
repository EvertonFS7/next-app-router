import { Suspense } from 'react'
import GithubProfile from './github-profile/page'
import LongWaitProfile from './long-wait-profile/page'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando conteúdo...</p>}>
        <LongWaitProfile />
      </Suspense>
      <Suspense fallback={<p>Carregando conteúdo...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
