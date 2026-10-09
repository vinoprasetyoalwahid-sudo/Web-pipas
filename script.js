/* =========================================================
   MATTERQUEST - SCRIPT.JS
   Bagian ini mengatur isi materi, navigasi, kuis, dan skor.
   ========================================================= */

/* 1. DATA MATERI
   Setiap objek mewakili satu bab. Teksnya ditampilkan otomatis
   oleh fungsi renderMaterials() di halaman Materi. */
const materials = [
  {
    title: "Mengenal Zat dan Materi",
    subtitle: "Pengertian, massa, volume, dan sifat zat",
    sections: [
      {
        heading: "Apa itu zat atau materi?",
        body: "Materi adalah segala sesuatu yang mempunyai massa dan menempati ruang. Materi dapat ditemukan dalam benda di sekitar kita, misalnya air, udara, batu, dan kayu."
      },
      {
        heading: "Massa dan volume",
        body: "Massa menunjukkan banyaknya materi dalam suatu benda dan biasanya diukur dalam gram atau kilogram. Volume menunjukkan besar ruang yang ditempati benda dan dapat diukur dalam mL, L, atau m³."
      },
      {
        heading: "Sifat fisika dan sifat kimia",
        body: "Sifat fisika dapat diamati tanpa mengubah identitas zat, seperti warna, massa jenis, titik leleh, dan titik didih. Sifat kimia menjelaskan kemampuan zat membentuk zat baru, misalnya besi mudah berkarat atau kayu dapat terbakar."
      },
      {
        heading: "Sifat intensif dan ekstensif",
        body: "Sifat intensif tidak bergantung pada jumlah zat, contohnya suhu dan massa jenis. Sifat ekstensif bergantung pada jumlah zat, contohnya massa dan volume."
      }
    ],
    example: "Air dalam gelas memiliki massa dan menempati ruang. Warna air merupakan sifat fisika, sedangkan kemampuan bahan tertentu untuk bereaksi dengan asam merupakan sifat kimia."
  },
  {
    title: "Wujud Zat dan Perubahannya",
    subtitle: "Padat, cair, gas, dan perubahan wujud",
    sections: [
      {
        heading: "Tiga wujud zat yang umum",
        body: "Zat padat memiliki bentuk dan volume relatif tetap. Zat cair memiliki volume relatif tetap tetapi bentuk mengikuti wadah. Gas tidak memiliki bentuk maupun volume tetap dan mengisi ruang yang ditempatinya."
      },
      {
        heading: "Partikel zat",
        body: "Pada zat padat, partikel tersusun rapat dan bergetar di tempat. Pada zat cair, partikel lebih bebas bergerak. Pada gas, partikel berjauhan dan bergerak bebas."
      },
      {
        heading: "Enam perubahan wujud",
        body: "Mencair: padat menjadi cair. Membeku: cair menjadi padat. Menguap: cair menjadi gas. Mengembun: gas menjadi cair. Menyublim: padat menjadi gas. Mengkristal atau deposisi: gas menjadi padat."
      },
      {
        heading: "Peran kalor",
        body: "Mencair, menguap, dan menyublim umumnya menyerap kalor. Membeku, mengembun, dan mengkristal umumnya melepaskan kalor. Perubahan wujud tidak menghasilkan jenis zat baru."
      }
    ],
    example: "Es batu yang mencair menjadi air adalah perubahan wujud mencair. Uap air yang membentuk titik-titik air pada permukaan gelas dingin adalah mengembun."
  },
  {
    title: "Klasifikasi dan Komposisi Materi",
    subtitle: "Zat tunggal, unsur, senyawa, dan campuran",
    sections: [
      {
        heading: "Zat tunggal",
        body: "Zat tunggal memiliki komposisi yang tetap. Zat tunggal dibedakan menjadi unsur dan senyawa."
      },
      {
        heading: "Unsur",
        body: "Unsur adalah zat tunggal yang tersusun dari satu jenis atom dan tidak dapat diuraikan menjadi zat lebih sederhana melalui reaksi kimia biasa. Contoh: besi (Fe), tembaga (Cu), dan oksigen (O₂)."
      },
      {
        heading: "Senyawa",
        body: "Senyawa terbentuk dari dua atau lebih jenis unsur yang berikatan secara kimia dengan perbandingan tertentu. Contoh: air murni (H₂O) dan karbon dioksida (CO₂)."
      },
      {
        heading: "Campuran homogen dan heterogen",
        body: "Campuran homogen memiliki komposisi seragam dan tampak sebagai satu fase, contohnya larutan garam. Campuran heterogen memiliki komposisi yang tidak seragam atau beberapa fase, contohnya minyak dan air."
      },
      {
        heading: "Larutan, koloid, dan suspensi",
        body: "Larutan merupakan campuran homogen. Koloid memiliki partikel terdispersi yang lebih besar daripada partikel larutan dan dapat menghamburkan cahaya. Suspensi memiliki partikel yang dapat mengendap, misalnya pasir dalam air."
      }
    ],
    example: "Air garam yang tercampur merata adalah larutan. Susu merupakan contoh koloid. Pasir yang dicampur air merupakan suspensi."
  },
  {
    title: "Perubahan Fisika dan Kimia",
    subtitle: "Membedakan perubahan yang menghasilkan zat baru",
    sections: [
      {
        heading: "Perubahan fisika",
        body: "Perubahan fisika mengubah bentuk, ukuran, atau wujud zat tanpa membentuk zat baru. Contohnya es mencair, kertas dipotong, dan gula larut dalam air."
      },
      {
        heading: "Perubahan kimia",
        body: "Perubahan kimia menghasilkan satu atau lebih zat baru dengan sifat yang berbeda. Contohnya besi berkarat, kayu terbakar, dan makanan membusuk."
      },
      {
        heading: "Tanda-tanda reaksi kimia",
        body: "Tanda yang dapat diamati antara lain perubahan warna, terbentuknya gas, terbentuknya endapan, perubahan suhu, atau munculnya cahaya. Namun, satu tanda saja tidak selalu menjadi bukti mutlak; konteks percobaan tetap perlu diperhatikan."
      },
      {
        heading: "Perubahan biologi",
        body: "Dalam pembelajaran, perubahan biologi sering dibahas sebagai perubahan yang melibatkan aktivitas makhluk hidup, misalnya fermentasi oleh mikroorganisme atau pembusukan makanan. Proses tersebut dapat melibatkan reaksi kimia."
      }
    ],
    example: "Lilin yang meleleh mengalami perubahan fisika. Sumbu lilin yang terbakar mengalami perubahan kimia."
  },
  {
    title: "Pemisahan Campuran",
    subtitle: "Metode memisahkan komponen campuran",
    sections: [
      {
        heading: "Filtrasi atau penyaringan",
        body: "Filtrasi memisahkan padatan yang tidak larut dari cairan menggunakan penyaring. Contoh: memisahkan pasir dari air."
      },
      {
        heading: "Penguapan dan kristalisasi",
        body: "Penguapan dapat digunakan untuk memperoleh zat terlarut dari larutan. Kristalisasi membentuk kristal zat dari larutan, misalnya pembuatan kristal garam."
      },
      {
        heading: "Distilasi atau penyulingan",
        body: "Distilasi memanfaatkan perbedaan titik didih. Komponen yang menguap kemudian didinginkan agar mengembun dan dapat ditampung."
      },
      {
        heading: "Kromatografi",
        body: "Kromatografi memisahkan komponen berdasarkan perbedaan pergerakannya melalui fase diam dan fase gerak. Contoh sederhana adalah pemisahan warna tinta pada kertas."
      },
      {
        heading: "Pemisahan dengan magnet dan dekantasi",
        body: "Magnet dapat menarik bahan magnetik seperti besi dari campuran tertentu. Dekantasi memisahkan cairan dari endapan dengan menuangkan cairan secara hati-hati."
      }
    ],
    example: "Pasir dari air dapat dipisahkan dengan filtrasi, sedangkan serpihan besi dari pasir dapat dipisahkan menggunakan magnet."
  }
];

