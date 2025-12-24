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
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}
export type ProjectsResponse = Project[];
// Project Details
export interface ProjectImage {
    id: number;
    project_id: number;
    image_url: string;
}

export interface ProjectVideo {
    id: number;
    project_id: number;
    title: string;
    video_url: string;
}
export interface ProjectDetails {
    id: number;
    title: string;
    description: string;
    challenge: string;
    solution: string;
    conclusion: string;
    result: string;
    is_main: boolean;
    images: ProjectImage[];
    videos: ProjectVideo[];
}

export interface DetailsVideosProps {
    videos?: ProjectVideo[];
}