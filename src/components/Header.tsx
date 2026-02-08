import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#vision', label: 'ビジョン' },
        { href: '#process', label: 'サービス' },
        { href: '#business', label: '事業内容' },
        { href: '#history', label: '沿革' },
        { href: '#company', label: '会社概要' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center space-x-3 group">
                        <div className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-navy-700' : 'text-white'
                            }`}>
                            <span className="block text-sm font-medium opacity-80">株式会社</span>
                            <span className="block text-2xl">清水商會</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:opacity-100 ${isScrolled
                                        ? 'text-gray-700 hover:text-navy-600'
                                        : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="tel:03-5732-2800"
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${isScrolled
                                    ? 'bg-navy-600 text-white hover:bg-navy-700'
                                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                                }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span>03-5732-2800</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <nav className="px-4 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-700 hover:text-navy-600 font-medium py-2"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:03-5732-2800"
                        className="flex items-center justify-center space-x-2 bg-navy-600 text-white px-4 py-3 rounded-lg font-medium mt-4"
                    >
                        <Phone className="w-4 h-4" />
                        <span>03-5732-2800</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
