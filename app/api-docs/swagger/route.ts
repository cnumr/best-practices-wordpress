import { NextResponse } from 'next/server';
import { createSwaggerSpec } from 'next-swagger-doc';

// Force dynamic rendering pour que getBaseUrl() soit évalué au runtime
export const dynamic = 'force-dynamic';

// Générer la spec au build time (niveau module) pour que les fichiers source soient scannés
// Sur Vercel serverless, les fichiers .ts ne sont pas disponibles au runtime
const baseSpec = createSwaggerSpec({
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

function getBaseUrl(): string {
  // Vercel définit automatiquement VERCEL_URL avec le domaine du déploiement
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback sur SITE_URL si défini, sinon localhost pour le dev
  return process.env.SITE_URL || 'http://localhost:3000';
}

export async function GET() {
  // Modifier seulement l'URL du serveur au runtime
  const spec = {
    ...baseSpec,
    servers: [
      {
        url: getBaseUrl(),
        description: 'Serveur API',
      },
    ],
  };

  return NextResponse.json(spec, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600',
    },
  });
}
