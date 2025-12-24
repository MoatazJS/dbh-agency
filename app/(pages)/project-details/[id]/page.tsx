"use client"
import DetailsChallenge from "@/lib/Components/PagesComponents/DetailsComponents/DetailsChallenge";
import DetailsConclusion from "@/lib/Components/PagesComponents/DetailsComponents/DetailsConclusion";
import DetailsHero from "@/lib/Components/PagesComponents/DetailsComponents/DetailsHero";
import DetailsSolution from "@/lib/Components/PagesComponents/DetailsComponents/DetailsSolution";
import DetailsVideo from "@/lib/Components/PagesComponents/DetailsComponents/DetailsVideos";
import { fetchProjectWithId } from "@/lib/Services/ApiServices";
import { ProjectDetails as ProjectDetailsType } from "@/lib/interfaces/interface";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState<ProjectDetailsType | null>(null);

    useEffect(() => {
        const loadProject = async () => {
            if (id) {
                try {
                    const data = await fetchProjectWithId(Number(id));
                    setProject(data);
                } catch (error) {
                    console.error("Failed to fetch project details:", error);
                }
            }
        };
        loadProject();
    }, [id]);

    if (!project) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <>
            <DetailsHero
                title={project.title}
                description={project.description}
                imageSrc={project.images?.[0]?.image_url}
            />
            <DetailsChallenge
                description={project.challenge}
                imageSrc={project.images?.[1]?.image_url}
            />
            <DetailsSolution
                description={project.solution}
                imageSrc={project.images?.[2]?.image_url}
            />
            <DetailsVideo
                videos={project.videos}
            />
            <DetailsConclusion
                description={project.conclusion}
                imageSrc={project.images?.[3]?.image_url}
            />
        </>
    )
}
