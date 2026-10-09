import Image from "next/image";

const SRC = "/images/wadhah-belhassen.jpg";
const W = 1200;
const H = 1800;

interface Props { alt: string; name: string; role: string; role2: string; priority?: boolean }

/** Editorial portrait: offset signal-colored frame, soft dark gradient, caption set into the image. */
export function Portrait({ alt, name, role, role2, priority }: Props) {
  return (
    <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden className="absolute -bottom-3 -right-3 top-6 left-6 rounded-3xl border border-signal-bright/35" />
      <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-ink-900 shadow-2xl">
        <Image
          src={SRC}
          alt={alt}
          width={W}
          height={H}
          priority={priority}
          sizes="(min-width: 1024px) 28rem, (min-width: 448px) 28rem, 90vw"
          className="aspect-[4/5] h-auto w-full object-cover object-[50%_16%]"
        />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-xl font-semibold text-white">{name}</p>
          <p className="mt-0.5 text-sm text-slate-200">{role}</p>
          <p className="text-sm text-signal-bright">{role2}</p>
        </figcaption>
      </div>
    </figure>
  );
}
