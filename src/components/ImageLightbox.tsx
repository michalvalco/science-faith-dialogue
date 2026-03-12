import { useState, useEffect, useRef, useCallback, useId } from 'react';

interface ImageLightboxProps {
  children: React.ReactNode;
  alt?: string;
}

export default function ImageLightbox({ children, alt }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  const dialogId = useId();

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-zoom-in w-full text-left"
        aria-label={alt ? `Zväčšiť: ${alt}` : 'Zväčšiť obrázok'}
        aria-expanded={open}
        aria-controls={open ? dialogId : undefined}
      >
        {children}
      </button>

      {open && (
        <div
          id={dialogId}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Zväčšený obrázok'}
        >
          <div
            className="relative w-[80vw] max-h-[80vh] overflow-auto bg-white rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-sandstone-200/80 hover:bg-sandstone-300 text-ink-600 transition-colors text-lg font-sans"
              aria-label="Zavrieť"
            >
              ✕
            </button>
            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
