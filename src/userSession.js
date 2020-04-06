import { UserSession, AppConfig } from 'blockstack'

// import { configure, User, getConfig } from 'radiks'
import { configure } from 'radiks'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const userSession = new UserSession({ appConfig })
window.userSession = userSession

configure({
  apiServer: 'http://localhost:1260',
  userSession
})
