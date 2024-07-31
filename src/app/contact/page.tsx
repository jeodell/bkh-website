'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { sendContactForm } from '../../lib/contact'

type Inputs = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setIsError] = useState('')

  function showErrorToast() {
    toast.error('Contact form failed to send. Please email us directly at booneuas@gmail.com', {
      position: 'bottom-center',
      autoClose: 10000,
      hideProgressBar: true,
    })
  }

  function showSuccessToast() {
    toast.success('Email sent successfully!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
    })
  }

  const emailRegex = /\S+@\S+\.\S+/

  function checkIfFormIsValid(
    name: string | undefined,
    email: string | undefined,
    message: string | undefined,
  ): boolean {
    if (!name) {
      setError('name', { message: 'This field is required' })
    }
    if (!email) {
      setError('email', { message: 'This field is required' })
    }
    if (email && !emailRegex.test(email)) {
      setError('email', { message: 'Invalid email address' })
    }
    if (!message) {
      setError('message', { message: 'This field is required' })
    }

    if (errors.name || errors.email || errors.message) {
      return false
    }

    return true
  }

  function resetFormFields() {
    reset()
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const name: any = (e.currentTarget.name as any).value
    const email: any = e.currentTarget.email.value
    const message: any = e.currentTarget.message.value

    console.log('name', name)

    const isValidForm = checkIfFormIsValid(name, email, message)

    if (isValidForm) {
      try {
        await sendContactForm({
          name,
          email,
          message,
        })
        resetFormFields()
        showSuccessToast()
      } catch (error) {
        console.error(error)
        if (error instanceof Error) {
          setIsError(error.message)
          showErrorToast()
        }
      }
    }

    setIsLoading(false)
  }

  function handleCancel() {
    reset()
  }

  // console.log(watch('email'))
  // console.log(watch('message'))

  return (
    <div className="container mx-auto my-8 max-w-lg">
      <h1 className="text-center text-2xl font-extralight">Contact Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div>
              <label htmlFor="first-name" className="text-sm">
                Name
              </label>
              <input
                {...register('name', { required: true })}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-design-dark focus:ring-2 focus:ring-inset focus:ring-design-dark sm:text-sm sm:leading-6"
              />
              {errors.name && <span className="text-xs text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-design-dark focus:ring-2 focus:ring-inset focus:ring-design-dark sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-xs text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                {...register('message', { required: true })}
                id="message"
                name="message"
                rows={4}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-design-dark focus:ring-2 focus:ring-inset focus:ring-design-dark sm:text-sm sm:leading-6"
              />
              {errors.message && <span className="text-xs text-red-500">This field is required</span>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm ring-design-dark ring-offset-design-dark focus:outline-none focus:ring-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-design px-3 py-2 text-sm shadow-sm hover:bg-design/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-design"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
