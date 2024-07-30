'use client'

import { useForm } from 'react-hook-form'

type Inputs = {
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  function onSubmit(data: Inputs) {
    console.log(data)
    reset()
  }

  function handleCancel() {
    reset()
  }

  // console.log(watch('email'))
  // console.log(watch('message'))

  return (
    <div className="container mx-auto my-8 max-w-lg">
      <h1 className="text-center text-2xl font-extralight">Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div>
              <label htmlFor="email" className="text-sm">
                Email address
              </label>
              <input
                {...register('email', { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="focus:ring-design-dark ring-design-dark mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
              {errors.email && <span>This field is required</span>}
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
                className="focus:ring-design-dark ring-design-dark mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
              {errors.message && <span>This field is required</span>}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="ring-design-dark ring-offset-design-dark text-sm focus:outline-none focus:ring-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-design hover:bg-design/80 focus-visible:outline-design rounded-md px-3 py-2 text-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
