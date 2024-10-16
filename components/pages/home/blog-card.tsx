import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link as LinkType } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

export const BlogCard: React.FC<LinkType> = ({ title, imageUrl, id, description, url, category}) => {
  return (
        <Card key={id} className="overflow-hidden">
          <Link href={url} passHref>
            {/* Wrapper for the image to enforce 16:9 aspect ratio */}
            <Image
              src={imageUrl}
              alt={title}
              width={1000}
              height={1000}
              className="object-cover aspect-video"
            />
          </Link>
          <div className="p-4 flex flex-col justify-between items-start">
            <div className="">
              <h2 className="text-xl font-bold text-gray-800">
                <Link href={url}>{title}</Link>
              </h2>
              <p className="text-gray-600">{description}</p>
              <span className="text-sm text-gray-500">{category}</span>
            </div>
            <div className="mt-4">
              <Link href={url} passHref>
                <Button variant={"outline"}>Learn More</Button>
              </Link>
            </div>
          </div>
        </Card>
      )
}
