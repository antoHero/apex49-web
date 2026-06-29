import { randomBytes } from "crypto";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function randomString(length: number) {
  return randomBytes(length).toString("hex").toUpperCase().slice(0, length);
}

function formatDateYYMMDD(date: Date) {
  const yy = String(date.getFullYear()).slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yy}${mm}${dd}`;
}

export function generateReference() {
  const prefix = randomString(3);
  const date = formatDateYYMMDD(new Date());
  const suffix = Math.floor(100 + Math.random() * 900);

  return `${prefix}-${date}-${suffix}`;
}

export function generateUnsubscribeToken() {
  return randomBytes(32).toString("hex");
}
