import React from 'react'
import ReactDOM from 'react-dom'
import dotenv from 'dotenv'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'components'

import { Search, Product } from 'pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'index.css'

dotenv.config()

const customHistory = createBrowserHistory()

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Layout>
        <Route exact path="/" component={Search} />
        <Route exact path="/items" component={Search} />
        <Route exact path="/items/:id" component={Product} />
      </Layout>
    </Switch>
  </Router>,
  document.getElementById('root')
)
