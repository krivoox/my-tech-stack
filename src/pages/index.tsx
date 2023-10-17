import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, } = useSession()
  if (session) {
    return (
      <div style={{ backgroundColor: '#2C2F33', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
        <p>Signed in as {session.user?.email}</p>
        <button 
          onClick={() => signOut()} 
          style={{ backgroundColor: '#7289DA', color: '#FFFFFF', border: 'none', borderRadius: '5px', padding: '10px' }}
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <div style={{ backgroundColor: '#2C2F33', color: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
      <p>Not signed in</p>
      <button 
        onClick={() => signIn("discord")} 
        style={{ backgroundColor: '#7289DA', color: '#FFFFFF', border: 'none', borderRadius: '5px', padding: '10px' }}
      >
        Sign in
      </button>
    </div>
  )
}
