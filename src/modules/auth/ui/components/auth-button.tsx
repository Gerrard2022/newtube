'use client';

import { Button } from '@/components/ui/button'
import { Clapperboard, UserCircleIcon } from 'lucide-react'
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs';

const AuthButton = () => {
    //TODO: Add different auth states
  return (
    <>
    <SignedIn>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link 
            label='Studio'
            href='/studio'
            labelIcon={<Clapperboard className='size-4' />}
          />
          <UserButton.Action label='manageAccount'/>
        </UserButton.MenuItems>
      </UserButton>
    </SignedIn>
    <SignedOut>
      <SignInButton mode='modal'>
        <Button
            variant="outline"
            className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-400 border-blue-500/20 
                rounded-full shadow-none [&_svg]:size-4'
        >
            <UserCircleIcon />
            Sign In
        </Button>
      </SignInButton>
    </SignedOut>
    </>
  )
}

export default AuthButton