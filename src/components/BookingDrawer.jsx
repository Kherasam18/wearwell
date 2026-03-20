import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Calendar, Clock, X, CheckCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

const garmentOptions = ['Sherwani', 'Tuxedo', 'Jodhpuri', 'Formal Suit', 'Indo Western', 'Kurta', 'Shirt-Pant', 'Other']

function StepDots({ currentStep }) {
  return (
    <div className="flex items-center gap-2" aria-label={`Step ${currentStep} of 3`}>
      {[1, 2, 3].map((s) => (
        <span
          key={s}
          className={
            s === currentStep
              ? 'h-2 w-2 rounded-full bg-[#C9A84C]'
              : 'h-2 w-2 rounded-full bg-[#FDFBF7]/25'
          }
        />
      ))}
    </div>
  )
}

function Field({ label, type = 'text', value, onChange, placeholder, inputMode }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? label}
        inputMode={inputMode}
        className="w-full bg-transparent px-0 py-3 text-[#FDFBF7] placeholder:text-[#FDFBF7]/55 outline-none border-b border-[#C9A84C]/70 focus:border-[#C9A84C] focus:border-b-2 transition-[border-color,border-width] duration-200"
      />
    </label>
  )
}

export default function BookingDrawer({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [garment, setGarment] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const canContinueStep1 = useMemo(() => {
    return name.trim().length > 1 && phone.trim().length >= 8
  }, [name, phone])

  const canContinueStep2 = useMemo(() => {
    return garment.trim().length > 0
  }, [garment])

  const canConfirm = useMemo(() => {
    return date.trim().length > 0 && time.trim().length > 0
  }, [date, time])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) return
    setCurrentStep(1)
    setName('')
    setPhone('')
    setGarment('')
    setDate('')
    setTime('')
    setIsSubmitting(false)
    setIsSuccess(false)
  }, [isOpen])

  const handleConfirmBooking = async () => {
    if (!canConfirm) return

    setIsSubmitting(true)

    const templateParams = {
      to_email: 'samkhr1806@gmail.com',
      user_name: name,
      user_phone: phone,
      selected_garment: garment,
      visit_date: date,
      visit_time: time,
    }

    try {
      await emailjs.send('service_98xl0yn', 'template_0ymowqy', templateParams, 'coKTmO_cL7LbKuQMK')
      setIsSuccess(true)
      setTimeout(() => {
        onClose?.()
      }, 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send booking details. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={
        isOpen
          ? 'fixed inset-0 z-[80]'
          : 'pointer-events-none fixed inset-0 z-[80]'
      }
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className={
          isOpen
            ? 'absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 opacity-100'
            : 'absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 opacity-0'
        }
        aria-label="Close booking drawer"
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={
          'fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#3A2B24] text-[#FDFBF7] shadow-2xl transition-transform duration-300 ease-in-out ' +
          (isOpen ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 pt-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs tracking-[0.22em] uppercase text-[#FDFBF7]/70">Step {currentStep} of 3</p>
              <StepDots currentStep={currentStep} />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#FDFBF7]/15 bg-[#FDFBF7]/5 transition hover:bg-[#FDFBF7]/10"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-[#FDFBF7]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6 pt-8">
            <div className="relative">
              <div
                className={
                  'transition-all duration-300 ease-in-out ' +
                  (currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none absolute inset-0')
                }
              >
                <h2 className="font-[var(--font-serif)] text-2xl text-[#FFFFFF]/70 leading-tight md:text-3xl">
                  Who do we have the pleasure of hosting?
                </h2>

                <div className="mt-8 space-y-5">
                  <Field label="Name" value={name} onChange={setName} placeholder="Name" />
                  <Field
                    label="Phone Number"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Phone Number"
                    inputMode="tel"
                  />
                </div>

                <div className="mt-10 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!canContinueStep1}
                    className={
                      'inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition ' +
                      (canContinueStep1
                        ? 'text-[#C9A84C] hover:text-[#FDFBF7]'
                        : 'text-[#FDFBF7]/30 cursor-not-allowed')
                    }
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div
                className={
                  'transition-all duration-300 ease-in-out ' +
                  (currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none absolute inset-0')
                }
              >
                <h2 className="font-[var(--font-serif)] text-2xl text-[#FFFFFF]/70 leading-tight md:text-3xl">
                  What are we crafting for you?
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                  {garmentOptions.map((opt) => {
                    const selected = garment === opt
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setGarment(opt)}
                        className={
                          'rounded-full border px-6 py-2 text-sm font-semibold transition ' +
                          (selected
                            ? 'border-[#FDFBF7] bg-[#FDFBF7] text-[#3A2B24]'
                            : 'border-[#C9A84C]/70 bg-transparent text-[#FDFBF7] hover:border-[#C9A84C]')
                        }
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-sm font-semibold text-[#FDFBF7]/70 transition hover:text-[#FDFBF7]"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={!canContinueStep2}
                    className={
                      'inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition ' +
                      (canContinueStep2
                        ? 'text-[#C9A84C] hover:text-[#FDFBF7]'
                        : 'text-[#FDFBF7]/30 cursor-not-allowed')
                    }
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div
                className={
                  'transition-all duration-300 ease-in-out ' +
                  (currentStep === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none absolute inset-0')
                }
              >
                <h2 className="font-[var(--font-serif)] text-2xl text-[#FFFFFF]/70 leading-tight md:text-3xl">When shall we expect you?</h2>

                <div className="mt-8 space-y-5">
                  <div className="relative">
                    <Field label="Date" type="date" value={date} onChange={setDate} placeholder="Date" />
                    <Calendar
                      className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FDFBF7]/50"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="relative">
                    <Field label="Time" type="time" value={time} onChange={setTime} placeholder="Time" />
                    <Clock
                      className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#FDFBF7]/50"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-sm font-semibold text-[#FDFBF7]/70 transition hover:text-[#FDFBF7]"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    disabled={!canConfirm || isSubmitting || isSuccess}
                    className={
                      'w-full max-w-[240px] rounded-full px-6 py-3 text-sm font-semibold transition flex items-center justify-center gap-2 ' +
                      (isSuccess
                        ? 'bg-emerald-700 text-white'
                        : canConfirm && !isSubmitting
                          ? 'bg-[#C9A84C] text-[#3A2B24] hover:scale-[1.02]'
                          : 'bg-[#C9A84C]/40 text-[#3A2B24]/70 cursor-not-allowed')
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-current" />
                        <span>Sending Details...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-current" />
                        <span>Booking Confirmed!</span>
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
