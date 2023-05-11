import Link from 'next/link'

interface ProductProps {
  params: {
    id: String
  }
}
export async function generateMetadata({ params }: ProductProps) {
  return {
    title: `Produto - ${params.id}`,
  }
}
export default function Product({ params }: ProductProps) {
  return (
    <div>
      <p>Produto: {params.id} </p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}
