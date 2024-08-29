'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { sendContactForm } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'

const emailRegex = /\S+@\S+\.\S+/

const formSchema = z.object({
  name: z.string().min(1, 'Name is requred').max(50, 'Name must be at most 50 characters'),
  // email regex
  email: z
    .string()
    .min(1, 'Email is required')
    .email()
    .refine((email) => emailRegex.test(email), 'Invalid email address'),
  message: z.string().min(1, 'Message is required').max(500, 'Message must be at most 500 characters'),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  function resetForm() {
    form.reset()
  }

  const onCancel = () => {
    console.log('cancel')
    form.reset()
  }

  const onSubmit = async (data: { name: string; email: string; message: string }) => {
    const name = data.name
    const email = data.email
    const message = data.message

    try {
      setIsDisabled(true)
      await sendContactForm({
        name,
        email,
        message,
      })
      toast({
        title: 'Thanks for emailing me!',
        description: 'I will get back to you soon',
      })
      resetForm()
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        toast({
          title: 'Error',
          description: error.message,
        })
      }
    } finally {
      setIsDisabled(false)
    }

    setIsLoading(false)
  }

  // console.log(watch('email'))
  // console.log(watch('message'))

  return (
    <div className="container mx-auto my-8 max-w-lg">
      <h1 className="text-center text-2xl font-light">Contact Form</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4">
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button type="button" variant="ghost" size="sm" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              size="sm"
              className="focus-visible:ring-offset-2"
              disabled={isDisabled}
            >
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
