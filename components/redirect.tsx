'use client'


import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()

    
    // project
    if (
        pathname.toLowerCase().startsWith('/en/research/kai0-rl')
    ) {
        redirect('https://opendrivelab.com/kai0-RL')
    }

    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
