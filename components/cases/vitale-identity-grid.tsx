import { Manrope, Sora } from "next/font/google";
import Image from "next/image";
import vitaleLogo from "@/public/images/cases/vitale/logo.png";
import vitaleIdentityApplication from "@/public/images/cases/vitale/identity-application.png";
import type { VitaleCase } from "@/lib/cases/vitale";

const sora = Sora({ subsets: ["latin"], display: "swap", preload: false });
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

type Props = {
  identity: VitaleCase["identity"];
  applicationAlt: string;
};

export default function VitaleIdentityGrid({
  identity,
  applicationAlt,
}: Props) {
  return (
    <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-12">
      <figure className="min-w-0 self-start overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-6 lg:col-start-4 lg:row-start-1">
        <Image
          src={vitaleLogo}
          alt="Vitale"
          sizes="(min-width: 1024px) 35vw, 90vw"
          className="block h-auto w-full"
        />
      </figure>

      {identity.slice(2).map((item, index) => (
        <dl
          key={item.value}
          className={`relative flex min-h-60 min-w-0 flex-col justify-between overflow-hidden rounded-2xl p-6 lg:col-span-3 lg:row-start-1 lg:min-h-0 lg:p-4 xl:p-6 ${index === 0 ? "bg-[#f2f3f5] lg:col-start-1" : "bg-[#1D1D1F] text-white lg:col-start-10"}`}
        >
          <dt
            className={`text-2xl font-semibold tracking-tight ${index === 0 ? sora.className : manrope.className}`}
          >
            {item.value}
          </dt>
          <dd
            aria-hidden="true"
            className={`my-4 text-8xl leading-none tracking-[-0.08em] lg:my-2 lg:text-5xl xl:text-7xl ${index === 0 ? sora.className : manrope.className}`}
          >
            Aa
          </dd>
          <dd className="text-xs leading-relaxed opacity-70">
            {item.label} · {item.detail}
          </dd>
          <div
            aria-hidden="true"
            className="mt-5 flex h-2 shrink-0 overflow-hidden rounded-full lg:mt-3"
          >
            <span className="w-1/2 bg-[#0125DB]" />
            <span className="w-1/4 bg-[#A9F703]" />
            <span
              className={`w-1/4 ${index === 0 ? "bg-[#1D1D1F]" : "bg-white"}`}
            />
          </div>
        </dl>
      ))}

      <figure className="min-w-0 self-start overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-9 lg:col-start-1 lg:row-start-2">
        <Image
          src={vitaleIdentityApplication}
          alt={applicationAlt}
          sizes="(min-width: 1024px) 52.5vw, 90vw"
          className="block h-auto w-full"
        />
      </figure>

      <div className="grid min-w-0 gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-3 lg:col-start-10 lg:row-start-2 lg:grid-cols-1">
        {identity.slice(0, 2).map((item, index) => (
          <dl
            key={item.value}
            className={`flex min-h-40 min-w-0 flex-col justify-between gap-3 rounded-2xl p-6 lg:min-h-0 lg:p-4 xl:p-6 ${index === 0 ? "bg-[#0125DB] text-white" : "bg-[#A9F703] text-[#141415]"}`}
          >
            <dt className="text-sm">{item.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight lg:text-[clamp(1.125rem,1.8vw,2rem)]">
              {item.value}
            </dd>
            <dd className="text-xs leading-relaxed opacity-75">
              {item.detail}
            </dd>
          </dl>
        ))}
      </div>
    </div>
  );
}
