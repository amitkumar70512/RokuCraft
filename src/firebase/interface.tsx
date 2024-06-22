export interface Blog {
  id: string;
  title: string;
  author: string;
  image: string;
  content: string;
  summary: string;
  category: string[];
  doe: string;
  dop: string;
  premium: boolean;
  coins: number;
}
export interface Feedback {
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

export interface Bot {
  id: string;
  name: string;
  userName: string;
  mobile?: string;
  email: string;
  image?: string;
  password: string;
  isPremium: boolean;
  coins: number;
  isAdmin: boolean;
  doc: Date; // date of creation
  doe: Date; // date of expiry of coins
}