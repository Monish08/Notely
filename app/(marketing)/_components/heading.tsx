"use client"
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function Heading() {
  return (
    <div className='max-w-3xl space-y-4'> 
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your ideas, documents, and plans — unified in <span className="underline">Notely</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Notely is the connected workspace where <br/> better, faster work happens.
      </h3>
      <Button>
        Enter Notely
        <ArrowRight className='h-4 w-4 ml-2'/>
      </Button>
    </div>
  )
}
