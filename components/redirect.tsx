'use client'


import { redirect, usePathname } from 'next/navigation'



export default function Redirect() {



    const pathname = usePathname()

    
    // project
    if (
        pathname.toLowerCase().startsWith('/en/research/kai0-rl')
        || pathname.toLowerCase().startsWith('/zh/research/kai0-rl')
        || pathname.toLowerCase().startsWith('/en/research/rise')
        || pathname.toLowerCase().startsWith('/zh/research/rise')
    ) {
        redirect('https://opendrivelab.com/kai0-rl')
    }

    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
