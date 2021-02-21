/* eslint-disable no-unused-expressions */
import axios from 'axios'

const { REACT_APP_API_SEARCH_URL, REACT_APP_API_ITEM_URL } = process.env

export const SEARCH = axios.create({
  baseURL: REACT_APP_API_SEARCH_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const ITEM = axios.create({
  baseURL: REACT_APP_API_ITEM_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
