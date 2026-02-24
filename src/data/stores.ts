export interface Store {
  id: number;
  name: string;
  city: string;
  address: string;
  hours: string;         // Usado para o cálculo de "Aberto/Fechado"
  displayHours: string;  // Formato: "Seg-Sex | Sáb | Dom"
  mapEmbed: string;      
  googleMapsLink: string;
  hasPopularProgram: boolean;
  services: string[];
  amenities: {
    parking: boolean;
    accessibility: boolean;
    airConditioning: boolean;
  };
}

export const stores: Store[] = [
  { 
    id: 1, 
    name: "Preço Popular - Centro", 
    city: "Jequié", 
    address: "Praça Artur Pereira, n° 149",  
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: true,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 2, 
    name: "Preço Popular - Centro", 
    city: "Jequié", 
    address: "Rua da Itália, n° 20", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: true,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 3, 
    name: "Preço Popular - Joaquim Romão", 
    city: "Jequié", 
    address: "Rua João José Duarte, n° 100", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 4, 
    name: "Preço Popular - Centro", 
    city: "Ipiaú", 
    address: "Praça Ruy Barbosa, n° 44", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 5, 
    name: "Preço Popular - Jequiezinho", 
    city: "Jequié", 
    address: "Praça Governador Juracy Magalhães, n° 44", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 6, 
    name: "Preço Popular - Centro", 
    city: "Itabuna", 
    address: "Avenida do Cinqüentenário, n° 694", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 7, 
    name: "Preço Popular - Centro", 
    city: "Vitória da Conquista", 
    address: "Avenida Lauro de Freitas, n° 330", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 8, 
    name: "Preço Popular - Centro", 
    city: "Itabuna", 
    address: "Avenida do Cinqüentenário, n° 513", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 9, 
    name: "Preço Popular - Centro", 
    city: "Ilhéus", 
    address: "Rua Almirante Barroso, n° 170", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 10, 
    name: "Preço Popular - Centro", 
    city: "Guanambi", 
    address: "Rua Dr. Francisco José Fernandes, n° 36", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 11, 
    name: "Preço Popular - Centro", 
    city: "Eunápolis", 
    address: "Avenida Porto Seguro, n° 474", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 12, 
    name: "Preço Popular - São Caetano", 
    city: "Itabuna", 
    address: "Praça Simão Finterman, n° 198", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 13, 
    name: "Preço Popular - Centro", 
    city: "Jaguaquara", 
    address: "Rua Gomes Pita, n° 40", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 14, 
    name: "Preço Popular - Centro", 
    city: "Vitória da Conquista", 
    address: "Avenida Lauro de Freitas, n° 10", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 15, 
    name: "Preço Popular - Centro", 
    city: "Itapetinga", 
    address: "Rua João Pessoa, n° 15", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 16, 
    name: "Preço Popular - Centro", 
    city: "Jequié", 
    address: "Praça Ruy Barbosa, n° 11", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 17, 
    name: "Preço Popular - Barris", 
    city: "Salvador", 
    address: "Rua Coqueiros da Piedade, n° 27", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: true,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 18, 
    name: "Preço Popular - Barris", 
    city: "Salvador", 
    address: "Rua Coqueiros da Piedade, n° 19", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: true,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 19, 
    name: "Preço Popular - Centro", 
    city: "Simões Filho", 
    address: "Avenida Altamirando de Araújo Ramos, n° 389", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 20, 
    name: "Preço Popular - Cajazeiras VIII", 
    city: "Salvador", 
    address: "Estrada da Paciência, n° 2004", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 21, 
    name: "Preço Popular - Itapuã", 
    city: "Salvador", 
    address: "Avenida Dorival Caymmi, n° 106", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 22, 
    name: "Preço Popular - Caminho de Areia", 
    city: "Salvador", 
    address: "Avenida Caminho de Areia, n° 145", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 23, 
    name: "Preço Popular - São Cristóvão", 
    city: "Salvador", 
    address: "Avenida Aliomar Baleeiro, n° 50", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },
  { 
    id: 24, 
    name: "Preço Popular - Liberdade", 
    city: "Salvador", 
    address: "Estrada da Liberdade, n° 352", 
    hours: "07:00 - 19:00", 
    displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.9578230857841!2d-38.51485397153879!3d-12.982640092381073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160492d16f11e7%3A0xd5ae60d8757a0d93!2sR.%20Port%C3%A3o%20da%20Piedade%2C%2079%20-%20Dois%20de%20Julho%2C%20Salvador%20-%20BA%2C%2040070-045!5e0!3m2!1spt-BR!2sbr!4v1771955347935!5m2!1spt-BR!2sbr",
    googleMapsLink: "https://maps.app.goo.gl/UuzbCCY36bG3Nw2r6", hasPopularProgram: false,
    services: ["Injetáveis", "Pressão", "Glicemia"],
    amenities: { parking: true, accessibility: true, airConditioning: true }
  },

];