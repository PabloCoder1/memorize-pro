import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Definimos quais rotas são protegidas (o dashboard e suas sub-rotas)
const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (isDashboardRoute(request)) {
    await auth.protect(); // Se não estiver logado e tentar acessar /dashboard, ele redireciona
  }
});

export const config = {
  matcher: [
    // Ignora arquivos internos do Next.js e arquivos estáticos
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Sempre executa para rotas de API
    '/(api|trpc)(.*)',
  ],
};