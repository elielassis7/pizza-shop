import '@/global.css'

import { Button } from '@/components/ui/button.tsx'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza shop" />
      <RouterProvider router={router} />
    </HelmetProvider>

  )
}


