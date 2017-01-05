import { Question } from './question.model';

export interface FormData {
    id: number;
    question: Array<Question>;
    title: string;
}