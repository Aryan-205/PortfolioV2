const ContactMe = () => {
  // Replace these placeholders with your actual links and email
  const CONTACT_INFO = [
    { name: 'EMAIL', href: 'mailto:aaryann5002@gmail.com' },
    { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/aryan-bola-a95913316/' },
    { name: 'GITHUB', href: 'https://github.com/Aryan-205' },
    { name: 'TWITTER', href: 'https://x.com/BolaJi_69' },
  ];

  return (
    <section className="h-screen bg-white text-black px-24 py-8 font-sans flex">
      <div className="h-full flex flex-col justify-between ">
        <p className="text-4xl font-bold text-white w-fit px-4 py-2 tracking-tighter bg-black">Contact Me</p>
        {/* List of Contact Links */}
        <ul className="flex flex-col justify-center gap-8 items-start h-full w-full">
          {CONTACT_INFO.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  // Custom border style for the thick underline effect
                  borderBottom: '4px solid black',
                  lineHeight: 1.1, // Adjust line-height to keep the underline close to the text
                }}
              >
                <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-black hover:text-white hover:bg-black transition duration-300">
                  {item.name}
                </p>
              </a>
            </li>
          ))}
        </ul>

        {/* Primary Call to Action Button */}
        <div className="">
          <a
            href={CONTACT_INFO.find(i => i.name === 'EMAIL').href}
            className="inline-block px-8 py-4 border-4 border-black bg-black text-white 
                       text-xl md:text-2xl font-extrabold uppercase tracking-wider 
                       hover:bg-gray-800 transition duration-300"
          >
            SEND MAIL
          </a>
        </div>
      </div>
      <div className="flex justify-center tracking-tight text-xl md:text-6xl flex-col items-end gap-8 font-light w-full">
        <p>
          Got a project in mind?
        </p>
        <p>Want to talk tech stack?</p>
        <p>My inbox is always open.</p>
        <p className="w-[40rem] text-end">Find me across the web, or drop me a direct line.</p>
      </div>
      
    </section>
  );
};

export default ContactMe;