import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

export function Figure({ src, caption, pending }: { src?: string; caption: string; pending: string }) {
  return (
    <figure className="group card overflow-hidden p-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
        {src ? (
          <Image src={src} alt={caption} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-navy-800 via-navy-700 to-teal-600 text-white">
            <div className="grid-bg absolute inset-0 opacity-60" />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <ImageIcon className="opacity-80" />
              <span className="px-4 text-xs uppercase tracking-widest opacity-80">{pending}</span>
            </div>
          </div>
        )}
      </div>
      <figcaption className="px-3 py-3 text-sm font-medium text-navy-700 dark:text-slate-300">{caption}</figcaption>
    </figure>
  );
}
