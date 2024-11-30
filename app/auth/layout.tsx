'use client';

import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left side with image - hidden on mobile */}
      <div className="hidden md:flex md:w-1/2 bg-primary relative">
        <Image
          src="https://picsum.photos/1000/1000"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm">
          <div className="flex flex-col justify-center h-full p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Bienvenue sur Burok JOB
            </h2>
            <p className="text-lg">
              Gérez vos missions et votre planning en toute simplicité
            </p>
          </div>
        </div>
      </div>

      {/* Right side with auth form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-[400px] space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image
              src="https://static.wixstatic.com/media/c67dd6_5170cd115f2c4fe089db15aceb4b63d6~mv2.png"
              alt="Burok JOB Logo"
              width={48}
              height={48}
              className="rounded-md"
              priority
            />
            <h1 className="text-2xl font-semibold tracking-tight">Burok JOB</h1>
            <p className="text-sm text-muted-foreground">
              Gérez vos missions et votre planning
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}