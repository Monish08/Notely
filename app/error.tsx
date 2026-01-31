"use client"


import Link from "next/link";

import { Button } from "@/components/ui/button";



export default function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h2 className="text-xl font-medium">
        Oops! Something went wrong.
      </h2>
      <Button asChild>
        <Link href="/documents">
        Go Back 
        </Link>
      </Button>
    </div>
  )
}
