import { NextResponse } from 'next/server';
import { createSwaggerSpec } from 'next-swagger-doc';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const spec = createSwaggerSpec({
  apiFolder: 'app/api',
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Référentiel GreenIT',
      version: '1.0.0',
      description:
        'API pour accéder aux fiches du référentiel GreenIT. Cette API permet de récupérer la liste des fiches publiées, les détails d\'une fiche spécifique, et la liste des langues disponibles.',
      contact: {
        name: 'Collectif Green IT (CNUMR)',
        url: 'https://github.com/cnumr',
      },
    },
    servers: [
      {
        url: process.env.SITE_URL || 'http://localhost:3000',
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

export async function GET() {
  return NextResponse.json(spec, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600',
    },
  });
}
