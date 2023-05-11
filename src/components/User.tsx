'use client'

import { useState } from 'react'

// import { cookies, headers } from 'next/headers'
export function User() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  // Acessar os cookies da requisição do usuário:
  // const userCookies = cookies()
  // const userHeaders = headers()
  // const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
  //   cache: 'force-cache',
  // })
  // const resp = await response.json()
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
}
