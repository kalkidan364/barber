<template>
  <header class="absolute top-0 left-0 w-full z-50 text-white border-b border-white/5">
    <!-- Top Bar -->
    <div class="border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div class="max-w-[1400px] mx-auto hidden md:flex justify-between items-center px-8 lg:px-12 py-2 text-[0.65rem] font-sans text-brand-gray">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span>Addis Ababa, Ethiopia</span>
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Mon - Sun: 9AM - 9PM</span>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <!-- Social Icons -->
        <a href="#" class="hover:text-brand-gold transition-colors"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
        <a href="#" class="hover:text-brand-gold transition-colors"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a>
        <a href="#" class="hover:text-brand-gold transition-colors"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
      </div>
    </div>
  </div>

    <!-- Main Navigation -->
    <nav class="max-w-[1400px] mx-auto flex justify-between items-center px-8 lg:px-12 py-4">
      <div class="flex items-center gap-3">
        <!-- Logo -->
        <div class="text-brand-gold flex items-center justify-center">
          <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
        </div>
        <div class="flex flex-col">
          <span class="text-[0.95rem] font-serif font-bold tracking-[0.15em] leading-tight text-brand-gold">HABESHA</span>
          <span class="text-[1.15rem] font-serif font-bold tracking-[0.15em] leading-tight text-white">CROWN</span>
          <span class="text-[0.55rem] tracking-[0.25em] text-brand-gray mt-0.5">BARBERS</span>
        </div>
      </div>

      <ul class="hidden lg:flex items-center gap-4 xl:gap-7 text-[0.65rem] xl:text-[0.7rem] font-medium tracking-widest uppercase">
        <li><a href="#" class="text-white hover:text-brand-gold transition-colors">HOME</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">ABOUT</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">SERVICES</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">GALLERY</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">OUR BARBERS</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">MEMBERSHIP</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">BOOKING</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">BLOG</a></li>
        <li><a href="#" class="text-brand-gray hover:text-brand-gold transition-colors">CONTACT</a></li>
      </ul>

      <button class="bg-brand-green hover:bg-[#153a25] text-white px-6 py-2.5 rounded-sm text-[0.65rem] font-bold tracking-[0.2em] transition-all flex items-center gap-2 uppercase">
        BOOK APPOINTMENT
        <span class="text-sm leading-none">→</span>
      </button>
    </nav>
  </header>
</template>
