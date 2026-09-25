import type{Metadata}from"next";import{FlowExperience}from"@/components/flow/FlowExperience";import{SkipLink}from"@/components/layout/SkipLink";
export const metadata:Metadata={title:"Flow — Ignacio Cabrera",description:"Música, contenido, streaming y proyectos creativos de Flow.",openGraph:{title:"Flow — Ignacio Cabrera",description:"Música, contenido, streaming y proyectos creativos de Flow.",type:"website",locale:"es_CL"}};
export default function FlowPage(){return <><SkipLink/><FlowExperience/></>}
