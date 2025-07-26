import { H1, P, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <H1 className="text-6xl font-bold text-gray-900 mb-4">404</H1>
        <P variant="lead" className="text-xl text-gray-600 mb-8">
          Page not found
        </P>
        <P className="text-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </P>
        <Button href="/" variant="primary" size="large">
          Go back home
        </Button>
      </div>
    </div>
  )
} 