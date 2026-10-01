import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from '@tanstack/react-router';
import { useEffect, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { DemoProvider } from '@/components/DemoContext';
import appCss from '../styles.css?url';
import { reportLovableError } from '../lib/lovable-error-reporting';
function NotFoundComponent() { return <div className="min-h-screen flex flex-col items-center justify-center gap-4"><h1 className="text-4xl font-bold">Page not found</h1><Button asChild><Link to="/">Go home</Link></Button></div>; }
function ErrorComponent({ error, reset }: ErrorComponentProps) { const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: 'tanstack_root_error_component' }); }, [error]); return <div className="min-h-screen flex flex-col items-center justify-center gap-4"><h1 className="text-2xl font-bold">This page didn't load</h1><Button onClick={() => { router.invalidate(); reset(); }}>Try again</Button></div>; }
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }], links: [{ rel: 'stylesheet', href: appCss }, { rel: 'preconnect', href: 'https://fonts.googleapis.com' }, { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><DemoProvider><Outlet /></DemoProvider></QueryClientProvider>; }
