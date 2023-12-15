import Container from '@/components/Container/Container'
import SignupForm from './SignupForm'

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      <Container className="flex w-full max-w-lg flex-col justify-center px-6 py-12">
        <SignupForm />
      </Container>
    </div>
  )
}
