import PropTypes from 'prop-types'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Text } from 'components'
import { Product, Image, IMG } from './style'

const ProductCard = ({ product }) => {
  const history = useHistory()
  return (
    <>
      <Product onClick={() => history.push(`/items/${product.id}`)}>
        <Col sm={3}>
          <Image>
            <IMG src={product?.thumbnail} alt="Thumbnail" />
          </Image>
        </Col>
        <Col>
          <Row>
            <Col sm={8}>
              <Text fontSize="24px">
                {product.price.toLocaleString('es-ar', { style: 'currency',
                  currency: product.currency_id,
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0 })}

              </Text>

            </Col>
            <Col sm={4}><Text fontSize="12px">{product.seller_address.state.name}</Text></Col>
          </Row>
          <Row className="mt-sm-3">
            <Col sm={8}>
              <Text fontSize="18px">{product.title}</Text>
            </Col>
          </Row>
        </Col>
      </Product>
    </>
  )
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired
}

export default ProductCard
