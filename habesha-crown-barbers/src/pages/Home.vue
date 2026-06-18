<template>
  <div class="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative h-screen min-h-[550px] flex items-center pt-12 pb-8">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0 border-b border-brand-gold/10">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/hero/hero-banner.png');"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
      </div>

      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12 relative z-10 mt-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          <!-- Left Content -->
          <div class="lg:col-span-7 xl:col-span-7">
            <h4 class="text-brand-gold text-[0.65rem] md:text-xs font-bold tracking-[0.25em] mb-3 uppercase">PREMIUM BARBERING. TIMELESS STYLE.</h4>
            <h1 class="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-serif font-bold leading-[1.05] mb-3">
              Crafting<br>Confidence.<br>
              <span class="text-brand-gold italic">One Cut At A Time.</span>
            </h1>
            <p class="text-brand-gray text-sm md:text-base mb-5 max-w-md leading-relaxed">
              Experience luxury grooming that blends modern techniques with Ethiopian excellence.
            </p>
            
            <div class="flex flex-wrap items-center gap-5 mb-6">
              <button class="bg-brand-green hover:bg-[#153a25] text-white px-6 py-3 rounded-sm text-[0.65rem] font-semibold tracking-[0.2em] transition-all flex items-center gap-3 uppercase">
                BOOK APPOINTMENT
                <span class="text-base leading-none">→</span>
              </button>
              <button class="flex items-center gap-3 text-white hover:text-brand-gold transition-colors text-[0.65rem] font-semibold tracking-[0.2em] uppercase group">
                EXPLORE STYLES
                <span class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
                  <svg class="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
                </span>
              </button>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold bg-brand-gold/5">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <div class="flex flex-col justify-center">
                <div class="text-[1.4rem] font-serif font-bold text-white leading-none mb-0.5">4.9</div>
                <div class="text-[0.55rem] text-brand-gray tracking-[0.2em] uppercase">1200+ REVIEWS</div>
              </div>
            </div>
          </div>

          <!-- Right Content (Booking Form) -->
          <div class="lg:col-span-5 xl:col-span-4 xl:col-start-9 flex justify-center lg:justify-end relative mt-4 lg:mt-0 w-full">
            <BookingForm />
          </div>

        </div>
      </div>
      
      <!-- Scroll Indicator & Pattern -->
      <div class="absolute bottom-0 left-0 w-full flex items-end z-20">
        <div class="flex-1 h-10 pattern-bg opacity-70 mb-2"></div>
        
        <div class="flex flex-col items-center gap-1.5 text-brand-gray hover:text-white transition-colors cursor-pointer px-6 pb-2">
          <div class="w-4 h-7 border-2 border-brand-gold/50 rounded-full flex justify-center pt-1">
            <div class="w-1 h-1.5 bg-brand-gold/80 rounded-full animate-bounce"></div>
          </div>
          <span class="text-[0.45rem] tracking-[0.3em] uppercase font-bold text-white">Scroll To Discover</span>
        </div>
        
        <div class="flex-1 h-10 pattern-bg opacity-70 mb-2"></div>
      </div>
    </section>

    <!-- Premium Services Section -->
    <section class="py-24 bg-[#0A0A0A] relative">
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h4 class="text-brand-gold text-xs font-bold tracking-[0.25em] mb-4 uppercase">OUR PREMIUM SERVICES</h4>
            <h2 class="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Elevate Your<br>Grooming Experience
            </h2>
            <div class="w-20 h-1 bg-brand-gold/70 mt-6"></div>
          </div>
          <a href="#" class="flex items-center gap-2 text-brand-green hover:text-white transition-colors text-xs font-bold tracking-[0.15em] uppercase">
            VIEW ALL SERVICES
            <span class="text-lg leading-none">→</span>
          </a>
        </div>

        <!-- CSS Grid representing 6 cards layout from the UI -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          
          <!-- Service 1 -->
          <div class="bg-brand-card/60 hover:bg-brand-card transition-colors border border-white/5 hover:border-brand-gold/30 rounded p-8 flex flex-col items-center text-center group cursor-pointer">
            <div class="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
            <h3 class="text-[0.8rem] font-bold tracking-widest uppercase mb-3 text-white">HAIRCUT</h3>
            <p class="text-[0.7rem] text-brand-gray mb-8 leading-relaxed">Precision cuts tailored to your style.</p>
            <div class="mt-auto text-brand-green text-[0.6rem] font-bold tracking-[0.2em] uppercase">FROM ETB 500</div>
          </div>
          
          <!-- Service 2 -->
          <div class="bg-brand-card/60 hover:bg-brand-card transition-colors border border-white/5 hover:border-brand-gold/30 rounded p-8 flex flex-col items-center text-center group cursor-pointer">
            <div class="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-[0.8rem] font-bold tracking-widest uppercase mb-3 text-white">BEARD SCULPTING</h3>
            <p class="text-[0.7rem] text-brand-gray mb-8 leading-relaxed">Define, shape & perfect your beard.</p>
            <div class="mt-auto text-brand-green text-[0.6rem] font-bold tracking-[0.2em] uppercase">FROM ETB 400</div>
          </div>

          <!-- Service 3 -->
          <div class="bg-brand-card/60 hover:bg-brand-card transition-colors border border-white/5 hover:border-brand-gold/30 rounded p-8 flex flex-col items-center text-center group cursor-pointer">
            <div class="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
            <h3 class="text-[0.8rem] font-bold tracking-widest uppercase mb-3 text-white">HOT TOWEL SHAVE</h3>
            <p class="text-[0.7rem] text-brand-gray mb-8 leading-relaxed">Classic shave with luxury hot towels.</p>
            <div class="mt-auto text-brand-green text-[0.6rem] font-bold tracking-[0.2em] uppercase">FROM ETB 600</div>
          </div>

          <!-- Service 4 -->
          <div class="bg-brand-card/60 hover:bg-brand-card transition-colors border border-white/5 hover:border-brand-gold/30 rounded p-8 flex flex-col items-center text-center group relative overflow-hidden cursor-pointer">
            <div class="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 rounded-bl-full"></div>
            <div class="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 class="text-[0.8rem] font-bold tracking-widest uppercase mb-3 text-white">VIP GROOMING</h3>
            <p class="text-[0.7rem] text-brand-gray mb-8 leading-relaxed">The ultimate royal treatment.</p>
            <div class="mt-auto text-brand-green text-[0.6rem] font-bold tracking-[0.2em] uppercase">FROM ETB 1200</div>
          </div>

          <!-- Service 5 -->
          <div class="bg-brand-card/60 hover:bg-brand-card transition-colors border border-white/5 hover:border-brand-gold/30 rounded p-8 flex flex-col items-center text-center group cursor-pointer">
            <div class="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h3 class="text-[0.8rem] font-bold tracking-widest uppercase mb-3 text-white">HAIR TREATMENT</h3>
            <p class="text-[0.7rem] text-brand-gray mb-8 leading-relaxed">Nourish, strengthen & revitalize your hair.</p>
            <div class="mt-auto text-brand-green text-[0.6rem] font-bold tracking-[0.2em] uppercase">FROM ETB 700</div>
          </div>

          <!-- Service 6 -->
          <div class="bg-brand-card/60 hover:bg-brand-card transition-colors border border-white/5 hover:border-brand-gold/30 rounded p-8 flex flex-col items-center text-center group cursor-pointer">
            <div class="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-[0.8rem] font-bold tracking-widest uppercase mb-3 text-white">KIDS HAIRCUT</h3>
            <p class="text-[0.7rem] text-brand-gray mb-8 leading-relaxed">Stylish cuts for your little kings.</p>
            <div class="mt-auto text-brand-green text-[0.6rem] font-bold tracking-[0.2em] uppercase">FROM ETB 350</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Heritage / Coffee Ceremony Section -->
    <section class="bg-brand-dark py-24 relative overflow-hidden">
      <!-- Subtle top gradient -->
      <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
      
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Image Side -->
          <div class="relative group order-2 lg:order-1">
            <!-- Decorative outline -->
            <div class="absolute -inset-4 border border-brand-gold/20 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <!-- Main Image -->
            <div class="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
              <!-- Using the ethiopian-coffee image -->
              <img src="/images/hero/ethiopian-coffee.png" alt="Ethiopian Coffee Ceremony" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform" />
              <!-- Inner shadow for blending -->
              <div class="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>
            </div>
          </div>

          <!-- Content Side -->
          <div class="lg:pl-8 order-1 lg:order-2">
            <h4 class="text-brand-gold text-xs font-bold tracking-[0.25em] mb-4 uppercase">OUR HERITAGE</h4>
            <h2 class="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              Modern Grooming<br>Rooted In <span class="text-brand-gold">Ethiopian</span><br>Excellence
            </h2>
            
            <div class="flex items-center gap-4 mb-8">
              <div class="w-12 h-[1px] bg-brand-gold/50"></div>
              <div class="w-1.5 h-1.5 rotate-45 border border-brand-gold/50"></div>
              <div class="w-12 h-[1px] bg-brand-gold/50"></div>
            </div>

            <p class="text-brand-gray text-lg mb-10 leading-relaxed font-light">
              At Habesha Crown Barbers, we blend timeless Ethiopian heritage with modern grooming techniques to create more than a haircut — we craft identity, confidence, and a legacy of excellence.
            </p>

            <div class="text-brand-gold font-serif text-[2rem] italic mb-12 opacity-80 tracking-widest">
              Habesha Crown Barbers
            </div>

            <button class="bg-brand-green hover:bg-[#153a25] text-white px-8 py-3.5 rounded-sm text-xs font-semibold tracking-widest transition-all flex items-center gap-3 uppercase">
              OUR STORY
              <span class="text-lg leading-none">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Master Barbers Section -->
    <section class="py-24 bg-brand-dark relative">
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h4 class="text-brand-gold text-xs font-bold tracking-[0.25em] mb-4 uppercase">MASTER BARBERS</h4>
            <h2 class="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Meet The Artists
            </h2>
            <div class="w-20 h-1 bg-brand-gold/70 mt-6"></div>
          </div>
          <a href="#" class="flex items-center gap-2 text-brand-green hover:text-white transition-colors text-xs font-bold tracking-[0.15em] uppercase">
            VIEW ALL BARBERS
            <span class="text-lg leading-none">→</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Barber 1 -->
          <div class="group relative overflow-hidden rounded-xl border border-white/5 bg-brand-card">
            <div class="aspect-[3/4] relative">
              <!-- Placeholder for Barber Image -->
              <div class="w-full h-full bg-[#111] flex items-center justify-center">
                 <svg class="w-16 h-16 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div class="w-full h-full bg-gradient-to-t from-brand-card via-brand-card/50 to-transparent absolute inset-0 z-10 transition-opacity opacity-80 group-hover:opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div class="text-brand-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
              </div>
              <h3 class="text-xl font-serif font-bold text-white tracking-wide uppercase mb-1">MELKAMU</h3>
              <p class="text-[0.65rem] text-brand-gold tracking-[0.2em] uppercase mb-4">MASTER BARBER</p>
              <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-colors"><span class="text-[0.6rem]">IG</span></a>
                <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-colors"><span class="text-[0.6rem]">FB</span></a>
              </div>
            </div>
          </div>
          
          <!-- Barber 2 -->
          <div class="group relative overflow-hidden rounded-xl border border-white/5 bg-brand-card">
            <div class="aspect-[3/4] relative">
              <div class="w-full h-full bg-[#111] flex items-center justify-center">
                 <svg class="w-16 h-16 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div class="w-full h-full bg-gradient-to-t from-brand-card via-brand-card/50 to-transparent absolute inset-0 z-10 transition-opacity opacity-80 group-hover:opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div class="text-brand-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
              </div>
              <h3 class="text-xl font-serif font-bold text-white tracking-wide uppercase mb-1">DAWIT</h3>
              <p class="text-[0.65rem] text-brand-gold tracking-[0.2em] uppercase mb-4">BEARD SPECIALIST</p>
              <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-colors"><span class="text-[0.6rem]">IG</span></a>
              </div>
            </div>
          </div>

          <!-- Barber 3 -->
          <div class="group relative overflow-hidden rounded-xl border border-white/5 bg-brand-card">
            <div class="aspect-[3/4] relative">
              <div class="w-full h-full bg-[#111] flex items-center justify-center">
                 <svg class="w-16 h-16 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div class="w-full h-full bg-gradient-to-t from-brand-card via-brand-card/50 to-transparent absolute inset-0 z-10 transition-opacity opacity-80 group-hover:opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div class="text-brand-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
              </div>
              <h3 class="text-xl font-serif font-bold text-white tracking-wide uppercase mb-1">NATHAN</h3>
              <p class="text-[0.65rem] text-brand-gold tracking-[0.2em] uppercase mb-4">STYLE EXPERT</p>
              <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-colors"><span class="text-[0.6rem]">IG</span></a>
              </div>
            </div>
          </div>

          <!-- Barber 4 -->
          <div class="group relative overflow-hidden rounded-xl border border-white/5 bg-brand-card">
            <div class="aspect-[3/4] relative">
              <div class="w-full h-full bg-[#111] flex items-center justify-center">
                 <svg class="w-16 h-16 text-brand-gold/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div class="w-full h-full bg-gradient-to-t from-brand-card via-brand-card/50 to-transparent absolute inset-0 z-10 transition-opacity opacity-80 group-hover:opacity-60"></div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div class="text-brand-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
              </div>
              <h3 class="text-xl font-serif font-bold text-white tracking-wide uppercase mb-1">YONAS</h3>
              <p class="text-[0.65rem] text-brand-gold tracking-[0.2em] uppercase mb-4">FADE SPECIALIST</p>
              <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                <a href="#" class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold transition-colors"><span class="text-[0.6rem]">IG</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery / Signature Look Section -->
    <section class="py-24 bg-[#0A0A0A] border-t border-b border-white/5 relative">
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h4 class="text-brand-gold text-xs font-bold tracking-[0.25em] mb-4 uppercase">EXPLORE STYLES</h4>
            <h2 class="text-4xl md:text-5xl font-serif font-bold leading-tight">
              Find Your Signature Look
            </h2>
          </div>
          <a href="#" class="flex items-center gap-2 text-brand-green hover:text-white transition-colors text-xs font-bold tracking-[0.15em] uppercase">
            VIEW GALLERY
            <span class="text-lg leading-none">→</span>
          </a>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center gap-4 mb-12 border-b border-white/10 pb-4">
          <button class="bg-brand-green text-white px-6 py-2 rounded-sm text-[0.65rem] font-bold tracking-[0.2em] uppercase">ALL STYLES</button>
          <button class="text-brand-gray hover:text-white px-6 py-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors">FADE CUTS</button>
          <button class="text-brand-gray hover:text-white px-6 py-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors">MODERN STYLES</button>
          <button class="text-brand-gray hover:text-white px-6 py-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors">AFRO STYLES</button>
          <button class="text-brand-gray hover:text-white px-6 py-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase transition-colors">BEARD STYLES</button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div class="aspect-[4/5] bg-brand-card rounded-lg overflow-hidden relative group">
             <!-- Placeholder background -->
             <div class="w-full h-full bg-[#151515] flex items-center justify-center"><svg class="w-8 h-8 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
             <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span class="text-brand-gold w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></span>
             </div>
          </div>
          <div class="aspect-[4/5] bg-brand-card rounded-lg overflow-hidden relative group">
             <div class="w-full h-full bg-[#151515] flex items-center justify-center"><svg class="w-8 h-8 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
             <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span class="text-brand-gold w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></span>
             </div>
          </div>
          <div class="aspect-[4/5] bg-brand-card rounded-lg overflow-hidden relative group">
             <div class="w-full h-full bg-[#151515] flex items-center justify-center"><svg class="w-8 h-8 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
             <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span class="text-brand-gold w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></span>
             </div>
          </div>
          <div class="aspect-[4/5] bg-brand-card rounded-lg overflow-hidden relative group">
             <div class="w-full h-full bg-[#151515] flex items-center justify-center"><svg class="w-8 h-8 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>
             <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span class="text-brand-gold w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></span>
             </div>
          </div>
          <div class="aspect-[4/5] bg-brand-card rounded-lg overflow-hidden relative group cursor-pointer border border-brand-gold/20 hover:border-brand-gold/50 transition-colors">
             <div class="absolute inset-0 bg-brand-gold/5 flex flex-col items-center justify-center transition-opacity">
                <span class="text-brand-gold w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center mb-3"><span class="text-xl">...</span></span>
                <span class="text-xs font-bold tracking-widest text-brand-gold">VIEW MORE</span>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-brand-dark border-b border-white/5">
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
             <div class="text-brand-gold opacity-80"><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
             <div class="text-center md:text-left">
                <div class="text-3xl font-serif font-bold text-white mb-1">5000+</div>
                <div class="text-[0.6rem] text-brand-gray tracking-[0.2em] uppercase">HAIRCUTS</div>
             </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
             <div class="text-brand-gold opacity-80"><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
             <div class="text-center md:text-left">
                <div class="text-3xl font-serif font-bold text-white mb-1">1200+</div>
                <div class="text-[0.6rem] text-brand-gray tracking-[0.2em] uppercase">HAPPY CLIENTS</div>
             </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
             <div class="text-brand-gold opacity-80"><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
             <div class="text-center md:text-left">
                <div class="text-3xl font-serif font-bold text-white mb-1">10+</div>
                <div class="text-[0.6rem] text-brand-gray tracking-[0.2em] uppercase">YEARS EXPERIENCE</div>
             </div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 px-4">
             <div class="text-brand-gold opacity-80"><svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
             <div class="text-center md:text-left">
                <div class="text-3xl font-serif font-bold text-white mb-1">4.9</div>
                <div class="text-[0.6rem] text-brand-gray tracking-[0.2em] uppercase">CLIENT RATING</div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-[#0A0A0A]">
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12">
        <div class="bg-brand-card border border-white/5 rounded-2xl p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
          
          <div class="relative z-10 max-w-xl text-center md:text-left">
            <h2 class="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4 text-white">
              READY FOR YOUR<br>BEST LOOK?
            </h2>
            <p class="text-brand-gray text-sm md:text-base mb-0 leading-relaxed">
              Book your appointment today and experience the royal treatment. Crafting confidence since day one.
            </p>
          </div>
          
          <div class="relative z-10 flex flex-col items-center gap-4">
            <button class="w-full sm:w-auto bg-brand-green hover:bg-[#153a25] text-white px-10 py-4 rounded-sm text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-3">
              BOOK APPOINTMENT
              <span class="text-lg leading-none">→</span>
            </button>
            <span class="text-[0.6rem] text-brand-gray font-bold tracking-widest uppercase">OR</span>
            <button class="w-full sm:w-auto text-brand-green hover:text-white px-8 py-3 border border-brand-green/30 hover:border-brand-green rounded-sm text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              CONTACT US ON WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-dark pt-20 pb-10 border-t border-white/10">
      <div class="max-w-[1400px] w-full mx-auto px-8 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <!-- Brand -->
          <div>
             <div class="flex items-center gap-3 mb-6">
                <div class="text-brand-gold flex items-center justify-center">
                   <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
                </div>
                <div class="flex flex-col">
                   <span class="text-[0.9rem] font-serif font-bold tracking-[0.15em] leading-tight text-brand-gold">HABESHA</span>
                   <span class="text-[1.1rem] font-serif font-bold tracking-[0.15em] leading-tight text-white">CROWN</span>
                   <span class="text-[0.55rem] tracking-[0.25em] text-brand-gray mt-0.5">BARBERS</span>
                </div>
             </div>
             <p class="text-[0.8rem] text-brand-gray leading-relaxed mb-6">
                Premium grooming, Ethiopian excellence. Crafting confidence since day one.
             </p>
          </div>

          <!-- Quick Links -->
          <div>
             <h4 class="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">QUICK LINKS</h4>
             <ul class="space-y-3">
                <li><a href="#" class="text-[0.8rem] text-brand-gray hover:text-brand-gold transition-colors">About Us</a></li>
                <li><a href="#" class="text-[0.8rem] text-brand-gray hover:text-brand-gold transition-colors">Our Services</a></li>
                <li><a href="#" class="text-[0.8rem] text-brand-gray hover:text-brand-gold transition-colors">Gallery</a></li>
                <li><a href="#" class="text-[0.8rem] text-brand-gray hover:text-brand-gold transition-colors">Our Barbers</a></li>
                <li><a href="#" class="text-[0.8rem] text-brand-gray hover:text-brand-gold transition-colors">Membership</a></li>
             </ul>
          </div>

          <!-- Contact Info -->
          <div>
             <h4 class="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">CONTACT INFO</h4>
             <ul class="space-y-4">
                <li class="flex items-start gap-3">
                   <svg class="w-4 h-4 text-brand-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                   <span class="text-[0.8rem] text-brand-gray leading-relaxed">Bole, Addis Ababa, Ethiopia</span>
                </li>
                <li class="flex items-start gap-3">
                   <svg class="w-4 h-4 text-brand-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                   <span class="text-[0.8rem] text-brand-gray leading-relaxed">+251 91 123 4567</span>
                </li>
                <li class="flex items-start gap-3">
                   <svg class="w-4 h-4 text-brand-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   <span class="text-[0.8rem] text-brand-gray leading-relaxed">hello@habeshacrown.com</span>
                </li>
                <li class="flex items-start gap-3">
                   <svg class="w-4 h-4 text-brand-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   <span class="text-[0.8rem] text-brand-gray leading-relaxed">Mon - Sun, 9AM - 9PM</span>
                </li>
             </ul>
          </div>

          <!-- Newsletter -->
          <div>
             <h4 class="text-white text-xs font-bold tracking-[0.15em] uppercase mb-6">NEWSLETTER</h4>
             <p class="text-[0.8rem] text-brand-gray mb-4">Stay updated with our latest offers and style tips.</p>
             <form class="flex" @submit.prevent>
                <input type="email" placeholder="Your email address" class="w-full bg-black/50 border border-white/10 rounded-l px-4 py-3 text-[0.8rem] text-white focus:outline-none focus:border-brand-gold transition-colors">
                <button type="submit" class="bg-brand-green hover:bg-[#153a25] text-white px-4 py-3 rounded-r transition-colors">
                   <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
             </form>
          </div>

        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.7rem] text-brand-gray">
           <p>&copy; 2024 Habesha Crown Barbers. All Rights Reserved.</p>
           <div class="flex gap-6">
              <a href="#" class="hover:text-brand-gold transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-brand-gold transition-colors">Terms & Conditions</a>
           </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import Navbar from '../components/navbar/Navbar.vue'
import BookingForm from '../components/booking/BookingForm.vue'
</script>

<style scoped>
.pattern-bg {
  background-image: url('../assets/patterns/ethiopian-pattern.svg');
  background-repeat: repeat-x;
  background-position: center;
  background-size: 32px 32px;
}
</style>
