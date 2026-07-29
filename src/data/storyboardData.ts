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
    title: "Level 1: Kancil & Kawanan Buaya (Awal Pertemuan)",
    category: "Fabel - Tingkat Dasar (4 Adegan)",
    description: "Musim kemarau melanda hutan Kancil. Dari kejauhan terlihat hutan seberang yang subur, namun sungai deras dipenuhi buaya lapar menghalangi jalannya. Susun 4 adegan pertama ini!",
    explanation: "Pada level dasar ini, struktur cerita berfokus pada Pengenalan dan Munculnya Rintangan Utama: Pengenalan kondisi hutan kering (adegan 1), harapan di seberang sungai (adegan 2), tantangan arus deras (adegan 3), serta kemunculan kawanan buaya (adegan 4).",
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
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: Trik Cerdik Sang Kancil (Rencana & Aksi)",
    category: "Fabel - Tingkat Menengah (8 Adegan)",
    description: "Kancil mulai menjalankan rencana cerdiknya dengan mengelabui buaya berdalih titah Raja Hutan. Susun 8 adegan alur cerita hingga Kancil mulai menyeberang!",
    explanation: "Level menengah ini menguji pemahaman alur dari pengenalan rintangan, aksi taktik Kancil (menyampaikan titah palsu), pembuatan jembatan buaya, hingga keberanian Kancil melompat dan menghitung buaya pertama.",
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
      }
    ]
  },
  {
    id: 3,
    title: "Level 3: Petualangan Lengkap Kancil (Petualangan Utuh)",
    category: "Fabel - Tingkat Ahli (12 Adegan)",
    description: "Ini adalah tantangan puncak! Susunlah alur lengkap 12 adegan dari awal Kancil mencari makan, melintasi rintangan, momen mendebarkan di tengah sungai, hingga berhasil lolos ke seberang!",
    explanation: "Alur fabel legendaris ini mengikuti struktur naratif lengkap 12 adegan: Pengenalan (1-2), Awal Konflik & Rintangan (3-5), Taktik & Klimaks (6-9) ketika Kancil hampir kehilangan keseimbangan di tengah sungai, serta Resolusi & Akhir Bahagia (10-12) di hutan kelimpahan.",
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
  }
];

