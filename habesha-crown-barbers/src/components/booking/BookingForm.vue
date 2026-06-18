<template>
  <div class="bg-[#0A0A0A]/95 backdrop-blur-md border border-brand-gold/20 rounded-2xl p-6 lg:p-8 w-full max-w-[380px] shadow-2xl relative overflow-hidden">
    <!-- Subtle gold accent line at top -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent"></div>
    
    <div class="flex items-center justify-center gap-3 mb-6">
      <svg class="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      <h3 class="text-brand-gold font-sans text-xs font-bold tracking-[0.15em] uppercase">BOOK YOUR APPOINTMENT</h3>
    </div>

    <form class="space-y-3" @submit.prevent>
      <!-- Select Service -->
      <div class="relative">
        <select class="w-full bg-black/40 border border-brand-gold/20 rounded px-4 py-3 text-white text-[0.75rem] appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer">
          <option value="" disabled selected>Select Service</option>
          <option value="haircut">Premium Haircut</option>
          <option value="beard">Beard Sculpting</option>
        </select>
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <!-- Select Barber -->
      <div class="relative">
        <select class="w-full bg-black/40 border border-brand-gold/20 rounded px-4 py-3 text-white text-[0.75rem] appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer">
          <option value="" disabled selected>Select Barber</option>
          <option value="any">Any Available Barber</option>
          <option value="melkamu">Melkamu</option>
        </select>
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <!-- Select Date -->
      <div class="relative">
        <input type="text" placeholder="Select Date" class="w-full bg-black/40 border border-brand-gold/20 rounded px-4 py-3 text-white text-[0.75rem] focus:outline-none focus:border-brand-gold transition-colors placeholder-white/50">
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </div>
      </div>

      <!-- Select Time -->
      <div class="relative">
        <select class="w-full bg-black/40 border border-brand-gold/20 rounded px-4 py-3 text-white text-[0.75rem] appearance-none focus:outline-none focus:border-brand-gold transition-colors cursor-pointer">
          <option value="" disabled selected>Select Time</option>
          <option value="09:00">09:00 AM</option>
          <option value="10:00">10:00 AM</option>
        </select>
        <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-gold">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </div>

      <button type="submit" class="w-full bg-brand-green hover:bg-[#153a25] text-white py-3 rounded text-[0.75rem] font-bold tracking-widest transition-colors flex justify-center items-center gap-2 mt-4">
        <svg class="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H9L12 2ZM3 10L7 12L5 22H19L17 12L21 10L12 16L3 10Z"></path></svg>
        BOOK NOW
      </button>
    </form>
    
    <div class="mt-5 text-center text-[0.65rem] tracking-[0.2em] font-medium text-brand-gray/80 uppercase">
      FAST &nbsp;•&nbsp; EASY &nbsp;•&nbsp; SECURE
    </div>
  </div>
</template>
