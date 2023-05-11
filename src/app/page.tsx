import Link from 'next/link'
import { User } from '@/components/User'

// o teste do prefetch deu certo

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dashboard">Dashboard</Link>
      <User />
    </div>
  )
}
