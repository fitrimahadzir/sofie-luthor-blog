import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogMapPage from './pages/BlogMapPage'

function NotFoundPage() {
  return (
    <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
      <h1>404</h1>
      <p>That page took a wrong turn and ended up off the dance floor.</p>
      <Link to="/" className="button button--dark">
        Back home
      </Link>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <PostPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'peta-blog', element: <BlogMapPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
