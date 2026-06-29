"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import Link from "next/link";
import { toast } from "sonner";
import emailService from "@/utils/services/email";

const schema = z.object({
    first_name: z.string().min(2, "Your first name is required"),
    last_name: z.string().min(2, "Your last name is required"),
    service: z.string().min(2, "Please select a service you are requesting for"),
    email: z.email("Please enter a valid email address"),
    currency: z.string("Please select your preferred currency"),
    budget: z.string(),
    project_description: z
        .string()
        .min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

type ApiSuccess = {
    success: true;
    message: string;
};

type ApiError = {
    success: false;
    message: string;
    issues?: Partial<Record<keyof FormValues, string[]>>;
};

type ApiResponse = ApiSuccess | ApiError;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        setError,
        clearErrors,
        setValue,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const toPositiveDecimal = (value: string) => {
        const sanitized = value.replace(/[^\d.]/g, "");

        const [integer, ...decimal] = sanitized.split(".");
        return decimal.length ? `${integer}.${decimal.join("")}` : integer;
    };

    const onSubmit = async (data: FormValues) => {
        clearErrors();

        try {
            const res = await fetch("/api/request-quote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result: ApiResponse = await res.json();

            if (!result.success) {
                if (result.issues) {
                    for (const [field, messages] of Object.entries(result.issues)) {
                        if (!messages?.length) continue;

                        setError(field as keyof FormValues, {
                            type: "server",
                            message: messages[0],
                        });
                    }
                }

                toast.error("Error", {
                    description: result.message,
                });

                return;
            }

            toast.success("Success", {
                description: result.message,
            });

            reset();
        } catch {
            toast.error("Network error", {
                description: "Please check your connection and try again.",
            });
        }
    };
    return (
        <section className="mx-auto mt-[55px] flex min-h-[1054px] w-full max-w-[1440px] flex-col items-stretch bg-white lg:flex-row">
            {/* Left Column: Image */}
            <div className="flex h-full w-full items-center justify-center p-4 lg:w-[720px] lg:p-0">
                <div className="ml-0 h-[600px] w-full overflow-hidden rounded-[6.4px] lg:ml-4 lg:h-[1048px] lg:w-[704px]">
                    <img
                        src="/images/contact-bg.png"
                        alt="Contact Visual"
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-[720px] lg:px-[30px] lg:py-0">
                <div className="mx-auto flex w-full max-w-[608px] flex-col gap-[49px]">
                    {/* Heading */}
                    <div className="flex flex-col leading-tight uppercase">
                        <h1 className="font-adamina text-[60px] leading-[100px] text-[#111111]">
                            Let&apos;s Get
                        </h1>
                        <h1 className="font-satoshi text-[60px] leading-[100px] font-normal text-[#111111]">
                            in Touch
                        </h1>
                    </div>

                    {/* Form */}
                    <form
                        className="flex flex-col gap-[30px]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col gap-[30px]">
                            {/* Name Field */}
                            <div className="flex flex-col gap-2">
                                <div className="flex w-full flex-col gap-2 md:flex-row">
                                    <div className="w-full md:w-1/2">
                                        <label className="font-satoshi text-[15.88px] font-light text-[#111111]">
                                            First Name
                                        </label>
                                        <input
                                            {...register("first_name", { required: true })}
                                            type="text"
                                            placeholder="First name"
                                            className="font-satoshi h-[56px] w-full flex-1 rounded-[6.4px] border border-[#E4E4E4] px-[20.19px] py-[17px] text-[15.88px] font-light text-black transition-colors outline-none placeholder:text-[#999999] focus:border-[#111111]"
                                        />

                                        {errors.first_name && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.first_name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <label className="font-satoshi text-[15.88px] font-light text-[#111111]">
                                            Last Name
                                        </label>
                                        <input
                                            {...register("last_name", { required: true })}
                                            type="text"
                                            placeholder="Last name"
                                            className="font-satoshi h-[56px] w-full flex-1 rounded-[6.4px] border border-[#E4E4E4] px-[20.19px] py-[17px] text-[15.88px] font-light text-black transition-colors outline-none placeholder:text-[#999999] focus:border-[#111111]"
                                        />
                                        {errors.last_name && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.last_name.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="font-satoshi text-[15.88px] font-light text-[#111111]">
                                    Email Address
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Your email"
                                    className="font-satoshi h-[56px] w-full rounded-[6.4px] border border-[#E4E4E4] px-[20.19px] py-[17px] text-[15.88px] font-light text-black transition-colors outline-none placeholder:text-[#999999] focus:border-[#111111]"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Interest Field */}
                            <div className="flex flex-col gap-2">
                                <label className="font-satoshi text-[15.88px] font-light text-[#111111]">
                                    I am Interested In
                                </label>
                                <div className="relative">
                                    <select
                                        {...register("service", { required: true })}
                                        className="font-satoshi h-[56px] w-full appearance-none rounded-[6.4px] border border-[#E4E4E4] bg-white px-[20.19px] py-[17px] text-[15.88px] font-light text-[#999999] text-black transition-colors outline-none focus:border-[#111111]"
                                    >
                                        <option value="">Select Your Service</option>
                                        <option value="web design">Web Design</option>
                                        <option value="branding">Branding</option>
                                        <option value="web development">Web Development</option>
                                    </select>
                                    <div className="pointer-events-none absolute top-1/2 right-[20px] -translate-y-1/2">
                                        <svg
                                            width="12"
                                            height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 1L6 6L11 1"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                {errors.service && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.service.message}
                                    </p>
                                )}
                            </div>

                            {/* Budget Field */}
                            <div className="flex flex-col gap-2">
                                <label className="font-satoshi text-[15.88px] font-light text-[#111111]">
                                    What is Your Budget?
                                </label>
                                <div className="flex w-full flex-col gap-2 md:flex-row">
                                    <div className="w-full md:w-3/4">
                                        <input
                                            {...register("budget", { required: true })}
                                            onChange={(e) => {
                                                const value = toPositiveDecimal(e.target.value);

                                                setValue("budget", value, {
                                                    shouldValidate: true,
                                                    shouldDirty: true,
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                const allowedKeys = [
                                                    "Backspace",
                                                    "Delete",
                                                    "ArrowLeft",
                                                    "ArrowRight",
                                                    "Tab",
                                                    ".",
                                                ];

                                                if (
                                                    !allowedKeys.includes(e.key) &&
                                                    !/^\d$/.test(e.key)
                                                ) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            onPaste={(e) => {
                                                e.preventDefault();

                                                const value = toPositiveDecimal(
                                                    e.clipboardData.getData("text"),
                                                );

                                                setValue("budget", value, {
                                                    shouldValidate: true,
                                                    shouldDirty: true,
                                                });
                                            }}
                                            type="text"
                                            placeholder="Your Budget"
                                            className="font-satoshi h-[56px] w-full flex-[2] rounded-[6.4px] border border-[#E4E4E4] px-[20.19px] py-[17px] text-[15.88px] font-light text-black transition-colors outline-none placeholder:text-[#999999] focus:border-[#111111]"
                                        />
                                        {errors.budget && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.budget.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="relative w-full md:w-1/4 flex-1">
                                        <select
                                            {...register("currency", { required: true })}
                                            className="font-satoshi h-[56px] w-full appearance-none rounded-[6.4px] border border-[#E4E4E4] bg-white px-[20.19px] py-[17px] text-[15.88px] font-light text-[#999999] transition-colors outline-none focus:border-[#111111]"
                                        >
                                            <option value="">Select</option>
                                            <option value="NGN">NGN</option>
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                        </select>
                                        <div className="pointer-events-none absolute top-1/2 right-[20px] -translate-y-1/2">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1L6 6L11 1"
                                                    stroke="black"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.currency && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.currency.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-2">
                                <label className="font-satoshi text-[15.88px] font-light text-[#111111]">
                                    Tell Us More About Your Project
                                </label>
                                <textarea
                                    {...register("project_description", { required: true })}
                                    placeholder="Tell Us About Your Project"
                                    className="font-satoshi h-[180px] w-full resize-none rounded-[6.4px] border border-[#E4E4E4] px-[20.19px] py-[17px] text-[15.88px] font-light text-black transition-colors outline-none placeholder:text-[#999999] focus:border-[#111111]"
                                ></textarea>
                                {errors.project_description && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.project_description.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-start">
                            <span className="text-xs text-[#0B1B3D]">
                                By proceeding, you agree to our{" "}
                                <Link href="#" className="underline">
                                    Terms & Conditions
                                </Link>
                                {", "}
                                <Link href="#" className="underline">
                                    Privacy Policy
                                </Link>{" "}
                                and our{" "}
                                <Link href="#" className="underline">
                                    Refund Policy
                                </Link>
                            </span>
                        </div>
                        {/* Submit Button */}
                        <Button
                            disabled={isSubmitting}
                            className="font-satoshi flex h-[56px] w-full cursor-pointer items-center justify-center rounded-[1600px] bg-[#111111] text-[15.75px] font-light text-white transition-colors hover:bg-black"
                        >
                            {isSubmitting ? (
                                <>
                                    <Spinner data-icon="inline-start" />
                                    Sending...
                                </>
                            ) : (
                                "Send message"
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
