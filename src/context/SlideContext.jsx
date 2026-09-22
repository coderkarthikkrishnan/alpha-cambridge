import { createContext, useContext, useState } from 'react'

/**
 * SlideContext — lets the HeroSlider broadcast the active slide index
 * to any subscriber (e.g. Navbar) without prop-drilling.
 *
 * slideIndex: 0 = Cambridge (blue accent)
 *             1 = TKT       (red accent)
 */
const SlideContext = createContext({ slideIndex: 0, setSlideIndex: () => {} })

export function SlideProvider({ children }) {
  const [slideIndex, setSlideIndex] = useState(0)
  return (
    <SlideContext.Provider value={{ slideIndex, setSlideIndex }}>
      {children}
    </SlideContext.Provider>
  )
}

export function useSlide() {
  return useContext(SlideContext)
}
