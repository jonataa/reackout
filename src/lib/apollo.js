import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://xvkvz423v4.sse.codesandbox.io/', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
}

export default withData(config)