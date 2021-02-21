/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'

import { ProductCard } from 'components'
import { SEARCH } from 'api'
import { useHistory } from 'react-router-dom'
import { Results } from './style'

const Search = () => {
  const history = useHistory()

  const [products, setProducts] = useState(null)

  const searchQuery = history.location.search.split('=')[1]

  useEffect(() => {
    const loadSearch = async () => {
      try {
        const response = await SEARCH.get(`search?q=${searchQuery}`)
        setProducts(response.data.results.slice(0, 4))
      } catch (error) {
        console.error(error)
      }
    }

    if (searchQuery) {
      loadSearch()
    }
  }, [searchQuery])

  if (!products) {
    return null
  }

  return (
    <Results>
      {products?.map(product => <ProductCard key={product.id} product={product} />)}
    </Results>
  )
}

export default Search
