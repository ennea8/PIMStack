import { Model } from 'radiks'

export default class Note extends Model {
    static className = 'Note';

    static schema = {
      creator: String, // 创建者ID
      content: String, // 内容
      contentType: String, // 内容类型: 1.纯文本 2.富文本 3.markdown
      type: String, // 笔记||日记
      topicId: String, // 所属主题，对内容进行分组
      flag: { // 加密标记
        type: Boolean,
        decrypted: true
      },
      sharedGroupId: String // 如果共享，共享的群组

    }
}
