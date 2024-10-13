'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { gql, useQuery } from "@apollo/client";
import type { Link as LinkType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const AllLinksQuery = gql`
query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`

export const HomePage = () => {
  const { data, loading, error } = useQuery(AllLinksQuery)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Oh no... {error.message}</p>
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.links.map((item: LinkType) => (
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
