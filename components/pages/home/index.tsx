'use client'
import { gql, useQuery } from "@apollo/client";
import type { Link as LinkType } from "@prisma/client";
import { BlogCard } from "./blog-card";
import { Button } from "@/components/ui/button";
import { after } from "node:test";

const AllLinksQuery = gql`
query allLinksQuery($first: Int, $after: String) {
    links(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          imageUrl
          url
          title
          category
          description
          id
        }
      }
    }
  }
`

export const HomePage = () => {
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: {
      first: 2
    } 
  })
  if(loading) return <p>Loading...</p>
  if(error) return <p>Oh no... {error.message}</p>
  const { endCursor, hasNextPage } = data.links.pageInfo;
  return (
    <div className="container space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.links.edges.map(({ node }: { node: LinkType }) => (
            <BlogCard {...node} key={node.id} />
        ))}
      </div>
      {
        hasNextPage ? (
        <Button onClick={() => {
            fetchMore({
              variables: {
                after: endCursor
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                fetchMoreResult.links.edges = [
                  ...prev.links.edges,
                  ...fetchMoreResult.links.edges
                ]
                return fetchMoreResult
              }
            })
          }}>More</Button>
        ) : (<p className="my-10 text-center font-medium">
            {`You've reached the end!`}
          </p>)
      }
    </div>
  );
};