/* 2. DATA SOAL KUIS
   correct: indeks jawaban benar (0=A, 1=B, 2=C, 3=D).
   explanation: penjelasan singkat yang muncul setelah menjawab. */
const questions = [
  {
    category: "Bab 1 • Mengenal Zat",
    question: "Manakah pernyataan yang paling tepat tentang materi?",
    options: ["Semua yang terlihat oleh mata", "Segala sesuatu yang memiliki massa dan menempati ruang", "Hanya benda padat yang memiliki massa", "Segala sesuatu yang menghasilkan cahaya"],
    correct: 1,
    explanation: "Materi adalah segala sesuatu yang memiliki massa dan menempati ruang, termasuk udara yang tidak terlihat."
  },
  {
    category: "Bab 1 • Mengenal Zat",
    question: "Manakah yang merupakan contoh sifat fisika suatu zat?",
    options: ["Besi dapat berkarat", "Kayu dapat terbakar", "Air membeku pada suhu tertentu", "Makanan mengalami pembusukan"],
    correct: 2,
    explanation: "Titik beku merupakan sifat fisika karena dapat diamati tanpa mengubah air menjadi jenis zat lain."
  },
  {
    category: "Bab 1 • Mengenal Zat",
    question: "Manakah contoh sifat ekstensif?",
    options: ["Massa jenis", "Titik didih", "Warna", "Massa"],
    correct: 3,
    explanation: "Massa bergantung pada banyaknya materi yang dimiliki benda, sehingga termasuk sifat ekstensif."
  },
  {
    category: "Bab 2 • Wujud Zat",
    question: "Mengapa gas dapat mengisi seluruh ruang wadahnya?",
    options: ["Partikelnya bergerak bebas dan berjauhan", "Partikelnya tidak bergerak", "Partikelnya tersusun sangat rapat dan tetap", "Gas selalu berubah menjadi cair"],
    correct: 0,
    explanation: "Partikel gas berjauhan dan bergerak bebas, sehingga menyebar memenuhi ruang yang tersedia."
  },
  {
    category: "Bab 2 • Wujud Zat",
    question: "Perubahan wujud dari padat menjadi cair disebut ...",
    options: ["Membeku", "Mengembun", "Mencair", "Menyublim"],
    correct: 2,
    explanation: "Mencair adalah perubahan wujud dari padat menjadi cair, seperti es batu yang menjadi air."
  },
  {
    category: "Bab 2 • Wujud Zat",
    question: "Uap air berubah menjadi titik-titik air pada permukaan gelas dingin. Peristiwa ini disebut ...",
    options: ["Menguap", "Mengembun", "Mengkristal", "Menyublim"],
    correct: 1,
    explanation: "Mengembun adalah perubahan wujud gas menjadi cair ketika uap air kehilangan kalor."
  },
  {
    category: "Bab 2 • Wujud Zat",
    question: "Kapur barus yang lama-kelamaan mengecil di udara mengalami ...",
    options: ["Membeku", "Mencair", "Mengembun", "Menyublim"],
    correct: 3,
    explanation: "Menyublim adalah perubahan wujud padat langsung menjadi gas tanpa melewati fase cair."
  },
  {
    category: "Bab 3 • Klasifikasi Materi",
    question: "Zat tunggal yang tersusun dari satu jenis atom disebut ...",
    options: ["Unsur", "Senyawa", "Larutan", "Suspensi"],
    correct: 0,
    explanation: "Unsur tersusun dari satu jenis atom, misalnya tembaga (Cu) dan besi (Fe)."
  },
  {
    category: "Bab 3 • Klasifikasi Materi",
    question: "Air murni (H₂O) tergolong senyawa karena ...",
    options: ["Terdiri dari satu jenis atom saja", "Merupakan campuran yang dapat disaring", "Hidrogen dan oksigen berikatan secara kimia", "Komposisinya selalu berubah-ubah"],
    correct: 2,
    explanation: "Air murni tersusun dari hidrogen dan oksigen yang berikatan secara kimia dengan perbandingan tertentu."
  },
  {
    category: "Bab 3 • Klasifikasi Materi",
    question: "Campuran air dan minyak termasuk ...",
    options: ["Unsur", "Campuran heterogen", "Senyawa murni", "Campuran homogen"],
    correct: 1,
    explanation: "Air dan minyak tidak tercampur merata dan membentuk lapisan, sehingga merupakan campuran heterogen."
  },
  {
    category: "Bab 3 • Klasifikasi Materi",
    question: "Manakah contoh suspensi?",
    options: ["Air gula yang jernih", "Udara bersih", "Air garam yang tercampur merata", "Pasir yang dicampur air"],
    correct: 3,
    explanation: "Pasir tidak larut dalam air dan dapat mengendap, sehingga campurannya termasuk suspensi."
  },
  {
    category: "Bab 4 • Perubahan Zat",
    question: "Manakah peristiwa yang termasuk perubahan fisika?",
    options: ["Besi berkarat", "Kayu terbakar", "Es batu mencair", "Buah membusuk"],
    correct: 2,
    explanation: "Es mencair hanya berubah wujud dari padat menjadi cair. Zatnya tetap air."
  },
  {
    category: "Bab 4 • Perubahan Zat",
    question: "Manakah peristiwa yang menghasilkan zat baru?",
    options: ["Besi berkarat", "Kertas dipotong", "Air membeku", "Gula larut dalam air"],
    correct: 0,
    explanation: "Besi bereaksi dengan oksigen dan air sehingga terbentuk karat, yaitu zat dengan sifat berbeda dari besi semula."
  },
  {
    category: "Bab 5 • Pemisahan Campuran",
    question: "Metode yang tepat untuk memisahkan pasir dari air adalah ...",
    options: ["Distilasi", "Filtrasi", "Kromatografi", "Kristalisasi"],
    correct: 1,
    explanation: "Filtrasi menggunakan penyaring untuk menahan padatan yang tidak larut, sementara air melewati penyaring."
  },
  {
    category: "Bab 5 • Pemisahan Campuran",
    question: "Metode yang memisahkan komponen berdasarkan perbedaan titik didih adalah ...",
    options: ["Filtrasi", "Pemisahan magnetik", "Dekantasi", "Distilasi"],
    correct: 3,
    explanation: "Distilasi memanfaatkan perbedaan titik didih untuk menguapkan komponen, lalu mengembunkan uapnya."
  }
];

