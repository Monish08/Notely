"use client"
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import {api} from "@/convex/_generated/api";
import {toast} from "sonner";
import { useRouter } from "next/navigation";
export default function DocumentsPage() {
    const router= useRouter();
    const {user} = useUser();
    const create = useMutation(api.documents.create);
    const onCreate = () =>{
        const promise = create({title:"Untitled"}).then((documentId)=>{
            router.push(`/documents/${documentId}`);
        });
        toast.promise(promise,{
            loading:"Creating a document...",
            success:"Document created!",
            error:"Failed to create document.",
        });
    }
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <Image
        src="/empty1.png"
        height={300}
        width={300}
        alt="Empty"
        className="dark:hidden"
        />
        <h2 className="mt-0 text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Notely Documents!
        </h2>
        <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Create a note
        </Button>
    </div>
  )
}
