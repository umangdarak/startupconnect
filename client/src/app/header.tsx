import { Button, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

export const HeaderPage = () => {
  return (
    <div className='flex flex-row w-screen h-16 rounded-br-md rounded-bl-md'>
      <div className='flex flex-row items-center gap-3 px-10 justify-between w-full'>
        <Link href="/auth/login" className='gap-3 px-10'>
      <Text className='font-mono  text-2xl text-customBlack'>STARTUP</Text>
      <Text className='font-mono text-2xl text-customBlack'>CONNECT</Text>
      </Link>
      <div className='flex flex-row gap-3 '>
        <Link href="/auth/login">
        <Button>
          <Text>Login</Text>
        </Button>
        </Link>
        <Link href="/auth/register">
        <Button>
          <Text>
            Register
          </Text>
        </Button>
        </Link>
      </div>
      </div>
    </div>
  )
}
