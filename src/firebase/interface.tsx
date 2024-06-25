export interface Blog {
  blogId: string;
  title: string;
  author: string;
  image: string;
  content: string;
  summary: string;
  category: string[];
  date_of_modification: string;
  date_of_publication: string;
  isPremium: boolean;
  coins: number;
}
export interface Feedback {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface Bot {
  id: string;
  name: string;
  userName: string;
  bio?: string;
  mobile?: string;
  email: string;
  image?: string;
  password: string;
  isPremium: boolean;
  coins: Coins;
  isAdmin: boolean;
  date_of_creation: string;
}

export interface Coins {
  count: number;
  date_of_expiry: string;
}