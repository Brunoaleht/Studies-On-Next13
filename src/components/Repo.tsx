export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  })
  const repos = await response.json()
  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos)}</pre>
    </div>
  )
}
