import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Remembers scroll position per history entry (by location.key) so that
// going "back" restores where you were, while any forward/new navigation
// starts at the top.
const scrollPositions = new Map()

export default function ScrollManager() {
  const location = useLocation()
  const navType = useNavigationType() // 'POP' | 'PUSH' | 'REPLACE'
  const { pathname } = useLocation();


  // Stop the browser's own scroll restoration so it can't fight with ours
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Decide where to land whenever the route changes
  useEffect(() => {
    // Let a #hash link (e.g. navbar's "/#about") handle its own scrolling
    if (location.hash) return

    if (navType === 'POP') {
      const saved = scrollPositions.get(location.key)
      window.scrollTo(0, saved ?? 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location, navType])

  // Continuously record the scroll position for the CURRENT history entry,
  // so it's there to restore later if the user comes back to it
  useEffect(() => {
    const onScroll = () => {
      scrollPositions.set(location.key, window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.key])

   useEffect(() => {
    if (pathname.startsWith("/projects/")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]); 

  return null
}