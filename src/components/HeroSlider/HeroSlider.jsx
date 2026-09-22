import { useRef, useEffect, useCallback, useState } from 'react'
import gsap from 'gsap'
import teacherImg from '../../assets/teacher.png'
import heroimg from '../../assets/hero.png'
import cambridgeLogo from '../../assets/images/cambridge-assessment-english.png'
import './HeroSlider.css'

/* ============================================================
   SLIDE DATA
   ============================================================ */
const SLIDES = [
  {
    id: 'cambridge',
    variant: 'cambridge',
    eyebrow: 'Step into a world of',
    lines: [
      { text: 'Globally recognized', bold: true },
      { text: 'English qualifications', bold: false },
      {
        // Mixed weight: "with Alpha" (400) + "Cambridge" (700)
        parts: [
          { text: 'with Alpha ', bold: false },
          { text: 'Cambridge', bold: true },
        ],
      },
      { text: 'Exam Centre.', script: true },
    ],
    cta: 'Enquire Now',
    ctaLink: '#contact',
    imageUrl: heroimg,
    imageFallback: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80',
    imageAlt: 'Student sitting at an examination desk, writing with a pen, smiling confidently',
    showTrust: true,
  },
  {
    id: 'tkt',
    variant: 'tkt',
    eyebrow: 'Take your teaching expertise further with the',
    lines: [
      { text: 'Teaching Knowledge Test,', bold: true },
      { text: 'designed to strengthen', bold: false },
      {
        // Mixed: "educators'" (46px/400/Inter) + " teaching" (70px/700/Caveat)
        parts: [
          { text: "educators'", bold: false },
          { text: ' teaching', script: true },
        ],
      },
      { text: 'skills.', script: true },
    ],
    cta: 'Enquire Now',
    ctaLink: '#contact',
    imageUrl: teacherImg,
    imageFallback: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    imageAlt: 'Professional educator holding an open book, holding a pen, confident and engaged',
    showTrust: false,
  },
]

/* ============================================================
   CAMBRIDGE ASSESSMENT TRUST LOGO
   ============================================================ */
function CambridgeTrustBadge() {
  return (
    <div className="hero__trust-logo" >
      <img
        src={cambridgeLogo}
        alt="Cambridge Assessment English Logo"
        className="hero__trust-logo-img"
      />
    </div>
  )
}

/* ============================================================
   REDUCED MOTION CHECK
   ============================================================ */
function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}

/* ============================================================
   HERO SLIDE COMPONENT
   ============================================================ */
