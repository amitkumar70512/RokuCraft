export interface Blog {
  author: string;
  image: string;
  content: string;
  summary: string;
  keywords: string[];
  doe: Date;
  dop: Date;
  premium: boolean;
  coins: number;
}
export interface Feedback {
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}
