type Config = {
  apiBasePath: string
}

const hostname = process.env.PROXY_HOST || 'localhost'

export const getConfig = (): Config => {
  console.log({ hostname })
  switch (process.env.NODE_ENV) {
    case 'production': {
      return {
        apiBasePath: `http://${hostname}/api/recipe-maker`,
      }
    }
    default: {
      return {
        apiBasePath: `http://${hostname}/api/recipe-maker`,
      }
    }
  }
}
