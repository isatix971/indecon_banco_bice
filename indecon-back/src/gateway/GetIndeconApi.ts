import axios from 'axios';

export class GetIndeconApi {
    async getIndeconApi(){
        try {
          return await axios.get('http://www.indecon.online/last')
        } catch (error) {
          console.error(error)
        }
      }
      async getIndicator(){
        let last = await this.getIndeconApi();
        return last?.data;
      }
}