import { createContext, useContext, useState } from 'react'
import {
  createLinkRequest,
  getLinksRequest,
  updateLinkRequest,
  deleteLinkRequest,
  getLinkRequest,
} from '../api/link'

const LinkContext = createContext()

export const useLinks = () => {
  const context = useContext(LinkContext)
  if (!context) {
    throw new Error('useLinks must be used within a LinkProvider')
  }
  return context
}

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([])

  const getLinks = async () => {
    try {
      const res = await getLinksRequest()
      setLinks(res.data.links)
    } catch (error) {
      console.log(error)
    }
  }

  const createLink = async (link) => {
    try {
      const res = await createLinkRequest(link)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteLink = async (id) => {
    try {
      const res = await deleteLinkRequest(id)
      if (res.status === 204) setLinks(links.filter((link) => link.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateLink = async (id, link) => {
    try {
      await updateLinkRequest(id, link)
    } catch (error) {
      console.log(error)
    }
  }

  const getLinky = async (linky) => {
    try {
      const res = await getLinkRequest(linky)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LinkContext.Provider
      value={{
        links,
        getLinks,
        createLink,
        deleteLink,
        updateLink,
        getLinky,
      }}
    >
      {children}
    </LinkContext.Provider>
  )
}
