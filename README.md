# Portfolio — Ignacio Cabrera

Portfolio personal construido con Next.js 16, React 19, TypeScript, Tailwind CSS 4 y Framer Motion. Usa App Router y genera una exportación estática, compatible con Vercel y GitHub Pages.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Para validar la versión de producción:

```bash
npm run lint
npm run build
```

El build estático queda en `out/`. En GitHub Actions se aplica automáticamente el prefijo `/cablabs`; en Vercel se sirve desde la raíz.

## Formulario de contacto

El formulario usa [Web3Forms](https://web3forms.com/) directamente desde el navegador, por lo que no necesita un backend propio. Crea `.env.local` en la raíz:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key
```

La clave se incorpora durante el build. Configura la misma variable en Vercel antes de desplegar. Si no existe, el formulario continúa visible y muestra un mensaje controlado al intentar enviarlo.

## Editar contenido

- Proyectos, tecnologías y enlaces sociales: `src/data/portfolio.ts`.
- Textos de las secciones: `src/components/sections/`.
- Estilos, responsive y mockups: `src/app/globals.css`.
- Metadata SEO: `src/app/layout.tsx`.
- Traducciones ES/EN: `src/data/i18n.ts`.
- Redes profesionales y de Flow: `src/data/socials.ts`.
- Serie Camino a Doomsday: `src/data/marvelVideos.ts`.

Los mockups de proyectos están hechos con HTML y CSS en `src/components/ui/ProjectVisual.tsx`; no contienen capturas ni información privada. Para usar screenshots reales, agrégalos a `public/projects/` y reemplaza cada `ProjectVisual` por `next/image`, indicando siempre `width`, `height` y un texto alternativo descriptivo.

LinkedIn y GitHub se configuran en `src/data/socials.ts`.

La ruta `/flow` muestra los reels de Marvel mediante embeds oficiales de Instagram con carga diferida. Sus títulos, fechas y URLs se administran en `src/data/marvelVideos.ts`.

## Despliegue en Vercel

Importa el repositorio en Vercel, conserva los comandos detectados por Next.js y agrega la variable del formulario. No se necesitan servicios adicionales ni cambios en la configuración.
