import { Model } from 'radiks'

// 对内容进行分组
export default class Topic extends Model {
    static className = 'Topic';

    static schema = {
      creator: String,
      name: String,
      description: String,
      flag: {
        type: Boolean,
        decrypted: true
      },
      sharedGroup: String // 如果共享，共享的群组
    }

    static defaults = {
      content: ''
    }
}
