import { Mail, Award } from "lucide-react";

type IconProps = { size?: number; className?: string };

export function IconMail({ size = 16, className }: IconProps) {
  return <Mail size={size} className={className} />;
}

export function IconAward({ size = 16, className }: IconProps) {
  return <Award size={size} className={className} />;
}

function SocialSvg({
  children,
  size = 16,
  className,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconGithub({ size = 16, className }: IconProps) {
  return (
    <SocialSvg size={size} className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 13 2.48a13.38 13.38 0 0 0-7 0C2.27.65 1.09 1 1.09 1A5.07 5.07 0 0 0 0 4.77 5.44 5.44 0 0 0 1.5 8.61c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </SocialSvg>
  );
}

export function IconLinkedin({ size = 16, className }: IconProps) {
  return (
    <SocialSvg size={size} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </SocialSvg>
  );
}

export function IconInstagram({ size = 16, className }: IconProps) {
  return (
    <SocialSvg size={size} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </SocialSvg>
  );
}

export function IconFacebook({ size = 16, className }: IconProps) {
  return (
    <SocialSvg size={size} className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </SocialSvg>
  );
}
