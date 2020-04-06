import { Model } from 'radiks'

// 对文件进行分组
export default class Directory extends Model {
    static className = 'Directory';

    static schema = {
      creator: String, // 创建者ID
      name: String, // 文件夹名字
      description: String, // 描述
      type: String, // 预留，可以标记存储方式，比如本地硬盘/第三方？
      flag: { // 加密标记
        type: Boolean,
        decrypted: true
      },
      sharedGroupId: String // 如果共享，共享的群组

    }
}
