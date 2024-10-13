'use client'
import { ApolloProvider } from "@apollo/client"
import apolloClient from "@/lib/apollo"

interface IGlobalProviders {
  children: React.ReactNode
}
export const GlobalProviders: React.FC<IGlobalProviders>  = ({ children }) => {
  return(
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )
}
