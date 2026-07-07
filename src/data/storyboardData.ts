import { Story } from '../types';

import kancil1 from '../../assets/kancil-1.webp';
import kancil2 from '../../assets/kancil-2.webp';
import kancil3 from '../../assets/kancil-3.webp';
import kancil4 from '../../assets/kancil-4.webp';
import kancil5 from '../../assets/kancil-5.webp';
import kancil6 from '../../assets/kancil-6.webp';
import kancil7 from '../../assets/kancil-7.webp';
import kancil8 from '../../assets/kancil-8.webp';
import kancil9 from '../../assets/kancil-9.webp';
import kancil10 from '../../assets/kancil-10.webp';
import kancil11 from '../../assets/kancil-11.webp';
import kancil12 from '../../assets/kancil-12.webp';

export const STORYBOARD_CAMPAIGN: Story[] = [
  {
    id: 1,
    title: "Kancil Menyeberang Sungai",
    category: "Dongeng Tradisional (Fabel)",
    description: "Hutan tempat tinggal Kancil sedang dilanda kemarau hebat. Di seberang sungai yang deras terdapat hutan yang sangat subur, namun sungai itu dijaga oleh kawanan buaya lapar. Susunlah 12 adegan cerita Kancil menyeberang sungai ini secara kronologis!",
    explanation: "Alur fabel legendaris ini mengikuti struktur naratif lengkap dengan 12 adegan: Pengenalan (adegan 1-2) memperkenalkan habitat Kancil yang dilanda kemarau dan hutan subur di seberang sungai. Awal Konflik (adegan 3-5) menghadirkan rintangan fisik berupa arus sungai yang deras serta ancaman kawanan buaya lapar. Klimaks (adegan 6-9) menunjukkan kecerdikan Kancil saat menipu para buaya untuk berbaris serta ketegangan ketika ia melompati mereka dan hampir kehilangan keseimbangan. Resolusi (adegan 10-12) membawa Kancil mendarat dengan selamat, mengungkap tipu dayanya, dan memasuki hutan baru yang penuh makanan.",
    scenes: [
      {
        id: 0,
        title: "Hutan yang Kering",
        imageUrl: kancil1,
        narrative: "Di sebuah sudut hutan rimba yang mulai mengering karena musim kemarau panjang, hiduplah seekor Kancil yang cerdik. Sumber makanan di wilayahnya semakin menipis."
      },
      {
        id: 1,
        title: "Harapan di Seberang",
        imageUrl: kancil2,
        narrative: "Dari kejauhan, mata Kancil tertuju pada seberang sungai. Di sana membentang hutan yang hijau royo-royo, dipenuhi pohon buah yang matang dan segar."
      },
      {
        id: 2,
        title: "Sungai yang Deras",
        imageUrl: kancil3,
        narrative: "Kancil mendekati tepi sungai. Namun, harapannya seketika pupus saat melihat arus air yang sangat deras dan dalam. Mustahil baginya untuk berenang menyeberang tanpa hanyut."
      },
      {
        id: 3,
        title: "Kawanan Buaya Lapar",
        imageUrl: kancil4,
        narrative: "Tiba-tiba, permukaan air terbelah. Sepasang mata besar berdarah dingin muncul ke permukaan, disusul oleh moncong-moncong tajam yang siap menerkam. Itu adalah kawanan buaya lapar."
      },
      {
        id: 4,
        title: "Ketenangan Kancil",
        imageUrl: kancil5,
        narrative: "Alih-alih lari ketakutan, otak cerdas Kancil langsung berputar cepat. Ia menarik napas dalam-dalam, lalu melangkah maju dengan senyuman tenang, seolah tidak ada bahaya yang mengancam."
      },
      {
        id: 5,
        title: "Titah Raja Hutan",
        imageUrl: kancil6,
        narrative: "\"Hai Buaya!\" seru Kancil. \"Aku membawa titah dari Raja Hutan. Beliau ingin mengadakan pesta besar dan memintaku menghitung jumlah kalian agar semua mendapat bagian daging segar!\""
      },
      {
        id: 6,
        title: "Jembatan Buaya",
        imageUrl: kancil7,
        narrative: "Tergiur oleh janji pesta daging, pemimpin buaya langsung memerintahkan kawanannya untuk berbaris rapi memotong sungai, membentuk jembatan alami hingga ke seberang."
      },
      {
        id: 7,
        title: "Mulai Menghitung",
        imageUrl: kancil8,
        narrative: "Dengan jantung yang berdebar kencang namun wajah tetap terlihat tenang, Kancil melompat ke atas punggung buaya pertama. \"Satu!\" teriaknya lantang memulai hitungan."
      },
      {
        id: 8,
        title: "Kehilangan Keseimbangan",
        imageUrl: kancil9,
        narrative: "Kancil terus melompat dari satu punggung ke punggung lainnya. \"Dua... tiga... empat!\" Di tengah jalan, seekor buaya tampak curiga dan mencoba bergerak, membuat Kancil hampir kehilangan keseimbangan."
      },
      {
        id: 9,
        title: "Tiba di Seberang",
        imageUrl: kancil10,
        narrative: "Dengan satu lompatan terakhir yang kuat, Kancil berhasil mencapai tepi sungai seberang yang subur. Ia mendarat dengan mulus di atas hamparan rumput hijau yang empuk."
      },
      {
        id: 10,
        title: "Terima Kasih Buaya",
        imageUrl: kancil11,
        narrative: "Sambil berbalik arah, Kancil membungkuk memberi hormat dan tertawa. \"Terima kasih, para buaya yang baik! Tidak ada pesta dari Raja. Aku hanya butuh bantuan kalian untuk menyeberang!\""
      },
      {
        id: 11,
        title: "Hutan Kelimpahan",
        imageUrl: kancil12,
        narrative: "Meninggalkan kemarahan para buaya di belakangnya, Kancil melangkah masuk ke dalam hutan baru yang penuh kelimpahan. Kecerdikan sekali lagi menyelamatkan dirinya dari ancaman kelaparan."
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
        narrative: "Riko menemukan sebuah robot humanoid tua yang berdebu di sudut gudang rumah kakeknya dan mencoba membersihkan sasis logamnya yang telah usang."
      },
      {
        id: 1,
        title: "Kegagalan Sirkuit",
        imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&auto=format&fit=crop&q=80",
        narrative: "Ketika Riko memasang baterai cadangan baru, sirkuit robot mengalami hubungan arus pendek (korsleting), mengeluarkan asap hitam, dan mulai berjalan tidak terkendali."
      },
      {
        id: 2,
        title: "Kejaran di Gudang",
        imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=80",
        narrative: "Robot itu mengamuk liar, hampir menabrak lemari kaca antik kakek. Riko harus bertindak cepat menemukan sakelar darurat di punggung robot yang terus bergerak agresif."
      },
      {
        id: 3,
        title: "Penonaktifan Darurat",
        imageUrl: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&auto=format&fit=crop&q=80",
        narrative: "Riko berhasil menekan tombol darurat tepat waktu. Robot pun berhenti beroperasi secara aman, dan Riko berjanji akan merestorasi sistem robot lebih hati-hati."
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
        narrative: "Dina mendengar suara kepakan daun dan meongan kucing yang sangat lirih dari puncak pohon beringin tinggi di taman sekolah saat pulang belajar."
      },
      {
        id: 1,
        title: "Kucing Terjebak",
        imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=80",
        narrative: "Dina melihat anak kucing oranye terjebak di dahan tinggi yang mulai bergoyang tertiup angin kencang, tidak berani turun ke tanah."
      },
      {
        id: 2,
        title: "Dahan yang Retak",
        imageUrl: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?w=600&auto=format&fit=crop&q=80",
        narrative: "Dina mencoba memanjat pohon, namun dahan pijakannya retak patah. Dina terhenti menggantung di tengah pohon, tidak bisa meraih kucing dan takut untuk melompat."
      },
      {
        id: 3,
        title: "Penyelamatan Bersama",
        imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
        narrative: "Temannya membawa tangga darurat milik penjaga taman. Dina berhasil turun dengan selamat sambil mendekap erat anak kucing yang kini mendengkur hangat di pelukannya."
      }
    ]
  }
];
