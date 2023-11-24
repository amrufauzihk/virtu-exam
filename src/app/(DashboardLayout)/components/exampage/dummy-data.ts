export interface QuestionProps {
  text: string;
  choices: string[];
  correctChoice: string;
  selectedChoice?: string;
}

export interface ExamCardProps {
  id: number;
  title: string;
  description: string;
  totalQuestion: number;
  duration: number;
  date: string;
  imageUrl: string;
  questions: QuestionProps[];
}

const subjects = [
    'Matematika',
    'Bahasa Indonesia',
    'Bahasa Inggris',
    'Pendidikan Agama dan Budi Pekerti',
    'Pendidikan Pancasila dan Kewarganegaraan (PPKn)',
    'Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)',
    'Fisika',
    'Kimia',
    'Biologi',
    'Matematika IPA',
    'Sejarah',
    'Geografi',
    'Sosiologi',
    'Ekonomi',
    'Antropologi Sosial',
    'Sastra Indonesia',
    'Sastra Inggris',
    'Bahasa Jawa',
    'Bahasa Daerah Lainnya',
    'Seni Rupa',
    'Seni Tari',
    'Seni Musik',
    'Seni Teater',
    'Ilmu Pengetahuan Alam (IPA)',
    'Ilmu Pengetahuan Sosial (IPS)',
    'Bahasa Asing Lainnya (Mandarin, Jerman, Prancis)',
    'Komputer dan Informatika',
    'Pendidikan Keagamaan',
    'Pendidikan Kewarganegaraan',
    'Kimia Dasar',
    'Biologi Dasar',
    'Akuntansi',
    'Pemrograman Komputer',
];
const generateRandomDate = () => {
    const startDate = new Date(2023, 0, 1);
    const endDate = new Date(2023, 11, 31);
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toISOString().split('T')[0];
};
  
const generateRandomChoices = () => {
    const choices = ['A', 'B', 'C', 'D'];
    const shuffledChoices = choices.sort(() => Math.random() - 0.5);
    return shuffledChoices;
};

export const dummyExamData: ExamCardProps[] = subjects.map((subject, index) => {
    const totalQuestion = Math.floor(Math.random() * 20) + 10;
    const questions: QuestionProps[] = Array.from({ length: totalQuestion }, (_, qIndex) => {
      const choices = ['Choice A', 'Choice B', 'Choice C', 'Choice D'];
      const correctChoice = choices[Math.floor(Math.random() * choices.length)];
  
      return {
        text: `Question ${qIndex + 1}: What is the answer to ${subject} question ${qIndex + 1}?`,
        choices,
        correctChoice,
      };
    });
  
    return {
      id: index + 1,
      title: `Ujian ${subject}`,
      description: `Ujian mata pelajaran ${subject} untuk tingkat SMA.`,
      duration: Math.floor(Math.random() * 120) + 30,
      imageUrl: `/images/class-image.png`,
      categories: ['SMA', 'Mata Pelajaran'],
      date: generateRandomDate(),
      totalQuestion,
      questions,
    };
});
