import { Model } from 'radiks'

// 文件
// 1. 直接存储二进制
// 2. 存储链接
export default class File extends Model {
    static className = 'File';

    static schema = {
      creator: String,
      name: String,
      type: String,
      description: String,
      binary: String, // 二进制内容
      url: String, // url
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
