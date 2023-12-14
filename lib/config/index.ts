type Config = {
  apiBasePath: string
}

const hostname = process.env.API_HOST || 'localhost'

export const getConfig = (): Config => {
  switch (process.env.NODE_ENV) {
    case 'production': {
      return {
        apiBasePath: `http://${hostname}/recipe-maker`,
      }
    }
    default: {
      return {
        apiBasePath: `http://${hostname}/recipe-maker`,
      }
    }
  }
}
