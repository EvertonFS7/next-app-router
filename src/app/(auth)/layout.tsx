import React, { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>
        <h1>Logo App</h1>
        <div>{children}</div>
      </div>
    </div>
  )
}
