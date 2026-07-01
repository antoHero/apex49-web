import type { LucideIcon } from "lucide-react";
import { z } from "zod";

export type BreadcrumbItem = {
  title: string;
  href: string;
};

export type NavItem = {
  title: string;
  href: string;
  icon?: LucideIcon | null;
  isActive?: boolean;
};

export interface EmailJob {
  type: "contact";
  email: string;
  first_name: string;
  last_name: string;
  service: string;
  project_description: string;
  currency: string;
  budget: string;
}

export const QuoteConfirmationDataSchema = z.object({
  last_name: z.string(),
  reference: z.string(),
  service: z.string(),
  createdAt: z.string(), // serialize dates to string before enqueueing — queue payload is JSON
  unsubscribe_token: z.string(),
  currency: z.string(),
  project_description: z.string().nullable().optional(),
  budget: z.string().nullable().optional(),
});

export const EmailJobSchema = z.discriminatedUnion("type", [
  z.object({
    id: z.uuid(),
    type: z.literal("quote_confirmation"),
    to: z.email(),
    data: QuoteConfirmationDataSchema,
    createdAt: z.number(),
  }),
  // add more z.object({ type: z.literal("...") }) entries as you add email types
]);

export type EmailJobType = z.infer<typeof EmailJobSchema>;
