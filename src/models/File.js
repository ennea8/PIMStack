import { Model } from 'radiks'

// 文件
// 1. 直接存储二进制
// 2. 存储链接
export default class File extends Model {
    static className = 'File';

    static schema = {
      creator: String,
      name: String,
      type: String, // 文件类型
      description: String, // 文件描述
      binary: String, // 二进制内容
      url: String, // url
      flag: { // 加密标记
        type: Boolean,
        decrypted: true
      },
      sharedGroupId: String // 如果共享，共享的群组
    }
}
