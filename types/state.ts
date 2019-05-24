import { Person } from "~/types";

export interface RootState {
  people: Person[];
  isLoaded: boolean,
  user: string | null
}
