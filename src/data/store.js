/** Shared store / contact details for Swank Laundry */
export const store = {
  name: 'Swank Laundry',
  address: '5 Graceland School Road, Ewet Housing Estate, Uyo',
  phone: '+234 814 341 7479',
  phoneTel: 'tel:+2348143417479',
  hours: 'Open Daily 09:00 AM – 07:00 PM',
  rating: '4.9',
  scheduleWhatsApp: 'https://wa.link/6vpcdj',
  instagram: '@swanklaundry',
  // Ewet Housing Estate / Graceland School Road area, Uyo
  lat: 5.0156,
  lng: 7.9453,
}

export const mapsQuery = `${store.address}, Akwa Ibom, Nigeria`

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`

/** Google Maps embed centered on the pin */
export const mapEmbedUrl =
  `https://maps.google.com/maps?q=${store.lat},${store.lng}` +
  `&ll=${store.lat},${store.lng}&z=17&output=embed`

/** OpenStreetMap embed with marker (fallback / no API key) */
export const osmEmbedUrl =
  `https://www.openstreetmap.org/export/embed.html?` +
  `bbox=${store.lng - 0.012}%2C${store.lat - 0.008}%2C${store.lng + 0.012}%2C${store.lat + 0.008}` +
  `&layer=mapnik&marker=${store.lat}%2C${store.lng}`