/* 3. MENGAMBIL ELEMEN HTML
   Variabel di bawah menghubungkan JavaScript dengan elemen HTML. */
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("[data-page]");
const materialList = document.getElementById("material-list");

const quizIntro = document.getElementById("quiz-intro");
const quizArea = document.getElementById("quiz-area");
const quizResult = document.getElementById("quiz-result");
const startQuizButton = document.getElementById("start-quiz");
const restartQuizButton = document.getElementById("restart-quiz");
const nextQuestionButton = document.getElementById("next-question");

const questionCategory = document.getElementById("question-category");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const answerOptions = document.getElementById("answer-options");
const feedbackBox = document.getElementById("feedback-box");
const quizProgress = document.getElementById("quiz-progress");
const answerStatus = document.getElementById("answer-status");

/* 4. VARIABEL KEADAAN KUIS */
let currentQuestionIndex = 0;
let correctAnswers = 0;
let hasAnswered = false;
let answerHistory = [];

/* 5. NAVIGASI HALAMAN
   Menyembunyikan semua halaman lalu menampilkan halaman yang dipilih. */
function showPage(pageId) {
  pages.forEach(function(page) {
    page.classList.toggle("active", page.id === pageId);
  });

  document.querySelectorAll(".nav-link").forEach(function(link) {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Tombol dengan atribut data-page akan membuka halaman sesuai nilainya. */
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});

/* 6. MENAMPILKAN MATERI
   Materi dibuat dari array materials agar isi dan tampilan terpisah. */
function renderMaterials() {
  materialList.innerHTML = "";

  materials.forEach(function(material, index) {
    const card = document.createElement("article");
    card.className = "material-card";

    let sectionsHTML = "";
    material.sections.forEach(function(section) {
      sectionsHTML += `
        <h4>${section.heading}</h4>
        <p>${section.body}</p>
      `;
    });

    card.innerHTML = `
      <button class="material-toggle" aria-expanded="false">
        <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="chapter-heading">
          <strong>${material.title}</strong>
          <small>${material.subtitle}</small>
        </span>
        <span class="toggle-symbol">+</span>
      </button>
      <div class="material-content">
        ${sectionsHTML}
        <div class="example-box"><strong>Contoh:</strong> ${material.example}</div>
      </div>
    `;

    const toggleButton = card.querySelector(".material-toggle");
    toggleButton.addEventListener("click", function() {
      const isOpen = card.classList.toggle("open");
      toggleButton.setAttribute("aria-expanded", String(isOpen));
    });

    materialList.appendChild(card);
  });
}

/* 7. MEMULAI ATAU MENGULANG KUIS
   Semua nilai diatur kembali ke kondisi awal. */
function startQuiz() {
  currentQuestionIndex = 0;
  correctAnswers = 0;
  hasAnswered = false;
  answerHistory = [];

  quizIntro.classList.add("hidden");
  quizResult.classList.add("hidden");
  quizArea.classList.remove("hidden");

  renderQuestion();
}

/* 8. MENAMPILKAN SATU SOAL DAN PILIHAN JAWABAN */
function renderQuestion() {
  const question = questions[currentQuestionIndex];
  hasAnswered = false;

  questionCategory.textContent = question.category;
  questionCounter.textContent =
    `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;
  questionText.textContent = question.question;
  quizProgress.style.width =
    `${(currentQuestionIndex / questions.length) * 100}%`;

  answerOptions.innerHTML = "";
  feedbackBox.className = "feedback-box hidden";
  feedbackBox.innerHTML = "";
  answerStatus.textContent = "Pilih satu jawaban.";
  nextQuestionButton.disabled = true;
  nextQuestionButton.textContent =
    currentQuestionIndex === questions.length - 1
      ? "Lihat Hasil →"
      : "Soal Berikutnya →";

  question.options.forEach(function(option, index) {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    `;
    button.addEventListener("click", function() {
      checkAnswer(index);
    });
    answerOptions.appendChild(button);
  });
}

