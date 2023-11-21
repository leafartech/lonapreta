import HeaderFlex from "@/components/Header";
import HeroFlex from "@/components/HeroFlex";
import MySwiper from "@/components/MySwiper2";
import Section from "@/components/Section";

export default function Page() {
    return (
        <div className="bg-zinc-50">
            <HeaderFlex
                imagePath="agro"
                subtitle="Cadastre-se abaixo para fazer um orçamento e receber ofertas das nossas lonas em primeira mão no whatsapp."
            >
                Garanta <span className="text-my">a melhor opção de lona</span> para você que trabalha no agronegócio e <span className="text-my">preza por qualidade</span>
            </HeaderFlex>
            <main>
                <img src="./images/bg2.png" alt="" className="w-full sm:mb-12 hidden sm:block" />
                <img src="./images/bg4.png" alt="" className="w-full block sm:hidden mt-8" />
                <Section className="pt-6 sm:pt-0">
                    <HeroFlex
                        imagePath="bg3"
                        title="A melhor opção para a sua silagem"
                        cta="Quero fazer um orçamento"
                        href="#cadastro"
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-zinc-600">Nossas lonas são feitas com <strong>tecnologia avançada</strong> que oferece maior proteção e uma vedação na cobertura do silo.</p>
                            <p className="text-zinc-600">Desenvolvidas com <strong>tecnologia de última geração</strong>, garantem a <strong>preservação dos nutrientes</strong> da ração e vegetação por meio da <strong>proteção contra raios UV</strong>.</p>
                        </div>
                    </HeroFlex>
                    <div className="py-6 sm:py-0"></div>
                    <HeroFlex
                        imagePath="bg6"
                        title="Como a silagem funciona?"
                        cta="Quero fazer um orçamento"
                        href="#cadastro"
                        reverse={true}
                    >
                        <div className="flex flex-col gap-3">
                            <p className="text-zinc-600">A silagem é um processo de <strong>conservação de forragem</strong> utilizada na produção de alimentos para animais, como gado e outros ruminantes.</p>
                            <p className="text-zinc-600">Ela envolve a colheita de plantas forrageiras e sua transformação em um material <strong>fermentado e armazenado</strong> para alimentação posterior.</p>
                            <p className="text-zinc-600">A <strong>superfície da silagem é vedada</strong> através de <strong>lonas</strong> para impedir a entrada de ar, vedação essa que é <strong>crucial para o sucesso</strong> da fermentação.</p>
                        </div>
                    </HeroFlex>
                </Section>
                <Section className="pt-6 sm:pt-24">
                    <h2 className="text-3xl sm:text-4xl text-my2 font-bold">Outras especialidades das nossas lonas</h2>
                    <MySwiper />
                    <div className="flex">
                        <a href="#cadastro" className="w-full py-3 mt-2 sm:-mt-4 rounded-md bg-my sm:w-60 text-white font-semibold text-sm sm:text-base text-center">Quero fazer um orçamento</a>
                    </div>
                </Section>
                <Section className="pt-6 sm:pt-12">
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
                <div className="w-full max-w-7xl px-4 sm:px-0">
                    <p className="text-white text-sm">© 2018 | RB COMÉRCIO DE PLÁSTICOS | Todos os Direitos Reservados</p>
                </div>
            </footer>
        </div>
    )
}