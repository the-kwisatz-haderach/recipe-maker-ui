import Container from '@/components/Container/Container'
import LoginForm from './LoginForm'

export default async function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <Container className="flex w-full max-w-lg flex-col justify-center px-6 py-12">
        <LoginForm />
      </Container>
    </div>
  )
}
