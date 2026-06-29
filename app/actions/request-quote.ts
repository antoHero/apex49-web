'use server';

import { z } from 'zod';
import { supabase } from '@/utils/supabase';

const contactSchema = z.object({
  first_name: z.string().min(2, 'Your first name is required'),
  last_name: z.string().min(2, 'Your last name is required'),
  service: z.string().min(2, 'Please select a service you are requesting for'),
  email: z.email('Please enter a valid email address'),
  currency: z.string('Please select a currency'),
  budget: z.string(),
  project_description: z
    .string()
    .min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitQuote(data: ContactFormData) {
  const validated = contactSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase
    .from('contact_messages')
    .insert({
      first_name: validated.data.first_name,
      last_name: validated.data.last_name,
      email: validated.data.email,
      service: validated.data.service,
      project_description: validated.data.project_description,
      currency: validated.data.currency,
      budget: validated.data.budget,
    })
    .select();

  if (error) {
    console.error(error);

    return {
      success: false,
      message: 'Failed to submit message',
    };
  }

  return {
    success: true,
    message: 'Message sent successfully',
  };
}