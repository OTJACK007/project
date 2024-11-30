'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8">
        <Image
          src="https://static.wixstatic.com/media/c67dd6_5170cd115f2c4fe089db15aceb4b63d6~mv2.png"
          alt="Burok JOB Logo"
          width={32}
          height={32}
          className="rounded-md object-contain"
          priority
        />
      </div>
      <span className="font-semibold text-xl">Burok JOB</span>
    </div>
  );
}