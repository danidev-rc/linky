import { z } from 'zod'

export const createTagSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  })
})

export const updateTagSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  })
})
