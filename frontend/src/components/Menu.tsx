import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Login = ({ login }: { login: () => void }): JSX.Element => (
  <Menu.Item key='login' onClick={login}>
    Login
  </Menu.Item>
)

export const Logout = ({ logout }: { logout: () => void }): JSX.Element => (
  <Menu.Item key='logout' onClick={logout}>
    Logout
  </Menu.Item>
)

export const MenuBar = (): JSX.Element => {
  const { auth, login, logout } = useAuth()
  const isAuthenticated = auth?.isAuthenticated() ?? false

  return (
    <Menu mode='horizontal'>
      <Menu.Item key='home'>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item key='greeting'>
        <Link to='/greeting'>Greeting</Link>
      </Menu.Item>
      {isAuthenticated ? (
        <>
          <Menu.Item key='adminGreeting'>
            <Link to='/adminGreeting'>AdminGreeting</Link>
          </Menu.Item>
          <Logout logout={logout} />
        </>
      ) : (
        <Login login={login} />
      )}
    </Menu>
  )
}
