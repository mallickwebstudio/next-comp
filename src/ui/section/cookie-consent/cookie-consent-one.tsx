"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from '@/components/ui/checkbox'

export default function CookieConsentOne() {
  const [cookieOpen, setCookieOpen] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className='h-screen'>
      {/* Sticky Cookie Container */}
      <div
        className={cn(
          "fixed bottom-4 right-4 p-4 pr-8 bg-background border rounded-md max-w-lg z-50",
          cookieOpen ? "block" : "hidden"
        )}
      >
        <Button className='absolute top-2 right-2 cursor-pointer' variant="ghost" size="icon" onClick={() => setCookieOpen(false)}>
          <X />
          <span className="sr-only">Close Cookie Button</span>
        </Button>
        <p>
          By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our <Link className='underline hover:underline-offset-2' href="#"> Privacy Policy </Link> for more information.
        </p>
        <div className="mt-4 flex flex-row-reverse gap-2 items-center flex-wrap">
          <Button className='cursor-pointer' onClick={() => setCookieOpen(false)}>
            Accept
          </Button>
          <Button className='cursor-pointer' variant="outline" onClick={() => setCookieOpen(false)}>
            Decline
          </Button>
          <Button className='cursor-pointer' variant="ghost" onClick={() => setDialogOpen(true)}>
            Preferences
          </Button>
        </div>
      </div>

      {/* Preference Dialog/Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Privacy Preferences</DialogTitle>
          </DialogHeader>
          <div className="max-h-[calc(100vh_/_2)] overflow-y-scroll space-y-4">
            <div>
              <div className="flex justify-between items-center gap-4">
                <div className="font-medium">Essential</div>
                <div className="">Required</div>
              </div>
              <div className='text-muted-foreground'>
                These items are required to enable basic website functionality.
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center gap-4">
                <div className="font-medium">Marketing</div>
                <div><Checkbox /></div>
              </div>
              <div className='text-muted-foreground'>
                These items are used to deliver advertising that is more relevant to you and your interests.
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center gap-4">
                <div className="font-medium">Personalization</div>
                <div><Checkbox /></div>
              </div>
              <div className='text-muted-foreground'>
                These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center gap-4">
                <div className="font-medium">Analytics</div>
                <div><Checkbox /></div>
              </div>
              <div className='text-muted-foreground'>
                These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues.
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className='cursor-pointer' variant="outline">Reject all cookies</Button>
            </DialogClose>
            <Button className='cursor-pointer'>Save preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div >
  )
}
