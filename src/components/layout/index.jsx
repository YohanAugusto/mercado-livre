import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { InputGroup, Container } from 'react-bootstrap'

import LogoML from 'assets/images/logo-ml.png'
import Search from 'assets/images/search.png'

import { useHistory } from 'react-router-dom'
import { SNavbar, SForm, Img, SFormControl } from './style'

const Layout = ({ children }) => {
  const history = useHistory()

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    history.push(`/items?search=${searchValue}`)
  }

  const renderNavbar = () => (
    <SNavbar>
      <SForm width="100%" onSubmit={handleSearch}>
        <Img
          src={LogoML}
          marginRight="20px"
          onClick={() => {
            history.push('/')
            setSearchValue('')
          }}
        />
        <InputGroup>
          <SFormControl id="search" name="search" placeholder="Buscar" onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
          <InputGroup.Prepend>
            <InputGroup.Text><Img src={Search} onClick={(e) => handleSearch(e)} /></InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </SForm>
    </SNavbar>
  )

  const renderContent = () => (
    <Container className="p-4">
      {children}
    </Container>
  )

  return (
    <>
      {renderNavbar()}
      {renderContent()}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
