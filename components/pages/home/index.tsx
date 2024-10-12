import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { links } from "@/lib/data/links";
import Image from "next/image";
import Link from "next/link";

export const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {links.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <Link href={item.url} passHref>
            {/* Wrapper for the image to enforce 16:9 aspect ratio */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={1000}
              height={1000}
              className="object-cover aspect-video"
            />
          </Link>
          <div className="p-4 flex flex-col justify-between items-start">
            <div className="">
              <h2 className="text-xl font-bold text-gray-800">
                <Link href={item.url}>{item.title}</Link>
              </h2>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-sm text-gray-500">{item.category}</span>
            </div>
            <div className="mt-4">
              <Link href={item.url} passHref>
                <Button variant={"outline"}>Learn More</Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
