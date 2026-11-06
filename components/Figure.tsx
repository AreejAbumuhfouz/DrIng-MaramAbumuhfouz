import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

export function Figure({ src, caption, pending, contain = false, tall = false }: { src?: string; caption: string; pending: string; contain?: boolean; tall?: boolean }) {
  return (
    <figure className="group card overflow-hidden p-2">
      <div className={`relative overflow-hidden rounded-[1.25rem] ${tall ? 'aspect-[4/5]' : 'aspect-[16/10]'} ${contain ? 'bg-white' : ''}`}>
        {src ? (
          <Image src={src} alt={caption} fill sizes="(min-width:1024px) 50vw, 100vw"
            className={`${contain ? 'object-contain' : 'object-cover'} transition duration-700 group-hover:scale-[1.03]`} />
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
