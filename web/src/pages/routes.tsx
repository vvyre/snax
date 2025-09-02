import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { StartPage } from './page'
import { Providers } from './providers'

const r = createBrowserRouter([
  {
    element: (
      <Providers>
        <Outlet />
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
