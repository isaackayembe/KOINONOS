'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: 'blue' | 'green'
}

export function NetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const BLUE = '120, 160, 255'
    const GREEN = '90, 230, 180'

    function resize() {
      if (!canvas || !ctx) return
      const parent = canvas.parentElement
      width = parent?.clientWidth ?? window.innerWidth
      height = parent?.clientHeight ?? window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(70, Math.floor((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.8,
        hue: Math.random() > 0.5 ? 'blue' : 'green',
      }))
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!prefersReduced) {
          n.x += n.vx
          n.y += n.vy
        }
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.hypot(dx, dy)
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.4
            ctx.strokeStyle = `rgba(${BLUE}, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        const color = n.hue === 'blue' ? BLUE : GREEN
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, 0.9)`
        ctx.shadowBlur = 12
        ctx.shadowColor = `rgba(${color}, 0.8)`
        ctx.fill()
        ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
