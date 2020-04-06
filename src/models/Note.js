import { Model } from 'radiks'

export default class Note extends Model {
    static className = 'Note';

    static schema = {
      creator: String,
      content: String,
      contentType: String, // 内容类型: 纯文本 富文本 markdown
      type: String, // 笔记，日记
      topicId: String, // 所属主题，对内容进行分组
      date: Date,
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
