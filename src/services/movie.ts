import { MovieList } from "./../redux/features/movieSlic";
import { baseUrl, getAuthUser } from "../config/url";
import axios from "axios";
const token = getAuthUser();
export async function movieListData() {
  return await axios.get<MovieList[]>(`${baseUrl}/movie`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
}

export async function movieSearchData(query: string) {
  return await axios.get<MovieList[]>(`${baseUrl}/movie/title/${query}`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
}

type AddMovieResponse = {
  access_token: string;
  user: {  title: string;
    description: string;
    releaseYear: string;
    length: number;
    rating: number;
    imageUrl: string; };
};

export async function addMovies(item: { title: string;
  description: string;
  releaseYear: string;
  length: number;
  rating: number;
  imageUrl: string; }) {
  try {
    // 👇️ const data: LoginUserResponse
    const { data } = await axios.post<AddMovieResponse>(
      `${baseUrl}/movie`,
      item,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    // console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}