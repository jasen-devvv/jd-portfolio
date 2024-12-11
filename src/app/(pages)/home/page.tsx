import ParticlesLink from "@/components/ParticlesLink";

export default function Home() {
  return (
    <main>
      <ParticlesLink />
      <div className="z-50 relative text-center mt-20">
        <h1 className="text-black-1 font-quicksand text-h4 sm:text-h3 md:text-h2 lg:text-h1">JANA</h1>
        <p className="opacity-70 font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">FULL STACK DEVELOPER | FIGMA DESIGNER</p>
        <img src="/img/logo.png" alt="Logo" className="mt-5 rounded-full object-cover max-w-full mx-auto h-auto w-40 md:w-50 lg:w-60 shadow-black-sb" />
      </div>
    </main>
  );
}
