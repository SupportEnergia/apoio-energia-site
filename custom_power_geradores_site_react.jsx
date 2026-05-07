export default function CustomPowerSite() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-green-400">Support Energia Automação e Refrigeração</h1>
            <p className="text-sm text-gray-400">Energia • Automação • Refrigeração</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-green-400">Home</a>
            <a href="#sobre" className="hover:text-green-400">Sobre</a>
            <a href="#servicos" className="hover:text-green-400">Serviços</a>
            <a href="#diferenciais" className="hover:text-green-400">Diferenciais</a>
            <a href="#contato" className="hover:text-green-400">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-green-950"
      >
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Soluções Profissionais em Energia, Automação e Refrigeração
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Especialistas em manutenção, operação, automação industrial, refrigeração e sistemas de energia no Amazonas.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5592999999999"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-2xl shadow-xl transition"
            >
              Solicitar Orçamento
            </a>

            <a
              href="#contato"
              className="border border-green-500 hover:bg-green-500 hover:text-black px-8 py-4 rounded-2xl font-semibold transition"
            >
              Atendimento Emergencial
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-green-400">Quem Somos</h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              A Support Energia Automação e Refrigeração atua com foco em confiabilidade operacional,
              manutenção especializada e suporte técnico para sistemas de geração de energia.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Com mais de 13 anos de experiência em sistemas isolados da região amazônica,
              entregamos soluções completas para empresas que precisam de alta disponibilidade energética.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Nossa atuação inclui operação de usinas, manutenção preventiva,
              corretiva, automação, sincronismo e retrofit de sistemas.
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-10 border border-gray-700 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6 text-green-400">Atuação Técnica</h4>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Operação de Usinas</li>
              <li>✔ Sistemas Isolados</li>
              <li>✔ Motores Diesel</li>
              <li>✔ Painéis Elétricos</li>
              <li>✔ Automação Industrial</li>
              <li>✔ Energia Solar</li>
              <li>✔ Atendimento Emergencial</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-400 mb-4">Nossos Serviços</h3>
            <p className="text-gray-400 text-lg">
              Soluções completas para geração e confiabilidade energética.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Manutenção em Geradores',
                items: ['Preventiva', 'Corretiva', 'Preditiva', 'Overhaul'],
              },
              {
                title: 'Automação',
                items: ['QTA', 'QTR', 'Sincronismo', 'Retrofit'],
              },
              {
                title: 'Sistemas Elétricos',
                items: ['Comissionamento', 'Banco de Carga', 'Proteções', 'Parametrização'],
              },
              {
                title: 'Energia Solar',
                items: ['Instalação', 'Limpeza Técnica', 'Monitoramento', 'Manutenção'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-green-500 transition shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-6 text-green-400">{service.title}</h4>

                <ul className="space-y-3 text-gray-300">
                  {service.items.map((item, i) => (
                    <li key={i}>✔ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-400 mb-4">Diferenciais</h3>
            <p className="text-gray-400 text-lg">
              Experiência prática e foco em disponibilidade operacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              '13+ anos de experiência',
              'Atendimento emergencial',
              'Atuação em áreas remotas',
              'Equipe técnica especializada',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8 text-center shadow-xl"
              >
                <h4 className="text-2xl font-bold text-green-400 mb-4">0{index + 1}</h4>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-green-400 mb-10">Segmentos Atendidos</h3>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-300">
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">Indústrias</div>
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">Hospitais</div>
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">Mineração</div>
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">Fazendas</div>
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">Telecomunicações</div>
            <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">Usinas Termelétricas</div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold text-green-400 mb-4">Entre em Contato</h3>
            <p className="text-gray-400 text-lg">
              Solicite um orçamento ou suporte técnico especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-black border border-gray-800 rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-6 text-green-400">Informações</h4>

              <div className="space-y-4 text-gray-300 text-lg">
                <p>📍 Manaus - Amazonas</p>
                <p>📞 (92) 99999-9999</p>
                <p>✉ contato@supportenergia.com.br</p>
                <p>🕒 Atendimento 24h</p>
              </div>
            </div>

            <form className="bg-black border border-gray-800 rounded-3xl p-8 shadow-xl space-y-5">
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Empresa"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Telefone"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              />

              <textarea
                rows="5"
                placeholder="Descreva sua necessidade"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-2xl transition"
              >
                Solicitar Atendimento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 px-6 text-center text-gray-500">
        <h4 className="text-xl font-bold text-green-400 mb-2">Support Energia Automação e Refrigeração</h4>

        <p>
          Soluções em geração de energia, automação industrial e manutenção especializada.
        </p>

        <p className="mt-4 text-sm">
          © 2026 Support Energia Automação e Refrigeração. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}
