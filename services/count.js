import axios from "axios";

export async function getDataCount() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/count`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
