"use client"

import { useEffect, useRef } from 'react'

export default function GiveLivelyWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const gl = document.createElement('script')
    gl.src =
      'https://secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250'
    gl.referrerPolicy = 'strict-origin-when-cross-origin'
    scriptRef.current = gl
    document.head.appendChild(gl)
    
    return () => {
      try {
        const glModal = document.getElementById('gl-widget-modal')
        if (glModal?.parentNode) {
          const parent = glModal.parentNode
          if (parent.contains && parent.contains(glModal)) {
            parent.removeChild(glModal)
          }
        }
      } catch (e) {
        // Silently fail - element may have already been removed
      }

      try {
        const glElements = document.querySelectorAll(
          '.gl-modal, .gl-simple-donation-widget'
        )
        glElements.forEach((element) => {
          if (element && element.parentNode && element !== containerRef.current) {
            try {
              const parent = element.parentNode
              if (parent.contains && parent.contains(element)) {
                parent.removeChild(element)
              }
            } catch (e) {
              // Silently fail - element may have already been removed or moved
            }
          }
        })
      } catch (e) {
        // Silently fail
      }
      
      if (scriptRef.current?.parentNode) {
        try {
          const parent = scriptRef.current.parentNode
          if (parent.contains && parent.contains(scriptRef.current)) {
            parent.removeChild(scriptRef.current)
          }
        } catch (e) {
          // Silently fail - script may have already been removed
        }
      }
      
      if (containerRef.current) {
        try {
          containerRef.current.innerHTML = ''
        } catch (e) {
          // Silently fail
        }
      }
    }
  }, [])
  
  return (
    <div 
      ref={containerRef}
      id="give-lively-widget" 
      className="gl-simple-donation-widget w-full min-h-[600px] bg-white"
    >
    </div>
  )
}

