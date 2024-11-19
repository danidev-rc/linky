import { createContext, useContext, useState, useEffect } from 'react'
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
  if (!context) throw new Error('useLinks must be used within a LinkProvider')
  return context
}

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const res = await getLinksRequest()
        setLinks(res.data.links)
        setLoading(false)
      } catch (error) {
        setErrors(error.response.data.message)
        setLoading(false)
      }
    }
    fetchLinks()
  }, [])

  const createLink = async (link) => {
    try {
      const res = await createLinkRequest(link)
      setLinks([...links, res.data.link])
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const updateLink = async (id, link) => {
    try {
      const res = await updateLinkRequest(id, link)
      setLinks(links.map((l) => (l.id === id ? res.data.link : l)))
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const deleteLink = async (id) => {
    try {
      await deleteLinkRequest(id)
      setLinks(links.filter((link) => link.id !== id))
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  const getLink = async (linky) => {
    try {
      const res = await getLinkRequest(linky)
      return res.data.link
    } catch (error) {
      setErrors(error.response.data.message)
    }
  }

  return (
    <LinkContext.Provider
      value={{
        links,
        loading,
        errors,
        createLink,
        updateLink,
        deleteLink,
        getLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  )
}
