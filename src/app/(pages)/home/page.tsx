import ParticlesLink from "@/components/ParticlesLink";

export default function Home() {
  return (
    <main className="h-svh">
      <ParticlesLink />
      <div className="z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-black-1 text-center">JANA</h1>
        <p className="text-center mb-5" style={{ 'fontFamily': 'var(--font-lato-regular);' }}>Full Stack Developer | Figma Designer</p>
        <img src="/img/logo.png" alt="Logo" className="rounded-full object-cover max-w-full h-auto w-50 shadow-black-sb" />
      </div>        
    </main>
  );
}
