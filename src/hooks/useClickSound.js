import { useEffect } from 'react'

export default function useClickSound() {
  useEffect(() => {
    let ctx = null

    function getCtx() {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
      return ctx
    }

    async function playClick() {
      try {
        const ac = getCtx()

        // Resume context if suspended (browser autoplay policy)
        if (ac.state === 'suspended') await ac.resume()

        // Short sine burst — soft "tick"
        const osc = ac.createOscillator()
        const gain = ac.createGain()

        osc.connect(gain)
        gain.connect(ac.destination)

        osc.type = 'sine'
        osc.frequency.setValueAtTime(1400, ac.currentTime)
        osc.frequency.exponentialRampToValueAtTime(1100, ac.currentTime + 0.025)

        gain.gain.setValueAtTime(0.04, ac.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.03)

        osc.start(ac.currentTime)
        osc.stop(ac.currentTime + 0.03)
      } catch {
        // silently ignore if audio is blocked
      }
    }

    function handleMouseDown(e) {
      const target = e.target.closest('a, button, [role="button"], [data-clicksound]')
      if (target) playClick()
    }

    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [])
}
