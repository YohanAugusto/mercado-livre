import PropTypes from 'prop-types'
import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Text } from 'components'
import { Product, Image, IMG, Block } from './style'

const ProductDetail = ({ product, description }) => {
  const history = useHistory()
  return (
    <Product>
      <Block>
        <Col sm={9}>
          <Image>
            <IMG src={product?.pictures[0]?.secure_url} alt="Thumbnail" onClick={() => history.push(`/items/${product.id}`)} />
          </Image>
        </Col>
        <Col sm={3} style={{ height: '500px' }}>
          <Row>
            <Text fontSize="14px">
              {product.condition}
              {' '}
              -
              {' '}
              {product.sold_quantity}
              {' '}
              {product.sold_quantity === 1 ? 'vendido' : 'vendidos'}

            </Text>
          </Row>
          <Row>
            <Text isBold fontSize="24px">{product?.title}</Text>
          </Row>
          <Row>
            <Text fontSize="46px">
              {product?.price?.toLocaleString('es-ar', { style: 'currency',
                currency: product.currency_id,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0 })}
            </Text>
          </Row>
          <Row>
            <Button size="md" block className="mt-sm-4">Comprar</Button>
          </Row>
        </Col>
      </Block>
      <Block>
        <Col>
          <Row>
            <Text fontSize="28px">Descrição do produto</Text>
          </Row>
          <Row className="mt-sm-3">
            <Text fontSize="16px" color="#999999">{description?.plain_text}</Text>
          </Row>

        </Col>
      </Block>
    </Product>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  description: PropTypes.objectOf(PropTypes.any)
}

ProductDetail.defaultProps = {
  description: ''
}

export default ProductDetail
