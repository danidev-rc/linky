import { prisma } from '../config/db.js'
import { nanoid } from 'nanoid'

export const createLink = async (req, res) => {
  const { url, description, linky, tags } = req.body
  const userId = req.user.id
  try {
    const shortLink = linky || nanoid(10)

    const existingLink = await prisma.links.findUnique({
      where: { linky: shortLink }
    })

    if (existingLink) return res.status(400).json({ error: 'Link already exists' })

    const newLink = await prisma.links.create({
      data: {
        url,
        linky: shortLink,
        description,
        creatorId: userId,
        tags: {
          create: tags.map(tag => ({ tag }))
        }
      }

    })
    res.json({ message: 'Link created successfully', link: newLink })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error creating link' })
  }
}

export const getLinks = async (req, res) => {
  const userId = req.user.id
  try {
    const links = await prisma.links.findMany({
      where: { creatorId: userId },
      include: { tags: { select: { tag: true } } }
    })
    res.json({ links })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error getting links' })
  }
}

export const updateLink = async (req, res) => {
  const { id } = req.params
  const { url, description, tags } = req.body
  try {
    const updatedLink = await prisma.links.update({
      where: { id: parseInt(id) },
      data: {
        url,
        description,
        tags: {
          deleteMany: {},
          create: tags.map(tag => ({ tag }))
        }
      }
    })
    res.json({ message: 'Link updated successfully', link: updatedLink })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error updating link' })
  }
}

export const deleteLink = async (req, res) => {
  const { id } = req.params
  try {
    await prisma.links.delete({ where: { id } })
    res.json({ message: 'Link deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error deleting link' })
  }
}
