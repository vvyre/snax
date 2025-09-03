import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { StartPage } from './page'
import { Providers } from './providers'
import { Navigation } from 'components/Navigation'
import { IssuePage } from './issues/page'
import { CustomsPage } from './customs/page'

const r = createBrowserRouter([
  {
    element: (
      <Providers>
        <Navigation />
        <Outlet />
      </Providers>
    ),
    children: [
      {
        path: '/',
        element: <StartPage />,
      },
      { path: '/issues', element: <IssuePage /> },
      { path: '/customs', element: <CustomsPage /> },
      { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
  },
])
export const Router = () => {
  return <RouterProvider router={r} />
}
