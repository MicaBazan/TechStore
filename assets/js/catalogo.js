const productos = {
    tienda: "Tecnologia",

    //Array de mis articulos
    articulos:[
        {
            nombre: "iphone 14",
            marca: "apple",
            descripcion: "Pantalla Super Retina XDR; Pantalla OLED de 6.1 pulgadas (diagonal) sin marco; Resolución de 2532 x 1170 pixeles a 460 ppi.",
            precio: "$ 994.999",
            imagen: "./assets/media/productos/iphone14.jpg",
            color: ["Medianoche", "Purpura", "Blanco estrella", "Azul", "Amarillo"],
            almacenamiento: "128 GB",
            peso: "172 gr",
            categoria: "Celulares",
            stock: 10,
        },
        {
            nombre: "Tablet Samsung Tab A8",
            marca: "samsung",
            descripcion: "Cuenta con procesador Octa-Core 2GHz y hasta 3 GB de RAM y 32 GB de almacenamiento interno que le da un gran rendimiento sin perder velocidad ni agotar la batería.",
            precio: "$ 199.999",
            imagen: "./assets/media/productos/tabletSamsung.jpg",
            color: ["Silver", "Negro", "Rosado"],
            almacenamiento: "64 GB",
            peso: "172 gr",
            categoria: "Tablets",
            stock: 10
        },
        {
            nombre: "Canon EOS Rebel Kit T100",
            marca: "canon",
            descripcion: "Es una cámara simple que ofrece un nivel de precisión y reproducción de colores incluyendo balance de blancos increíble gracias al procesador DIGIC 4+ integrado.",
            precio: "$ 689.000",
            imagen: "./assets/media/productos/canon.webp",
            color: "Negro",
            almacenamiento: "128 GB",
            peso: "436 gr",
            categoria: "Fotografia",
            stock: 10
        },
        {
            nombre: "HyperX Alloy Core 60 (Rojo HX)",
            marca: "HYPER",
            descripcion: "Es un teclado durarero, sumamente portátil y de factor de forma del 60% que le brinda más espacio para mover el mouse.",
            precio: "$ 97.900",
            imagen: "./assets/media/productos/tecladogamer.jpg",
            color: "Negro",
            almacenamiento: "",
            peso: "300 gr",
            categoria: "Perifericos",
            stock: 10
        },
        {
            nombre: "Mouse x15",
            marca: "Evga",
            descripcion: "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu Evga X15 encontrá eso que buscás en un solo aparato con la mejor tecnología.",
            precio: "$ 51.566",
            imagen: "./assets/media/productos/mousex15.jpg",
            color: "Negro",
            almacenamiento: "",
            peso: "110 gr",
            categoria: "Perifericos",
            stock: 10
        },
        {
            nombre: "Maletín Porta Notebook",
            marca: "Gadnic",
            descripcion: "LLeva tus pertenencias de forma profesional. Tiene una correa trasera para valijas. Las manijas son reforzadas y la correa ajustable.",
            precio: "$ 24.749",
            imagen: "./assets/media/productos/bolsocomputadora.webp",
            color: "Negro",
            almacenamiento: "",
            peso: "172 gr",
            categoria: "Accesorios",
            stock: 10
        },
        {
            nombre: "Apple Watch SE",
            marca: "Apple",
            descripcion: "Tiene una clasificación de resistencia al agua de 50 metros. Podrás llevar un registro de tus entrenamientos en la piscina, ver en un mapa tu recorrido en aguas abiertas y tener datos precisos de tu actividad incluso cuando estés usando una tabla de natación.",
            precio: "$ 361.975",
            imagen: "./assets/media/productos/appleWatchSE.png",
            color: ["Azul Medianoche", "Blanco Estelar", "Plateado"],
            almacenamiento: "",
            peso: "172 gr",
            categoria: "Accesorios",
            stock: 10
        },
        {
            nombre: "NOTEBOOK ASUS X515EA",
            marca: "ASUS",
            descripcion: "Ya sea para trabajar o jugar, ASUS X515 ofrece un rendimiento potente y efectos visuales envolventes. Su pantalla NanoEdge cuenta con amplios ángulos de visión de 178 ° y una pantalla anti reflejante para una experiencia verdaderamente atractiva.",
            precio: "$ 559.990",
            imagen: "./assets/media/productos/notebookAsus.jfif",
            color: "Gris",
            almacenamiento: "256 gb",
            peso: "172 gr",
            categoria: "Notebooks",
            stock: 10
        },
        {
            nombre: "Samsung Galaxy A04",
            marca: "Samsung",
            descripcion: "Combina la potencia de procesamiento Octa-core con hasta 3 GB/4 GB de RAM para un rendimiento rápido y eficiente para la tarea en cuestión. Y agrega hasta 1 TB más con la tarjeta microSD",
            precio: "$ 94.999",
            imagen: "./assets/media/productos/a04.webp",
            color: "Negro",
            almacenamiento: "64 gb",
            peso: "192 gr",
            categoria: "Celulares",
            stock: 10
        },
        {
            nombre: "Pc Gamer Armada Pro",
            marca: "",
            descripcion: "MICRO: INTEL i9 9900 9NA GENERACIÓN 5.0GHZ 8 NUCLEOS 16 HILOS; VIDEO: INTEL Graphics 630 (Integrada); MOTHER: MSI/ASROCK H310M",
            precio: "$ 135.000",
            imagen: "./assets/media/productos/pcgamer.jpg",
            color: "Negro",
            almacenamiento: "64 gb",
            peso: "192 gr",
            categoria: "pc",
            stock: 10
        },
        {
            nombre: "FOX GRIS",
            marca: "fox",
            descripcion: "Silla inyectada en color gris. Respaldo inyectado en nylon, tapizado en tela de red mesh gris medio. Regulación neumática y de tensión para diferentes pesos del usuario. Neumática o con basculante central para trabajar con total comodidad. Apoyo lumbar regulable.",
            precio: "$ 180.000",
            imagen: "./assets/media/productos/silla1.webp",
            color: "Gris",
            almacenamiento: "",
            peso: "192 gr",
            categoria: "sillas",
            stock: 10
        },
        {
            nombre: "Silla Ejecutiva con Ruedas",
            marca: "Bons",
            descripcion: "Eco Cuero de Excelente Calidad Sistema de GAS para regulación de altura. Regulable en Altura Alta Resistencia Gira 360 Grados Muy Facil de Armar Color Negro",
            precio: "$ 94.900",
            imagen: "./assets/media/productos/silla2.jpg",
            color: "Gris",
            almacenamiento: "",
            peso: "192 gr",
            categoria: "sillas",
            stock: 10
        },
        {
            nombre: "Teclado Inálambrico Redragon",
            marca: "Redragon",
            descripcion: "El Deimos está equipado con un sistema de conexión inalámbrica de 2,4 GHz y una batería interna de alto rendimiento que permite hasta 60 horas de uso sin cable.",
            precio: "$ 55.200",
            imagen: "./assets/media/productos/teclado.webp",
            color: "Gris",
            almacenamiento: "",
            peso: "192 gr",
            categoria: "Perifericos",
            stock: 10
        },
        {
            nombre: "Samsung Z Flip4",
            marca: "Samsung",
            descripcion: "Pantalla AMOLED de 6,7 pulgadas con resolución de 2.640 x 1080 píxeles y velocidad de refresco dinámica de 1 a 120 Hz.",
            precio: "$ 590.850",
            imagen: "./assets/media/productos/zflip.webp",
            color: ["Blue", "Bora purple", "Graphite", "Gris", "Purple"],
            almacenamiento: "256 gb",
            peso: "172 gr",
            categoria: "Celulares",
            stock: 10
        },
        {
            nombre: "Monitor Led samsung 22'",
            marca: "Samsung",
            descripcion: "Diseño minimalista, máxima concentración. La pantalla sin bordes en tres de sus lados aporta una estética clara y moderna a cualquier entorno de trabajo. En un entorno de varios monitores, las pantallas se alinean a la perfección para una vista prácticamente sin espacios y sin distracciones.",
            precio: "$ 94.500",
            imagen: "./assets/media/productos/monitor1.webp",
            color: "Negro",
            almacenamiento: "",
            peso: "172 gr",
            categoria: "Monitores",
            stock: 10
        },
        {
            nombre: "Monitor LG 22'",
            marca: "LG",
            descripcion: "LG 22MP410-B Monitor LG Full HD (Panel VA: 1920 x 1080, AMD FreeSync™, 16:9, 250cd/m², 3000:1, NTSC 72%, 5ms (GtG)); Dynamic Action Sync, Black Stabilizer, Crosshair. Diseño prácticamente sin bordes y ajustable en inclinación.",
            precio: "$ 88.085",
            imagen: "./assets/media/productos/monitor2.jpg",
            color: "Negro",
            almacenamiento: "",
            peso: "172 gr",
            categoria: "Monitores",
            stock: 10
        },
        {
            nombre: "Auricular Gamer ST-808",
            marca: "Noga",
            descripcion: "Con ST-808 podrás disfrutar tus juegos en tu PC de una manera excepcional. Su Sonido envolvente con Power Bass te harán vivir una experiencia de audio inmersiva. Posee Micrófono omnidireccional flexible para poder comunicarte con tu compañeros de equipo.",
            precio: "$ 14.600",
            imagen: "./assets/media/productos/noga.jpg",
            color: "Negro",
            almacenamiento: "",
            peso: "172 gr",
            categoria: "Auriculares",
            stock: 10
        }
    ]
}


export default productos