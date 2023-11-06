export default function Page() {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-zinc-100">
            <main>
                <div className="flex flex-col justify-center items-center gap-2 text-center px-4 sm:px-0">
                    <img src="./images/logo.png" alt="" className="w-40 mb-2" />
                    <h1 className="text-2xl font-bold">Obrigado por se cadastrar!</h1>
                    <p className="text-lg">Entraremos em contato o mais rápido possível via Whatsapp.</p>
                </div>
            </main>
        </div>
    )
}