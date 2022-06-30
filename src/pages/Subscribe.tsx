import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../components/Loading";
import { Logo } from "../components/Logo";

import { useCreateSubscriberMutation } from "../graphql/generated";

import codeMockupImg from "../assets/code-mockup.png";
import { GithubLogo } from "phosphor-react";
import { useAuth } from "../hooks/useAuth";

export function Subscribe() {
  const navigate = useNavigate();
  const { loadingAuth, subscribeWithGithub } = useAuth();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  async function handleSubscribeWithGithub() {
    await subscribeWithGithub();

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto flex-col md:flex-row md:mt-20 md:gap-10">
        <div className="max-w-[640px] flex flex-col items-center md:items-start px-6 md:px-0">
          <Logo />

          <h1 className="mt-8 text-3xl md:text-[2.5rem] leading-tight text-center md:text-left">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-center md:text-left text-sm md:text-base">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-full mt-8 md:w-auto md:mt-0">
          <strong className="text-lg md:text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              value={name}
              className="bg-gray-900 rounded border border-transparent px-5 h-14 focus:outline-none focus:border-green-300 focus:invalid:border-red-500 focus:invalid:text-red-500"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              value={email}
              className="bg-gray-900 rounded border border-transparent px-5 h-14 focus:outline-none focus:border-green-300 focus:invalid:border-red-500 focus:invalid:text-red-500"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading || !name || !email}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:hover:bg-green-500 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? <Loading /> : "Garantir minha vaga"}
            </button>

            <button
              onClick={handleSubscribeWithGithub}
              disabled={loadingAuth}
              className="p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900"
              type="button"
            >
              {loadingAuth ? (
                <Loading />
              ) : (
                <>
                  <GithubLogo size={24} />
                  Entrar com Github
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      <img src={codeMockupImg} className="mt-4 md:mt-10" />
    </div>
  );
}
