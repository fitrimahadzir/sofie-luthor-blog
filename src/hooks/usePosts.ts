import { useCallback, useEffect, useState } from 'react'
import { wpService } from '../services/wpClient'
import type { Post, PostsPage } from '../types/post'

interface UsePostsState {
  posts: Post[]
  totalPages: number
  loading: boolean
  error: string | null
}

export function usePosts(category = 'all', page = 1) {
  const [state, setState] = useState<UsePostsState>({
    posts: [],
    totalPages: 1,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    setState((s) => ({ ...s, loading: true, error: null }))

    wpService
      .getPosts(category, page)
      .then((result: PostsPage) => {
        if (cancelled) return
        setState({
          posts: result.posts,
          totalPages: result.totalPages,
          loading: false,
          error: null,
        })
      })
      .catch((err: Error) => {
        if (cancelled) return
        setState((s) => ({ ...s, loading: false, error: err.message }))
      })

    return () => {
      cancelled = true
    }
  }, [category, page])

  return state
}

interface UsePostState {
  post: Post | undefined
  loading: boolean
  error: string | null
}

export function usePost(slug: string | undefined) {
  const [state, setState] = useState<UsePostState>({
    post: undefined,
    loading: true,
    error: null,
  })

  const reload = useCallback(() => {
    if (!slug) {
      setState({ post: undefined, loading: false, error: null })
      return
    }
    setState({ post: undefined, loading: true, error: null })
    wpService
      .getPost(slug)
      .then((post) => {
        setState({ post, loading: false, error: null })
      })
      .catch((err: Error) => {
        setState({ post: undefined, loading: false, error: err.message })
      })
  }, [slug])

  useEffect(reload, [reload])

  return { ...state, reload }
}

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    let cancelled = false
    wpService
      .getCategories()
      .then((cats) => {
        if (!cancelled) setCategories(cats)
      })
      .catch(() => {
        /* ignore — categories are decorative */
      })
    return () => {
      cancelled = true
    }
  }, [])

  return categories
}
