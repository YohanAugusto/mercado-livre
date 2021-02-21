/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ITEM } from 'api'
import { ProductDetail } from 'components'

const Artist = () => {
  const params = useParams()

  const [product, setProduct] = useState(null)
  const [description, setDescription] = useState(null)

  useEffect(() => {
    const loadProductInformation = async () => {
      try {
        const produtctInfo = await ITEM.get(`${params?.id}`)

        setProduct(produtctInfo.data)
      } catch (error) {
        console.error(error)
      }
    }

    const loadProductDescription = async () => {
      try {
        const productDescription = await ITEM.get(`${params?.id}/description`)

        setDescription(productDescription.data)
      } catch (error) {
        console.error(error)
        setDescription('')
      }
    }

    if (params?.id) {
      loadProductInformation()
      loadProductDescription()
    }
  }, [params])

  if (!product) {
    return null
  }

  return (
    <ProductDetail product={product} description={description} />
  )
}
export default Artist
