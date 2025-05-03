export interface UserInterface {
  name: string;
  email: string;
  image: string;
  isAdmin: boolean;
  created_at: string;
  subscribed_at: string;
  password: string;
  id: string;
  watchedVideos: string[];
  plan: string;
  _id: string;
}

export interface PlanInterface {
  name: string;
  price: number;
  duration: number;
  _id: string;
}

export type AdminUserInterface = UserInterface & {
  plan?: PlanInterface;
};
