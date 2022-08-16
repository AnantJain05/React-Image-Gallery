

const NavBar = () => (
    <nav class="bg-rose-300">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-center">
                <div class="flex space-x-4 justify-center">
                    <div>
                        <a href="#" class="flex items-center py-5 px-2 text-slate-50 hover:text-slate-200">
                            <svg class="h-6 w-6 mr-1 text-slate-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span class="font-bold">Anant Gallery</span>
                        </a>
                    </div>
                    <div class="hidden md:flex items-center space-x-1">
                        <a href="" class="py-2 px-3 bg-rose-500 hover:bg-rose-300 text-slate-50 hover:text-slate-100 rounded transition duration-300">Image Carousel</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default NavBar;