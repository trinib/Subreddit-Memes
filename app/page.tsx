import MemeImage from './MemeImage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative w-full max-w-lg aspect-square">
        <MemeImage />
      </div>
    </main>
  )
}