"use client"
import DetailsChallenge from "@/lib/Components/PagesComponents/DetailsComponents/DetailsChallenge";
import DetailsConclusion from "@/lib/Components/PagesComponents/DetailsComponents/DetailsConclusion";
import DetailsHero from "@/lib/Components/PagesComponents/DetailsComponents/DetailsHero";
import DetailsSolution from "@/lib/Components/PagesComponents/DetailsComponents/DetailsSolution";
import DetailsVideo from "@/lib/Components/PagesComponents/DetailsComponents/DetailsVideos";
import { fetchProjectWithId } from "@/lib/Services/ApiServices";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
export default function ProjectDetails() {
    const { id } = useParams();

    useEffect(() => {
        fetchProjectWithId(Number(id));
    }, []);
    return (<>
        <DetailsHero />
        <DetailsChallenge />
        <DetailsSolution />
        <DetailsVideo />
        <DetailsConclusion />

    </>)
}