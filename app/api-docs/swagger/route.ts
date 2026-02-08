import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Force dynamic rendering pour que getBaseUrl() soit évalué au runtime
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
  try {
    // Charger la spec OpenAPI générée au build time
    const specPath = path.join(process.cwd(), 'public/api-data/openapi-spec.json');
    const specContent = fs.readFileSync(specPath, 'utf-8');
    const baseSpec = JSON.parse(specContent);

    // Ajouter l'URL du serveur dynamiquement
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
  } catch (error) {
    console.error('Error loading OpenAPI spec:', error);

    // Si le fichier n'existe pas, retourner une spec minimale avec un message d'erreur
    return NextResponse.json(
      {
        openapi: '3.0.0',
        info: {
          title: 'API Référentiel GreenIT',
          version: '1.0.0',
          description:
            'Erreur: La spec OpenAPI n\'a pas été générée. Exécutez "node scripts/generate-openapi-spec.mjs" au build time.',
        },
        paths: {},
      },
      { status: 500 }
    );
  }
}
