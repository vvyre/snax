import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { StartPage } from './page'
import { RootLayout } from './layout'
import { Providers } from './providers'

const r = createBrowserRouter([
  {
    element: (
      <Providers>
        <RootLayout>
          <Outlet />
        </RootLayout>
      </Providers>
    ),
    children: [
      {
        path: '/',
        element: <StartPage />,
      },
      { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
  },
])
export const Router = () => {
  return <RouterProvider router={r} />
}
