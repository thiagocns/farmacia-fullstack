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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772128305667!5m2!1spt-BR!2sbr!6m8!1m7!1snaUbRhixpswZyM-3SzS2Mg!2m2!1d-13.86102011174679!2d-40.07838531767478!3f61.05558582439565!4f8.093362413491022!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/xbWdNPrx3cBzdJvh8", hasPopularProgram: true,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772114947630!5m2!1spt-BR!2sbr!6m8!1m7!1sK7Z7PqgI_6a4iS-DEGnFCg!2m2!1d-13.86028393097946!2d-40.08291786000344!3f249.04992077404137!4f-1.2006154839972965!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/hhgSs64vsHhbB3RN9", hasPopularProgram: true,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772128394458!5m2!1spt-BR!2sbr!6m8!1m7!1s7rWjGvISdhWoNFANyiTm5g!2m2!1d-13.85587350689724!2d-40.09002771573513!3f350.58891763173654!4f14.142114009055419!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/YZjHc3AHAhZrhrVa8", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129119167!5m2!1spt-BR!2sbr!6m8!1m7!1skSNdUyjM-uRgm7gSE-IEJw!2m2!1d-14.13888107936892!2d-39.73497596179443!3f140.31996095343192!4f4.147932310661716!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/2CVwk3awMG7TsuH49", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772128543310!5m2!1spt-BR!2sbr!6m8!1m7!1swsaTax8WV8rGdZJ-40Jquw!2m2!1d-13.86720522813238!2d-40.07090375787929!3f229.8992408585681!4f17.60768250015758!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/zpot6mEoABaAYV6V8", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772128678048!5m2!1spt-BR!2sbr!6m8!1m7!1sTN5f2-4H_vmWhKY7NoY87A!2m2!1d-14.79089220163794!2d-39.27485904637719!3f281.69116!4f0!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/H2QJ8t4xiwWQkqQ36", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772128945025!5m2!1spt-BR!2sbr!6m8!1m7!1skvwvFT2VILDPNEVhoSRueQ!2m2!1d-14.85533987442985!2d-40.84119319866983!3f289.66116507840246!4f9.31768761869128!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/65PRa15rdiRsuU5W9", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129305503!5m2!1spt-BR!2sbr!6m8!1m7!1sdJBVZLyE9UJkMPgyEYGbOA!2m2!1d-14.79806213416179!2d-39.03475393992561!3f202.6543772853717!4f0.8901267776167572!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/hZ5sXLftvt4ywhCVA", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129411462!5m2!1spt-BR!2sbr!6m8!1m7!1skPlqloQqYEqiqE68X6IoRw!2m2!1d-14.22622960042368!2d-42.77927795612321!3f50.60681768983534!4f16.3272286457305!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/kiC29jvX42gQ9Q348", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129536234!5m2!1spt-BR!2sbr!6m8!1m7!1s35JYUZB4CCino44h_HyQRQ!2m2!1d-16.37444453571094!2d-39.58527609886951!3f47.71872009113622!4f-4.829538698214037!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/NDYX2vDzTnR1tPMZ6", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129577576!5m2!1spt-BR!2sbr!6m8!1m7!1sBBmzYCd-ZzbInJHmM7CsYA!2m2!1d-13.52837938686936!2d-39.96905062465849!3f222.33964889299295!4f3.4204383681193917!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/96VXU27tdRU8RQ2Y9", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129009540!5m2!1spt-BR!2sbr!6m8!1m7!1sS31AvdJXJtiQXTFa3sYxBQ!2m2!1d-14.85240952443544!2d-40.84111199591761!3f293.2783544284755!4f3.831366917167429!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/N6cKZoQ7i2wUTCd78", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772129656599!5m2!1spt-BR!2sbr!6m8!1m7!1s-be14keZnUf7Fli6nQdwPw!2m2!1d-15.24549107575869!2d-40.2455849377867!3f172.18036602406784!4f7.611623205093352!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/ZGfrR5zspLLLEAxn8", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772128609167!5m2!1spt-BR!2sbr!6m8!1m7!1sjpoJ8_3v2jd9I2VkWPKRcA!2m2!1d-13.85980142452406!2d-40.08185214165452!3f42.976094703740806!4f-12.993490420513012!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/qWaVMKdFgp8QSfiU9", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772115068099!5m2!1spt-BR!2sbr!6m8!1m7!1suKuLKsTMcFTEqnqskOonMA!2m2!1d-12.98254330660731!2d-38.51421898079303!3f116.42308474523553!4f-4.969007523862132!5f0.7820865974627469",
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772115068099!5m2!1spt-BR!2sbr!6m8!1m7!1suKuLKsTMcFTEqnqskOonMA!2m2!1d-12.98254330660731!2d-38.51421898079303!3f116.42308474523553!4f-4.969007523862132!5f0.7820865974627469",
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
        address: "Estrada da Paciência, n° 2006",
        hours: "07:00 - 19:00",
        displayHours: "Seg-Sex: 07h15-20h | Sáb: 07h-20h | Dom: 08h-13h",
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772115307504!5m2!1spt-BR!2sbr!6m8!1m7!1syJ3poBmLQNVpA1pnVhBVHg!2m2!1d-12.89935219143875!2d-38.40826160261417!3f233.38228954184976!4f-0.5158311848600761!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/ygqJqdREbiAXp6d16", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772122648442!5m2!1spt-BR!2sbr!6m8!1m7!1sFa4d1NZYBhjPKgRvRn7QjA!2m2!1d-12.94371681364907!2d-38.36558746215349!3f295.564434945542!4f-0.11676404004235508!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/iaCNcFhxc88DEVnC6", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772122806641!5m2!1spt-BR!2sbr!6m8!1m7!1sSGYKtK02CoUat1CEHxfEig!2m2!1d-12.92931577734061!2d-38.50379033268496!3f170.19672!4f0!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/jj3sgNhU16qGCKPZ8", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!4v1772123047197!6m8!1m7!1s_Jd2pDH8-OOBVPsSRkTHig!2m2!1d-12.91091093970391!2d-38.35375731413719!3f16.270176080145852!4f5.718141924551361!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/nwaP1YTgzZnCXN5y7", hasPopularProgram: false,
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1772123247614!5m2!1spt-BR!2sbr!6m8!1m7!1sMktbZwF0jTZLlv8KqYP02g!2m2!1d-12.94792193828867!2d-38.49160691139741!3f355.521531811042!4f-10.407312803834273!5f0.7820865974627469",
        googleMapsLink: "https://maps.app.goo.gl/PsBvBbKD49EKANeQ9", hasPopularProgram: false,
        services: ["Injetáveis", "Pressão", "Glicemia"],
        amenities: { parking: true, accessibility: true, airConditioning: true }
    },

];