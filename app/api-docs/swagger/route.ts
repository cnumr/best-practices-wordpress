import { NextResponse } from 'next/server';
import { createSwaggerSpec } from 'next-swagger-doc';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

function getBaseUrl(): string {
  // Vercel définit automatiquement VERCEL_URL avec le domaine du déploiement
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback sur SITE_URL si défini, sinon localhost pour le dev
  return process.env.SITE_URL || 'http://localhost:3000';
}

export async function GET() {
  const baseUrl = getBaseUrl();

  const spec = createSwaggerSpec({
    apiFolder: 'app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Référentiel GreenIT',
        version: '1.0.0',
        description:
          "API pour accéder aux fiches du référentiel GreenIT. Cette API permet de récupérer la liste des fiches publiées, les détails d'une fiche spécifique, et la liste des langues disponibles.",
        contact: {
          name: 'Collectif Green IT (CNUMR)',
          url: 'https://github.com/cnumr',
        },
      },
      servers: [
        {
          url: baseUrl,
          description: 'Serveur API',
        },
      ],
      tags: [
        {
          name: 'Fiches',
          description: 'Endpoints pour gérer les fiches du référentiel',
        },
        {
          name: 'Languages',
          description: 'Endpoints pour les langues disponibles',
        },
      ],
    },
  });

  return NextResponse.json(spec, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600',
    },
  });
}