/* 9. MEMERIKSA JAWABAN
   Jawaban dikunci setelah dipilih agar tidak bisa dihitung berkali-kali. */
function checkAnswer(selectedIndex) {
  if (hasAnswered) return;

  hasAnswered = true;
  const question = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) {
    correctAnswers++;
  }

  answerHistory.push({
    question: question.question,
    selected: selectedIndex,
    correct: question.correct,
    isCorrect: isCorrect,
    explanation: question.explanation,
    options: question.options
  });

  const optionButtons = answerOptions.querySelectorAll(".answer-option");
  optionButtons.forEach(function(button, index) {
    button.disabled = true;

    if (index === question.correct) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  feedbackBox.classList.remove("hidden");
  feedbackBox.classList.add(isCorrect ? "is-correct" : "is-wrong");

  const heading = isCorrect ? "✓ Jawaban benar!" : "✕ Belum tepat.";
  feedbackBox.innerHTML = `<strong>${heading}</strong><span>${question.explanation}</span>`;

  answerStatus.textContent = isCorrect
    ? "Bagus! Kamu mendapat poin untuk soal ini."
    : "Pelajari pembahasan, lalu lanjutkan.";
  nextQuestionButton.disabled = false;
}

/* 10. BERPINDAH KE SOAL BERIKUTNYA ATAU HASIL AKHIR */
function goToNextQuestion() {
  if (!hasAnswered) return;

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

/* 11. MENAMPILKAN SKOR DAN ULASAN JAWABAN */
function showResults() {
  quizArea.classList.add("hidden");
  quizResult.classList.remove("hidden");

  const score = Math.round((correctAnswers / questions.length) * 100);
  const wrongAnswers = questions.length - correctAnswers;

  document.getElementById("final-score").textContent = score;
  document.getElementById("correct-count").textContent = correctAnswers;
  document.getElementById("wrong-count").textContent = wrongAnswers;
  document.getElementById("total-count").textContent = questions.length;

  let message = "";
  if (score >= 90) {
    message = "Luar biasa! Pemahamanmu tentang zat dan perubahannya sangat baik.";
  } else if (score >= 75) {
    message = "Bagus! Kamu sudah memahami sebagian besar materi. Terus tingkatkan.";
  } else if (score >= 60) {
    message = "Cukup baik. Baca kembali beberapa bab dan coba kuis sekali lagi.";
  } else {
    message = "Jangan menyerah. Pelajari materi terlebih dahulu, lalu coba lagi.";
  }
  document.getElementById("result-message").textContent = message;

  const review = document.getElementById("answer-review");
  review.innerHTML = "<h3>Review Jawaban</h3>";

  answerHistory.forEach(function(item, index) {
    const selectedText = item.options[item.selected];
    const correctText = item.options[item.correct];
    const reviewItem = document.createElement("article");
    reviewItem.className = "review-item";

    reviewItem.innerHTML = `
      <strong>${index + 1}. ${item.question}</strong>
      <p class="${item.isCorrect ? "review-good" : "review-bad"}">
        Jawabanmu: ${String.fromCharCode(65 + item.selected)}. ${selectedText}
        ${item.isCorrect ? " — Benar" : " — Belum tepat"}
      </p>
      ${item.isCorrect ? "" : `<p>Jawaban yang benar: ${String.fromCharCode(65 + item.correct)}. ${correctText}</p>`}
      <p>Pembahasan: ${item.explanation}</p>
    `;
    review.appendChild(reviewItem);
  });

  quizProgress.style.width = "100%";
}

/* 12. MENGHUBUNGKAN TOMBOL KUIS DENGAN FUNGSI */
startQuizButton.addEventListener("click", startQuiz);
restartQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", goToNextQuestion);

/* 13. MENJALANKAN FUNGSI AWAL SAAT WEBSITE DIBUKA */
renderMaterials();
