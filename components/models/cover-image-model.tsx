"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle, 
} from "@/components/ui/dialog"

import { useCoverImage } from "@/hooks/use-cover-image"
import { useState } from "react"
import { SingleImageDropzoneUsage } from "@/components/single-image-dropzone"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useParams } from "next/navigation"
import { Id } from "@/convex/_generated/dataModel"

export const CoverImageModel = () => {
  const params = useParams()
  const update = useMutation(api.documents.update)
  const coverImage = useCoverImage()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onClose = () => {
    setIsSubmitting(false)
    coverImage.onClose()
  }

  const onUploadComplete = async (url: string) => {
    setIsSubmitting(true)
    await update({
      id: params.documentId as Id<"documents">,
      coverImage: url,
    })

    onClose()
  }

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Cover Image
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-center items-center w-full">
  <SingleImageDropzoneUsage
    disabled={isSubmitting}
    className="outline-none"
    replaceUrl={coverImage.url}
    onUploadComplete={onUploadComplete}
  />
</div>

      </DialogContent>
    </Dialog>
  )
}
