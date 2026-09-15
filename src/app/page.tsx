import type { Metadata } from "next";import { Hero } from "@/componentes/secciones/Hero";import { SobreMi } from "@/componentes/secciones/SobreMi";import { Resenas } from "@/componentes/secciones/Resenas";import { Planes } from "@/componentes/secciones/Planes";import { Contacto } from "@/componentes/secciones/Contacto";
export const metadata:Metadata={alternates:{canonical:"/"}};
export default function PaginaInicio(){return <main><Hero/><SobreMi/><Resenas/><Planes/><Contacto/></main>}
