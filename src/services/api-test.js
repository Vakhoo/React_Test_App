const baseURL = 'https://opentdb.com/api.php';

export class API_TEST_SERVICE {
  static async getUsersListAsync({
    amount = 10,
    difficulty = 'easy',
    category = 15,
  }) {
    try {
      const response = await fetch(
        baseURL +
          `?amount=${amount}&category=${category}&difficulty=${difficulty}&type=boolean`,
      );
      const result = await response.json();
      return result;
    } catch (err) {
      console.trace(err);
    }
  }
}
export default API_TEST_SERVICE;
