import { Model } from 'radiks'

// 对笔记/日记进行分组
export default class Topic extends Model {
    static className = 'Topic';

    static schema = {
      creator: String, // 创建者ID
      title: String, // 标题
      description: String, // 简介
      flag: { // 加密标记
        type: Boolean,
        decrypted: true
      },
      sharedGroupId: String // 如果共享，共享的群组
    }
}
