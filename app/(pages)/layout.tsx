'use client'

import { Button } from "@/ui/button";
import { Command, Search, User, List, Settings, LogOut, Heart, BellRing, Megaphone, Gift, Bell, Leaf, LayoutDashboard, Menu, X, Filter, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ReactNode, useState, useEffect, useCallback, useRef } from "react";
import LangButton from "@/components/LangButton";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { Avatar, AvatarImage, AvatarFallback} from "@/ui/avatar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

export default function PagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const t = useTranslations('Home');
  const f = useTranslations('Home.footer');
  const [scrollY, setScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [headerSearchTerm, setHeaderSearchTerm] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHomePage = pathname === '/pt' || pathname === '/en' || pathname === '/es';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.key === 'q' && (event.metaKey || event.ctrlKey)) || (event.key === 'Q' && event.ctrlKey)) {
      event.preventDefault();
      setIsSearchOpen(prev => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const headerOpacity = Math.min(scrollY / 100, 0.9);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleHeaderSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeaderSearchTerm(e.target.value);
  };

  if (!isHomePage) {
    return <div className="flex flex-col min-h-screen">{children}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header 
        className="bg-zinc-900 z-50 sticky top-0 shadow-lg text-white p-4 transition-all duration-300"
        style={{ backgroundColor: `rgba(24, 24, 27, ${headerOpacity})` }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl font-black text-purple-500 hover:scale-105 transition-transform ease-linear duration-75">
            <Image src="/logo.png" alt="Kandaraku" width={32} height={32} className="w-8 h-8 mr-2" />
            <h1 className="hidden sm:inline">{t('title')}</h1>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-md border border-input bg-background/30 px-3 py-2 relative">
              <label htmlFor="search">
                <Search className="w-4 h-4" />
              </label>
              <input
                id="search"
                className="bg-transparent focus:outline-none w-full min-w-[20ch]"
                type="text"
                placeholder={t('pesquisarAnime')}
                value={headerSearchTerm}
                onChange={handleHeaderSearchChange}
              />
              <span className="flex items-center gap-1 font-bold text-nowrap">
                <Command className="w-3 h-3" /> + Q
              </span>
              {headerSearchTerm && (
                <div className="absolute left-0 right-0 top-full mt-3 bg-zinc-800 rounded-md shadow-lg">
                  <div className="p-2">
                    <p className="text-sm text-zinc-400">Resultados para "{headerSearchTerm}"</p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-2 p-2 hover:bg-zinc-700 rounded-md">
                        <Image src="https://cdn.myanimelist.net/images/anime/1874/121869.jpg" alt="Anime" width={40} height={40} className="rounded-md" />
                        <div>
                          <p className="font-semibold">Kage no Jitsuryokusha ni Naritakute! 2nd Season</p>
                          <p className="text-sm text-zinc-400">Ação, Fantasia</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-zinc-700 rounded-md">
                        <Image src="https://cdn.myanimelist.net/images/anime/1874/121869.jpg" alt="Anime" width={40} height={40} className="rounded-md" />
                        <div>
                          <p className="font-semibold">Kage no Jitsuryokusha ni Naritakute!</p>
                          <p className="text-sm text-zinc-400">Ação, Fantasia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <LangButton />
              <NotificationPopover t={t} />
              <UserPopover t={t} />
            </div>

            <div className="md:hidden flex items-center gap-2">
              <LangButton />
              <Button variant="outline" className="p-2" onClick={() => setIsSearchOpen(true)}>
                <Search className="w-5 h-5" />
              </Button>
              <NotificationPopover t={t} />
              <UserPopover t={t} />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto p-5">
          {children}
        </div>
      </main>
      <footer className="bg-black">
        <div className="container mx-auto px-8 py-6 flex gap-5 flex-wrap">
          <Footer f={f} t={t} />
        </div>
        <div className="text-zinc-500 text-center mb-8 text-sm">
          <p className="font-bold">{t('copyright')} © <span className="font-bold">{t('copyright2')}</span></p>
          <small className="font-bold">{t('direitos')}</small>
        </div>
      </footer>
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div ref={searchRef} className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <form className="flex items-center gap-2 flex-grow">
                <Search className="w-6 h-6 text-zinc-400" />
                <input
                  autoFocus
                  className="bg-transparent focus:outline-none text-white text-xl w-full"
                  type="text"
                  placeholder={t('pesquisarAnime')}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </form>
              <Button className="ml-2 border border-zinc-800">
                <SlidersHorizontal className="w-5 h-5" />
              </Button>
            </div>
            <button
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            {searchTerm && (
              <div className="mt-4">
                <p className="text-sm text-zinc-400 mb-2">Resultados para "{searchTerm}"</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 hover:bg-zinc-800 rounded-md cursor-pointer">
                    <Image src="https://cdn.myanimelist.net/images/anime/1812/134736.jpg" alt="Anime" width={80} height={120} className="rounded-md object-cover" />
                    <div>
                      <p className="font-semibold text-lg">Oshi no Ko</p>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <Avatar className="w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar do usuário" />
                          <AvatarFallback>KA</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-zinc-400 underline underline-offset-4">Kandaraku</span>
                      </div>
                      <p className="text-sm text-zinc-400">Ação, Romance, Sobrenatural</p>
                      <p className="text-sm text-zinc-400">Temporadas: 2 Seasons</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 hover:bg-zinc-800 rounded-md cursor-pointer">
                    <Image src="https://cdn.myanimelist.net/images/anime/1874/121869.jpg" alt="Anime" width={80} height={120} className="rounded-md object-cover" />
                    <div>
                      <p className="font-semibold text-lg">Kage no Jitsuryokusha ni Naritakute!</p>
                      <div className="flex items-center gap-2 mt-1 mb-2">
                        <Avatar className="w-5 h-5">
                          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar do usuário" />
                          <AvatarFallback>KA</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-zinc-400 underline underline-offset-4">Kandaraku</span>
                      </div>
                      <p className="text-sm text-zinc-400">Ação, Fantasia</p>
                      <p className="text-sm text-zinc-400">Temporadas: 1 Season</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function NotificationPopover({ t }: { t: (key: string) => string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="p-2 md:px-3 md:w-auto w-full justify-center md:justify-start">
          <Bell className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">{t('notificacoes')}</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Leaf className="w-5 h-5 text-green-500 mt-1" />
            <div>
              <p className="font-semibold text-zinc-100">{t('atualizacao')}</p>
              <p className="text-sm text-zinc-400">{t('atualizacaoDesc')}</p>
            </div>
          </div>
        </div>
        <Button variant="link" className="w-full mt-3 text-purple-400 hover:text-purple-300">
          {t('verTodasNotificacoes')}
        </Button>
      </PopoverContent>
    </Popover>
  );
}

function UserPopover({ t }: { t: (key: string) => string }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="p-2 md:px-3 md:w-auto w-full justify-center md:justify-start">
          <User className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar do usuário" />
              <AvatarFallback>KA</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-zinc-100">Kandaraku</p>
              <p className="text-sm text-zinc-400">kandaraku@example.com</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
              <List className="mr-2 h-4 w-4" />
              {t('minhaslista')}
            </Button>
            <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
              <Heart className="mr-2 h-4 w-4" />
              {t('favoritos')}
            </Button>
            <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="justify-start text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">
              <Settings className="mr-2 h-4 w-4" />
              {t('configuracoes')}
            </Button>
            <Button variant="ghost" className="justify-start text-red-400 hover:text-red-300 hover:bg-zinc-800">
              <LogOut className="mr-2 h-4 w-4" />
              {t('sair')}
            </Button>
          </nav>
        </div>
      </PopoverContent>
    </Popover>
  );
}
