"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };
  return (
    <main className='min-h-screen min-w-full flex justify-center items-center'>
      <div className="text-center">
        <div className="size-full text-3xl font-bold tracking-tight">
          <h1>404</h1>
          <h2 className='my-0'>Not Found</h2>
        </div>
        <p className='text-muted-foreground'>Could not find requested resource</p>
        <div className="mt-4 w-full mx-auto flex gap-3 justify-center">
          <Button variant="secondary" onClick={handleGoBack}>
            Go Back
          </Button>
          <Link className={cn(buttonVariants({ variant: "outline" }))} href="/">
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}