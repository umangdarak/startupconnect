import { Text } from '@radix-ui/themes'
import React from 'react'

export const HeaderPage = () => {
  return (
    <div className='flex flex-row w-screen h-16 rounded-br-md rounded-bl-md'>
      <div className='flex flex-row items-center gap-3'>
      <Text className='font-mono  text-2xl text-customBlack'>STARTUP</Text>
      <Text className='font-mono text-2xl text-customBlack'>CONNECT</Text>
      </div>
    </div>
  )
}
