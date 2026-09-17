import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
  description: "Warm, evidence-based therapy for adults in Santa Monica and across California, with a focus on anxiety, trauma, panic, burnout, and perfectionism.",
  keywords: ["Santa Monica therapist", "Santa Monica psychologist", "anxiety therapy Santa Monica", "trauma therapy Santa Monica", "EMDR Santa Monica", "burnout therapist California"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}