import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 mt-auto">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-[60px]">
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
                    {/* Logo & Info */}
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <h2 className="text-2xl font-black text-white tracking-wider">PHOENIXDARTS<span className="text-red-600">.</span></h2>
                        <div className="text-sm text-gray-400 space-y-2 font-medium">
                            <p>(주)피닉스다트 | 대표이사: 이승훈</p>
                            <p>서울특별시 구로구 디지털로 26길 111, JNK디지털타워 4층</p>
                            <p>사업자등록번호: 119-81-80735 | 통신판매업신고: 제 2011-서울구로-1011호</p>
                            <p>TEL: 1588-0000 | Email: help@phoenixdarts.com</p>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-bold tracking-wider text-sm mb-1">ABOUT</h3>
                            <Link href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all">회사소개</Link>
                            <Link href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all">프로선수 등록</Link>
                            <Link href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all">대회 규정</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-bold tracking-wider text-sm mb-1">SUPPORT</h3>
                            <Link href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all">고객센터</Link>
                            <Link href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all">이용약관</Link>
                            <Link href="#" className="text-sm text-gray-300 font-bold hover:text-white hover:translate-x-1 transition-all">개인정보처리방침</Link>
                        </div>
                    </div>
                </div>
                
                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-800 mb-8"></div>
                
                {/* Bottom */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500 font-bold tracking-wide">
                        &copy; 2026 PHOENIXDARTS CO., LTD. ALL RIGHTS RESERVED.
                    </p>
                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:scale-110 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:scale-110 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
