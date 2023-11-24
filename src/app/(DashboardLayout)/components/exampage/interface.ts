export interface DetailExam {
    id: number,
    title: string,
    description: string,
    duration: number,
    imageUrl: string,
    categories: string[],
    totalQuestion: number,
    date: string,
}