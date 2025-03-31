import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import React from 'react'

const AuthButton = () => {
    //TODO: Add different auth states
  return (
    <Button
        variant="outline"
        className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-400 border-blue-500/20 
             rounded-full shadow-none [&_svg]:size-4'
    >
        <UserCircleIcon />
        Sign In
    </Button>
  )
}

export default AuthButton