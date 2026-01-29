import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Logo() {  
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            src="/notely-logo.svg"
            height="40"
            width="40"
            alt="Notely Logo"
            className="dark:hidden"
            />
            <Image
            src="/notely-logo-dark.svg"
            height="40"
            width="40"
            alt="Notely Logo"
            className="hidden dark:block"
            />
            <p className={cn("font-semibold", font.className)}>
                Notely
            </p>
        </div>
    )
} 