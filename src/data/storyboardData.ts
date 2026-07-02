import { Story } from '../types';

export const STORYBOARD_CAMPAIGN: Story[] = [
  {
    id: 1,
    title: "Kancil Menyeberang Sungai",
    category: "Dongeng Tradisional (Fabel)",
    description: "Kancil yang cerdik ingin memakan apel manis di seberang sungai yang deras, namun sungai tersebut dihuni kawanan buaya lapar. Susunlah storyboard fabel klasik ini secara logis!",
    explanation: "Alur fabel ini mengikuti struktur linier klasik. Pengenalan mengenalkan kondisi awal kancil yang lapar dan buah di seberang. Awal Konflik menghadirkan rintangan fisik (sungai deras dan buaya pemangsa). Klimaks adalah ketegangan puncak di mana kancil melancarkan trik kecerdikan menipu buaya, dan Resolusi memberikan penyelesaian masalah kancil yang berhasil menikmati buah apel.",
    scenes: [
      {
        id: 0,
        title: "Apel di Seberang",
        imageUrl: "https://images.unsplash.com/photo-1507666405895-422efe53f0c2?w=600&auto=format&fit=crop&q=80",
        narrative: "Kancil yang lapar berdiri di tepi sungai yang dalam, memandang pohon apel merah yang berbuah sangat lebat dan ranum di seberang sungai.",
        correctTag: "pengenalan"
      },
      {
        id: 1,
        title: "Munculnya Buaya",
        imageUrl: "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?w=600&auto=format&fit=crop&q=80",
        narrative: "Kancil sadar tidak bisa berenang menyeberang sungai. Tiba-tiba, moncong buaya raksasa menyembul dari permukaan air sungai, siap menerkamnya.",
        correctTag: "konflik_awal"
      },
      {
        id: 2,
        title: "Trik Menghitung Buaya",
        imageUrl: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&auto=format&fit=crop&q=80",
        narrative: "Kancil mengelabui buaya dengan berpura-pura diperintah raja hutan membagi makanan gratis, lalu meminta buaya berbaris agar ia bisa menghitung jumlah mereka.",
        correctTag: "klimaks"
      },
      {
        id: 3,
        title: "Sampai di Tujuan",
        imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&auto=format&fit=crop&q=80",
        narrative: "Kancil melompati punggung buaya satu per satu sebagai jembatan dan berhasil sampai di seberang sungai secara selamat untuk menikmati buah apel idamannya.",
        correctTag: "resolusi"
      }
    ]
  },
  {
    id: 2,
    title: "Misteri Robot Liar Gudang",
    category: "Fiksi Ilmiah (Sci-Fi)",
    description: "Seorang anak mencoba menyalakan robot kuno peninggalan kakeknya di gudang tua. Namun, baterai baru memicu kegagalan sistem robot yang mengamuk liar. Bantu dia mengendalikan situasi!",
    explanation: "Struktur fiksi ilmiah ini bertumpu pada konsekuensi teknologi. Pengenalan mengeset objek misteri (robot tua berdebu). Awal Konflik memicu masalah utama (korsleting dan robot bergerak tak terkendali). Klimaks adalah puncak ketegangan saat barang antik terancam hancur dan anak harus menekan tombol darurat di punggung robot liar, dan Resolusi mengembalikan situasi ke kondisi aman.",
    scenes: [
      {
        id: 0,
        title: "Penemuan Robot Tua",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80",
        narrative: "Riko menemukan sebuah robot humanoid tua yang berdebu di sudut gudang rumah kakeknya dan mencoba membersihkan sasis logamnya yang telah usang.",
        correctTag: "pengenalan"
      },
      {
        id: 1,
        title: "Kegagalan Sirkuit",
        imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&auto=format&fit=crop&q=80",
        narrative: "Ketika Riko memasang baterai cadangan baru, sirkuit robot mengalami hubungan arus pendek (korsleting), mengeluarkan asap hitam, dan mulai berjalan tidak terkendali.",
        correctTag: "konflik_awal"
      },
      {
        id: 2,
        title: "Kejaran di Gudang",
        imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=80",
        narrative: "Robot itu mengamuk liar, hampir menabrak lemari kaca antik kakek. Riko harus bertindak cepat menemukan sakelar darurat di punggung robot yang terus bergerak agresif.",
        correctTag: "klimaks"
      },
      {
        id: 3,
        title: "Penonaktifan Darurat",
        imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&auto=format&fit=crop&q=80",
        narrative: "Riko berhasil menekan tombol darurat tepat waktu. Robot pun berhenti beroperasi secara aman, dan Riko berjanji akan merestorasi sistem robot lebih hati-hati.",
        correctTag: "resolusi"
      }
    ]
  },
  {
    id: 3,
    title: "Penyelamatan Anak Kucing",
    category: "Kisah Empati (Drama)",
    description: "Seekor anak kucing terjebak di dahan pohon beringin sekolah yang tinggi. Dina mencoba menyelamatkannya, tetapi situasi bertambah runyam ketika dahan pohon patah. Cari tahu solusinya!",
    explanation: "Alur drama sosial ini membangun ketegangan emosional. Pengenalan menyajikan stimulus awal (suara meongan kucing). Awal Konflik menghadirkan bahaya bagi kucing (kucing ketakutan di dahan bergoyang). Klimaks melipatgandakan bahaya karena Dina sendiri terjebak di dahan retak, dan Resolusi menghadirkan gotong-royong penyelamatan yang membuahkan akhir bahagia.",
    scenes: [
      {
        id: 0,
        title: "Suara Meongan Lirih",
        imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
        narrative: "Dina mendengar suara kepakan daun dan meongan kucing yang sangat lirih dari puncak pohon beringin tinggi di taman sekolah saat pulang belajar.",
        correctTag: "pengenalan"
      },
      {
        id: 1,
        title: "Kucing Terjebak",
        imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=80",
        narrative: "Dina melihat anak kucing oranye terjebak di dahan tinggi yang mulai bergoyang tertiup angin kencang, tidak berani turun ke tanah.",
        correctTag: "konflik_awal"
      },
      {
        id: 2,
        title: "Dahan yang Retak",
        imageUrl: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?w=600&auto=format&fit=crop&q=80",
        narrative: "Dina mencoba memanjat pohon, namun dahan pijakannya retak patah. Dina terhenti menggantung di tengah pohon, tidak bisa meraih kucing dan takut untuk melompat.",
        correctTag: "klimaks"
      },
      {
        id: 3,
        title: "Penyelamatan Bersama",
        imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
        narrative: "Temannya membawa tangga darurat milik penjaga taman. Dina berhasil turun dengan selamat sambil mendekap erat anak kucing yang kini mendengkur hangat di pelukannya.",
        correctTag: "resolusi"
      }
    ]
  }
];
