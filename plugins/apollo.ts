import { defineNuxtPlugin } from '#app'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

export default defineNuxtPlugin((nuxtApp) => {
    // HTTP connection to the API
    const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: 'https://graphql.org/swapi-graphql',
    })

    // Cache implementation
    const cache = new InMemoryCache()

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link: httpLink,
        cache,
    })
    nuxtApp.provide('apollo', apolloClient)
})