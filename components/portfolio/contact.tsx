import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">04. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          I&apos;m currently looking for new opportunities. Whether you have a question or just 
          want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <Link
          href="mailto:hello@example.com"
          className="inline-block rounded border border-primary px-8 py-5 text-primary hover:bg-primary/10 transition-all duration-300"
        >
          Say Hello
        </Link>
      </div>
    </section>
  )
}
