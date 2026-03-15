import type { Core } from '@strapi/strapi'

const config: Core.Config.Api = {
  rest: {
    defaultLimit: 25,
    maxLimit: 300,
    withCount: true,
  },
}

export default config
