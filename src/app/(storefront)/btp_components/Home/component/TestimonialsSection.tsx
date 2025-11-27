export default function TestimonialsSection({ title, testimonies, isFullWidth }: any) {

  return (
    <section className={`py-16 sm:py-24 ${isFullWidth === 'No' ? 'custom_container' : ''}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {/* What Our International Clients Say */}
          {title}
        </h2>
        <div className="mt-12 relative">
          {testimonies.map((testimony: any, index: number) => (
            <div key={index} className="p-8 bg-card rounded-lg shadow-sm border border-border">
              <p className="text-lg italic text-foreground">
                {/* "Building my family home in Togo from Canada seemed impossible until I found
                TogoBuild. Their professionalism, constant updates, and transparency were
                exceptional. They delivered beyond my expectations." */}
                "{testimony.message}"
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBZBR0a4n3C1dVuOhbWFviw7KtVX-98UkTg2lQcHuhVPJ1K6W5gTTBGe1sralQQelRN8kz0qGROYd4lZkqtBGJf_XwxqdbNF4ZKUjoX5YlIJS2Mu85drI_xJ6xC4Sgc_beSCmLSJuqxaysxNiNrKPstNBhWU39csCF2hbVrjpdwsVbvOKJIjRQyejpVSNfjFv__6PFWWb_jBMUnU_CoIhKSt8IR2weVfcY5FVJ9loyY8hSuoyhwH8I9mN7T1by-rd1v7D6JrngDBDw"
                  alt="Jean-Pierre D."
                />
                <div>
                  {/* <p className="font-bold text-foreground">Jean-Pierre D.</p> */}
                  <p className="font-bold text-foreground">{testimony.author}</p>
                  {/* <p className="text-sm text-text-muted">Investor, Montreal, Canada</p> */}
                  <p className="text-sm text-text-muted">{testimony.adress}</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="p-8 bg-card rounded-lg shadow-sm border border-border">
                        <p className="text-lg italic text-foreground">
                            "Building my family home in Togo from Canada seemed impossible until I found TogoBuild. Their professionalism, constant updates, and transparency were exceptional. They delivered beyond my expectations."
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <img
                                className="h-14 w-14 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBZBR0a4n3C1dVuOhbWFviw7KtVX-98UkTg2lQcHuhVPJ1K6W5gTTBGe1sralQQelRN8kz0qGROYd4lZkqtBGJf_XwxqdbNF4ZKUjoX5YlIJS2Mu85drI_xJ6xC4Sgc_beSCmLSJuqxaysxNiNrKPstNBhWU39csCF2hbVrjpdwsVbvOKJIjRQyejpVSNfjFv__6PFWWb_jBMUnU_CoIhKSt8IR2weVfcY5FVJ9loyY8hSuoyhwH8I9mN7T1by-rd1v7D6JrngDBDw"
                                alt="Jean-Pierre D."
                            />
                            <div>
                                <p className="font-bold text-foreground">Jean-Pierre D.</p>
                                <p className="text-sm text-text-muted">Investor, Montreal, Canada</p>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  )
}
