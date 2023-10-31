import HeaderFlex from "@/components/Header";
import MySwiper from "@/components/MySwiper";
import Section from "@/components/Section";

export default function Page() {
  return (
    <div className="bg-zinc-50">
      <HeaderFlex
        imagePath="agro"
        subtitle="Cadastre-se abaixo para entrar na lista VIP e receber ofertas das nossas lonas em primeira mão no whatsapp."
      >
        Escolha as <span className="text-my">lonas com mais qualidade do mercado</span>, escolha <br /> Lona Preta
      </HeaderFlex>
      <main>
        <img src="./images/bg2.png" alt="" className="w-full sm:mb-12 hidden sm:block" />
        <img src="./images/bg4.png" alt="" className="w-full block sm:hidden mt-8" />
        <Section>
          <MySwiper />
        </Section>
        <Section>
          <h2 className="text-3xl sm:text-4xl text-my2 font-bold">Sobre a Lona Preta</h2>
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-zinc-600">Há mais de 10 anos no mercado, a empresa RB Comercio de Plástico, visando também oferecer o melhor produto, com o melhor preço em um canal digital, criou esse e-commerce, o lonapreta.com.</p>
            <p className="text-zinc-600">Aqui você encontra toda gama de produtos que há mais de 10 anos vem apoiando os diversos mercados consumidores, sempre entregando de forma rápida e personalizada o seu pedido</p>
            <p className="text-zinc-600">Melhor custo benefício, melhor forma de pagamento e pedido entregue em sua casa ou empresa.</p>
            <p className="text-zinc-600">A RB Indústria e Comércio de Plástico têm responsabilidade com o meio ambiente, reaproveitando 100% da matéria prima da linha de produção de lonas plástica.</p>
            <p className="text-zinc-600">Entrega para todo Brasil!</p>
            <p className="text-zinc-600">Parcele em 12X em todos os cartões.</p>
            <ul className="flex flex-col gap-1 list-disc ps-5 text-zinc-600">
              <li><p>Telefone (41) 3248-2150, ou</p></li>
              <li><p>WhatsApp (41) 99259-3033</p></li>
              <li><p>E-mail para vendas@lonapreta.com</p></li>
            </ul>
            <p className="text-zinc-600">Horário de Atendimento: <br />Segunda a Sexta das 08:00h às 17:30h.</p>
          </div>
        </Section>
      </main>
      <footer className="py-12 flex justify-center w-full bg-my2 mt-12">
        <div className="w-full max-w-7xl">
          <p className="text-white text-sm">© 2018 | RB COMÉRCIO DE PLÁSTICOS | Todos os Direitos Reservados</p>
        </div>
      </footer>
    </div>
  )
}
