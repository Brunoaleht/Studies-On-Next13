// revalidation de page toda:
// export const revalidate = 30
import { Repo } from '@/components/Repo'
import Link from 'next/link'

// useRouter from 'navigation'
// import { useRouter } from 'next/navigation'

// Suspense Api
// import { Suspense } from 'react'

// O suspense serve para ele carregar as coisas q não precisa da chamada da api, pois ele aguarda a penas a chamada api, muito bom para fazer streaming SSR

export default function Dashboard() {
  // revalidate de uma unica requisição
  // const response = await fetch('https://api.github.com/users/diego3g', {
  //   next: {
  //     revalidate: 30, isso aqui vai atualizar os meus dados em 30 e 30 segundas
  //   },
  // })

  // SSR como no next 12
  // const response = await fetch('https://api.github.com/users/diego3g', {
  //   cache: 'no-store',
  // })

  // Dupla chamada de api independentes, chamadas paralelas
  // const [res1, res2 ] = await Promise.all([
  //   fetch('ajsdhkafja')
  //   fetch('ajkdgahgd')
  // ])

  // roteamento no next 13.4, podemos usar o Link, igual ao next 12, e a outra forma é eu precisar fazer uma navegação após alguma ação do usuário. usando o userRouter do navigation
  // const router = useRouter()
  // router.refresh() // é uma forma de recarregar a pagina quando o usurario mudar de rota, isso é para usar em listas q vão se atualizar, a partir de um cadastro ou algo assim, isso é mais devido ao cache q o next 13 trouxe com o sistema de rotemento.
  // function submit () {
  //   router.push('/')
  // }
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/product/123">Produto</Link>
      {/* <Suspense fallback={<p>Carregando repositórios</p>}> */}
      {/* @ts-expect-error Async Server Component */}
      <Repo />
      {/* </Suspense> */}
    </div>
  )
}
// o next 13 é praticamente server-sid first

// ssr- server side rendering
