import DetailsChallenge from "@/lib/Components/PagesComponents/DetailsComponents/DetailsChallenge";
import DetailsConclusion from "@/lib/Components/PagesComponents/DetailsComponents/DetailsConclusion";
import DetailsHero from "@/lib/Components/PagesComponents/DetailsComponents/DetailsHero";
import DetailsResult from "@/lib/Components/PagesComponents/DetailsComponents/DetailsResult";
import DetailsSolution from "@/lib/Components/PagesComponents/DetailsComponents/DetailsSolution";
import DetailsVideo from "@/lib/Components/PagesComponents/DetailsComponents/DetailsVideos";
import React from "react";

export default function ProjectDetails() {

    return (<>
        <DetailsHero />
        <DetailsChallenge />
        <DetailsSolution />
        <DetailsVideo />
        <DetailsResult />
        <DetailsConclusion />

    </>)
}