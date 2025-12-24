import { z } from "zod";
import { contactFormSchema } from "@/lib/validations/contactSchema";

// --- Contact / Validation ---
export type ContactFormData = z.infer<typeof contactFormSchema>;

// --- Context ---
export type AnimationContextType = {
    isAnimating: boolean;
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};

// --- Details Components ---
export interface DetailsConclusionProps {
    title?: string;
    description?: string;
    imageSrc?: string;
}

export interface DetailsChallengeProps {
    title?: string;
    description?: string;
    imageSrc?: string;
}

export interface DetailsSolutionProps {
    title?: string;
    description?: string;
    imageSrc?: string;
}

export interface DetailsHeroProps {
    title?: string;
    description?: string;
    imageSrc?: string;
}

// --- Home Components ---
export interface WorkItem {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
}
