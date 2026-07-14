import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <nav className="flex items-center justify-center border-b border-zinc-200 px-8 py-4">
        <span className="font-poppins text-xl font-bold">Dan Goss</span>
      </nav>
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-8">
        <Image
          src="/dan-pfp.png"
          alt="Dan Goss"
          width={1254}
          height={1254}
          className="h-48 w-48 rounded-full object-cover"
          priority
        />
        <p className="text-lg"><strong>Agenda:</strong> fuck shit up</p>
      </main>
    </div>
  );
}
