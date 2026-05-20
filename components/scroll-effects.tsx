'use client'

import { useEffect } from 'react'

export function ScrollEffects() {
  useEffect(() => {
    // Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    // Sticky three-panel scroll story
    const tracks = document.querySelectorAll('.sticky-three-track')
    const handlers: Array<() => void> = []

    tracks.forEach((track) => {
      const stage = track.querySelector('.sticky-three-stage')
      if (!stage) return
      const textPanels = stage.querySelectorAll('.s3-panel')
      const vizPanels = stage.querySelectorAll('.s3-viz-panel')
      const progress = stage.querySelectorAll('.s3-progress span')
      const total = textPanels.length

      function tick() {
        const rect = (track as HTMLElement).getBoundingClientRect()
        const vh = window.innerHeight || 800
        const scrolled = -rect.top
        const max = rect.height - vh
        const p = Math.max(0, Math.min(1, scrolled / max))
        let idx = Math.min(total - 1, Math.floor(p * total))
        if (p >= 0.99) idx = total - 1
        textPanels.forEach((el, i) => el.classList.toggle('is-active', i === idx))
        vizPanels.forEach((el, i) => el.classList.toggle('is-active', i === idx))
        progress.forEach((el, i) => el.classList.toggle('is-active', i === idx))
      }

      tick()
      window.addEventListener('scroll', tick, { passive: true })
      window.addEventListener('resize', tick)
      handlers.push(tick)
    })

    return () => {
      io.disconnect()
      handlers.forEach((tick) => {
        window.removeEventListener('scroll', tick)
        window.removeEventListener('resize', tick)
      })
    }
  }, [])

  return null
}
