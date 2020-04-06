import { Model } from 'radiks'

// 共享分组，用于共享一个笔记或文件
export default class Group extends Model {
    static className = 'Group';

    static schema = {
      creator: String, //  创建者ID
      name: String, // 分组名称
      description: String, // 分组描述
      flag: { // 加密标记
        type: Boolean,
        decrypted: true
      }
    }
}