function HeroSlide({ slide, slideRef, contentRef, imageRef, isActive }) {
  return (
    <div
      ref={slideRef}
      className={`hero__slide hero__slide--${slide.variant}${isActive ? ' is-active' : ''}`}
      aria-hidden={!isActive}
      data-nav-theme={`hero-${slide.id}`}
    >
      <div className="hero__slide-inner">
        {/* ---- Text Content ---- */}
        <div className="hero__content" ref={contentRef}>
          {/* Eyebrow */}
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-inner">{slide.eyebrow}</span>
          </p>

          {/* Heading lines */}
          <h1
            className="hero__heading"
            aria-label={slide.lines.map(l =>
              l.parts ? l.parts.map(p => p.text).join('') : l.text
            ).join(' ')}
          >
            {slide.lines.map((line, i) => (
              <span
                key={i}
                className={[
                  'hero__line',
                  line.bold ? 'hero__line--bold' : '',
                  line.script ? 'hero__line--script' : '',
                  line.parts ? 'hero__line--mixed' : '',
                ].filter(Boolean).join(' ')}
              >
                {line.parts ? (
                  /* Mixed-weight / mixed-font line: each part gets its own <span> */
                  <span className="hero__line-inner">
                    {line.parts.map((part, j) => (
                      <span
                        key={j}
                        className={[
                          'hero__line-part',
                          part.bold ? 'hero__line-part--bold' : '',
                          part.script ? 'hero__line-part--script' : '',
                        ].filter(Boolean).join(' ')}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="hero__line-inner">{line.text}</span>
                )}
              </span>
            ))}
          </h1>

          {/* CTA */}
          <div className="hero__cta-wrap">
            <a
              href="#contact"
              className="hero__cta"
              onClick={(e) => {
                const target = document.getElementById('contact') || document.querySelector('.section-cta')
                if (target) {
                  e.preventDefault()
                  target.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              aria-label={`${slide.cta} — learn about ${slide.id === 'cambridge' ? 'Cambridge English Qualifications' : 'Teaching Knowledge Test'}`}
            >
              {slide.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Trust badge — Cambridge slide only */}
          {slide.showTrust && (
            <div className="hero__trust">
              <div className="hero__trust-inner">
                <CambridgeTrustBadge />
              </div>
            </div>
          )}
        </div>

        {/* ---- Image ---- */}
        <div className="hero__image-wrap" ref={imageRef}>
          <img
            src={slide.imageUrl}
            alt={slide.imageAlt}
            className="hero__image"
            loading="eager"
            onError={e => { e.target.src = slide.imageFallback }}
          />
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   MAIN HERO SLIDER
   ============================================================ */
export default function HeroSlider() {
  const SLIDE_DURATION = 6000   // ms each slide is visible
  const TRANSITION_DURATION = 1.0  // GSAP seconds

  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)   // keeps a non-stale copy for callbacks
  const isAnimating = useRef(false)
  const autoTimer = useRef(null)
  const gridRef = useRef(null)
  const containerRef = useRef(null)
  const progressFills = useRef([])

  // Refs for each slide's elements
  const slideRefs = useRef(SLIDES.map(() => null))
  const contentRefs = useRef(SLIDES.map(() => null))
  const imageRefs = useRef(SLIDES.map(() => null))

  // Progress animation timelines
  const progressTls = useRef([])

  /* ---- Collect refs ---- */
  const setSlideRef = i => el => { slideRefs.current[i] = el }
  const setContentRef = i => el => { contentRefs.current[i] = el }
  const setImageRef = i => el => { imageRefs.current[i] = el }
  const setProgressRef = i => el => { progressFills.current[i] = el }

  /* Keep activeIndexRef in sync */
  useEffect(() => { activeIndexRef.current = activeIndex }, [activeIndex])

  /* ---- Auto-advance timer cleanup helper ---- */
  const clearAuto = () => {
    if (autoTimer.current) clearTimeout(autoTimer.current)
  }

  /* ---- Progress bar timeline ---- */
  const startProgressBar = useCallback((idx) => {
    progressTls.current.forEach(tl => tl?.kill())
    progressTls.current = []

    progressFills.current.forEach((fill, i) => {
      if (!fill) return
      gsap.set(fill, { scaleX: i === idx ? 0 : 0 })
    })

    const fill = progressFills.current[idx]
    if (!fill) return

    const tl = gsap.timeline()
    tl.to(fill, {
      scaleX: 1,
      duration: SLIDE_DURATION / 1000,
      ease: 'none',
    })
    progressTls.current.push(tl)
  }, [SLIDE_DURATION])

  /* ---- Text/image enter animation ---- */
  const animateEnter = useCallback((idx, isInitial = false, reduced = false) => {
    const ctx = gsap.context(() => {
      const content = contentRefs.current[idx]
      if (!content) return

      if (reduced) {
        gsap.to(content, { opacity: 1, duration: 0.4, ease: 'power2.out' })
        const imgWrap = imageRefs.current[idx]
        if (imgWrap) gsap.to(imgWrap, { opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 })
        return
      }

      // Eyebrow
      const eyebrow = content.querySelector('.hero__eyebrow-inner')
      if (eyebrow) {
        gsap.fromTo(eyebrow,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out', delay: isInitial ? 0.3 : 0.05 }
        )
      }

      // Heading lines
      const lineInners = content.querySelectorAll('.hero__line-inner')
      gsap.fromTo(lineInners,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.10,
          ease: 'power3.out',
          delay: isInitial ? 0.45 : 0.15,
        }
      )

      // CTA
      const cta = content.querySelector('.hero__cta')
      if (cta) {
        gsap.fromTo(cta,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: isInitial ? 0.9 : 0.60 }
        )
      }

      // Trust badge
      const trust = content.querySelector('.hero__trust-inner')
      if (trust) {
        gsap.fromTo(trust,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: isInitial ? 1.05 : 0.75 }
        )
      }

      // Image
      const imgWrap = imageRefs.current[idx]
      if (imgWrap) {
        gsap.fromTo(imgWrap,
          { x: 60, scale: 0.93, opacity: 0 },
          {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: TRANSITION_DURATION,
            ease: 'power3.out',
            delay: isInitial ? 0.25 : 0.20,
          }
        )
      }
    })
    return ctx
  }, [TRANSITION_DURATION])

  /* ---- Core transition ---- */
  const goTo = useCallback((nextIdx, direction = 'next') => {
    const currentIdx = activeIndexRef.current
    if (isAnimating.current) return
    if (nextIdx === currentIdx) return
    isAnimating.current = true

    const reduced = prefersReducedMotion()

    const currentSlide = slideRefs.current[currentIdx]
    const nextSlide = slideRefs.current[nextIdx]
    const currentContent = contentRefs.current[currentIdx]
    const nextContent = contentRefs.current[nextIdx]
    const currentImg = imageRefs.current[currentIdx]
    const nextImg = imageRefs.current[nextIdx]
    const grid = gridRef.current

    if (!currentSlide || !nextSlide) {
      isAnimating.current = false
      return
    }

    const exitX = direction === 'next' ? '-100%' : '100%'
    const enterX = direction === 'next' ? '100%' : '-100%'

    if (reduced) {
      gsap.to(currentSlide, { opacity: 0, duration: 0.4, ease: 'power2.inOut' })
      gsap.set(nextSlide, { opacity: 0, x: 0, zIndex: 2 })
      gsap.to(nextSlide, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(currentSlide, { opacity: 0, x: 0, zIndex: 1 })
          gsap.set(nextSlide, { opacity: 1, x: 0, zIndex: 2 })
          isAnimating.current = false
          setActiveIndex(nextIdx)
          startProgressBar(nextIdx)
        }
      })
      return
    }

    // Set z-indices for slide transition
    gsap.set(currentSlide, { zIndex: 2 })
    gsap.set(nextSlide, { zIndex: 1, x: enterX, opacity: 1 })

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        gsap.set(currentSlide, { opacity: 0, x: 0, zIndex: 1 })
        gsap.set(nextSlide, { opacity: 1, x: 0, zIndex: 2 })
        isAnimating.current = false
        setActiveIndex(nextIdx)
        startProgressBar(nextIdx)
      }
    })

    // 1) Exit current slide content
    if (currentContent) {
      const lineInners = currentContent.querySelectorAll('.hero__line-inner')
      const eyebrow = currentContent.querySelector('.hero__eyebrow-inner')
      const cta = currentContent.querySelector('.hero__cta')
      const trust = currentContent.querySelector('.hero__trust-inner')

      if (eyebrow) tl.to(eyebrow, { y: direction === 'next' ? -30 : 30, opacity: 0, duration: 0.35 }, 0)
      if (lineInners.length) {
        tl.to(lineInners, {
          y: direction === 'next' ? -50 : 50,
          opacity: 0,
          duration: 0.40,
          stagger: 0.05,
        }, 0.03)
      }
      if (cta) tl.to(cta, { y: direction === 'next' ? -20 : 20, opacity: 0, duration: 0.30 }, 0.10)
      if (trust) tl.to(trust, { y: direction === 'next' ? -20 : 20, opacity: 0, duration: 0.25 }, 0)
    }

    // 2) Exit current image
    if (currentImg) {
      tl.to(currentImg, {
        x: direction === 'next' ? -60 : 60,
        scale: 0.92,
        opacity: 0,
        duration: TRANSITION_DURATION * 0.75,
      }, 0)
    }

    // 3) Grid subtle movement
    if (grid) {
      tl.to(grid, {
        x: direction === 'next' ? '-30px' : '30px',
        duration: TRANSITION_DURATION * 0.5,
        ease: 'power2.inOut',
      }, 0)
    }

    // 4) Enter next slide base
    const enterMid = TRANSITION_DURATION * 0.35
    tl.to(nextSlide, {
      x: 0,
      duration: TRANSITION_DURATION,
      ease: 'power3.inOut',
    }, 0)

    tl.to(currentSlide, {
      x: exitX,
      duration: TRANSITION_DURATION,
      ease: 'power3.inOut',
    }, 0)

    // 5) Grid return
    if (grid) {
      tl.to(grid, {
        x: '0px',
        duration: TRANSITION_DURATION * 0.5,
        ease: 'power2.inOut',
      }, enterMid)
    }

    // 6) Enter next content text
    if (nextContent) {
      const lineInners = nextContent.querySelectorAll('.hero__line-inner')
      const eyebrow = nextContent.querySelector('.hero__eyebrow-inner')
      const cta = nextContent.querySelector('.hero__cta')
      const trust = nextContent.querySelector('.hero__trust-inner')

      if (eyebrow) gsap.set(eyebrow, { y: direction === 'next' ? 30 : -30, opacity: 0 })
      if (lineInners.length) gsap.set(lineInners, { y: direction === 'next' ? 55 : -55, opacity: 0 })
      if (cta) gsap.set(cta, { y: direction === 'next' ? 20 : -20, opacity: 0 })
      if (trust) gsap.set(trust, { y: 16, opacity: 0 })

      if (eyebrow) {
        tl.to(eyebrow, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, enterMid + 0.05)
      }
      if (lineInners.length) {
        tl.to(lineInners, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.10,
          ease: 'power3.out',
        }, enterMid + 0.10)
      }
      if (cta) {
        tl.to(cta, { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out' }, enterMid + 0.50)
      }
      if (trust) {
        tl.to(trust, { y: 0, opacity: 1, duration: 0.50, ease: 'power3.out' }, enterMid + 0.65)
      }
    }

    // 7) Enter next image
    if (nextImg) {
      gsap.set(nextImg, { x: direction === 'next' ? 60 : -60, scale: 0.93, opacity: 0 })
      tl.to(nextImg, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: TRANSITION_DURATION * 0.9,
        ease: 'power3.out',
      }, enterMid)
    }
  }, [TRANSITION_DURATION, startProgressBar])

  /* Keep a ref to goTo so auto timer can always access latest instance */
  const goToRef = useRef(goTo)
  useEffect(() => { goToRef.current = goTo }, [goTo])

  /* ---- Initial state mount effect ---- */
  useEffect(() => {
    const reduced = prefersReducedMotion()
    SLIDES.forEach((_, i) => {
      const slide = slideRefs.current[i]
      const content = contentRefs.current[i]
      const imgWrap = imageRefs.current[i]
      if (!slide) return

      if (i === 0) {
        gsap.set(slide, { opacity: 1, x: 0, zIndex: 2 })
        if (content && !reduced) {
          const eyebrow = content.querySelector('.hero__eyebrow-inner')
          const lineInners = content.querySelectorAll('.hero__line-inner')
          const cta = content.querySelector('.hero__cta')
          const trust = content.querySelector('.hero__trust-inner')
          if (eyebrow) gsap.set(eyebrow, { y: 24, opacity: 0 })
          if (lineInners.length) gsap.set(lineInners, { y: 55, opacity: 0 })
          if (cta) gsap.set(cta, { y: 20, opacity: 0 })
          if (trust) gsap.set(trust, { y: 16, opacity: 0 })
        }
        if (imgWrap && !reduced) gsap.set(imgWrap, { x: 60, scale: 0.93, opacity: 0 })
        animateEnter(0, true, reduced)
      } else {
        gsap.set(slide, { opacity: 0, x: '100%', zIndex: 1 })
      }
    })
    startProgressBar(0)
    return () => {
      gsap.killTweensOf('*')
      progressTls.current.forEach(tl => tl?.kill())
      clearAuto()
    }
  }, [animateEnter, startProgressBar])

  /* ---- Auto-advance effect ---- */
  useEffect(() => {
    clearAuto()
    autoTimer.current = setTimeout(() => {
      const cur = activeIndexRef.current
      goToRef.current?.((cur + 1) % SLIDES.length, 'next')
    }, SLIDE_DURATION)
    return () => clearAuto()
  }, [activeIndex, SLIDE_DURATION])

  const handleDotClick = useCallback((idx) => {
    const cur = activeIndexRef.current
    if (idx === cur) return
    clearAuto()
    goTo(idx, idx > cur ? 'next' : 'prev')
  }, [goTo])

  /* ---- Touch / Swipe support ---- */
  const touchStart = useRef(null)
  const touchMoved = useRef(false)

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
    touchMoved.current = false
  }

  const handleTouchMove = (e) => {
    if (!touchStart.current) return
    const diff = e.touches[0].clientX - touchStart.current
    if (Math.abs(diff) > 10) touchMoved.current = true
  }

  const handleTouchEnd = (e) => {
    if (!touchStart.current || !touchMoved.current) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      clearAuto()
      const cur = activeIndexRef.current
      if (diff > 0) {
        goTo((cur + 1) % SLIDES.length, 'next')
      } else {
        goTo((cur - 1 + SLIDES.length) % SLIDES.length, 'prev')
      }
    }
    touchStart.current = null
  }

  /* ---- Render ---- */
  return (
    <section
      className="hero"
      ref={containerRef}
      aria-label="Hero slider — Cambridge English Qualifications and Teaching Knowledge Test"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Grid Background */}
      <div className="hero__grid" ref={gridRef} aria-hidden="true" />

      {/* Slide Track */}
      <div className="hero__track" aria-live="polite" aria-atomic="true">
        {SLIDES.map((slide, i) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            slideRef={setSlideRef(i)}
            contentRef={setContentRef(i)}
            imageRef={setImageRef(i)}
            isActive={i === activeIndex}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="hero__controls" role="group" aria-label="Slider controls">
        {/* Progress dots */}
        <div className="hero__progress" role="tablist" aria-label="Slide indicators">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to slide ${i + 1}: ${slide.id === 'cambridge' ? 'Cambridge English Qualifications' : 'Teaching Knowledge Test'}`}
              className={`hero__progress-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => handleDotClick(i)}
              id={`hero-dot-${i}`}
            >
              <span
                className="hero__progress-fill"
                ref={setProgressRef(i)}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
