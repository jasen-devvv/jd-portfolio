import ParticlesLink from "@/components/ParticlesLink";

export default function Home() {
  return (
    <main>
      <ParticlesLink />
      <div className="z-50 relative mt-32">
        <h1 className="text-black-1 text-center">JANA</h1>
        <p className="text-center mb-5 lato-regular opacity-70">Full Stack Developer | Figma Designer</p>
        <img src="/img/logo.png" alt="Logo" className="rounded-full object-cover max-w-full mx-auto h-auto w-50 shadow-black-sb" />
      </div>
    </main>
  );
}
