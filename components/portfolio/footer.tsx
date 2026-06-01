import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/marzanul.islam", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:marzanul.islam@yahoo.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-6 px-6">
      {/* Side Elements - Fixed */}
      <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </Link>
        ))}
        <div className="w-px h-24 bg-muted-foreground" />
      </div>

      <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-6">
        <Link
          href="mailto:marzanul.islam@yahoo.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs [writing-mode:vertical-rl]"
        >
          hello@example.com
        </Link>
        <div className="w-px h-24 bg-muted-foreground" />
      </div>

      {/* Mobile Social Links */}
      <div className="flex lg:hidden justify-center gap-6 mb-6">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </Link>
        ))}
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <Link
          href="https://github.com"
          className="text-muted-foreground hover:text-primary transition-colors text-xs font-mono"
        >
          <p>Designed & Built by Marzan</p>
        </Link>
      </div>
    </footer>
  )
}
