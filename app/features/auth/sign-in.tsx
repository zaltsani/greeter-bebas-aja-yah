import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { supabaseClient } from "~/lib/supabase-client";

export function LoginFeature() {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);

        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email"));
        const password = String(formData.get("password"));

        const { error } = await supabaseClient.auth.signInWithPassword({ email, password });

        if (error) {
            setErrorMsg(error.message);
            setIsLoading(false);
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#fdf8f6] font-['Plus_Jakarta_Sans'] overflow-hidden">
            <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-[#c0e8ff]/20 rounded-full blur-3xl -z-10" />
            <div className="fixed -top-12 -right-12 w-48 h-48 bg-[#ffad94]/10 rounded-full blur-3xl -z-10" />
            <div className="w-full max-w-md mb-10 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 mb-8 group cursor-pointer">

                    <div className="absolute inset-0 bg-[#ffad94]/30 rounded-full blur-3xl group-hover:bg-[#ffad94]/50 transition-colors duration-500" />
                    <div className="relative z-10 flex items-center justify-center w-full h-full bg-white rounded-[2.5rem] shadow-sm overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110 group-hover:shadow-xl">
                        <img
                            src="/hello.jpeg"
                            alt="Hearth Welcome"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 z-20 bg-[#cef2cc] text-[#3e5c3f] p-3 rounded-2xl shadow-lg transform rotate-12 flex items-center justify-center transition-all duration-500 ease-spring group-hover:z-30 group-hover:scale-125 group-hover:rotate-0 group-hover:-translate-x-2 group-hover:-translate-y-2">
                        <span className="material-symbols-outlined text-sm group-hover:fill-1 transition-all">
                            Hello Everyone!
                        </span>
                    </div>
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-[#343230] mb-3 transition-colors group-hover:text-[#a04223]">
                    Welcome Back
                </h1>
                <p className="text-[#615e5c] max-w-xs mx-auto leading-relaxed text-balance">
                    The hearth is warm and waiting for your return. Let's settle in.
                </p>
            </div>

            <main className="w-full max-w-md space-y-6">
                <div className="bg-[#f8f2f0] rounded-[2.5rem] p-8 md:p-10 border border-white/40 shadow-sm">
                    <form onSubmit={handleEmailLogin} className="space-y-5">
                        {errorMsg && (
                            <div className="p-3 text-sm bg-red-100 text-red-600 rounded-xl animate-in fade-in slide-in-from-top-1 duration-300">
                                {errorMsg}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#615e5c] ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Input
                                    className="h-14 bg-white border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#a04223]/10"
                                    name="email"
                                    placeholder="hello@hearth.com"
                                    type="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="relative">
                                <Input
                                    className="h-14 bg-white border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#a04223]/10"
                                    name="password"
                                    placeholder="••••••••"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            disabled={isLoading}
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#a04223] to-[#ff9878] text-white h-14 rounded-full shadow-lg shadow-[#a04223]/20 hover:shadow-[#a04223]/30 active:scale-[0.98] transition-all font-bold text-base mt-2"
                        >
                            {isLoading ? "Signing In..." : "Sign In"}
                        </Button>
                    </form>

                    <div className="relative my-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#b5b1af]/20"></div>
                        </div>
                        <span className="relative bg-[#f8f2f0] px-4 text-[10px] font-bold text-[#b5b1af] uppercase tracking-[0.2em]">
                            Or continue with
                        </span>
                    </div>
                </div>

                <p className="text-center text-[#615e5c] text-sm font-medium">
                    New to the Hearth? This features comming soon, stay tune!
                    <Link to="/register" className="text-[#a04223] font-bold hover:underline ml-1">Create an account</Link>
                </p>
            </main>
        </div>
    );
}