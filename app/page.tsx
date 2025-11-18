export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-display font-bold mb-6 animation-slide-up">
        Tailwind v3 + Next.js Ready!
      </h1>
      <div className="bg-brand text-foreground px-6 py-4 rounded-xl animation-fade-in">
        Dark/light themes and animations work!
      </div>
    </div>
  );
}
